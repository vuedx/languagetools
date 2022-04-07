import type TypeScript from 'typescript/lib/tsserverlibrary'
import type { TS_LANGUAGE_SERVICE } from '../constants'

export { TypeScript }
export type TSLanguageService = TypeScript.LanguageService
export type TSLanguageServiceHost = TypeScript.LanguageServiceHost
export type TSProject = TypeScript.server.Project & {
  getParsedCommandLine?(
    fileName: string,
  ): TypeScript.ParsedCommandLine | undefined
}
export type TSServerHost = TypeScript.server.ServerHost
export interface ExtendedTSLanguageService extends TSLanguageService {
  [TS_LANGUAGE_SERVICE](): TSLanguageService
}
