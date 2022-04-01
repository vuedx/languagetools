import type Typescript from 'typescript/lib/tsserverlibrary'
import type { TS_LANGUAGE_SERVICE } from '../constants'

export { Typescript }
export type TSLanguageService = Typescript.LanguageService
export type TSLanguageServiceHost = Typescript.LanguageServiceHost
export type TSProject = Typescript.server.Project & {
  getParsedCommandLine?(
    fileName: string,
  ): Typescript.ParsedCommandLine | undefined
}
export type TSServerHost = Typescript.server.ServerHost
export interface ExtendedTSLanguageService extends TSLanguageService {
  [TS_LANGUAGE_SERVICE](): TSLanguageService
}
