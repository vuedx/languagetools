import { first } from '@vuedx/shared'
import { Container } from 'inversify'
import { INJECTABLE_TS_SERVICE } from './constants'
import type {
  ExtendedTSLanguageService,
  Typescript,
} from './contracts/Typescript'
import { overrideMethod } from './overrideMethod'
import { FilesystemService } from './services/FilesystemService'
import { LoggerService } from './services/LoggerService'
import { TypescriptPluginService } from './services/TypescriptPluginService'
import { TypescriptService } from './services/TypescriptService'

export interface CreateLanguageServiceOptions
  extends Typescript.server.PluginCreateInfo {
  typescript: typeof Typescript
  typesDir: string
}

let id = 0
export function createTypescriptLanguageService(
  options: CreateLanguageServiceOptions,
): ExtendedTSLanguageService {
  const context = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
    skipBaseClassChecks: true,
  })

  const logger = options.project.projectService.logger
  logger.info(
    `Create Vue Plugin: ${id++} at ${Date.now()} for ${options.project.getProjectName()}`,
  )
  LoggerService.setWriter({
    info: (line) => logger.info(line),
    debug: (line) => logger.info(line),
    error: (line) => logger.msg(line, options.typescript.server.Msg.Err),
  })

  const ts = TypescriptService.createSingletonInstance(
    options.typescript,
    options.serverHost,
    options.project.projectService,
    options.typesDir,
  )
  const fs = FilesystemService.createSingletonInstance(ts)
  context.bind(TypescriptService).toConstantValue(ts)
  context.bind(FilesystemService).toConstantValue(fs)
  context.bind(INJECTABLE_TS_SERVICE).toConstantValue(options.languageService)

  patchTSHosts(options, fs, ts)

  const service = context.get(TypescriptPluginService)

  // prettier-ignore
  return {
    ...options.languageService,
    
    _isVueTS: true,
    _vueTS_inner: options.languageService,
    // Required for correctness.
    getExternalFiles: () => service.getExternalFiles(options.project),
    getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
    getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),
    findReferences: (...args) => service.findReferences(...args),
    dispose: () => {
      service.dispose()
      context.unbindAll()
    },
    
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

const patched = new WeakSet<any>()
const isDebug = process.env['DEBUG_VUE_TRANSFORMS'] != null
function patchTSHosts(
  options: CreateLanguageServiceOptions,
  fs: FilesystemService,
  ts: TypescriptService,
): void {
  const logger = LoggerService.getLogger('patch')

  // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
  overrideMethod(
    options.serverHost,
    'fileExists',
    (fileExists) => (fileName) => {
      if (fs.isVueVirtualFile(fileName)) {
        const file = fs.getVueFile(fileName)
        if (file == null) return false
        const exists = file.getActiveTSDocIDs().has(fileName)
        if (exists) logger.debug(`Found ${fileName}`)
        return exists
      } else if (fs.isVueTsFile(fileName)) {
        const exists = fileExists(fileName.substr(0, fileName.length - 3))
        if (exists) logger.debug(`Found ${fileName}`)
        return exists
      }

      return fileExists(fileName)
    },
  )

  // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
  overrideMethod(
    options.serverHost,
    'watchFile',
    (watchFile) => (fileName, callback) => {
      if (fs.isVueTsFile(fileName) || fs.isVueVirtualFile(fileName)) {
        return { close: () => {} }
      }

      return watchFile(fileName, callback)
    },
  )

  // Patch: get contents for virtual files from VueSFCDocument
  overrideMethod(
    options.serverHost,
    'readFile',
    (readFile) => (fileName, encoding) => {
      if (fs.isVueVirtualFile(fileName)) {
        const content = fs
          .getVueFile(fileName)
          ?.getDocById(fileName)
          ?.generated?.getText()
        logger.debug(`Load ${fileName}${isDebug ? `\n${content ?? ''}` : ''}`)
        return content
      } else if (fs.isVueTsFile(fileName)) {
        const content = fs.getVueFile(fileName)?.getTypeScriptText()
        logger.debug(`Load ${fileName}${isDebug ? `\n${content ?? ''}` : ''}`)
        return content
      }

      return readFile(fileName, encoding)
    },
  )

  if (!patched.has(options.project)) {
    patched.add(options.project)

    overrideMethod(
      options.project,
      'getCompilerOptions',
      (getCompilerOptions) => () => {
        const settings = getCompilerOptions()

        settings.jsx = options.typescript.JsxEmit.Preserve

        return settings
      },
    )

    overrideMethod(
      options.project,
      'getCompilationSettings',
      (getCompilationSettings) => () => {
        const settings = getCompilationSettings()

        settings.jsx = options.typescript.JsxEmit.Preserve

        return settings
      },
    )
  }
  overrideMethod(
    options.languageServiceHost,
    'getScriptVersion',
    (getScriptVersion) => (fileName: string): string => {
      const version = getScriptVersion(fs.getRealFileName(fileName))

      if (
        fs.isVueFile(fileName) ||
        fs.isVueVirtualFile(fileName) ||
        fs.isVueTsFile(fileName)
      ) {
        logger.debug(`Version ${version} of ${fileName}`)
      }

      return version
    },
  )
  // Patch: create snapshots for virtual files from VueSFCDocument
  overrideMethod(
    options.languageServiceHost,
    'getScriptSnapshot',
    (getScriptSnapshot) => (
      fileName: string,
    ): Typescript.IScriptSnapshot | undefined => {
      if (fs.isVueTsFile(fileName)) {
        const file = fs.getVueFile(fileName)

        if (file != null) {
          return options.typescript.ScriptSnapshot.fromString(
            file.getTypeScriptText(),
          )
        }

        logger.error(`Missing snapshot: ${fileName}`)

        return undefined
      } else if (fs.isVueVirtualFile(fileName)) {
        const vueFile = fs.getVueFile(fileName)
        const blockFile = vueFile?.getDocById(fileName)

        if (blockFile?.generated != null) {
          return options.typescript.ScriptSnapshot.fromString(
            blockFile.generated.getText(),
          )
        }

        logger.error(`Missing snapshot: ${fileName}`)

        return undefined
      } else {
        return getScriptSnapshot(fileName)
      }
    },
  )
  // Patch: Add .vue.ts file for every .vue file

  overrideMethod(
    options.languageServiceHost,
    'getScriptFileNames',
    (getScriptFileNames) => () => {
      const virtuals = new Set<string>()
      const fileNames = new Set<string>()

      getScriptFileNames().forEach((fileName) => {
        if (
          fs.isVueFile(fileName) ||
          fs.isVueTsFile(fileName) ||
          fs.isVueVirtualFile(fileName)
        ) {
          virtuals.add(fs.getRealFileName(fileName))
        } else {
          fileNames.add(fileName)
        }
      })

      virtuals.forEach((fileName) => {
        fileNames.add(fileName)
        fileNames.add(`${fileName}.ts`)
      })

      logger.debug('getScriptFileNames', fileNames)

      return Array.from(fileNames)
    },
  )
  // Patch: 'vue' import it VueDX runtime types
  const project = options.project
  overrideMethod(
    options.languageServiceHost,
    'resolveModuleNames',
    (resolveModuleNames) => (
      moduleNames,
      containingFile,
      reusedNames,
      redirectedReference,
      _options,
    ) => {
      if (containingFile === ts.getRuntimeHelperFileName('3.0')) {
        // Runtime dependencies have only 'vue' dependency for now.
        const result = options.typescript.resolveModuleName(
          'vue',
          first(project.getRootFiles()),
          _options,
          options.serverHost,
          undefined,
          redirectedReference,
        )

        logger.debug(
          `Resolve 'vue' to "${
            result.resolvedModule?.resolvedFileName ?? '?'
          }" in "${containingFile}"`,
        )

        return [result.resolvedModule]
      }

      const isVueEntry = fs.isVueTsFile(containingFile)
      if (isVueEntry) {
        if (moduleNames[0] !== 'vuedx~runtime') {
          throw new Error('Expected vuedx~runtime import in .vue.ts file')
        }
        moduleNames = moduleNames.slice(1)
      }

      const result =
        resolveModuleNames != null // Very unlikely to be undefined
          ? resolveModuleNames(
              moduleNames,
              containingFile,
              reusedNames,
              redirectedReference,
              _options,
            )
          : project.resolveModuleNames(
              moduleNames,
              containingFile,
              reusedNames,
              redirectedReference,
            )
      if (isVueEntry) {
        const file = fs.getVueFile(containingFile)
        if (file != null) {
          const files = file.getActiveTSDocIDs()
          const filesArray = Array.from(files)
          result.forEach((resolved) => {
            if (resolved != null) {
              if (!files.has(resolved.resolvedFileName)) {
                const name = getFilenameWithoutExtension(
                  resolved.resolvedFileName,
                )
                resolved.resolvedFileName =
                  filesArray.find((item) => item.startsWith(name)) ??
                  resolved.resolvedFileName
              }
            }
          })
        }
        result.unshift({
          resolvedFileName: ts.getRuntimeHelperFileName('3.0'),
          isExternalLibraryImport: true,
        })
        logger.debug('RESOLVE IN: ' + containingFile, moduleNames, result)
      }
      return result
    },
  )

  function getFilenameWithoutExtension(fileName: string): string {
    return fileName.replace(/\.(ts|tsx|js|jsx|json|d\.ts)$/, '')
  }
}
