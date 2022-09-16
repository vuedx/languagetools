import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import { first, getComponentName } from '@vuedx/shared'
import MagicString from 'magic-string'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

const DEFAULT_EXPORT_RE = /(^|\b)export[\s\r\n]+default\b/
export interface ScriptBlockTransformResult extends TransformedCode {
  exportIdentifier: string
  decoratorIdentifier?: string
}
export function transformScript(
  script: SFCScriptBlock | null,
  {
    internalIdentifierPrefix: prefix,
    runtimeModuleName,
    descriptor,
    isTypeScript,

    fileName,
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
      `const ${exportIdentifier} =`,
    )
    builder.append(`console.log(${exportIdentifier})`)
  } else if (descriptor.scriptSetup == null) {
    if (content.length > 0) builder.append('\n')
    builder
      .append(
        `import { defineComponent as ${prefix}defineComponent } from '${runtimeModuleName}';\n`,
      )
      .append(`const ${exportIdentifier} = ${prefix}defineComponent({});\n`)
    builder.append(`console.log(${exportIdentifier})`)
  }

  const decoratorIdentifier: string = `${prefix}RegisterSelf`
  const name = getComponentName(fileName)
  const detected = descriptor.scriptSetup == null ? '' : '' // TODO: detect name from inline options.
  if (isTypeScript) {
    builder.append(
      `\nfunction ${decoratorIdentifier}<T extends {}>(arg0: T) {
      const key = ${detected}"${name}" as const;
      return { ...arg0, [key]: ${name} };\n}`.replace(/^[ ]+/gm, '  '),
    )
  } else {
    builder.append(
      `\n
    /**
     * @template T
     * @param {T} arg0
     */
    function ${decoratorIdentifier}(arg0) {
      const key = ${detected} /** @type {"${name}"} */ ("${name}");
      return { ...arg0, [key]: ${name} };\n}`.replace(/^[ ]+/gm, '  '),
    )
  }

  return {
    code: builder.toString(),
    map: builder.generateDecodedMap({ hires: false }),
    exportIdentifier,
    decoratorIdentifier,
  }
}
