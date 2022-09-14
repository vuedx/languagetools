// @ts-check
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { generateRollupOptions } from '@vuedx/monorepo-tools'
import dts from 'rollup-plugin-dts'
import { define, processVueSFC } from './scripts/rollup-plugins'

const configs = ['packages/*', 'extensions/*'].flatMap((pattern) => {
  return generateRollupOptions({
    dirPatterns: [pattern],
    extend({ rollupOptions: options, tsconfig, packageJson, packageRoot }) {
      if (options.input.endsWith('.d.ts')) {
        return {
          ...options,
          plugins: [dts()],
        }
      }

      if (tsconfig?.configFile == null) {
        throw new Error(`${packageJson.name} does not have a tsconfig.json`)
      }

      const config = {
        ...options,
        plugins: [
          resolve(),
          commonjs(),
          typescript({
            tsconfig: tsconfig?.configFile,
            compilerOptions: {
              declaration: true,
              declarationMap: true,
              declarationDir: 'types',
            },
          }),
          ...options.plugins,
          json(),
          define(packageJson.version ?? ''),
          compiler()
        ],
      }

      if (packageJson.name === '@vuedx/compiler-sfc') {
        config.plugins.splice(1, 0, processVueSFC())
        config.treeshake = {
          moduleSideEffects: () => false,
        }
        config.onwarn = (warning, defaultHandler) => {
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
            warning.source === 'lru-cache'
          )
            return

          defaultHandler(warning)
        }
      }

      return config
    },
  })
})

// console.log(require('util').inspect(configs, false, 6))

export default configs

/**
 *
 * @returns {import('rollup').Plugin}
 */
function compiler() {
  return {
    name: 'vue/compiler',
    generateBundle(options, bundle) {
      Object.values(bundle).forEach((chunk) => {
        if (chunk.type === 'chunk') {
          if (chunk.code.includes('@vue/compiler-core')) {
            chunk.code = chunk.code.replace(
              /@vue\/compiler-core/g,
              '@vue/compiler-core/dist/compiler-core.cjs.js',
            )
          }
        }
      })
    },
  }
}
