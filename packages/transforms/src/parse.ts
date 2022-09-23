import { parse as parseUsingBabel, ParserOptions } from '@babel/parser'
import * as T from '@babel/types'
import { RequiredProperties } from './RequiredProperties'

export interface ParseOptions extends ParserOptions {
  isScriptSetup: boolean
  lang: string
}

export function parse(
  code: string,
  options: Partial<ParseOptions> = {},
): T.File {
  const { isScriptSetup = false, lang = 'js', ...config } = options
  const finalOptions: RequiredProperties<ParserOptions, 'plugins'> = {
    sourceType: 'module' as const,
    allowAwaitOutsideFunction: isScriptSetup,
    ...config,
    ranges: true,
    errorRecovery: true,
    plugins: [
      'bigInt',
      'nullishCoalescingOperator',
      'optionalChaining',
      'optionalCatchBinding',
      'dynamicImport',
      'logicalAssignment',
    ],
  }

  if (options.plugins != null) finalOptions.plugins.push(...options.plugins)

  if (isScriptSetup) {
    finalOptions.plugins.push('topLevelAwait')
  }

  if (lang.startsWith('ts')) {
    finalOptions.plugins.push('typescript')
  }

  if (lang.endsWith('x')) {
    finalOptions.plugins.push('jsx')
  }

  finalOptions.plugins = Array.from(new Set(finalOptions.plugins))

  return parseUsingBabel(code, finalOptions) as any
}
