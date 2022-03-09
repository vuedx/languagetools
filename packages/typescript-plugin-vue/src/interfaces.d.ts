import type { PluginConfig } from '@vuedx/vue-languageservice'
import type * as TS from 'typescript/lib/tsserverlibrary'

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
