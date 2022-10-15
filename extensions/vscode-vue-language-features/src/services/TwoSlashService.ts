import { injectable } from 'inversify'
import vscode, { Disposable, InlayHint, InlayHintsProvider } from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class TwoSlashService
  extends Installable
  implements InlayHintsProvider<InlayHint>
{
  public install(): Disposable {
    super.install()

    return vscode.languages.registerInlayHintsProvider(
      { language: 'vue' },
      this,
    )
  }

  async provideInlayHints(
    document: vscode.TextDocument,
    range: vscode.Range,
    token: vscode.CancellationToken,
  ): Promise<InlayHint[]> {
    const source = document.getText(range)
    const matches = source.matchAll(/^\s*(\/\/|<!--|\/\*)\s*\^\?/gm)

    const offset = document.offsetAt(range.start)
    const file =
      document.uri.scheme === 'file'
        ? document.uri.fsPath
        : `^/${document.uri.scheme}/${
            document.uri.authority ?? 'ts-nul-authority'
          }/${document.uri.path.replace(/^\//, '')}`
    const hints: InlayHint[] = []
    for (const match of matches) {
      if (match.index == null) continue
      if (match[0] == null) continue

      if (token.isCancellationRequested) return []

      const end = match.index + match[0].length - 1
      const position = document.positionAt(offset + end)
      const inspectionPosition = new vscode.Position(
        position.line - 1,
        position.character,
      )
      const hint: any = await vscode.commands.executeCommand(
        'typescript.tsserverRequest',
        'quickinfo',
        {
          _: '%%%',
          file,
          line: inspectionPosition.line + 1,
          offset: inspectionPosition.character,
        },
      )

      if (hint == null || hint.body == null) continue
      let label: string = hint.body.displayString
        .replace(/\\n/g, ' ')
        .replace(/\/n/g, ' ')
        .replace(/ {2}/g, ' ')
        // eslint-disable-next-line no-control-regex
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      if (label.length > 120) {
        label = `${label.slice(0, 119)}...`
      }

      hints.push({
        kind: 0,
        position: new vscode.Position(position.line, position.character + 1),
        label,
        paddingLeft: true,
      })
    }

    return hints
  }
}
