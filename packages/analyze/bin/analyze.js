#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const glob = require('fast-glob');
const hash = require('hash-sum');
const Path = require('path');
const FS = require('fs');
const program = require('commander');
const { createFullAnalyzer } = require('../dist/index.cjs');
const { codeFrameColumns } = require('@babel/code-frame');
const { highlight } = require('cli-highlight');

program
  .arguments('[dir]')
  .option('-o, --out-file <fileName>', 'output file name')
  .option('-p, --prod', 'use file name hash as component id')
  .action(async (dir = process.cwd(), options) => {
    const isFile = FS.statSync(dir).isFile();
    dir = Path.isAbsolute(dir) ? dir : Path.resolve(process.cwd(), dir)

    const files = isFile
      ? [dir]
      : await glob('**/*.vue', {
          cwd: dir,
          absolute: false,
          ignore: ['**/node_modules/**', '**/dist/**'],
        });

    if (isFile) {
      dir = Path.dirname(dir);
    }

    const meta = {};

    const analyzer = createFullAnalyzer();
    await Promise.all(
      files.map(async (file) => {
        const filePath = Path.resolve(dir, file);
        try {
          const errors = [];
          const ast = analyzer.analyze(await FS.promises.readFile(filePath, { encoding: 'utf-8' }), filePath);

          const id = options.prod ? hash(file) : file;

          meta[id] = ast;

          if (errors.length) {
            await printErrors(file, errors, filePath);
          }
        } catch (error) {
          if (error.loc) {
            await printErrors(file, [error], filePath);
          } else {
            console.error(`${file} aborted due to error "${error.message}"`, error);
          }
        }
      })
    );

    const content = JSON.stringify(meta, null, 2);

    if (options.out) {
      const outDir = Path.dirname(options.out);

      if (outDir) await FS.promises.mkdir(outDir, { recursive: true });
      await FS.promises.writeFile(options.out, content);
    }

    console.log(highlight(content, { language: 'json' }));
  });

program.parse(process.argv);

/**
 *
 * @param {string} file
 * @param {any[]} errors
 * @param {string} filePath
 */
async function printErrors(file, errors, filePath) {
  const contents = await FS.promises.readFile(filePath, { encoding: 'utf8' });
  console.error(`Errors in ${file}\n` + ''.padStart(80, '-'));

  for (const error of errors) {
    console.error(`${error.block ? `(${error.block}, language=${error.lang})` : ''} ${error.message}`);

    if (error.loc) {
      console.error(
        codeFrameColumns(
          contents,
          error.loc.start
            ? { start: error.loc.start, end: error.loc.end } // vue-template  errors
            : { start: error.loc }, // babel errors
          { highlightCode: true, message: error.message }
        )
      );
      console.error();
    }
  }

  console.error();
}
