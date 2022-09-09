import { cache, debug, toFileName } from '@vuedx/shared'
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
    let hasVirtualSchemeFiles = false
    const allFileNames: string[] = this.ts.project.getFileNames(true, true)
    const vueFileNames = new Set<string>()
    const virtualFileNames = new Set<string>()

    if (this.ts.isConfugeredProject(this.ts.project)) {
      const options = this.ts.project.getParsedCommandLine?.(
        this.ts.project.getConfigFilePath(),
      )

      if (options != null) allFileNames.push(...options.fileNames)
    }

    for (const fileName of allFileNames) {
      if (this.fs.isVueSchemeFile(fileName)) {
        const realProject = this.ts.getProjectFor(
          this.fs.getRealFileName(fileName),
        )
        if (realProject != null) {
          this.ts.project.getScriptInfo(fileName)?.attachToProject(realProject)
        }

        hasVirtualSchemeFiles = realProject !== this.ts.project
      } else if (this.fs.isVueFile(fileName)) {
        vueFileNames.add(this.fs.getRealFileName(fileName))
      } else if (this.fs.isVueTsFile(fileName)) {
        vueFileNames.add(this.fs.getRealFileName(fileName))
        // virtualFileNames.add(fileName)
      } else if (this.fs.isProjectRuntimeFile(fileName)) {
        virtualFileNames.add(fileName)
      }
    }

    if (this.ts.isInferredProject(this.ts.project) && hasVirtualSchemeFiles) {
      this.#isVueProject = false
      return [] // do not retain any files for inferred projects containing virtual scheme files
    }

    vueFileNames.forEach((fileName) => {
      if (!this.ts.serverHost.fileExists(fileName)) return
      const tsFileName = toFileName({ type: 'vue-tsx', fileName })

      this.ts.ensureProject(fileName)
      this.ts.ensureProject(tsFileName)

      virtualFileNames.add(tsFileName)
      virtualFileNames.add(this.ts.getProjectRuntimeFileName(fileName))
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
    if (this.fs.isVueSchemeFile(fileName)) {
      fileName = this.fs.getRealFileName(fileName)

      return (
        this.fs.getFile(fileName)?.positionAt(position) ?? {
          line: 0,
          character: position,
        }
      )
    }

    return (
      this.ts.service.toLineColumnOffset?.(fileName, position) ?? {
        line: 0,
        character: position,
      }
    )
  }
  //#endregion

  //#region diagnotics
  public getCompilerOptionsDiagnostics(): TypeScript.Diagnostic[] {
    return this.diagnostics.getCompilerOptionsDiagnostics()
  }

  public getSemanticDiagnostics(fileName: string): TypeScript.Diagnostic[] {
    return this.diagnostics.getSemanticDiagnostics(fileName)
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.diagnostics.getSyntacticDiagnostics(fileName)
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): TypeScript.DiagnosticWithLocation[] {
    return this.diagnostics.getSuggestionDiagnostics(fileName)
  }
  //#endregion

  //#region definitions
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    return this.definitions.getDefinitionAtPosition(fileName, position)
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    return this.definitions.getTypeDefinitionAtPosition(fileName, position)
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    return this.definitions.getDefinitionAndBoundSpan(fileName, position)
  }
  //#endregion

  //#region quickInfo
  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.QuickInfo | undefined {
    return this.quickInfo.getQuickInfoAtPosition(fileName, position)
  }
  //#endregion

  //#region completions
  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    return this.completions.getCompletionsAtPosition(
      fileName,
      position,
      options,
    )
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

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    return this.completions.getCompletionEntrySymbol(
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
    return this.completions.getDocCommentTemplateAtPosition(
      fileName,
      position,
      options,
    )
  }

  public getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.JsxClosingTagInfo | undefined {
    return this.completions.getJsxClosingTagAtPosition(fileName, position)
  }
  //#endregion

  //#region classifications
  public getEncodedSyntacticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
  ): TypeScript.Classifications {
    return this.classifications.getEncodedSyntacticClassifications(
      fileName,
      span,
    )
  }

  public getEncodedSemanticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
    format?: TypeScript.SemanticClassificationFormat,
  ): TypeScript.Classifications {
    return this.classifications.getEncodedSemanticClassifications(
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
    return this.references.getReferencesAtPosition(fileName, position)
  }

  @debug()
  public findReferences(
    fileName: string,
    position: number,
  ): TypeScript.ReferencedSymbol[] | undefined {
    return this.references.findReferences(fileName, position)
  }

  public getFileReferences(fileName: string): TypeScript.ReferenceEntry[] {
    return this.references.getFileReferences(fileName)
  }
  //#endregion

  //#region implementation
  public getImplementationAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.ImplementationLocation[] | undefined {
    return this.implementation.getImplementationAtPosition(fileName, position)
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
    return this.refactor.organizeImports(args, formatOptions, preferences)
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
    options?: TypeScript.RenameInfoOptions,
  ): TypeScript.RenameInfo {
    return this.rename.getRenameInfo(fileName, position, options)
  }

  public findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly TypeScript.RenameLocation[] | undefined {
    return this.rename.findRenameLocations(
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
    return this.rename.getEditsForFileRename(
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
    return this.codeFix.getCodeFixesAtPosition(
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
    return this.codeFix.getCombinedCodeFix(
      scope,
      fixId,
      formatOptions,
      preferences,
    )
  }
  //#endregion

  //#region folding
  public getOutliningSpans(fileName: string): TypeScript.OutliningSpan[] {
    return this.folding.getOutliningSpans(fileName)
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
    return this.signature.getSignatureHelpItems(fileName, position, options)
  }

  public prepareCallHierarchy(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyItem | TypeScript.CallHierarchyItem[] | undefined {
    return this.signature.prepareCallHierarchy(fileName, position)
  }

  public provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyIncomingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.signature.provideCallHierarchyIncomingCalls(fileName, position)
  }

  public provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyOutgoingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.signature.provideCallHierarchyOutgoingCalls(fileName, position)
  }

  public getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.TextSpan[] {
    return this.signature.getBraceMatchingAtPosition(fileName, position)
  }

  public isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    return this.signature.isValidBraceCompletionAtPosition(
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
    return this.signature.getNameOrDottedNameSpan(fileName, startPos, endPos)
  }
  //#endregion

  public getDocumentHighlights(
    fileName: string,
    position: number,
    filesToSearch: string[],
  ): TypeScript.DocumentHighlights[] | undefined {
    if (this.fs.isVueFile(fileName)) return []
    if (this.fs.isVueSchemeFile(fileName)) return []

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
    if (
      this.fs.isVueFile(fileName) ||
      this.fs.isVueSchemeFile(fileName) ||
      this.fs.isVueRuntimeFile(fileName) ||
      this.fs.isProjectRuntimeFile(fileName)
    ) {
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
}
