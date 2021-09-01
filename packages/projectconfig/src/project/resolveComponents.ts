import { getComponentName, isString } from '@vuedx/shared'
import Path from 'path'
import type { ImportSource } from '../config/ImportSource'

export function resolveComponents(
  rootDir: string,
  resources: Array<string | Record<string, string | ImportSource>>,
): Record<string, ImportSource[]> {
  const components: Record<string, ImportSource[]> = {}

  const add = (name: string, source: ImportSource): void => {
    const sources = components[name] ?? (components[name] = [])
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
      add(getComponentName(resource), {
        moduleName: resolve(resource),
      })
    } else
      Object.entries(resource).forEach(([key, value]) => {
        add(key, isString(value) ? { moduleName: resolve(value) } : value)
      })
  }

  return components

  function resolve(resource: string): string {
    if (resource.startsWith('.')) return Path.posix.resolve(rootDir, resource)
    else return resource
  }
}
