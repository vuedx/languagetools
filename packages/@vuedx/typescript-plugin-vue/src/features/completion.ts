import ts from 'typescript';
import { removeVirtualSuffixFromFileName, removeVirtualSuffixFromText } from '../utils';
import { RenderFunctionDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';

export function prepareCompletionsInfo(result: TS.WithMetadata<ts.CompletionInfo>) {
  return result;
}

export function remapCompletionsInfo(result: TS.WithMetadata<ts.CompletionInfo>, document?: RenderFunctionDocument) {
  if (document) {
    result.entries.forEach((entry) => {
      if (entry.replacementSpan) {
        const position = document.getSourceOffsetAt(entry.replacementSpan.start);
        if (position != null) {
          entry.replacementSpan.start = position;
        } else {
          entry.replacementSpan = undefined;
        }
      }
    });

    return result;
  }
}

export function prepareCompletionsEntryDetail(result: TS.CompletionEntryDetails) {
  result.codeActions?.forEach((codeAction) => {
    codeAction.changes?.forEach((change) => {
      change.fileName = removeVirtualSuffixFromFileName(change.fileName);
    });
  });

  result.displayParts.forEach((displayPart) => (displayPart.text = removeVirtualSuffixFromText(displayPart.text)));

  return result;
}

export function remapCompletionsEntryDetail(result: TS.CompletionEntryDetails, document?: RenderFunctionDocument) {
  if (document) {
    result.codeActions?.forEach((codeAction) => {
      codeAction.changes?.forEach((change) => {
        change.textChanges = change.textChanges.filter((textChange) => {
          const offset = document.getSourceOffsetAt(textChange.span.start);
   
          if (offset != null) {
            textChange.span.start = offset;
            return true;
          }

          return false;
        });
      });
    });
    return result;
  }
}

export function prepareSymbol(result: TS.Symbol) {
  return result;
}
