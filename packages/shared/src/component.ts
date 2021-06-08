import * as Path from 'path'
import { isKebabCase, kebabCase, pascalCase } from './string'

export function getComponentName(fileName: string): string {
  return pascalCase(
    Path.posix.basename(fileName).replace(/\.(vue|ts|tsx|js|jsx)$/, ''),
  )
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
