import { isNumber, RenderFunctionTextDocument, VirtualTextDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { noop } from './noop';
import { isNotNull } from '../utils';
import QuickLRU from 'quick-lru';

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

      if (isNumber(offset)) {
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
