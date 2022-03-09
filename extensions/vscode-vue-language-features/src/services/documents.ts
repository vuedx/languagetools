import {
  transformers,
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import * as FS from 'fs'
import { injectable } from 'inversify'
import vscode from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()
  private readonly documents = new Map<string, VueSFCDocument>()

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (event) => {
        if (event.document.languageId === 'vue') {
          const uri = event.document.uri
          const fileName = uri.toString()

          const doc = this.getVueDocument(fileName)
          if (doc != null) {
            doc.update(
              [{ text: event.document.getText() }],
              event.document.version,
            )
            doc.getActiveTSDocIDs().forEach((id) =>
              this.emitter.fire({
                uri: this.getVirtualFileUri(id),
              }),
            )
          }
        }
      }),
      vscode.workspace.onDidOpenTextDocument(async (text) => {
        if (text.languageId === 'vue') {
          const uri = text.uri
          const fileName = uri.fsPath
          const document = VueSFCDocument.create(fileName, text.getText(), {
            transformers,
          })

          this.documents.set(fileName, document)
        }
      }),
    )
  }

  public getVirtualFileUri(fileName: string): vscode.Uri {
    return vscode.Uri.file(fileName).with({ scheme: 'vue' })
  }

  public getVueDocument(fileName: string): VueSFCDocument | null {
    return this.documents.get(fileName) ?? null
  }

  public async ensureDocument(fileName: string): Promise<void> {
    if (this.documents.has(fileName)) return

    try {
      const text = await FS.promises.readFile(fileName, 'utf-8')
      const document = VueSFCDocument.create(fileName, text, {
        transformers,
      })

      this.documents.set(fileName, document)
    } catch {}
  }

  public removeVirtualFileQuery(fileName: string): string {
    const index = fileName.indexOf('?vue')
    if (index < 0) return fileName
    return fileName.substring(0, index)
  }

  public async getVirtualDocument(
    fileName: string,
  ): Promise<VueBlockDocument | null> {
    return (
      this.getVueDocument(this.removeVirtualFileQuery(fileName))?.getDocById(
        fileName,
      ) ?? null
    )
  }

  public onDidChangeTextDocument(
    fn: (e: { uri: vscode.Uri }) => any,
  ): vscode.Disposable {
    return this.emitter.event(fn)
  }
}
