import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import Path from 'path'
import { fileURLToPath } from 'url'
import {
  appendExtraFiles,
  prepareExtensionForPackaging,
} from '../../../scripts/extension-package.mjs'

const __dirname = Path.dirname(fileURLToPath(import.meta.url))
const dir = Path.resolve(__dirname, '..')
const files = ['CHANGELOG.md']
prepareExtensionForPackaging(dir, () => {
  const execArgs = { stdio: [0, 1, 2], cwd: dir }
  const RELEASE_CHANNEL = /** @type {'release'|'pre-release'} */ (process.env[
    'RELEASE_CHANNEL'
  ] ?? 'release')
  const args = RELEASE_CHANNEL === 'pre-release' ? '--pre-release' : ''

  execSync(`node build/prepare-grammar`, execArgs)
  execSync(`node build/grammar`, execArgs)
  execSync(
    `$(pnpm bin)/vsce package --no-dependencies ${args} --out vue.vsix`,
    execArgs,
  )

  appendExtraFiles({
    vsixFileName: 'vue.vsix',
    extensionDir: dir,
    fn: (writeFile) => {
      files.forEach((file) => {
        writeFile(file, readFileSync(Path.resolve(dir, file)))
      })
    },
  })
})
