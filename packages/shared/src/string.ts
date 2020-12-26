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

const camelizeRE = /[^A-Za-z0-9]+([A-Za-z0-9])/g
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
  return str.includes('-')
}

export function isPascalCase(str: string): boolean {
  return /^[A-Z][A-Za-z0-9]*$/.test(str)
}

export function isCamelCase(str: string): boolean {
  return /^[a-z][A-Za-z0-9]*$/.test(str)
}
