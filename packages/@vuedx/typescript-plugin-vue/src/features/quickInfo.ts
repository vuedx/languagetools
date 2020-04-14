import { removeVirtualSuffixFromText } from '../utils';
import { TS } from '../interfaces';
import { RenderFunctionDocument } from '@vuedx/vue-virtual-textdocument';

export function prepareQuickInfo(result: ts.QuickInfo): ts.QuickInfo | undefined {
  result.displayParts?.forEach((part) => {
    part.text = removeVirtualSuffixFromText(part.text);
  });

  return result;
}

export function remapQuickInfo(result: TS.QuickInfo, document: RenderFunctionDocument) {
  result.textSpan.start = document.getSourceOffsetAt(result.textSpan.start);
}

export function prepareTextSpan(fileName: string, result: ts.TextSpan) {
  return result;
}

export function prepareTextSpans(fileName: string, result: ts.TextSpan[]) {
  return result;
}

export function prepareOutliningSpan(fileName: string, result: ts.OutliningSpan[]) {
  return result;
}

export function prepareTodoComment(fileName: string, result: ts.TodoComment[]) {
  return result;
}
