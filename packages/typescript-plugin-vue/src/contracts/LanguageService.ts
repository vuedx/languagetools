import type * as LS from 'vscode-languageserver-types'
import type { Disposable } from './Disposable'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LanguageService {
  export type Position = LS.Position
  export type Range = LS.Range
  export type Definition = LS.Definition
  export type Diagnostic = LS.Diagnostic
  export type QuickInfo = LS.Hover
  export type MarkupContent = LS.MarkupContent
  export type CompletionList = LS.CompletionList
  export type CompletionItem = LS.CompletionItem
  export type CompletionItemKind = LS.CompletionItemKind
}

export interface LanguageService extends Disposable {
  getDiagnostics(fileName: string): LanguageService.Diagnostic[]

  getDefinitionAt(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[]

  getTypeDefinitionAt?(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[]

  getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null

  getCompletionsAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.CompletionList
}
