import { inject, injectable } from 'inversify'
import * as Path from 'path'
import vscode from 'vscode'
import { ConfigurationService } from '../services/configuration'
import { Installable } from '../utils/installable'

@injectable()
export class GenerateGrammarCommand extends Installable {
  private readonly rootDir: string
  private isActive = false
  private blocks = JSON.parse(JSON.stringify(this.configuration.config.blocks))
  private readonly supported: Record<string, string> = {}

  public constructor(
    @inject(ConfigurationService)
    private readonly configuration: ConfigurationService,

    @inject('context')
    private readonly context: vscode.ExtensionContext,
  ) {
    super()

    this.rootDir = this.context.extensionPath
    this.supported = require(Path.resolve(
      this.context.extensionPath,
      'scripts',
      'supported.json',
    ))
  }

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      vscode.commands.registerTextEditorCommand('vue.generateGrammar', () => {
        // eslint-disable-next-line no-void
        void this.onExecute()
      }),
      vscode.workspace.onDidOpenTextDocument(async (event) => {
        if (this.isVueFile(event.uri)) {
          await this.checkIfNewLanguage(event.uri)
        }
      }),
      vscode.workspace.onDidSaveTextDocument(async (document) => {
        if (this.isVueFile(document.uri)) {
          await this.checkIfNewLanguage(document.uri)
        }
      }),
    )
  }

  private isVueFile(uri: vscode.Uri): boolean {
    return uri.fsPath.endsWith('.vue')
  }

  private async checkIfNewLanguage(_uri: vscode.Uri): Promise<void> {
    if (this.isActive) return

    const doc = null as any
    if (doc == null) return

    let shouldGenerate = false
    const blocks: Array<{ block: string; language: string }> = []

    doc.descriptor.customBlocks.forEach((block: any) => {
      if (
        !/^(script|template|style)$/.test(block.type) &&
        block.lang != null &&
        block.lang in this.supported
      ) {
        if (this.blocks[block.type] != null) {
          shouldGenerate = true
          this.blocks[block.type] = {
            default: '',
            allowed: [block.lang],
          }
          blocks.push({ block: block.type, language: block.lang })
        } else if (
          this.blocks[block.type].allowed?.includes(block.lang) !== true
        ) {
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
      await this.generate(this.blocks, blocks)
    }
  }

  private readonly onExecute = async (): Promise<void> => {
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
    changes: Array<{ block: string; language: string }> = [],
  ): Promise<void> {
    try {
      this.isActive = true
      const FS = await import('fs')
      const current = JSON.parse(
        FS.readFileSync(Path.resolve(this.rootDir, 'scripts', 'config.json'), {
          encoding: 'utf-8',
        }),
      )

      FS.writeFileSync(
        Path.resolve(this.rootDir, 'scripts', 'config.runtime.json'),
        JSON.stringify({ ...blocks, ...current }),
      )

      const { template, script, style, ...config } = blocks

      await this.configuration.save('blocks', config)

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(Path.resolve(
        this.rootDir,
        'scripts',
        'generate-grammar.js',
      )).generate()

      if (changes.length > 0) {
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
