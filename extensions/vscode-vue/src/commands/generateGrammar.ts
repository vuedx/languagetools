import { ConfigurationService } from '../services/configuration'
import { DocumentService } from '../services/documents'
import { Installable } from '../utils/installable'
import { isVueFile } from '@vuedx/vue-virtual-textdocument'
import Fs from 'fs'
import { inject, injectable } from 'inversify'
import Path from 'path'
import vscode from 'vscode'

@injectable()
export class GenerateGrammarCommand extends Installable {
  private readonly rootDir: string
  private isActive = false
  private blocks = JSON.parse(JSON.stringify(this.configuration.config.blocks))
  private supported: Record<string, string> = {}

  public constructor(
    private readonly configuration: ConfigurationService,
    private readonly documents: DocumentService,
    @inject('context') private readonly context: vscode.ExtensionContext,
  ) {
    super()

    this.rootDir = this.context.extensionPath
    this.supported = require(Path.resolve(
      this.context.extensionPath,
      'scripts',
      'supported.json',
    ))
  }

  public install() {
    super.install()

    return vscode.Disposable.from(
      vscode.commands.registerTextEditorCommand(
        'vue.generateGrammar',
        this.onExecute.bind(this),
      ),
      vscode.workspace.onDidOpenTextDocument(async (event) => {
        const uri = event.uri.toString()
        if (isVueFile(uri)) {
          this.checkIfNewLanguage(uri)
        }
      }),
      vscode.workspace.onDidSaveTextDocument(async (document) => {
        const uri = document.uri.toString()
        if (isVueFile(uri)) {
          this.checkIfNewLanguage(uri)
        }
      }),
    )
  }

  private async checkIfNewLanguage(uri: string) {
    if (this.isActive) return
    const doc = (await this.documents.getVueDocument(uri))!

    let shouldGenerate = false
    const blocks: { block: string; language: string }[] = []

    doc.descriptor.customBlocks.forEach((block) => {
      if (
        !/^(script|template|style)$/.test(block.type) &&
        block.lang &&
        block.lang in this.supported
      ) {
        if (!this.blocks[block.type]) {
          shouldGenerate = true
          this.blocks[block.type] = {
            default: '',
            allowed: [block.lang],
          }
          blocks.push({ block: block.type, language: block.lang })
        } else if (!this.blocks[block.type].allowed?.includes(block.lang)) {
          this.blocks[block.type] = {
            allowed: [],
            ...this.blocks[block.type],
          }
          this.blocks[block.type].allowed.push(block.lang)
          blocks.push({ block: block.type, language: block.lang })
          shouldGenerate = true
        }
      }
    })

    if (shouldGenerate) {
      this.generate(this.blocks, blocks)
    }
  }

  private async onExecute() {
    await this.generate(this.configuration.config.blocks)

    const ans = await vscode.window.showInformationMessage(
      'Vue language grammar re-generated. Reload window to apply changes?',
      'Ignore',
      'Reload',
    )

    if (ans === 'Reload') {
      await vscode.commands.executeCommand('workbench.action.reloadWindow')
    }
  }

  private async generate(
    blocks: Record<string, { default: string; allowed: string[] }>,
    changes: { block: string; language: string }[] = [],
  ) {
    try {
      this.isActive = true
      const current = JSON.parse(
        Fs.readFileSync(Path.resolve(this.rootDir, 'scripts', 'config.json'), {
          encoding: 'utf-8',
        }),
      )

      Fs.writeFileSync(
        Path.resolve(this.rootDir, 'scripts', 'config.runtime.json'),
        JSON.stringify({ ...blocks, ...current }),
      )

      const { template, script, style, ...config } = blocks

      await this.configuration.save('blocks', config)

      require(Path.resolve(
        this.rootDir,
        'scripts',
        'generate-grammar.js',
      )).generate()

      if (changes.length) {
        const ans = await vscode.window.showInformationMessage(
          'New block types found in vue files: \n' +
            changes
              .map((change) => `<${change.block} lang="${change.language}">`)
              .join(', ') +
            '. Reload window to apply changes?',
          'Ignore',
          'Reload',
        )

        if (ans === 'Reload') {
          await vscode.commands.executeCommand('workbench.action.reloadWindow')
        }
      }
    } finally {
      this.isActive = false
    }
  }
}
