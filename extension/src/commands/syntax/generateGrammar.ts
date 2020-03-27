import { isVueFile } from '@vuedx/vue-virtual-textdocument'
import { DocumentService } from 'extension/src/services/documents'
import Fs from 'fs'
import { inject, injectable } from 'inversify'
import Path from 'path'
import vscode from 'vscode'
import { ConfigurationService } from '../../services/configuration'
import { Installable } from '../../utils/installable'

@injectable()
export class GenerateGrammarCommand extends Installable {
  private readonly rootDir: string
  private isActive = false
  private blocks = JSON.parse(JSON.stringify(this.configuration.config.blocks))

  public constructor(
    private readonly configuration: ConfigurationService,
    private readonly documents: DocumentService,
    @inject('context') private readonly context: vscode.ExtensionContext
  ) {
    super()

    this.rootDir = context.extensionPath
  }

  public install() {
    super.install()

    return vscode.Disposable.from(
      vscode.commands.registerTextEditorCommand(
        'vue.syntax.generateGrammar',
        this.onExecute.bind(this)
      ),
      vscode.workspace.onDidOpenTextDocument(async event => {
        const uri = event.uri.toString()
        if (isVueFile(uri)) {
          this.checkIfNewLanguage(uri)
        }
      }),
      vscode.workspace.onDidChangeTextDocument(async event => {
        const uri = event.document.uri.toString()
        if (isVueFile(uri)) {
          this.checkIfNewLanguage(uri)
        }
      })
    )
  }

  private async checkIfNewLanguage(uri: string) {
    if (this.isActive) return
    const doc = (await this.documents.getVueDocument(uri))!

    let shouldGenerate = false

    doc.blocks.forEach(block => {
      if (block.lang && !/^(script|template|style)$/.test(block.type)) {
        if (!this.blocks[block.type]) {
          shouldGenerate = true
          this.blocks[block.type] = {
            default: '',
            allowed: [block.lang],
          }
        } else if (!this.blocks[block.type].allowed?.includes(block.lang)) {
          this.blocks[block.type] = {
            allowed: [],
            ...this.blocks[block.type],
          }
          this.blocks[block.type].allowed.push(block.lang)
          shouldGenerate = true
        }
      }
    })

    if (shouldGenerate) {
      this.generate(this.blocks)
    }
  }

  private async onExecute() {
    return this.generate(this.configuration.config.blocks)
  }

  private async generate(
    blocks: Record<string, { default: string; allowed: string[] }>
  ) {
    try {
      this.isActive = true
      Fs.writeFileSync(
        Path.resolve(this.rootDir, 'scripts', 'config.runtime.json'),
        JSON.stringify(blocks)
      )
      this.configuration.save({ blocks: blocks })

      require(Path.resolve(
        this.rootDir,
        'scripts',
        'generate-grammar.js'
      )).generate()

      const ans = await vscode.window.showInformationMessage(
        'Vue DX languages updated. Reload window to apply changes?',
        'Ignore',
        'Reload'
      )

      if (ans === 'Reload') {
        await vscode.commands.executeCommand('workbench.action.reloadWindow')
      }
    } finally {
      this.isActive = false
    }
  }
}
