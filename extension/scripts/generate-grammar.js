#!/usr/bin/env node

const YAML = require('yaml')
const FS = require('fs')
const Path = require('path')
const glob = require('fast-glob')
const transformVueGrammar = require('./prepare-vue-grammar')
const root = Path.resolve(__dirname, '../syntaxes')

/**
 * Transform yaml to json.
 * @param {string} fileName
 */
function transform(fileName) {
  const relativeFileName = Path.relative(root, fileName)
  console.log('Transforming: ' + relativeFileName)
  const contents = FS.readFileSync(fileName, { encoding: 'utf8' })
  const grammar = YAML.parse(contents)

  if (fileName.endsWith('vue.tmLanguage.yml')) {
    console.log('Generating additional languages...')
    transformVueGrammar(grammar)
  }

  FS.writeFileSync(
    fileName.replace(/\.yml$/, '.json'),
    JSON.stringify(grammar, null, 2)
  )
}

function generate(watch = false) {
  const sources = glob.sync('**/*.yml', { absolute: true, cwd: root })
  sources.forEach(transform)
  if (watch) {
    sources.forEach(fileName => {
      FS.watchFile(fileName, () => {
        const relativeFileName = Path.relative(root, fileName)
        console.clear()
        console.log(new Date().toTimeString())
        console.log('Changed: ' + relativeFileName)
        transform(fileName)
        console.log('Transformed: ' + relativeFileName)
      })
    })
  }
}

module.exports = { generate }
