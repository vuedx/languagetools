import { first, isNotNull, parseFileName } from '@vuedx/shared'
import { TextSpan } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import vscode, { TextEditor } from 'vscode'
import { PluginCommunicationService } from '../services/PluginCommunicationService'
import { Installable } from '../utils/installable'
import { getVirtualFileNameFromUri } from '../utils/uri'

@injectable()
export class VueVirtualDocumentProvider
  extends Installable
  implements vscode.TextDocumentContentProvider
{
  constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,
  ) {
    super()
  }

  private readonly openVueFiles = new Map<string, Set<string>>()
  private readonly decoration = vscode.window.createTextEditorDecorationType({
    outline: 'solid red 1px',
  })

  private editors: readonly TextEditor[] = []

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      vscode.workspace.registerTextDocumentContentProvider('vue', this),
      vscode.workspace.onDidChangeTextDocument(async ({ document }) => {
        if (document.languageId === 'vue') {
          await delay(100)
          this.openVueFiles.get(document.fileName)?.forEach((uri) => {
            this.onDidChangeEmitter.fire(vscode.Uri.parse(uri))
          })
        }
      }),
      vscode.workspace.onDidOpenTextDocument(({ uri }) => {
        if (uri.scheme === 'vue') {
          const fileName = getVirtualFileNameFromUri(uri)
          const parsed = parseFileName(fileName)
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
          const parsed = parseFileName(fileName)
          const openFiles = this.openVueFiles.get(parsed.fileName)
          if (openFiles == null) return
          openFiles.delete(uri.toString())
          if (openFiles.size === 0) this.openVueFiles.delete(parsed.fileName)
        }
      }),
      vscode.window.onDidChangeActiveTextEditor(() => {
        this.resetAllDecorations()
      }),
      vscode.window.onDidChangeVisibleTextEditors((editors) => {
        this.editors = editors
      }),
      vscode.window.onDidChangeTextEditorSelection(
        async ({ textEditor, selections }) => {
          if (textEditor !== vscode.window.activeTextEditor) return
          if (textEditor.document.languageId === 'vue') {
            const fileName = textEditor.document.fileName
            const editor = this.editors.find(
              (editor) =>
                editor.document.uri.scheme === 'vue' &&
                editor.document.fileName.startsWith(fileName),
            )

            if (editor == null) return
            const textSpans = await Promise.all(
              selections.map(
                async (selection) =>
                  await this.plugin.first(async (connection) => {
                    const start = textEditor.document.offsetAt(selection.start)
                    const end = textEditor.document.offsetAt(selection.end)

                    return await connection.findGeneratedTextSpan(fileName, {
                      start: Math.min(start, end),
                      length: Math.abs(end - start),
                    })
                  }),
              ),
            )
            this.setDecorations(textSpans, editor)
          } else if (textEditor.document.uri.scheme === 'vue') {
            const fileName = textEditor.document.fileName.replace(
              /\.[tj]sx$/,
              '',
            )
            const editor = this.editors.find((editor) =>
              editor.document.fileName.startsWith(fileName),
            )

            if (editor == null) return
            const textSpans = await Promise.all(
              selections.map(
                async (selection) =>
                  await this.plugin.first(async (connection) => {
                    const start = textEditor.document.offsetAt(selection.start)
                    const end = textEditor.document.offsetAt(selection.end)

                    return await connection.findOriginalTextSpan(fileName, {
                      start: Math.min(start, end),
                      length: Math.abs(end - start),
                    })
                  }),
              ),
            )
            this.setDecorations(textSpans, editor)
          }
        },
      ),
    )
  }

  private readonly onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>()
  public onDidChange = this.onDidChangeEmitter.event

  private resetAllDecorations(): void {
    this.editors.forEach((editor) => {
      editor.setDecorations(this.decoration, [])
    })
  }

  private setDecorations(
    textSpans: Array<TextSpan | null | undefined>,
    editor: vscode.TextEditor,
  ): void {
    const ranges = textSpans
      .filter(isNotNull)
      .map(
        (range) =>
          new vscode.Range(
            editor.document.positionAt(range.start),
            editor.document.positionAt(range.start + range.length),
          ),
      )

    editor.setDecorations(this.decoration, [])
    editor.setDecorations(this.decoration, ranges)
    if (ranges.length > 0) {
      editor.revealRange(
        first(ranges),
        vscode.TextEditorRevealType.InCenterIfOutsideViewport,
      )
    }
  }

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
