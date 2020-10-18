import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import dts from 'rollup-plugin-dts'
import MagicString from 'magic-string'
import Path from 'path'

function abs(fileName) {
  return Path.resolve(__dirname, fileName)
}

function deps(fileName) {
  return Array.from(Object.keys(require(abs(fileName)).dependencies ?? {}))
}

function define() {
  const isProd = process.env.BUILD === 'production'
  return replace({
    __DEV__: JSON.stringify(!isProd),
    __PROD__: JSON.stringify(isProd),
  })
}

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: 'packages/analyze/src/index.ts',
    output: { format: 'esm', file: abs('./packages/analyze/dist/index.d.ts') },
    plugins: [dts()],
  },
  {
    input: 'packages/compiler-sfc/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/compiler-sfc/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/compiler-tsx/src/entry.ts',
    output: {
      format: 'esm',
      file: abs('./packages/compiler-tsx/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/template-ast-types/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/template-ast-types/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/typecheck/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/typecheck/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/typescript-plugin-vue/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/typescript-plugin-vue/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/typescript-vetur/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/typescript-vetur/dist/index.d.ts'),
    },
    plugins: [dts()],
  },
  {
    input: 'packages/vue-virtual-textdocument/src/index.ts',
    output: {
      format: 'esm',
      file: abs('./packages/vue-virtual-textdocument/dist/index.d.ts'),
    },
    plugins: [dts()],
  },

  {
    input: 'packages/analyze/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/analyze/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/analyze/dist/index.cjs.js'),
        preferConst: true,
      },
    ],
    plugins: [
      define(),
      typescript({ tsconfig: abs('./packages/analyze/tsconfig.build.json') }),
    ],
    external: deps('./packages/analyze/package.json'),
  },
  {
    input: 'packages/compiler-sfc/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/compiler-sfc/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/compiler-sfc/dist/index.cjs.js'),
        preferConst: true,
      },
    ],
    plugins: [
      resolve({ mainFields: ['module', 'main'], preferBuiltins: true }),
      typescript({
        tsconfig: abs('./packages/compiler-sfc/tsconfig.build.json'),
      }),
      customCJS(),
    ],
    treeshake: {
      moduleSideEffects: () => false,
    },
    onwarn(warning, warn) {
      if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
      warn(warning)
    },
    external: [
      '@vue/compiler-core',
      'source-map',
      'lru-cache',
      '@babel/parser',
      '@babel/types',
      '@vue/compiler-dom',
      '@vue/compiler-ssr',
      '@vue/shared',
      'consolidate',
      'estree-walker',
      'hash-sum',
      'magic-string',
      'merge-source-map',
      'postcss',
      'postcss-modules',
      'postcss-selector-parser',
      'path',
      'url',
    ],
  },
  {
    input: 'packages/compiler-tsx/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/compiler-tsx/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/compiler-tsx/dist/index.cjs.js'),
        preferConst: true,
      },
    ],
    plugins: [
      define(),
      typescript({
        tsconfig: abs('./packages/compiler-tsx/tsconfig.build.json'),
      }),
    ],
    external: deps('./packages/compiler-tsx/package.json'),
  },
  {
    input: 'packages/typescript-plugin-vue/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/typescript-plugin-vue/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/typescript-plugin-vue/dist/index.cjs.js'),
        preferConst: true,
        exports: 'default',
      },
    ],
    plugins: [
      define(),
      typescript({
        tsconfig: abs('./packages/typescript-plugin-vue/tsconfig.build.json'),
      }),
    ],
    external: [
      ...deps('./packages/typescript-plugin-vue/package.json'),
      'path',
      'fs',
      'perf_hooks',
    ],
  },
  {
    input: 'packages/typescript-plugin-vue/src/index.ts',
    output: {
      format: 'cjs',
      file: abs('./packages/typescript-plugin-vue/dist/standalone.cjs.js'),
      preferConst: true,
      exports: 'default',
    },
    plugins: [
      define(),
      typescript({
        tsconfig: abs('./packages/typescript-plugin-vue/tsconfig.build.json'),
      }),
      resolve({ preferBuiltins: true }),
      commonjs(),
      json(),
    ],
    context: 'undefined',
    external: ['path', 'fs', 'perf_hooks', 'tty', 'util', 'os'],
    onwarn(warning, handle) {
      if (['CIRCULAR_DEPENDENCY', 'THIS_IS_UNDEFINED'].includes(warning.code))
        return
      handle(warning)
    },
  },
  {
    input: 'packages/typescript-vetur/src/index.ts',
    output: [
      {
        format: 'cjs',
        file: abs('./packages/typescript-vetur/dist/index.cjs.js'),
        preferConst: true,
        exports: 'default',
      },
    ],
    plugins: [
      define(),
      typescript({
        tsconfig: abs('./packages/typescript-vetur/tsconfig.build.json'),
      }),
    ],
    external: deps('./packages/typescript-vetur/package.json'),
  },
  {
    input: 'packages/template-ast-types/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/template-ast-types/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/template-ast-types/dist/index.cjs.js'),
        preferConst: true,
      },
    ],
    plugins: [
      define(),
      typescript({
        tsconfig: abs('./packages/template-ast-types/tsconfig.build.json'),
      }),
    ],
    external: deps('./packages/template-ast-types/package.json'),
  },
  {
    input: 'packages/vue-virtual-textdocument/src/index.ts',
    output: [
      {
        format: 'esm',
        file: abs('./packages/vue-virtual-textdocument/dist/index.esm.js'),
        preferConst: true,
      },
      {
        format: 'cjs',
        file: abs('./packages/vue-virtual-textdocument/dist/index.cjs.js'),
        preferConst: true,
      },
    ],
    plugins: [
      define(),
      typescript({
        tsconfig: abs(
          './packages/vue-virtual-textdocument/tsconfig.build.json',
        ),
      }),
    ],
    external: deps('./packages/vue-virtual-textdocument/package.json'),
  },
]

export default config
  .filter(
    (config) =>
      typeof config.input === 'string' &&
      config.input.match(process.env.FILTER ?? ''),
  )
  .filter((config) =>
    process.env.TYPES != 'no'
      ? true
      : Array.isArray(config.output) || !config.output.file?.endsWith('.d.ts'),
  )
  .filter((config) =>
    process.env.STANDALONE == 'yes'
      ? true
      : Array.isArray(config.output) ||
        !config.output.file?.includes('standalone'),
  )

/**
 * @returns {import('rollup').Plugin}
 */
function customCJS() {
  return {
    name: 'VueSFC',

    transform(code, id) {
      const string = new MagicString(code, {
        filename: id,
        indentExclusionRanges: [],
      })

      const RE_IMPORT = /var ([^ ]+) = require\('([^']+)'\);/g
      const RE_EXPORT = /^exports\.([^\s]+) = ([^;]+);/gm
      const RE_POSTCSS_PLUGINS = /^var ([^\s]+) = postcss/gm
      const RE_DOM = /\scompiler = CompilerDOM__namespace\s/g
      const RE_LRU = /require\('lru-cache'\)/g
      const RE_MODULE = /Object\.defineProperty\(exports, '__esModule', \{ value: true \}\);/g

      let match
      while ((match = RE_IMPORT.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `import * as ${match[1]} from '${match[2]}';`,
        )
      }
      while ((match = RE_EXPORT.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          match[2].includes('.')
            ? `export const ${match[1]} = ${match[2]};`
            : `export { ${match[1]} };`,
        )
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
          ` compiler = { compile: compilerCore.baseCompile, parse: compilerCore.baseParse } `,
        )
      }

      while ((match = RE_LRU.exec(code))) {
        string.overwrite(match.index, match.index + match[0].length, `LRU$1`)
      }

      while ((match = RE_MODULE.exec(code))) {
        string.overwrite(match.index, match.index + match[0].length, ``)
      }

      string.prepend(`import LRU$1 from 'lru-cache';\n`)

      return {
        code: string.toString(),
        map: string.generateMap(),
      }
    },
  }
}
