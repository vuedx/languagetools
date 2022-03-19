import type { TextDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type {
  CompletionList,
  HTMLDocument,
  LanguageService as VSCodeHtmlLanguageService,
  Position,
} from 'vscode-html-languageservice'
import {
  newHTMLDataProvider,
  getLanguageService,
} from 'vscode-html-languageservice'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { data } from './languageFacts/vue'

abstract class HtmlLanguageService implements LanguageService {
  protected readonly logger = LoggerService.getLogger('HTML')

  private readonly documents = new CacheService<HTMLDocument>((fileName) =>
    this.fs.getVersion(fileName),
  )

  protected constructor(
    protected readonly fs: FilesystemService,
    protected readonly service: VSCodeHtmlLanguageService,
  ) {}

  getDiagnostics(_fileName: string): LanguageService.Diagnostic[] {
    return []
  }

  getDefinitionAt(
    _fileName: string,
    _position: LanguageService.Position,
  ): LanguageService.Definition[] {
    return []
  }

  getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    return this.service.doHover(
      this.getTextDocument(fileName),
      position,
      this.getHTMLDocument(fileName),
    )
  }

  public getCompletionsAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.CompletionList {
    return this.service.doComplete(
      this.getTextDocument(fileName),
      position,
      this.getHTMLDocument(fileName),
      {
        attributeDefaultValue: 'doublequotes',
        hideAutoCompleteProposals: false,
      },
    )
  }

  protected getTextDocument(fileName: string): TextDocument {
    const doc = this.fs.getSourceFile(fileName)

    if (doc == null) throw new Error(`File not found: ${fileName}`)

    return doc
  }

  protected getHTMLDocument(fileName: string): HTMLDocument {
    return this.documents.withCache(fileName, (document) => {
      if (document != null) return document

      return this.service.parseHTMLDocument(this.getTextDocument(fileName))
    })
  }

  public dispose(): void {
    // noop
  }
}

@injectable()
export class VueHtmlLanguageService extends HtmlLanguageService {
  public constructor(
    @inject(FilesystemService)
    fs: FilesystemService,
  ) {
    super(fs, getLanguageService({ useDefaultDataProvider: true }))
  }

  public readonly supportedLanguages = ['vue-html']

  public getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    this.logger.debug(
      `QuickInfo at ${fileName}:${position.line}:${position.character}`,
    )

    const text = this.getTextDocument(fileName)
    const html = this.getHTMLDocument(fileName)
    const node = html.findNodeAt(text.offsetAt(position))

    // <template> block is case-sensitive and
    // capital letters are only used in component
    // names.
    if (
      node.tag != null &&
      /[A-Z]/.test(node.tag) &&
      this.fs.getLanguageId(fileName) === 'vue-html'
    ) {
      this.logger.debug(`Skipping component node: ${node.tag}`)
      return null
    }

    return this.service.doHover(text, position, html)
  }
}

@injectable()
export class VueSfcLanguageService extends HtmlLanguageService {
  public constructor(
    @inject(FilesystemService)
    fs: FilesystemService,
  ) {
    super(
      fs,
      getLanguageService({
        useDefaultDataProvider: false,
        customDataProviders: [newHTMLDataProvider('vue', data)],
      }),
    )
  }

  public readonly supportedLanguages = ['vue']

  public getCompletionsAtPosition(
    fileName: string,
    position: Position,
  ): CompletionList {
    const result = super.getCompletionsAtPosition(fileName, position)
    const file = this.fs.getVueFile(fileName)
    if (file != null) {
      // TODO: Hide template and script is not valid.
    }

    return result
  }
}
