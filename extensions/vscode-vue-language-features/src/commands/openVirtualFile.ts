import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '../utils/installable'
import { DocumentService } from '../services/documents'

@injectable()
export class OpenVirtualFileCommand extends Installable {
  public constructor(private readonly documents: DocumentService) {
    super()
  }

  public install() {
    super.install()

    return vscode.commands.registerTextEditorCommand(
      'vue.openVirtualFile',
      this.onExecute.bind(this),
    )
  }

  private async onExecute() {
    const editor = vscode.window.activeTextEditor

    if (!editor) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.',
      )
    }

    const uri = editor.document.uri.toString()

    if (!/\.vue$/.test(uri)) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.',
      )
    }

    const position = editor.selection.start

    const container = await this.documents.getVueDocument(uri)
    if (!container) return
    const block = container.blockAt(position)
    let document =
      block?.type === 'template'
        ? container.getDocument('_render')
        : container.documentAt(position)

    if (!document) {
      document = container.getDocument('_module')!
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
