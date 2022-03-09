import vscode from 'vscode'
import { inject, injectable } from 'inversify'
import { Installable } from '../utils/installable'
import { DocumentService } from '../services/documents'
import { PluginCommunicationService } from '../services/PluginCommunicationService'

@injectable()
export class VueVirtualDocumentProvider
  extends Installable
  implements vscode.TextDocumentContentProvider {
  constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,

    @inject(DocumentService)
    private readonly documents: DocumentService,
  ) {
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

      for (const connection of this.plugin.connections) {
        const contents = await connection.getVirtualFileContents(fileName)
        if (contents != null) return contents
      }

      if (this.plugin.connections.length === 0)
        throw new Error('No active connection')

      return undefined
    } catch (error) {
      if (error instanceof Error) {
        return `/*\nError: ${error.stack ?? ''}\n*/`
      }

      return `/*\nError: ${String(error)}\n*/`
    }
  }
}
