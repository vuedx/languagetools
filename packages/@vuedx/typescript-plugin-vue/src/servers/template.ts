import { isNumber, RenderFunctionTextDocument, VirtualTextDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { noop } from './noop';

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

  return {
    ...noop,

    getRenameInfo(fileName, position, options) {
      const document = getRenderDoc(fileName);
      const template = getTemplateDoc(fileName);
      const offset = document.getGeneratedOffsetAt(position)?.offset;

      if (isNumber(offset)) {
        const result = service.getRenameInfo(fileName, offset, options);

        if (result.canRename) {
          result.triggerSpan = getTextSpan(document, result.triggerSpan);

          const prefix = template.getText(result.triggerSpan.start - 1, 1);

          if (result.displayName === '$event') {
            return {
              canRename: false,
              localizedErrorMessage: '$event is builtin variable, it cannot be renamed.',
            };
          } else if (prefix === ':' || prefix === '@') {
            return {
              canRename: false,
              localizedErrorMessage: (prefix === ':' ? 'Prop/attribute' : 'Event name') + ' renaming is not supported.',
            };
          }
        }

        return result;
      }

      return {
        canRename: false,
        localizedErrorMessage: 'You cannot rename this element.',
      };
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      const document = getRenderDoc(fileName);
      const offset = document.getGeneratedOffsetAt(position)?.offset;

      if (isNumber(offset) && document.findExpression(position)) {
        return service.findRenameLocations(fileName, offset, findInStrings, findInComments);
      }

      return undefined;
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
