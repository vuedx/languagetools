import {
  CompilerError,
  parse,
  SFCBlock,
  SFCDescriptor,
} from '@vuedx/compiler-sfc'
import { Cache, createCache, getComponentName } from '@vuedx/shared'
import type {
  TransformOptions,
  TransformOptionsResolved,
} from '../types/TransformOptions'
import { transformCustomBlock } from './blocks/transformCustomBlock'
import { SourceBuilder } from './SourceBuilder'
import { rebaseSourceMap } from './sourceMapHelpers'

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
  unusedIdentifiers: string[]
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
  const key = (name: string): string => `${options.fileName}::${name}`
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
  }
  const builder = new SourceBuilder(options.fileName, source)
  const template = runIfNeeded(
    key('template'),
    previous?.template,
    descriptor.template,
    cache,
    () => transformTemplate(descriptor.template, resolvedOptions),
  )

  const script = runIfNeeded(
    key('script'),
    previous?.script,
    descriptor.script,
    cache,
    () => transformScript(descriptor.script, resolvedOptions),
  )
  const scriptSetup = runIfNeeded(
    key('scriptSetup'),
    previous?.scriptSetup,
    descriptor.scriptSetup,
    cache,
    () => transformScriptSetup(descriptor.scriptSetup, resolvedOptions),
  )

  function region(name: string, fn: () => void): void {
    builder.append(`//#region ${name}`)
    fn()
    builder.append(`//#endregion`)
  }

  builder.append(
    `import * as ${resolvedOptions.typeIdentifier} from '${resolvedOptions.typeCheckModuleName}';`,
  )
  region('<script>', () => {
    builder.append(
      script.code,
      rebaseSourceMap(script.map, descriptor.script?.loc.start),
    )
  })

  if (scriptSetup != null) {
    region('<script setup>', () => {
      builder.append(
        scriptSetup.code,
        rebaseSourceMap(scriptSetup.map, descriptor.scriptSetup?.loc.start),
      )
    })
  }

  const customBlocksResults = descriptor.customBlocks.map((block, index) => {
    const result = runIfNeeded(
      key(`customBlock${index}`),
      previous?.customBlocks[index],
      block,
      cache,
      () => transformCustomBlock(block, resolvedOptions),
    )

    region(`<${block.type}>`, () => {
      builder.append(result.code, rebaseSourceMap(result.map, block.loc.start))
    })

    return result
  })

  const defaultExportIdentifier =
    scriptSetup != null ? scriptSetup.exportIdentifier : script.exportIdentifier

  builder.append(
    `const ${contextIdentifier} = ${[...customBlocksResults, script].reduce(
      (code, result) => {
        if (result.decoratorIdentifier != null) {
          return `${result.decoratorIdentifier}(${code})`
        }

        return code
      },
      `new ${defaultExportIdentifier}()`,
    )}`,
  )

  region(`<template>`, () => {
    builder.append(
      template.code,
      rebaseSourceMap(template.map, descriptor.template?.loc.start),
    )
  })

  descriptor.styles.forEach((style, index) => {
    const result = runIfNeeded(
      key(`style${index}`),
      previous?.styles[index],
      style,
      cache,
      () => transformStyle(style, resolvedOptions),
    )
    builder.append('/* <style> */')
    region('<style>', () => {
      builder.append(result.code, rebaseSourceMap(result.map, style.loc.start))
    })
  })

  region('public component definition', () => {
    builder.append(
      [
        `export default class ${getComponentName(options.fileName)} {`,
        defineProperty(
          '$props',
          `${resolvedOptions.typeIdentifier}.internal.MergeAttrs<${
            scriptSetup?.emitIdentifier != null
              ? `(typeof ${resolvedOptions.contextIdentifier}.$props & ${resolvedOptions.typeIdentifier}.internal.EmitsToProps<typeof ${scriptSetup.emitIdentifier}>)`
              : `typeof ${resolvedOptions.contextIdentifier}.$props`
          }, typeof ${template.attrsIdentifier}>`,
        ),
        defineProperty(
          '$slots',
          `${resolvedOptions.typeIdentifier}.internal.Slots<ReturnType<typeof ${template.slotsIdentifier}>>`,
        ),
        `}`,
      ].join('\n'),
    )
  })

  const output = builder.end()
  // performance.mark('afterTransform')
  // performance.measure('transform', 'beforeTransform', 'afterTransform')

  const usedIdentifiers = new Set(
    template.ast != null ? template.ast.scope.globals : [],
  )
  const identifiers =
    scriptSetup?.identifiers.filter((id) => {
      if (usedIdentifiers.has(id)) return false
      return true
    }) ?? []

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
    unusedIdentifiers: identifiers,
  }

  function defineProperty(name: string, type: string): string {
    return resolvedOptions.isTypeScript
      ? `  ${name} = null as unknown as ${type};`
      : `  ${name} = /** @type {${type}} */ (/** @type {unknown} */ (null));`
  }
}

function runIfNeeded<Block extends SFCBlock, R>(
  key: string,
  previous: Block | undefined | null,
  current: Block | null,
  cache: Cache<string, unknown>,
  fn: () => R,
): R {
  if (cache.has(key) && hasBlockChanged(previous, current)) cache.delete(key)
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
