import node from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { dependencies } from './package.json'

/** @type {Array<import('rollup').RollupOptions>} */
const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'commonjs',
        file: 'lib/index.cjs',
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
        declaration: true,
        declarationDir: 'lib/types',
        declarationMap: true,
        rootDir: 'src',
      }),
    ],
    external: Array.from(Object.keys(dependencies)),
  },
]

export default configs
