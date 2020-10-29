const pwd = process.cwd()

const Path = require('path')
const FS = require('fs')
const pkg = require(`${pwd}/package.json`)

pkg.preview = false
pkg.name = pkg.name.replace('-insiders', '')

const packageFile = Path.resolve(pwd, 'package.json')
FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))
