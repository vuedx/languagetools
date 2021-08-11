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
  isRuntimeHelperFileName(fileName: string): boolean
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
): void {
  const logger = LoggerService.getLogger('patch')

  // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
  tryPatchMethod(
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
  tryPatchMethod(
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
  tryPatchMethod(
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

    tryPatchMethod(
      options.project,
      'getCompilerOptions',
      (getCompilerOptions) => () => {
        const settings = getCompilerOptions()

        settings.jsx = options.typescript.JsxEmit.Preserve

        return settings
      },
    )

    tryPatchMethod(
      options.project,
      'getCompilationSettings',
      (getCompilationSettings) => () => {
        const settings = getCompilationSettings()

        settings.jsx = options.typescript.JsxEmit.Preserve

        return settings
      },
    )
  }
  tryPatchMethod(
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
  tryPatchMethod(
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

  tryPatchMethod(
    options.languageServiceHost,
    'getScriptFileNames',
    (getScriptFileNames) => () => {
      const original = getScriptFileNames()
      const fileNames = new Set(original)

      original.forEach((fileName) => {
        if (fs.isVueFile(fileName)) {
          fileNames.add(`${fileName}.ts`)
        }
      })

      logger.debug('getScriptFileNames', fileNames)

      return Array.from(fileNames)
    },
  )
  // Patch: 'vue' import it VueDX runtime types
  const project = options.project
  tryPatchMethod(
    options.languageServiceHost,
    'resolveModuleNames',
    (resolveModuleNames) => (
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

      const isVueEntry = fs.isVueTsFile(containingFile)
      if (isVueEntry) {
        logger.debug('RESOLVE IN: ' + containingFile, moduleNames)
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
        result.unshift({
          resolvedFileName: options.getRuntimeHelperFileName('3.0'),
          isExternalLibraryImport: true,
        })
      }
      return result
    },
  )
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

const PATCHED_METHODS = Symbol('Vue Patched Methods')
function tryPatchMethod<T extends object, K extends keyof T>(
  target: T,
  methodName: K,
  createOverride: (fn: T[K]) => T[K] extends undefined ? never : T[K],
): void {
  const patched: K[] = (target as any)[PATCHED_METHODS] ?? []
  if (patched.includes(methodName)) return
  let fn = target[methodName]
  if (typeof fn === 'function') {
    try {
      fn = fn.bind(target)
    } catch {
      // - ignore
    }
  }
  target[methodName] = createOverride(fn)
  patched.push(methodName)
  ;(target as any)[PATCHED_METHODS] = patched
}
