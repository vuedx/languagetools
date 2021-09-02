import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '../utils/installable'
import { DocumentService } from '../services/documents'

@injectable()
export class VueVirtualDocumentProvider
  extends Installable
  implements vscode.TextDocumentContentProvider {
  constructor(private readonly documents: DocumentService) {
    super()
  }

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      vscode.workspace.registerTextDocumentContentProvider('vue', this),
      this.documents.onDidChangeTextDocument(({ uri }) => {
        this.onDidChangeEmitter.fire(uri)
      }),
    )
  }

  private readonly onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>()
  public onDidChange = this.onDidChangeEmitter.event

  async provideTextDocumentContent(
    request: vscode.Uri,
  ): Promise<string | undefined> {
    try {
      const fileName = request.with({ scheme: 'file' }).fsPath
      if (fileName.endsWith('.vue.ts')) {
        return this.documents
          .getVueDocument(fileName.substr(0, fileName.length - 3))
          ?.getTypeScriptText()
      }
      const document = await this.documents.getVirtualDocument(fileName)

      if (document?.generated == null) return
      if (document.rawSourceMap != null) {
        return (
          document.generated.getText() +
          '\n//# sourceMappingURL=data:application/json;base64,' +
          Buffer.from(JSON.stringify(document.rawSourceMap)).toString('base64')
        )
      }
      return document.generated.getText()
    } catch (error) {
      if (error instanceof Error) {
        return `/*\nError: ${error.message}\n${error.stack ?? ''}\n*/`
      }

      return `/*\nError: ${String(error)}\n*/`
    }
  }
}
