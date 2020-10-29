const Path = require('path')
const FS = require('fs')
const { execSync } = require('child_process')
const { scripts: _, devDependencies: _1, ...pkg } = require('../package.json')

const today = new Date()

function s(num) {
  return `${num}`.padStart(2, '0')
}

pkg.version = [
  s(today.getUTCFullYear()),
  s(today.getUTCMonth() + 1),
  s(today.getUTCDate()),
].join('.')

const RELEASE_CHANNEL = process.env.RELEASE_CHANNEL || 'default'

if (RELEASE_CHANNEL === 'insiders') {
  pkg.preview = true
  pkg.name = `${pkg.name}-insiders`
}

const packageFile = Path.resolve(__dirname, '../template/package.json')
const pluginDir = Path.resolve(
  __dirname,
  '../template/node_modules/@vuedx/typescript-plugin-vue',
)

const {
  dependencies: _2,
  devDependencies: _3,
  scripts: _4,
  module: _5,
  types: _6,
  ...pluginPkg
} = require('@vuedx/typescript-plugin-vue/package.json')

pluginPkg.main = 'standalone.js'
pkg.dependencies = {
  '@vuedx/typescript-plugin-vue': pluginPkg.version,
}

FS.mkdirSync(pluginDir, { recursive: true })
FS.writeFileSync(packageFile, JSON.stringify(pkg, null, 2))
FS.writeFileSync(
  Path.join(pluginDir, 'standalone.js'),
  FS.readFileSync(
    Path.resolve(
      __dirname,
      '../node_modules/@vuedx/typescript-plugin-vue/standalone.js',
    ),

    { encoding: 'utf-8' },
  ),
)
FS.writeFileSync(
  Path.join(pluginDir, 'package.json'),
  JSON.stringify(pluginPkg, null, 2),
)

const rootDir = Path.resolve(__dirname, '..')
execSync(`cp -a ${rootDir}/dist ${rootDir}/template`)
