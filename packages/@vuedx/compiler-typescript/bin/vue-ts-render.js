#!/usr/bin/env node

const { parse, generateCodeFrame } = require('@vuedx/compiler-sfc');
const { compile } = require('../dist/compiler-typescript');
const FS = require('fs');
const { highlight } = require('cli-highlight');

function readFile(fileName) {
  const { descriptor } = parse(FS.readFileSync(fileName, { encoding: 'utf-8' }));
  return {
    template: descriptor.template ? descriptor.template.content : '',
    script: descriptor.script ? descriptor.script.content : '',
  };
}

const ImportPathRegExp = /import\s+(?:{[^}]+}\s*,)?\s*([A-Z][A-Za-z0-9_$]+)\s*(?:,\s*{[^}]+}\s*)?from\s+(?:"([^"]+)"|'([^']+)')/g;
function findComponents(source) {
  const components = {};
  const iterator = source.matchAll(ImportPathRegExp);

  while (true) {
    const match = iterator.next();
    if (match.done) break;

    components[match.value[1]] = match.value[2] || match.value[3];
  }

  return components;
}

const fileNames = process.argv.slice(2);
fileNames.forEach((fileName) => {
  console.error(`=> ${fileName}`);
  const { template, script } = readFile(fileName);
  const { code: render } = compile(template, {
    filename: fileName,
    components: findComponents(script),
    onError: (error) =>
      console.error(
        error.message + error.loc
          ? '\n' + generateCodeFrame(template, error.loc.start.offset, error.loc.end.offset)
          : '',
        error
      ),
  });

  console.error(`---------------------------------------`);
  console.log(highlight(render, { language: 'ts' }));
  console.log();
});
