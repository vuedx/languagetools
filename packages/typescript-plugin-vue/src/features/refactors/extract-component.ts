import { ComponentInfo } from '@vuedx/analyze';
import { isComponentNode, isDirectiveNode, isSimpleExpressionNode, traverseFast } from '@vuedx/template-ast-types';
import { RenderFunctionTextDocument, VueTextDocument } from '@vuedx/vue-virtual-textdocument';
// @ts-ignore - no types in module
import deIndent from 'de-indent';
import Path from 'path';
import { TS } from '../../interfaces';
import { LanguageServiceOptions } from '../../types';
import { getComponentName, getFilenameForNewComponent, getPaddingLength, indent } from '../../utils';
import { RefactorProvider } from './abstract';

export const RefactorExtractComponent: RefactorProvider = {
  version: '*',
  findRefactors(config, fileName, position, preferences) {
    const document = config.helpers.getRenderDoc(fileName);
    if (document) {
      const nodes = findNodes(config, document, position);

      if (nodes.length) {
        let isExtractSupported = true;
        const modelExpressions = new Set();
        nodes.forEach((node) =>
          traverseFast(node, (node) => {
            if (isDirectiveNode(node) && node.name === 'model') {
              if (isSimpleExpressionNode(node.exp)) {
                modelExpressions.add(node.exp.content.trim());
              }
            }
          })
        );

        if (modelExpressions.size > 1) {
          const version = parseInt(config.context.getVueVersion(document.container.fsPath));
          if (version < 3) isExtractSupported = false;
        }

        if (isExtractSupported) {
          const extractAsComponent: TS.ApplicableRefactorInfo = {
            name: 'component',
            description: 'Extract to component',
            inlineable: true,
            actions: [
              {
                name: ':current',
                description: 'Extract to component in current directory',
              },
            ],
          };

          const project = config.context.projectService.getDefaultProjectForFile(
            config.context.typescript.server.toNormalizedPath(document.fsPath),
            false
          );
          if (project) {
            config.context.config.directories
              .filter((dir) => dir.kind === 'component')
              .forEach((config) => {
                extractAsComponent.actions.push({
                  name: config.name,
                  description: `Extract to component in ${config.name} directory`,
                });
              });
          }

          if (extractAsComponent.actions.length > 4) {
            extractAsComponent.inlineable = false;
          }

          return [extractAsComponent];
        }
      }
    }

    return [];
  },
  applyRefactor(config, fileName, options, position, refactorName, actionName, preferences) {
    const document = config.helpers.getRenderDoc(fileName)!;
    if (document && refactorName === 'component') {
      const project = config.context.projectService.getDefaultProjectForFile(
        config.context.typescript.server.toNormalizedPath(document.fsPath),
        false
      )!;
      const path =
        actionName === ':current'
          ? Path.dirname(fileName)
          : config.context.config.directories.find((directory) => directory.path)!.path;
      const info = config.helpers.getComponentInfo(document.container);
      const directoryName = Path.isAbsolute(path) ? path : Path.resolve(project.getCurrentDirectory(), path);
      const componentFileName = getFilenameForNewComponent(
        config.context,
        directoryName,
        new Set(info.components.map((component) => component.name))
      );
      const nodes = findNodes(config, document, position);
      const identifiers = Array.from(
        new Set(nodes.flatMap((node) => node.scope.identifiers.filter((id) => node.scope.getBinding(id) !== node)))
      );
      const template = document.container
        .getDocument('template')!
        .getText()
        .substring(nodes[0].loc.start.offset, nodes[nodes.length - 1].loc.end.offset);
      // TODO: detect types of props.
      const script: string[] = [`import { defineComponent } from 'vue'`];
      const components = new Set<string>();
      const models = new Set<string>();
      nodes.forEach((node) =>
        traverseFast(node, (node) => {
          if (isComponentNode(node)) components.add(node.tag);
          else if (isDirectiveNode(node) && node.name === 'model') {
            if (isSimpleExpressionNode(node.exp)) {
              node.exp.scope.globals.forEach((identifier) => {
                models.add(identifier);
              });
            }
          }
        })
      );

      const options = {
        components: `components: {${info.components.reduce((text, { name, source }) => {
          if (components.has(name)) {
            script.push(
              `import ${
                source.exportName
                  ? `{ ${source.localName === source.exportName ? `` : `${source.exportName} as `}${source.localName} }`
                  : `${source.localName}`
              } from '${source.moduleName}'`
            );
            return (
              text +
              `${name === source.localName ? `` : `${/^[a-z0-9]$/i.test(name) ? `'${name}'` : name}: `}${
                source.localName
              }, `
            );
          }

          return text;
        }, '')}},`,
        props: `props: [${identifiers.map((identifier) => `'${identifier}'`).join(', ')}],`,
      };
      script.push(`export default defineComponent({\n  ${options.props}\n  ${options.components}\n})`);
      const code = `<script>\n${script.join('\n')}\n</script>\n\n<template>\n${formatTemplate(
        template
      )}\n</template>\n`;

      let { name, changes, renameLocation, isScript } = getImportEditForComponent(
        document.container,
        info,
        componentFileName
      );

      const templateReplacement = {
        newText: `<${name} ${identifiers
          .map((identifer) => `${models.has(identifer) ? 'v-model' : ''}:${identifer}="${identifer}"`)
          .join(' ')}/>`,
        span: {
          start: nodes[0].loc.start.offset,
          length: template.length,
        },
      };

      changes.push(templateReplacement);

      // Template is before script, need to adjust rename trigger location.
      if (isScript && templateReplacement.span.start < renameLocation) {
        renameLocation = renameLocation - template.length + templateReplacement.newText.length;
      }

      config.context.createVueDocument(componentFileName, code);

      return {
        renameFilename: document.container.fsPath,
        renameLocation,
        edits: [
          {
            isNewFile: true,
            fileName: componentFileName,
            textChanges: [
              {
                span: {
                  start: 0,
                  length: 0,
                },
                newText: code,
              },
            ],
          },
          {
            fileName: document.container.fsPath,
            textChanges: changes,
          },
        ],
      };
    }

    return undefined;
  },
};
function formatTemplate(template: string) {
  const index = template.indexOf('\n');

  if (index >= 0) {
    const firstLine = template.substr(0, index + 1);
    const otherLines = template.substr(index + 1);
    return indent(firstLine + deIndent(otherLines));
  }

  return indent(template);
}

function findNodes(
  config: LanguageServiceOptions,
  document: RenderFunctionTextDocument,
  position: number | TS.TextRange
) {
  return document.ast
    ? typeof position === 'number'
      ? config.helpers.findTemplateNodesIn(document.ast, position, position)
      : config.helpers.findTemplateNodesIn(document.ast, position.pos, position.end)
    : [];
}

function getImportEditForComponent(document: VueTextDocument, info: ComponentInfo, fileName: string) {
  const changes: TS.TextChange[] = [];
  const name = getComponentName(fileName);
  const { script } = document.descriptor;
  const relativeFileName = `./${Path.relative(Path.dirname(document.fsPath), fileName)}`;
  let renameLocation = 0;
  let isScript = false;

  if (script && !script.setup) {
    isScript = true;
    const newText = `\nimport ${name} from '${relativeFileName}';`;
    renameLocation = script.loc.start.offset + newText.indexOf(relativeFileName) + relativeFileName.length - 5;
    changes.push({
      newText,
      span: { start: script.loc.start.offset, length: 0 },
    });

    if (info.options?.properties['components']) {
      const components = info.options.properties['components'];
      const start = components.loc.start.offset + 1;
      const padding = getPaddingLength(components.loc.source, 1);
      changes.push({
        newText: components.loc.source.substr(1, padding) + `${name},`,
        span: { start, length: 0 },
      });
    } else if (info.options) {
      const start = info.options.loc.start.offset + 1;
      const padding = getPaddingLength(info.options.loc.source, 1);
      changes.push({
        newText: info.options.loc.source.substr(1, padding) + `components: { ${name} },`,
        span: { start, length: 0 },
      });
    } else if (info.setup) {
      changes.push(
        {
          newText: `{\n  components: { ${name} },\n setup: `,
          span: { start: info.setup.loc.start.offset, length: 0 },
        },
        {
          newText: `\n}`,
          span: { start: info.setup.loc.end.offset, length: 0 },
        }
      );
    } else {
      changes.push({
        newText: `\nexport default { components: { ${name} } };\n`,
        span: { start: script.loc.end.offset, length: 0 },
      });
    }
  } else if (script?.setup) {
    const newText = `<component src="./${Path.relative(Path.dirname(document.fsPath), fileName)}" />\n\n`;
    renameLocation = newText.indexOf(relativeFileName);
    changes.push({
      newText,
      span: { start: 0, length: 0 },
    });
  } else {
    isScript = false;
    const newText = `<script>\nimport ${name} from '${relativeFileName}';\nexport default { components: { ${name} } }\n</script>\n\n`;
    renameLocation = newText.indexOf(relativeFileName) + relativeFileName.length - 5;
    changes.push({
      newText,
      span: { start: 0, length: 0 },
    });

    // if <script></script>  is there, it should be removed.
    const m = /^<script[^>]*><\/script>/m.exec(document.getText());
    if (m) {
      changes.push({ newText: '', span: { start: m.index, length: m[0].length } });
    }
  }

  return { name, changes, renameLocation, isScript };
}
