const { execSync } = require('child_process')
const Path = require('path')
const workingDir = Path.dirname(__dirname)

const files = [
  'node_modules/@vuedx/typescript-standalone/dist/index.js',
  'node_modules/@vuedx/typescript-standalone/package.json',
]
execSync(`mkdir -p tmp`, { cwd: workingDir })
execSync(`unzip vue-language-features.vsix -d tmp`, { cwd: workingDir })
execSync(
  `mkdir -p tmp/extension/node_modules/@vuedx/typescript-standalone/dist`,
  { cwd: workingDir },
)
files.forEach((file) => {
  execSync(`cp ${file} tmp/extension/${file}`, { cwd: workingDir })
})

execSync(`zip -r ../vue-language-features.vsix .`, {
  cwd: Path.resolve(workingDir, 'tmp'),
})
execSync(`rm -r tmp`, { cwd: workingDir })
