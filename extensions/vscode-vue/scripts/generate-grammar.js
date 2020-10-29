#!/usr/bin/env node

const FS = require('fs')
const Path = require('path')
const transformVueGrammar = require('./prepare-vue-grammar')
const root = Path.resolve(__dirname, '../syntaxes')

function getGrammarFiles() {
  return FS.readdirSync(root)
    .filter((name) => /\.tmLanguage\.yml\.json$/.test(name))
    .map((name) => Path.resolve(root, name))
}

/**
 * Transform yaml to json.
 * @param {string} fileName
 */
function transform(fileName) {
  const relativeFileName = Path.relative(root, fileName)
  console.log('Transforming: ' + relativeFileName)
  const contents = FS.readFileSync(fileName, { encoding: 'utf8' })
  const grammar = JSON.parse(contents)

  if (Path.basename(fileName) === 'vue.tmLanguage.yml.json') {
    console.log('Generating additional languages...')
    transformVueGrammar(grammar)
  }

  FS.writeFileSync(
    fileName.replace(/\.yml\.json$/, '.json'),
    JSON.stringify(grammar, null, 2),
  )
}

function generate(watch = false) {
  const sources = getGrammarFiles()
  sources.forEach(transform)
  if (watch) {
    sources.forEach((fileName) => {
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
