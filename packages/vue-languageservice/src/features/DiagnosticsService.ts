import { isNotNull, mayContainVirtualFileName, toFileName } from '@vuedx/shared'
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
import type { TSLanguageService } from '../contracts/TypeScript'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { ScriptSetupDiagnosticsProvider } from './diagnostics/ScriptSetupDiagnosticsProvider'
import { TemplateGlobals } from './helpers'

interface NormalizeOptions {
  /**
   * Only pass to force file on normalized diagnostics.
   */
  expectedFileName?: string

  /** Diagnostics for ^vue scheme files */
  isVueSchemeFile?: boolean
}

@injectable()
export class DiagnosticsService
  implements
    Pick<
      TSLanguageService,
      | 'getSemanticDiagnostics'
      | 'getSyntacticDiagnostics'
      | 'getSuggestionDiagnostics'
    > {
  private readonly logger = LoggerService.getLogger('Diagnostics')
  private readonly caches = {
    semantic: new CacheService<Typescript.Diagnostic[]>((fileName) =>
      this.#getVersion(fileName),
    ),
    syntax: new CacheService<Typescript.DiagnosticWithLocation[]>((fileName) =>
      this.#getVersion(fileName),
    ),
    suggestion: new CacheService<Typescript.DiagnosticWithLocation[]>(
      (fileName) => this.#getVersion(fileName),
    ),
    extra: new CacheService<Typescript.Diagnostic[]>((fileName) =>
      this.#getVersion(fileName),
    ),
    all: new CacheService<Diagnostic[]>((fileName) =>
      this.#getVersion(fileName),
    ),
  }

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(LanguageServiceProvider)
    private readonly lang: LanguageServiceProvider,
    @inject(ScriptSetupDiagnosticsProvider)
    private readonly scriptSetup: ScriptSetupDiagnosticsProvider,
  ) {}

  readonly #SEVERITY_TO_TS_CATEGORY: Record<
    DiagnosticSeverity,
    Typescript.DiagnosticCategory
  > = {
    1: 1,
    2: 0,
    3: 3,
    4: 2,
  }

  readonly #NAMED_SEVERITY_TO_SEVERITY: Record<
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

  readonly #getVersion = (fileName: string): string => {
    const project = this.ts.getProjectFor(fileName)
    if (project == null) return `-${Date.now()}`

    return `${project.getProjectVersion()} + ${project.getScriptVersion(
      fileName,
    )}`
  }

  public getCompilerOptionsDiagnostics(): Typescript.Diagnostic[] {
    const diagnostics = this.ts.service.getCompilerOptionsDiagnostics()

    return diagnostics.filter((diagnostic) => {
      // Ignore diagnostics referring virtual files
      if (
        mayContainVirtualFileName(this.toDisplayMessage(diagnostic.messageText))
      ) {
        return false
      }

      return true
    })
  }

  #getExtraDiagnostics(fileName: string): Typescript.Diagnostic[] {
    if (!this.fs.isVueFile(fileName)) return []
    return this.caches.extra.withCache(fileName, (result) => {
      if (result != null) return result
      this.logger.debug(`ExtraDiagnonstics in ${fileName}`)
      const diagnostics: Typescript.Diagnostic[] = []
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile?.descriptor.scriptSetup != null) {
        const virtualFileName = vueFile.getBlockId(
          vueFile.descriptor.scriptSetup,
        )
        diagnostics.push(
          ...this.toVueFileDiagnostics(
            virtualFileName,
            this.scriptSetup
              .getDiagnostics(virtualFileName)
              .map((diagnostic) =>
                this.toTSDiagnostic(virtualFileName, diagnostic),
              ),
          ),
        )
      }

      diagnostics.push(
        ...this.getDiagnosticsFromEmbeddedLanguageServices(
          fileName,
        ).map((diagnostic) => this.toTSDiagnostic(fileName, diagnostic)),
      )

      return diagnostics
    })
  }

  public getSemanticDiagnostics(fileName: string): Typescript.Diagnostic[] {
    // VSCode does not support semantic diagnostics for virtual files.
    if (this.fs.isVueSchemeFile(fileName)) return []
    // Do not send diagnostics for virtual files.
    if (this.fs.isVueVirtualFile(fileName)) return []

    this.ts.ensureUptoDate(fileName)

    return [
      ...this.getSemanticDiagnosticsOnly(fileName),
      ...this.#getExtraDiagnostics(fileName),
    ]
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    if (this.fs.isVueSchemeFile(fileName)) {
      // VSCode does not support semantic diagnostics for virtual files.
      // So let's send all diagnostics as syntactic diagnostics
      return [
        ...this.getSyntacticDiagnosticsOnly(fileName),
        ...this.getSemanticDiagnosticsOnly(fileName),
        ...this.getSuggestionDiagnosticsOnly(fileName),
      ] as Typescript.DiagnosticWithLocation[]
    }

    // Do not send diagnostics for virtual files.
    if (this.fs.isVueVirtualFile(fileName)) return []

    this.ts.ensureUptoDate(fileName)

    return this.getSyntacticDiagnosticsOnly(fileName)
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    // VSCode does not support semantic diagnostics for virtual files.
    if (this.fs.isVueSchemeFile(fileName)) return []
    // Do not send diagnostics for virtual files.
    if (this.fs.isVueVirtualFile(fileName)) return []

    this.ts.ensureUptoDate(fileName)

    return this.getSuggestionDiagnosticsOnly(fileName)
  }

  private getSyntacticDiagnosticsOnly(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.caches.syntax.withCache(fileName, (result) => {
      if (result != null) return result // use cached result.
      this.logger.debug(`SyntacticDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName, service) => {
        this.logger.debug(`SyntacticDiagnonstics in ${fileName}`)
        return service.getSyntacticDiagnostics(fileName)
      }) as Typescript.DiagnosticWithLocation[]
    })
  }

  private getSemanticDiagnosticsOnly(
    fileName: string,
  ): Typescript.Diagnostic[] {
    return this.caches.semantic.withCache(fileName, (result) => {
      if (result != null) return result // use cached result.
      this.logger.debug(`SemanticDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName, service) => {
        this.logger.debug(`SemanticDiagnonstics in ${fileName}`)
        return service.getSemanticDiagnostics(fileName)
      })
    })
  }

  private getSuggestionDiagnosticsOnly(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.caches.suggestion.withCache(fileName, (result) => {
      if (result != null) return result
      this.logger.debug(`SuggestionDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName, service) => {
        this.logger.debug(`SuggestionDiagnonstics in ${fileName}`)
        return service.getSuggestionDiagnostics(fileName)
      }) as Typescript.DiagnosticWithLocation[]
    })
  }

  private getDiagnosticsFromEmbeddedLanguageServices(
    fileName: string,
  ): Diagnostic[] {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []

    const diagnostics: Diagnostic[] = []

    // Collect SFC parse errors
    file.errors.forEach((error) => {
      if (error.message === '') return
      diagnostics.push({
        message: error.message,
        range: this.getRangeFromLoc(file, error),
        code: 'code' in error ? error.code : undefined,
        severity: this.#NAMED_SEVERITY_TO_SEVERITY['error'],
        source: 'VueDX/SFC parser',
      })
    })

    // Collect errors from transformed TS virtual files
    file.getActiveTSDocIDs().forEach((id) => {
      const doc = file.getDocById(id)
      if (doc == null) return
      doc.errors.forEach((error) => {
        if (error.message === '') return
        diagnostics.push({
          message: error.message,
          range: this.fs.getAbsoluteRange(
            file,
            doc,
            this.fs.toRange(doc.source, error),
          ),
          code: error.code,
          codeDescription: error.codeDescription,
          source: this.getSourceName(
            error.source ?? doc.block.type + ' parser',
          ),
          severity: this.#NAMED_SEVERITY_TO_SEVERITY[error.severity],
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
        ?.getDiagnostics(fileName)
        .forEach((diagnostic) => {
          const start = doc.source.offsetAt(diagnostic.range.start)
          const end = doc.source.offsetAt(diagnostic.range.start)

          diagnostic.range = {
            start: file.positionAt(doc.toFileOffset(start)),
            end: file.positionAt(doc.toFileOffset(end)),
          }

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
    getter: (
      fileName: string,
      service: TSLanguageService,
    ) => Typescript.Diagnostic[],
  ): Typescript.Diagnostic[] {
    if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) {
        this.logger.debug(`File not found: ${fileName}`)
        return []
      }

      return Array.from(vueFile.getActiveTSDocIDs()).flatMap((fileName) => {
        try {
          return this.toVueFileDiagnostics(
            fileName,
            getter(fileName, this.ts.service),
          )
        } catch (error) {
          this.logger.error(error as Error)
          return this.errorAsTSDiagnostic(fileName, error as Error)
        }
      })
    } else if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)
      const expectedFileName = toFileName({
        type: 'scheme',
        scheme: 'vue',
        fileName: realFileName,
      })

      const service =
        this.ts.getUndecoratedServiceFor(realFileName) ?? this.ts.service

      return (getter(realFileName, service).map((diagnostic) =>
        this.normalizeTSDiagnostic(diagnostic, {
          expectedFileName,
          isVueSchemeFile: true,
        }),
      ) ?? []) as Typescript.DiagnosticWithLocation[]
    } else {
      return getter(fileName, this.ts.service).map((diagnostic) =>
        this.normalizeTSDiagnostic(diagnostic, {
          expectedFileName: fileName,
        }),
      )
    }
  }

  private toVueFileDiagnostics(
    fileName: string,
    diagnostics: Typescript.Diagnostic[],
  ): Typescript.Diagnostic[] {
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return []

    const blockFile = vueFile.getDocById(fileName)
    if (blockFile == null) return []

    const isScriptSetup =
      blockFile.block.type === 'script' &&
      blockFile.block.attrs['setup'] != null

    return diagnostics
      .flatMap((diagnostic) => {
        if (isScriptSetup && diagnostic.code === 2528) {
          this.logger.debug(
            `Ignoring ${diagnostic.code} because export default in script setup is handled.`,
          )
          return null
        }

        if (diagnostic.start == null) {
          this.logger.debug(`Ignoring ${diagnostic.code} without location`)
          return null
        }

        this.logger.debug(
          `${diagnostic.code} at ${diagnostic.start}: ${this.toDisplayMessage(
            diagnostic.messageText,
          )}`,
        )

        if (blockFile.isOffsetInTemplateGlobals(diagnostic.start)) {
          const range = TemplateGlobals.findLHS(blockFile, diagnostic.start)
          if (range == null) return null

          const references = this.ts.service.getReferencesAtPosition(
            fileName,
            range.start,
          )

          return references?.map((reference) => {
            if (
              reference.fileName === fileName &&
              !blockFile.isOffsetInIgonredZone(reference.textSpan.start)
            ) {
              return this.normalizeTSDiagnostic({
                ...diagnostic,
                ...reference.textSpan,
              })
            }
            return null
          })
        }

        if (blockFile.isOffsetInIgonredZone(diagnostic.start)) {
          this.logger.debug(
            `Ignoring ${diagnostic.code} at ${diagnostic.start} because it's in ignored zone`,
          )
          return null
        }

        return this.normalizeTSDiagnostic(diagnostic)
      })
      .filter(isNotNull)
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

    this.logger.debug(
      `Transform ${diagnostic.range.start.line}:${
        diagnostic.range.start.character
      } -> ${String(range.start)}: ${diagnostic.message}`,
    )

    return {
      source: this.getSourceName(diagnostic.source),
      messageText: diagnostic.message,
      category: this.#SEVERITY_TO_TS_CATEGORY[diagnostic.severity ?? 1],
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

  private errorAsTSDiagnostic(
    fileName: string,
    error: Error,
  ): Typescript.Diagnostic {
    const range = { start: 0, length: 1 }
    const sourceFile = this.ts.getSourceFile(fileName) ?? undefined

    return {
      source: this.getSourceName(),
      messageText: error.message,
      category: this.#SEVERITY_TO_TS_CATEGORY[1],
      code: 0,
      reportsUnnecessary: false,
      reportsDeprecated: false,
      file: sourceFile,
      start: range.start,
      length: range.length,
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
            length: Math.max(1, node.loc.end.offset - node.loc.start.offset),
          }
        : { start: undefined, length: undefined },
    )
  }

  private toDisplayMessage(
    message: string | Typescript.DiagnosticMessageChain,
  ): string {
    if (typeof message === 'string') return message

    return this.ts.lib.flattenDiagnosticMessageText(message, '\n')
  }

  private lastSourceFile: [string, Typescript.SourceFile] | null = null

  private getSourceFile(fileName: string): Typescript.SourceFile {
    if (this.lastSourceFile?.[0] === fileName) return this.lastSourceFile[1]

    let sourceFile: Typescript.SourceFile | null = null

    if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)
      const file = this.ts.getSourceFile(realFileName)

      if (file != null) {
        sourceFile = {
          fileName,
          text: file.getFullText(),
        } as any
      }
    } else if (
      this.fs.isVueFile(fileName) ||
      this.fs.isVueVirtualFile(fileName) ||
      this.fs.isVueTsFile(fileName)
    ) {
      sourceFile = this.fs.getVueFile(fileName) as any // VueSFCFile implements minimal required syntax.
    }

    this.lastSourceFile = [
      fileName,
      sourceFile ?? ({ fileName, text: '' } as any),
    ]

    return this.lastSourceFile[1]
  }

  private normalizeTSDiagnostic(
    diagnostic: Typescript.Diagnostic,
    options: NormalizeOptions = {},
  ): Typescript.Diagnostic {
    const file = diagnostic.file
    diagnostic = { ...diagnostic }
    if (diagnostic.relatedInformation != null) {
      diagnostic.relatedInformation = diagnostic.relatedInformation.map(
        (diagnostic) => {
          if (diagnostic.file == null) {
            diagnostic.file = file
          }

          return this.normalizeTSDiagnosticRelatedInformation(
            diagnostic,
            options,
          )
        },
      )
    }

    // Serve virtual files.
    if (options.isVueSchemeFile === true) {
      diagnostic.source = this.getSourceName(diagnostic.source ?? 'TS')
      if (options.expectedFileName != null) {
        diagnostic.file = this.getSourceFile(options.expectedFileName)
      }

      return diagnostic
    }

    const fileName = diagnostic.file?.fileName

    if (options.expectedFileName != null) {
      diagnostic.file = this.getSourceFile(options.expectedFileName)
    }

    if (fileName == null) {
      return diagnostic
    }

    if (this.fs.isVueVirtualFile(fileName)) {
      const range = this.fs.getAbsoluteOffsets(
        this.fs.getVueFile(fileName)?.getDocById(fileName) ?? undefined,
        diagnostic,
      )

      diagnostic.source = this.getSourceName(diagnostic.source ?? 'TS')
      diagnostic.file = this.getSourceFile(options.expectedFileName ?? fileName)
      diagnostic.start = range.start
      diagnostic.length = range.length
    } else if (this.fs.isVueFile(fileName) || this.fs.isVueTsFile(fileName)) {
      diagnostic.source = this.getSourceName(diagnostic.source ?? 'TS')
      diagnostic.file = this.getSourceFile(options.expectedFileName ?? fileName)
    }

    return diagnostic
  }

  private normalizeTSDiagnosticRelatedInformation(
    diagnostic: Typescript.DiagnosticRelatedInformation,
    options: NormalizeOptions = {},
  ): Typescript.DiagnosticRelatedInformation {
    if (diagnostic.file == null) return diagnostic

    return this.normalizeTSDiagnostic(diagnostic, options)
  }

  private getSourceName(source?: string): string {
    if (source == null) return 'VueDX/Unknown'
    else if (source.startsWith('VueDX')) return source
    else return `VueDX/${source}`
  }
}
