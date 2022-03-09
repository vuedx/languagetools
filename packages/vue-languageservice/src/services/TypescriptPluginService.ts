import { inject, injectable } from 'inversify'
import type {
  ExtendedTSLanguageService,
  TSProject,
  Typescript,
} from '../contracts/Typescript'
import { CompletionsService } from '../features/CompletionsService'
import { DiagnosticsService } from '../features/DiagnosticsService'
import { GotoService } from '../features/GotoService'
import { HoverService } from '../features/HoverService'
import { FilesystemService } from './FilesystemService'
import { IPCService } from './IPCService'
import { LoggerService } from './LoggerService'
import { TypescriptContextService } from './TypescriptContextService'

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
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(IPCService)
    private readonly ipc: IPCService,
  ) {}

  getExternalFiles(project: TSProject): string[] {
    const vueFiles = new Set<string>()
    const virtualFiles = new Set<string>()
    let hasVirtualSchemeFiles = false
    for (const fileName of project.getFileNames(true, true)) {
      if (this.fs.isVueSchemeFile(fileName)) {
        const realProject = this.ts.getProjectFor(
          this.fs.getRealFileName(fileName),
        )
        if (realProject != null) {
          project.getScriptInfo(fileName)?.attachToProject(realProject)
        }

        hasVirtualSchemeFiles = realProject !== project
      } else if (this.fs.isVueFile(fileName)) {
        vueFiles.add(this.fs.getRealFileName(fileName))
      } else if (
        this.fs.isVueTsFile(fileName) ||
        this.fs.isVueVirtualFile(fileName)
      ) {
        vueFiles.add(this.fs.getRealFileName(fileName))
        virtualFiles.add(fileName)
      } else if (this.fs.isProjectRuntimeFile(fileName)) {
        virtualFiles.add(fileName)
      }
    }

    if (
      project.projectKind === this.ts.lib.server.ProjectKind.Inferred &&
      hasVirtualSchemeFiles
    ) {
      return [] // do not retain any files for inferred projects containing virtual scheme files
    }

    vueFiles.forEach((fileName) => {
      this.fs
        .getVueFile(fileName)
        ?.getActiveTSDocIDs()
        .forEach((id) => {
          virtualFiles.add(id)
        })

      virtualFiles.add(`${fileName}.ts`)
      virtualFiles.add(this.ts.getProjectRuntimeFileName(fileName))
    })

    return Array.from(vueFiles).concat(Array.from(virtualFiles))
  }

  getCompilerOptionsDiagnostics(): Typescript.Diagnostic[] {
    const diagnostics = this.ts.service.getCompilerOptionsDiagnostics()
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

    return this.ts.service.getEncodedSyntacticClassifications(fileName, span)
  }

  getEncodedSemanticClassifications(
    fileName: string,
    span: Typescript.TextSpan,
    format?: Typescript.SemanticClassificationFormat,
  ): Typescript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return { spans: [], endOfLineState: 0 }
    }

    return this.ts.service.getEncodedSemanticClassifications(
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

    return this.ts.service.findReferences(fileName, position)
  }

  getOutliningSpans(fileName: string): Typescript.OutliningSpan[] {
    if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)
      return (
        this.ts
          .getUndecoratedServiceFor(realFileName)
          ?.getOutliningSpans(realFileName) ?? []
      )
    } else if (this.fs.isVueFile(fileName)) {
      return []
    }

    return this.ts.service.getOutliningSpans(fileName)
  }

  dispose(): void {
    this.ipc.dispose()
    this.ts.service.dispose()
  }
}
