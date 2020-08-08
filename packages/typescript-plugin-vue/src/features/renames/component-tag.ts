import { ComponentNode } from '@vue/compiler-core';
import { isComponentNode, traverseFast } from '@vuedx/template-ast-types';
import { getContainingFile, isVirtualFile, isVueFile } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../../interfaces';
import { computeIdentifierReplacement, getComponentName } from '../../utils';
import { RenameProvider } from './abstract';

export const RenameComponentTag: RenameProvider = {
  version: '*',
  canRename(config, fileName, position, options) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);
    if (isComponentNode(node) && isPositionInTagName(position, node)) {
      const info = config.helpers.getComponentInfo(document.container);
      const name = node.tag;
      const component = info.components.find((component) => component.name === name);

      if (
        component &&
        component.kind === 'script' &&
        !component.source.exportName &&
        component.source.moduleName.endsWith('.vue') &&
        getComponentName(component.source.moduleName) === name
      ) {
        // Ask to rename file instead.
        const newPosition = component.source.loc.start.offset + component.source.loc.source.lastIndexOf(name);
        const result = config.service.getRenameInfo(document.container.getDocumentFileName('script'), newPosition, {
          allowRenameOfImportPath: true,
        });

        if (result.canRename) {
          if (node.isSelfClosing || position < node.loc.start.offset + node.tag.length + 1) {
            result.triggerSpan = {
              start: node.loc.start.offset + 1,
              length: node.tag.length,
            };
          } else {
            result.triggerSpan = {
              start: node.loc.start.offset + node.loc.source.lastIndexOf('</') + 2,
              length: node.tag.length,
            };
          }
        }

        return result;
      }

      if (!component) {
        return {
          canRename: false,
          localizedErrorMessage: 'Global component (with unknown source file) cannot be renamed.',
        };
      }

      return {
        canRename: true,
        displayName: node.tag,
        fullDisplayName: node.tag,
        kind: config.context.typescript.ScriptElementKind.unknown,
        kindModifiers: 'componentTagName',
        fileToRename: undefined,
        triggerSpan: {
          start: node.loc.start.offset + 1,
          length: node.tag.length,
        },
      };
    }
  },
  applyRename(config, fileName, position, findInStrings, findInComments) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);
    if (isComponentNode(node) && isPositionInTagName(position, node)) {
      const info = config.helpers.getComponentInfo(document.container);
      const name = node.tag;
      const component = info.components.find((component) => component.name === name);
      if (
        component &&
        component.kind === 'script' &&
        !component.source.exportName &&
        component.source.moduleName.endsWith('.vue') &&
        getComponentName(component.source.moduleName) === name
      ) {
        const newPosition = component.source.loc.start.offset + component.source.loc.source.lastIndexOf(name);
        console.log('Apply Rename Hijacked');
        // Ask to rename file instead.
        return config.service
          .findRenameLocations(
            document.container.getDocumentFileName('script'),
            newPosition,
            findInStrings,
            findInComments
          )
          ?.slice();
      }
      const renameLocations: TS.RenameLocation[] = [];
      if (component) {
        if (component.kind === 'script') {
          // if component is registered with an alias, then update to reflect in template.
          if (component.source.localName !== component.name) {
            renameLocations.push({
              fileName: document.container.fsPath,
              textSpan: { start: component.loc.start.offset, length: component.loc.source.length },
              ...computeIdentifierReplacement(component.loc.source, component.name),
            });
          }
          // update the import statement.
          else {
            const { prefixText } = computeIdentifierReplacement(component.loc.source, component.source.localName);
            const locations = config.service.findRenameLocations(
              document.container.getDocumentFileName('script'),
              component.loc.start.offset + prefixText.length,
              findInStrings,
              findInComments
            );
            const start = component.source.loc.start.offset;
            const end = component.source.loc.end.offset;
            if (locations) {
              const vueFileName = document.container.fsPath;
              locations.forEach((location) => {
                if (
                  isVirtualFile(location.fileName) &&
                  getContainingFile(location.fileName) === vueFileName &&
                  !location.fileName.endsWith('_render.tsx') &&
                  (location.textSpan.start < start || end < location.textSpan.start)
                ) {
                  // rename locations except in render file and component registration location.
                  renameLocations.push(location);
                }
              });
            }
            const importReplacement = computeIdentifierReplacement(
              component.source.loc.source,
              component.source.localName
            );
            // add alias to named import.
            if (component.source.exportName && !importReplacement.prefixText.trim().endsWith(' as')) {
              importReplacement.prefixText = importReplacement.prefixText + component.source.exportName + ' as ';
            }

            renameLocations.unshift({
              fileName: document.container.fsPath,
              textSpan: { start: component.source.loc.start.offset, length: component.source.loc.source.length },
              ...importReplacement,
            });
          }
        } else {
          // TODO: Support <component /> block.
        }

        traverseFast(document.ast, (node) => {
          if (isComponentNode(node)) {
            if (component.aliases.includes(node.tag)) {
              renameLocations.push({
                fileName: document.container.fsPath,
                textSpan: { start: node.loc.start.offset + 1, length: node.tag.length },
              });

              if (!node.isSelfClosing) {
                renameLocations.push({
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
      }

      return renameLocations;
    }
    return undefined;
  },
  applyFileRename(config, containerFile, oldFileName, newFileName, options, preferences) {
    const fileTextChanges: TS.FileTextChanges[] = [];
    if (isVueFile(oldFileName)) {
      const document = config.helpers.getRenderDoc(containerFile);

      if (document) {
        const name = getComponentName(oldFileName);
        const newName = getComponentName(newFileName);
        const info = config.helpers.getComponentInfo(document.container);
        const component = info.components.find((component) => component.name === name);
        if (component) {
          const script = document.container.getDocument('script');
          if (script) {
            const position = Math.max(component.loc.end.offset - 2, component.loc.start.offset);
            const renameInfo = config.service.getRenameInfo(script.fsPath, position);
            if (renameInfo.canRename) {
              const edits = config.service.findRenameLocations(script.fsPath, position, false, false);
              if (edits) {
                const fileName = document.container.fsPath;
                fileTextChanges.push({
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

                fileTextChanges.push({ fileName, textChanges: textChanges });
              }
            }
          }
        }
      }
    }

    if (fileTextChanges.length) return fileTextChanges;
  },
};

function isPositionInTagName(position: number, node: ComponentNode) {
  return (
    // In start tag.
    position <= node.loc.start.offset + node.tag.length ||
    // In end tag.
    (!node.isSelfClosing && node.loc.start.offset + node.loc.source.lastIndexOf('</') <= position)
  );
}
