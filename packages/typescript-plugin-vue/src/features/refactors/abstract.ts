import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

export type EncodedString<T> = string & { __virtualTypeProperty: T }

export function encode<T>(value: T): EncodedString<T> {
  return JSON.stringify(value) as EncodedString<T>
}

export function decode<T>(value: EncodedString<T>): T {
  return JSON.parse(value) as T
}

export interface RefactorProvider {
  version: string

  name: string

  findRefactors: (
    config: LanguageServiceOptions,
    fileName: string,
    position: number | TS.TextRange,
    preferences: TS.UserPreferences,
  ) => TS.ApplicableRefactorInfo[]

  applyRefactor: (
    config: LanguageServiceOptions,
    fileName: string,
    options: TS.FormatCodeSettings,
    position: number | TS.TextRange,
    refactorName: string,
    actionName: string,
    preferences: TS.UserPreferences,
  ) => TS.RefactorEditInfo | undefined
}

export const REFACTORS = {
  EXTRACT_COMPONENT: 'vue:extract-component',
  EXTRACT_METHOD: 'vue:extract-method',
}
