import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import {
  CancellationToken,
  commands,
  CompletionContext,
  CompletionItem,
  CompletionItemProvider,
  CompletionList,
  Disposable,
  DocumentSelector,
  languages,
  Position,
  TextDocument,
  Uri,
} from 'vscode'
import { Installable } from '../utils/installable'

@injectable()
export class StyleLanguageProxy
  extends Installable
  implements CompletionItemProvider {
  private readonly selector: DocumentSelector = {
    language: 'vue',
    scheme: 'file',
  }

  public install(): Disposable {
    return Disposable.from(
      languages.registerCompletionItemProvider(this.selector, this),
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
      const result = await commands.executeCommand<CompletionItem[]>(
        'vscode.executeCompletionItemProvider',
        this.getUri(document),
        position,
        context.triggerCharacter,
      )

      return result
    }

    return null
  }

  private readonly languages = new Set([
    'css',
    'scss',
    'sass',
    'less',
    'stylus',
  ])

  private isSupportDocumentType(
    document: VueBlockDocument | null,
  ): document is VueBlockDocument {
    if (document == null) return false

    return this.languages.has(document.source.languageId)
  }

  private async getDocumentAt(
    _container: TextDocument,
    _position: Position,
  ): Promise<VueBlockDocument | null> {
    return null
  }

  private getUri(document: VueBlockDocument): Uri {
    return Uri.parse(document.source.uri)
  }
}
