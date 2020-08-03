#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const glob = require('fast-glob')
const hash = require('hash-sum')
const Path = require('path')
const FS = require('fs')
const program = require('commander')
const { inspect } = require('..')
const { codeFrameColumns } = require('@babel/code-frame')
const { highlight } = require('cli-highlight')

program
  .arguments('[dir]')
  .option('-o, --out-file <fileName>', 'output file name')
  .option('-p, --prod', 'use file name hash as component id')
  .action(async (dir = process.cwd(), options) => {
    const files = await glob('**/*.vue', {
      cwd: dir,
      absolute: false,
      ignore: ['**/node_modules/**', '**/dist/**'],
    })

    const meta = {}

    await Promise.all(
      files.map(async file => {
        const filePath = Path.resolve(dir, file)
        try {
          const errors = []
          const ast = await inspect(filePath, {
            onError(error) {
              errors.push(error)
            },
          })

          const id = options.prod ? hash(file) : file

          meta[id] = ast

          if (errors.length) {
            await printErrors(file, errors, filePath)
          }
        } catch (error) {
          if (error.loc) {
            await printErrors(file, [error], filePath)
          } else {
            console.error(
              `${file} aborted due to error "${error.message}"`,
              error
            )
          }
        }
      })
    )

    const content = JSON.stringify(meta, null, 2)

    if (options.out) {
      const outDir = Path.dirname(options.out)

      if (outDir) await FS.promises.mkdir(outDir, { recursive: true })
      await FS.promises.writeFile(options.out, content)
    }

    console.log(highlight(content, { language: 'json' }))
  })

program.parse(process.argv)

/**
 *
 * @param {string} file
 * @param {Error[]} errors
 * @param {string} filePath
 */
async function printErrors(file, errors, filePath) {
  const contents = await FS.promises.readFile(filePath, { encoding: 'utf8' })
  console.error(`Errors in ${file}\n` + ''.padStart(80, '-'))

  for (const error of errors) {
    console.error(
      `${error.block ? `(${error.block}, language=${error.lang})` : ''} ${
        error.message
      }`
    )

    if (error.loc) {
      console.error(
        codeFrameColumns(
          contents,
          error.loc.start
            ? { start: error.loc.start, end: error.loc.end } // vue-template  errors
            : { start: error.loc }, // babel errors
          { highlightCode: true, message: error.message }
        )
      )
      console.error()
    }
  }

  console.error()
}
