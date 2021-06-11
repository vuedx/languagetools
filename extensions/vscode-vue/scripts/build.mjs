import { execSync } from 'child_process'
import Path from 'path'
import { fileURLToPath } from 'url'
import { prepareExtensionForPackaging } from '../../../scripts/extension-package.mjs'

const __dirname = Path.dirname(fileURLToPath(import.meta.url))
const dir = Path.resolve(__dirname, '..')
prepareExtensionForPackaging(dir, () => {
  const execArgs = { stdio: [0, 1, 2], cwd: dir }
  execSync(`node build/prepare-grammar`, execArgs)
  execSync(`node build/grammar`, execArgs)
  execSync(
    `$(pnpm bin)/vsce package --out vue.vsix`,
    execArgs,
  )
})
