import {
  RenderFunctionTextDocument,
  VirtualTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import {
  CancellationToken,
  commands,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Disposable,
  languages,
  Position,
  TextDocument,
  Uri,
} from 'vscode'
import { Installable } from '../utils/installable'
import { DocumentService } from './documents'

@injectable()
export class TemplateLanguageProxy
  extends Installable
  implements CompletionItemProvider {
  constructor(private readonly documents: DocumentService) {
    super()
  }

  private readonly selector = { language: 'vue' }
  private readonly triggerCharacters = ['<', ' ', ':', '@']

  public install(): Disposable {
    return Disposable.from(
      languages.registerCompletionItemProvider(
        this.selector,
        this,
        ...this.triggerCharacters,
      ),
    )
  }

  async provideCompletionItems(
    container: TextDocument,
    position: Position,
    _: CancellationToken,
    context: CompletionContext,
  ): Promise<
    null | undefined | CompletionItem[] | CompletionList<CompletionItem>
  > {
    const document = await this.getDocumentAt(container, position)

    if (this.isSupportDocumentType(document)) {
      // TODO: Check tag ang skip prop completion for components.

      const result = await commands.executeCommand<
        CompletionItem[] | CompletionList<CompletionItem>
      >(
        'vscode.executeCompletionItemProvider',
        this.getUri(document),
        position,
        context.triggerCharacter,
      )

      // TODO: Handle v-bind, v-on and their shorthands @/:
      // TODO: Skip prop completion for components
      const items = Array.isArray(result) ? result : result?.items ?? []

      items.forEach((item) => {
        console.log(item)
        if (item.kind === CompletionItemKind.Value) {
          if (item.label.startsWith('aria-')) {
            item.sortText = '9'
          } else if (/(type|class|style)/.test(item.label)) {
            item.sortText = '0'
          } else if (item.label.startsWith('on')) {
            item.label = '@' + item.label.substr(2)
            if (typeof item.insertText === 'string') {
              item.insertText = '@' + item.insertText.substr(2)
            } else if (item.insertText != null) {
              item.insertText.value = '@' + item.insertText.value.substr(2)
            }
          }
        }
      })

      return result
    }

    return null
  }

  private readonly languages = new Set(['vue-html'])

  private isSupportDocumentType(
    document: VirtualTextDocument | undefined,
  ): document is RenderFunctionTextDocument {
    const result = document != null && this.languages.has(document.languageId)

    console.log(`Is ${document?.languageId ?? 'null'} supported?`, result)

    return result
  }

  private async getDocumentAt(
    container: TextDocument,
    position: Position,
  ): Promise<VirtualTextDocument | undefined> {
    const document = await this.documents.asVueDocument(container)

    return document.documentAt(position)
  }

  private getUri(document: VirtualTextDocument): Uri {
    return Uri.parse(document.uri)
  }
}
