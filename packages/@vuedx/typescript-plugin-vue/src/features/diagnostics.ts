import ts from 'typescript'
import { virtualFileNameSep } from '@vuedx/vue-virtual-textdocument'

const virtualFileRegex = new RegExp(`(?<=\\.vue)${virtualFileNameSep}(script|template|style|customBlock|render)(__[0-9]+)?`, 'g')

export function prepareSyntacticDiagnostics(
  fileName: string,
  result: ts.DiagnosticWithLocation[]
) {
  result.forEach((item) => {
    if (typeof item.messageText === 'string') {
      item.messageText = item.messageText.replace(virtualFileRegex, '')
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
      item.messageText = item.messageText.replace(virtualFileRegex, '')
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
      item.messageText = item.messageText.replace(virtualFileRegex, '')
    }
  })

  return result
}
