import { injectable } from 'inversify'
import vscode, { Disposable } from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class TriggerCompletionService
  extends Installable
  implements vscode.CompletionItemProvider
{
  public install(): Disposable {
    super.install()

    return vscode.languages.registerCompletionItemProvider(
      { language: 'vue' },
      this,
      ...[':', '^'],
    )
  }

  async provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    context: vscode.CompletionContext,
  ): Promise<vscode.CompletionItem[]> {
    if (context.triggerCharacter == null) return []
    // TODO: check if at directive node
    return await vscode.commands.executeCommand(
      'vscode.executeCompletionItemProvider',
      document.uri,
      position,
    )
  }
}
