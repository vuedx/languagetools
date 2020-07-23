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
  function getTextSpan(document: VirtualTextDocument, span: TS.TextSpan): TS.TextSpan {
    if (h.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start);
      if (result) return { start: result.offset, length: result.length };
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

      return choose(document)
        .findRenameLocations(document.fsPath, position, findInStrings, findInComments)
        ?.map((item) => {
          options.context.log('xxx.findRenameLocations ' + JSON.stringify(item));

          if (isVirtualFile(item.fileName)) {
            item.originalContextSpan = item.contextSpan;
            item.originalTextSpan = item.textSpan;
            item.originalFileName = item.fileName;

            const virtual = h.getDocument(item.fileName) as VirtualTextDocument;

            item.fileName = virtual.container.fsPath;
            item.textSpan = getTextSpan(virtual, item.textSpan);
            if (item.contextSpan) item.contextSpan = getTextSpan(virtual, item.contextSpan);
          }

          options.context.log('yyy.findRenameLocations ' + JSON.stringify(item));

          return item;
        });
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
