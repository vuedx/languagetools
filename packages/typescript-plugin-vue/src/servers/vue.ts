import { isNumber, VirtualTextDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { noop } from './noop';
import { createTemplateLanguageServer } from './template';

export function createVueLanguageServer(options: CreateLanguageServiceOptions): TS.LanguageService {
  const template = createTemplateLanguageServer(options);
  const { helpers: h, service: script, context } = options;
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
      const document = h.getVueDocument(scope.fileName);
      if (!document) return [];

      const virtual = document.getDocument('scriptSetup') || document.getDocument('script');

      return script.organizeImports({ ...scope, fileName: virtual.fsPath }, formatOptions, preferences);
    },

    getSemanticDiagnostics(fileName) {
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
      const document = h.getDocumentAt(fileName, position);
      if (document) return choose(document).getQuickInfoAtPosition(document.fsPath, position);
    },

    getSuggestionDiagnostics(fileName) {
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
      const document = h.getDocumentAt(fileName, position);

      if (!document) {
        return {
          canRename: false,
          localizedErrorMessage: '',
        };
      }

      return choose(document).getRenameInfo(document.fsPath, position, options);
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      const document = h.getDocumentAt(fileName, position);
      if (!document) return;

      return choose(document).findRenameLocations(document.fsPath, position, findInStrings, findInComments);
    },

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      const document = h.getDocumentAt(fileName, isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos);
      if (document) {
        return choose(document).getApplicableRefactors(document.fsPath, positionOrRange, preferences);
      }

      return [];
    },

    getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences) {
      const document = h.getVueDocument(oldFilePath);

      if (document) {
        const doc = document.getDocument('_module');

        return script.getEditsForFileRename(
          doc.fsPath,
          doc.fsPath.replace(oldFilePath, newFilePath),
          formatOptions,
          preferences
        );
      }

      return [];
    },
  };
}
