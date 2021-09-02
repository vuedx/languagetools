import type { CompilerError } from '@vue/compiler-core'
import type { RootNode } from '@vuedx/template-ast-types'
import type { RawSourceMap } from 'source-map'

export interface ImportStatement {
  path: string
  local: string
  exported: string
}

interface AssetRegistration {
  name: string
  value: string
  source: ImportStatement
}
export interface ComponentRegistration extends AssetRegistration {}
export interface DirectiveRegistration extends AssetRegistration {}

export interface Options {
  /** .vue file absolute path */
  filename: string
  /** Relative file import to get this context of render function. */
  selfSrc?: string

  /** @deprecated */
  components?: Record<string, ComponentRegistration>

  /** @deprecated */
  directives?: Record<string, DirectiveRegistration>
}

export interface CodegenResult {
  code: string
  ast: RootNode
  map: RawSourceMap
  errors: CompilerError[]
}
