function s(num) {
  return `${num}`
}

const Path = require('path')
const FS = require('fs')
const pwd = process.cwd()
const pkg = require(`${pwd}/package.json`)
const today = new Date()
const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL || 'default'
const name = pkg.name
const displayName = pkg.displayName

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
    pkg.preview = true
    pkg.name = `${pkg.name}-insiders`
    pkg.displayName = `${pkg.displayName} (Insiders)`
  }
}

if (Array.isArray(pkg.contributions?.typescriptServerPlugins)) {
  pkg.contributions.typescriptServerPlugins[0].name =
    '@vuedx/typescript-standalone'
}

if (RELEASE_CHANNEL !== 'insiders') {
  if (Array.isArray(pkg.contributions?.jsonValidation)) {
    pkg.contributions.jsonValidation[0].url = `https://unpkg.com/@vuedx/projectconfig@${pkg.version}/schema.json`
  }
}
const packageFile = Path.resolve(pwd, 'package.json')
FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))

if (RELEASE_CHANNEL === 'insiders') {
  const readmeFile = Path.resolve(pwd, 'readme.md')
  FS.writeFileSync(
    readmeFile,
    FS.readFileSync(readmeFile, { encoding: 'utf-8' }).replace(
      '<!-- INSIDERS -->',
      `> **NOTE:** This is pre-release (insiders) build of the [${displayName}](https://marketplace.visualstudio.com/items?itemName=znck.${name}) extension.`,
    ),
  )
}
