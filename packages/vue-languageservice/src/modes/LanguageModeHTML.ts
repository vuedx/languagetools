import { createVersionedCache } from '@vuedx/shared'
import {
  ClientCapabilities,
  DocumentContext,
  getLanguageService,
  HTMLDocument,
  LanguageService,
  newHTMLDataProvider,
} from 'vscode-html-languageservice'
import { Position, TextDocument } from 'vscode-languageserver-textdocument'
import { CompletionList, Hover } from 'vscode-languageserver-types'
import { FileSystemProvider } from '../FileSystemProvider'
import { SFC_BLOCKS } from './languageFacts/vue'
import { VUE_HTML_EXTENSIONS } from './languageFacts/vue-html'
import { LanguageMode } from './LanguageMode'

const markdown: ClientCapabilities = {
  textDocument: {
    completion: {
      completionItem: { documentationFormat: ['markdown', 'plaintext'] },
    },
    hover: {
      contentFormat: ['markdown', 'plaintext'],
    },
  },
}
const plaintext: ClientCapabilities = {
  textDocument: {
    completion: {
      completionItem: { documentationFormat: ['plaintext'] },
    },
    hover: {
      contentFormat: ['plaintext'],
    },
  },
}

class BaseLanguageMode implements LanguageMode {
  constructor(
    public readonly languageId: string,
    protected readonly service: LanguageService,
  ) {}

  private readonly documents = createVersionedCache<TextDocument, HTMLDocument>(
    (document) => document.version,
  )

  protected getHtmlDocument(document: TextDocument): HTMLDocument {
    return this.documents.resolve(document, (document) =>
      this.service.parseHTMLDocument(document),
    )
  }

  protected readonly context: DocumentContext = {
    resolveReference: (_ref, _base) => {
      return undefined // todo: implement
    },
  }

  public async complete(
    document: TextDocument,
    position: Position,
  ): Promise<CompletionList> {
    const result = await this.service.doComplete2(
      document,
      position,
      this.getHtmlDocument(document),
      this.context,
      {
        attributeDefaultValue: 'doublequotes',
        hideAutoCompleteProposals: true,
      },
    )

    return result
  }

  public async hover(
    document: TextDocument,
    position: Position,
  ): Promise<Hover | null> {
    return this.service.doHover(
      document,
      position,
      this.getHtmlDocument(document),
    )
  }

  public dispose(): void {}
}

export class LanguageModeVueHTML extends BaseLanguageMode {
  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    super(
      'vue-html',
      getLanguageService({
        useDefaultDataProvider: true,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [
          newHTMLDataProvider('vue-html', VUE_HTML_EXTENSIONS),
        ],
        fileSystemProvider: fs as any,
      }),
    )
  }

  public async complete(
    document: TextDocument,
    position: Position,
  ): Promise<CompletionList> {
    const html = this.getHtmlDocument(document)
    const node = html.findNodeAt(document.offsetAt(position))
    const isComponent = node.tag != null && /[A-Z]/.test(node.tag)
    const result = await super.complete(document, position)
    if (isComponent) {
      result.items = result.items.filter((item) => item.label.startsWith('v-'))
    }

    return result
  }
}

export class LanguageModeVue extends BaseLanguageMode {
  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    super(
      'vue',
      getLanguageService({
        useDefaultDataProvider: false,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [newHTMLDataProvider('vue', SFC_BLOCKS)],
        fileSystemProvider: fs as any,
      }),
    )
  }
}
