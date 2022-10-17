import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { invariant } from '@vuedx/shared'
import {
  transformScriptSetup as transform,
  type KnownIdentifier,
} from '@vuedx/transforms'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptSetupBlockTransformResult extends TransformedCode {
  /** private component */
  exportIdentifier: string
  /** public component */
  componentIdentifier: string
  scopeIdentifier: string
  identifiers: KnownIdentifier[]
  exports: Record<string, string>
}

export function transformScriptSetup(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
): ScriptSetupBlockTransformResult {
  const content = script?.content ?? ''
  const generic = script?.attrs?.['generic']
  const result = transform(content, {
    internalIdentifierPrefix: options.internalIdentifierPrefix,
    runtimeModuleName: options.runtimeModuleName,
    typeIdentifier: options.typeIdentifier,
    lang: (script?.lang ?? 'ts') as any,
    fileName: options.fileName,
    lib: options.typescript,
    cache: options.cache,
    attrsIdentifier: `${options.internalIdentifierPrefix}_attrs`,
    slotsIdentifier: `${options.internalIdentifierPrefix}_slots`,
    generic: typeof generic === 'string' ? generic : undefined,
  })

  invariant(result.map != null)

  return {
    code: result.code,
    map: result.map,
    identifiers: result.identifiers,
    exportIdentifier: result.privateComponentIdentifier,
    componentIdentifier: result.publicComponentIdentifier,
    scopeIdentifier: result.scopeIdentifier,
    exports: result.exports,
  }
}
