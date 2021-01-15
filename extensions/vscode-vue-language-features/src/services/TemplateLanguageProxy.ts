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
  CompletionItemProvider,
  CompletionList,
  CompletionTriggerKind,
  Disposable,
  languages,
  Position,
  TextDocument,
  Uri,
} from 'vscode'
import { Installable } from '../utils/installable'
import { DocumentService } from './documents'

/**
 * Triggers completions when ":" is typed.
 */
@injectable()
export class TemplateLanguageProxy
  extends Installable
  implements CompletionItemProvider {
  constructor(private readonly documents: DocumentService) {
    super()
  }

  private readonly selector = { language: 'vue' }
  private readonly triggerCharacters = [':', '/']

  public install(): Disposable {
    return Disposable.from(
      languages.registerCompletionItemProvider(
        this.selector,
        this,
        ...this.triggerCharacters,
      ),
    )
  }

  private lastQuery?: {
    container: TextDocument
    position: Position
  }

  async provideCompletionItems(
    container: TextDocument,
    position: Position,
    _: CancellationToken,
    context: CompletionContext,
  ): Promise<
    null | undefined | CompletionItem[] | CompletionList<CompletionItem>
  > {
    const lastQuery = this.lastQuery
    this.lastQuery = { container, position }
    // Ignore non-character triggers as they could cause infinite loop.
    if (context.triggerKind !== CompletionTriggerKind.TriggerCharacter) return
    // Only provide completions for what is not auto-triggered for TS Plugin
    if ([':', '/'].includes(context.triggerCharacter ?? '')) return
    // Character trigger cannot happen twice at same position
    if (
      lastQuery?.container.uri.toString() === container.uri.toString() &&
      lastQuery.position.isEqual(position)
    ) {
      return
    }

    const document = await this.getDocumentAt(container, position)
    if (this.isSupportDocumentType(document)) {
      return await commands.executeCommand<
        CompletionItem[] | CompletionList<CompletionItem>
      >('vscode.executeCompletionItemProvider', container.uri, position)
    }
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
