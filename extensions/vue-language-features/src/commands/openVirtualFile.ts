import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '@vuedx/extensions-shared/utils/installable'
import { DocumentService } from '@vuedx/extensions-shared/services/documents'

@injectable()
export class OpenVirtualFileCommand extends Installable {
  public constructor(private readonly documents: DocumentService) {
    super()
  }

  public install() {
    super.install()

    return vscode.commands.registerTextEditorCommand(
      'vue.openVirtualFile',
      this.onExecute.bind(this)
    )
  }

  private async onExecute() {
    const editor = vscode.window.activeTextEditor

    if (!editor) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.'
      )
    }

    const uri = editor.document.uri.toString()

    if (!/\.vue$/.test(uri)) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.'
      )
    }

    const position = editor.selection.start

    const container = await this.documents.getVueDocument(uri)
    const block = container?.blockAt(position)
    const document = block ? container?.getBlockDocument(block) : null

    if (!document) {
      return vscode.window.showInformationMessage(
        'There is no virtual document at cursor.'
      )
    }

    const virtualUri = vscode.Uri.parse(document.uri)
    const ref = await vscode.workspace.openTextDocument(virtualUri)

    vscode.window.showTextDocument(ref, {
      viewColumn: vscode.ViewColumn.Beside,
      preserveFocus: true,
      preview: true,
      selection: editor.selection,
    })
  }
}
