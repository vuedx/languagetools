#!/usr/bin/env node

const { execSync } = require('child_process')
const Path = require('path')
const FS = require('fs')

const extensions = ['vue', 'vue-language-features']
const extensionsDir = Path.resolve(__dirname, '../extensions')
const packagesDir = Path.resolve(__dirname, '../packages')

function run(command, cwd) {
  console.log('> ' + command)
  execSync(command, { cwd, stdio: 'pipe' })
}

function main(version, publish, filter) {
  if (publish && !process.env.VSCE_TOKEN) {
    throw new Error(
      'Set VSCE_TOKEN environment variable with personal access token.'
    )
  }

  const PAT = process.env.VSCE_TOKEN

  extensions.forEach((name) => {
    if (!name.match(filter)) return

    console.log('Extension: ' + name)
    const extensionDir = Path.resolve(extensionsDir, name)
    const pkgFile = Path.resolve(extensionDir, 'package.json')

    const revert = patchWorkspaceDependencies(pkgFile)

    try {
      run('rm -rf node_modules', extensionDir)
      run('npm install --only=prod --ignore-scripts', extensionDir)
      if (publish)
        run(
          `vsce publish -m 'release(${name}): version %s' -p ${PAT} ${version}`,
          extensionDir
        )
      else run('vsce package -o extension.vsix', extensionDir)

      run('rm -rf node_modules package-lock.json', extensionDir)
    } finally {
      revert()
      console.log()
    }
  })

  run('pnpm install', Path.resolve(__dirname))
}

function patchWorkspaceDependencies(pkgFile) {
  const contents = FS.readFileSync(pkgFile, { encoding: 'utf-8' })
  const dependencyTypes = ['dependencies', 'devDependencies']
  const pkg = JSON.parse(contents)

  dependencyTypes.forEach((dependencyType) => {
    if (pkg[dependencyType]) {
      for (const name in pkg[dependencyType]) {
        const version = pkg[dependencyType][name]

        if (version.startsWith('workspace:')) {
          pkg[dependencyType][name] = getWorkspaceVersion(name)
        }
      }
    }
  })

  FS.writeFileSync(pkgFile, JSON.stringify(pkg))

  const revert = () => {
    const pkg = JSON.parse(contents)
    pkg.version = getWorkspaceVersion(pkgFile)
    FS.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2))
  }

  process.on('beforeExit', revert)

  return () => {
    revert()

    process.off('beforeExit', revert)
  }
}

function getWorkspaceVersion(name) {
  return require(name.endsWith('package.json')
    ? name
    : Path.resolve(packagesDir, name, 'package.json')).version
}

const { version = '', filter = '', publish = false } = require('minimist')(
  process.argv.slice(2)
)

main(version, publish, filter)
