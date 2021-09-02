import type { Diagnostic } from 'vscode-languageserver-types'

export interface LanguageService {
  getDiagnositcs(fileName: string): Diagnostic[]
}
