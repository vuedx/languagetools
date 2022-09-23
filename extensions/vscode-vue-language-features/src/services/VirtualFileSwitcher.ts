import {
  isProjectRuntimeFile,
  isVueFile,
  parseFileName,
  toFileName
} from '@vuedx/shared'
import { } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import {
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  TextEditor,
  Uri,
  window
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

  private _lastFile: string | null = null

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
    if (isProjectRuntimeFile(parsed.fileName) && this._lastFile != null) {
      this.statusBar.tooltip = `Showing virtual file from "${this._lastFile}"`
      this.statusBar.text = `$(file-submodule) Project Globals`
      this.statusBar.command = {
        title: 'Select virtual file',
        command: 'vuedx.selectVirtualFile',
        arguments: [Uri.file(this._lastFile)],
      }
      this.statusBar.show()
      return
    }

    if (!isVueFile(parsed.fileName)) return this.statusBar.hide()

    this._lastFile = parsed.fileName

    if (
      parsed.type === 'vue-tsx' ||
      parsed.type === 'vue-jsx' ||
      parsed.type === 'vue-descriptor' ||
      parsed.type === 'vue-template-ast'
    ) {
      const displayName =
        parsed.type === 'vue-tsx' || parsed.type === 'vue-jsx'
          ? 'Virtual Module'
          : parsed.type === 'vue-descriptor'
          ? 'SFC Descriptor'
          : 'Template AST'
      this.statusBar.tooltip = `Showing virtual file from "${editor.document.fileName}"`
      this.statusBar.text = `$(file-submodule) ${displayName}`
      this.statusBar.command = {
        title: 'Select virtual file',
        command: 'vuedx.selectVirtualFile',
        arguments: [editor.document.uri],
      }
    } else {
      this.statusBar.tooltip = `Showing virtual file at cursor`
      this.statusBar.text = `$(file-submodule)`
      this.statusBar.command = {
        title: 'Open virtual file',
        command: 'vuedx.openVirtualFile',
        arguments: [
          getVirtualFileUri(
            toFileName({ type: 'vue-tsx', fileName: parsed.fileName }),
          ),
        ],
      }
    }
    this.statusBar.show()
  }
}
