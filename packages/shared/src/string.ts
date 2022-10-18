import { first } from './array'

export function isString(value: any): value is string {
  return typeof value === 'string'
}

const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit ?? (cache[str] = fn(str))
  }) as any
}

const camelizeRE = /[^A-Za-z0-9]+([A-Za-z0-9])?/g
export const camelize = cacheStringFunction((str: string): string => {
  return uncapitalize(
    str.replace(camelizeRE, (_, c) =>
      typeof c === 'string' ? c.toUpperCase() : '',
    ),
  )
})

export const camelCase = camelize

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cacheStringFunction((str: string): string => {
  return camelize(str).replace(hyphenateRE, '-$1').toLowerCase()
})

export const capitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

export const uncapitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1)
})

export const pascalCase = cacheStringFunction((str: string) =>
  capitalize(camelize(str)),
)
export const kebabCase = hyphenate

export function isKebabCase(str: string): boolean {
  return str.includes('-') || /^[a-z0-9]+$/.test(str)
}

export function isPascalCase(str: string): boolean {
  return /^[A-Z][A-Za-z0-9]*$/.test(str)
}

export function isCamelCase(str: string): boolean {
  return /^[a-z][A-Za-z0-9]*$/.test(str)
}

export function generateUUID(): string {
  return new Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
    .join('-')
}

export function ucfirst(str: string): string {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

export function lcfirst(str: string): string {
  return str.slice(0, 1).toLowerCase() + str.slice(1)
}

export function trimIndent(content: string): string {
  const lines = content
    .trimStart()
    .replace(/\n\s*$/, '')
    .split('\n')

  const indent = lines.slice(1).reduce((min, line) => {
    const match = line.match(/^\s+/)
    const len = match?.[0] != null ? match[0].length : 0
    return Math.min(min, len)
  }, Infinity)
  if (lines.length <= 1) return first(lines) + '\n'
  return (
    first(lines) +
    '\n' +
    lines
      .slice(1)
      .map((line) => line.slice(indent))
      .join('\n') +
    '\n'
  )
}
