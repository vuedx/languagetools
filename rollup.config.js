import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import node from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import * as Fs from 'fs';
import * as Path from 'path';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

/** @type {import('rollup').RollupOptions[]} */
const configurations = [];
const projectDir = __dirname;
const filter = process.env.FILTER || '';
const isProd = process.env.BUILD === 'production';

const env = {
  __DEV__: isProd ? 'false' : 'process.env.NODE_ENV !== "production"',
  'process.env.NODE_ENV': isProd ? '"production"' : '"development"',
};

const packages = Fs.readdirSync(Path.resolve(projectDir, './packages')).filter((name) => !name.startsWith('.'));

createConfig('packages', packages);

export default configurations;

function createTs(pkgDir) {
  return ts({
    check: true,
    tsconfig: Path.resolve(__dirname, 'tsconfig.json'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: true,
        declaration: false,
        declarationMap: false,
      },
      exclude: ['**/test/**', 'examples/**'],
    },
  });
}

function createConfig(dir, names, external = []) {
  names.forEach((name) => {
    const pkgDir = Path.resolve(projectDir, dir, name);

    if (!pkgDir.match(filter)) return;

    const outDir = Path.resolve(pkgDir, 'dist');
    const pkg = require(Path.resolve(pkgDir, 'package.json'));

    if (Fs.existsSync(outDir)) {
      Fs.rmdirSync(outDir, { recursive: true });
    }

    try {
      /** @type {import('rollup').RollupOptions} */
      const options = {
        input: Path.relative(projectDir, Path.resolve(pkgDir, 'src/index.ts')),
        external: [
          // Node
          'path',
          'fs',
          'events',
          'querystring',
          'assert',
          'url',
          'util',
          'os',
          'crypto',
        ]
          .concat(Object.keys(pkg.dependencies || {}))
          .concat(pkg.build && pkg.build.external ? pkg.build.external : [])
          .concat(external),
        context: 'null',
        plugins: [
          json(),
          node(),
          commonjs(),
          vue(),
          postcss(),
          createTs(pkgDir),
          replace(env),
          replace({
            "loadDep('@babel/parser')": "require('@babel/parser')",
            "loadDep('estree-walker')": "require('estree-walker')",
            "loadDep('source-map')": "require('source-map')",
            delimiters: ['', ''],
          }),
        ],
        treeshake: {
          annotations: true,
          moduleSideEffects: (id, external) => id.includes('reflect-metadata'),
          unknownGlobalSideEffects: false,
          propertyReadSideEffects: false,
        },
      };

      if (pkg.main) {
        configurations.push({
          ...options,
          output: {
            file: Path.resolve(pkgDir, pkg.main),
            format: 'cjs',
            sourcemap: true,
            exports: 'auto',
          },
        });
      }

      if (pkg.module) {
        configurations.push({
          ...options,
          output: {
            file: Path.resolve(pkgDir, pkg.module),
            format: 'esm',
            sourcemap: true,
          },
        });
      }

      if (pkg.types) {
        configurations.push({
          input: options.input,
          external: options.external,
          output: {
            file: Path.resolve(pkgDir, pkg.types),
            format: 'esm',
            sourcemap: true,
          },
          onwarn: options.onwarn,
          plugins: [dts({})],
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
}
