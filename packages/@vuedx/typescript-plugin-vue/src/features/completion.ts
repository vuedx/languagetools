import ts from 'typescript';
import { removeVirtualSuffixFromFileName, removeVirtualSuffixFromText } from '../utils';
import { RenderFunctionDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';

export function prepareCompletionsInfo(result: TS.WithMetadata<ts.CompletionInfo>) {
  return result;
}

export function remapCompletionsInfo(result: TS.WithMetadata<ts.CompletionInfo>, document: RenderFunctionDocument) {
  result.entries.forEach((entry) => {
    if (entry.replacementSpan) {
      entry.replacementSpan.start = document.getSourceOffsetAt(entry.replacementSpan.start);
    }
  });
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

export function remapCompletionsEntryDetail(result: TS.CompletionEntryDetails, document: RenderFunctionDocument) {
  result.codeActions?.forEach((codeAction) => {
    codeAction.changes?.forEach((change) => {
      change.textChanges.forEach((textChange) => {
        textChange.span.start = document.getSourceOffsetAt(textChange.span.start);
      });
    });
  });
}

export function prepareSymbol(result: TS.Symbol) {
  return result;
}
