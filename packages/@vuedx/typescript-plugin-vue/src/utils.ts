import ts from 'typescript';
import { isVirtualFile, VIRTUAL_FILENAME_SEPARATOR } from '@vuedx/vue-virtual-textdocument';

export function removeVirtualSuffixFromFileName(fileName: string) {
  if (isVirtualFile(String(fileName))) {
    return fileName.substr(0, fileName.lastIndexOf(VIRTUAL_FILENAME_SEPARATOR));
  }

  return fileName;
}

const virtualFileRegex = new RegExp(
  `(?<=\\.vue)${VIRTUAL_FILENAME_SEPARATOR}(script|template|style|customBlock|render)(__[0-9]+)?(\\.[A-Za-z0-9_-]+)?`,
  'g'
);
export function removeVirtualSuffixFromText(text: string) {
  return text.replace(virtualFileRegex, '');
}

export function prepareDocumentSpan(span: ts.DocumentSpan) {
  span.fileName = removeVirtualSuffixFromFileName(span.fileName);
  if (span.originalFileName) {
    span.originalFileName = removeVirtualSuffixFromFileName(span.originalFileName);
  }
}

export function getLastNumberFromVersion(version: string) {
  const parts = version.split(/[^0-9]+/);
  const ver = parts.pop();

  return Number(ver);
}

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}
