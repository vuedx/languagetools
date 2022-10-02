import {
  CompilerError,
  parse,
  SFCBlock,
  SFCDescriptor,
} from '@vuedx/compiler-sfc'
import {
  Cache,
  createCache,
  rebaseSourceMap,
  SourceTransformer,
} from '@vuedx/shared'
import type {
  TransformOptions,
  TransformOptionsResolved,
} from '../types/TransformOptions'
import { transformCustomBlock } from './blocks/transformCustomBlock'

import type { RootNode } from '@vue/compiler-core'
import type { RawSourceMap } from 'source-map'
import { encode } from 'sourcemap-codec'
import type { TransformedCode } from '../types/TransformedCode'
import { transformScript } from './blocks/transformScript'
import { transformScriptSetup } from './blocks/transformScriptSetup'
import { transformStyle } from './blocks/transformStyle'
import { transformTemplate } from './blocks/transformTemplate'

export interface CompileOptions extends TransformOptions {}

export interface CompileOutput extends TransformedCode {
  template?: RootNode
  descriptor: SFCDescriptor
  errors: Array<CompilerError | SyntaxError>
}

export function compile(
  source: string,
  options: CompileOptions,
): Omit<CompileOutput, 'map'> & { map: RawSourceMap } {
  const result = compileWithDecodedSourceMap(source, options)

  return {
    ...result,
    map: {
      version: 3 as unknown as string,
      ...result.map,
      mappings: encode(result.map.mappings),
    },
  }
}

export function compileWithDecodedSourceMap(
  source: string,
  options: CompileOptions,
): CompileOutput {
  // performance.mark('beforeTransform')
  const cache = options.cache ?? createCache(100)
  const key = (name: string): string => `${options.fileName}::block:${name}`
  const previous = cache.get(key('descriptor')) as SFCDescriptor | undefined
  const { descriptor, errors } = parse(source)

  const lang = descriptor.script?.lang ?? descriptor.scriptSetup?.lang
  const internalIdentifierPrefix =
    options.internalIdentifierPrefix ?? '__VueDX__'
  const contextIdentifier = `${internalIdentifierPrefix}ctx`
  const typeIdentifier = `${internalIdentifierPrefix}TypeCheck`
  const resolvedOptions: TransformOptionsResolved = {
    ...options,
    runtimeModuleName: 'vue',
    typeCheckModuleName: 'vuedx~runtime',
    typeIdentifier,
    contextIdentifier,
    internalIdentifierPrefix,
    isTypeScript: options.isTypeScript ?? (lang === 'ts' || lang === 'tsx'),
    cache,
    descriptor,
    identifiers: new Set(),
  }
  const builder = new SourceTransformer(options.fileName, source)

  const isScriptChanged = hasBlockChanged(previous?.script, descriptor.script)

  const script = runIfNeeded(key('script'), isScriptChanged, cache, () =>
    transformScript(descriptor.script, resolvedOptions),
  )

  const isScriptSetupChanged = hasBlockChanged(
    previous?.scriptSetup,
    descriptor.scriptSetup,
  )
  const scriptSetup = runIfNeeded(
    key('scriptSetup'),
    isScriptSetupChanged,
    cache,
    () => transformScriptSetup(descriptor.scriptSetup, resolvedOptions),
  )

  resolvedOptions.identifiers = new Set([
    ...script.identifiers,
    ...scriptSetup.identifiers,
  ])

  const template = runIfNeeded(
    key('template'),
    isScriptChanged ||
      isScriptSetupChanged ||
      hasBlockChanged(previous?.template, descriptor.template),
    cache,
    () => transformTemplate(descriptor.template, resolvedOptions),
  )

  const name = script.name
  function region(name: string, fn: () => void): void {
    builder.nextLine()
    builder.append(`//#region ${name}`)
    builder.nextLine()
    fn()
    builder.nextLine()
    builder.append(`//#endregion`)
    builder.nextLine()
  }

  builder.append(
    [
      `import * as ${resolvedOptions.typeIdentifier} from '${resolvedOptions.typeCheckModuleName}';`,
      `import { ${['defineComponent', 'GlobalComponents']
        .map(
          (id) => `${id} as ${resolvedOptions.internalIdentifierPrefix}${id}`,
        )
        .join(', ')} } from '${resolvedOptions.runtimeModuleName}';`,
    ].join('\n'),
  )
  builder.nextLine()
  region('<script>', () => {
    builder.append(
      script.code,
      rebaseSourceMap(script.map, descriptor.script?.loc.start),
    )
  })

  const customBlocksResults = descriptor.customBlocks.map((block, index) => {
    const result = runIfNeeded(
      key(`customBlock${index}`),
      hasBlockChanged(previous?.customBlocks[index], block),
      cache,
      () => transformCustomBlock(block, resolvedOptions),
    )

    region(`<${block.type}>`, () => {
      builder.append(result.code, rebaseSourceMap(result.map, block.loc.start))
    })

    return result
  })

  region('<script setup>', () => {
    builder.append(
      scriptSetup.code,
      rebaseSourceMap(scriptSetup.map, descriptor.scriptSetup?.loc.start),
    )
  })
  const defaultExportIdentifier =
    descriptor.scriptSetup != null
      ? scriptSetup.exportIdentifier
      : script.exportIdentifier

  builder.append(
    [
      `function ${internalIdentifierPrefix}RegisterSelf<T>(ctx: T) {`,
      `  return { ...ctx, [${JSON.stringify(name)}]: ${name} }`,
      `}`,
    ].join('\n'),
  )
  builder.nextLine()

  builder.append(
    `const ${contextIdentifier} = ${customBlocksResults.reduce(
      (code, result) => {
        if (result.decoratorIdentifier != null) {
          return `${result.decoratorIdentifier}(${code})`
        }

        return code
      },
      `${internalIdentifierPrefix}RegisterSelf(new ${defaultExportIdentifier}())`,
    )}`,
  )

  builder.nextLine()

  region(`<template>`, () => {
    builder.append(
      template.code,
      rebaseSourceMap(template.map, descriptor.template?.loc.start),
    )
  })

  descriptor.styles.forEach((style, index) => {
    const result = runIfNeeded(
      key(`style${index}`),
      hasBlockChanged(previous?.styles[index], style),
      cache,
      () => transformStyle(style, resolvedOptions),
    )
    builder.append('/* <style> */')
    region('<style>', () => {
      builder.append(result.code, rebaseSourceMap(result.map, style.loc.start))
    })
  })

  const exported = [
    scriptSetup.exportIdentifier,
    scriptSetup.propsIdentifier,
    scriptSetup.emitsIdentifier,
    scriptSetup.exposeIdentifier,
    template.attrsIdentifier,
    template.slotsIdentifier,
    resolvedOptions.contextIdentifier,
    ...Object.values(scriptSetup.exports),
  ].join(', ')

  builder.append(`return {${exported}};});`)
  builder.nextLine()
  builder.append(`const {${exported}} = ${scriptSetup.scopeIdentifier};\n`)
  Object.entries(scriptSetup.exports).forEach(([name, identifier]) => {
    builder.append(`export type ${name} = typeof ${identifier};\n`)
  })

  region('public component definition', () => {
    const props = `${resolvedOptions.contextIdentifier}.$props`

    const parentClassIfAny = ` extends ${name}Public`
    const type = `new () => typeof ${scriptSetup.exposeIdentifier}`
    if (resolvedOptions.isTypeScript) {
      builder.append(`const ${name}Public = null as unknown as ${type};`)
      builder.nextLine()
    } else {
      builder.append(
        `const ${name}Public = /** @type {${type}} */ (/** @type {unknown} */ (null));`,
      )
      builder.nextLine()
    }

    const inheritAttrs =
      descriptor.template?.content.includes('@vue-attrs-target') === true ||
      script.inheritAttrs

    const propsType =
      descriptor.scriptSetup != null
        ? `typeof ${props} & ${resolvedOptions.typeIdentifier}.internal.EmitsToProps<typeof ${scriptSetup.emitsIdentifier}>`
        : `typeof ${props}`
    const attrsType = `typeof ${template.attrsIdentifier}`

    builder.append(
      [
        `export default class ${name}${parentClassIfAny} {`,
        defineProperty(
          '$props',
          inheritAttrs
            ? `${resolvedOptions.typeIdentifier}.internal.MergeAttrs<${propsType}, ${attrsType}>`
            : propsType,
        ),
        defineProperty(
          '$slots',
          `${resolvedOptions.typeIdentifier}.internal.Slots<ReturnType<typeof ${template.slotsIdentifier}>>`,
        ),
        `}`,
      ].join('\n'),
    )
    builder.nextLine()
  })

  const output = builder.end()
  // performance.mark('afterTransform')
  // performance.measure('transform', 'beforeTransform', 'afterTransform')

  return {
    code: output.code,
    map: {
      ...output.map,
      file: options.fileName.replace(
        /\.vue$/,
        resolvedOptions.isTypeScript ? '.tsx' : '.jsx',
      ),
    },
    descriptor,
    errors: [...errors, ...template.errors],
    template: template.ast,
  }

  function defineProperty(name: string, type: string): string {
    return resolvedOptions.isTypeScript
      ? `  ${name} = null as unknown as ${type};`
      : `  ${name} = /** @type {${type}} */ (/** @type {unknown} */ (null));`
  }
}

function runIfNeeded<R>(
  key: string,
  forceEvict: boolean,
  cache: Cache<string, unknown>,
  fn: () => R,
): R {
  if (forceEvict) cache.delete(key)
  return cache.resolve(key, fn) as R
}

function hasBlockChanged(
  previous: SFCBlock | undefined | null,
  current: SFCBlock | null,
): boolean {
  if (previous === undefined) return true
  if (previous === current) return true
  if (previous == null || current == null) return false
  if (previous.type !== current.type) return false
  if (previous.lang !== current.lang) return false
  if (previous.content !== current.content) return false
  if (!areObjectsEqual(previous.attrs, current.attrs)) return false
  return true
}

function areObjectsEqual(
  a: Record<string, string | boolean>,
  b: Record<string, string | boolean>,
): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (const key of Object.keys(a)) {
    if (a[key] !== b[key]) return false
  }

  return true
}
