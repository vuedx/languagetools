import { inject, injectable } from 'inversify'
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
import { TypescriptService } from './TypescriptService'

@injectable()
export class TypescriptPluginService
  implements Partial<ExtendedTSLanguageService> {
  private readonly logger = LoggerService.getLogger('TSPluginService')

  private readonly project: TSProject
  private readonly service: TSLanguageService

  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
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
  ) {
    const project = this.ts.getDefaultProject()
    const service = this.ts.getService()

    if (project == null || service == null) {
      throw new Error(
        'vue-languageservice requires a project to create ts-plugin',
      )
    }

    this.project = project
    this.service = service
  }

  getExternalFiles(): string[] {
    const externalFiles = new Set<string>()
    this.project.getFileNames(true, true).forEach((fileName) => {
      if (
        this.fs.isVueFile(fileName) ||
        this.fs.isVueTsFile(fileName) ||
        this.fs.isVueVirtualFile(fileName)
      ) {
        externalFiles.add(fileName)
        const vueFileName = this.fs.getRealFileName(fileName)
        externalFiles.add(vueFileName)

        const file = this.fs.getVueFile(fileName)
        if (file != null) {
          externalFiles.add(file.tsFileName)
          file.getActiveTSDocIDs().forEach((id) => externalFiles.add(id))
        }
      }
    })

    if (externalFiles.size > 0) {
      externalFiles.add(this.ts.getRuntimeHelperFileName('3.0'))
    }

    this.logger.debug('External Files:', externalFiles)

    return Array.from(externalFiles)
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
