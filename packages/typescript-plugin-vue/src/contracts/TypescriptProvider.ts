import type {
  TSLanguageService,
  TSProject,
  TSServerHost,
  TypeScript,
} from './TypeScript'

export interface TypescriptProvider {
  mode: 'plugin' | 'service'
  context: null | { project: TSProject; service: TSLanguageService }
  typescript: typeof TypeScript
  getProjectFor(fileName: string): TSProject
  /**
   * @remark This must not include TS-Plugin-Vue.
   */
  getLanguageServiceFor(fileName: string): TSLanguageService
  getServerHost(): TSServerHost
  getRuntimeHelperFileName(version: string): string
}
