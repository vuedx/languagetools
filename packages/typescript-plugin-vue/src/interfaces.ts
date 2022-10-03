import type * as TS from 'typescript/lib/tsserverlibrary'
import type { PluginConfig } from './managers/ConfigManager'

export { TS }
export interface Modules {
  typescript: typeof TS
}

export type PatchedFunction<T> = T & {
  __VUE__: boolean
}

export type PluginCreateInfo = Omit<TS.server.PluginCreateInfo, 'config'> & {
  config: PluginConfig
}
