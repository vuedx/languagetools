import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { getComponentName, invariant } from '@vuedx/shared'
import { parse, transformScript as transform } from '@vuedx/transforms'
import { decode } from 'sourcemap-codec'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptBlockTransformResult extends TransformedCode {
  exportIdentifier: string
  decoratorIdentifier?: string
  identifiers: string[]
  selfName?: string | undefined
  inheritAttrs?: boolean | undefined
}
export function transformScript(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
): ScriptBlockTransformResult {
  const content = script?.content ?? ''

  const ast = parse(content, {
    isScriptSetup: true,
    lang: script?.lang,
  })

  const result = transform(ast, {
    internalIdentifierPrefix: options.internalIdentifierPrefix,
    runtimeModuleName: options.runtimeModuleName,
    typeIdentifier: options.typeIdentifier,
    isTypeScript:
      script?.lang === 'ts' || script?.lang === 'tsx' || options.isTypeScript,
  })

  invariant(result.map != null)

  const decoratorIdentifier: string = `${options.internalIdentifierPrefix}RegisterSelf`
  const name = result.selfName ?? getComponentName(options.fileName)
  let code: string = result.code
  if (options.isTypeScript) {
    code += `\nfunction ${decoratorIdentifier}<T extends {}>(arg0: T) {
      const key = "${name}" as const;
      return { ...arg0, [key]: ${name} };\n}`.replace(/^[ ]+/gm, '  ')
  } else {
    code += `\n
    /**
     * @template T
     * @param {T} arg0
     */
    function ${decoratorIdentifier}(arg0) {
      const key = /** @type {"${name}"} */ ("${name}");
      return { ...arg0, [key]: ${name} };\n}`.replace(/^[ ]+/gm, '  ')
  }

  return {
    code,
    map: {
      ...result.map,
      sourcesContent: result.map.sourcesContent ?? [],
      mappings: decode(result.map.mappings),
    },
    exportIdentifier: result.exportIdentifier,
    decoratorIdentifier,
    identifiers: result.identifiers,
    selfName: result.selfName,
    inheritAttrs: result.inheritAttrs,
  }
}
