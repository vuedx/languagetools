import type { TSLanguageService, TSProject, TSServerHost } from './Typescript'

export interface TypescriptProvider {
  getProjectFor(fileName: string): TSProject
  getLanguageServiceFor(fileName: string): TSLanguageService
  getServerHost(): TSServerHost
}
