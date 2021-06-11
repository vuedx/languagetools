import type { TS } from '../interfaces'

export const noop: TS.LanguageService = {
  getFileReferences(_fileName) {
    return []
  },

  toggleLineComment(_fileName, _textRange) {
    return []
  },

  toggleMultilineComment(_fileName, _textRange) {
    return []
  },

  commentSelection(_fileName, _textRange) {
    return []
  },

  uncommentSelection(_fileName, _textRange) {
    return []
  },

  getRenameInfo(_fileName, _position, _options) {
    return {
      canRename: false,
      localizedErrorMessage: 'Not implemented.',
    }
  },

  findRenameLocations(_fileName, _position, _findInStrings, _findInComments) {
    return undefined
  },

  getApplicableRefactors(_fileName, _positionOrRange, _preferences) {
    return []
  },

  getBraceMatchingAtPosition(_fileName, _position) {
    return []
  },

  getBreakpointStatementAtPosition(_fileName, _position) {
    return undefined
  },

  getCodeFixesAtPosition(
    _fileName,
    _start,
    _end,
    _errorCodes,
    _formatOptions,
    _preferences,
  ) {
    return []
  },

  getCombinedCodeFix(_scope, _fixId, _formatOptions, _preferences) {
    return {
      changes: [],
    }
  },

  getCompilerOptionsDiagnostics() {
    return []
  },

  getCompletionEntryDetails(
    _fileName,
    _position,
    _entryName,
    _formatOptions,
    _source,
    _preferences,
  ) {
    return undefined
  },

  getCompletionEntrySymbol(_fileName, _position, _name, _source) {
    return undefined
  },

  getCompletionsAtPosition(_fileName, _position, _options) {
    return undefined
  },

  getDefinitionAndBoundSpan(_fileName, _position) {
    return undefined
  },

  getDefinitionAtPosition(_fileName, _position) {
    return undefined
  },

  getDocCommentTemplateAtPosition(_fileName, _position) {
    return undefined
  },

  getDocumentHighlights(_fileName, _position, _filesToSearch) {
    return undefined
  },

  getEditsForFileRename(
    _oldFilePath,
    _newFilePath,
    _formatOptions,
    _preferences,
  ) {
    return []
  },

  getEditsForRefactor(
    _fileName,
    _formatOptions,
    _positionOrRange,
    _refactorName,
    _actionName,
    _preferences,
  ) {
    return undefined
  },

  getEmitOutput(_fileName) {
    return { outputFiles: [], emitSkipped: true }
  },

  getEncodedSemanticClassifications(_fileName, _span) {
    return {
      spans: [],
      endOfLineState: 0,
    }
  },

  getEncodedSyntacticClassifications(_fileName, _span) {
    return {
      spans: [],
      endOfLineState: 0,
    }
  },

  getFormattingEditsAfterKeystroke(_fileName, _position, _key, _options) {
    return []
  },

  getFormattingEditsForDocument(_fileName, _options) {
    return []
  },

  getFormattingEditsForRange(_fileName, _start, _end, _options) {
    return []
  },

  getImplementationAtPosition(_fileName, _position) {
    return undefined
  },

  getIndentationAtPosition(_fileName, _position, _options) {
    return 0
  },

  getJsxClosingTagAtPosition(_fileName, _position) {
    return undefined
  },

  getNameOrDottedNameSpan(_fileName, _startPos, _endPos) {
    return undefined
  },

  getNavigateToItems(_searchValue) {
    return []
  },

  getNavigationBarItems(_fileName) {
    return []
  },

  getNavigationTree(_fileName) {
    return {
      text: '',
      kind: 'module' as TS.ScriptElementKind.moduleElement,
      kindModifiers: 'component',
      spans: [],
      nameSpan: undefined,
    }
  },

  getOccurrencesAtPosition(_fileName, _position) {
    return undefined
  },

  getOutliningSpans(_fileName) {
    return []
  },

  getQuickInfoAtPosition(_fileName, _position) {
    return undefined
  },

  getReferencesAtPosition(_fileName, _position) {
    return undefined
  },

  getSemanticClassifications() {
    return []
  },

  getSemanticDiagnostics(_fileName) {
    return []
  },

  getSignatureHelpItems(_fileName, _position, _options) {
    return undefined
  },

  getSmartSelectionRange(_fileName, position) {
    return {
      textSpan: { start: position, length: 0 },
    }
  },

  getSpanOfEnclosingComment(_fileName, _position, _onlyMultiLine) {
    return undefined
  },

  getSuggestionDiagnostics(_fileName) {
    return []
  },

  getSyntacticClassifications() {
    return []
  },

  getSyntacticDiagnostics(_fileName) {
    return []
  },

  getTodoComments(_fileName, _descriptors) {
    return []
  },

  getTypeDefinitionAtPosition(_fileName, _position) {
    return []
  },

  findReferences(_fileName, _position) {
    return undefined
  },

  prepareCallHierarchy(_fileName, _position) {
    return undefined
  },

  provideCallHierarchyIncomingCalls(_fileName, _position) {
    return []
  },

  provideCallHierarchyOutgoingCalls(_fileName, _position) {
    return []
  },

  isValidBraceCompletionAtPosition(_fileName, _position, _openingBrace) {
    return false
  },

  organizeImports(_scope, _formatOptions, _preferences) {
    return []
  },

  getProgram() {
    throw new Error('Not Implemented')
  },

  cleanupSemanticCache() {
    throw new Error('Not Implemented')
  },
  dispose() {
    throw new Error('Not Implemented')
  },

  // @ts-expect-error
  async applyCodeActionCommand(_action, _formatSettings) {
    throw new Error('Not Implemented')
  },
}
