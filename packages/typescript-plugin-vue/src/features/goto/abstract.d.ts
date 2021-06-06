import type { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

export interface GotoProvider {
  version: string

  getDefinitionAndBoundSpan: (
    config: LanguageServiceOptions,
    fileName: string,
    position: number,
  ) => TS.DefinitionInfoAndBoundSpan | undefined
}
