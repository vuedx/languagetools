import ts from 'typescript'
import { removeVirtualSuffixFromText } from '../utils'

export function prepareSyntacticDiagnostics(
  fileName: string,
  result: ts.DiagnosticWithLocation[]
) {
  result.forEach((item) => {
    if (typeof item.messageText === 'string') {
      item.messageText = removeVirtualSuffixFromText(item.messageText)
    }
  })

  return result
}

export function prepareSuggestionDiagnostics(
  fileName: string,
  result: ts.DiagnosticWithLocation[]
) {
  result.forEach((item) => {
    if (typeof item.messageText === 'string') {
      item.messageText = removeVirtualSuffixFromText(item.messageText)
    }
  })

  return result
}

export function prepareSemanticDiagnostics(
  fileName: string,
  result: ts.Diagnostic[]
) {
  result.forEach((item) => {
    if (typeof item.messageText === 'string') {
      item.messageText = removeVirtualSuffixFromText(item.messageText)
    }
  })

  return result
}
