import {
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import ts from 'typescript'

interface Context {
  getVueFile(fileName: string): VueTextDocument
  
  getVitualFile(
    vueFileName: string,
    selector: 'script' | 'render'
  ): VirtualTextDocument
  
  getVirtualFileAtPosition(
    vueFileName: string,
    position: number
  ): VirtualTextDocument
}

export function getSyntacticDiagnostics(
  fn: ts.LanguageService['getSyntacticDiagnostics']
): ts.LanguageService['getSyntacticDiagnostics'] {}

export function prepareSyntacticDiagnostics(
  fileName: string,
  result: ts.DiagnosticWithLocation[]
) {
  result.forEach(item => {
    if (typeof item.messageText === 'string') {
      item.messageText = item.messageText.replace(
        /(?<=\.vue)\?type=[^#]+#/g,
        ''
      )
    }
  })

  return result
}

export function prepareSuggestionDiagnostics(
  fileName: string,
  result: ts.DiagnosticWithLocation[]
) {
  result.forEach(item => {
    if (typeof item.messageText === 'string') {
      item.messageText = item.messageText.replace(
        /(?<=\.vue)\?type=[^#]+#/g,
        ''
      )
    }
  })

  return result
}

export function prepareSemanticDiagnostics(
  fileName: string,
  result: ts.Diagnostic[]
) {
  result.forEach(item => {
    if (typeof item.messageText === 'string') {
      item.messageText = item.messageText.replace(
        /(?<=\.vue)\?type=[^#]+#/g,
        ''
      )
    }
  })

  return result
}
