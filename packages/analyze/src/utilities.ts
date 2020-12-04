import Path from 'path'
import { ScriptAnalyzerContext, Context } from './types'
import { Node } from '@babel/types'
import { SourceRange } from './component'

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null
}

export function getComponentName(fileName: string): string {
  return pascalCase(
    Path.posix.basename(fileName).replace(/\.(vue|ts|tsx|js|jsx)$/, ''),
  )
}

export function getComponentNameAliases(
  fileNameOrComponentName: string,
): string[] {
  const name = getComponentName(fileNameOrComponentName)

  return [kebabCase(name), name]
}

export function createSourceRange(
  context: Context | ScriptAnalyzerContext,
  node: Node,
): SourceRange {
  if (node.start == null || node.end == null || node.loc == null) {
    return {
      source: '',
      start: { offset: 0, line: 0, column: 0 },
      end: { offset: 0, line: 0, column: 0 },
    }
  } else {
    const source =
      'source' in context ? context.source : context.descriptor.source

    return {
      source: source.substring(node.start, node.end),
      start: {
        offset: node.start,
        line: node.loc.start.line,
        column: node.loc.start.column,
      },
      end: {
        offset: node.end,
        line: node.loc.end.line,
        column: node.loc.end.column,
      },
    }
  }
}

const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit ?? (cache[str] = fn(str))
  }) as any
}

const camelizeRE = /-(\w)/g
/**
 * @private
 */
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c != null ? c.toUpperCase() : ''))
})

const hyphenateRE = /\B([A-Z])/g
/**
 * @private
 */
export const hyphenate = cacheStringFunction((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

/**
 * @private
 */
export const capitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

export const pascalCase = cacheStringFunction((str: string) =>
  capitalize(camelize(str)),
)
export const kebabCase = hyphenate

export function isKebabCase(str: string): boolean {
  return str.includes('-')
}
