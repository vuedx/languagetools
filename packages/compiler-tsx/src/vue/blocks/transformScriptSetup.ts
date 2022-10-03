import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { invariant } from '@vuedx/shared'
import { transformScriptSetup as transform } from '@vuedx/transforms'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptSetupBlockTransformResult extends TransformedCode {
  exportIdentifier: string
  scopeIdentifier: string
  propsIdentifier: string
  emitsIdentifier: string
  exposeIdentifier: string
  identifiers: string[]
  exports: Record<string, string>
}

export function transformScriptSetup(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
): ScriptSetupBlockTransformResult {
  const content = script?.content ?? ''
  const result = transform(content, {
    internalIdentifierPrefix: options.internalIdentifierPrefix,
    runtimeModuleName: options.runtimeModuleName,
    typeIdentifier: options.typeIdentifier,
    lang: (script?.lang ?? 'ts') as any,
    fileName: options.fileName,
    lib: options.typescript,
    cache: options.cache,
  })

  invariant(result.map != null)

  return {
    code: result.code,
    map: result.map,
    identifiers: result.identifiers,
    exportIdentifier: result.componentIdentifier,
    scopeIdentifier: result.scopeIdentifier,
    propsIdentifier: result.propsIdentifier,
    emitsIdentifier: result.emitsIdentifier,
    exposeIdentifier: result.exposeIdentifier,
    exports: result.exports,
  }
}
