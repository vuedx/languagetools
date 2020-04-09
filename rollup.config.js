const Path = require('path')
const Fs = require('fs')
const ts = require('rollup-plugin-typescript2')
const node = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
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
createConfig('.', ['extension'])

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
      const options = {
        input: Path.relative(projectDir, Path.resolve(pkgDir, 'src/index.ts')),
        external: ['path', 'fs', 'vscode', 'events', 'querystring', 'assert']
          .concat(Object.keys(pkg.dependencies || {}))
          .concat(external),
        plugins: [json(), node(), createTs(pkgDir), replace(env), , commonjs()],
      }

      if (isProd) {
        options.plugins.push(terser())
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
