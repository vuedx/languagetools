import * as Path from 'path'
import { isKebabCase, kebabCase, pascalCase } from './string'

export function getComponentName(fileName: string): string {
  const name = pascalCase(
    Path.posix.basename(fileName).replace(/\.(vue|ts|tsx|js|jsx)$/, ''),
  )

  if (/^0-9/.test(name)) {
    return `_${name}`
  }

  return name
}

export function getComponentNameAliases(
  fileNameOrComponentName: string,
): string[] {
  const name = Path.posix
    .basename(fileNameOrComponentName)
    .replace(/\.(vue|ts|tsx|js|jsx)$/, '')

  return isKebabCase(name)
    ? [kebabCase(name)]
    : [kebabCase(name), pascalCase(name)]
}
