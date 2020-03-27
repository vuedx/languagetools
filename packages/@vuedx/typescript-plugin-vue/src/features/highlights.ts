import ts from 'typescript'
import { mayBeVirtualFileName } from '../utils'
export function prepareDocumentHighlights(
  fileName: string,
  result?: ts.DocumentHighlights[]
) {
  if (!result) return

  result.forEach(highlight => {
    highlight.fileName = mayBeVirtualFileName(highlight.fileName)
  })

  return result
}
