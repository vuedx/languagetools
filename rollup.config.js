import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import builtIns from 'builtin-modules'
import MagicString from 'magic-string'
import Path from 'path'
import dts from 'rollup-plugin-dts'

import { sync as glob } from 'fast-glob'

const files = glob(['packages/src/**/*.ts'], { cwd: process.cwd() })

/** @type {import('rollup').RollupOptions[]} */
const config = [
  type('shared'),
  type('projectconfig'),
  type('compiler-sfc'),
  type('template-ast-types'),
  { ...type('compiler-tsx'), input: abs('packages/compiler-tsx/src/entry.ts') },
  type('analyze'),
  type('vue-virtual-textdocument'),
  type('typescript-plugin-vue'),
  {
    ...type('typescript-plugin-vue', true),
    input: abs('packages/typescript-plugin-vue/types/vue-2.d.ts'),
    output: [
      {
        format: 'es',
        file: abs('packages/typescript-standalone/runtime/vue-2.d.ts'),
      },
      {
        format: 'es',
        file: abs('packages/typescript-plugin-vue/runtime/vue-2.d.ts'),
      },
    ],
    external: [],
    treeshake: false,
  },
  type('typecheck'),
  type('typescript-vetur'),

  bundle('shared'),
  {
    ...bundle(
      'compiler-sfc',
      [processVueSFC()],
      [
        '@babel/parser',
        '@babel/types',
        '@vue/compiler-dom',
        '@vue/compiler-ssr',
        'consolidate',
        'estree-walker',
        'lru-cache',
        'hash-sum',
        'magic-string',
        'merge-source-map',
        'path',
        'postcss-modules',
        'postcss-selector-parser',
        'postcss',
        'source-map',
        'url',
      ],
    ),

    treeshake: {
      moduleSideEffects: () => false,
    },
    onwarn(warning, warn) {
      if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
      warn(warning)
    },
  },
  bundle('template-ast-types'),
  bundle('compiler-tsx'),
  bundle('analyze'),
  bundle('vue-virtual-textdocument'),
  bundle('typescript-plugin-vue'),
  bundle('typecheck', [], ['typescript/lib/tsserverlibrary']),
  bundle('typescript-vetur'),

  extension('coc-vue'),
  // extension('vscode-vue-language-features'),
]

const isWatch = process.argv.includes('-w') || process.argv.includes('--watch')

export default config
  .filter((config) => input(config).match(process.env.FILTER || ''))
  .filter((config) => kind(config).match(process.env.KIND || ''))

/**
 * @param {string} name
 * @param {import('rollup').Plugin[]} [plugins]
 * @param {string[]} external
 * @returns {import('rollup').RollupOptions}
 */
function bundle(name, plugins = [], external = []) {
  return {
    input: `packages/${name}/src/index.ts`,
    output: [
      {
        format: 'esm',
        file: abs(`./packages/${name}/dist/index.esm.js`),
        preferConst: true,
        sourcemap: true,
        sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
          return isWatch
            ? Path.resolve(Path.dirname(sourcemapPath), relativeSourcePath)
            : relativeSourcePath
        },
      },
      {
        format: 'cjs',
        file: abs(`./packages/${name}/dist/index.cjs.js`),
        preferConst: true,
        sourcemap: true,
        exports: 'auto',
        sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
          return isWatch
            ? Path.resolve(Path.dirname(sourcemapPath), relativeSourcePath)
            : relativeSourcePath
        },
      },
    ],
    plugins: [
      define(),
      ...plugins,
      json(),
      resolve({ mainFields: ['module', 'main'], preferBuiltins: true }),
      typescript({ tsconfig: abs(`./packages/${name}/tsconfig.build.json`) }),
    ],
    treeshake: {
      moduleSideEffects: (id, external) => !external,
    },
    external: [
      ...deps(`./packages/${name}/package.json`),
      ...external,
      ...builtIns,
    ],
    watch: {
      include: files,
    },
  }
}

/**
 * @param {string} name
 * @param {import('rollup').Plugin[]} [plugins]
 * @returns {import('rollup').RollupOptions}
 */
function extension(name, plugins = []) {
  return {
    input: abs(`./extensions/${name}/src/index.ts`),
    output: {
      format: 'cjs',
      file: abs(`./extensions/${name}/dist/index.js`),
      preferConst: true,
      sourcemap: true,
      exports: 'auto',
    },
    plugins: [
      define(),
      ...plugins,
      resolve({ preferBuiltins: true }),
      json(),
      typescript({ tsconfig: abs(`./extensions/${name}/tsconfig.build.json`) }),
      commonjs({
        transformMixedEsModules: true,
        dynamicRequireTargets: [
          // 'node_modules/inversify/lib/syntax/*.js',
          // 'node_modules/@babel/types/**/*.js',
          // 'node_modules/@babel/traverse/**/*.js',
        ].reduce((items, item) => {
          items.push(`node_modules/.pnpm/**/${item}`)

          return items
        }, []),
      }),
    ],
    treeshake: {
      moduleSideEffects: () => false,
    },
    moduleContext: () => 'undefined',
    external: [
      'vscode',
      'coc.nvim',
      ...builtIns,
      ...deps(`./extensions/${name}/package.json`),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return
      warn(warning)
    },
    watch: { clearScreen: false },
  }
}

/**
 * @param {string} name
 * @param {boolean|undefined} [respectExternal]
 * @returns {import('rollup').RollupOptions}
 */
function type(name, respectExternal) {
  return {
    input: `packages/${name}/src/index.ts`,
    output: {
      format: 'esm',
      file: abs(`./packages/${name}/dist/index.d.ts`),
    },
    plugins: [
      dts({ respectExternal, compilerOptions: { noImplicitAny: false } }),
    ],
    watch: {
      include: files,
    },
  }
}

/**
 * @param {import('rollup').RollupOptions} config
 */
function kind(config) {
  const output = Array.isArray(config.output) ? config.output : [config.output]
  if (output.every((output) => output.file.endsWith('.d.ts'))) return 'type'
  if (output.every((output) => output.file.endsWith('standalone.js')))
    return 'standalone'

  return 'bundle'
}

/**
 * @param {import('rollup').RollupOptions} config
 */
function input(config) {
  if (typeof config.input === 'string') return config.input
  return ''
}

/**
 * @returns {import('rollup').Plugin}
 */
function processVueSFC() {
  return {
    name: 'VueSFC',

    transform(code, id) {
      const string = new MagicString(code, {
        filename: id,
        indentExclusionRanges: [],
      })

      const RE_IMPORT = /var ([^ ]+) = require\('([^']+)'\);/g
      const RE_EXPORT_FROM = /(exports.[^ ]+ = )(require\('([^']+)'\))/g
      const RE_EXPORT = /^exports\.([^\s]+) = ([A-Za-z0-9_$]+(?=;))?/gm
      const RE_DEFAULT_EXPORT = /^module\.exports = ([A-Za-z0-9_$]+);/gm
      const RE_POSTCSS_PLUGINS = /^var ([^\s]+) = postcss/gm
      const RE_DOM = /\bcompiler = CompilerDOM__namespace\b/g
      const RE_LRU = /require\('lru-cache'\)/g
      const RE_MODULE = /Object\.defineProperty\(exports, '__esModule', \{ value: true \}\);/g

      let match

      while ((match = RE_IMPORT.exec(code))) {
        const path = match[2]

        string.overwrite(
          match.index,
          match.index + match[0].length,
          `import * as ${match[1]} from '${path}';`,
        )
      }

      while ((match = RE_EXPORT_FROM.exec(code))) {
        const name = match[3].replace(/[^a-z0-9]/gi, '_')

        string.overwrite(
          match.index + match[1].length,
          match.index + match[1].length + match[2].length,
          `${name}`,
        )

        string.prepend(`import * as ${name} from '${match[3]}'`)
      }

      while ((match = RE_EXPORT.exec(code))) {
        const next = code.substr(match.index + match[0].length)

        if (next.startsWith('supportsNullProto ?')) {
          string.overwrite(
            match.index,
            match.index + match[0].length + (next.indexOf(';') + 1),
            `export { ${match[1]} };`,
          )
        } else {
          string.overwrite(
            match.index,
            match.index + match[0].length,
            match[1] === match[2]
              ? `export { ${match[1]} };`
              : `export const ${match[1]} = `,
          )
        }
      }
      while ((match = RE_POSTCSS_PLUGINS.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `var ${match[1]} = /*#__PURE__*/ postcss`,
        )
      }

      while ((match = RE_DOM.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          ` compiler = { parse: compilerCore.baseParse } `,
        )
      }

      while ((match = RE_DEFAULT_EXPORT.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `export default ${match[1]}`,
        )
      }

      while ((match = RE_LRU.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `LRUCache$1`,
        )
      }

      while ((match = RE_MODULE.exec(code))) {
        string.overwrite(match.index, match.index + match[0].length, ``)
      }

      string.prepend(`import LRUCache$1 from 'lru-cache';\n`)

      return {
        code: string.toString(),
        map: string.generateMap(),
      }
    },
  }
}

function abs(fileName) {
  return Path.resolve(__dirname, fileName)
}

function deps(fileName) {
  return Array.from(Object.keys(require(abs(fileName)).dependencies || {}))
}

function define() {
  const BUILD = process.env.BUILD || 'production'
  const isProd = BUILD === 'production'
  return replace({
    __DEV__: JSON.stringify(!isProd),
    __PROD__: JSON.stringify(isProd),
  })
}
