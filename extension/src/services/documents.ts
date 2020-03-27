import {
  AsyncDocumentStore,
  isVueFile,
  parseVirtualFileUri,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import vscode from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()
  private readonly store = new AsyncDocumentStore(async uri => {
    const text = await vscode.workspace.openTextDocument(vscode.Uri.parse(uri))
    const doc = VueTextDocument.create(uri, 'vue', text.version, text.getText())

    return doc
  })

  public install() {
    super.install()

    return vscode.Disposable.from(
      this.store,
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async event => {
        const uri = event.document.uri.toString()
        if (this.store.has(uri) && isVueFile(uri)) {
          const document = await this.store.get(uri)

          document!.all().forEach(document => {
            this.emitter.fire({ uri: vscode.Uri.parse(document.uri) })
          })

          VueTextDocument.update(
            document!,
            event.contentChanges,
            event.document.version
          )
        }
      }),
      vscode.workspace.onDidOpenTextDocument(event => {
        const uri = event.uri.toString()

        if (isVueFile(uri)) this.store.get(uri)
      })
    )
  }

  public async getVueDocument(uri: string) {
    return this.store.get(uri)
  }

  public async getVirtualDocument(uri: string) {
    try {
      const { selector, uri: container } = parseVirtualFileUri(uri)!

      return (
        (await this.store.get(container))?.getBlockDocument(selector) || null
      )
    } catch {
      return null
    }
  }

  public onDidChangeTextDocument(fn: (e: { uri: vscode.Uri }) => any) {
    return this.emitter.event(fn)
  }
}
