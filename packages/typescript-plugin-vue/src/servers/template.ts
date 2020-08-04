import { isSimpleIdentifier } from '@vue/compiler-core';
import { ComponentInfo, createFullAnalyzer } from '@vuedx/analyze';
import {
  isComponentNode,
  isDirectiveNode,
  isPlainElementNode,
  isSimpleExpressionNode,
  traverseFast,
} from '@vuedx/template-ast-types';
import {
  getContainingFile,
  isNumber,
  RenderFunctionTextDocument,
  VirtualTextDocument,
  VueTextDocument,
  isVirtualFile,
} from '@vuedx/vue-virtual-textdocument';
import * as Path from 'path';
import QuickLRU from 'quick-lru';
import { findTemplateNodeAt, findTemplateNodeFor, findTemplateNodesIn } from '../ast-ops';
import { PluginContext } from '../context';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import {
  computeIdentifierReplacement,
  isNotNull,
  getComponentName,
  getPaddingLength,
  indent,
  getFilenameForNewComponent,
} from '../utils';
import { noop } from './noop';
import deIndent from 'de-indent';

function createCachedAnalyzer() {
  const cache = new QuickLRU<string, ComponentInfo>({ maxSize: 1000 });
  const analyzer = createFullAnalyzer([], { babel: { plugins: ['typescript', 'jsx'] } });

  return (document: VueTextDocument) => {
    const key = `${document.version}::${document.fsPath}`;
    if (cache.has(key)) return cache.get(key)!;
    const info = analyzer.analyze(document.getText(), document.fsPath);
    cache.set(key, info);
    return info;
  };
}

interface AdditionalFunctions {
  getEditsForFileRenameIn(fileName: string, oldFilePath: string, newFilePath: string): TS.FileTextChanges[];
}

export const getComponentInfo = createCachedAnalyzer();
export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
export function createTemplateLanguageServer({
  helpers: h,
  service,
  context,
}: CreateLanguageServiceOptions): TS.LanguageService & AdditionalFunctions {
  function getRenderDoc(fileName: string) {
    return h.getDocument(fileName)! as RenderFunctionTextDocument;
  }

  function getTemplateDoc(fileName: string) {
    return getRenderDoc(fileName).container.getDocument('template');
  }

  function getTextSpan(document: VirtualTextDocument, span: TS.TextSpan): TS.TextSpan {
    if (h.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start);
      if (result) return { start: result.offset, length: result.length };
    }

    return span;
  }

  const cache = new QuickLRU<string, any>({ maxSize: 1000 });

  return {
    ...noop,

    getQuickInfoAtPosition(fileName, position) {
      const document = getRenderDoc(fileName);
      if (!document) return;

      const loc = document.getGeneratedOffsetAt(position);
      if (!loc) return;
      const result = service.getQuickInfoAtPosition(fileName, loc.offset);

      if (result) {
        const textSpan = getTextSpan(document, result.textSpan);

        if (textSpan) {
          result.textSpan = textSpan;

          return result;
        }
      }
    },

    getSemanticDiagnostics(fileName) {
      const document = getRenderDoc(fileName);
      if (!document) return [];

      const key = `getSemanticDiagnostics::${document.container.version}::${fileName}`;

      if (cache.has(key)) return cache.get(key);

      const diagnostics = service
        .getSemanticDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(diagnostic.start!, diagnostic.length || 1);
            context.log(
              `TRY RENDER => ${diagnostic.file?.fileName} --- ${diagnostic.messageText} -- ${JSON.stringify(position)}`
            );
            if (!position) return;

            diagnostic.start = position.offset;
            diagnostic.length = position.length;
          }

          return diagnostic;
        })
        .filter(isNotNull);

      cache.set(key, diagnostics);

      return diagnostics;
    },

    getSuggestionDiagnostics(fileName) {
      const document = getRenderDoc(fileName);
      if (!document) return [];

      const key = `getSuggestionDiagnostics::${document.container.version}::${fileName}`;
      if (cache.has(key)) return cache.get(key);

      const diagnostics = service
        .getSuggestionDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(diagnostic.start!, diagnostic.length || 1);

            if (!position) return;

            diagnostic.start = position.offset;
            diagnostic.length = position.length;
          }

          return diagnostic;
        })
        .filter(isNotNull);
      cache.set(key, diagnostics);
      return diagnostics;
    },

    getSyntacticDiagnostics(fileName) {
      const document = getRenderDoc(fileName);
      if (!document) return [];

      const key = `getSyntacticDiagnostics::${document.container.version}::${fileName}`;
      if (cache.has(key)) return cache.get(key);
      const diagnostics = service
        .getSyntacticDiagnostics(fileName)
        .map((diagnostic) => {
          if (Number.isInteger(diagnostic.start)) {
            const position = document.findExpression(diagnostic.start!, diagnostic.length || 1);

            if (!position) return;

            diagnostic.start = position.offset;
            diagnostic.length = position.length;
          }

          return diagnostic;
        })
        .filter(isNotNull);
      cache.set(key, diagnostics);
      return diagnostics;
    },

    getRenameInfo(fileName, position, options) {
      const document = getRenderDoc(fileName);
      const { node, ancestors } = findTemplateNodeAt(document.ast, position);

      if (isSimpleExpressionNode(node)) {
        const offset = document.getGeneratedOffsetAt(position)?.offset;
        if (isNumber(offset)) {
          const result = service.getRenameInfo(fileName, offset, options);
          if (result.canRename) {
            result.triggerSpan = getTextSpan(document, result.triggerSpan);
            if (result.displayName === '$event') {
              return {
                canRename: false,
                localizedErrorMessage: '$event is builtin variable, it cannot be renamed.',
              };
            }
          }

          return result;
        }
      } else if (isComponentNode(node)) {
        const info = getComponentInfo(document.container);
        const tagName = node.tag;
        const component = info.components.find((component) => component.aliases.includes(tagName));
        if (component) {
          return {
            canRename: true,
            displayName: tagName,
            fullDisplayName: tagName,
            kind: context.typescript.ScriptElementKind.unknown,
            kindModifiers: 'tagName',
            triggerSpan: {
              start: node.loc.start.offset + 1,
              length: node.tag.length,
            },
            fileToRename: undefined,
          };
        }
      } else if (isPlainElementNode(node)) {
        return {
          canRename: true,
          displayName: node.tag,
          fullDisplayName: node.tag,
          kind: context.typescript.ScriptElementKind.unknown,
          kindModifiers: 'tagName',
          triggerSpan: {
            start: node.loc.start.offset + 1,
            length: node.tag.length,
          },
        };
      }

      return {
        canRename: false,
        localizedErrorMessage: 'You cannot rename this element.',
      };
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      const document = getRenderDoc(fileName);
      const { node, ancestors } = findTemplateNodeAt(document.ast, position);
      const edits: TS.RenameLocation[] = [];

      if (!node) {
        // TODO: Handle renames in script block.
        return;
      }

      if (isSimpleExpressionNode(node)) {
        const offset = document.getGeneratedOffsetAt(position)?.offset;

        if (isNumber(offset)) {
          return service.findRenameLocations(fileName, offset, findInStrings, findInComments);
        }
      }

      if (isPlainElementNode(node)) {
        edits.push({
          fileName: document.container.fsPath,
          textSpan: { start: node.loc.start.offset + 1, length: node.tag.length },
        });

        if (!node.isSelfClosing) {
          edits.push({
            fileName: document.container.fsPath,
            textSpan: {
              start: node.loc.start.offset + node.loc.source.lastIndexOf('</' + node.tag) + 2,
              length: node.tag.length,
            },
          });
        }
      } else if (isComponentNode(node)) {
        const info = getComponentInfo(document.container);
        const tagName = node.tag;
        const component = info.components.find((component) => component.aliases.includes(tagName));
        if (component) {
          const importText = component.source.loc.source;
          const importReplacement = computeIdentifierReplacement(importText, component.source.localName);
          const scriptFileName = document.container.getDocumentFileName('script');
          let autoEditsInScriptBlock: TS.RenameLocation[] = [];

          // find edit for local name except in import statement.
          if (scriptFileName) {
            const { prefixText } = computeIdentifierReplacement(component.loc.source, component.source.localName);
            const fromScript = service.findRenameLocations(
              scriptFileName,
              component.loc.start.offset + prefixText.length,
              findInStrings,
              findInComments
            );
            const start = component.source.loc.start.offset;
            const end = component.source.loc.end.offset;
            const vueFileName = document.container.fsPath;
            if (fromScript) {
              autoEditsInScriptBlock.push(
                ...fromScript.filter(
                  (edit) =>
                    getContainingFile(edit.fileName) === vueFileName &&
                    !edit.fileName.endsWith('_render.tsx') &&
                    (edit.textSpan.start < start || end < edit.textSpan.start)
                )
              );
            }
          }

          // add alias to named import.
          if (component.source.exportName && !importReplacement.prefixText.trim().endsWith(' as')) {
            importReplacement.prefixText = importReplacement.prefixText + component.source.exportName + ' as ';
          }

          // update import statement.
          edits.push({
            fileName: document.container.fsPath,
            textSpan: { start: component.source.loc.start.offset, length: importText.length },
            ...importReplacement,
          });

          // if component is registered with an alias, then update to reflect in template.
          if (component.source.localName !== component.name) {
            edits.push({
              fileName: document.container.fsPath,
              textSpan: { start: component.loc.start.offset, length: component.loc.source.length },
              ...computeIdentifierReplacement(component.loc.source, component.name),
            });
          }

          // update tags in template
          traverseFast(document.ast, (node) => {
            if (isComponentNode(node)) {
              if (component.aliases.includes(node.tag)) {
                edits.push({
                  fileName: document.container.fsPath,
                  textSpan: { start: node.loc.start.offset + 1, length: node.tag.length },
                });

                if (!node.isSelfClosing) {
                  edits.push({
                    fileName: document.container.fsPath,
                    textSpan: {
                      start: node.loc.start.offset + node.loc.source.lastIndexOf('</' + node.tag) + 2,
                      length: node.tag.length,
                    },
                  });
                }
              }
            }
          });

          edits.push(...autoEditsInScriptBlock);
        }
      }

      return edits;
    },

    getApplicableRefactors(fileName, position, preferences) {
      const document = getRenderDoc(fileName);
      const { node, ancestors } = isNumber(position)
        ? findTemplateNodeAt(document.ast, position)
        : findTemplateNodeFor(document.ast, position.pos, position.end);
      const refactors: TS.ApplicableRefactorInfo[] = [];
      const parent = ancestors[ancestors.length - 1]?.node;

      const addRefactor = (refactor: TS.ApplicableRefactorInfo) => {
        if (!refactor.actions.length) refactor.actions.push({ name: refactor.name, description: refactor.description });
        refactors.push(refactor);
      };

      // 1. Extract as computed property or method
      if (isSimpleExpressionNode(node)) {
        let canBeComputedProperty = isSimpleIdentifier(node.content.trim());
        let canBeMethod = isSimpleIdentifier(node.content.trim());
        if (isDirectiveNode(parent)) {
          if (parent.name === 'on') canBeComputedProperty = false;
          else if (parent.name === 'for') {
            const match = forAliasRE.exec(node.content);
            if (match) {
              const offset = node.loc.start.offset + node.loc.source.lastIndexOf(match[2]);

              if (position >= offset) {
                canBeComputedProperty = canBeMethod = !isSimpleIdentifier(match[2].trim());
              } else {
                canBeComputedProperty = canBeMethod = false;
              }
            } else {
              canBeComputedProperty = canBeMethod = false;
            }
          } else if (parent.name === 'slot') {
            canBeComputedProperty = canBeMethod = false;
          }
        }

        if (canBeComputedProperty) {
          canBeComputedProperty = Object.entries(node.scope.bindings).every((value) => value === null);
        }

        if (canBeComputedProperty) {
          addRefactor({
            name: 'computedRef',
            description: 'Extract to computed ref in setup() function',
            inlineable: true,
            actions: [],
          });

          addRefactor({
            name: 'computed',
            description: 'Extract to computed property',
            inlineable: true,
            actions: [],
          });
        }

        if (canBeMethod) {
          addRefactor({
            name: 'function',
            description: 'Extract to function in setup() function',
            inlineable: true,
            actions: [],
          });
          addRefactor({
            name: 'method',
            description: 'Extract to method',
            inlineable: true,
            actions: [],
          });
        }
      }

      // 2. Extract as component
      const nodes = isNumber(position)
        ? findTemplateNodesIn(document.ast, position, position)
        : findTemplateNodesIn(document.ast, position.pos, position.end);
      if (nodes.length) {
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

        const project = context.projectService.getDefaultProjectForFile(
          context.typescript.server.toNormalizedPath(document.fsPath),
          false
        );
        if (project) {
          context.config.directories
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
        addRefactor(extractAsComponent);
      }
      // 3. Extract as style
      // 3.1. Extract style attribute as class/id rule
      // 3.2. Combine tailwind/et.el. framework classes to class/id rule

      return refactors;
    },

    getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences) {
      const document = getRenderDoc(fileName)!;
      switch (refactorName) {
        case 'component':
          {
            const project = context.projectService.getDefaultProjectForFile(
              context.typescript.server.toNormalizedPath(document.fsPath),
              false
            )!;
            const path =
              actionName === ':current'
                ? Path.dirname(fileName)
                : context.config.directories.find((directory) => directory.path)!.path;
            const directoryName = Path.isAbsolute(path) ? path : Path.resolve(project.getCurrentDirectory(), path);
            const componentFileName = getFilenameForNewComponent(context, directoryName);
            const nodes = isNumber(positionOrRange)
              ? findTemplateNodesIn(document.ast, positionOrRange, positionOrRange)
              : findTemplateNodesIn(document.ast, positionOrRange.pos, positionOrRange.end);
            const identifiers = nodes.flatMap((node) =>
              node.scope.identifiers.filter((identifier) => node.scope.bindings[identifier] === null)
            );
            const template = nodes.map((node) => node.loc.source).join('');
            // TODO: detect types of props.
            const script: string[] = [`import { defineComponent } from 'vue'`];
            const components = new Set<string>();
            nodes.forEach((node) =>
              traverseFast(node, (node) => {
                if (isComponentNode(node)) components.add(node.tag);
              })
            );
            const info = getComponentInfo(document.container);
            const options = {
              components: `components: ${info.components.reduce((text, { name, source }) => {
                if (components.has(name)) {
                  script.push(
                    `import ${
                      source.exportName
                        ? `{ ${source.localName === source.exportName ? `` : `${source.exportName} as `}${
                            source.localName
                          } }`
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
              }, '')},`,
              props: `props: [${identifiers.map((identifier) => `'${identifier}'`).join(', ')}],`,
            };
            script.push(`export default defineComponent({\n  ${options.props}\n  ${options.components}\n})`);

            const code = `<script>\n${script.join('\n')}\n</script>\n\n<template>\n${indent(
              deIndent(template)
            )}\n</template>\n`;

            const { name, changes, renameLocation } = getImportEditForComponent(
              document.container,
              info,
              componentFileName
            );

            changes.push({
              newText: `<${name} ${identifiers.map((identifer) => `:${identifer}="${identifer}"`).join(' ')}/>`,
              span: {
                start: nodes[0].loc.start.offset,
                length: nodes.reduce((len, node) => len + node.loc.source.length, 0),
              },
            });

            context.createVueDocument(componentFileName, code);

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
          break;
      }

      return undefined;
    },

    getEditsForFileRenameIn(fileName, oldFilePath, newFilePath) {
      console.log(`>>>>>> getEditsForFileRename ${oldFilePath} -> ${newFilePath}`);
      const result: TS.FileTextChanges[] = [];
      const document = getRenderDoc(fileName);

      if (document) {
        const name = getComponentName(oldFilePath);
        const newName = getComponentName(newFilePath);

        const info = getComponentInfo(document.container);
        const component = info.components.find((component) => component.name === name);
        if (component) {
          const script = document.container.getDocument('script');
          if (script) {
            const position = Math.max(component.loc.end.offset - 2, component.loc.start.offset);
            const renameInfo = service.getRenameInfo(script.fsPath, position);
            if (renameInfo.canRename) {
              const edits = service.findRenameLocations(script.fsPath, position, false, false);
              if (edits) {
                const fileName = document.container.fsPath;
                result.push({
                  fileName: fileName,
                  textChanges: edits
                    .filter((edit) => isVirtualFile(edit.fileName) && getContainingFile(edit.fileName) === fileName)
                    .map((edit) => ({ span: edit.textSpan, newText: newName })),
                });

                const textChanges: TS.TextChange[] = [];

                // update tags in template
                traverseFast(document.ast, (node) => {
                  if (isComponentNode(node)) {
                    if (component.aliases.includes(node.tag)) {
                      textChanges.push({
                        newText: newName,
                        span: { start: node.loc.start.offset + 1, length: node.tag.length },
                      });

                      if (!node.isSelfClosing) {
                        textChanges.push({
                          newText: newName,
                          span: {
                            start: node.loc.start.offset + node.loc.source.lastIndexOf('</' + node.tag) + 2,
                            length: node.tag.length,
                          },
                        });
                      }
                    }
                  }
                });

                result.push({ fileName, textChanges: textChanges });
              }
            }
          }
        }
      }

      return result;
    },
  };
}

function getImportEditForComponent(document: VueTextDocument, info: ComponentInfo, fileName: string) {
  const changes: TS.TextChange[] = [];
  const name = getComponentName(fileName);
  const { script } = document.descriptor;
  const relativeFileName = `./${Path.relative(Path.dirname(document.fsPath), fileName)}`;
  let renameLocation = 0;
  if (script && !script.setup) {
    const newText = `\nimport ${name} from '${relativeFileName}';`;
    renameLocation = script.loc.start.offset + newText.indexOf(relativeFileName);
    changes.push({
      newText,
      span: { start: script.loc.start.offset, length: 0 },
    });
    const options = info.options;
    const components = options.properties['components'];
    if (components) {
      const start = components.loc.start.offset + 1;
      const padding = getPaddingLength(components.loc.source, 1);
      changes.push({
        newText: ' '.repeat(padding) + `${name},\n`,
        span: { start, length: 0 },
      });
    } else if (options) {
      const start = options.loc.start.offset + 1;
      const padding = getPaddingLength(options.loc.source, 1);
      changes.push({
        newText: ' '.repeat(padding) + `\ncomponents: { ${name} },\n`,
        span: { start, length: 0 },
      });
    } else {
      // TODO: convert setup() to object
    }
  } else {
    const newText = `<component src="./${Path.relative(Path.dirname(document.fsPath), fileName)}" />\n\n`;
    renameLocation = newText.indexOf(relativeFileName);
    changes.push({
      newText,
      span: { start: 0, length: 0 },
    });
  }

  return { name, changes, renameLocation };
}
