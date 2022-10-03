import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { invariant } from '@vuedx/shared'
import { transformScript as transform } from '@vuedx/transforms'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptBlockTransformResult extends TransformedCode {
  exportIdentifier: string
  name: string
  inheritAttrs: boolean
  identifiers: string[]
}
export function transformScript(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
): ScriptBlockTransformResult {
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
    name: result.name,
    inheritAttrs: result.inheritAttrs,
  }
}
