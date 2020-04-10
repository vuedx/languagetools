import vscode from 'vscode'
import { before, suite, test, afterEach, beforeEach } from 'mocha'
import { expect } from 'chai'
import {
  openFile,
  wait,
  onExtensionReady,
  getExtensionPath,
} from '@vuedx/extensions-shared/test'
import { unlinkSync, existsSync } from 'fs'
import { resolve } from 'path'
import { VueExtensionSettings } from '@vuedx/extensions-shared/services/configuration'

suite('New language block detection', () => {
  const configFile = resolve(getExtensionPath(), 'scripts/config.runtime.json')

  before(onExtensionReady)

  beforeEach(async () => {
    vscode.workspace.getConfiguration().update('vue.blocks', {}, true)
    if (existsSync(configFile)) unlinkSync(configFile)
  })

  afterEach(async () => {
    if (existsSync(configFile)) unlinkSync(configFile)
    vscode.workspace.getConfiguration().update('vue.blocks', {}, true)
  })

  test('it detects new language block when .vue file is opened', async () => {
    expect(existsSync(configFile)).to.be.false
    await openFile('auto-detect-language-block.vue')
    await wait(1)
    expect(existsSync(configFile)).to.be.true

    const runtime = require(configFile)
    expect(runtime).to.have.keys('docs', 'template', 'script', 'style')
    expect(runtime.docs.allowed).to.have.length(1)
    expect(runtime.docs.allowed[0]).to.equal('md')

    const config = vscode.workspace
      .getConfiguration('vue')
      .get<VueExtensionSettings['blocks']>('blocks')!
    expect(config).to.have.key('docs')
    expect(config).to.not.have.key('template')
    expect(config.docs.allowed[0]).to.equal('md')
  })
})
