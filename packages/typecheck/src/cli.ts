import chalk from 'chalk'
import FS from 'fs'
import FSP from 'fs/promises'
// @ts-expect-error
import parseArgs from 'minimist'
import Path from 'path'
import readline from 'readline'
import TS from 'typescript/lib/tsserverlibrary'
import { Position, TextDocument } from 'vscode-languageserver-textdocument'
import {
  AbortController,
  Diagnostics,
  getDiagnostics,
  getDiagnostics2,
} from './diagnostics'
import { generateCodeFrame } from './generateCodeFrame'
const print = console.log
const colors = {
  warning: chalk.yellow,
  error: chalk.red,
  suggestion: chalk.green,
  message: chalk.blueBright,
}
let directory = process.cwd()
const cache = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return cache.get(file) ?? (await createTextDocument(file))
}

function clearScreen(): void {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}
async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FSP.readFile(file, { encoding: 'utf-8' })
  const fileName = toNormalizedPath(file)
  const document = TextDocument.create(
    fileName,
    Path.posix.extname(file),
    0,
    content,
  )

  cache.set(fileName, document)

  return document
}

function toNormalizedPath(fileName: string): string {
  return fileName.replace(/\\/g, '/')
}

function formatLocation(
  fileName: string,
  start: TS.server.protocol.Location,
): string {
  const relativeFileName = convertToRelativePath(fileName)
  const line = start.line + 1
  const column = start.offset + 1

  let output = ''
  output += chalk.cyan(relativeFileName)
  output += ':'
  output += chalk.yellow(`${line}`)
  output += ':'
  output += chalk.yellow(`${column}`)
  return output
}

function getDiagnosticCategory(
  diagnostic: Pick<TS.server.protocol.Diagnostic, 'category'>,
): keyof typeof colors {
  return (/^(warning|error|suggestion|message)$/i.test(diagnostic.category)
    ? diagnostic.category.toLowerCase()
    : 'error') as any
}

function toPosition(loc: TS.server.protocol.Location): Position {
  return { line: loc.line - 1, character: loc.offset - 1 }
}

async function formatDiagnosticsWithColorAndContext(
  fileName: string,
  diagnostic: TS.server.protocol.Diagnostic,
): Promise<string> {
  let output = ''
  output += formatLocation(fileName, diagnostic.start) // TODO: GH#18217
  output += ' - '
  const category = getDiagnosticCategory(diagnostic)
  output += colors[category](category)
  output += chalk.gray(` ${diagnostic.source ?? ''}${diagnostic.code ?? ''}: `)
  output += diagnostic.text

  const document = await getTextDocument(fileName)
  output += '\n'
  output += generateCodeFrame(
    document.getText(),
    document.offsetAt(toPosition(diagnostic.start)),
    document.offsetAt(toPosition(diagnostic.end)),
    (underline) => colors[category](underline),
    (gutter) => chalk.bgWhite(gutter.trimEnd()) + ' ',
  )
  if (diagnostic.relatedInformation != null) {
    for (const { message, span, category } of diagnostic.relatedInformation) {
      output += '\n'
      const color = colors[getDiagnosticCategory({ category })]
      if (span != null) {
        output += '    ' + formatLocation(span.file, span.start)
        const document = await getTextDocument(span.file)
        output += '\n'
        output += generateCodeFrame(
          document.getText(),
          document.offsetAt(toPosition(span.start)),
          document.offsetAt(toPosition(span.end)),
          (underline) => color(underline),
          (gutter) => chalk.bgWhite(gutter.trimEnd()) + ' ',
        )
        output += '\n'
      }
      output += '    ' + message
    }
  }

  output += '\n'

  return output
}

function formatDiagnostic(
  fileName: string,
  diagnostic: TS.server.protocol.Diagnostic,
): string {
  const errorMessage = `${diagnostic.category} ${diagnostic.source ?? ''}${
    diagnostic.code ?? ''
  }: ${diagnostic.text}`

  const relativeFileName = convertToRelativePath(fileName)
  const line = diagnostic.start.line + 1
  const column = diagnostic.start.offset + 1

  return `${relativeFileName}(${line},${column}): ${errorMessage}`
}

const ERROR_RE = /^(error)$/i
function getErrorCount(diagnostics: Diagnostics): number {
  return diagnostics.reduce(
    (count, diagnostic) =>
      count +
      diagnostic.diagnostics.filter((diagnostic) =>
        ERROR_RE.test(diagnostic.category),
      ).length,
    0,
  )
}

function convertToRelativePath(fileName: string): string {
  return Path.relative(directory, fileName)
}

export async function cli(): Promise<void> {
  const { pretty, vue, help, watch, format, _: argv } = parseArgs(
    process.argv.slice(2),
    {
      boolean: ['json', 'rdjson', 'verbose', 'vue', 'help', 'pretty', 'watch'],
      string: ['format'],
      default: { pretty: true, format: 'raw' },
    },
  )

  if (help === true) {
    console.error(
      `
Usage: vuedx-typecheck [directory] <options>

Options
    --format    One of 'raw', 'json' or 'rdjson'
    --vue       process only vue files
    --no-pretty Pretty print output
    --help      display help
    --watch     Watch files for changes
`.trim(),
    )
    process.exit(0)
  }

  directory =
    argv[0] != null
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

  if (watch === true) {
    const controller = new AbortController()
    for await (const result of getDiagnostics(
      directory,
      controller.signal,
      true,
    )) {
      clearScreen()
      await handleResults(result, { format, pretty, vue })
    }
  } else {
    const result = await getDiagnostics2(directory)
    await handleResults(result, { format, pretty, vue })
    if (getErrorCount(result) > 0) process.exit(2)
  }
}

/**
 * Return diagnostic result in Reviewdog Diagnostic Format
 * @see https://github.com/reviewdog/reviewdog/tree/master/proto/rdf#rdjson
 */
function encodeRdJSON(result: Diagnostics): string {
  const severityMap = {
    warning: 'WARNING',
    error: 'ERROR',
    suggestion: 'INFO',
    message: 'INFO',
  }

  return JSON.stringify({
    source: {
      name: 'VueDX typecheck',
      url:
        'https://github.com/znck/vue-developer-experience/tree/master/packages/typecheck',
    },
    diagnostics: result.flatMap((sourceFile) => {
      return sourceFile.diagnostics.map((diagnostic) => ({
        message: diagnostic.text,
        severity: severityMap[diagnostic.category as keyof typeof severityMap],
        location: {
          path: sourceFile.fileName,
          range: {
            start: {
              line: diagnostic.start.line,
              column: diagnostic.start.offset,
            },
            end: { line: diagnostic.end.line, column: diagnostic.end.offset },
          },
        },
        code: {
          value: `${diagnostic.code ?? ''}`,
        },
        relatedInformation: diagnostic.relatedInformation?.map((info) => ({
          message: info.message,
          severity: severityMap[info.category as keyof typeof severityMap],
          location:
            info.span != null
              ? {
                  path: info.span.file,
                  range: {
                    start: {
                      line: info.span.start.line,
                      column: info.span.start.offset,
                    },
                    end: {
                      line: info.span.end.line,
                      column: info.span.end.offset,
                    },
                  },
                }
              : undefined,
          code: {
            value: `${info.code ?? ''}`,
          },
        })),
      }))
    }),
  })
}

async function handleResults(
  result: Diagnostics,
  {
    vue,
    format,
    pretty,
  }: {
    vue: boolean
    pretty: boolean
    format: string
  },
): Promise<void> {
  if (vue) {
    result = result.filter((item) => item.fileName.endsWith('.vue'))
  }

  switch (format) {
    case 'json':
      print(JSON.stringify(result, null, pretty ? 2 : 0))
      break
    case 'rdjson':
      print(encodeRdJSON(result))
      break
    case 'raw':
      {
        const fn = pretty
          ? formatDiagnosticsWithColorAndContext
          : formatDiagnostic
        const content = await Promise.all(
          result.flatMap((sourceFile) =>
            sourceFile.diagnostics.map((diagnostic) =>
              fn(sourceFile.fileName, diagnostic),
            ),
          ),
        )

        print(content.join('\n'))

        const count = getErrorCount(result)

        print(`\nFound ${count} errors.`)
      }
      break
    default:
      throw new Error(`Unknown output format: "${format}"`)
  }
}
