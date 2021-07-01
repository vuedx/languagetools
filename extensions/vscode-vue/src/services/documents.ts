import vscode from 'vscode'
import { injectable } from 'inversify'

import { Installable } from '../utils/installable'

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(this.emitter)
  }

  public onDidChangeTextDocument(fn: (e: { uri: vscode.Uri }) => any): any {
    return this.emitter.event(fn)
  }
}
