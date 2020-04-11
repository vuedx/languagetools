import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '@vuedx/extensions-shared/utils/installable'
import { DocumentService } from '@vuedx/extensions-shared/services/documents'
import Path from 'path'
import Fs from 'fs'

@injectable()
export class PatchTypeScriptCommand extends Installable {
  private tsExtPath = vscode.extensions.getExtension(
    'vscode.typescript-language-features'
  )!.extensionPath
  public constructor(private readonly documents: DocumentService) {
    super()
  }

  public install() {
    super.install()

    const subscription = vscode.workspace.onDidOpenTextDocument(
      async (document) => {
        if (document.languageId === 'vue') {
          if (await this.showHint()) {
            subscription.dispose()
          }
        }
      }
    )

    return vscode.Disposable.from(
      subscription,
      vscode.commands.registerTextEditorCommand(
        'vue.patchTypeScript',
        this.patch.bind(this)
      )
    )
  }

  async showHint() {
    const sourceFile = Path.resolve(this.tsExtPath, 'dist', 'extension.js')
    const contents = await Fs.promises.readFile(sourceFile, {
      encoding: 'utf-8',
    })

    if (!contents.includes(`'vue'`)) {
      const result = await vscode.window.showInformationMessage(
        `The TypeScript extension requires a runtime patch for handling .vue files.`,
        'Patch Now'
      )

      if (result === 'Patch Now') {
        await this.patch()

        return true
      }

      return false
    }

    return true
  }

  async revertPatch() {
    const sourceFile = Path.resolve(this.tsExtPath, 'dist', 'extension.js')
    const originalSourceFile = Path.resolve(
      this.tsExtPath,
      'dist',
      'extension.js.original'
    )

    if (Fs.existsSync(originalSourceFile)) {
      await Fs.promises.writeFile(
        sourceFile,
        await Fs.promises.readFile(originalSourceFile, { encoding: 'utf-8' })
      )

      const action = await vscode.window.showInformationMessage(
        `The TypeScript extension patch has been reverted. A reload is required for changes to take effect.`,
        'Reload'
      )
  
      if (action === 'Reload') {
        await vscode.commands.executeCommand('workbench.action.reloadWindow')
      }
    }
  }

  async patch() {
    const sourceFile = Path.resolve(this.tsExtPath, 'dist', 'extension.js')
    const contents = await Fs.promises.readFile(sourceFile, {
      encoding: 'utf-8',
    })

    if (contents.includes(`'vue'`)) {
      const result = await vscode.window.showInformationMessage(
        `The TypeScript extension already patched to handle .vue files. You can revert the patch by selecting "Undo" option.`,
        'Undo'
      )

      if (result === 'Undo') {
        await this.revertPatch()
      }

      return
    }

    await Fs.promises.writeFile(sourceFile + '.original', contents)
    await Fs.promises.writeFile(
      sourceFile,
      contents.replace(
        /(get documentSelector\(\)\{const e=)\[\];/,
        (_, code) => `${code}[{scheme:'file',language:'vue'}];`
      )
    )

    const action = await vscode.window.showInformationMessage(
      `The TypeScript extension has been patched to handle .vue files. A reload is required for changes to take effect.`,
      'Undo',
      'Reload'
    )

    if (action === 'Reload') {
      await vscode.commands.executeCommand('workbench.action.reloadWindow')
    } else if (action === 'Undo') {
      await this.revertPatch()
    }
  }
}
