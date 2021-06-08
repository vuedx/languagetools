import type {
  ExternalOption,
  ModuleFormat,
  OutputChunk,
  OutputOptions,
  Plugin,
} from 'rollup'

import { build, BuildOptions, PartialMessage, version } from 'esbuild'
import * as Path from 'path'
import resolveModule from 'resolve'

export function esbuild(
  config: boolean | BuildOptions,
  getExternal: () => ExternalOption | undefined,
): Plugin {
  let format: 'iife' | 'cjs' | 'esm' = 'esm'
  let outputOptions!: OutputOptions

  return {
    name: 'esbuild',
    outputOptions(options) {
      outputOptions = options

      if (options.format != null) {
        if (
          new Set<ModuleFormat>([
            'amd',
            'iife',
            'system',
            'systemjs',
            'umd',
          ]).has(options.format)
        ) {
          throw new Error(`Rollup output format: ${options.format}`)
        } else if (
          new Set<ModuleFormat>(['commonjs', 'cjs']).has(options.format)
        ) {
          format = 'cjs'
        } else if (options.format === 'iife') {
          format = 'iife'
        }
      }

      return {
        ...options,
        format: 'esm',
      }
    },
    async generateBundle(options, bundle) {
      const defaults: BuildOptions = typeof config === 'boolean' ? {} : config

      options.sourcemap = outputOptions.sourcemap ?? false

      if (options.file == null) {
        throw new Error(`'bundle' is supported only for 'file' output`)
      }

      const fileName = options.file
      const key = Path.basename(options.file)
      const file = bundle[key]

      if (file == null || file.type === 'asset') {
        throw new Error(`'${key}' is not found in bundle`)
      }

      const result = await build({
        bundle: true,
        splitting: false,
        preserveSymlinks: true,
        format: format,
        platform: 'node',
        external: [],
        mainFields: ['module', 'main'],
        allowOverwrite: true,
        banner: { js: `/* Bundled with ESBuild v${version} */` },
        outfile: options.file,
        treeShaking: true,
        resolveExtensions: ['.mjs', '.js', '.cjs'],
        ...defaults,
        sourcemap: 'external',
        entryPoints: [options.file],
        plugins: [
          {
            name: 'rollup',
            setup: (build) => {
              build.onResolve({ filter: /.+/ }, async ({ path, importer }) => {
                if (path === options.file) {
                  return { path: options.file }
                }

                let external = isExternal(getExternal(), path, importer)
                let resolved: string | undefined
                const warnings: PartialMessage[] = []
                const fromRollup = await this.resolve(path, importer)

                if (fromRollup == null || external) {
                  resolved = await resolveExternalPackage(path, importer)
                  if (resolved == null) {
                    external = true
                    resolved = path
                    if (defaults.external?.includes(path) !== true) {
                      warnings.push({
                        text: `Module "${path}" is treated as external dependency`,
                      })
                    }
                  } else {
                    external = false
                  }
                } else {
                  resolved = fromRollup.id
                  external =
                    fromRollup.external === 'absolute'
                      ? false
                      : fromRollup.external
                }

                return {
                  external,
                  path: resolved,
                  warnings,
                }
              })
              build.onLoad({ filter: /.+/ }, async ({ path }) => {
                if (path === options.file) {
                  return {
                    contents: file.code + getSourceMapString(file),
                    resolveDir: Path.basename(path),
                    loader: 'js',
                  }
                }

                return undefined
              })
            },
          },
        ],
        write: false,
        watch: false,
      })

      result.errors.forEach((error) => {
        this.error({
          message: error.text,
          loc:
            error.location != null
              ? {
                  file: error.location.file,
                  column: error.location.column,
                  line: error.location.line,
                }
              : undefined,
        })
      })

      result.warnings.forEach((warning) => {
        this.warn({
          message: warning.text,
          loc:
            warning.location != null
              ? {
                  file: warning.location.file,
                  column: warning.location.column,
                  line: warning.location.line,
                }
              : undefined,
        })
      })

      result.outputFiles.forEach((outFile) => {
        if (outFile.path === options.file) {
          file.code = outFile.text
        } else if (outFile.path === `${fileName}.map`) {
          file.map = {
            ...JSON.parse(outFile.text),
            toString() {
              return outFile.text
            },
            toUrl() {
              throw new Error(`Internal source map not supported`)
            },
          }
        } else {
          throw new Error(`Code splitting is not supported in bundle mode.`)
        }
      })
    },
  }
}
function isExternal(
  external: ExternalOption | undefined,
  id: string,
  importer: string,
): boolean {
  if (typeof external === 'function') {
    return external(id, importer, false) === true
  } else if (Array.isArray(external)) {
    return external.some((external) => isExternal(external, id, importer))
  } else if (typeof external === 'string') {
    return external === id
  } else if (external instanceof RegExp) {
    return external.test(id)
  } else {
    return false
  }
}

function resolveExternalPackage(
  path: string,
  importer: string,
): string | PromiseLike<string | undefined> | undefined {
  return new Promise<string | undefined>((resolve) => {
    resolveModule(
      path,
      {
        extensions: ['.mjs', '.js', '.cjs'],
        packageFilter: (pkg) => ({
          ...pkg,
          main: pkg.module ?? pkg.main,
        }),
        basedir: Path.dirname(importer),
      },
      (_, resolved?: string) => {
        resolve(resolved)
      },
    )
  })
}

function getSourceMapString(file: OutputChunk): string {
  if (file.map == null) return ''

  return `\n//# sourceMappingURL=data:application/json;base64,${Buffer.from(
    JSON.stringify(file.map),
  ).toString('base64')}`
}
