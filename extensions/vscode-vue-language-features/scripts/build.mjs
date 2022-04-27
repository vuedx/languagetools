import { execSync } from 'child_process'
import glob from 'fast-glob'
import FS from 'fs'
import Path from 'path'
import { fileURLToPath } from 'url'
import {
  appendExtraFiles,
  prepareExtensionForPackaging,
} from '../../../scripts/extension-package.mjs'

const files = ['CHANGELOG.md']
// Copy packages to vsix bundle.
const packages = {
  '@vuedx/typescript-plugin-vue': {
    main: 'lib/standalone.js',
    files: ['runtime/*.d.ts', 'lib/standalone.js'],
  },
}

const __dirname = Path.dirname(fileURLToPath(import.meta.url))
const dir = Path.resolve(__dirname, '..')

prepareExtensionForPackaging(dir, () => {
  const execArgs = { stdio: [0, 1, 2], cwd: dir }
  const RELEASE_CHANNEL = /** @type {'release'|'pre-release'} */ (
    process.env['RELEASE_CHANNEL'] ?? 'release'
  )
  const args = RELEASE_CHANNEL === 'pre-release' ? '--pre-release' : ''

  execSync(
    `$(pnpm bin)/vsce package --no-dependencies ${args} --out vue-language-features.vsix`,
    execArgs,
  )

  appendExtraFiles({
    vsixFileName: 'vue-language-features.vsix',
    extensionDir: dir,
    fn: (writeFile) => {
      files.forEach((fileName) => {
        writeFile(fileName, FS.readFileSync(Path.resolve(dir, fileName)))
      })

      Object.entries(packages).forEach(([name, options]) => {
        const packageDir = Path.resolve(dir, 'node_modules', name)
        const originalPackageJson = JSON.parse(
          FS.readFileSync(Path.resolve(packageDir, 'package.json'), 'utf-8'),
        )

        const packageJson = {
          ...originalPackageJson,
          main: options.main,
          dependencies: {},
          devDependencies: {},
          module: undefined,
          exports: undefined,
        }

        writeFile(
          Path.join('node_modules', name, 'package.json'),
          JSON.stringify(packageJson, null, 2),
        )

        const files = glob.sync(
          [
            packageJson.main,
            `${packageJson.main}.map`,
            ...options.files,
            'LICENSE',
            'readme.md',
          ],
          { cwd: packageDir, absolute: false },
        )

        files.forEach((file) => {
          writeFile(
            Path.join('node_modules', name, file),
            FS.readFileSync(Path.resolve(packageDir, file)),
          )
        })
      })
    },
  })
})
