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
    let uri = request.toString()

    if (uri.startsWith('vue:/') && !uri.startsWith('vue://')) {
      uri = uri.replace(/^vue:/, 'vue://')
    }

    try {
      const document = await this.documents.getVirtualDocument(uri)

      return document?.getText()
    } catch (error) {
      if (error instanceof Error) {
        return `/*\nError: ${error.message}\n${error.stack ?? ''}\n*/`
      }

      return `/*\nError: ${String(error)}\n*/`
    }
  }
}
