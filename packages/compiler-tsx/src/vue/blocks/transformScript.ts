import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { first } from '@vuedx/shared'
import MagicString from 'magic-string'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

const DEFAULT_EXPORT_RE = /(^|\b)export[\s\r\n]+default\b/
export interface ScriptBlockTransformResult extends TransformedCode {
  exportIdentifier: string
}
export function transformScript(
  script: SFCScriptBlock | null,
  {
    internalIdentifierPrefix: prefix,
    runtimeModuleName,
  }: TransformOptionsResolved,
): ScriptBlockTransformResult {
  const content = script?.content ?? ''
  const builder = new MagicString(content)
  const exportIdentifier = `${prefix}Component`

  const match = DEFAULT_EXPORT_RE.exec(content)

  if (match != null) {
    builder.overwrite(
      match.index,
      match.index + first(match).length,
      `export const ${exportIdentifier} =`,
    )
  } else {
    if (content.length > 0) builder.append('\n')
    builder

      .append(
        `import { defineComponent as ${prefix}defineComponent } from '${runtimeModuleName}';\n`,
      )
      .append(
        `export const ${exportIdentifier} = ${prefix}defineComponent({});\n`,
      )
  }

  return {
    code: builder.toString(),
    map: builder.generateDecodedMap({ hires: true }),
    exportIdentifier,
  }
}
