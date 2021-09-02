import { inject, injectable } from 'inversify'
import { INJECTABLE_TS_SERVICE } from '../constants'
import type {
  ExtendedTSLanguageService,
  TSLanguageService,
  TSProject,
  Typescript,
} from '../contracts/Typescript'
import { CompletionsService } from '../features/CompletionsService'
import { DiagnosticsService } from '../features/DiagnosticsService'
import { GotoService } from '../features/GotoService'
import { HoverService } from '../features/HoverService'
import { FilesystemService } from './FilesystemService'
import { LoggerService } from './LoggerService'

@injectable()
export class TypescriptPluginService
  implements Partial<ExtendedTSLanguageService> {
  private readonly logger = LoggerService.getLogger('TSPluginService')

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(DiagnosticsService)
    private readonly diagnostics: DiagnosticsService,
    @inject(HoverService)
    private readonly hover: HoverService,
    @inject(GotoService)
    private readonly goto: GotoService,
    @inject(CompletionsService)
    private readonly completions: CompletionsService,
    @inject(INJECTABLE_TS_SERVICE)
    private readonly service: TSLanguageService,
  ) {}

  getExternalFiles(project: TSProject): string[] {
    const vueFiles = new Set<string>()
    project.getFileNames(true, true).forEach((fileName) => {
      if (
        this.fs.isVueFile(fileName) ||
        this.fs.isVueTsFile(fileName) ||
        this.fs.isVueVirtualFile(fileName)
      ) {
        vueFiles.add(this.fs.getRealFileName(fileName))
      }
    })

    this.logger.debug('External Files', vueFiles)

    return Array.from(vueFiles)
  }

  getCompilerOptionsDiagnostics(): Typescript.Diagnostic[] {
    const diagnostics = this.service.getCompilerOptionsDiagnostics()
    const re = /\.vue(\?vue|\.ts|\.js)/
    return diagnostics.filter((diagnostic) => {
      // Ignore diagnostics referring virtual files
      if (re.test(this.diagnostics.toDisplayMessage(diagnostic.messageText))) {
        return false
      }

      return true
    })
  }

  getSemanticDiagnostics(fileName: string): Typescript.Diagnostic[] {
    this.logger.info(`getSemanticDiagnostics: ${fileName}`)

    return [
      this.diagnostics.getSemanticDiagnostics(fileName),
      this.diagnostics.getExtraDiagnostics(fileName),
    ].flat()
  }

  getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    this.logger.info(`getSyntacticDiagnostics: ${fileName}`)
    return this.diagnostics.getSyntacticDiagnostics(fileName)
  }

  getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    this.logger.info(`getSuggestionDiagnostics: ${fileName}`)
    return this.diagnostics.getSuggestionDiagnostics(fileName)
  }

  getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this.goto.getDefinitionAtPosition(fileName, position)
  }

  getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): Typescript.DefinitionInfoAndBoundSpan | undefined {
    return this.goto.getDefinitionAndBoundSpan(fileName, position)
  }

  getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    return this.hover.getQuickInfoAtPosition(fileName, position)
  }

  getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    return this.completions.getCompletionsAtPosition(
      fileName,
      position,
      options,
    )
  }

  getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions:
      | Typescript.FormatCodeOptions
      | Typescript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: Typescript.UserPreferences | undefined,
    data: Typescript.CompletionEntryData | undefined,
  ): Typescript.CompletionEntryDetails | undefined {
    return this.completions.getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
      data,
    )
  }

  getEncodedSyntacticClassifications(
    fileName: string,
    span: Typescript.TextSpan,
  ): Typescript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return { spans: [], endOfLineState: 0 }
    }

    return this.service.getEncodedSyntacticClassifications(fileName, span)
  }

  getEncodedSemanticClassifications(
    fileName: string,
    span: Typescript.TextSpan,
    format?: Typescript.SemanticClassificationFormat,
  ): Typescript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return { spans: [], endOfLineState: 0 }
    }

    return this.service.getEncodedSemanticClassifications(
      fileName,
      span,
      format,
    )
  }

  findReferences(
    fileName: string,
    position: number,
  ): Typescript.ReferencedSymbol[] | undefined {
    if (this.fs.isVueFile(fileName)) return

    return this.service.findReferences(fileName, position)
  }

  dispose(): void {
    this.service.dispose()
  }
}
