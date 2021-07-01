import { isNotNull } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import { INJECTABLE_TS_PROJECT, INJECTABLE_TS_SERVICE } from '../constants'
import type {
  ExtendedTSLanguageService,
  TSLanguageService,
  TSProject,
  Typescript,
} from '../contracts/Typescript'
import { DiagnosticsService } from '../features/DiagnosticsService'
import { GotoService } from '../features/GotoService'
import { HoverService } from '../features/HoverService'
import { FilesystemService } from './FilesystemService'
import { LoggerService } from './LoggerService'

@injectable()
export class TypescriptPluginService
  implements Partial<ExtendedTSLanguageService> {
  constructor(
    @inject(INJECTABLE_TS_SERVICE)
    private readonly base: TSLanguageService,
    @inject(INJECTABLE_TS_PROJECT)
    private readonly project: TSProject,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(DiagnosticsService)
    private readonly diagnostics: DiagnosticsService,
    @inject(HoverService)
    private readonly hover: HoverService,
    @inject(GotoService)
    private readonly goto: GotoService,
    @inject(LoggerService)
    private readonly logger: LoggerService,
  ) {}

  getExternalFiles(): string[] {
    const vueFiles = this.project
      .getFileNames(true, true)
      .filter(
        (fileName) =>
          this.fs.isVueTsFile(fileName) || this.fs.isVueFile(fileName),
      )

    const virtualFiles = new Set(
      vueFiles
        .map((fileName) => this.fs.getVueFile(fileName))
        .filter(isNotNull)
        .map((file) => {
          return [file.fileName, file.tsFileName, ...file.activeTSDocIDs]
        })
        .flat(),
    )

    this.logger.info(
      `ExtraFiles(${this.project.getProjectName()}):`,
      virtualFiles,
    )

    return Array.from(virtualFiles)
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
    return this.diagnostics.getSyntacticDiagnostics(fileName)
  }

  getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
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

  getEncodedSyntacticClassifications(
    fileName: string,
    span: Typescript.TextSpan,
  ): Typescript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return { spans: [], endOfLineState: 0 }
    }

    return this.base.getEncodedSyntacticClassifications(fileName, span)
  }

  getEncodedSemanticClassifications(
    fileName: string,
    span: Typescript.TextSpan,
    format?: Typescript.SemanticClassificationFormat,
  ): Typescript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return { spans: [], endOfLineState: 0 }
    }

    return this.base.getEncodedSemanticClassifications(fileName, span, format)
  }

  findReferences(
    fileName: string,
    position: number,
  ): Typescript.ReferencedSymbol[] | undefined {
    if (this.fs.isVueFile(fileName)) return

    return this.base.findReferences(fileName, position)
  }

  dispose(): void {
    this.base.dispose()
  }
}
