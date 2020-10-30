import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '../utils/installable'
import { DocumentService } from '../services/documents'
import {
  Selector,
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'

@injectable()
export class OpenVirtualFileCommand extends Installable {
  public constructor(private readonly documents: DocumentService) {
    super()
  }

  public install() {
    super.install()

    return vscode.commands.registerTextEditorCommand(
      'vue.openVirtualFile',
      this.onExecute.bind(this),
    )
  }

  private async onExecute(
    editor: vscode.TextEditor,
    _: vscode.TextEditorEdit,
    activeDocumentUri?: string,
    activeSelector?: Selector,
  ) {
    const uri = activeDocumentUri ?? editor.document.uri.toString()
    if (!/\.vue$/.test(uri)) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.',
      )
    }

    const container = await this.documents.getVueDocument(uri)
    if (container == null) {
      return vscode.window.showInformationMessage(
        'There is no active Vue document.',
      )
    }

    if (activeDocumentUri != null) {
      const pick = await vscode.window.showQuickPick(
        onlyNonNull([
          {
            label: 'Module',
            value: '_module',
            description:
              'Virtual module .vue file resolved to when imported from any .ts/.js/.vue file',
            picked: activeSelector?.type === '_module',
          },
          {
            label: 'Internal Module',
            value: '_internal',
            description:
              'Virtual module .vue file resolved to when imported from render function virtual file',
            picked: activeSelector?.type === '_internal',
          },
          container.descriptor.template
            ? {
                label: 'Render',
                value: '_render',
                description:
                  'Generated TSX render function from <template> block',
                picked: activeSelector?.type === '_render',
              }
            : null,
          container.descriptor.template
            ? {
                label: 'Template',
                value: 'template',
                description: 'Padded <template> block',
                picked: activeSelector?.type === 'template',
              }
            : null,
          container.descriptor.script
            ? {
                label: 'Script',
                value: 'script',
                description: 'Padded <script> block',
                picked: activeSelector?.type === 'script',
              }
            : null,
          container.descriptor.scriptSetup
            ? {
                label: 'Setup Script',
                value: 'scriptSetup',
                description: 'Padded <script setup> block',
                picked: activeSelector?.type === 'scriptSetup',
              }
            : null,
        ]),
        {},
      )

      const selector = pick?.value ?? '_module'

      await this.showDocument(
        container.getDocument(selector) ?? container.getDocument('_module'),
        editor,
      )
    } else {
      await this.showDocument(
        this.findActiveVirtualDocument(editor, container),
        editor,
      )
    }
  }

  private findActiveVirtualDocument(
    editor: vscode.TextEditor,
    container: VueTextDocument,
  ): VirtualTextDocument {
    const position = editor.selection.start
    const block = container.blockAt(position)
    const document =
      block?.type === 'template'
        ? container.getDocument('_render')
        : container.documentAt(position)

    return document ?? container.getDocument('_module')
  }

  private async showDocument(
    document: VirtualTextDocument,
    editor: vscode.TextEditor,
    viewColumn = vscode.ViewColumn.Beside,
  ): Promise<void> {
    const virtualUri = vscode.Uri.parse(document.uri)
    const ref = await vscode.workspace.openTextDocument(virtualUri)

    vscode.window.showTextDocument(ref, {
      viewColumn: viewColumn,
      preserveFocus: true,
      preview: true,
      selection: editor.selection,
    })
  }
}

function onlyNonNull<T>(items: (T | null | undefined)[]): T[] {
  return items.filter((item) => item != null) as T[]
}
