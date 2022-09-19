import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { invariant } from '@vuedx/shared'
import { parse, transformScriptSetup as transform } from '@vuedx/transforms'
import { decode } from 'sourcemap-codec'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptSetupBlockTransformResult extends TransformedCode {
  exportIdentifier: string
  propsIdentifier?: string
  emitIdentifier?: string
  exposeIdentifier?: string
  identifiers: string[]
}

export function transformScriptSetup(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
): ScriptSetupBlockTransformResult | null {
  if (script == null) return null
  const ast = parse(script.content, { isScriptSetup: true, lang: script.lang })
  const result = transform(ast, {
    internalIdentifierPrefix: options.internalIdentifierPrefix,
    runtimeModuleName: options.runtimeModuleName,
    typeIdentifier: options.typeIdentifier,
    isTypeScript:
      script.lang === 'ts' || script.lang === 'tsx' || options.isTypeScript,
  })

  invariant(result.map != null)

  return {
    code: result.code,
    map: {
      ...result.map,
      sourcesContent: result.map.sourcesContent ?? [],
      mappings: decode(result.map.mappings),
    },
    exportIdentifier: result.exportIdentifier,
    propsIdentifier: result.propsIdentifier,
    emitIdentifier: result.emitIdentifier,
    exposeIdentifier: result.exposeIdentifier,
    identifiers: result.identifiers,
  }
}
