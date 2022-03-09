import type { ExtendedTSLanguageService } from './contracts/Typescript'
import type { CreateLanguageServiceOptions } from './CreateLanguageServiceOptions'
import type { PluginConfig } from './services/ConfigService'

export interface TSLanguageServiceProvider {
  service: ExtendedTSLanguageService
  setConfig(config: PluginConfig): void
  update(options: CreateLanguageServiceOptions): void
}
