const Path = require('path')
const FS = require('fs')
const YAML = require('yaml')

const root = Path.resolve(__dirname, '../syntaxes')

function getYamlFiles() {
  return FS.readdirSync(root)
    .filter((name) => /\.yml$/.test(name))
    .map((name) => Path.resolve(root, name))
}

getYamlFiles().forEach((file) => {
  const contents = FS.readFileSync(file, { encoding: 'utf-8' })
  const grammar = YAML.parse(contents)
  FS.writeFileSync(file + '.json', JSON.stringify(grammar, null, 2))
})
