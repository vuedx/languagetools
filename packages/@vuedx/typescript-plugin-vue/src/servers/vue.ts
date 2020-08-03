import { TS } from '../interfaces';
import { createTemplateLanguageServer } from './template';
import { VirtualTextDocument, isNumber, isVirtualFile, getContainingFile } from 'vue-virtual-textdocument/src';
import { CreateLanguageServiceOptions } from '../types';
import { noop } from './noop';

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
  };
}
