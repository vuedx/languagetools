import type {
  TSLanguageService,
  TSProject,
  TSServerHost,
  Typescript,
} from './Typescript'

export interface TypescriptProvider {
  mode: 'plugin' | 'service'
  context: null | { project: TSProject; service: TSLanguageService }
  typescript: typeof Typescript
  getProjectFor(fileName: string): TSProject
  /**
   * @remark This must not include TS-Plugin-Vue.
   */
  getLanguageServiceFor(fileName: string): TSLanguageService
  getServerHost(): TSServerHost
}
