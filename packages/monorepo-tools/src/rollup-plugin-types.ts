import * as Path from 'node:path'
import { OutputAsset, Plugin, rollup } from 'rollup'
import dts from 'rollup-plugin-dts'

export function types(enabled = false): Plugin {
  const cache = new Map<string, OutputAsset>()
  let input: string | null = null

  return {
    name: 'types',
    options(options) {
      if (typeof options.input === 'string') {
        input = options.input
      }
    },
    async generateBundle(options, bundle) {
      if (!enabled) return
      if (options.file == null || input == null) return
      if (options.file.endsWith('.d.ts')) return // already a types file

      const dir = Path.dirname(options.file)
      const entry = Path.basename(input.replace(/\.ts$/, '.d.ts'))
      if (bundle[entry] == null) return

      Object.keys(bundle)
        .filter((file) => file.endsWith('.d.ts') || file.endsWith('.d.ts.map'))
        .forEach((id) => {
          if (bundle[id]?.type !== 'asset')
            throw new Error('Expected asset for .d.ts file')
          cache.set(id, bundle[id] as OutputAsset)
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete bundle[id]
        })

      function isAsset(id: string): boolean {
        const relativeId = Path.relative(dir, id)
        return cache.has(relativeId)
      }

      const build = await rollup({
        input: Path.resolve(dir, entry),
        plugins: [
          {
            name: 'bundle',
            resolveId(id, importer) {
              if (!Path.isAbsolute(id)) {
                if (!id.startsWith('.') || importer == null) {
                  return { id, external: true }
                }

                id = Path.resolve(Path.dirname(importer), id)
              }

              if (!id.endsWith('.d.ts')) {
                if (isAsset(id + '.d.ts')) id = id + '.d.ts'
                else if (isAsset(id + '/index.d.ts')) id = id + '/index.d.ts'
              }

              if (!isAsset(id)) return
              return id
            },
            load(id) {
              if (!isAsset(id)) return
              const relativeId = Path.relative(dir, id)
              const codeAsset = cache.get(relativeId) as OutputAsset | null
              if (codeAsset == null) return
              const mapAsset = cache.get(
                relativeId + '.map',
              ) as OutputAsset | null
              if (mapAsset == null) throw new Error('Enabled declaration maps')

              return {
                code: codeAsset.source as string,
                map: JSON.parse(mapAsset.source as string),
              }
            },
          },
          dts(),
        ],
      })

      const { output } = await build.generate({
        format: 'module',
        sourcemap: true,
        file: entry,
      })

      output.forEach((chunk) => {
        bundle[chunk.fileName] = chunk
      })
    },

    buildEnd() {
      cache.clear()
    },
  }
}
