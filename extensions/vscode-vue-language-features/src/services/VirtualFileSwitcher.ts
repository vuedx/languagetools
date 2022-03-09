import { isVueFile, parseFileName, toFileName, ucfirst } from '@vuedx/shared'
import {} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import {
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  TextEditor,
  window,
} from 'vscode'
import { Installable } from '../utils/installable'
import { getVirtualFileUri } from '../utils/uri'
import { PluginCommunicationService } from './PluginCommunicationService'

@injectable()
export class VirtualFileSwitcher extends Installable {
  private statusBar: StatusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Right,
  )

  constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,
  ) {
    super()
  }

  public install(): Disposable {
    super.install()

    void this.showStatusBar(window.activeTextEditor)

    return Disposable.from(
      this.statusBar,
      window.onDidChangeActiveTextEditor(async (editor) => {
        await this.showStatusBar(editor)
      }),
      this.plugin.onChange(() => {
        void this.showStatusBar(window.activeTextEditor)
      }),
    )
  }

  async showStatusBar(editor: TextEditor | undefined): Promise<void> {
    if (
      this.plugin.connections.length === 0 ||
      editor == null ||
      (editor.document.languageId !== 'vue' &&
        editor.document.uri.scheme !== 'vue')
    ) {
      return this.statusBar.hide()
    }

    const parsed = parseFileName(editor.document.fileName)
    if (!isVueFile(parsed.fileName)) return this.statusBar.hide()

    if (parsed.type !== 'virtual') {
      this.statusBar.tooltip = `Showing virtual file at cursor`
      this.statusBar.text = `$(files)`
      this.statusBar.command = {
        title: 'Open virtual file',
        command: 'vuedx.openVirtualFile',
        arguments: [
          getVirtualFileUri(
            toFileName({ type: 'vue-ts', fileName: parsed.fileName }),
          ),
        ],
      }
    } else {
      this.statusBar.tooltip = `Showing virtual file from "${editor.document.fileName}"`
      this.statusBar.text = `$(files) Virtual ${ucfirst(parsed.blockType)}`
      this.statusBar.command = {
        title: 'Select virtual file',
        command: 'vuedx.selectVirtualFile',
        arguments: [editor.document.uri],
      }
    }
    this.statusBar.show()
  }
}
