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

  public install() {
    super.install()

    return vscode.Disposable.from(
      vscode.workspace.registerTextDocumentContentProvider('vue', this),
      this.documents.onDidChangeTextDocument(({ uri }) => {
        this.onDidChangeEmitter.fire(uri)
      }),
    )
  }

  private onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>()
  public onDidChange = this.onDidChangeEmitter.event

  async provideTextDocumentContent(request: vscode.Uri) {
    let uri = request.toString()

    if (uri.startsWith('vue:/') && !uri.startsWith('vue://')) {
      uri = uri.replace(/^vue:/, 'vue://')
    }

    try {
      const document = await this.documents.getVirtualDocument(uri)

      return document?.getText()
    } catch (error) {
      return `/*\nError: ${error.message}\n${error.stack}\n*/`
    }
  }
}
