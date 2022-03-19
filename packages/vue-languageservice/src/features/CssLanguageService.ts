import { inject, injectable } from 'inversify'
import {
  getCSSLanguageService,
  getLESSLanguageService,
  getSCSSLanguageService,
  LanguageService as VSCodeCssLanguageService,
  Stylesheet,
  TextDocument,
} from 'vscode-css-languageservice'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'

abstract class BaseLanguageService implements LanguageService {
  protected readonly logger = LoggerService.getLogger('CssLanguageService')
  protected readonly stylesheets = new CacheService<Stylesheet>((fileName) =>
    this.fs.getVersion(fileName),
  )

  constructor(
    protected readonly fs: FilesystemService,
    protected readonly service: VSCodeCssLanguageService,
  ) {}

  private getTextDocument(fileName: string): TextDocument {
    const doc = this.fs.getSourceFile(fileName)

    if (doc == null) throw new Error(`File not found: ${fileName}`)
    this.logger.debug('Reading:', fileName, doc.getText())

    return doc
  }

  private getStylesheet(fileName: string): Stylesheet {
    return this.stylesheets.withCache(fileName, (stylesheet) => {
      if (stylesheet != null) return stylesheet
      return this.service.parseStylesheet(this.getTextDocument(fileName))
    })
  }

  public getDiagnostics(fileName: string): LanguageService.Diagnostic[] {
    return this.service.doValidation(
      this.getTextDocument(fileName),
      this.getStylesheet(fileName),
    )
  }

  public getDefinitionAt(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.Definition[] {
    const definition = this.service.findDefinition(
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
    return this.service.doHover(
      this.getTextDocument(fileName),
      position,
      this.getStylesheet(fileName),
    )
  }

  public getCompletionsAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.CompletionList {
    return this.service.doComplete(
      this.getTextDocument(fileName),
      position,
      this.getStylesheet(fileName),
      {
        triggerPropertyValueCompletion: true,
        completePropertyWithSemicolon: true,
      },
    )
  }

  public dispose(): void {
    // noop
  }
}

@injectable()
export class CssLanguageService extends BaseLanguageService {
  public constructor(@inject(FilesystemService) fs: FilesystemService) {
    super(fs, getCSSLanguageService({ useDefaultDataProvider: true }))
  }

  public readonly supportedLanguages = ['css']
}

@injectable()
export class ScssLanguageService extends BaseLanguageService {
  public constructor(@inject(FilesystemService) fs: FilesystemService) {
    super(fs, getSCSSLanguageService({ useDefaultDataProvider: true }))
  }

  public readonly supportedLanguages = ['scss', 'sass']
}

@injectable()
export class LessLanguageService extends BaseLanguageService {
  public constructor(@inject(FilesystemService) fs: FilesystemService) {
    super(fs, getLESSLanguageService({ useDefaultDataProvider: true }))
  }

  public readonly supportedLanguages = ['less']
}
