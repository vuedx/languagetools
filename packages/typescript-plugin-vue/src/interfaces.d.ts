import type * as TS from 'typescript/lib/tsserverlibrary'

export { TS }
export interface Modules {
  typescript: typeof TS
}

export type PatchedFunction<T> = T & {
  __VUE__: boolean
}

export interface PluginConfig {
  telemetry?: boolean
  features: {
    diagnostics: boolean | Array<'semantic' | 'syntactic' | 'suggestion'>
    organizeImports: boolean
    quickInfo: boolean
    rename: boolean
    refactor: boolean
    goto: boolean
    tagCompletions: boolean | Array<'html' | 'svg'>
  }
  /** A file to communicate with extension? */
  extensionSocketFileName?: string
}
