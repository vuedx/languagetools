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
import { INJECTABLE_TS_SERVICE } from '../constants'
import type { TSLanguageService } from '../contracts/Typescript'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService } from '../services/LoggerService'
import { TypescriptService } from '../services/TypescriptService'
import { ScriptSetupDiagnosticsProvider } from './diagnostics/ScriptSetupDiagnosticsProvider'
import { TemplateGlobals } from './helpers'

@injectable()
export class DiagnosticsService {
  private readonly logger = LoggerService.getLogger('Diagnostics')
  private readonly caches = {
    semantic: new CacheService<Typescript.Diagnostic[]>((fileName) =>
      this.getVersion(fileName),
    ),
    syntax: new CacheService<Typescript.DiagnosticWithLocation[]>((fileName) =>
      this.getVersion(fileName),
    ),
    suggestion: new CacheService<Typescript.DiagnosticWithLocation[]>(
      (fileName) => this.getVersion(fileName),
    ),
    extra: new CacheService<Typescript.Diagnostic[]>((fileName) =>
      this.getVersion(fileName),
    ),
    all: new CacheService<Diagnostic[]>((fileName) =>
      this.getVersion(fileName),
    ),
  }

  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(LanguageServiceProvider)
    private readonly lang: LanguageServiceProvider,
    @inject(INJECTABLE_TS_SERVICE)
    private readonly service: TSLanguageService,
    @inject(ScriptSetupDiagnosticsProvider)
    private readonly scriptSetup: ScriptSetupDiagnosticsProvider,
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

  private getVersion(fileName: string): string {
    return (
      this.ts
        .getProjectFor(fileName)
        ?.getScriptInfo(fileName)
        ?.getLatestVersion() ?? '0'
    )
  }

  public getDiagnostics(fileName: string): Diagnostic[] {
    return this.caches.all.withCache(fileName, (prevResult) => {
      if (prevResult != null) return prevResult

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
    })
  }

  public getExtraDiagnostics(fileName: string): Typescript.Diagnostic[] {
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
          ...this.normalizeVirtualFileDiagnostics(
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
    return this.caches.semantic.withCache(fileName, (result) => {
      if (result != null) return result

      this.logger.debug(`SemanticDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName) => {
        this.logger.debug(`SemanticDiagnonstics in ${fileName}`)
        return this.service.getSemanticDiagnostics(fileName)
      })
    })
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.caches.syntax.withCache(fileName, (result) => {
      if (result != null) return result
      this.logger.debug(`SyntacticcDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName) => {
        this.logger.debug(`SyntacticcDiagnonstics in ${fileName}`)
        return this.service.getSyntacticDiagnostics(fileName)
      }) as Typescript.DiagnosticWithLocation[]
    })
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.caches.suggestion.withCache(fileName, (result) => {
      if (result != null) return result
      this.logger.debug(`SuggestionDiagnonstics in ${fileName}`)
      return this.getDiagnosticsFromTS(fileName, (fileName) => {
        this.logger.debug(`SuggestionDiagnonstics in ${fileName}`)
        return this.service.getSuggestionDiagnostics(fileName)
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
        severity: this.NAMED_SEVERITY_TO_SEVERITY['error'],
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
      if (vueFile == null) {
        this.logger.debug(`File not found: ${fileName}`)
        return []
      }
      const diagnostics: Typescript.Diagnostic[] = []
      this.logger.debug(
        `${vueFile.version} = ${vueFile.fileName}`,
        vueFile.getActiveTSDocIDs(),
      )
      vueFile.getActiveTSDocIDs().forEach((id) => {
        try {
          diagnostics.push(
            ...this.normalizeVirtualFileDiagnostics(id, getter(id)),
          )
        } catch (error) {
          // Ignore for now.
          this.logger.error(error)
        }
      })

      return diagnostics
    } else if (this.fs.isVueVirtualSchemeFile(fileName)) {
      const filePath = this.fs.removeVirtualFileScheme(fileName)

      return getter(filePath).map((diagnostic) =>
        this.normalizeTSDiagnostic(diagnostic),
      )
    } else {
      return getter(fileName).map((diagnostic) =>
        this.normalizeTSDiagnostic(diagnostic, fileName),
      )
    }
  }

  private normalizeVirtualFileDiagnostics(
    fileName: string,
    diagnostics: Typescript.Diagnostic[],
  ): Typescript.Diagnostic[] {
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return []

    const blockFile = vueFile.getDocById(fileName)
    if (blockFile == null) return []

    const tsFile = blockFile.generated
    if (tsFile == null) return []

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

          const references = this.service.getReferencesAtPosition(
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
            `Ignoring ${diagnostic.code} at ${diagnostic.start}`,
          )
          return null
        }

        return this.normalizeTSDiagnostic(diagnostic)
      })
      .filter(isNotNull)
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
      source: this.getSourceName(diagnostic.source),
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
            length: Math.max(1, node.loc.end.offset - node.loc.start.offset),
          }
        : { start: undefined, length: undefined },
    )
  }

  public toDisplayMessage(
    message: string | Typescript.DiagnosticMessageChain,
  ): string {
    if (typeof message === 'string') return message

    return this.ts.lib.flattenDiagnosticMessageText(message, '\n')
  }

  private lastSourceFile: [string, Typescript.SourceFile] | null = null

  private getSourceFile(fileName: string): Typescript.SourceFile {
    if (this.lastSourceFile?.[0] === fileName) return this.lastSourceFile[1]

    let sourceFile: Typescript.SourceFile | null = null
    if (
      this.fs.isVueFile(fileName) ||
      this.fs.isVueVirtualFile(fileName) ||
      this.fs.isVueTsFile(fileName)
    ) {
      sourceFile = this.fs.getVueFile(fileName) as any // VueSFCFile implements minimal required syntax.
    } else if (this.fs.isVueVirtualSchemeFile(fileName)) {
      const file = this.ts.getSourceFile(
        this.fs.removeVirtualFileScheme(fileName),
      )
      if (file != null) {
        sourceFile = {
          fileName,
          text: file.getFullText(),
        } as any
      }
    }

    this.lastSourceFile = [
      fileName,
      sourceFile ?? ({ fileName, text: '' } as any),
    ]

    return this.lastSourceFile[1]
  }

  private normalizeTSDiagnostic(
    diagnostic: Typescript.Diagnostic,
    /**
     * Only pass to force file on normalized diagnostics.
     */
    expectedFileName?: string,
  ): Typescript.Diagnostic {
    const file = diagnostic.file
    diagnostic = { ...diagnostic }
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

    // Serve virtual files.
    if (
      expectedFileName != null &&
      this.fs.isVueVirtualSchemeFile(expectedFileName)
    ) {
      diagnostic.source = this.getSourceName(diagnostic.source ?? 'TS')
      diagnostic.file = this.getSourceFile(expectedFileName)
      return diagnostic
    }

    const fileName = diagnostic.file?.fileName

    if (expectedFileName != null) {
      diagnostic.file = this.getSourceFile(expectedFileName)
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
      diagnostic.file = this.getSourceFile(expectedFileName ?? fileName)
      diagnostic.start = range.start
      diagnostic.length = range.length
    } else if (this.fs.isVueFile(fileName) || this.fs.isVueTsFile(fileName)) {
      diagnostic.source = this.getSourceName(diagnostic.source ?? 'TS')
      diagnostic.file = this.getSourceFile(expectedFileName ?? fileName)
    }

    return diagnostic
  }

  private normalizeTSDiagnosticRelatedInformation(
    diagnostic: Typescript.DiagnosticRelatedInformation,
  ): Typescript.DiagnosticRelatedInformation {
    if (diagnostic.file == null) return diagnostic

    return this.normalizeTSDiagnostic(diagnostic)
  }

  private getSourceName(source?: string): string {
    if (source == null) return 'VueDX/Unknown'
    else if (source.startsWith('VueDX')) return source
    else return `VueDX/${source}`
  }
}
