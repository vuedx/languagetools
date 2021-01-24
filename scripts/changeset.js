const isBackup = process.argv.includes('--backup')
const isRestore = process.argv.includes('--restore')
const FS = require('fs')
const Path = require('path')
const workspaceFile = Path.resolve(__dirname, '../pnpm-workspace.yaml')

let content = FS.readFileSync(workspaceFile, 'utf-8')

const strings = [`  - 'samples/*'`]
if (isBackup) {
  content = strings.reduce(
    (content, string) => content.replace(string, `# ${string}`),
    content,
  )
}

if (isRestore) {
  content = strings.reduce(
    (content, string) => content.replace(`# ${string}`, string),
    content,
  )
}

FS.writeFileSync(workspaceFile, content)
