import { Container } from 'inversify'
import type { ExtendedTSLanguageService } from './contracts/Typescript'
import type { CreateLanguageServiceOptions } from './CreateLanguageServiceOptions'
import { patchTSHosts } from './patchTSHosts'
import { ConfigService, PluginConfig } from './services/ConfigService'
import { FilesystemService } from './services/FilesystemService'
import { LoggerService } from './services/LoggerService'
import { TypescriptPluginService } from './services/TypescriptPluginService'
import { TypescriptContextService } from './services/TypescriptContextService'
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
    info: (line) => logger.info(line),
    debug: (line) => logger.info(line),
    error: (line) => logger.msg(line, options.typescript.server.Msg.Err),
  })

  // Create global shared services
  // Maybe singleton is an issue?
  const ts = new TypescriptContextService({
    lib: options.typescript,
    serverHost: options.serverHost,
    projectService: options.project.projectService,
    tsService: options.languageService,
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
        typesDir: options.typesDir,
      })
    },

    service: {
      ...options.languageService,

      // Tag language sever to avoid recursive decoration.
      _isVueTS: true,
      _vueTS_id: id,
      _vueTS_inner: options.languageService,

      // Required for correctness.
      dispose: () => {
        service.dispose()
        options.dispose?.()
      },
      getExternalFiles: () => service.getExternalFiles(options.project),
      getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
      getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),
      findReferences: (...args) => service.findReferences(...args),

      // Feature: Syntax
      getOutliningSpans: (...args) => service.getOutliningSpans(...args),

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
    }
  }
}
