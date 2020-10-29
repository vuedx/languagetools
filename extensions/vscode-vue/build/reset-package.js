const Path = require('path')
const FS = require('fs')
const pkg = require('../package.json')

pkg.preview = false
pkg.name = pkg.name.replace('-insiders', '')

const packageFile = Path.resolve(__dirname, '../package.json')
FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))
