import type { SFCDescriptor } from '@vuedx/compiler-sfc'
import type { Cache } from '@vuedx/shared'

export interface TransformOptions {
  fileName: string
  internalIdentifierPrefix?: string
  isTypeScript?: boolean
  cache?: Cache<string, unknown>
  runtimeModuleName?: string
  typeCheckModuleName?: string
}

export interface TransformOptionsResolved extends TransformOptions {
  cache: Cache<string, unknown>
  isTypeScript: boolean
  componentName: string
  contextIdentifier: string
  internalIdentifierPrefix: string
  descriptor: SFCDescriptor
  runtimeModuleName: string
  typeCheckModuleName: string
}
