import ts from 'typescript'
import { removeVirtualSuffixFromFileName } from '../utils'

export function prepareDocumentHighlights(
  fileName: string,
  result: ts.DocumentHighlights[]
) {
  result.forEach((highlight) => {
    highlight.fileName = removeVirtualSuffixFromFileName(highlight.fileName)
    highlight.highlightSpans.forEach((span) => {
      if (span.fileName) span.fileName = removeVirtualSuffixFromFileName(span.fileName)
    })
  })

  return result
}
