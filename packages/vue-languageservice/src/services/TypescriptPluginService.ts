import { toFileName } from '@vuedx/shared'
import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type {
  ExtendedTSLanguageService,
  TSProject,
  Typescript,
} from '../contracts/Typescript'
import { CompletionsService } from '../features/CompletionsService'
import { DiagnosticsService } from '../features/DiagnosticsService'
import { DefinitionService } from '../features/DefinitionService'
import { QuickInfoService } from '../features/QuickInfoService'
import { FilesystemService } from './FilesystemService'
import { IPCService } from './IPCService'
import { LoggerService } from './LoggerService'
import { TypescriptContextService } from './TypescriptContextService'
import { CssLanguageService } from '../features/CssLanguageService'
import { LanguageServiceProvider } from './LanguageServiceProvider'
import { HtmlLanguageService } from '../features/HtmlLanguageService'

@injectable()
export class TypescriptPluginService
  implements Partial<ExtendedTSLanguageService> {
  private readonly logger = LoggerService.getLogger('TSPluginService')

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
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(IPCService)
    private readonly ipc: IPCService,
    @inject(LanguageServiceProvider)
    private readonly languages: LanguageServiceProvider,
    @inject(CssLanguageService)
    private readonly css: CssLanguageService,
    @inject(HtmlLanguageService)
    private readonly html: HtmlLanguageService,
  ) {
    this.css.supportedLanguages.forEach((language) => {
      this.languages.registerLanguageService(language, this.css)
    })
    this.html.supportedLanguages.forEach((language) => {
      this.languages.registerLanguageService(language, this.html)
    })
  }

  public getExternalFiles(project: TSProject): string[] {
    let hasVirtualSchemeFiles = false

    const allFileNames = project.getFileNames(true, true)
    const vueFileNames = new Set<string>()
    const virtualFileNames = new Set<string>()

    for (const fileName of allFileNames) {
      if (this.fs.isVueSchemeFile(fileName)) {
        const realProject = this.ts.getProjectFor(
          this.fs.getRealFileName(fileName),
        )
        if (realProject != null) {
          project.getScriptInfo(fileName)?.attachToProject(realProject)
        }

        hasVirtualSchemeFiles = realProject !== project
      } else if (this.fs.isVueFile(fileName)) {
        vueFileNames.add(this.fs.getRealFileName(fileName))
      } else if (
        this.fs.isVueTsFile(fileName) ||
        this.fs.isVueVirtualFile(fileName)
      ) {
        vueFileNames.add(this.fs.getRealFileName(fileName))
        virtualFileNames.add(fileName)
      } else if (this.fs.isProjectRuntimeFile(fileName)) {
        virtualFileNames.add(fileName)
      }
    }

    if (
      project.projectKind === this.ts.lib.server.ProjectKind.Inferred &&
      hasVirtualSchemeFiles
    ) {
      return [] // do not retain any files for inferred projects containing virtual scheme files
    }

    const ensureProject = (fileName: string): void => {
      if (project.containsFile(this.ts.lib.server.toNormalizedPath(fileName)))
        return // already in project

      const scriptInfo = project.projectService.getOrCreateScriptInfoForNormalizedPath(
        this.ts.lib.server.toNormalizedPath(fileName),
        false,
      )

      if (scriptInfo == null) {
        this.logger.debug('No ScriptInfo for project file:', fileName)
        return
      }

      scriptInfo.attachToProject(project)
    }

    vueFileNames.forEach((fileName) => {
      const tsFileName = toFileName({ type: 'vue-ts', fileName })

      ensureProject(fileName)
      ensureProject(tsFileName)

      this.fs
        .getVueFile(fileName)
        ?.getActiveTSDocIDs()
        .forEach((fileName) => virtualFileNames.add(fileName))

      virtualFileNames.add(tsFileName)
      virtualFileNames.add(this.ts.getProjectRuntimeFileName(fileName))
    })

    const fileNames = Array.from(vueFileNames).concat(
      Array.from(virtualFileNames),
    )

    if (__DEV__) {
      this.logger.debug(
        `getExternalFiles() ${JSON.stringify(
          Object.fromEntries(
            fileNames
              .sort()
              .map((fileName) => [
                fileName,
                this.ts.getSourceFile(fileName) != null,
              ]),
          ),
          null,
          2,
        )}`,
      )

      const known = new Set(allFileNames.map((fileName) => fileName.toString()))

      this.logger.debug(
        'Additional:',
        JSON.stringify(
          fileNames.filter((fileName) => !known.has(fileName)),
          null,
          2,
        ),
      )
    }

    return fileNames
  }

  public toLineColumnOffset(
    fileName: string,
    position: number,
  ): Typescript.LineAndCharacter {
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

  public getCompilerOptionsDiagnostics(): Typescript.Diagnostic[] {
    return this.diagnostics.getCompilerOptionsDiagnostics()
  }

  public getSemanticDiagnostics(fileName: string): Typescript.Diagnostic[] {
    return this.diagnostics.getSemanticDiagnostics(fileName)
  }

  public getSyntacticDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.diagnostics.getSyntacticDiagnostics(fileName)
  }

  public getSuggestionDiagnostics(
    fileName: string,
  ): Typescript.DiagnosticWithLocation[] {
    return this.diagnostics.getSuggestionDiagnostics(fileName)
  }

  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this.definitions.getDefinitionAtPosition(fileName, position)
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this.definitions.getTypeDefinitionAtPosition(fileName, position)
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): Typescript.DefinitionInfoAndBoundSpan | undefined {
    return this.definitions.getDefinitionAndBoundSpan(fileName, position)
  }

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    return this.quickInfo.getQuickInfoAtPosition(fileName, position)
  }

  public getCompletionsAtPosition(
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

  getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): Typescript.Symbol | undefined {
    return this.completions.getCompletionEntrySymbol(
      fileName,
      position,
      name,
      source,
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

  getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: Typescript.DocCommentTemplateOptions,
  ): Typescript.TextInsertion | undefined {
    if (this.fs.isVueFile(fileName)) {
      return whenNotNull(
        this.fs.getVirtualFileAt(fileName, position),
        (fileName, blockFile) => {
          return this.ts.service.getDocCommentTemplateAtPosition(
            fileName,
            blockFile.generatedOffetAt(position),
            options,
          )
        },
      )
    }

    return this.ts.service.getDocCommentTemplateAtPosition(
      fileName,
      position,
      options,
    )
  }

  getApplicableRefactors(
    fileName: string,
    positionOrRange: number | Typescript.TextRange,
    preferences: Typescript.UserPreferences | undefined,
    triggerReason?: Typescript.RefactorTriggerReason,
    kind?: string,
  ): Typescript.ApplicableRefactorInfo[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getApplicableRefactors(
      fileName,
      positionOrRange,
      preferences,
      triggerReason,
      kind,
    )
  }

  getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: Typescript.FormatCodeSettings,
    preferences: Typescript.UserPreferences | undefined,
  ): readonly Typescript.FileTextChanges[] {
    if (this.fs.isVueFile(newFilePath) || this.fs.isVueFile(oldFilePath)) {
      return []
    }

    return this.ts.service.getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences,
    )
  }

  getEditsForRefactor(
    fileName: string,
    formatOptions: Typescript.FormatCodeSettings,
    positionOrRange: number | Typescript.TextRange,
    refactorName: string,
    actionName: string,
    preferences: Typescript.UserPreferences | undefined,
  ): Typescript.RefactorEditInfo | undefined {
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

  getFormattingEditsAfterKeystroke(
    fileName: string,
    position: number,
    key: string,
    options: Typescript.FormatCodeOptions | Typescript.FormatCodeSettings,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []

    return this.ts.service.getFormattingEditsAfterKeystroke(
      fileName,
      position,
      key,
      options,
    )
  }

  getFormattingEditsForDocument(
    fileName: string,
    options: Typescript.FormatCodeOptions | Typescript.FormatCodeSettings,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFormattingEditsForDocument(fileName, options)
  }

  getFormattingEditsForRange(
    fileName: string,
    start: number,
    end: number,
    options: Typescript.FormatCodeOptions | Typescript.FormatCodeSettings,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFormattingEditsForRange(
      fileName,
      start,
      end,
      options,
    )
  }

  getImplementationAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.ImplementationLocation[] | undefined {
    if (this.fs.isVueFile(fileName)) {
      return whenNotNull(
        this.fs.getVirtualFileAt(fileName, position),
        (fileName, blockFile) => {
          return this.ts.service.getImplementationAtPosition(
            fileName,
            blockFile.generatedOffetAt(position),
          )
        },
      )
    }

    return this.ts.service.getImplementationAtPosition(fileName, position)
  }

  // @ts-expect-error - Not implementing deprecated API
  async applyCodeActionCommand(
    action: Typescript.CodeActionCommand | Typescript.CodeActionCommand[],
    formatSettings?: Typescript.FormatCodeSettings,
  ): Promise<
    | Typescript.ApplyCodeActionCommandResult
    | Typescript.ApplyCodeActionCommandResult[]
  > {
    return await this.ts.service.applyCodeActionCommand(action, formatSettings)
  }

  getCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: Typescript.FormatCodeSettings,
    preferences: Typescript.UserPreferences,
  ): readonly Typescript.CodeFixAction[] {
    if (this.fs.isVueFile(fileName)) {
      return (
        whenNotNull(
          this.fs.getVirtualFileAt(fileName, start),
          (fileName, blockFile) => {
            return this.ts.service.getCodeFixesAtPosition(
              fileName,
              blockFile.generatedOffetAt(start),
              blockFile.generatedOffetAt(end),
              errorCodes,
              formatOptions,
              preferences,
            )
          },
        ) ?? []
      )
    }

    return this.ts.service.getCodeFixesAtPosition(
      fileName,
      start,
      end,
      errorCodes,
      formatOptions,
      preferences,
    )
  }

  getCombinedCodeFix(
    scope: Typescript.CombinedCodeFixScope,
    fixId: {},
    formatOptions: Typescript.FormatCodeSettings,
    preferences: Typescript.UserPreferences,
  ): Typescript.CombinedCodeActions {
    if (this.fs.isVueFile(scope.fileName)) {
      return {
        changes: [],
      }
    }

    return this.ts.service.getCombinedCodeFix(
      scope,
      fixId,
      formatOptions,
      preferences,
    )
  }

  cleanupSemanticCache(): void {
    this.ts.service.cleanupSemanticCache()
  }

  findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly Typescript.RenameLocation[] | undefined {
    if (this.fs.isVueFile(fileName)) {
      return whenNotNull(
        this.fs.getVirtualFileAt(fileName, position),
        (fileName, blockFile) => {
          return this.ts.service.findRenameLocations(
            fileName,
            blockFile.generatedOffetAt(position),
            findInStrings,
            findInComments,
            providePrefixAndSuffixTextForRename,
          )
        },
      )
    }

    return this.ts.service.findRenameLocations(
      fileName,
      position,
      findInStrings,
      findInComments,
      providePrefixAndSuffixTextForRename,
    )
  }

  getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): Typescript.TextSpan[] {
    if (this.fs.isVueFile(fileName)) {
      return (
        whenNotNull(
          this.fs.getVirtualFileAt(fileName, position),
          (fileName, blockFile) => {
            return this.ts.service.getBraceMatchingAtPosition(
              fileName,
              blockFile.generatedOffetAt(position),
            )
          },
        ) ?? []
      )
    }

    return this.ts.service.getBraceMatchingAtPosition(fileName, position)
  }

  getBreakpointStatementAtPosition(
    fileName: string,
    position: number,
  ): Typescript.TextSpan | undefined {
    if (this.fs.isVueFile(fileName)) {
      return whenNotNull(
        this.fs.getVirtualFileAt(fileName, position),
        (fileName, blockFile) => {
          return this.ts.service.getBreakpointStatementAtPosition(
            fileName,
            blockFile.generatedOffetAt(position),
          )
        },
      )
    }

    return this.ts.service.getBreakpointStatementAtPosition(fileName, position)
  }

  getDocumentHighlights(
    fileName: string,
    position: number,
    filesToSearch: string[],
  ): Typescript.DocumentHighlights[] | undefined {
    if (this.fs.isVueFile(fileName)) {
      return whenNotNull(
        this.fs.getVirtualFileAt(fileName, position),
        (fileName, blockFile) => {
          if (blockFile.block.type !== 'script') return
          if (this.ts.projectService.getScriptInfo(fileName) == null) return
          return this.ts.service.getDocumentHighlights(
            fileName,
            blockFile.generatedOffetAt(position),
            [fileName, ...filesToSearch],
          )
        },
      )
    }

    if (this.fs.isVueSchemeFile(fileName)) {
      return undefined
    }

    return this.ts.service.getDocumentHighlights(
      fileName,
      position,
      filesToSearch,
    )
  }

  getEmitOutput(
    fileName: string,
    emitOnlyDtsFiles?: boolean,
    forceDtsEmit?: boolean,
  ): Typescript.EmitOutput {
    if (this.fs.isVueFile(fileName)) {
      return { outputFiles: [], emitSkipped: true }
    }

    return this.ts.service.getEmitOutput(
      fileName,
      emitOnlyDtsFiles,
      forceDtsEmit,
    )
  }

  getFileReferences(fileName: string): Typescript.ReferenceEntry[] {
    if (this.fs.isVueFile(fileName)) {
      return this.ts.service.getFileReferences(
        toFileName({ type: 'vue-ts', fileName }),
      )
    }

    return this.ts.service.getFileReferences(fileName)
  }

  getIndentationAtPosition(
    fileName: string,
    position: number,
    options: Typescript.EditorOptions | Typescript.EditorSettings,
  ): number {
    if (this.fs.isVueFile(fileName)) return 0
    return this.ts.service.getIndentationAtPosition(fileName, position, options)
  }

  getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): Typescript.JsxClosingTagInfo | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getJsxClosingTagAtPosition(fileName, position)
  }

  getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number,
  ): Typescript.TextSpan | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
  }

  getNavigateToItems(
    searchValue: string,
    maxResultCount?: number,
    fileName?: string,
    excludeDtsFiles?: boolean,
  ): Typescript.NavigateToItem[] {
    return this.ts.service.getNavigateToItems(
      searchValue,
      maxResultCount,
      fileName,
      excludeDtsFiles,
    )
  }

  getNavigationBarItems(fileName: string): Typescript.NavigationBarItem[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getNavigationBarItems(fileName)
  }

  getNavigationTree(fileName: string): Typescript.NavigationTree {
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

  getReferencesAtPosition(
    fileName: string,
    position: number,
  ): Typescript.ReferenceEntry[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getReferencesAtPosition(fileName, position)
  }

  getRenameInfo(
    fileName: string,
    position: number,
    options?: Typescript.RenameInfoOptions,
  ): Typescript.RenameInfo {
    if (this.fs.isVueFile(fileName)) {
      return {
        canRename: false,
        localizedErrorMessage: 'Renaming in .vue is not supported yet.',
      }
    }
    return this.ts.service.getRenameInfo(fileName, position, options)
  }

  getSignatureHelpItems(
    fileName: string,
    position: number,
    options: Typescript.SignatureHelpItemsOptions,
  ): Typescript.SignatureHelpItems | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getSignatureHelpItems(fileName, position, options)
  }

  getSmartSelectionRange(
    fileName: string,
    position: number,
  ): Typescript.SelectionRange {
    if (this.fs.isVueFile(fileName)) {
      return { textSpan: { start: position, length: 1 } }
    }
    return this.ts.service.getSmartSelectionRange(fileName, position)
  }

  getSpanOfEnclosingComment(
    fileName: string,
    position: number,
    onlyMultiLine: boolean,
  ): Typescript.TextSpan | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getSpanOfEnclosingComment(
      fileName,
      position,
      onlyMultiLine,
    )
  }

  getTodoComments(
    fileName: string,
    descriptors: Typescript.TodoCommentDescriptor[],
  ): Typescript.TodoComment[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getTodoComments(fileName, descriptors)
  }

  isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    if (this.fs.isVueFile(fileName)) {
      return false
    }

    return this.ts.service.isValidBraceCompletionAtPosition(
      fileName,
      position,
      openingBrace,
    )
  }

  organizeImports(
    args: Typescript.OrganizeImportsArgs,
    formatOptions: Typescript.FormatCodeSettings,
    preferences: Typescript.UserPreferences | undefined,
  ): readonly Typescript.FileTextChanges[] {
    if (this.fs.isVueFile(args.fileName)) return []
    return this.ts.service.organizeImports(args, formatOptions, preferences)
  }

  prepareCallHierarchy(
    fileName: string,
    position: number,
  ): Typescript.CallHierarchyItem | Typescript.CallHierarchyItem[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.prepareCallHierarchy(fileName, position)
  }

  provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): Typescript.CallHierarchyIncomingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyIncomingCalls(fileName, position)
  }

  provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): Typescript.CallHierarchyOutgoingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyOutgoingCalls(fileName, position)
  }

  toggleLineComment(
    fileName: string,
    textRange: Typescript.TextRange,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.toggleLineComment(fileName, textRange)
  }

  toggleMultilineComment(
    fileName: string,
    textRange: Typescript.TextRange,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.toggleMultilineComment(fileName, textRange)
  }

  commentSelection(
    fileName: string,
    textRange: Typescript.TextRange,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.commentSelection(fileName, textRange)
  }

  uncommentSelection(
    fileName: string,
    textRange: Typescript.TextRange,
  ): Typescript.TextChange[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.uncommentSelection(fileName, textRange)
  }

  dispose(): void {
    this.ipc.dispose()
    this.ts.service.dispose()
  }
}

function whenNotNull<R>(
  value: VueBlockDocument | null | undefined,
  fn: (fileName: string, doc: VueBlockDocument) => R,
): R | undefined {
  return value?.tsFileName == null ? undefined : fn(value.tsFileName, value)
}
