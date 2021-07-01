import { injectable } from 'inversify'
import vscode from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class OpenVirtualFileCommand extends Installable {
  public constructor() {
    super()
  }

  public install(): vscode.Disposable {
    super.install()

    return vscode.commands.registerTextEditorCommand(
      'vuedx.openVirtualFile',
      this.onExecute.bind(this) as any,
    )
  }

  private async onExecute(
    _editor: vscode.TextEditor,
    _: vscode.TextEditorEdit,
    _activeDocumentUri?: string,
    _activeSelector?: any,
  ): Promise<void> {
    await vscode.window.showInformationMessage(
      'There is no active Vue document.',
    )
  }
}
