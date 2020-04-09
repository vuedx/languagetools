import { baseInspect } from './inspector'
import FS from 'fs'
import Path from 'path'
import { InspectorOptions } from './interfaces'
import { ComponentPublicAPIInspectorPlugin } from './plugins/public-api'
import { VueComponentInfo } from './VueComponentInfo'

export async function inspect(
  fileName: string,
  options: Partial<InspectorOptions> = {}
): Promise<VueComponentInfo> {
  const ref: InspectorOptions = {
    async load(id) {
      if (options.load) return options.load(id)
      const content = await FS.promises.readFile(id, { encoding: 'utf8' })

      return {
        filename: id,
        content: content,
      }
    },
    async resolve(imported, importee) {
      if (options.resolve) return options.resolve(imported, importee)

      return imported.startsWith('/')
        ? imported
        : Path.resolve(Path.dirname(importee), imported)
    },
    onError(error) {
      if (options.onError) return options.onError(error)

      throw error
    },
    plugins: [ComponentPublicAPIInspectorPlugin],
  }

  if (options.plugins) ref.plugins.push(...options.plugins)

  const { info } = await baseInspect(await ref.load(fileName), ref)

  return info
}
