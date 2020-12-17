import { VirtualTextDocument } from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import {
  CancellationToken,
  commands,
  CompletionContext,
  CompletionItem,
  CompletionItemProvider,
  CompletionList,
  Disposable,
  languages,
  Position,
  Range,
  TextDocument,
  Uri,
} from 'vscode'
import { Installable } from '../utils/installable'
import { DocumentService } from './documents'

@injectable()
export class StyleLanguageProxy
  extends Installable
  implements CompletionItemProvider {
  constructor(private readonly documents: DocumentService) {
    super()
  }

  private readonly selector = { language: 'vue' }
  private readonly triggerCharacters = ['.']

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
    document: VirtualTextDocument | undefined,
  ): document is VirtualTextDocument {
    if (document == null) return false

    return this.languages.has(document.languageId)
  }

  private async getDocumentAt(
    container: TextDocument,
    position: Position,
  ): Promise<VirtualTextDocument | undefined> {
    const document = await this.documents.asVueDocument(container)

    return document.documentAt(position)
  }

  private async getStyleDocuments(
    container: TextDocument,
    range?: Range,
  ): Promise<VirtualTextDocument[]> {
    const document = await this.documents.asVueDocument(container)
    let styles = document.descriptor.styles
    if (range != null) {
      styles = styles.filter(({ loc: { start, end } }) =>
        range.contains(
          new Range(start.line, start.column, end.line, end.column),
        ),
      )
    }

    return styles.map((style) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getDocument(document.getBlockSelector(style)!),
    )
  }

  private getUri(document: VirtualTextDocument): Uri {
    return Uri.parse(document.uri)
  }
}
