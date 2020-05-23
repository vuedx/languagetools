#!/usr/bin/env node

const checker = require('../dist/typecheck');
const Path = require('path');
const FS = require('fs');
const parseArgs = require('minimist');
const chalk = require('chalk');

const categories = ['Warning', 'Error', 'Suggestion', 'Message'];
const colors = [chalk.yellow, chalk.red, chalk.green, chalk.blueBright];
let directory = process.cwd();

const fileCache = {};
/**
 *
 * @param {string} fileName
 * @returns {string}
 */
function readFile(fileName) {
  return fileCache[fileName] || (fileCache[fileName] = FS.readFileSync(fileName, { encoding: 'utf-8' }));
}

/**
 * @param {import('typescript').Diagnostic} diagnostic
 */
function printDiagnostics(diagnostic, root = true) {
  if (!diagnostic.file) return;
  const fileName = normalizeFileName(diagnostic.file.fileName);
  const source = readFile(fileName);
  const color = colors[diagnostic.category];
  const name = categories[diagnostic.category];
  const pad = ' '.repeat(name.length + 1);
  console.log(`=> ${relative(fileName, diagnostic.start)}`);
  console.log(color(`${name} :: ${stringifyChain(pad, diagnostic.messageText)} (code ${diagnostic.code})`));
  console.log(indent(generateCodeFrame(source, diagnostic.start, diagnostic.start + diagnostic.length, color)));
  if (diagnostic.relatedInformation) {
    diagnostic.relatedInformation.forEach((information) => {
      if (information.file) {
        printDiagnostics(information, false);
      } else if (information.messageText) {
        const msg = stringifyChain(information.messageText);
        if (msg.trim()) console.log(color(pad + '-> ' + msg));
      }
    });
  }
  if (root) console.log();
}

/**
 *
 * @param {import('typescript').Diagnostic['messageText']} messageText
 */
function stringifyChain(pad, messageText) {
  if (typeof messageText === 'string') return messageText;
  if (!messageText) return '';
  if (!Array.isArray(messageText.next)) return messageText.messageText;

  return (
    messageText.messageText + `\n${pad}-> ` + messageText.next.map(stringifyChain.bind(null, pad)).join(`\n${pad}-> `)
  );
}

function indent(string, pad = '  ') {
  return string
    .split(/\r?\n/g)
    .map((line) => pad + line)
    .join('\n');
}

function jsonEncodeDiagnostics(diagnostic) {
  console.log(
    JSON.stringify(
      diagnostic,
      (key, value) => {
        return key === 'file' && value ? normalizeFileName(value.fileName) : value;
      },
      2
    )
  );
}

function normalizeFileName(fileName) {
  return typeof fileName === 'string' ? fileName.replace(/____(script|render)\.[tj]s$/, '') : fileName;
}

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length, color = chalk.red) {
  if (!Number.isInteger(start)) return '';
  if (!Number.isInteger(end)) end = start + 1;

  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  const width = String(lines.length).length;
  const getLine = (line) => String(line).padStart(width) + ' | ';
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${chalk.gray(getLine(line))}  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(chalk.gray(getLine('')) + ' '.repeat(pad) + color('^'.repeat(Math.max(length, 0))));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(chalk.gray(getLine('')) + color('^'.repeat(Math.max(0, length))));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join('\n');
}

/**
 *
 * @param {string} fileName
 */
function relative(fileName, position) {
  let relativeFileName = Path.relative(directory, fileName);
  relativeFileName = relativeFileName.startsWith('.') ? relativeFileName : '.' + Path.sep + relativeFileName;

  if (typeof position === 'number') {
    const content = readFile(fileName);
    const lines = content.substr(0, position).split(/\r?\n/);
    const isEoL = /[\r\n]/.test(content.substr(position, 1));
    relativeFileName += isEoL ? `:${lines.length + 1}:1` : `:${lines.length}:${lines[lines.length - 1].length + 1}`;
  }

  return relativeFileName;
}
function main() {
  const { json = false, verbose = false, vue = false, help = false, _: argv } = parseArgs(process.argv.slice(2), {
    boolean: ['json', 'verbose', 'vue', 'help'],
  });

  if (help) {
    console.log(
      `
Usage: typecheck <options> [directory]

Options
    --json      print diagnostics as json
    --vue       process only vue files
    --verbose   print debug output (on stderr) 
    --help      display help
`.trim()
    );
    process.exit(0);
  }

  directory = argv[0] ? (Path.isAbsolute(argv[0]) ? argv[0] : Path.resolve(process.cwd(), argv[0])) : process.cwd();

  if (!FS.existsSync(directory)) {
    console.error(`Cannot find directory: "${process.argv[2]}"`);
    process.exit(1);
  }

  if (!FS.statSync(directory).isDirectory()) {
    console.error(`Expecting a directory, but "${process.argv[2]}" is not a directory.`);
    process.exit(1);
  }

  if (json) {
    jsonEncodeDiagnostics(checker.getDiagnostics(directory, verbose));
  } else {
    let result = checker.getDiagnostics(directory, verbose);
    if (vue) {
      result = result.filter((item) => item.fileName.endsWith('.vue'));
    }

    result.forEach((sourceFile) => {
      const fileName = relative(sourceFile.fileName);
      console.log(chalk.bold(chalk.yellow(`${fileName}\n${'='.repeat(fileName.length)}`)));
      sourceFile.syntacticDiagnostics.forEach((diagnostic) => printDiagnostics(diagnostic));
      sourceFile.semanticDiagnostics.forEach((diagnostic) => printDiagnostics(diagnostic));
      sourceFile.suggestionDiagnostics.forEach((diagnostic) => printDiagnostics(diagnostic));
      console.log();
    });
  }
}

try {
  main();
} catch (error) {
  console.log(
    chalk.green('Unexpected error. Please report 👉 https://github.com/znck/vue-developer-experience/issues/new')
  );
  console.error(error);
}
