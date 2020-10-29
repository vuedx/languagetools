const Path = require('path')
const FS = require('fs')
const pkg = require('../package.json')

const today = new Date()

function s(num) {
  return `${num}`.padStart(2, '0')
}

pkg.preview = true
pkg.version = [
  s(today.getUTCFullYear()),
  s(today.getUTCMonth() + 1),
  s(today.getUTCDate()),
].join('.')

const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL || 'default'

if (RELEASE_CHANNEL === 'insiders') {
  if (!pkg.name.endsWith('-insiders')) {
    pkg.preview = true
    pkg.name = `${pkg.name}-insiders`
  }

  const packageFile = Path.resolve(__dirname, '../package.json')
  FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))
}
