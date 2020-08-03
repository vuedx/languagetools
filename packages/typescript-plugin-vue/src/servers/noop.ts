import { TS } from '../interfaces';

export const noop: TS.LanguageService = {
  getRenameInfo(fileName, position, options) {
    return {
      canRename: false,
      localizedErrorMessage: 'Not implemented.',
    };
  },

  findRenameLocations(fileName, position, findInStrings, findInComments) {
    return undefined;
  },

  getApplicableRefactors(fileName, positionOrRange, preferences) {
    return [];
  },

  getBraceMatchingAtPosition(fileName, position) {
    return [];
  },

  getBreakpointStatementAtPosition(fileName, position) {
    return undefined;
  },

  getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions, preferences) {
    return [];
  },

  getCombinedCodeFix(scope, fixId, formatOptions, preferences) {
    return {
      changes: [],
    };
  },

  getCompilerOptionsDiagnostics() {
    return [];
  },

  getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences) {
    return undefined;
  },

  getCompletionEntrySymbol(fileName, position, name, source) {
    return undefined;
  },

  getCompletionsAtPosition(fileName, position, options) {
    return undefined;
  },

  getDefinitionAndBoundSpan(fileName, position) {
    return undefined;
  },

  getDefinitionAtPosition(fileName, position) {
    return undefined;
  },

  getDocCommentTemplateAtPosition(fileName, position) {
    return undefined;
  },

  getDocumentHighlights(fileName, position, filesToSearch) {
    return undefined;
  },

  getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences) {
    return [];
  },

  getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences) {
    return undefined;
  },

  getEmitOutput(fileName) {
    return { outputFiles: [], emitSkipped: true };
  },

  getEncodedSemanticClassifications(fileName, span) {
    return {
      spans: [],
      endOfLineState: 0,
    };
  },

  getEncodedSyntacticClassifications(fileName, span) {
    return {
      spans: [],
      endOfLineState: 0,
    };
  },

  getFormattingEditsAfterKeystroke(fileName, position, key, options) {
    return [];
  },

  getFormattingEditsForDocument(fileName, options) {
    return [];
  },

  getFormattingEditsForRange(fileName, start, end, options) {
    return [];
  },

  getImplementationAtPosition(fileName, position) {
    return undefined;
  },

  getIndentationAtPosition(fileName, position, options) {
    return 0;
  },

  getJsxClosingTagAtPosition(fileName, position) {
    return undefined;
  },

  getNameOrDottedNameSpan(fileName, startPos, endPos) {
    return undefined;
  },

  getNavigateToItems(searchValue) {
    return [];
  },

  getNavigationBarItems(fileName) {
    return [];
  },

  getNavigationTree(fileName) {
    return {
      text: '',
      kind: 'module' as TS.ScriptElementKind.moduleElement,
      kindModifiers: 'component',
      spans: [],
      nameSpan: undefined,
    };
  },

  getOccurrencesAtPosition(fileName, position) {
    return undefined;
  },

  getOutliningSpans(fileName) {
    return [];
  },

  getQuickInfoAtPosition(fileName, position) {
    return undefined;
  },

  getReferencesAtPosition(fileName, position) {
    return undefined;
  },

  getSemanticClassifications(fileName, span) {
    return [];
  },

  getSemanticDiagnostics(fileName) {
    return [];
  },

  getSignatureHelpItems(fileName, position, options) {
    return undefined;
  },

  getSmartSelectionRange(fileName, position) {
    return {
      textSpan: { start: position, length: 0 },
    };
  },

  getSpanOfEnclosingComment(fileName, position, onlyMultiLine) {
    return undefined;
  },

  getSuggestionDiagnostics(fileName) {
    return [];
  },

  getSyntacticClassifications(fileName, span) {
    return [];
  },

  getSyntacticDiagnostics(fileName) {
    return [];
  },

  getTodoComments(fileName, descriptors) {
    return [];
  },

  getTypeDefinitionAtPosition(fileName, position) {
    return [];
  },

  findReferences(fileName, position) {
    return undefined;
  },

  prepareCallHierarchy(fileName, position) {
    return undefined;
  },

  provideCallHierarchyIncomingCalls(fileName, position) {
    return [];
  },

  provideCallHierarchyOutgoingCalls(fileName, position) {
    return [];
  },

  isValidBraceCompletionAtPosition(fileName, position, openingBrace) {
    return false;
  },

  organizeImports(scope, formatOptions, preferences) {
    return [];
  },

  getProgram() {
    throw new Error('Not Implemented');
  },

  cleanupSemanticCache() {
    throw new Error('Not Implemented');
  },
  dispose() {
    throw new Error('Not Implemented');
  },
  applyCodeActionCommand() {
    return Promise.reject('Not Implemented');
  },
};
