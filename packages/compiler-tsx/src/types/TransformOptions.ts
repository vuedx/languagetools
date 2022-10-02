import type { SFCDescriptor } from '@vuedx/compiler-sfc'
import type { Cache } from '@vuedx/shared'

export interface TransformOptions {
  /**
   * The name of the input .vue file.
   */
  fileName: string
  internalIdentifierPrefix?: string
  isTypeScript?: boolean
  cache?: Cache<string, unknown>
  runtimeModuleName?: string
  typeCheckModuleName?: string
  typescript: typeof import('typescript/lib/tsserverlibrary')
}

export interface TransformOptionsResolved extends TransformOptions {
  /**
   * Cache for incremental compilation.
   */
  cache: Cache<string, unknown>

  /**
   * Does the project use TypeScript?
   */
  isTypeScript: boolean

  /**
   * Identifier for the instance of current component.
   * @default '__VueDX_ctx'
   */
  contextIdentifier: string

  /**
   * Namespace import from `typeCheckModuleName`.
   * @default '__VueDX_TypeCheck'
   */
  typeIdentifier: string

  /**
   * Prefix for internal identifiers.
   * @default '__VueDX_'
   */
  internalIdentifierPrefix: string

  /**
   * Name of the runtime module.
   * @default 'vue'
   */
  runtimeModuleName: string

  /**
   * Name of the type check module.
   * @default 'vuedx~runtime'
   */
  typeCheckModuleName: string

  /**
   * SFC Descriptor.
   */
  descriptor: SFCDescriptor

  /**
   * Known identifiers.
   */
  identifiers: Set<string>
}
