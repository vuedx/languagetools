import { inject, injectable } from 'inversify'
import {
  getCSSLanguageService,
  LanguageService as VSCodeCssLanguageService,
  Stylesheet,
  TextDocument,
} from 'vscode-css-languageservice'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'

@injectable()
export class CssLanguageService implements LanguageService {
  private readonly css: VSCodeCssLanguageService
  private readonly scss: VSCodeCssLanguageService
  private readonly less: VSCodeCssLanguageService

  private readonly stylesheets = new CacheService<Stylesheet>(
    (fileName) => `${this.getTextDocument(fileName).version}`,
  )

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {
    this.css = getCSSLanguageService({
      useDefaultDataProvider: true,
      customDataProviders: [],
    })
    this.scss = getCSSLanguageService({
      useDefaultDataProvider: true,
      customDataProviders: [],
    })
    this.less = getCSSLanguageService({
      useDefaultDataProvider: true,
      customDataProviders: [],
    })
  }

  public readonly supportedLanguages = ['css', 'scss', 'sass', 'less']

  private getLanguageService(fileName: string): VSCodeCssLanguageService {
    switch (this.fs.getLanguageId(fileName)) {
      case 'css':
        return this.css
      case 'sass':
      case 'scss':
        return this.scss
      case 'less':
        return this.less
      default:
        throw new Error('Unsupported file: ' + fileName)
    }
  }

  private getTextDocument(fileName: string): TextDocument {
    const doc = this.fs.getSourceFile(fileName)

    if (doc == null) throw new Error(`File not found: ${fileName}`)

    return doc
  }

  private getStylesheet(fileName: string): Stylesheet {
    return this.stylesheets.withCache(fileName, (stylesheet) => {
      if (stylesheet != null) return stylesheet
      return this.getLanguageService(fileName).parseStylesheet(
        this.getTextDocument(fileName),
      )
    })
  }

  public getDiagnostics(fileName: string): LanguageService.Diagnostic[] {
    return this.getLanguageService(fileName).doValidation(
      this.getTextDocument(fileName),
      this.getStylesheet(fileName),
    )
  }

  public getDefinitionAt(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[] {
    const definition = this.getLanguageService(fileName).findDefinition(
      this.getTextDocument(fileName),
      position,
      this.getStylesheet(fileName),
    )

    return definition != null ? [definition] : []
  }

  public getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    return this.getLanguageService(fileName).doHover(
      this.getTextDocument(fileName),
      position,
      this.getStylesheet(fileName),
    )
  }

  public dispose(): void {
    // noop
  }
}
