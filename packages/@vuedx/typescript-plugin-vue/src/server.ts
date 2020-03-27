import {
  DocumentStore,
  isVirtualFile,
  isVueFile,
  VueTextDocument,
  asUri,
  parseVirtualFileUri,
  virtualFileNameSep,
} from '@vuedx/vue-virtual-textdocument'
import ts from 'typescript'

function isNumber(any: any): any is number {
  return typeof any === 'number'
}

function flat<T>(items: (T | T[])[]): T[] {
  const result: T[] = []

  items.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flat(item))
    } else {
      result.push(item)
    }
  })

  return result
}

function firstOrDefault<T>(items: T[], defaultValue: () => T): T {
  if (items.length) return items[0]
  return defaultValue()
}

interface Chain<T> {
  next<R>(fn: (value: T) => R): Chain<R>
  end(): T | undefined
  end(defaultValue: T): T
}

function chain<T>(value?: T): Chain<T> {
  return {
    next(fn) {
      if (value == undefined) return chain(value) as any

      return chain(fn(value))
    },
    // @ts-ignore
    end(defaultValue) {
      return value == undefined ? defaultValue : value
    },
  }
}

export class VueContext {
  constructor(private readonly documents: DocumentStore<VueTextDocument>) {}
  
  getFileNameFromVirtualFileName(fileName: string): string {
    return fileName.split(virtualFileNameSep).shift()!
  }
  isVueFile(fileName: string) {
    return isVueFile(fileName)
  }

  isVirtualFile(fileName: string) {
    return isVirtualFile(fileName)
  }

  getVueDocument(fileNameOrUri: string) {
    return this.documents.get(asUri(fileNameOrUri))
  }

  getVirtualDocument(fileNameOrUri: string) {
    return chain(parseVirtualFileUri(fileNameOrUri)!)
      .next(
        ref =>
          this.getVueDocument(ref.uri)?.getBlockDocument(ref.selector) || null
      )
      .end(null)
  }

  getVirtualDocumentAt(fileName: string, position: number) {
    const document = this.getVueDocument(fileName)
    if (!document) return null

    return document.getBlockDocument(document.blockAt(position)) || null
  }

  getFileNameAt(fileName: string, position: number) {
    if (this.isVueFile(fileName)) {
      return this.getVirtualDocumentAt(fileName, position)?.fsPath
    }

    return fileName
  }

  getInnerFileNames(fileName: string, onlyScript = false) {
    if (this.isVueFile(fileName)) {
      const document = this.documents.get(fileName)
      if (!document) return []

      return [document.getBlockDocument('script')!.fsPath]
    }

    return [fileName]
  }
}

export class VueLanguageServer implements ts.LanguageService {
  private constructor(
    private readonly context: VueContext,
    private readonly service: ts.LanguageService,
    private readonly typescript: typeof ts
  ) {}

  cleanupSemanticCache(): void {
    throw new Error('Method not implemented.')
  }

  getSyntacticDiagnostics(fileName: string): ts.DiagnosticWithLocation[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSyntacticDiagnostics)
    )
  }

  getSemanticDiagnostics(fileName: string): ts.Diagnostic[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSemanticDiagnostics)
    )
  }

  getSuggestionDiagnostics(fileName: string): ts.DiagnosticWithLocation[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSuggestionDiagnostics)
    )
  }

  getCompilerOptionsDiagnostics(): ts.Diagnostic[] {
    return this.service.getCompilerOptionsDiagnostics()
  }

  getSyntacticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.ClassifiedSpan[] {
    return flat(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName =>
          this.service.getSyntacticClassifications(fileName, span)
        )
    )
  }

  getSemanticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.ClassifiedSpan[] {
    return flat(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName =>
          this.service.getSemanticClassifications(fileName, span)
        )
    )
  }

  getEncodedSyntacticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.Classifications {
    return firstOrDefault(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName =>
          this.service.getEncodedSyntacticClassifications(fileName, span)
        ),
      () => ({ spans: [], endOfLineState: this.typescript.EndOfLineState.None })
    )
  }

  getEncodedSemanticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.Classifications {
    return firstOrDefault(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName =>
          this.service.getEncodedSyntacticClassifications(fileName, span)
        ),
      () => ({ spans: [], endOfLineState: this.typescript.EndOfLineState.None })
    )
  }

  getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: ts.GetCompletionsAtPositionOptions | undefined
  ): ts.WithMetadata<ts.CompletionInfo> | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getCompletionsAtPosition(fileName, position, options)
      )
      .end()
  }

  getCompletionEntryDetails(
    fileName: string,
    position: number,
    name: string,
    formatOptions: ts.FormatCodeOptions | ts.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: ts.UserPreferences | undefined
  ): ts.CompletionEntryDetails | undefined {
    throw chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getCompletionEntryDetails(
          fileName,
          position,
          name,
          formatOptions,
          source,
          preferences
        )
      )
      .end()
  }

  getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined
  ): ts.Symbol | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.getCompletionEntrySymbol(fileName, position, name, source)
      )
      .end()
  }

  getQuickInfoAtPosition(
    fileName: string,
    position: number
  ): ts.QuickInfo | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName => this.service.getQuickInfoAtPosition(fileName, position))
      .end()
  }

  getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number
  ): ts.TextSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, startPos))
      .next(fileName =>
        this.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
      )
      .end()
  }

  getBreakpointStatementAtPosition(
    fileName: string,
    position: number
  ): ts.TextSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getBreakpointStatementAtPosition(fileName, position)
      )
      .end()
  }

  getSignatureHelpItems(
    fileName: string,
    position: number,
    options: ts.SignatureHelpItemsOptions | undefined
  ): ts.SignatureHelpItems | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getSignatureHelpItems(fileName, position, options)
      )
      .end()
  }

  getRenameInfo(
    fileName: string,
    position: number,
    options?: ts.RenameInfoOptions | undefined
  ): ts.RenameInfo {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName => this.service.getRenameInfo(fileName, position, options))
      .next(info => {
        if ('fileToRename' in info && info.fileToRename) {
          info.fileToRename = this.context.getFileNameFromVirtualFileName(info.fileToRename)
        }

        return info
      })
      .end({ canRename: false, localizedErrorMessage: '' })
  }

  findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean | undefined
  ): readonly ts.RenameLocation[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(
        fileName =>
          this.service.findRenameLocations(
            fileName,
            position,
            findInStrings,
            findInComments,
            providePrefixAndSuffixTextForRename
          )!
      )
      .next(locations =>
        locations.map(location => {
          console.log('vue:: remaping => ' + location.fileName)
          location.fileName = this.context.getFileNameFromVirtualFileName(location.fileName)

          return location
        })
      )
      .end()
  }

  getSmartSelectionRange(
    fileName: string,
    position: number
  ): ts.SelectionRange {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName => this.service.getSmartSelectionRange(fileName, position))
      .end({ textSpan: { start: position, length: 0 } })
  }

  getDefinitionAtPosition(
    fileName: string,
    position: number
  ): readonly ts.DefinitionInfo[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getDefinitionAtPosition(fileName, position)
      )
      .end()
  }

  getDefinitionAndBoundSpan(
    fileName: string,
    position: number
  ): ts.DefinitionInfoAndBoundSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getDefinitionAndBoundSpan(fileName, position)
      )
      .end()
  }

  getTypeDefinitionAtPosition(
    fileName: string,
    position: number
  ): readonly ts.DefinitionInfo[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getTypeDefinitionAtPosition(fileName, position)
      )
      .end()
  }

  getImplementationAtPosition(
    fileName: string,
    position: number
  ): readonly ts.ImplementationLocation[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getImplementationAtPosition(fileName, position)
      )
      .end()
  }

  getReferencesAtPosition(
    fileName: string,
    position: number
  ): ts.ReferenceEntry[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getReferencesAtPosition(fileName, position)
      )
      .end()
  }

  findReferences(
    fileName: string,
    position: number
  ): ts.ReferencedSymbol[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName => this.service.findReferences(fileName, position))
      .end()
  }

  getDocumentHighlights(
    fileName: string,
    position: number,
    filesToSearch: string[]
  ): ts.DocumentHighlights[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getDocumentHighlights(fileName, position, filesToSearch)
      )
      .end()
  }

  getOccurrencesAtPosition(
    fileName: string,
    position: number
  ): readonly ts.ReferenceEntry[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getOccurrencesAtPosition(fileName, position)
      )
      .end()
  }

  getNavigateToItems(
    searchValue: string,
    maxResultCount?: number | undefined,
    fileName?: string | undefined,
    excludeDtsFiles?: boolean | undefined
  ): ts.NavigateToItem[] {
    return this.service.getNavigateToItems(
      searchValue,
      maxResultCount,
      fileName,
      excludeDtsFiles
    )
  }

  getNavigationBarItems(fileName: string): ts.NavigationBarItem[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map(fileName => this.service.getNavigationBarItems(fileName))
    )
  }

  getNavigationTree(fileName: string): ts.NavigationTree {
    return firstOrDefault(
      this.context
        .getInnerFileNames(fileName)
        .map(fileName => this.service.getNavigationTree(fileName)),
      () => ({
        kind: this.typescript.ScriptElementKind.moduleElement,
        text: '<unknown>',
        kindModifiers: 'none',
        nameSpan: undefined,
        spans: [],
      })
    )
  }

  prepareCallHierarchy(
    fileName: string,
    position: number
  ): ts.CallHierarchyItem | ts.CallHierarchyItem[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName => this.service.prepareCallHierarchy(fileName, position))
      .end()
  }
  provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number
  ): ts.CallHierarchyIncomingCall[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.provideCallHierarchyIncomingCalls(fileName, position)
      )
      .end([])
  }
  provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number
  ): ts.CallHierarchyOutgoingCall[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.provideCallHierarchyOutgoingCalls(fileName, position)
      )
      .end([])
  }
  getOutliningSpans(fileName: string): ts.OutliningSpan[] {
    return flat(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName => this.service.getOutliningSpans(fileName))
    )
  }
  getTodoComments(
    fileName: string,
    descriptors: ts.TodoCommentDescriptor[]
  ): ts.TodoComment[] {
    return flat(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName => this.service.getTodoComments(fileName, descriptors))
    )
  }
  getBraceMatchingAtPosition(
    fileName: string,
    position: number
  ): ts.TextSpan[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getBraceMatchingAtPosition(fileName, position)
      )
      .end([])
  }

  getIndentationAtPosition(
    fileName: string,
    position: number,
    options: ts.EditorOptions | ts.EditorSettings
  ): number {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getIndentationAtPosition(fileName, position, options)
      )
      .end(0)
  }
  getFormattingEditsForRange(
    fileName: string,
    start: number,
    end: number,
    options: ts.FormatCodeOptions | ts.FormatCodeSettings
  ): ts.TextChange[] {
    return chain(this.context.getFileNameAt(fileName, start))
      .next(fileName =>
        this.service.getFormattingEditsForRange(fileName, start, end, options)
      )
      .end([])
  }

  getFormattingEditsForDocument(
    fileName: string,
    options: ts.FormatCodeOptions | ts.FormatCodeSettings
  ): ts.TextChange[] {
    return flat(
      this.context
        .getInnerFileNames(fileName, true)
        .map(fileName =>
          this.service.getFormattingEditsForDocument(fileName, options)
        )
    )
  }

  getFormattingEditsAfterKeystroke(
    fileName: string,
    position: number,
    key: string,
    options: ts.FormatCodeOptions | ts.FormatCodeSettings
  ): ts.TextChange[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getFormattingEditsAfterKeystroke(
          fileName,
          position,
          key,
          options
        )
      )
      .end([])
  }
  getDocCommentTemplateAtPosition(
    fileName: string,
    position: number
  ): ts.TextInsertion | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getDocCommentTemplateAtPosition(fileName, position)
      )
      .end()
  }
  isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number
  ): boolean {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.isValidBraceCompletionAtPosition(
          fileName,
          position,
          openingBrace
        )
      )
      .end(false)
  }
  getJsxClosingTagAtPosition(
    fileName: string,
    position: number
  ): ts.JsxClosingTagInfo | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getJsxClosingTagAtPosition(fileName, position)
      )
      .end()
  }
  getSpanOfEnclosingComment(
    fileName: string,
    position: number,
    onlyMultiLine: boolean
  ): ts.TextSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(fileName =>
        this.service.getSpanOfEnclosingComment(
          fileName,
          position,
          onlyMultiLine
        )
      )
      .end()
  }
  getCodeFixesAtPosition(
    fileName: string,
    start: number,
    end: number,
    errorCodes: readonly number[],
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences
  ): readonly ts.CodeFixAction[] {
    return chain(this.context.getFileNameAt(fileName, start))
      .next(fileName =>
        this.service.getCodeFixesAtPosition(
          fileName,
          start,
          end,
          errorCodes,
          formatOptions,
          preferences
        )
      )
      .end([])
  }
  getCombinedCodeFix(
    scope: ts.CombinedCodeFixScope,
    fixId: {},
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences
  ): ts.CombinedCodeActions {
    return this.service.getCombinedCodeFix(
      scope,
      fixId,
      formatOptions,
      preferences
    )
  }

  applyCodeActionCommand(action: any, formatSettings?: any): Promise<any> {
    return this.service.applyCodeActionCommand(action, formatSettings)
  }

  getApplicableRefactors(
    fileName: string,
    positionOrRange: number | ts.TextRange,
    preferences: ts.UserPreferences | undefined
  ): ts.ApplicableRefactorInfo[] {
    return chain(
      this.context.getFileNameAt(
        fileName,
        isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos
      )
    )
      .next(fileName =>
        this.service.getApplicableRefactors(
          fileName,
          positionOrRange,
          preferences
        )
      )
      .end([])
  }

  getEditsForRefactor(
    fileName: string,
    formatOptions: ts.FormatCodeSettings,
    positionOrRange: number | ts.TextRange,
    refactorName: string,
    actionName: string,
    preferences: ts.UserPreferences | undefined
  ): ts.RefactorEditInfo | undefined {
    return chain(
      this.context.getFileNameAt(
        fileName,
        isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos
      )
    )
      .next(fileName =>
        this.service.getEditsForRefactor(
          fileName,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences
        )
      )
      .end()
  }
  organizeImports(
    scope: ts.CombinedCodeFixScope,
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences | undefined
  ): readonly ts.FileTextChanges[] {
    return this.service.organizeImports(scope, formatOptions, preferences)
  }

  getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences | undefined
  ): readonly ts.FileTextChanges[] {
    return this.service.getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences
    )
  }

  getEmitOutput(
    fileName: string,
    emitOnlyDtsFiles?: boolean | undefined,
    forceDtsEmit?: boolean | undefined
  ): ts.EmitOutput {
    return this.service.getEmitOutput(fileName, emitOnlyDtsFiles, forceDtsEmit)
  }

  getProgram(): ts.Program | undefined {
    return this.service.getProgram()
  }

  dispose(): void {
    return this.service.dispose()
  }

  toLineColumnOffset(fileName: string, position: number) {
    return this.service.toLineColumnOffset!(fileName, position)
  }

  static create(context: VueContext, server: ts.LanguageService, typescript: typeof ts) {
    const instance = new VueLanguageServer(context, server, typescript)
    const proxy = Object.create(null)
    const keys = Object.keys(server) as (keyof ts.LanguageService)[]

    for (const key of keys) {
      proxy[key] = instance[key].bind(instance)
    }

    return proxy as ts.LanguageService
  }
}
