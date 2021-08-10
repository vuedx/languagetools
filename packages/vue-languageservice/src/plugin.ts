import { first } from '@vuedx/shared'
import { INJECTABLE_FS_PROVIDER, INJECTABLE_TS_PROVIDER } from './constants'
import { container } from './container'
import type { FilesystemProvider } from './contracts/FilesystemProvider'
import type {
  ExtendedTSLanguageService,
  Typescript,
} from './contracts/Typescript'
import type { TypescriptProvider } from './contracts/TypescriptProvider'
import { FilesystemService } from './services/FilesystemService'
import { LoggerService } from './services/LoggerService'
import { TypescriptPluginService } from './services/TypescriptPluginService'

export interface CreateLanguageServiceOptions
  extends Typescript.server.PluginCreateInfo {
  typescript: typeof Typescript
  getRuntimeHelperFileName(version: string): string
}

export function createTypescriptLanguageService(
  options: CreateLanguageServiceOptions,
): ExtendedTSLanguageService {
  const context = container.createChild()

  const logger = options.project.projectService.logger
  LoggerService.setWriter({
    info: (line) => logger.info(line),
    debug: (line) => logger.info(line),
    error: (line) => logger.msg(line, options.typescript.server.Msg.Err),
  })

  context
    .bind<FilesystemProvider>(INJECTABLE_FS_PROVIDER)
    .toConstantValue(createFilesystemProvider(options))

  context
    .bind<TypescriptProvider>(INJECTABLE_TS_PROVIDER)
    .toConstantValue(createTypescriptProvider(options))

  const fs = context.get(FilesystemService)

  patchTSHosts(options, fs)

  const service = context.get(TypescriptPluginService)

  // prettier-ignore
  return {
    ...options.languageService,
    // Required for correctness.
    getExternalFiles: () => service.getExternalFiles(),
    getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
    getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),
    findReferences: (...args) => service.findReferences(...args),
    dispose: () => {
      service.dispose()
      context.unbindAll()
    },
    
    // Feature: Diagnostics 
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
): void {
  const logger = LoggerService.getLogger('patch')
  if (!patched.has(options.serverHost)) {
    patched.add(options.serverHost)
    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    const fileExists = options.serverHost.fileExists.bind(options.serverHost)
    options.serverHost.fileExists = (fileName) => {
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
    }

    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    const watchFile = options.serverHost.watchFile.bind(options.serverHost)
    options.serverHost.watchFile = (fileName, callback) => {
      if (fs.isVueTsFile(fileName) || fs.isVueVirtualFile(fileName)) {
        return { close: () => {} }
      }

      return watchFile(fileName, callback)
    }

    // Patch: get contents for virtual files from VueSFCDocument
    const readFile = options.serverHost.readFile.bind(options.serverHost)
    options.serverHost.readFile = (fileName, encoding) => {
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
    }
  }

  if (!patched.has(options.project)) {
    patched.add(options.project)
    const getCompilerOptions = options.project.getCompilerOptions.bind(
      options.project,
    )
    options.project.getCompilerOptions = () => {
      const settings = getCompilerOptions()

      settings.jsx = options.typescript.JsxEmit.Preserve

      return settings
    }

    const getCompilationSettings = options.project.getCompilationSettings.bind(
      options.project,
    )
    options.project.getCompilationSettings = () => {
      const settings = getCompilationSettings()

      settings.jsx = options.typescript.JsxEmit.Preserve

      return settings
    }
  }

  if (!patched.has(options.languageServiceHost)) {
    patched.add(options.languageServiceHost)

    // Patch: return version of .vue file for virtual files
    const getScriptVersion = options.languageServiceHost.getScriptVersion.bind(
      options.languageServiceHost,
    )

    options.languageServiceHost.getScriptVersion = (
      fileName: string,
    ): string => {
      const version = getScriptVersion(fs.getRealFileName(fileName))

      if (
        fs.isVueFile(fileName) ||
        fs.isVueVirtualFile(fileName) ||
        fs.isVueTsFile(fileName)
      ) {
        logger.debug(`Version ${version} of ${fileName}`)
      }

      return version
    }

    // Patch: create snapshots for virtual files from VueSFCDocument
    const getScriptSnapshot = options.languageServiceHost.getScriptSnapshot.bind(
      options.languageServiceHost,
    )
    options.languageServiceHost.getScriptSnapshot = (
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
    }

    // Patch: Add .vue.ts file for every .vue file
    // Patch: Add global helpers (VueDX.internal namespace)
    const getScriptFileNames = options.languageServiceHost.getScriptFileNames.bind(
      options.languageServiceHost,
    )
    options.languageServiceHost.getScriptFileNames = () => {
      const original = getScriptFileNames()
      const fileNames = new Set(original)

      original.forEach((fileName) => {
        if (fs.isVueFile(fileName)) {
          fileNames.add(`${fileName}.ts`)
        }
      })

      logger.debug('getScriptFileNames', fileNames)

      return Array.from(fileNames)
    }

    // Patch: 'vue' import it VueDX runtime types
    const resolveModuleNames = options.languageServiceHost.resolveModuleNames?.bind(
      options.languageServiceHost,
    )
    const project = options.project
    options.languageServiceHost.resolveModuleNames = (
      moduleNames,
      containingFile,
      reusedNames,
      redirectedReference,
      _options,
    ) => {
      if (containingFile === options.getRuntimeHelperFileName('3.0')) {
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

      return result
    }
  }
}

function createFilesystemProvider({
  project,
  serverHost,
}: CreateLanguageServiceOptions): FilesystemProvider {
  const fs: FilesystemProvider = {
    exists(fileName) {
      try {
        return project.fileExists(fileName)
      } catch {
        return serverHost.fileExists(fileName)
      }
    },
    read(fileName) {
      const snapshot = project.getScriptInfo(fileName)?.getSnapshot()
      if (snapshot == null) return serverHost.readFile(fileName) ?? ''
      return snapshot.getText(0, snapshot.getLength())
    },
    watch(fileName, onChange) {
      const scriptInfo = project.getScriptInfo(fileName)
      if (scriptInfo == null) return () => {}
      // TODO: Find a better method to implement watch.
      const editContent = scriptInfo.editContent
      scriptInfo.editContent = (start, end, newText) => {
        editContent.call(scriptInfo, start, end, newText)
        onChange([{ text: fs.read(fileName) }], 0)
      }
      return () => {
        scriptInfo.editContent = editContent
      }
    },
  }

  return fs
}

function createTypescriptProvider(
  options: CreateLanguageServiceOptions,
): TypescriptProvider {
  return {
    mode: 'plugin',
    context: { project: options.project, service: options.languageService },
    typescript: options.typescript,
    getProjectFor: () => options.project,
    getLanguageServiceFor: () => options.languageService,
    getServerHost: () => options.serverHost,
    getRuntimeHelperFileName: (version: string) =>
      options.getRuntimeHelperFileName(version),
  }
}
