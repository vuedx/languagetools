import { ComponentInfo, createFullAnalyzer } from '@vuedx/analyze';
import {
  isElementNode,
  isSimpleExpressionNode,
  isComponentNode,
  isPlainElementNode,
  traverseFast,
} from '@vuedx/template-ast-types';
import {
  isNumber,
  RenderFunctionTextDocument,
  VirtualTextDocument,
  VueTextDocument,
  isVirtualFile,
  getContainingFile,
} from '@vuedx/vue-virtual-textdocument';
import QuickLRU from 'quick-lru';
import { findTemplateNodeAt } from '../ast-ops';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { isNotNull, computeIdentifierReplacement } from '../utils';
import { noop } from './noop';
import * as Path from 'path';

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

export function createTemplateLanguageServer({
  helpers: h,
  service,
  context,
}: CreateLanguageServiceOptions): TS.LanguageService {
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
  const getComponentInfo = createCachedAnalyzer();

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

      const key = `getSemanticDiagnostics::${document.version}::${fileName}`;

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

      const key = `getSuggestionDiagnostics::${document.version}::${fileName}`;
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

      const key = `getSyntacticDiagnostics::${document.version}::${fileName}`;
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
          // TODO: Resolve path with TS.
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

          // local name in import statement
          const importReplacement = computeIdentifierReplacement(importText, component.source.localName);

          const scriptFileName = document.container.getDocumentFileName('script');
          let otherEdits: TS.RenameLocation[] = [];

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
              otherEdits.push(
                ...fromScript.filter(
                  (edit) =>
                    getContainingFile(edit.fileName) === vueFileName &&
                    !edit.fileName.endsWith('_render.tsx') &&
                    (edit.textSpan.start < start || end < edit.textSpan.start)
                )
              );
            }
          }

          if (component.source.exportName && !importReplacement.prefixText.trim().endsWith(' as')) {
            importReplacement.prefixText = importReplacement.prefixText + component.source.exportName + ' as ';
          }

          edits.push({
            fileName: document.container.fsPath,
            textSpan: { start: component.source.loc.start.offset, length: importText.length },
            ...importReplacement,
          });

          // if component is registered with an alias.
          if (component.source.localName !== component.name) {
            edits.push({
              fileName: document.container.fsPath,
              textSpan: { start: component.loc.start.offset, length: component.loc.source.length },
              ...computeIdentifierReplacement(component.loc.source, component.name),
            });
          }

          // other components using same import
          info.components
            .filter(
              (current) =>
                current.name !== component.name &&
                current.source.moduleName === component.source.moduleName &&
                current.source.exportName === component.source.exportName &&
                current.source.localName === component.source.localName
            )
            .forEach((component) => {
              if (component.source.localName === component.name) {
                const start = component.loc.start.offset;
                otherEdits = otherEdits.filter((edit) => edit.textSpan.start !== start);

                edits.push({
                  fileName: document.container.fsPath,
                  textSpan: { start: component.loc.start.offset, length: component.loc.source.length },
                  prefixText: /[a-z$_][a-z0-9$_]+/i.test(component.name)
                    ? component.name + ': '
                    : `'${component.name}': `,
                });
              }
            });

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

          edits.push(...otherEdits);
        }
      }

      return edits;
    },

    getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences) {
      return [];
    },

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      const document = getRenderDoc(fileName);

      // TODO: ...

      if (isNumber(positionOrRange)) {
        const offset = document.getGeneratedOffsetAt(positionOrRange);
        if (!offset) return [];
        positionOrRange = offset.offset;
      } else {
        const offset = document.getGeneratedOffsetAt(positionOrRange.pos);
        if (!offset) return [];
        const diff = positionOrRange.end - positionOrRange.pos;
        positionOrRange.pos = offset.offset;
        positionOrRange.end = offset.offset + Math.min(offset.length, Math.max(1, diff));
      }

      return service.getApplicableRefactors(fileName, positionOrRange, preferences);
    },
  };
}
