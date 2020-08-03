import ts from 'rollup-plugin-typescript2';

/** @type {import('rollup').RollupOptions[]} */
const configurations = [];

configurations.push({
  input: 'src/index.ts',
  output: {
    format: 'cjs',
    file: 'dist/extension.js',
  },
  external: [...Array.from(Object.keys(require('./package.json').dependencies)), 'vscode', 'fs', 'path'],
  plugins: [ts()],
});

export default configurations;
