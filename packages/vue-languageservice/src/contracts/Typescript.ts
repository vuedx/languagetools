import type Typescript from 'typescript/lib/tsserverlibrary'

export { Typescript }
export type TSLanguageService = Typescript.LanguageService
export type TSProject = Typescript.server.Project
export type TSServerHost = Typescript.server.ServerHost
export interface ExtendedTSLanguageService extends TSLanguageService {
  getExternalFiles(): string[]
}
