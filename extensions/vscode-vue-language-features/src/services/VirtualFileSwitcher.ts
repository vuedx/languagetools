import {} from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import {
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  TextEditor,
  window,
} from 'vscode'
import { Installable } from '../utils/installable'

const displayNames = {
  _module: 'Module',
  _internal: 'Internal Module',
  _render: 'Render',
  template: 'Template',
  script: 'Script',
  scriptSetup: 'Setup Script',
  style: 'Style',
}

@injectable()
export class VirtualFileSwitcher extends Installable {
  private statusBar: StatusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Right,
  )

  public install(): Disposable {
    super.install()

    return Disposable.from(
      this.statusBar,
      window.onDidChangeVisibleTextEditors((editors): void => {
        const editor = editors.find((_editor) => false)

        void this.showStatusBar(editor)
      }),
    )
  }

  async showStatusBar(editor: TextEditor | undefined): Promise<void> {
    if (editor != null) {
      const result = null as any
      if (result != null) {
        const { uri, selector } = result // TODO: Use language service

        this.statusBar.tooltip = `Showing virtual file from "${editor.document.uri.fsPath}"`
        this.statusBar.text = `Virtual: ${
          displayNames[selector.type as keyof typeof displayNames] ??
          selector.type
        }`
        this.statusBar.command = {
          title: 'Open virtual file',
          command: 'vuedx.openVirtualFile',
          arguments: [uri, selector],
        }
        this.statusBar.show()
      } else {
        this.statusBar.hide()
      }
    } else {
      this.statusBar.hide()
    }
  }
}
