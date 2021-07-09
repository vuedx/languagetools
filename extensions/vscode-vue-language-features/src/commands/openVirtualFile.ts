import { injectable, inject } from 'inversify'
import vscode from 'vscode'
import { DocumentService } from '../services/documents'

@injectable()
export class OpenVirtualFileCommand {
  public constructor(
    @inject(DocumentService)
    private readonly documents: DocumentService,
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

    await this.documents.ensureDocument(editor.document.uri.fsPath)

    const doc = this.documents.getVueDocument(editor.document.uri.fsPath)
    if (doc == null) {
      await vscode.window.showInformationMessage(
        'Failed to load current Vue file.',
      )
      return
    }

    const block = doc.getBlockAt(doc.offsetAt(editor.selection.start))
    if (block != null) {
      const blockDoc = doc.getDoc(block)
      if (blockDoc?.tsFileName != null) {
        const uri = vscode.Uri.file(blockDoc.tsFileName).with({
          scheme: 'vue',
        })

        await vscode.commands.executeCommand(
          'vscode.open',
          uri,
          vscode.ViewColumn.Beside,
        )

        return
      }
    }

    const uri = vscode.Uri.file(doc.tsFileName).with({
      scheme: 'vue',
    })

    await vscode.commands.executeCommand(
      'vscode.open',
      uri,
      vscode.ViewColumn.Beside,
    )
  }
}
