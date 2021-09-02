import type { Typescript } from './contracts/Typescript'

export interface CreateLanguageServiceOptions
  extends Typescript.server.PluginCreateInfo {
  typescript: typeof Typescript
  typesDir: string
}
