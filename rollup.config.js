import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { generateRollupOptions } from '@vuedx/monorepo-tools'
import { define, processVueSFC } from './scripts/rollup-plugins'

const configs = [
  generateRollupOptions({
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
        plugins: [
          json(),
          define(),
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
  }),
  generateRollupOptions({
    packagesDirectory: 'extensions',
    extend(_kind, { rollupOptions, tsconfig }) {
      return {
        ...rollupOptions,
        plugins: [
          json(),
          define(),
          resolve({ preferBuiltins: true }),
          typescript({
            tsconfig: tsconfig ? tsconfig.configFile : undefined,
          }),
          commonjs({ transformMixedEsModules: true }),
        ],
      }
    },
  }),
].flat()

// console.log(require('util').inspect(configs, false, 6))

export default configs
