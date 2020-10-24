import TS from 'typescript/lib/tsserverlibrary'

export { TS }
export interface Modules {
  typescript: typeof TS
}

export type PatchedFunction<T> = T & {
  __VUE__: boolean
}

export interface PluginConfig {
  features: {
    diagnostics: boolean | Array<'semantic' | 'syntactic' | 'suggestion'>
    organizeImports: boolean
    quickInfo: boolean
    rename: boolean
    refactor: boolean
    goto: boolean
  }
  directories: Array<{
    kind: 'component' | 'composition-function'
    name: string
    path: string
  }>
}
