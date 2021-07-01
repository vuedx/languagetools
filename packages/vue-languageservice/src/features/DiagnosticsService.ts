import { isNotNull } from '@vuedx/shared'
import type { SourceLocation } from '@vuedx/template-ast-types'
import type {
  TextDocument,
  TransformerError,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import type {
  Diagnostic,
  DiagnosticRelatedInformation,
  DiagnosticSeverity,
  DiagnosticTag,
  Range,
} from 'vscode-languageserver-types'
import { INJECTABLE_TS } from '../constants'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { TypescriptService } from '../services/TypescriptService'

@injectable()
export class DiagnosticsService {
  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(LanguageServiceProvider)
    private readonly lang: LanguageServiceProvider,
    @inject(INJECTABLE_TS)
    private readonly typescript: typeof Typescript | null,
  ) {}

  private readonly TS_CATEGORY_TO_SEVERITY: Record<
    Typescript.DiagnosticCategory,
    DiagnosticSeverity
  > = {
    0: 2,
    1: 1,
    2: 4,
    3: 3,
  }

  private readonly SEVERITY_TO_TS_CATEGORY: Record<
    DiagnosticSeverity,
    Typescript.DiagnosticCategory
  > = {
    1: 1,
    2: 0,
    3: 3,
    4: 2,
  }

  private readonly NAMED_SEVERITY_TO_SEVERITY: Record<
    TransformerError['severity'],
    DiagnosticSeverity
  > = {
    error: 1,
    warning: 2,
    info: 3,
    hint: 4,
    unused: 4,
    deprecated: 4,
  }

  public getDiagnostics(fileName: string): Diagnostic[] {
    return [
      this.getSemanticDiagnostics(fileName).map((diagnostic) =>
        this.toDiagnostic(diagnostic),
      ),
      this.getSyntacticDiagnostics(fileName).map((diagnostic) =>
        this.toDiagnostic(diagnostic),
      ),
      this.getSuggestionDiagnostics(fileName).map((diagnostic) =>
        this.toDiagnostic(diagnostic),
      ),
      this.getDiagnosticsFromEmbeddedLanguageServices(fileName),
    ]
      .flat()
      .filter(isNotNull)
  }

  public getExtraDiagnostics(fileName: string): Typescript.Diagnostic[] {
    return this.getDiagnosticsFromEmbeddedLanguageServices(
      fileName,
    ).map((diagnostic) => this.toTSDiagnostic(fileName, diagnostic))
  }

  public getSemanticDiagnostics(fileName: string): Typescript.Diagnostic[] {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return []

    return this.getDiagnosticsFromTS(fileName, (fileName) =>
      service.getSemanticDiagnostics(fileName),
    )
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return []

    return this.getDiagnosticsFromTS(fileName, (fileName) =>
      service.getSyntacticDiagnostics(fileName),
    ) as Typescript.DiagnosticWithLocation[]
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return []

    return this.getDiagnosticsFromTS(fileName, (fileName) =>
      service.getSuggestionDiagnostics(fileName),
    ) as Typescript.DiagnosticWithLocation[]
  }

  private getDiagnosticsFromEmbeddedLanguageServices(
    fileName: string,
  ): Diagnostic[] {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []

    const diagnostics: Diagnostic[] = []

    // Collect SFC parse errors
    file.errors.forEach((error) => {
      diagnostics.push({
        message: error.message,
        range: this.getRangeFromLoc(file, error),
        code: 'code' in error ? error.code : undefined,
        source: 'VueDX/SFC',
      })
    })

    // Collect errors from transformed TS virtual files
    file.activeTSDocIDs.forEach((id) => {
      const doc = file.getDocById(id)
      if (doc == null) return
      doc.errors.forEach((error) => {
        diagnostics.push({
          message: error.message,
          range: this.fs.toRange(file, this.fs.getAbsoluteOffsets(doc, error)),
          code: error.code,
          codeDescription: error.codeDescription,
          source: this.getSourceName(error.source),
          severity: this.NAMED_SEVERITY_TO_SEVERITY[error.severity],
          tags: [
            error.severity === 'unused' ? (1 as DiagnosticTag) : null,
            error.severity === 'deprecated' ? (2 as DiagnosticTag) : null,
          ].filter(isNotNull),
        })
      })
    })

    // Collect diagnostics from embedded language services
    file.blocks.forEach((block) => {
      const fileName = file.getBlockId(block)
      const doc = file.getDoc(block)

      if (doc == null) return

      this.lang
        .getLanguageService(fileName)
        ?.getDiagnositcs(fileName)
        .forEach((diagnostic) => {
          diagnostic.range = this.fs.getAbsoluteRange(
            file,
            doc,
            diagnostic.range,
          )

          diagnostic.relatedInformation = diagnostic.relatedInformation?.map(
            (relatedInfo) => {
              // Only virtual files from current .vue file should be supported.
              if (this.fs.isVueVirtualFile(relatedInfo.location.uri)) {
                relatedInfo.location.range = this.fs.getAbsoluteRange(
                  file,
                  doc,
                  relatedInfo.location.range,
                )
              }

              return relatedInfo
            },
          )

          diagnostics.push(diagnostic)
        })
    })

    return diagnostics
  }

  /**
   * Collect diagnostics from internal virtual files.
   * @param fileName entry filename
   * @param getter diagnostics getter funciton
   * @returns combined diagnostics for Vue virtual files
   */
  private getDiagnosticsFromTS(
    fileName: string,
    getter: (fileName: string) => Typescript.Diagnostic[],
  ): Typescript.Diagnostic[] {
    if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return []
      const diagnostics: Typescript.Diagnostic[] = []
      vueFile.activeTSDocIDs.forEach((id) => {
        const result = getter(id)

        result
          .filter((item) => item.start != null)
          .forEach((item) => {
            diagnostics.push(this.normalizeTSDiagnostic(item))
          })
      })
      return diagnostics
    } else if (this.fs.isVueVirtualFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return []

      const blockFile = vueFile.getDocById(fileName) ?? undefined

      return getter(fileName)
        .filter(
          (item) =>
            item.start == null ||
            blockFile == null ||
            !blockFile.isOffsetInIgonredZone(item.start),
        )
        .map((diagnostic) => this.normalizeTSDiagnostic(diagnostic))
    } else {
      return getter(fileName).map((diagnostic) =>
        this.normalizeTSDiagnostic(diagnostic),
      )
    }
  }

  private toDiagnostic(diagnostic: Typescript.Diagnostic): Diagnostic | null {
    if (diagnostic.file == null) return null
    const file = this.fs.getFile(diagnostic.file.fileName)
    if (file == null) return null

    const transformed: Diagnostic = {
      message: this.toDisplayMessage(diagnostic.messageText),
      range: this.fs.toRange(file, diagnostic),
      code: diagnostic.code,
      severity: this.TS_CATEGORY_TO_SEVERITY[diagnostic.category],
      source: this.getSourceName(diagnostic.source),
      tags: [
        diagnostic.reportsUnnecessary != null ? (1 as DiagnosticTag) : null,
        diagnostic.reportsDeprecated != null ? (2 as DiagnosticTag) : null,
      ].filter(isNotNull),
    }

    transformed.relatedInformation = diagnostic.relatedInformation
      ?.map((diagnostic) => this.toDiagnosticRelatedInformation(diagnostic))
      .filter(isNotNull)

    return transformed
  }

  private toTSDiagnostic(
    fileName: string,
    diagnostic: Diagnostic,
  ): Typescript.Diagnostic {
    const file = this.fs.getFile(fileName)
    const range =
      file != null
        ? this.fs.toOffsets(file, diagnostic.range)
        : { start: undefined, length: undefined }
    const sourceFile = this.ts.getSourceFile(fileName) ?? undefined

    return {
      source: diagnostic.source,
      messageText: diagnostic.message,
      category: this.SEVERITY_TO_TS_CATEGORY[diagnostic.severity ?? 1],
      code: diagnostic.code != null ? Number(diagnostic.code) : 0,
      reportsUnnecessary: diagnostic.tags?.includes(1 as DiagnosticTag),
      reportsDeprecated: diagnostic.tags?.includes(2 as DiagnosticTag),
      file: sourceFile,
      start: range.start,
      length: range.length,
      relatedInformation: diagnostic.relatedInformation?.map((diagnostic) =>
        this.toTSDiagnosticRelatedInformation(diagnostic),
      ),
    }
  }

  private toDiagnosticRelatedInformation(
    diagnostic: Typescript.DiagnosticRelatedInformation,
  ): DiagnosticRelatedInformation | null {
    if (diagnostic.file == null) return null
    const file = this.fs.getFile(diagnostic.file.fileName)
    if (file == null) return null

    return {
      message: this.toDisplayMessage(diagnostic.messageText),
      location: {
        range: this.fs.toRange(file, diagnostic),
        uri: file.uri,
      },
    }
  }

  private toTSDiagnosticRelatedInformation(
    diagnostic: DiagnosticRelatedInformation,
  ): Typescript.DiagnosticRelatedInformation {
    const file = this.fs.getFile(this.fs.toFileName(diagnostic.location.uri))
    const range =
      file != null
        ? this.fs.toOffsets(file, diagnostic.location.range)
        : { start: undefined, length: undefined }

    return {
      messageText: diagnostic.message,
      category: 1 as Typescript.DiagnosticCategory,
      file: this.ts.getSourceFile(diagnostic.location.uri) ?? undefined,
      code: 0,
      start: range.start,
      length: range.length,
    }
  }

  private getRangeFromLoc<T extends {} | { loc?: SourceLocation }>(
    file: TextDocument,
    node: T,
  ): Range {
    return this.fs.toRange(
      file,
      'loc' in node && node.loc != null
        ? {
            start: node.loc.start.offset,
            length: node.loc.end.offset - node.loc.start.offset,
          }
        : { start: undefined, length: undefined },
    )
  }

  private toDisplayMessage(
    message: string | Typescript.DiagnosticMessageChain,
  ): string {
    if (typeof message === 'string') return message
    if (this.typescript != null) {
      return this.typescript.flattenDiagnosticMessageText(message, '\n')
    }

    return message.messageText
  }

  private normalizeTSDiagnostic(
    diagnostic: Typescript.Diagnostic,
  ): Typescript.Diagnostic {
    const file = diagnostic.file
    if (diagnostic.relatedInformation != null) {
      diagnostic.relatedInformation = diagnostic.relatedInformation.map(
        (diagnostic) => {
          if (diagnostic.file == null) {
            diagnostic.file = file
          }

          return this.normalizeTSDiagnosticRelatedInformation(diagnostic)
        },
      )
    }

    const fileName = diagnostic.file?.fileName
    if (fileName == null) {
      return diagnostic
    } else if (this.fs.isVueVirtualFile(fileName)) {
      const range = this.fs.getAbsoluteOffsets(
        this.fs.getVueFile(fileName)?.getDocById(fileName) ?? undefined,
        diagnostic,
      )

      return {
        file: this.fs.getVueSourceFile(fileName),
        code: diagnostic.code,
        category: diagnostic.category,
        messageText: diagnostic.messageText,
        reportsDeprecated: diagnostic.reportsDeprecated,
        reportsUnnecessary: diagnostic.reportsUnnecessary,
        source: diagnostic.source,
        relatedInformation: diagnostic.relatedInformation,
        start: range.start,
        length: range.length,
      }
    } else if (this.fs.isVueFile(fileName) || this.fs.isVueTsFile(fileName)) {
      return {
        file: this.fs.getVueSourceFile(fileName),
        code: diagnostic.code,
        category: diagnostic.category,
        messageText: diagnostic.messageText,
        reportsDeprecated: diagnostic.reportsDeprecated,
        reportsUnnecessary: diagnostic.reportsUnnecessary,
        source: diagnostic.source,
        relatedInformation: diagnostic.relatedInformation,
        start: diagnostic.start,
        length: diagnostic.length,
      }
    } else {
      return diagnostic
    }
  }

  private normalizeTSDiagnosticRelatedInformation(
    diagnostic: Typescript.DiagnosticRelatedInformation,
  ): Typescript.DiagnosticRelatedInformation {
    if (diagnostic.file == null) return diagnostic

    return this.normalizeTSDiagnostic(diagnostic)
  }

  private getSourceName(source?: string): string {
    if (source != null) return `VueDX/${source}`
    return 'VueDX'
  }
}
