import type { TS } from '../../interfaces'
import type { LanguageServiceOptions } from '../../types'

export interface CompletionProvider {
  name: string
  version: string

  getCompletionsAtPosition(
    context: LanguageServiceOptions,
    fileName: string,
    position: number,
    options: TS.GetCompletionsAtPositionOptions | undefined,
  ): TS.WithMetadata<TS.CompletionInfo> | undefined

  getCompletionEntryDetails(
    context: LanguageServiceOptions,
    fileName: string,
    position: number,
    entryName: string,
    formatOptions: TS.FormatCodeOptions | TS.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: TS.UserPreferences | undefined,
  ): TS.CompletionEntryDetails | undefined

  getCompletionEntrySymbol(
    context: LanguageServiceOptions,
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TS.Symbol | undefined
}

export function defineCompletionProvider(
  options: CompletionProvider,
): CompletionProvider {
  return options
}
