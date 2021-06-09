import vscode from 'vscode'
import { injectable } from 'inversify'
import {
  AsyncDocumentStore,
  isVueFile,
  parseVirtualFileName,
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import { Installable } from '../utils/installable'

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()
  private readonly store = new AsyncDocumentStore(async (uri) => {
    const text = await vscode.workspace.openTextDocument(vscode.Uri.parse(uri))
    const doc = VueTextDocument.create(uri, 'vue', text.version, text.getText())

    return doc
  })

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      this.store,
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (event) => {
        const uri = event.document.uri.toString()
        if (this.store.has(uri)) {
          const document = await this.store.get(uri)

          if (document != null) {
            VueTextDocument.update(
              document,
              event.contentChanges.slice(),
              event.document.version,
            )

            document.all().forEach((document) => {
              this.emitter.fire({ uri: vscode.Uri.parse(document.uri) })
            })
          }
        }
      }),
      vscode.workspace.onDidOpenTextDocument((event) => {
        const uri = event.uri.toString()

        if (isVueFile(uri)) this.store.get(uri)
      }),
    )
  }

  public async getVueDocument(uri: string): Promise<VueTextDocument | null> {
    return this.store.get(uri)
  }

  public async getVirtualDocument(
    uri: string,
  ): Promise<VirtualTextDocument | null> {
    try {
      const parsed = parseVirtualFileName(uri)
      if (parsed == null) return null
      const { selector, uri: container } = parsed
      const document = await this.store.get(container)

      return document?.getDocument(selector) ?? null
    } catch {
      return null
    }
  }

  public onDidChangeTextDocument(fn: (e: { uri: vscode.Uri }) => any): any {
    return this.emitter.event(fn)
  }
}
