import type * as LS from 'vscode-languageserver-types'
import type { Disposable } from './Disposable'

export interface LanguageService extends Disposable {
  getDiagnostics(fileName: string): LS.Diagnostic[]
  getDefinitionAt(fileName: string, position: LS.Position): LS.Definition[]
  getTypeDefinitionAt(fileName: string, position: LS.Position): LS.Definition[]
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LanguageService {
  export type Position = LS.Position
  export type Definition = LS.Definition
  export type Diagnostic = LS.Diagnostic
}
