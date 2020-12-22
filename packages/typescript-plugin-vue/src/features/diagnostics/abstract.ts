import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

export interface DiagnosticProvider {
  version: string

  semantic(context: LanguageServiceOptions, fileName: string): TS.Diagnostic[]

  syntax(
    context: LanguageServiceOptions,
    fileName: string,
  ): TS.DiagnosticWithLocation[]

  suggestions(
    context: LanguageServiceOptions,
    fileName: string,
  ): TS.DiagnosticWithLocation[]
}

export function defineDiagnosticProvider(
  options: DiagnosticProvider,
): DiagnosticProvider {
  return options
}
