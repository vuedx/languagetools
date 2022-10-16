import { createVersionedCache } from '@vuedx/shared'
import {
  ClientCapabilities,
  DocumentContext,
  getDefaultHTMLDataProvider,
  getLanguageService,
  HTMLDocument,
  IAttributeData,
  IHTMLDataProvider,
  LanguageService,
  newHTMLDataProvider,
  Scanner,
  TokenType,
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
  private readonly template: IHTMLDataProvider

  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    const template = newHTMLDataProvider('vue-html', VUE_HTML_EXTENSIONS)
    const html = getDefaultHTMLDataProvider()

    super(
      'vue-html',
      getLanguageService({
        useDefaultDataProvider: false,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [
          {
            getId: () => 'vue-html',
            isApplicable: (languageId) =>
              languageId === 'vue-html' || languageId === 'html',
            provideTags: () => html.provideTags(),
            provideAttributes: (tag) => {
              if (/^[A-Z]/.test(tag)) {
                return template.provideAttributes(tag)
              }

              return [
                ...template.provideAttributes(tag),
                ...html.provideAttributes(tag),
              ]
            },
            provideValues: (tag, attribute) => {
              if (/^[A-Z]/.test(tag)) {
                return template.provideValues(tag, attribute)
              }

              return [
                ...template.provideValues(tag, attribute),
                ...html.provideValues(tag, attribute),
              ]
            },
          },
        ],
        fileSystemProvider: fs as any,
      }),
    )

    this.template = template
  }

  private readonly shorthands: Record<string, string> = {
    ':': 'v-bind',
    '@': 'v-on',
    '#': 'v-slot',
    '.': 'v-bind',
    '^': 'v-bind',
  }

  public async hover(
    document: TextDocument,
    position: Position,
  ): Promise<Hover | null> {
    const offset = document.offsetAt(position)
    const node = this.getHtmlDocument(document).findNodeAt(offset)
    const result =
      node.tag != null && /^[A-Z]/.test(node.tag)
        ? null
        : await super.hover(document, position)
    if (result != null) return result
    const scanner = this.findToken(document, offset, TokenType.AttributeName)
    if (scanner == null) return null

    const attribute = scanner.getTokenText()
    const directive =
      this.shorthands[attribute.charAt(0)] ?? attribute.replace(/:.*$/, '')
    if (!directive.startsWith('v-')) return null

    const length = attribute.startsWith('v-') ? directive.length : 1
    if (offset > scanner.getTokenOffset() + length + 1) return null

    const info = this.template
      .provideAttributes('Component')
      .filter((attribute) => attribute.name === directive)[0]
    if (info == null) return null

    const contents = generateDocumentation(info)
    if (contents == null) return null

    const range = {
      start: document.positionAt(scanner.getTokenOffset()),
      end: document.positionAt(scanner.getTokenOffset() + length),
    }

    return { range, contents }
  }

  private findToken(
    document: TextDocument,
    offset: number,
    type: TokenType,
  ): Scanner | null {
    const node = this.getHtmlDocument(document).findNodeAt(offset)
    if (node.tag == null) return null
    const scanner = this.service.createScanner(document.getText(), node.start)
    let token = scanner.scan()
    while (token !== TokenType.EOS && scanner.getTokenEnd() < offset) {
      token = scanner.scan()
    }
    if (token !== type) return null
    return scanner
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

function generateDocumentation(
  item: IAttributeData,
): { kind: 'markdown'; value: string } | undefined {
  const result = {
    kind: 'markdown' as const,
    value: '',
  }
  if (item.description != null) {
    result.value +=
      typeof item.description === 'string'
        ? item.description
        : item.description.value
  }
  if (item.references != null && item.references.length > 0) {
    if (result.value.length > 0) {
      result.value += '\n\n'
    }

    result.value += item.references
      .map(function (r) {
        return '['.concat(r.name, '](').concat(r.url, ')')
      })
      .join(' | ')
  }
  if (result.value === '') return
  return result
}
