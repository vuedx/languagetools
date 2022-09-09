import { first } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import vscode from 'vscode'
import { PluginCommunicationService } from '../services/PluginCommunicationService'
import { getVirtualFileUri } from '../utils/uri'

@injectable()
export class OpenVirtualFileCommand {
  public constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,
  ) {}

  public install(): vscode.Disposable {
    return vscode.commands.registerTextEditorCommand(
      'vuedx.openVirtualFile',
      (editor) => {
        void this.onExecute(editor)
      },
    )
  }

  private async onExecute(editor: vscode.TextEditor): Promise<void> {
    if (editor.document.languageId !== 'vue') {
      await vscode.window.showInformationMessage('There is no active Vue file.')
      return
    }

    const fileName = await this.plugin.first(async (connection) => {
      return first(
        await connection.getRelatedVirtualFiles(editor.document.fileName),
      )
    })

    if (fileName == null) {
      await vscode.window.showInformationMessage(
        `There is no virtual file for line ${editor.selection.start.line}.`,
      )

      return
    }

    await vscode.commands.executeCommand(
      'vscode.open',
      getVirtualFileUri(fileName),
      vscode.ViewColumn.Beside,
    )
  }
}
