import {
  asUri,
  DocumentStore,
  isVirtualFile,
  isVueFile,
  parseVirtualFileUri,
  virtualFileNameSep,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import ts from 'typescript'
import { prepareCodeFixAction } from './features/action'
import {
  prepareDefinitionAndBoundSpan,
  prepareDefinitionInfo,
  prepareImplementationLocation,
  prepareReferenceEntry,
  prepareReferenceSymbol,
} from './features/definition'
import {
  prepareSemanticDiagnostics,
  prepareSuggestionDiagnostics,
  prepareSyntacticDiagnostics,
} from './features/diagnostics'
import {
  prepareApplicableRefactorInfo,
  prepareRefactorEditInfo,
} from './features/edit'
import { prepareQuickInfo } from './features/quickInfo'
import { prepareDocumentHighlights } from './features/highlights'
import {
  prepareClassifications,
  prepareClassifiedSpans,
} from './features/classifications'
import {
  prepareCompletionsEntryDetail,
  prepareSymbol,
} from './features/completion'
import { prepareSignatureHelpItems } from './features/signature'
import { prepareRenameInfo, prepareRenameLocation } from './features/rename'
import {
  prepareCallHierarchy,
  prepareCallHierachyIncomingCalls,
  prepareCallHierachyOutgoingCalls,
} from './features/call'
import { removeVirtualSuffixFromFileName } from './utils'

function isNumber(any: any): any is number {
  return typeof any === 'number'
}

function flat<T>(items: (T | T[])[]): T[] {
  if (typeof Array.prototype.flat === 'function') {
    return items.flat(Infinity)
  }

  const result: T[] = []

  items.forEach((item) => {
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
  next<R>(fn: (value: T) => R | undefined): Chain<R>
  end(): T | undefined
  end(defaultValue: T): T
}

function chain<T>(value?: T): Chain<T> {
  return {
    next(fn) {
      if (value == undefined){
        return chain(undefined) as any
      }

      try {
        return chain(fn(value))
      } catch (error) {
        console.log('Error in chain: ' + error.message + ' ' + error.stack)

        return chain(undefined)
      }

    },
    // @ts-ignore
    end(defaultValue) {
      return value == undefined ? defaultValue : value
    },
  }
}

export interface Logger {
  log(message: string): void
}

export class VueContext {
  constructor(
    private readonly documents: DocumentStore<VueTextDocument>,
    public readonly logger: Logger
  ) {}

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
        (ref) =>
          this.getVueDocument(ref.uri)?.getBlockDocument(ref.selector) || null
      )
      .end(null)
  }

  getVirtualDocumentAt(fileName: string, position: number) {
    const document = this.getVueDocument(fileName)
    if (!document) return null

    return document.getBlockDocument(document.blockAt(position)) || null
  }

  getFileNameAt(
    fileName: string,
    position: number,
    isRenderFunctionAllowed = false
  ) {
    if (this.isVueFile(fileName)) {
      // TODO: Only return script or render fileName
      const virtualFileName = this.getVirtualDocumentAt(fileName, position)
        ?.fsPath

      __DEV__ &&
        this.logger.log(
          `getFileNameAt(${fileName}, ${position}) = ${virtualFileName}`
        )

      return virtualFileName
    }

    return fileName
  }

  getInnerFileNames(fileName: string, isRenderFunctionAllowed = false) {
    if (this.isVueFile(fileName)) {
      // TODO: Only return script and render fileName
      const document = this.documents.get(fileName)

      if (!document) return []

      const innerFileNames = document.forTS().map((document) => document.fsPath)

      __DEV__ &&
        this.logger.log(
          `getInnerFileNames(${fileName}) = ${JSON.stringify(innerFileNames)}`
        )

      return innerFileNames
    }

    __DEV__ && this.logger.log(`getInnerFileNames(${fileName}) = [${fileName}]`)

    return [fileName]
  }
}
export class VueLanguageServer implements Partial<ts.LanguageService> {
  private constructor(
    private readonly context: VueContext,
    private readonly service: ts.LanguageService,
    private readonly typescript: typeof ts
  ) {}

  getProgram() {
    const program = this.service.getProgram()

    __DEV__ && this.context.logger.log(`VLS.getProgram() = ${typeof program}`)

    return program
  }

  getSyntacticDiagnostics(fileName: string): ts.DiagnosticWithLocation[] {
    __DEV__ &&
      this.context.logger.log('getSyntacticDiagnostics file=' + fileName)

    const diagnostics = flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSyntacticDiagnostics)
    )

    return prepareSyntacticDiagnostics(fileName, diagnostics)
  }

  getSemanticDiagnostics(fileName: string): ts.Diagnostic[] {
    __DEV__ &&
      this.context.logger.log('getSemanticDiagnostics file=' + fileName)

    const diagnostics = flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSemanticDiagnostics)
    )

    return prepareSemanticDiagnostics(fileName, diagnostics)
  }

  getSuggestionDiagnostics(fileName: string): ts.DiagnosticWithLocation[] {
    __DEV__ &&
      this.context.logger.log('getSemanticDiagnostics file=' + fileName)

    const diagnostics = flat(
      this.context
        .getInnerFileNames(fileName)
        .map(this.service.getSuggestionDiagnostics)
    )

    return prepareSuggestionDiagnostics(fileName, diagnostics)
  }

  getSyntacticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.ClassifiedSpan[] {
    return chain(this.context.getFileNameAt(fileName, span.start))
      .next((fileName) =>
        this.service.getSyntacticClassifications(fileName, span)
      )
      .next((classifications) =>
        prepareClassifiedSpans(fileName, classifications)
      )
      .end([])
  }

  getSemanticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.ClassifiedSpan[] {
    return chain(this.context.getFileNameAt(fileName, span.start))
      .next((fileName) =>
        this.service.getSemanticClassifications(fileName, span)
      )
      .next((classifications) =>
        prepareClassifiedSpans(fileName, classifications)
      )
      .end([])
  }

  getEncodedSyntacticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.Classifications {
    return chain(this.context.getFileNameAt(fileName, span.start))
      .next((fileName) =>
        this.service.getEncodedSyntacticClassifications(fileName, span)
      )
      .next((classifications) =>
        prepareClassifications(fileName, classifications)
      )
      .end({ spans: [], endOfLineState: this.typescript.EndOfLineState.None })
  }

  getEncodedSemanticClassifications(
    fileName: string,
    span: ts.TextSpan
  ): ts.Classifications {
    return chain(this.context.getFileNameAt(fileName, span.start))
      .next((fileName) =>
        this.service.getEncodedSemanticClassifications(fileName, span)
      )
      .next((classifications) =>
        prepareClassifications(fileName, classifications)
      )
      .end({ spans: [], endOfLineState: this.typescript.EndOfLineState.None })
  }

  getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: ts.GetCompletionsAtPositionOptions | undefined
  ): ts.WithMetadata<ts.CompletionInfo> | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
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
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getCompletionEntryDetails(
          fileName,
          position,
          name,
          formatOptions,
          source,
          preferences
        )
      )
      .next((detail) => prepareCompletionsEntryDetail(fileName, detail))
      .end()
  }

  getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined
  ): ts.Symbol | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.getCompletionEntrySymbol(fileName, position, name, source)
      )
      .next((symbol) => prepareSymbol(fileName, symbol))
      .end()
  }

  getQuickInfoAtPosition(
    fileName: string,
    position: number
  ): ts.QuickInfo | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next(
        (fileName) => this.service.getQuickInfoAtPosition(fileName, position)!
      )
      .next((quickInfo) => prepareQuickInfo(fileName, quickInfo))
      .end()
  }

  getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number
  ): ts.TextSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, startPos))
      .next((fileName) =>
        this.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
      )
      .end()
  }

  getBreakpointStatementAtPosition(
    fileName: string,
    position: number
  ): ts.TextSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
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
      .next((fileName) =>
        this.service.getSignatureHelpItems(fileName, position, options)
      )
      .next((items) => prepareSignatureHelpItems(fileName, items))
      .end()
  }

  getRenameInfo(
    fileName: string,
    position: number,
    options?: ts.RenameInfoOptions | undefined
  ): ts.RenameInfo {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getRenameInfo(fileName, position, options)
      )
      .next((info) => prepareRenameInfo(fileName, info))
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
        (fileName) =>
          this.service.findRenameLocations(
            fileName,
            position,
            findInStrings,
            findInComments,
            providePrefixAndSuffixTextForRename
          )!
      )
      .next((locations) => prepareRenameLocation(fileName, locations))
      .end()
  }

  getSmartSelectionRange(
    fileName: string,
    position: number
  ): ts.SelectionRange {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getSmartSelectionRange(fileName, position)
      )
      .end({ textSpan: { start: position, length: 0 } })
  }

  getDefinitionAtPosition(
    fileName: string,
    position: number
  ): readonly ts.DefinitionInfo[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getDefinitionAtPosition(fileName, position)
      )
      .next((result) => prepareDefinitionInfo(fileName, result))
      .end()
  }

  getDefinitionAndBoundSpan(
    fileName: string,
    position: number
  ): ts.DefinitionInfoAndBoundSpan | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getDefinitionAndBoundSpan(fileName, position)
      )
      .next((result) => prepareDefinitionAndBoundSpan(fileName, result))
      .end()
  }

  getTypeDefinitionAtPosition(
    fileName: string,
    position: number
  ): readonly ts.DefinitionInfo[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getTypeDefinitionAtPosition(fileName, position)
      )
      .next((result) => prepareDefinitionInfo(fileName, result))
      .end()
  }

  getImplementationAtPosition(
    fileName: string,
    position: number
  ): readonly ts.ImplementationLocation[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getImplementationAtPosition(fileName, position)
      )
      .next((result) => prepareImplementationLocation(fileName, result))
      .end()
  }

  getReferencesAtPosition(
    fileName: string,
    position: number
  ): ts.ReferenceEntry[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getReferencesAtPosition(fileName, position)
      )
      .next((result) => prepareReferenceEntry(fileName, result))
      .end()
  }

  findReferences(
    fileName: string,
    position: number
  ): ts.ReferencedSymbol[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) => this.service.findReferences(fileName, position))
      .next((result) => prepareReferenceSymbol(fileName, result))
      .end()
  }

  getDocumentHighlights(
    fileName: string,
    position: number,
    filesToSearch: string[]
  ): ts.DocumentHighlights[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getDocumentHighlights(
          fileName,
          position,
          filesToSearch
            .map((fileName) => this.context.getInnerFileNames(fileName))
            .filter(Boolean)
            .flat()
        )
      )
      .next((highlights) => prepareDocumentHighlights(fileName, highlights))
      .end()
  }

  getOccurrencesAtPosition(
    fileName: string,
    position: number
  ): readonly ts.ReferenceEntry[] | undefined {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.getOccurrencesAtPosition(fileName, position)
      )
      .next((references) => prepareReferenceEntry(fileName, references))
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
      fileName, // TODO: Convert .vue file to script
      excludeDtsFiles
    )
  }

  getNavigationBarItems(fileName: string): ts.NavigationBarItem[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map((fileName) => this.service.getNavigationBarItems(fileName))
    )
  }

  getNavigationTree(fileName: string): ts.NavigationTree {
    // TODO: Do we need to merge navigation tree from <script> and <template> blocks?
    return firstOrDefault(
      this.context
        .getInnerFileNames(fileName)
        .map((fileName) => this.service.getNavigationTree(fileName)),
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
      .next((fileName) => this.service.prepareCallHierarchy(fileName, position))
      .next((result) => prepareCallHierarchy(fileName, result))
      .end()
  }
  provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number
  ): ts.CallHierarchyIncomingCall[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.provideCallHierarchyIncomingCalls(fileName, position)
      )
      .next((result) => prepareCallHierachyIncomingCalls(fileName, result))
      .end([])
  }
  provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number
  ): ts.CallHierarchyOutgoingCall[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
        this.service.provideCallHierarchyOutgoingCalls(fileName, position)
      )
      .next((result) => prepareCallHierachyOutgoingCalls(fileName, result))
      .end([])
  }

  getOutliningSpans(fileName: string): ts.OutliningSpan[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map((fileName) => this.service.getOutliningSpans(fileName))
    )
  }

  getTodoComments(
    fileName: string,
    descriptors: ts.TodoCommentDescriptor[]
  ): ts.TodoComment[] {
    return flat(
      this.context
        .getInnerFileNames(fileName)
        .map((fileName) => this.service.getTodoComments(fileName, descriptors))
    )
  }

  getBraceMatchingAtPosition(
    fileName: string,
    position: number
  ): ts.TextSpan[] {
    return chain(this.context.getFileNameAt(fileName, position))
      .next((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
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
        .getInnerFileNames(fileName)
        .map((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
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
      .next((fileName) =>
        this.service.getCodeFixesAtPosition(
          fileName,
          start,
          end,
          errorCodes,
          formatOptions,
          preferences
        )
      )
      .next((fixes) => prepareCodeFixAction(fileName, fixes))
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
      .next((fileName) =>
        this.service.getApplicableRefactors(
          fileName,
          positionOrRange,
          preferences
        )
      )
      .next((refactors) => prepareApplicableRefactorInfo(fileName, refactors))
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
      .next((fileName) =>
        this.service.getEditsForRefactor(
          fileName,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences
        )
      )
      .next((refactor) => prepareRefactorEditInfo(fileName, refactor))
      .end()
  }

  organizeImports(
    scope: ts.CombinedCodeFixScope,
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences | undefined
  ): readonly ts.FileTextChanges[] {
    return chain(scope)
      .next((scope) => {
        if (scope.type === 'file') {
          const fileName = this.context
            .getInnerFileNames(scope.fileName)
            .find(Boolean)

          if (fileName) return { ...scope, fileName }

          return undefined // abort
        }

        return scope
      })
      .next((scope) =>
        this.service.organizeImports(scope, formatOptions, preferences)
      )
      .next((results) => {
        results.forEach(result => {
          if (this.context.isVirtualFile(result.fileName)) {
            // TODO: Ensure offset padding for script blocks

            result.fileName = removeVirtualSuffixFromFileName(result.fileName)
          }
        })

        return results
      })
      .end([])
  }

  getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: ts.FormatCodeSettings,
    preferences: ts.UserPreferences | undefined
  ): readonly ts.FileTextChanges[] {
    // TODO: Handle rename.
    return this.service.getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences
    )
  }

  static create(
    context: VueContext,
    server: ts.LanguageService,
    typescript: typeof ts
  ) {
    const instance = new VueLanguageServer(context, server, typescript)
    const proxy = Object.create(null)
    const keys = Object.keys(server) as (keyof ts.LanguageService)[]

    for (const key of keys) {
      proxy[key] =
        key in instance
          ? (...args: any[]) => {
              __DEV__ && console.log(`start server.${key}(${typeof args[0] === 'string' ? args[0] : ''})`)

              // @ts-ignore
              const result = instance[key].apply(instance, args)

              __DEV__ && console.log(`end server.${key}(${typeof args[0] === 'string' ? args[0] : ''})`)

              return result
            }
          : (...args: any[]) => {
              // @ts-ignore
              const result = server[key](...args)

              return result
            }
    }

    return proxy as ts.LanguageService
  }
}
