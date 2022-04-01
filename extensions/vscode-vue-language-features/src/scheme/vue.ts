import { isVueFile, parseFileName, VueVirtualFileName } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import vscode from 'vscode'
import { PluginCommunicationService } from '../services/PluginCommunicationService'
import { Installable } from '../utils/installable'
import { getVirtualFileNameFromUri } from '../utils/uri'

@injectable()
export class VueVirtualDocumentProvider
  extends Installable
  implements vscode.TextDocumentContentProvider {
  constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,
  ) {
    super()
  }

  private readonly openVueFiles = new Map<string, Set<string>>()

  public install(): vscode.Disposable {
    super.install()

    let selectionWatcher: vscode.Disposable | undefined
    let cancellationToken: vscode.CancellationTokenSource | undefined

    return vscode.Disposable.from(
      vscode.workspace.registerTextDocumentContentProvider('vue', this),
      vscode.workspace.onDidChangeTextDocument(({ document }) => {
        if (document.languageId === 'vue') {
          this.openVueFiles.get(document.fileName)?.forEach((uri) => {
            this.onDidChangeEmitter.fire(vscode.Uri.parse(uri))
          })
        }
      }),
      vscode.workspace.onDidOpenTextDocument(({ uri }) => {
        if (uri.scheme === 'vue') {
          const fileName = getVirtualFileNameFromUri(uri)
          const parsed = parseFileName(fileName) as VueVirtualFileName
          const openFiles = this.openVueFiles.get(parsed.fileName)
          if (openFiles == null) {
            this.openVueFiles.set(parsed.fileName, new Set([uri.toString()]))
          } else {
            openFiles.add(uri.toString())
          }
        }
      }),
      vscode.workspace.onDidCloseTextDocument(({ uri }) => {
        if (uri.scheme === 'vue') {
          const fileName = getVirtualFileNameFromUri(uri)
          const parsed = parseFileName(fileName) as VueVirtualFileName
          const openFiles = this.openVueFiles.get(parsed.fileName)
          if (openFiles == null) return
          openFiles.delete(uri.toString())
          if (openFiles.size === 0) this.openVueFiles.delete(parsed.fileName)
        }
      }),
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        selectionWatcher?.dispose()
        if (editor == null || !isVueFile(editor.document.fileName)) return
        const fileName = editor.document.fileName

        selectionWatcher = vscode.window.onDidChangeTextEditorSelection(
          async ({ textEditor, selections }) => {
            if (textEditor !== editor) return // ignore others
            if (selections.length !== 1) return
            if (
              !vscode.window.visibleTextEditors.some(
                (editor) =>
                  parseFileName(editor.document.fileName).fileName === fileName,
              )
            ) {
              return // No active virtual document
            }

            cancellationToken?.cancel()
            const current = new vscode.CancellationTokenSource()
            cancellationToken = current

            const start = textEditor.document.offsetAt(editor.selection.start)
            const end = textEditor.document.offsetAt(editor.selection.end)
            const result = await this.plugin.first(async (conneciton) => {
              return await conneciton.findGeneratedFileAndRange(
                fileName,
                start,
                end,
              )
            })

            // not found or cancelled
            if (result == null || current.token.isCancellationRequested) return

            const virtualEditor = vscode.window.visibleTextEditors.find(
              (editor) => editor.document.fileName === result.fileName,
            )

            if (virtualEditor == null) return // not active

            const range = new vscode.Range(
              virtualEditor.document.positionAt(result.start),
              virtualEditor.document.positionAt(result.end),
            )

            virtualEditor.options.cursorStyle =
              vscode.TextEditorCursorStyle.Underline
            virtualEditor.selection = new vscode.Selection(
              range.start,
              range.end,
            )
            virtualEditor.revealRange(
              range,
              vscode.TextEditorRevealType.Default,
            )
          },
        )
      }),
    )
  }

  private readonly onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>()
  public onDidChange = this.onDidChangeEmitter.event

  async provideTextDocumentContent(
    request: vscode.Uri,
  ): Promise<string | undefined> {
    const fileName = request.with({ scheme: 'file' }).fsPath

    await delay(100)

    return await this.plugin.first(
      async (connection) => await connection.getVirtualFileContents(fileName),
    )
  }
}

async function delay(duration: number): Promise<void> {
  return await new Promise((resolve) => setTimeout(resolve, duration))
}
