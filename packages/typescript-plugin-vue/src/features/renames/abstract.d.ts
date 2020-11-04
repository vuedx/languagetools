import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

export interface RenameProvider {
  version: string

  canRename: (
    config: LanguageServiceOptions,
    fileName: string,
    position: number,
    preferences: TS.RenameInfoOptions,
  ) => TS.RenameInfo | undefined

  applyRename: (
    config: LanguageServiceOptions,
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
  ) => TS.RenameLocation[] | undefined

  applyFileRename: (
    config: LanguageServiceOptions,
    containerFile: string,
    oldFileName: string,
    newFileName: string,
    options: TS.FormatCodeSettings,
    preferences: TS.UserPreferences,
  ) => TS.FileTextChanges[] | undefined
}
