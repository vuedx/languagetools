import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { generateRollupOptions } from '@vuedx/monorepo-tools'
import { define, processVueSFC } from './scripts/rollup-plugins'

const configs = generateRollupOptions({
  dirPatterns: ['packages/*', 'extensions/*'],
  extend(kind, { rollupOptions, tsconfig, packageJson, packageRoot }) {
    if (kind === 'dts') {
      if (packageJson.name === '@vuedx/compiler-sfc') {
        rollupOptions.onwarn = (warning, warn) => {
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return // Some imports are left unused after rewriting cjs to esm
          warn(warning)
        }
      }

      return rollupOptions
    }

    const config = {
      ...rollupOptions,
      external: [
        ...rollupOptions.external.filter((id) => id !== '@vue/compiler-core'),
        '@vue/compiler-core/dist/compiler-core.cjs.js',
      ],
      plugins: [
        json(),
        define(),
        alias({
          entries: [
            {
              find: /^@vue\/compiler-core$/,
              replacement: '@vue/compiler-core/dist/compiler-core.cjs.js',
            },
          ],
        }),
        resolve({ preferBuiltins: true }),
        typescript({
          tsconfig: tsconfig ? tsconfig.configFile : undefined,
          rootDir: packageRoot,
        }),
        commonjs({ transformMixedEsModules: true }),
      ],
    }

    if (packageJson.name === '@vuedx/compiler-sfc') {
      config.plugins.splice(1, 0, processVueSFC())
      config.treeshake = {
        moduleSideEffects: () => false,
      }
    }

    return config
  },
})

// console.log(require('util').inspect(configs, false, 6))

export default configs
