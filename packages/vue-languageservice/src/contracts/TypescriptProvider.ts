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
  getLanguageServiceFor(fileName: string): TSLanguageService
  getServerHost(): TSServerHost
}
