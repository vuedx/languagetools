import type { Typescript } from './contracts/Typescript'
import type { PluginConfig } from './services/ConfigService'

export interface CreateLanguageServiceOptions
  extends Typescript.server.PluginCreateInfo {
  typescript: typeof Typescript
  typesDir: string
  config: PluginConfig
  dispose?(): void
}
