import Path from 'path'
import FS from 'fs'

const fileNames = ['package.json']
export function getDir() {
  const arg = process.argv[2] ?? process.cwd()
  const dir = Path.isAbsolute(arg) ? arg : Path.resolve(process.cwd(), arg)
  return dir
}

/**
 * @param {string} dir
 */
function backup(dir) {
  for (const fileName of fileNames) {
    const file = Path.resolve(dir, fileName)
    const fileBak = Path.resolve(dir, `${fileName}.bak`)

    FS.writeFileSync(fileBak, FS.readFileSync(file, 'utf-8'))
  }
}

/**
 * @param {string} dir
 */
function revert(dir) {
  for (const fileName of fileNames) {
    const file = Path.resolve(dir, fileName)
    const fileBak = Path.resolve(dir, `${fileName}.bak`)

    if (FS.existsSync(fileBak)) {
      FS.writeFileSync(file, FS.readFileSync(fileBak, 'utf-8'))
      FS.unlinkSync(fileBak)
    }
  }
}

/**
 * @param {number} num
 */
function s(num) {
  return `${num}`
}

/**
 *
 * @param {string} dir
 */
function transform(dir) {
  const pkg = JSON.parse(FS.readFileSync(`${dir}/package.json`, 'utf-8'))
  const today = new Date()
  // eslint-disable-next-line dot-notation
  const RELEASE_CHANNEL = process.env['RELEASE_CHANNEL'] ?? 'default'
  const name = pkg.name
  const displayName = pkg.displayName

  delete pkg.dependencies
  delete pkg.devDependencies

  if (RELEASE_CHANNEL === 'insiders') {
    pkg.preview = true
    pkg.version = pkg.version =
      [
        s(today.getUTCFullYear()),
        s(today.getUTCMonth() + 1),
        s(today.getUTCDate()),
      ].join('.') +
      String(Math.floor(today.getTime() / 1000) % 86400).padStart(5, '0')
    if (!pkg.name.endsWith('-insiders')) {
      pkg.name = `${pkg.name}-insiders`
      pkg.displayName = `${pkg.displayName} (Insiders)`
    }
  }

  if (RELEASE_CHANNEL !== 'insiders') {
    if (Array.isArray(pkg.contributions?.jsonValidation)) {
      pkg.contributions.jsonValidation[0].url = `https://unpkg.com/@vuedx/projectconfig@${pkg.version}/schema.json`
    }
  }
  const packageFile = Path.resolve(dir, 'package.json')
  FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))

  if (RELEASE_CHANNEL === 'insiders') {
    const readmeFile = Path.resolve(dir, 'readme.md')
    FS.writeFileSync(
      readmeFile,
      FS.readFileSync(readmeFile, { encoding: 'utf-8' }).replace(
        '<!-- INSIDERS -->',
        `> **NOTE:** This is pre-release (insiders) build of the [${displayName}](https://marketplace.visualstudio.com/items?itemName=znck.${name}) extension.`,
      ),
    )
  }
}

/**
 * @param {string} dir
 * @param {() => void} fn
 */
export function prepareExtensionForPackaging(dir, fn) {
  try {
    backup(dir)
    transform(dir)
    fn()
  } finally {
    revert(dir)
  }
}
