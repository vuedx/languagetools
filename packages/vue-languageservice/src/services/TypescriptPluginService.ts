import { cache, debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type {
  ExtendedTSLanguageService,
  TypeScript,
} from '../contracts/TypeScript'
import { CodeFixService } from '../features/CodeFixService'
import { CompletionsService } from '../features/CompletionsService'
import {
  CssLanguageService,
  LessLanguageService,
  ScssLanguageService,
} from '../features/CssLanguageService'
import { DefinitionService } from '../features/DefinitionService'
import { DiagnosticsService } from '../features/DiagnosticsService'
import { FoldingRangeService } from '../features/FoldingRangeService'
import {
  VueHtmlLanguageService,
  VueSfcLanguageService,
} from '../features/HtmlLanguageService'
import { ImplementationService } from '../features/ImplementationService'
import { QuickInfoService } from '../features/QuickInfoService'
import { RefactorService } from '../features/RefactorService'
import { ReferencesService } from '../features/ReferencesService'
import { RenameService } from '../features/RenameService'
import { SignatureHelpService } from '../features/SignatureHelpService'
import { EncodedClassificationsService } from './EncodedClassificationsService'
import { FilesystemService } from './FilesystemService'
import { IPCService } from './IPCService'
import { LanguageServiceProvider } from './LanguageServiceProvider'
import { LoggerService } from './LoggerService'
import { TypescriptContextService } from './TypescriptContextService'

@injectable()
export class TypescriptPluginService
  implements Partial<ExtendedTSLanguageService>
{
  //#region setup
  private readonly logger = LoggerService.getLogger(
    TypescriptPluginService.name,
  )

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(DiagnosticsService)
    private readonly diagnostics: DiagnosticsService,
    @inject(QuickInfoService)
    private readonly quickInfo: QuickInfoService,
    @inject(DefinitionService)
    private readonly definitions: DefinitionService,
    @inject(CompletionsService)
    private readonly completions: CompletionsService,
    @inject(ReferencesService)
    private readonly references: ReferencesService,
    @inject(RenameService)
    private readonly rename: RenameService,
    @inject(EncodedClassificationsService)
    private readonly classifications: EncodedClassificationsService,
    @inject(CodeFixService)
    private readonly codeFix: CodeFixService,
    @inject(RefactorService)
    private readonly refactor: RefactorService,
    @inject(FoldingRangeService)
    private readonly folding: FoldingRangeService,
    @inject(SignatureHelpService)
    private readonly signature: SignatureHelpService,
    @inject(ImplementationService)
    private readonly implementation: ImplementationService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(IPCService)
    private readonly ipc: IPCService,
    @inject(LanguageServiceProvider)
    private readonly languages: LanguageServiceProvider,
    @inject(CssLanguageService)
    css: CssLanguageService,
    @inject(ScssLanguageService)
    scss: ScssLanguageService,
    @inject(LessLanguageService)
    less: LessLanguageService,
    @inject(VueHtmlLanguageService)
    html: VueHtmlLanguageService,
    @inject(VueSfcLanguageService)
    sfc: VueSfcLanguageService,
  ) {
    ;[css, scss, less, html, sfc].forEach((service) => {
      service.supportedLanguages.forEach((language) => {
        this.languages.registerLanguageService(language, service)
      })
    })

    if (Math.random() > 1) {
      console.log([
        this.classifications,
        this.codeFix,
        this.completions,
        this.definitions,
        this.folding,
        this.implementation,
        this.quickInfo,
        this.refactor,
        this.references,
        this.rename,
        this.signature,
      ])
    }
  }
  //#endregion

  //#region fs
  #isVueProject = true
  public get isVueProject(): boolean {
    return this.#isVueProject
  }

  @cache((_args, { ts }: TypescriptPluginService) => {
    ts.project.getLanguageService(true) // triggers updateGraph if project is dirty
    return ts.project.getProjectVersion()
  })
  public getExternalFiles(): string[] {
    const allFileNames: string[] = this.ts.project.getFileNames(true, true)
    const vueFileNames = new Set<string>()
    const virtualFileNames = new Set<string>()
    const isTypeScript = !this.ts.project.isJsOnlyProject()

    if (this.ts.isConfiguredProject(this.ts.project)) {
      const options = this.ts.project.getParsedCommandLine?.(
        this.ts.project.getConfigFilePath(),
      )

      if (options != null) allFileNames.push(...options.fileNames)
    }

    for (const fileName of allFileNames) {
      if (this.fs.isVueFile(fileName)) {
        vueFileNames.add(fileName)
      } else if (this.fs.isGeneratedVueFile(fileName)) {
        vueFileNames.add(this.fs.getRealFileNameIfAny(fileName))
        virtualFileNames.add(fileName)
      } else if (this.fs.isProjectRuntimeFile(fileName)) {
        virtualFileNames.add(fileName)
      }
    }

    const ext = isTypeScript ? 'tsx' : 'jsx'
    vueFileNames.forEach((fileName) => {
      if (!this.ts.serverHost.fileExists(fileName)) return
      const generatedFileName = `${fileName}.${ext}`

      this.ts.ensureProject(fileName)
      this.ts.ensureProject(generatedFileName)

      virtualFileNames.add(generatedFileName)
      virtualFileNames.add(this.ts.getProjectRuntimeFileNameFor(fileName))
    })

    if (vueFileNames.size === 0) {
      this.#isVueProject = false
      return [] // do not retain any files if no .vue files
    }

    this.#isVueProject = true
    const fileNames = Array.from(vueFileNames).concat(
      Array.from(virtualFileNames),
    )

    this.logger.debug(`External files:`, fileNames)
    this.logger.debug('Open files:', this.ts.projectService.openFiles)

    return fileNames
  }

  public toLineColumnOffset(
    fileName: string,
    position: number,
  ): TypeScript.LineAndCharacter {
    if (this.fs.isGeneratedVueFile(fileName)) {
      const file = this.fs.getVueFile(fileName)
      if (file != null) {
        const originalPosition = file.findOriginalTextSpan({
          start: position,
          length: 1,
        })
        if (originalPosition != null) {
          return file.original.positionAt(originalPosition.start)
        }
      }
    }

    if (this.ts.service.toLineColumnOffset == null) {
      return { line: 0, character: position }
    }

    return this.ts.service.toLineColumnOffset(fileName, position)
  }
  //#endregion

  //#region diagnostics
  public getCompilerOptionsDiagnostics(): TypeScript.Diagnostic[] {
    return this.diagnostics.getCompilerOptionsDiagnostics()
  }

  public getSemanticDiagnostics(fileName: string): TypeScript.Diagnostic[] {
    return this.pick(
      fileName,
      () => this.diagnostics.getSemanticDiagnostics(fileName),
      () =>
        this.ts.service
          .getSemanticDiagnostics(fileName)
          .flatMap((diagnostic) =>
            this.diagnostics.processDiagnostic(diagnostic),
          ),
    )
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.pick(
      fileName,
      () => [
        ...this.diagnostics.getSyntacticDiagnostics(fileName),
        ...this.diagnostics.getVueCompilerDiagnostic(fileName),
      ],
      () =>
        this.ts.service
          .getSyntacticDiagnostics(fileName)
          .flatMap((diagnostic) =>
            this.diagnostics.processDiagnostic(diagnostic),
          ),
    )
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.pick(
      fileName,
      () => this.diagnostics.getSuggestionDiagnostics(fileName),
      () =>
        this.ts.service
          .getSuggestionDiagnostics(fileName)
          .flatMap((diagnostic) =>
            this.diagnostics.processDiagnostic(diagnostic),
          ),
    )
  }
  //#endregion

  //#region definitions
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    return this.pick(
      fileName,
      () => this.definitions.getDefinitionAtPosition(fileName, position),
      () =>
        this.ts.service
          .getDefinitionAtPosition(fileName, position)
          ?.flatMap((definition) =>
            this.definitions.processDefinitionInfo(definition),
          ),
    )
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    return this.pick(
      fileName,
      () => this.definitions.getTypeDefinitionAtPosition(fileName, position),
      () =>
        this.ts.service
          .getTypeDefinitionAtPosition(fileName, position)
          ?.flatMap((definition) =>
            this.definitions.processDefinitionInfo(definition),
          ),
    )
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    return this.pick(
      fileName,
      () => this.definitions.getDefinitionAndBoundSpan(fileName, position),
      () => {
        const result = this.ts.service.getDefinitionAndBoundSpan(
          fileName,
          position,
        )
        if (result == null) return
        return {
          ...result,
          definitions: result.definitions?.flatMap((definition) =>
            this.definitions.processDefinitionInfo(definition),
          ),
        }
      },
    )
  }
  //#endregion

  //#region quickInfo
  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.QuickInfo | undefined {
    return this.pick(
      fileName,
      () => this.quickInfo.getQuickInfoAtPosition(fileName, position),
      () => this.ts.service.getQuickInfoAtPosition(fileName, position),
    )
  }
  //#endregion

  //#region completions
  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getCompletionsAtPosition(fileName, position, options)
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions:
      | TypeScript.FormatCodeOptions
      | TypeScript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: TypeScript.UserPreferences | undefined,
    data: TypeScript.CompletionEntryData | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
      data,
    )
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getCompletionEntrySymbol(
      fileName,
      position,
      name,
      source,
    )
  }

  public getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: TypeScript.DocCommentTemplateOptions,
  ): TypeScript.TextInsertion | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getDocCommentTemplateAtPosition(
      fileName,
      position,
      options,
    )
  }

  public getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.JsxClosingTagInfo | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getJsxClosingTagAtPosition(fileName, position)
  }
  //#endregion

  //#region classifications
  public getEncodedSyntacticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
  ): TypeScript.Classifications {
    if (this.fs.isVueFile(fileName)) return { spans: [], endOfLineState: 0 }
    return this.ts.service.getEncodedSyntacticClassifications(fileName, span)
  }

  public getEncodedSemanticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
    format?: TypeScript.SemanticClassificationFormat,
  ): TypeScript.Classifications {
    if (this.fs.isVueFile(fileName)) return { spans: [], endOfLineState: 0 }
    return this.ts.service.getEncodedSemanticClassifications(
      fileName,
      span,
      format,
    )
  }
  //#endregion

  //#region references
  public getReferencesAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.ReferenceEntry[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getReferencesAtPosition(fileName, position)
  }

  @debug()
  public findReferences(
    fileName: string,
    position: number,
  ): TypeScript.ReferencedSymbol[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.findReferences(fileName, position)
  }

  public getFileReferences(fileName: string): TypeScript.ReferenceEntry[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFileReferences(fileName)
  }
  //#endregion

  //#region implementation
  public getImplementationAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.ImplementationLocation[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getImplementationAtPosition(fileName, position)
  }
  //#endregion

  //#region TODO: refactor
  public getApplicableRefactors(
    fileName: string,
    positionOrRange: number | TypeScript.TextRange,
    preferences: TypeScript.UserPreferences | undefined,
    triggerReason?: TypeScript.RefactorTriggerReason,
    kind?: string,
  ): TypeScript.ApplicableRefactorInfo[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getApplicableRefactors(
      fileName,
      positionOrRange,
      preferences,
      triggerReason,
      kind,
    )
  }

  public getEditsForRefactor(
    fileName: string,
    formatOptions: TypeScript.FormatCodeSettings,
    positionOrRange: number | TypeScript.TextRange,
    refactorName: string,
    actionName: string,
    preferences: TypeScript.UserPreferences | undefined,
  ): TypeScript.RefactorEditInfo | undefined {
    if (this.fs.isVueFile(fileName)) return

    return this.ts.service.getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences,
    )
  }

  public organizeImports(
    args: TypeScript.OrganizeImportsArgs,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    if (this.fs.isVueFile(args.fileName)) return []
    return this.ts.service.organizeImports(args, formatOptions, preferences)
  }

  public toggleLineComment(
    fileName: string,
    textRange: TypeScript.TextRange,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.toggleLineComment(fileName, textRange)
  }

  public toggleMultilineComment(
    fileName: string,
    textRange: TypeScript.TextRange,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.toggleMultilineComment(fileName, textRange)
  }

  public commentSelection(
    fileName: string,
    textRange: TypeScript.TextRange,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.commentSelection(fileName, textRange)
  }

  public uncommentSelection(
    fileName: string,
    textRange: TypeScript.TextRange,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.uncommentSelection(fileName, textRange)
  }
  //#endregion

  //#region rename
  public getRenameInfo(
    fileName: string,
    position: number,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.RenameInfo {
    if (this.fs.isVueFile(fileName)) {
      return {
        canRename: false,
        localizedErrorMessage: 'Cannot rename in .vue files',
      }
    }

    return this.ts.service.getRenameInfo(fileName, position, preferences)
  }

  public findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly TypeScript.RenameLocation[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.findRenameLocations(
      fileName,
      position,
      findInStrings,
      findInComments,
      providePrefixAndSuffixTextForRename,
    )
  }

  public getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    if (this.fs.isVueFile(oldFilePath)) return []
    return this.ts.service.getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences,
    )
  }
  //#endregion

  //#region codefix
  public getCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): readonly TypeScript.CodeFixAction[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getCodeFixesAtPosition(
      fileName,
      start,
      end,
      errorCodes,
      formatOptions,
      preferences,
    )
  }

  public getCombinedCodeFix(
    scope: TypeScript.CombinedCodeFixScope,
    fixId: {},
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.CombinedCodeActions {
    if (this.fs.isVueFile(scope.fileName)) return { changes: [] }
    return this.ts.service.getCombinedCodeFix(
      scope,
      fixId,
      formatOptions,
      preferences,
    )
  }
  //#endregion

  //#region folding
  public getOutliningSpans(fileName: string): TypeScript.OutliningSpan[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getOutliningSpans(fileName)
  }
  //#endregion

  //#region formatting
  public getFormattingEditsAfterKeystroke(
    fileName: string,
    position: number,
    key: string,
    options: TypeScript.FormatCodeOptions | TypeScript.FormatCodeSettings,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []

    return this.ts.service.getFormattingEditsAfterKeystroke(
      fileName,
      position,
      key,
      options,
    )
  }

  public getFormattingEditsForDocument(
    fileName: string,
    options: TypeScript.FormatCodeOptions | TypeScript.FormatCodeSettings,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFormattingEditsForDocument(fileName, options)
  }

  public getFormattingEditsForRange(
    fileName: string,
    start: number,
    end: number,
    options: TypeScript.FormatCodeOptions | TypeScript.FormatCodeSettings,
  ): TypeScript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFormattingEditsForRange(
      fileName,
      start,
      end,
      options,
    )
  }
  //#endregion

  //#region signature help
  public getSignatureHelpItems(
    fileName: string,
    position: number,
    options: TypeScript.SignatureHelpItemsOptions,
  ): TypeScript.SignatureHelpItems | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getSignatureHelpItems(fileName, position, options)
  }

  public prepareCallHierarchy(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyItem | TypeScript.CallHierarchyItem[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.prepareCallHierarchy(fileName, position)
  }

  public provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyIncomingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyIncomingCalls(fileName, position)
  }

  public provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyOutgoingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyOutgoingCalls(fileName, position)
  }

  public getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.TextSpan[] {
    return this.ts.service.getBraceMatchingAtPosition(fileName, position)
  }

  public isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    if (this.fs.isVueFile(fileName)) return false
    return this.ts.service.isValidBraceCompletionAtPosition(
      fileName,
      position,
      openingBrace,
    )
  }

  public getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number,
  ): TypeScript.TextSpan | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
  }
  //#endregion

  public getDocumentHighlights(
    fileName: string,
    position: number,
    filesToSearch: string[],
  ): TypeScript.DocumentHighlights[] | undefined {
    if (this.fs.isVueFile(fileName)) return []

    return this.ts.service.getDocumentHighlights(
      fileName,
      position,
      filesToSearch,
    )
  }

  public getEmitOutput(
    fileName: string,
    emitOnlyDtsFiles?: boolean,
    forceDtsEmit?: boolean,
  ): TypeScript.EmitOutput {
    if (this.fs.isVueFile(fileName)) {
      return { outputFiles: [], emitSkipped: true }
    }

    return this.ts.service.getEmitOutput(
      fileName,
      emitOnlyDtsFiles,
      forceDtsEmit,
    )
  }

  public getIndentationAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.EditorOptions | TypeScript.EditorSettings,
  ): number {
    if (this.fs.isVueFile(fileName)) return 0
    return this.ts.service.getIndentationAtPosition(fileName, position, options)
  }

  public getNavigateToItems(
    searchValue: string,
    maxResultCount?: number,
    fileName?: string,
    excludeDtsFiles?: boolean,
  ): TypeScript.NavigateToItem[] {
    return this.ts.service.getNavigateToItems(
      searchValue,
      maxResultCount,
      fileName,
      excludeDtsFiles,
    )
  }

  public getNavigationBarItems(
    fileName: string,
  ): TypeScript.NavigationBarItem[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getNavigationBarItems(fileName)
  }

  public getNavigationTree(fileName: string): TypeScript.NavigationTree {
    if (this.fs.isVueFile(fileName))
      return {
        text: '<component>',
        kind: this.ts.lib.ScriptElementKind.unknown,
        kindModifiers: '',
        spans: [],
        nameSpan: undefined,
      }
    return this.ts.service.getNavigationTree(fileName)
  }

  public getSmartSelectionRange(
    fileName: string,
    position: number,
  ): TypeScript.SelectionRange {
    if (this.fs.isVueFile(fileName)) {
      return { textSpan: { start: position, length: 1 } }
    }
    return this.ts.service.getSmartSelectionRange(fileName, position)
  }

  public getSpanOfEnclosingComment(
    fileName: string,
    position: number,
    onlyMultiLine: boolean,
  ): TypeScript.TextSpan | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getSpanOfEnclosingComment(
      fileName,
      position,
      onlyMultiLine,
    )
  }

  public getTodoComments(
    fileName: string,
    descriptors: TypeScript.TodoCommentDescriptor[],
  ): TypeScript.TodoComment[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getTodoComments(fileName, descriptors)
  }

  public dispose(): void {
    this.ipc.dispose()
    this.ts.service.dispose()
  }

  private pick<R>(
    fileName: string,
    forVueFile: () => R,
    forOtherFiles: () => R,
  ): R {
    if (this.fs.isVueFile(fileName)) return forVueFile()
    else return forOtherFiles()
  }
}
