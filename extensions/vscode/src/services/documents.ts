// @ts-ignore
import vscode from 'vscode';
import { injectable } from 'inversify';
import { AsyncDocumentStore, isVueFile, parseVirtualFileName, VueTextDocument } from '@vuedx/vue-virtual-textdocument';
import { Installable } from '../utils/installable';

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>();
  private readonly store = new AsyncDocumentStore(async (uri) => {
    const text = await vscode.workspace.openTextDocument(vscode.Uri.parse(uri));
    const doc = VueTextDocument.create(uri, 'vue', text.version, text.getText());

    return doc;
  });

  public install() {
    super.install();

    return vscode.Disposable.from(
      this.store,
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (event) => {
        const uri = event.document.uri.toString();
        if (this.store.has(uri)) {
          const document = await this.store.get(uri);
          
        VueTextDocument.update(document!, event.contentChanges.slice(), event.document.version);

          document!.all().forEach((document) => {
            this.emitter.fire({ uri: vscode.Uri.parse(document.uri) });
          });
        }
      }),
      vscode.workspace.onDidOpenTextDocument((event) => {
        const uri = event.uri.toString();

        if (isVueFile(uri)) this.store.get(uri);
      })
    );
  }

  public async getVueDocument(uri: string) {
    return this.store.get(uri);
  }

  public async getVirtualDocument(uri: string) {
    try {
      const { selector, uri: container } = parseVirtualFileName(uri)!;
      const document = await this.store.get(container);

      return document?.getDocument(selector) || null;
    } catch {
      return null;
    }
  }

  public onDidChangeTextDocument(fn: (e: { uri: vscode.Uri }) => any) {
    return this.emitter.event(fn);
  }
}
