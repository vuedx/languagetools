import {
  parse as parseSFC,
  SFCScriptBlock,
  SFCTemplateBlock,
} from '@vue/compiler-sfc'
import { EnhancedSFCDescriptor } from '../interfaces'
import { parse as parseFlow } from './flow'
import { parse as parseHTML } from './html'
import { parse as parseJS } from './javascript'
import { parse as parseTS } from './typescript'
import { findVueComponentOptions } from '../ast/babel'

export function parseScriptBlock(
  block: SFCScriptBlock,
  { sourceFilename, onError }: BlockParserOptions
) {
  if (block.src) {
    onError(new Error(`External script block is not supported.`))
    return null
  }
  const isTypeScript = block.lang && /^(ts|typescript)$/i.test(block.lang)
  const isFlow = block.lang && /^(flow)$/i.test(block.lang)

  const fn = isTypeScript ? parseTS : isFlow ? parseFlow : parseJS
  try {
    const ast = fn(block.content, sourceFilename)
    const paths = findVueComponentOptions(ast)

    return { ...block, ast, paths }
  } catch (error) {
    error.block = 'script'
    error.lang = isTypeScript ? 'ts' : isFlow ? 'flow' : 'js'

    onError(error)
  }

  return null
}

export function parseTemplateBlock(
  block: SFCTemplateBlock,
  { sourceFilename, onError }: BlockParserOptions
) {
  if (block.src) {
    onError(new Error(`External template block is not supported.`))
    return null
  }
  if (block.lang && /^html$/i.test(block.lang)) {
    onError(
      new Error(`Language "${block.lang}" in template block is not supported.`)
    )
    return null
  }

  try {
    return {
      ...block,
      ast: parseHTML(block.content, sourceFilename),
    }
  } catch (error) {
    error.block = 'template'
    error.lang = 'html'

    onError(error)
  }

  return null
}

export function parse({ source, sourceFilename, onError }: ParserOptions) {
  const { descriptor, errors } = parseSFC(source, {
    sourceMap: true,
    filename: sourceFilename,
    pad: 'line',
  })

  const sfc = descriptor as EnhancedSFCDescriptor

  if (errors.length) {
    errors.forEach(onError)
  }

  if (descriptor.script) {
    sfc.script = parseScriptBlock(descriptor.script, {
      sourceFilename,
      onError,
    })
  }

  if (descriptor.template) {
    sfc.template = parseTemplateBlock(descriptor.template, {
      sourceFilename,
      onError,
    })
  }

  return sfc
}

export interface ParserOptions extends BlockParserOptions {
  source: string
}

export interface BlockParserOptions {
  sourceFilename: string
  onError(error: Error): void
}
