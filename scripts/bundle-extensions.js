#!/usr/bin/env node

const { execSync: run } = require('child_process')
const Path = require('path')
const FS = require('fs')

const extensions = ['vue', 'vue-language-features']
const extensionsDir = Path.resolve(__dirname, '../extensions')
const packagesDir = Path.resolve(__dirname, '../packages')

function main(version, publish, filter) {
  extensions.forEach((name) => {
    if (!name.match(filter)) return

    const extensionDir = Path.resolve(extensionsDir, name)
    const pkgFile = Path.resolve(extensionDir, 'package.json')

    if (version !== 'from-git') {
      run('npm version ' + version, { cwd: extensionDir })
    }

    const revert = patchWorkspaceDependencies(pkgFile)

    try {
      run('rm -rf node_modules', { cwd: extensionDir })
      run('npm install --only=prod --ignore-scripts', { cwd: extensionDir })
      run('vsce package -o extension.vsix', { cwd: extensionDir })

      if (publish) run('vsce package -o extension.vsix', { cwd: extensionDir })
    } finally {
      revert()
    }
  })
}

function patchWorkspaceDependencies(pkgFile) {
  const contents = FS.readFileSync(pkgFile, { encoding: 'utf-8' })
  const dependencyTypes = ['dependencies', 'devDependencies']
  const pkg = JSON.parse(contents)

  dependencyTypes.forEach((dependencyType) => {
    if (pkg[dependencyType]) {
      for (const name in pkg[dependencyType]) {
        const version = pkg[dependencyType][name][version]

        if (version.startsWith('workspace:')) {
          pkg[dependencyType][name][version] = getWorkspaceVersion(name)
        }
      }
    }
  })

  FS.writeFileSync(pkgFile, JSON.stringify(pkg))

  return () => FS.writeFileSync(pkgFile, contents)
}

function getWorkspaceVersion(name) {
  return require(Path.resolve(packagesDir, name, 'package.json')).version
}

const {
  filter = '',
  version = 'from-git',
  publish = false,
} = require('minimist')(process.argv.slice(2))

main(version, publish, filter)
