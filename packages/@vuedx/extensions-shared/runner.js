require('ts-node/register')
require('reflect-metadata')

const glob = require('fast-glob')
const Mocha = require('mocha')

async function run() {
  const testRoot = process.env.VSCODE_TEST_ROOT

  console.log({ testRoot })

  const mocha = new Mocha({
    ui: 'tdd',
    timeout: 100000,
    useColors: true,
  })

  const files = await glob('**/*.vscode-test.ts', {
    cwd: testRoot,
    absolute: true,
  })
  
  files.forEach((file) => mocha.addFile(file))

  return new Promise((resolve, reject) => {
    mocha.run((failures) => {
      if (failures > 0) {
        reject(new Error(`${failures} test(s) failed.`))
      } else {
        resolve()
      }
    })
  })
}

module.exports = { run }
