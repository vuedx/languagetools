import { isNumber, VirtualTextDocument, isVirtualFile, isVueFile } from '@vuedx/vue-virtual-textdocument';
import { TS, PluginConfig } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { noop } from './noop';
import { createTemplateLanguageServer } from './template';
import { getComponentName } from '../utils';

type GetElementType<T> = T extends (infer U)[] ? U : T;
export function createVueLanguageServer(options: CreateLanguageServiceOptions): TS.LanguageService {
  const template = createTemplateLanguageServer(options);
  const { helpers: h, service: script, context } = options;

  function isFeatureEnabled<K extends keyof PluginConfig['features']>(
    featureName: K,
    checkFor: boolean | GetElementType<PluginConfig['features'][K]> = true
  ): boolean {
    const feature = context.config.features[featureName];

    return Array.isArray(feature) ? feature.includes(checkFor) : feature === checkFor;
  }

  function choose(document: VirtualTextDocument) {
    return h.isRenderFunctionDocument(document) ? template : script;
  }

  function getTextSpan(document: VirtualTextDocument, span: TS.TextSpan): TS.TextSpan | null {
    if (h.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start);
      if (result) return { start: result.offset, length: result.length };

      return null;
    }

    return span;
  }

  return {
    ...noop,

    organizeImports(scope, formatOptions, preferences) {
      if (!isFeatureEnabled('organizeImports')) return [];

      const document = h.getVueDocument(scope.fileName);
      if (document) {
        const virtual = document.getDocument('scriptSetup') || document.getDocument('script');
        if (virtual) {
          return script.organizeImports({ ...scope, fileName: virtual.fsPath }, formatOptions, preferences);
        }
      }

      return [];
    },

    getSemanticDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'semantic')) return [];

      const document = h.getVueDocument(fileName);
      const diagnostics: TS.Diagnostic[] = [];
      if (document) {
        ['script', '_render'].forEach((selector) => {
          const virtual = document.getDocument(selector);

          if (virtual) {
            const results = choose(virtual).getSemanticDiagnostics(virtual.fsPath);
            diagnostics.push(...results);
          }
        });
      }

      return diagnostics;
    },

    getQuickInfoAtPosition(fileName, position) {
      if (!isFeatureEnabled('quickInfo')) return;

      // TODO: Provide better quick info for components and props.
      const document = h.getDocumentAt(fileName, position);
      if (document) return choose(document).getQuickInfoAtPosition(document.fsPath, position);
    },

    getSuggestionDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'suggestion')) return [];

      const document = h.getVueDocument(fileName);

      const diagnostics: TS.DiagnosticWithLocation[] = [];
      if (document) {
        ['script', '_render'].forEach((selector) => {
          const virtual = document.getDocument(selector);

          if (virtual) diagnostics.push(...choose(virtual).getSuggestionDiagnostics(virtual.fsPath));
        });
      }

      return diagnostics;
    },

    getSyntacticDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'syntactic')) return [];
      const document = h.getVueDocument(fileName);

      const diagnostics: TS.DiagnosticWithLocation[] = [];
      if (document) {
        ['script', '_render'].forEach((selector) => {
          const virtual = document.getDocument(selector);

          if (virtual) diagnostics.push(...choose(virtual).getSyntacticDiagnostics(virtual.fsPath));
        });
      }

      return diagnostics;
    },

    getRenameInfo(fileName, position, options) {
      if (!isFeatureEnabled('rename')) return { canRename: false, localizedErrorMessage: 'Rename feature disabled.' };

      const document = h.getDocumentAt(fileName, position);

      if (!document) {
        return {
          canRename: false,
          localizedErrorMessage: 'Cannot find file',
        };
      }

      return choose(document).getRenameInfo(document.fsPath, position, options);
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      if (!isFeatureEnabled('rename')) return [];

      const document = h.getVueDocument(fileName);
      if (!document) return;
      const block = document.blockAt(position);
      if (!block) return;
      const result: TS.RenameLocation[] = [];
      if (block.type === 'template' || block.type === 'script') {
        const fromTemplate = template.findRenameLocations(
          document.getDocumentFileName('_render')!,
          position,
          findInStrings,
          findInComments
        );
        if (fromTemplate) result.push(...fromTemplate);
      }

      if (block.type === 'script') {
        const fromScript = template.findRenameLocations(
          document.getDocumentFileName('script')!,
          position,
          findInStrings,
          findInComments
        );
        if (fromScript) result.push(...fromScript);
      }

      result.sort((a, b) => a.textSpan.start - b.textSpan.start);

      return result;
    },

    getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences) {
      if (!isFeatureEnabled('rename')) return [];

      const document = h.getVueDocument(oldFilePath);
      const result: TS.FileTextChanges[] = [];

      if (document) {
        const doc = document.getDocument('_module');
        result.push(
          ...script.getEditsForFileRename(
            doc.fsPath,
            doc.fsPath.replace(oldFilePath, newFilePath),
            formatOptions,
            preferences
          )
        );

        const visited = new Set<string>();
        result.forEach((item) => {
          if (isVirtualFile(item.fileName) || isVueFile(item.fileName)) {
            const render = h.getVueDocument(item.fileName)?.getDocument('_render');
            if (render && !visited.has(render.fsPath)) {
              visited.add(render.fsPath);
              result.push(...template.getEditsForFileRenameIn(render.fsPath, oldFilePath, newFilePath));
            }
          }
        });
      }

      return result;
    },

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      if (!isFeatureEnabled('refactor')) return [];

      const document = h.getDocumentAt(fileName, isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos);
      const document2 = h.getDocumentAt(fileName, isNumber(positionOrRange) ? positionOrRange : positionOrRange.end);

      if (document && document === document2) {
        return choose(document).getApplicableRefactors(document.fsPath, positionOrRange, preferences);
      }

      return [];
    },

    getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences) {
      if (!isFeatureEnabled('refactor')) return;

      const document = h.getDocumentAt(fileName, isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos);
      const document2 = h.getDocumentAt(fileName, isNumber(positionOrRange) ? positionOrRange : positionOrRange.end);

      if (document && document === document2) {
        return choose(document).getEditsForRefactor(
          document.fsPath,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences
        );
      }
    },
  };
}
