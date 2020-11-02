import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

export interface RefactorProvider {
  version: string

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
