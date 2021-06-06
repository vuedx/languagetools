import typescript from '@rollup/plugin-typescript'
import node from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import { dependencies } from './package.json'

/** @type {Array<import('rollup').RollupOptions>} */
const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'module',
        file: 'lib/index.d.ts',
      },
    ],
    plugins: [dts()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'commonjs',
        file: 'lib/index.js',
        sourcemap: true,
        preferConst: true,
      },
      {
        format: 'module',
        file: 'lib/index.mjs',
        sourcemap: true,
        preferConst: true,
      },
    ],
    plugins: [
      node(),
      typescript({
        tsconfig: 'tsconfig.json',
        sourceMap: true,
        declaration: false,
        composite: false,
      }),
    ],
    external: Array.from(Object.keys(dependencies)),
  },
]

export default configs
