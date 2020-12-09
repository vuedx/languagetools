import Path from 'path'
import { kebabCase, pascalCase } from './string'

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
