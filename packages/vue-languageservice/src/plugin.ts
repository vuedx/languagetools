import {
  INJECTABLE_FS_PROVIDER,
  INJECTABLE_TS,
  INJECTABLE_TS_PROJECT,
  INJECTABLE_TS_PROVIDER,
  INJECTABLE_TS_SERVICE,
} from './constants'
import { container } from './container'
import type { FilesystemProvider } from './contracts/FilesystemProvider'
import type {
  ExtendedTSLanguageService,
  TSLanguageService,
  TSProject,
  Typescript,
} from './contracts/Typescript'
import type { TypescriptProvider } from './contracts/TypescriptProvider'
import { FilesystemService } from './services/FilesystemService'
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

  context
    .bind<typeof Typescript>(INJECTABLE_TS)
    .toConstantValue(options.typescript)
  context
    .bind<TSLanguageService>(INJECTABLE_TS_SERVICE)
    .toConstantValue(options.languageService)
  context
    .bind<FilesystemProvider>(INJECTABLE_FS_PROVIDER)
    .toConstantValue(createFilesystemProvider(options))
  context
    .bind<TSProject>(INJECTABLE_TS_PROJECT)
    .toConstantValue(options.project)
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
  const fileExists = options.serverHost.fileExists.bind(options.serverHost)
  options.serverHost.fileExists = (fileName) => {
    if (fs.isVueVirtualFile(fileName)) {
      const file = fs.getVueFile(fileName)
      if (file == null) return false
      return file.activeTSDocIDs.has(fileName)
    } else if (fs.isVueTsFile(fileName)) {
      return fileExists(fileName.substr(0, fileName.length - 3))
    }

    return fileExists(fileName)
  }

  const readFile = options.serverHost.readFile.bind(options.serverHost)
  options.serverHost.readFile = (fileName, encoding) => {
    if (fs.isVueVirtualFile(fileName)) {
      return fs.getVueFile(fileName)?.getDocById(fileName)?.generated?.getText()
    } else if (fs.isVueTsFile(fileName)) {
      return fs.getVueFile(fileName)?.getTypeScriptText()
    }

    return readFile(fileName, encoding)
  }

  const getScriptVersion = options.languageServiceHost.getScriptVersion.bind(
    options.languageServiceHost,
  )
  options.languageServiceHost.getScriptVersion = (fileName: string): string =>
    getScriptVersion(
      fs.isVueVirtualFile(fileName)
        ? fs.removeVirtualFileQuery(fileName)
        : fileName,
    )

  const getScriptSnapshot = options.languageServiceHost.getScriptSnapshot.bind(
    options.languageServiceHost,
  )
  options.languageServiceHost.getScriptSnapshot = (
    fileName: string,
  ): Typescript.IScriptSnapshot | undefined => {
    if (fs.isVueTsFile(fileName)) {
      const file = fs.getVueFile(fileName)

      options.project.projectService.logger.info(
        `[VueDX] Loading ${fileName}:\n${
          file?.getTypeScriptText() ?? '"NotFound"'
        }`,
      )

      if (file != null) {
        return options.typescript.ScriptSnapshot.fromString(
          file.getTypeScriptText(),
        )
      }
    } else if (fs.isVueVirtualFile(fileName)) {
      const vueFile = fs.getVueFile(fileName)
      const blockFile = vueFile?.getDocById(fileName)

      options.project.projectService.logger.info(
        `[VueDX] Loading ${fileName} of ${vueFile?.fileName ?? 'NotFound'}:\n${
          blockFile?.generated?.getText() ?? '"NotFound"'
        }`,
      )

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

  const getScriptFileNames = options.languageServiceHost.getScriptFileNames.bind(
    options.languageServiceHost,
  )
  options.languageServiceHost.getScriptFileNames = () => {
    const fileNames = getScriptFileNames()
      .map((fileName) =>
        fs.isVueFile(fileName) ? [fileName, `${fileName}.ts`] : fileName,
      )
      .flat()

    // TODO: Add only when needed.
    fileNames.push(options.getRuntimeHelperFileName('3.0'))

    console.error('[VueDX] Files: ' + JSON.stringify(fileNames, null, 2))

    return fileNames
  }

  // const resolveModuleNames = options.languageServiceHost.resolveModuleNames?.bind(
  //   options.languageServiceHost,
  // )
  // const project = options.project
  // options.languageServiceHost.resolveModuleNames = (
  //   moduleNames,
  //   containingFile,
  //   reusedNames,
  //   redirectedReference,
  //   options,
  // ) => {
  //   const result =
  //     resolveModuleNames != null
  //       ? resolveModuleNames(
  //           moduleNames,
  //           containingFile,
  //           reusedNames,
  //           redirectedReference,
  //           options,
  //         )
  //       : project.resolveModuleNames(
  //           moduleNames,
  //           containingFile,
  //           reusedNames,
  //           redirectedReference,
  //         )

  //   result.forEach((resolved, index) => {
  //     if (resolved == null)
  //       console.error(`[VueDX] Cannot resolve ${moduleNames[index] ?? 'xx'}`)
  //     if (resolved?.resolvedFileName.endsWith('.vue.ts') === true) {
  //       resolved.resolvedFileName = resolved.resolvedFileName.substring(
  //         0,
  //         resolved.resolvedFileName.length - 3,
  //       )
  //     }
  //   })

  //   return result
  // }

  // // options.languageServiceHost.getResolvedModuleWithFailedLookupLocationsFromCache(modulename, containingFile)
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
    getProjectFor: () => options.project,
    getLanguageServiceFor: () => options.languageService,
    getServerHost: () => options.serverHost,
  }
}
