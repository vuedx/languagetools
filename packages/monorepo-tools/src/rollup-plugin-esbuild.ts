import { readFile } from 'node:fs/promises'
import { builtinModules, createRequire } from 'node:module'
import Path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { OutputChunk, OutputOptions, Plugin, SourceMap } from 'rollup'

export function esbuild(
  config: boolean | import('esbuild').BuildOptions,
  minify: boolean = process.env['CI'] != null,
): Plugin {
  return {
    name: 'esbuild',
    async generateBundle(options, bundle) {
      invariant(options.file, 'esbuild requires a single output file')
      const entry = Path.basename(options.file)
      const dir = Path.dirname(options.file)
      const chunk = bundle[entry] as OutputChunk
      invariant(chunk, 'entry chunk not found')
      const esbuild = await import('esbuild')
      config = config === true ? {} : config
      invariant(config)
      const format = config.format ?? getFormat(options)
      const { errors, warnings, outputFiles } = await esbuild.build({
        platform: 'neutral',
        format,
        ...config,
        absWorkingDir: dir,
        entryPoints: [options.file],
        mainFields: ['module', 'main'],
        plugins: [
          BundleLoaderPlugin(),
          NativeNodePackageResolver(config.platform),
          NodeModulesPackageResolver(),
        ],
        minify,
        write: false,
        bundle: true,
        splitting: false,
        sourcemap: 'external',
        outfile: `out/${entry}`,
      })

      errors.forEach((error) => {
        this.error({
          message: error.text,
          loc:
            error.location != null
              ? {
                  file: error.location.file,
                  line: error.location.line,
                  column: error.location.column,
                }
              : undefined,
        })
      })
      warnings.forEach((warning) => {
        this.warn({
          message: warning.text,
          loc:
            warning.location != null
              ? {
                  file: warning.location.file,
                  line: warning.location.line,
                  column: warning.location.column,
                }
              : undefined,
        })
      })
      invariant(outputFiles)
      const outDir = Path.join(dir, 'out')
      outputFiles.forEach((outputFile) => {
        const id = Path.relative(outDir, outputFile.path)
        if (id.endsWith('.map')) {
          const chunk = bundle[id.slice(0, -4)] as OutputChunk
          invariant(chunk)
          chunk.map = createSourceMap(outputFile.text)
        } else {
          bundle[id] = {
            ...chunk,
            type: 'chunk',
            fileName: Path.resolve(dir, id),
            code: outputFile.text,
          }
        }
      })

      function BundleLoaderPlugin(): import('esbuild').Plugin {
        return {
          name: 'bundle-loader',
          setup(build) {
            build.onResolve({ filter: /./ }, ({ path }) => {
              if (!path.startsWith(dir)) return null
              const id = Path.relative(dir, path)
              const chunk = bundle[id] as OutputChunk | undefined
              if (chunk == null) return null
              return { namespace: 'bundle', path: id }
            })
            build.onLoad(
              { namespace: 'bundle', filter: /./ },
              ({ path: id }) => {
                const chunk = bundle[id] as OutputChunk | undefined
                if (chunk == null) return null
                const sourcemap = chunk.map?.toUrl()
                const code =
                  chunk.code +
                  (sourcemap != null
                    ? `\n//# sourceMappingURL=${sourcemap}`
                    : '')

                return { contents: code, resolveDir: dir }
              },
            )
          },
        }
      }
    },
  }
}

function NativeNodePackageResolver(
  platform?: import('esbuild').Platform,
): import('esbuild').Plugin {
  return {
    name: 'node-package-loader',
    setup(build) {
      if (platform === 'node') return
      build.onResolve({ filter: /./ }, async ({ path }) => {
        const name = path.startsWith('node:') ? path.slice(5) : path
        if (builtinModules.includes(name)) {
          const dir = Path.dirname(getCurrentFileName())
          const absPackagePath = Path.resolve(
            dir,
            '../node_modules/',
            '@jspm/core',
            'nodelibs/browser',
            `${name}.js`,
          )

          return {
            path: absPackagePath,
          }
        }

        return null
      })
    },
  }
}

function NodeModulesPackageResolver(): import('esbuild').Plugin {
  return {
    name: 'node-modules-loader',
    setup(build) {
      build.onResolve(
        { filter: /^[^.\\/]/ },
        async ({ path, kind, namespace, resolveDir }) => {
          if (build.initialOptions.external?.includes(path) === true) {
            return null
          }
          if (resolveDir == null || namespace !== 'bundle') return null
          if (path.startsWith('node:') || builtinModules.includes(path)) {
            return null
          }

          const require = createRequire(Path.resolve(resolveDir, 'index.js'))
          try {
            const absPackagePath = require.resolve(`${path}/package.json`)
            if (absPackagePath == null) return null
            const pkg = JSON.parse(await readFile(absPackagePath, 'utf-8'))
            const main =
              kind === 'require-call' ? pkg.main : pkg.module ?? pkg.main
            if (main == null) return null
            return { path: Path.resolve(Path.dirname(absPackagePath), main) }
          } catch {
            const absPackagePath = require.resolve(path)
            if (absPackagePath == null) return null
            return { path: absPackagePath }
          }
        },
      )
    },
  }
}

function getFormat(options: OutputOptions): import('esbuild').Format {
  switch (options.format) {
    case 'es':
    case 'esm':
    case 'module':
      return 'esm'
    case 'cjs':
    case 'commonjs':
      return 'cjs'
    case 'iife':
      return 'iife'
    default:
      throw new Error(`Unsupported format ${String(options.format)}`)
  }
}

function invariant(
  value: unknown,
  message: string = 'invariant failed',
): asserts value {
  if (value == null || value === false) {
    throw new Error(message)
  }
}

function getCurrentFileName(): string {
  try {
    return fileURLToPath(import.meta.url)
  } catch {
    return __filename
  }
}

function createSourceMap(contents: string): SourceMap {
  const map = JSON.parse(contents)

  return {
    ...map,
    toString: () => contents,
    toUrl: () =>
      `data:application/json;charset=utf-8;base64,${Buffer.from(
        contents,
      ).toString('base64')}`,
  }
}
