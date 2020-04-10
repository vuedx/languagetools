#!/usr/bin/env node

const Path = require('path')
const { runTests } = require('vscode-test')

process.env.VSCODE_CLI = '1'

async function suite(extension, fixture = '') {
  try {
    const extensionDevelopmentPath = Path.resolve(
      __dirname,
      '../extensions',
      extension
    )
    const extensionTestsPath = Path.resolve(
      __dirname,
      '../packages/@vuedx/extensions-shared/runner.js'
    )
    const workspacePath = Path.resolve(
      extensionDevelopmentPath,
      'src/__fixtures__/' + fixture
    )

    console.log(`> Extension: ${extension}\n (suite: ${fixture || 'default'})`)

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions', workspacePath],
      extensionTestsEnv: {
        VSCODE_TEST_TARGET: `znck.${extension}`,
        VSCODE_TEST_ROOT: Path.resolve(
          extensionDevelopmentPath,
          'src/__tests__'
        ),
      },
    })
  } catch {
    console.error('Failed to run tests')
    process.exit(1)
  }
}

async function run() {
  await suite('vue')
}

run()
