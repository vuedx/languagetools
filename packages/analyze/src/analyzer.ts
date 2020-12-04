import { Context, Plugin } from './types'
import { parse, SFCBlock, SFCParseOptions } from '@vuedx/compiler-sfc'
import { ComponentInfo, createComponentInfoFactory } from './component'
import Path from 'path'

const parsers: Context['parsers'] = {
  sfc: {
    sourceMap: false,
    pad: 'space',
  },

  babel: {
    sourceType: 'module',
    plugins: [
      'bigInt',
      'optionalChaining',
      'optionalCatchBinding',
      'nullishCoalescingOperator',
      'objectRestSpread',
    ],
  },
}

export interface Analyzer {
  analyze: (content: string, fileName?: string) => ComponentInfo
  analyzeScript: (
    content: string,
    fileName?: string,
    mode?: 'script' | 'scriptSetup',
  ) => ComponentInfo
  analyzeTemplate: (content: string, fileName?: string) => ComponentInfo
}

export function createAnalyzer(
  plugins: Plugin[],
  options: Partial<Context['parsers']> = {},
): Analyzer {
  function createContext(
    fileName: string,
    content: string,
    localOptions: SFCParseOptions,
  ): Context {
    const { descriptor } = parse(content, {
      ...parsers.sfc,
      ...options.sfc,
      ...localOptions,
      filename: fileName,
    })

    return {
      fileName,
      component: createComponentInfoFactory(),
      descriptor,
      plugins,
      parsers: {
        sfc: { ...parsers.sfc, ...options.sfc, ...localOptions },
        babel: { ...parsers.babel, ...options.babel },
      },
    }
  }

  function analyze(
    content: string,
    fileName: string = 'anonymous.vue',
  ): ComponentInfo {
    const context = createContext(fileName, content, {})

    processSFC(context)

    return context.component.info()
  }

  function analyzeBlockText(
    content: string,
    fileName: string = 'anonymous.vue',
  ): ComponentInfo {
    const context = createContext(fileName, content, {})

    processSFC(context)

    return context.component.info()
  }

  function analyzeScript(
    content: string,
    fileName: string = 'anonymous.js',
    mode: 'script' | 'scriptSetup' = 'script',
  ): ComponentInfo {
    const ext = Path.posix.extname(fileName)
    return analyzeBlockText(
      `<script lang="${ext.substr(1)}" ${
        mode === 'scriptSetup' ? 'setup' : ''
      }>${content}</script>`,
      fileName.substr(0, fileName.length - ext.length) + '.vue',
    )
  }

  function analyzeTemplate(
    content: string,
    fileName: string = 'anonymous.html',
  ): ComponentInfo {
    const ext = Path.posix.extname(fileName)
    return analyzeBlockText(
      `<template>${content}</template>`,
      fileName.substr(0, fileName.length - ext.length) + '.vue',
    )
  }

  return { analyze, analyzeScript, analyzeTemplate }
}

function processSFC(context: Context): void {
  const {
    script,
    scriptSetup,
    template,
    styles,
    customBlocks,
  } = context.descriptor

  function call<T extends SFCBlock>(block: T): void {
    const kind = block.type
    context.plugins.forEach(({ blocks }) => {
      if (blocks != null && kind in blocks) {
        blocks[kind](block, context)
      }
    })
  }

  if (scriptSetup != null) call(scriptSetup)
  else if (script != null) call(script)
  if (template != null) call(template)
  styles.forEach(call)
  customBlocks.forEach((block) => call(block))
}
