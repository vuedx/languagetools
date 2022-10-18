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
import {
  CompletionItem,
  CompletionList,
  Hover,
  TextEdit,
} from 'vscode-languageserver-types'
import { URI, uriToFsPath } from 'vscode-uri'
import { FileSystemProvider } from '../FileSystemProvider'
import { VueProjectService } from '../VueProjectService'
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
        hideAutoCompleteProposals: false,
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
  private isHtmlMode: boolean = false

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
            provideTags: () => (this.isHtmlMode ? html.provideTags() : []),
            provideAttributes: (tag) => {
              if (!this.isHtmlMode || /^[A-Z]/.test(tag)) {
                return template.provideAttributes(tag)
              }

              return [
                ...template.provideAttributes(tag),
                ...html.provideAttributes(tag),
              ]
            },
            provideValues: (tag, attribute) => {
              if (!this.isHtmlMode || /^[A-Z]/.test(tag)) {
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
    this.isHtmlMode = true
    try {
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
    } finally {
      this.isHtmlMode = false
    }
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
  constructor(
    private readonly projects: VueProjectService,
    fs: FileSystemProvider,
    supportMarkdown: boolean = true,
  ) {
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

  public async complete(
    document: TextDocument,
    position: Position,
  ): Promise<CompletionList> {
    const result = await super.complete(document, position)

    const { script, style } = this.projects.getProject(
      uriToFsPath(URI.parse(document.uri, true), true),
    ).config.preferences

    const end = document.offsetAt(position)
    let start = document.getText().slice(0, end).lastIndexOf('<')
    if (start === -1) start = end

    const textEdit: TextEdit = {
      range: { start: position, end: position },
      newText: '',
    }

    result.items = result.items.flatMap((item) => {
      if (item.kind === 10) {
        const offset = end - start
        switch (item.label) {
          case 'script': {
            const items: CompletionItem[] = []

            if (script.mode === 'setup') {
              items.push({
                ...item,
                filterText: '<script'.slice(offset),
                insertText: undefined,
                insertTextFormat: 2,
                textEdit: {
                  ...textEdit,
                  newText: '<script setup lang="ts">\n$0\n</script>'.slice(
                    offset,
                  ),
                },
                preselect: script.mode === 'setup',
                label: 'script (setup + ts)',
                detail: '<script setup lang="ts"></script>',
              })

              items.push({
                ...item,
                filterText: '<script'.slice(offset),
                insertText: undefined,
                insertTextFormat: 2,
                textEdit: {
                  ...textEdit,
                  newText: '<script setup>\n$0\n</script>'.slice(offset),
                },
                label: 'script (setup)',
                detail: '<script setup></script>',
              })
            }

            items.push({
              ...item,
              filterText: '<script'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: '<script lang="ts">\n$0\n</script>'.slice(offset),
              },
              preselect: script.mode === 'normal',
              label: 'script (ts)',
              detail: '<script lang="ts"></script>',
            })

            items.push({
              ...item,
              filterText: '<script'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: '<script>\n$0\n</script>'.slice(offset),
              },
              label: 'script',
              detail: '<script></script>',
            })

            return items
          }

          case 'style': {
            const items: CompletionItem[] = []
            const lang =
              style.language === 'css' ? '' : ` lang="${style.language}"`

            items.push({
              ...item,
              preselect: true,
              filterText: '<style'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: `<style${lang} scoped>\n$0\n</style>`.slice(offset),
              },
              label: 'style (scoped)',
              detail: `<style${lang} scoped></style>`,
            })

            items.push({
              ...item,
              filterText: '<style'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: `<style${lang} module>\n$0\n</style>`.slice(offset),
              },
              label: 'style (module)',
              detail: `<style${lang} module></style>`,
            })

            items.push({
              ...item,
              filterText: '<style'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: `<style${lang}>\n$0\n</style>`.slice(offset),
              },
              label: 'style',
              detail: `<style${lang}></style>`,
            })

            return items
          }

          case 'template': {
            const items: CompletionItem[] = []

            items.push({
              ...item,
              filterText: '<template'.slice(offset),
              insertText: undefined,
              insertTextFormat: 2,
              textEdit: {
                ...textEdit,
                newText: '<template>\n  $0\n</template>'.slice(offset),
              },
              label: 'template',
              detail: '<template></template>',
            })

            return items
          }
        }
      }

      return item
    })

    return result
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
