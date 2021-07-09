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
    getExternalFiles: () => service.getExternalFiles(),
    getSemanticDiagnostics: (...args) => service.getSemanticDiagnostics(...args),
    getSyntacticDiagnostics: (...args) => service.getSyntacticDiagnostics(...args),
    getSuggestionDiagnostics: (...args) => service.getSuggestionDiagnostics(...args),
    getEncodedSemanticClassifications: (...args) => service.getEncodedSemanticClassifications(...args),
    getEncodedSyntacticClassifications: (...args) => service.getEncodedSyntacticClassifications(...args),
    findReferences: (...args) => service.findReferences(...args),
    getQuickInfoAtPosition: (...args) => service.getQuickInfoAtPosition(...args),
    getDefinitionAtPosition: (...args) => service.getDefinitionAtPosition(...args),
    getDefinitionAndBoundSpan: (...args) => service.getDefinitionAndBoundSpan(...args),
    getCompletionsAtPosition: (...args) => service.getCompletionsAtPosition(...args),
    getCompletionEntryDetails: (...args) => service.getCompletionEntryDetails(...args),
    dispose: () => {
      service.dispose()
      context.unbindAll()
    },
  }
}

function patchTSHosts(
  options: CreateLanguageServiceOptions,
  fs: FilesystemService,
): void {
  const logger = LoggerService.getLogger('patch')
  // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
  const fileExists = options.serverHost.fileExists.bind(options.serverHost)
  options.serverHost.fileExists = (fileName) => {
    if (fs.isVueVirtualFile(fileName)) {
      const file = fs.getVueFile(fileName)
      if (file == null) return false
      return file.activeTSDocIDs.has(fileName)
    } else if (fs.isVueTsFile(fileName)) {
      return fileExists(fs.getRealFileName(fileName))
    }

    return fileExists(fileName)
  }

  // Patch: get contents for virtual files from VueSFCDocument
  const readFile = options.serverHost.readFile.bind(options.serverHost)
  options.serverHost.readFile = (fileName, encoding) => {
    if (fs.isVueVirtualFile(fileName)) {
      return fs.getVueFile(fileName)?.getDocById(fileName)?.generated?.getText()
    } else if (fs.isVueTsFile(fileName)) {
      return fs.getVueFile(fileName)?.getTypeScriptText()
    }

    return readFile(fileName, encoding)
  }

  // Patch: return version of .vue file for virtual files
  const getScriptVersion = options.languageServiceHost.getScriptVersion.bind(
    options.languageServiceHost,
  )
  options.languageServiceHost.getScriptVersion = (fileName: string): string =>
    getScriptVersion(fs.getRealFileName(fileName))

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
    } else if (fs.isVueVirtualFile(fileName)) {
      const vueFile = fs.getVueFile(fileName)
      const blockFile = vueFile?.getDocById(fileName)

      if (blockFile?.generated != null) {
        return options.typescript.ScriptSnapshot.fromString(
          blockFile.generated.getText(),
        )
      }
    } else {
      return getScriptSnapshot(fileName)
    }
    return undefined
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
      if (fs.isVueFile(fileName)) fileNames.add(`${fileName}.ts`)
    })

    // TODO: Add only when needed.
    fileNames.add(options.getRuntimeHelperFileName('3.0'))

    logger.debug('[VueDX] Files: ', fileNames)

    return Array.from(fileNames)
  }
}

function createFilesystemProvider({
  project,
  serverHost,
}: CreateLanguageServiceOptions): FilesystemProvider {
  const fs: FilesystemProvider = {
    exists(fileName) {
      return project.fileExists(fileName)
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
  }
}
