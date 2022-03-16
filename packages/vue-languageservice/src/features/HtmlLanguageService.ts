import type { TextDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import {
  getLanguageService,
  HTMLDocument,
  LanguageService as VSCodeHtmlLanguageService,
} from 'vscode-html-languageservice'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'

@injectable()
export class HtmlLanguageService implements LanguageService {
  private readonly logger = LoggerService.getLogger('HTML')
  private readonly sfc: VSCodeHtmlLanguageService
  private readonly template: VSCodeHtmlLanguageService

  private readonly documents = new CacheService<HTMLDocument>((fileName) =>
    this.fs.getVersion(fileName),
  )

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {
    this.sfc = getLanguageService({ useDefaultDataProvider: false })
    this.template = getLanguageService({ useDefaultDataProvider: true })
  }

  private getTextDocument(fileName: string): TextDocument {
    const doc = this.fs.getSourceFile(fileName)

    if (doc == null) throw new Error(`File not found: ${fileName}`)

    return doc
  }

  private getHTMLDocument(fileName: string): HTMLDocument {
    return this.documents.withCache(fileName, (document) => {
      if (document != null) return document

      return this.getLanguageService(fileName).parseHTMLDocument(
        this.getTextDocument(fileName),
      )
    })
  }

  public readonly supportedLanguages = ['vue-html', 'vue']

  private getLanguageService(fileName: string): VSCodeHtmlLanguageService {
    switch (this.fs.getLanguageId(fileName)) {
      case 'vue-html':
        return this.template
      case 'vue':
        return this.sfc
      default:
        throw new Error('Unsupported file: ' + fileName)
    }
  }

  public getDiagnostics(_fileName: string): LanguageService.Diagnostic[] {
    return []
  }

  public getDefinitionAt(
    _fileName: string,
    _position: LanguageService.Position,
  ): LanguageService.Definition[] {
    return []
  }

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

    return this.getLanguageService(fileName).doHover(text, position, html)
  }

  public dispose(): void {
    // noop
  }
}
