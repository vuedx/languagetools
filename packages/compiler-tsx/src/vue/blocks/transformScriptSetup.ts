import type { RootNode } from '@vue/compiler-core'
import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import MagicString from 'magic-string'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface ScriptSetupBlockTransformResult extends TransformedCode {
  exportIdentifier: string
}

export function transformScriptSetup(
  script: SFCScriptBlock | null,
  options: TransformOptionsResolved,
  ast?: RootNode,
): ScriptSetupBlockTransformResult | null {
  if (script == null) return null
  const identifiers: string[] = []
  if (ast != null) {
    identifiers.push(...ast.scope.globals)
  }

  const prefix = options.internalIdentifierPrefix
  const exportIdentifier = `${prefix}SetupComponent`

  const bundle = new MagicString(script.content)
  // TODO: hoist imports and exports
  // TODO: detect useProps(), useSlots(), useAttrs() etc.
  bundle
    .prepend(
      [
        `import { defineComponent as ${prefix}defineComponent } from '${options.runtimeModuleName}';`,
        `export const ${exportIdentifier} = ${prefix}defineComponent(() => {`,
        ``,
      ].join('\n'),
    )
    .append(
      [
        `  ;`, // add a semi-colon to make sure the last line is a statement
        `  return {${identifiers.join(',')}};`,
        `});`,
      ].join('\n'),
    )

  return {
    code: bundle.toString(),
    map: bundle.generateDecodedMap({ hires: true }),
    exportIdentifier,
  }
}
