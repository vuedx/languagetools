import { Container } from 'inversify'
import type { ExtendedTSLanguageService } from './contracts/Typescript'
import type { CreateLanguageServiceOptions } from './CreateLanguageServiceOptions'
import { patchTSHosts } from './patchTSHosts'
import { ConfigService, PluginConfig } from './services/ConfigService'
import { FilesystemService } from './services/FilesystemService'
import { LoggerService } from './services/LoggerService'
import { TypescriptContextService } from './services/TypescriptContextService'
import { TypescriptPluginService } from './services/TypescriptPluginService'
import type { TSLanguageServiceProvider } from './TSLanguageServiceProvider'

export type {
  PluginConfig,
  TSLanguageServiceProvider,
  CreateLanguageServiceOptions,
  ExtendedTSLanguageService,
}

/**
 * Decorate Typescript language server to support .vue files.
 */
export function createTypescriptLanguageService(
  options: CreateLanguageServiceOptions,
): TSLanguageServiceProvider {
  const id = Date.now().toString(16)
  // Setup logger to forwards logs to tsserver log file.
  const logger = options.project.projectService.logger
  logger.info(
    `[VueDX] ${id} Create Vue Plugin for ${options.project.getProjectName()}`,
  )
  LoggerService.currentId = id
  LoggerService.setWriter({
    info: (line) => logger.msg(line, options.typescript.server.Msg.Info),
    debug: (line) => logger.msg(line, options.typescript.server.Msg.Info),
    error: (line) => logger.msg(line, options.typescript.server.Msg.Err),
  })

  const ts = new TypescriptContextService({
    lib: options.typescript,
    serverHost: options.serverHost,
    projectService: options.project.projectService,
    tsService: options.languageService,
    project: options.project,
    typesDir: options.typesDir,
  })
  const fs = FilesystemService.createInstnace(ts)

  // Fix typescript serverHost, languageServiceHost and project to support .vue files
  patchTSHosts(options, fs, ts)

  // Setup dependency injection container
  const context = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
    skipBaseClassChecks: true,
  })
  context.bind(TypescriptContextService).toConstantValue(ts)
  context.bind(FilesystemService).toConstantValue(fs)

  // Create Language Service
  const service = context.get(TypescriptPluginService)

  // prettier-ignore
  return {
    setConfig(config) {
      context.get(ConfigService).setConfig(config)
    },

    update(options) {
      ts.updateOptions({
        lib: options.typescript,
        serverHost: options.serverHost,
        projectService: options.project.projectService,
        tsService: options.languageService,
        project: options.project,
        typesDir: options.typesDir,
      })
    },

    service: {
      ...options.languageService,

      // Tag language sever to avoid recursive decoration.
      _isVueTS: true,
      _vueTS_id: id,
      _vueTS_inner: options.languageService,

      // 
      dispose: () => {
        service.dispose()
        options.dispose?.()
      },

      // Retain virtual files
      getExternalFiles: () => service.getExternalFiles(options.project),
      
      // Feature: Syntax
      getOutliningSpans: (...args) => service.getOutliningSpans(...args),
      getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
      getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),

      // Feature: Diagnostics 
      getCompilerOptionsDiagnostics: () => service.getCompilerOptionsDiagnostics(),
      getSemanticDiagnostics: (...args) => service.getSemanticDiagnostics(...args),
      getSyntacticDiagnostics: (...args) => service.getSyntacticDiagnostics(...args),
      getSuggestionDiagnostics: (...args) => service.getSuggestionDiagnostics(...args),

      // Feature: Hover
      getQuickInfoAtPosition: (...args) => service.getQuickInfoAtPosition(...args),

      // Feature: GoTo
      getDefinitionAtPosition: (...args) => service.getDefinitionAtPosition(...args),
      getDefinitionAndBoundSpan: (...args) => service.getDefinitionAndBoundSpan(...args),

      // Feature: Completions
      getCompletionsAtPosition: (...args) => service.getCompletionsAtPosition(...args),
      getCompletionEntryDetails: (...args) => service.getCompletionEntryDetails(...args),
      getCompletionEntrySymbol: (...args) => service.getCompletionEntrySymbol(...args),
      getDocCommentTemplateAtPosition: (...args) => service.getDocCommentTemplateAtPosition(...args),

      // Feature: References
      findReferences: (...args) => service.findReferences(...args),
      getFileReferences: (...args) => service.getFileReferences(...args),
      getReferencesAtPosition: (...args) => service.getReferencesAtPosition(...args),

      // Feature: Refactoring
      getApplicableRefactors: (...args) => service.getApplicableRefactors(...args),
      getEditsForFileRename: (...args) => service.getEditsForFileRename(...args),
      getEditsForRefactor: (...args) => service.getEditsForRefactor(...args),
      
      // Feature: CallHierachy
      // Feature: Formatting
      getFormattingEditsAfterKeystroke: (...args) => service.getFormattingEditsAfterKeystroke(...args),
      getFormattingEditsForDocument: (...args) => service.getFormattingEditsForDocument(...args),
      getFormattingEditsForRange: (...args) => service.getFormattingEditsForRange(...args),
      getImplementationAtPosition: (...args) => service.getImplementationAtPosition(...args),

      // Feature: Navigation
      // Feature: Comments
      commentSelection: (...args) => service.commentSelection(...args),
      
      // Feature: CodeFix
      applyCodeActionCommand: async (...args) => await service.applyCodeActionCommand.apply(service, args as any) as any,
      getCodeFixesAtPosition: (...args) => service.getCodeFixesAtPosition(...args),
      getCombinedCodeFix: (...args) => service.getCombinedCodeFix(...args),

      // Feature: Highlights
      // Feature: Emit

      // Others
      cleanupSemanticCache: (...args) => service.cleanupSemanticCache(...args),
      findRenameLocations: (...args) => service.findRenameLocations(...args),
      getBraceMatchingAtPosition: (...args) => service.getBraceMatchingAtPosition(...args),
      getBreakpointStatementAtPosition: (...args) => service.getBreakpointStatementAtPosition(...args),
      getDocumentHighlights: (...args) => service.getDocumentHighlights(...args),
      getEmitOutput: (...args) => service.getEmitOutput(...args),
      toLineColumnOffset: (...args) => service.toLineColumnOffset(...args),
     
      getIndentationAtPosition: (...args) => service.getIndentationAtPosition(...args),
      getJsxClosingTagAtPosition: (...args) => service.getJsxClosingTagAtPosition(...args),
      getNameOrDottedNameSpan: (...args) => service.getNameOrDottedNameSpan(...args),
      getNavigateToItems: (...args) => service.getNavigateToItems(...args),
      getNavigationBarItems: (...args) => service.getNavigationBarItems(...args),
      getNavigationTree: (...args) => service.getNavigationTree(...args),
      getRenameInfo: (...args) => service.getRenameInfo(...args),
      getSignatureHelpItems: (...args) => service.getSignatureHelpItems.apply(service, args as any),
      getSmartSelectionRange: (...args) => service.getSmartSelectionRange(...args),
      getSpanOfEnclosingComment: (...args) => service.getSpanOfEnclosingComment(...args),
      getTodoComments: (...args) => service.getTodoComments(...args),
      getTypeDefinitionAtPosition: (...args) => service.getTypeDefinitionAtPosition(...args),
      isValidBraceCompletionAtPosition: (...args) => service.isValidBraceCompletionAtPosition(...args),
      organizeImports: (...args) => service.organizeImports(...args),
      prepareCallHierarchy: (...args) => service.prepareCallHierarchy(...args),
      provideCallHierarchyIncomingCalls: (...args) => service.provideCallHierarchyIncomingCalls(...args),
      provideCallHierarchyOutgoingCalls: (...args) => service.provideCallHierarchyOutgoingCalls(...args),
      toggleLineComment: (...args) => service.toggleLineComment(...args),
      toggleMultilineComment: (...args) => service.toggleMultilineComment(...args),
      uncommentSelection: (...args) => service.uncommentSelection(...args),
    }
  }
}
