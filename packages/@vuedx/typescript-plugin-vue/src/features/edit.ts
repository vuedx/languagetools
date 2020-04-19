import ts from 'typescript';
import { removeVirtualSuffixFromFileName } from '../utils';
import { TS } from '../interfaces';
import { RenderFunctionDocument } from 'packages/@vuedx/vue-virtual-textdocument/src';

export function prepareTextChange(fileName: string, result: ts.TextChange[]) {
  return result;
}
export function prepareTextInsertion(fileName: string, result?: ts.TextInsertion) {
  return result;
}

export function prepareApplicableRefactorInfo(fileName: string, result: ts.ApplicableRefactorInfo[]) {
  return result;
}

export function prepareRefactorEditInfo(fileName: string, result: ts.RefactorEditInfo) {
  if (result.renameFilename) {
    result.renameFilename = removeVirtualSuffixFromFileName(result.renameFilename);
  }

  result.edits.forEach((edit) => {
    edit.fileName = removeVirtualSuffixFromFileName(edit.fileName);
  });

  return result;
}

export function prepareFileTextChanges(fileName: string, result: readonly ts.FileTextChanges[]) {
  result.forEach((item) => {
    item.fileName = removeVirtualSuffixFromFileName(item.fileName);
  });

  return result;
}

export function remapTextSpan(span: TS.TextSpan, document: RenderFunctionDocument) {
  if (span.start != null) {
    let start = document.getSourceOffsetAt(span.start);
    let end = span.length ? document.getSourceOffsetAt(span.start + span.length - 1) : start;
    if (start == null || end == null) {
      return false;
    } else if (span.length) {
      end += 1;
    }

    span.start = start;
    span.length = end - start;
  }

  return true;
}
