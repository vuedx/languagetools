import { execSync } from 'child_process'
import glob from 'fast-glob'
import FS from 'fs'
import Path from 'path'
import { fileURLToPath } from 'url'
import { prepareExtensionForPackaging } from '../../../scripts/extension-package.mjs'

// Copy packages to vsix bundle.
const packages = {
  '@vuedx/typescript-plugin-vue': {
    main: 'lib/standalone.js',
    files: ['runtime/*.d.ts'],
  },
}

const __dirname = Path.dirname(fileURLToPath(import.meta.url))
const dir = Path.resolve(__dirname, '..')

prepareExtensionForPackaging(dir, () => {
  const execArgs = { stdio: [0, 1, 2], cwd: dir }

  execSync(
    `$(pnpm bin)/vsce package --out vue-language-features.vsix`,
    execArgs,
  )

  try {
    execSync(`rm -rf tmp`, execArgs)
    execSync(`mkdir -p tmp`, execArgs)
    execSync(`unzip vue-language-features.vsix -d tmp`)

    const extensionDir = Path.resolve(dir, 'tmp/extension')

    Object.entries(packages).forEach(([name, options]) => {
      const packageDir = Path.resolve(dir, 'node_modules', name)
      const originalPackageJson = JSON.parse(
        FS.readFileSync(Path.resolve(packageDir, 'package.json'), 'utf-8'),
      )

      const packageJson = {
        ...originalPackageJson,
        main: options.main,
        module: undefined,
        exports: undefined,
      }

      writeFile(
        Path.resolve(
          Path.resolve(extensionDir, 'node_modules', name),
          'package.json',
        ),
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
        const targetFile = Path.resolve(
          extensionDir,
          'node_modules',
          name,
          file,
        )

        FS.mkdirSync(Path.dirname(targetFile), { recursive: true })
        FS.copyFileSync(Path.resolve(packageDir, file), targetFile)
      })
    })

    execSync(`zip -r ../vue-language-features.vsix .`, {
      cwd: Path.resolve(dir, 'tmp'),
    })
  } finally {
    execSync(`rm -r tmp`, execArgs)
  }
})

/**
 *
 * @param {string} fileName
 * @param {string|Buffer} contents
 */
function writeFile(fileName, contents) {
  const dirName = Path.dirname(fileName)
  FS.mkdirSync(dirName, { recursive: true })
  FS.writeFileSync(fileName, contents)
}
