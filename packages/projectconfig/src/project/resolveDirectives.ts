import { isString } from '@vuedx/shared'
import Path from 'path'
import type { ImportSource } from '../config/ImportSource'

export function resolveDirectives(
  rootDir: string,
  resources: Array<string | Record<string, string | ImportSource>>,
): Record<string, ImportSource[]> {
  const directives: Record<string, ImportSource[]> = {}

  const add = (name: string, source: ImportSource): void => {
    const sources = directives[name] ?? (directives[name] = [])
    if (
      sources.some(
        (item) =>
          item.moduleName === source.moduleName &&
          item.exportName === source.exportName,
      )
    ) {
      return // duplicate
    }

    sources.push(source)
  }

  for (const resource of resources) {
    if (isString(resource)) {
      // ~ not supported for directives.
    } else
      Object.entries(resource).forEach(([key, value]) => {
        add(key, isString(value) ? { moduleName: resolve(value) } : value)
      })
  }

  return directives

  function resolve(resource: string): string {
    if (resource.startsWith('.')) return Path.posix.resolve(rootDir, resource)
    else return resource
  }
}
