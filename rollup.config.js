const Path = require('path')
const Fs = require('fs')
const ts = require('rollup-plugin-typescript2')
const node = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const cjs2es = require('rollup-plugin-cjs-es')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const replace = require('@rollup/plugin-replace')
const terser = require('rollup-plugin-terser').terser
const dts = require('rollup-plugin-dts').default

/** @type {import('rollup').RollupOptions[]} */
const configurations = []
const projectDir = __dirname
const filter = process.env.FILTER || ''
const isProd = process.env.BUILD === 'production'
const packages = Fs.readdirSync(
  Path.resolve(projectDir, './packages/@vuedx')
).filter((pkg) => pkg.match(filter))
const env = {
  __DEV__: isProd ? 'false' : 'process.env.NODE_ENV !== "production"',
}

createConfig('packages/@vuedx', packages)
createConfig(
  '.',
  ['extension'].filter((name) => name.match(filter))
)

export default configurations

function createTs(pkgDir) {
  return ts({
    check: false,
    tsconfigOverride: {
      compilerOptions: {
        module: 'ESNext',
        target: 'ES2018',
        baseUrl: '.',
        rootDir: pkgDir,
        paths: {},
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        sourceMap: true,
        declaration: false,
      },
      include: ['src'],
    },
  })
}
function createConfig(dir, names, external = []) {
  names.forEach((name) => {
    const pkgDir = Path.resolve(projectDir, dir, name)
    const outDir = Path.resolve(pkgDir, 'dist')
    const pkg = require(Path.resolve(pkgDir, 'package.json'))

    if (Fs.existsSync(outDir)) {
      Fs.rmdirSync(outDir, { recursive: true })
    }

    try {
      /** @type {import('rollup').RollupOptions} */
      const options = {
        input: Path.relative(projectDir, Path.resolve(pkgDir, 'src/index.ts')),
        external: [
          // VS Code
          'vscode',
          'postcss',
          // Node
          'path',
          'fs',
          'events',
          'querystring',
          'assert',
          'url',
          'util',
          'os',
        ]
          .concat(Object.keys(pkg.dependencies || {}))
          .concat(external),
        context: 'null',
        plugins: [json(), node(), createTs(pkgDir), replace(env), commonjs()],
        treeshake: {
          annotations: true,
          moduleSideEffects: false,
          unknownGlobalSideEffects: false,
          propertyReadSideEffects: false,
        },
        onwarn(warning, fn) {
          if (warning.code === 'CIRCULAR_DEPENDENCY') {
            if (/(inversify|postcss)/.test(warning.message)) return
          }
          fn(warning)
        },
      }

      if (/(typescript-plugin-vue|extension|vue-virtual-textdocument)/.test(name)) {
        options.plugins.push(
          replace({
            values: {
              'var trimPlugin = postcss.plugin': 'var trimPlugin =/*#__PURE__*/postcss.plugin',
              'var scopedPlugin = postcss.plugin': 'var scopedPlugin =/*#__PURE__*/postcss.plugin',
            }
          })
        )
        options.plugins.unshift(
          alias({
            entries: [
              {
                find: /^(consolidate|sass|less|stylus)$/,
                replacement: Path.resolve(
                  __dirname,
                  'scripts/empty-package.js'
                ),
              },
            ],
          })
        )
      }

      if (isProd) {
        // options.plugins.push(terser())
      }

      if (pkg.main) {
        configurations.push({
          ...options,
          output: {
            file: Path.resolve(pkgDir, pkg.main),
            format: 'cjs',
            sourcemap: true,
          },
        })
      }

      if (pkg.module) {
        configurations.push({
          ...options,
          output: {
            file: Path.resolve(pkgDir, pkg.module),
            format: 'esm',
            sourcemap: true,
          },
        })
      }

      if (pkg.types) {
        configurations.push({
          input: options.input,
          output: {
            file: Path.resolve(pkgDir, pkg.types),
            format: 'esm',
            sourcemap: true,
          },
          plugins: [dts()],
        })
      }
    } catch (e) {
      console.error(e)
    }
  })
}
