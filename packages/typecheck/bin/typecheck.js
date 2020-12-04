#!/usr/bin/env node

const print = console.log
console.info = console.debug = console.warn = console.log = console.error

const checker = require('../dist/index.cjs')
const Path = require('path')
const FS = require('fs')
const parseArgs = require('minimist')
const chalk = require('chalk')
const { getContainingFile } = require('@vuedx/vue-virtual-textdocument')
const generateCodeFrame = checker.generateCodeFrame

const categories = ['Warning', 'Error', 'Suggestion', 'Message']
const colors = [chalk.yellow, chalk.red, chalk.green, chalk.blueBright]
let directory = process.cwd()

const fileCache = {}
/**
 *
 * @param {string} fileName
 * @returns {string}
 */
function readFile(fileName) {
  return (
    fileCache[fileName] ||
    (fileCache[fileName] = FS.readFileSync(fileName, { encoding: 'utf-8' }))
  )
}

/**
 * @param {import('typescript').Diagnostic} diagnostic
 */
function printDiagnostics(diagnostic, root = true) {
  if (!diagnostic.file) return
  const fileName = getContainingFile(diagnostic.file.fileName)
  const source = readFile(fileName)
  const color = colors[diagnostic.category]
  const name = categories[diagnostic.category]
  const pad = ' '.repeat(name.length + 1)
  print(`=> ${relative(fileName, diagnostic.start)}`)
  print(
    color(
      `${name} :: ${stringifyChain(pad, diagnostic.messageText)} (code ${
        diagnostic.code
      })`,
    ),
  )
  print(
    indent(
      generateCodeFrame(
        source,
        diagnostic.start,
        diagnostic.start + diagnostic.length,
        color,
        chalk.gray,
      ),
    ),
  )
  if (diagnostic.relatedInformation) {
    diagnostic.relatedInformation.forEach((information) => {
      if (information.file) {
        printDiagnostics(information, false)
      } else if (information.messageText) {
        const msg = stringifyChain(pad, information.messageText)
        if (msg.trim()) print(color(msg))
      }
    })
  }
  if (root) print()
}

/**
 * Return diagnostic result in Reviewdog Diagnostic Format
 * @param result Diagnostic results
 * @return {{diagnostics: any[], source: {name: string, url: string}}}
 *
 * @see https://github.com/reviewdog/reviewdog/tree/master/proto/rdf#rdjson
 */
function toRdjson(result) {
  // TODO: Improve Suggestions

  const sevrityMap = ['WARNING', 'ERROR', 'WARNING', 'INFO']

  const getMessageText = (message, ident = '') => {
    if (typeof message === 'string') {
      return message
    }

    let text = ident + message.messageText

    if (message.next && message.next[0]) {
      text += getMessageText(message.next[0], `\n - `)
    }

    return text;
  }


  const convert = (diagnostic) => {
    const filePath = getContainingFile(diagnostic.file.fileName)
    return {
      message: getMessageText(diagnostic.messageText),
      severity: sevrityMap[diagnostic.category],
      location: {
        path: filePath,
        range: {
          start: getPosition(filePath, diagnostic.start),
          end: getPosition(filePath, diagnostic.start + diagnostic.length),
        },
      },
      code: {
        value: String(diagnostic.code),
      },
    }
  }

  return {
    source: {
      name: "VueDX typecheck",
      url: "https://github.com/znck/vue-developer-experience/tree/master/packages/typecheck"
    },
    diagnostics: [
      ...result.flatMap((diagnostics) => {
        return [
          ...diagnostics.semanticDiagnostics.map(convert),
          ...diagnostics.syntacticDiagnostics.map(convert),
          ...diagnostics.suggestionDiagnostics.map(convert),
        ]
      }),

    ],
  }
}

/**
 *
 * @param {import('typescript').Diagnostic['messageText']} messageText
 */
function stringifyChain(pad, messageText) {
  if (typeof messageText === 'string') return messageText
  if (!messageText) return ''
  if (!Array.isArray(messageText.next)) return messageText.messageText

  return (
    messageText.messageText +
    `\n${pad}-> ` +
    messageText.next.map(stringifyChain.bind(null, pad)).join(`\n${pad}-> `)
  )
}

function indent(string, pad = '  ') {
  return string
    .split(/\r?\n/g)
    .map((line) => pad + line)
    .join('\n')
}

function jsonEncodeDiagnostics(diagnostic) {
  return JSON.stringify(
    diagnostic,
    (key, value) => {
      return key === 'file' && value ? getContainingFile(value.fileName) : value
    },
    2,
  )
}

function hasErrors(diagnostics) {
  return diagnostics.some(
    (diagnostic) =>
      diagnostic.syntacticDiagnostics.length ||
      diagnostic.semanticDiagnostics.length,
  )
}


function getPosition(fileName, position) {
  const content = readFile(fileName)
  const lines = content.substr(0, position).split(/\r?\n/)
  const isEoL = /[\r\n]/.test(content.substr(position, 1))

  return {
    line: lines.length + (isEoL ? 1 : 0),
    column: isEoL ? 1 : lines[lines.length - 1].length + 1,
  }
}

/**
 *
 * @param {string} fileName
 */
function relative(fileName, position = null) {
  let relativeFileName = Path.relative(directory, fileName)
  relativeFileName = relativeFileName.startsWith('.')
    ? relativeFileName
    : '.' + Path.sep + relativeFileName

  if (typeof position === 'number') {
    const {line, column} = getPosition(fileName, position)
    relativeFileName += `:${line}:${column}`
  }

  return relativeFileName
}
function main() {
  const {
    json = false,
    verbose = false,
    vue = false,
    help = false,
    rdjson = false,
    _: argv,
  } = parseArgs(process.argv.slice(2), {
    boolean: ['json', 'verbose', 'vue', 'help'],
  })

  if (help) {
    console.error(
      `
Usage: vuedx-typecheck <options> [directory]

Options
    --json      print diagnostics as json
    --vue       process only vue files
    --rdjson    Return diagnostic result in Reviewdog Diagnostic Format
    --verbose   print debug output (on stderr)
    --help      display help
`.trim(),
    )
    process.exit(0)
  }

  directory = argv[0]
    ? Path.isAbsolute(argv[0])
      ? argv[0]
      : Path.resolve(process.cwd(), argv[0])
    : process.cwd()

  if (!FS.existsSync(directory)) {
    console.error(`Cannot find directory: "${process.argv[2]}"`)
    process.exit(1)
  }

  if (!FS.statSync(directory).isDirectory()) {
    console.error(
      `Expecting a directory, but "${process.argv[2]}" is not a directory.`,
    )
    process.exit(1)
  }

  let result = checker.getDiagnostics(directory, verbose)

  if (vue) {
    result = result.filter((item) => item.fileName.endsWith('.vue'))
  }

  if (json) {
    print(jsonEncodeDiagnostics(result))
  } else if (rdjson) {
    print(JSON.stringify(toRdjson(result)))
    process.exit(0)
  } else {
    result.forEach((sourceFile) => {
      const fileName = relative(sourceFile.fileName)
      print(
        chalk.bold(chalk.yellow(`${fileName}\n${'='.repeat(fileName.length)}`)),
      )
      sourceFile.syntacticDiagnostics.forEach((diagnostic) =>
        printDiagnostics(diagnostic),
      )
      sourceFile.semanticDiagnostics.forEach((diagnostic) =>
        printDiagnostics(diagnostic),
      )
      sourceFile.suggestionDiagnostics.forEach((diagnostic) =>
        printDiagnostics(diagnostic),
      )
      print()
    })
  }

  if (hasErrors(result)) process.exit(2)
}

try {
  main()
} catch (error) {
  console.error(
    chalk.green(
      'Unexpected error. Please report 👉 https://github.com/znck/vue-developer-experience/issues/new',
    ),
  )
  console.error(error)
}
