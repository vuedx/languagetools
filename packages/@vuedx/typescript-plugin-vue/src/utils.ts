import ts from 'typescript'
import {
  isVirtualFile,
  virtualFileNameSep,
} from '@vuedx/vue-virtual-textdocument'

export function removeVirtualSuffixFromFileName(fileName: string) {
  if (isVirtualFile(String(fileName))) {
    return fileName.substr(0, fileName.lastIndexOf(virtualFileNameSep))
  }

  return fileName
}

const virtualFileRegex = new RegExp(
  `(?<=\\.vue)${virtualFileNameSep}(script|template|style|customBlock|render)(__[0-9]+)?(\\.[A-Za-z0-9_-]+)?`,
  'g'
)
export function removeVirtualSuffixFromText(text: string) {
  return text.replace(virtualFileRegex, '')
}

export function prepareDocumentSpan(span: ts.DocumentSpan) {
  span.fileName = removeVirtualSuffixFromFileName(span.fileName);
  if (span.originalFileName) {
    span.originalFileName = removeVirtualSuffixFromFileName(span.originalFileName);
  }
}
