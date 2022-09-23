import * as Path from 'path'
import { toPosixPath } from './path'
import { isKebabCase, kebabCase, pascalCase } from './string'

export function getComponentName(fileName: string): string {
  const name = pascalCase(
    Path.posix
      .basename(toPosixPath(fileName))
      .replace(/\.(vue|ts|tsx|js|jsx)$/, ''),
  )

  return prefixIfStartsWithNumber(name)
}

function prefixIfStartsWithNumber(name: string): string {
  if (/^[0-9]/.test(name)) {
    return `_${name}`
  } else return name
}

export function getComponentNameAliases(
  fileNameOrComponentName: string,
): string[] {
  const name = Path.posix
    .basename(toPosixPath(fileNameOrComponentName))
    .replace(/\.(vue|ts|tsx|js|jsx)$/, '')
  return isKebabCase(name)
    ? [prefixIfStartsWithNumber(kebabCase(name))]
    : [
        prefixIfStartsWithNumber(kebabCase(name)),
        prefixIfStartsWithNumber(pascalCase(name)),
      ]
}
