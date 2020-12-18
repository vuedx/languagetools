#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const glob = require('fast-glob')
const Path = require('path')
const FS = require('fs')
const program = require('commander')
const {
  createFullAnalyzer,
  toVeturData,
  toWebTypes,
} = /** @type {{createFullAnalyzer: import('..').createFullAnalyzer, toVeturData: import('..').toVeturData, toWebTypes: import('..').toWebTypes}} */ (require('../dist/index.cjs'))
const { codeFrameColumns } = require('@babel/code-frame')
const { highlight } = require('cli-highlight')

program
  .arguments('[dir]')
  .option(
    '-o, --out-file <fileName>',
    'output file name (or directory for vetur format)',
  )
  .option('-f, --format <vetur|web-types|raw>', 'component info format')
  .action(async (dir = process.cwd(), options) => {
    const isFile = FS.statSync(dir).isFile()
    dir = Path.isAbsolute(dir) ? dir : Path.resolve(process.cwd(), dir)

    const files = isFile
      ? [dir]
      : await glob('**/*.vue', {
          cwd: dir,
          absolute: false,
          ignore: ['**/node_modules/**', '**/dist/**'],
        })

    if (isFile) {
      dir = Path.dirname(dir)
    }

    const meta = {}

    const analyzer = createFullAnalyzer()
    await Promise.all(
      files.map(async (file) => {
        const filePath = Path.resolve(dir, file)
        try {
          const errors = []
          const ast = analyzer.analyze(
            await FS.promises.readFile(filePath, { encoding: 'utf-8' }),
            filePath,
          )

          const relativePath = Path.relative(dir, file)

          meta[relativePath] = ast

          if (errors.length) {
            await printErrors(file, errors, filePath)
          }
        } catch (error) {
          if (error.loc) {
            await printErrors(file, [error], filePath)
          } else {
            console.error(
              `${file} aborted due to error "${error.message}"`,
              error,
            )
          }
        }
      }),
    )

    switch (options.format) {
      case 'vetur':
        {
          const result = toVeturData(Array.from(Object.values(meta)))
          if (options.out != null) {
            const out = Path.resolve(dir, options.out)
            if (FS.existsSync(out) && FS.statSync(out).isFile()) {
              console.error('Provide a directory when using "vetur" format.')
              process.exit(-1)
            }
            await write(
              Path.resolve(out, 'tags.json'),
              JSON.stringify(result.tags, null, 2),
            )
            await write(
              Path.resolve(out, 'attributes.json'),
              JSON.stringify(result.attributes, null, 2),
            )
          } else {
            const content = JSON.stringify(result, null, 2)
            await write(options.out, content)
          }
        }
        break
      case 'web-types':
        {
          const { name, version } = getPackageJSON(dir) || {
            name: '',
            version: '0.0.0',
          }

          const result = toWebTypes(
            name,
            version,
            Array.from(Object.values(meta)),
          )

          if (options.out != null) {
            const outFileName = Path.resolve(dir, options.out)
            const outDirName = Path.dirname(outFileName)
            result.contributions.tags.forEach((tag) => {
              if ('file' in tag.source) {
                tag.source.file = Path.relative(outDirName, tag.source.file)
              }
            })
            await write(outFileName, JSON.stringify(result, null, 2))
          } else {
            const content = JSON.stringify(result, null, 2)
            await write(options.out, content)
          }
        }
        break
      case undefined:
      case 'raw':
        {
          const content = JSON.stringify(meta, null, 2)
          await write(
            options.out ? Path.resolve(dir, options.out) : undefined,
            content,
          )
        }
        break

      default:
        console.error(`Unknown format: ${options.format}`)
        process.exit(-1)
    }
  })

program.parse(process.argv)

async function write(outputFile, content) {
  if (outputFile != null) {
    const outDir = Path.dirname(outputFile)

    if (outDir) await FS.promises.mkdir(outDir, { recursive: true })
    await FS.promises.writeFile(outputFile, content)
  } else {
    console.log(
      process.env.CI != null
        ? content
        : highlight(content, { language: 'json' }),
    )
  }
}

/**
 *
 * @param {string} file
 * @param {any[]} errors
 * @param {string} filePath
 */
async function printErrors(file, errors, filePath) {
  const contents = await FS.promises.readFile(filePath, { encoding: 'utf8' })
  console.error(`Errors in ${file}\n` + ''.padStart(80, '-'))

  for (const error of errors) {
    console.error(
      `${error.block ? `(${error.block}, language=${error.lang})` : ''} ${
        error.message
      }`,
    )

    if (error.loc) {
      console.error(
        codeFrameColumns(
          contents,
          error.loc.start
            ? { start: error.loc.start, end: error.loc.end } // vue-template  errors
            : { start: error.loc }, // babel errors
          { highlightCode: true, message: error.message },
        ),
      )
      console.error()
    }
  }

  console.error()
}

/**
 * @param {string} dir
 * @returns {{name:string, version: string}|undefined}
 */
function getPackageJSON(dir) {
  const fileName = getPackageJSONFileName(dir)
  if (fileName != null) {
    try {
      return require(fileName)
    } catch {}
  }
}
/**
 * @param {string} dir
 * @returns {string|undefined}
 */
function getPackageJSONFileName(dir) {
  while (dir !== Path.dirname(dir)) {
    const packageFileName = Path.join(dir, 'package.json')
    if (FS.existsSync(packageFileName)) {
      return packageFileName
    }
    dir = Path.dirname(dir)
  }
}
