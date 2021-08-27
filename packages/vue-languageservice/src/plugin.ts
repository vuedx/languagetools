import { Container } from 'inversify'
import { INJECTABLE_TS_SERVICE } from './constants'
import { patchTSHosts } from './patchTSHosts'
import { FilesystemService } from './services/FilesystemService'
import { LoggerService } from './services/LoggerService'
import { TypescriptPluginService } from './services/TypescriptPluginService'
import { TypescriptService } from './services/TypescriptService'

import type { ExtendedTSLanguageService } from './contracts/Typescript'
import type { CreateLanguageServiceOptions } from './CreateLanguageServiceOptions'

/**
 * Decorate Typescript language server to support .vue files.
 */
export function createTypescriptLanguageService(
  options: CreateLanguageServiceOptions,
): ExtendedTSLanguageService {
  // Setup logger to forwards logs to tsserver log file.
  const logger = options.project.projectService.logger
  logger.info(`Create Vue Plugin for ${options.project.getProjectName()}`)
  LoggerService.setWriter({
    info: (line) => logger.info(line),
    debug: (line) => logger.info(line),
    error: (line) => logger.msg(line, options.typescript.server.Msg.Err),
  })

  // Create global shared services
  const ts = TypescriptService.createSingletonInstance(
    options.typescript,
    options.serverHost,
    options.project.projectService,
    options.typesDir,
  )
  const fs = FilesystemService.createSingletonInstance(ts)

  // Fix typescript serverHost, languageServiceHost and project to support .vue files
  patchTSHosts(options, fs, ts)

  // Setup dependency injection container
  const context = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
    skipBaseClassChecks: true,
  })
  context.bind(TypescriptService).toConstantValue(ts)
  context.bind(FilesystemService).toConstantValue(fs)
  context.bind(INJECTABLE_TS_SERVICE).toConstantValue(options.languageService)

  // Create Language Service
  const service = context.get(TypescriptPluginService)

  // prettier-ignore
  return {
    ...options.languageService,

    // Tag language sever to avoid recursive decoration.
    _isVueTS: true,
    _vueTS_inner: options.languageService,

    // Required for correctness.
    dispose: () => service.dispose(),
    getExternalFiles: () => service.getExternalFiles(options.project),
    getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
    getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),
    findReferences: (...args) => service.findReferences(...args),
    
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
