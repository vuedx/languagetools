import { first, toFileName } from '@vuedx/shared'
import { overrideMethod } from './overrideMethod'
import { LoggerService, LogLevel } from './services/LoggerService'

import type { Typescript } from './contracts/Typescript'
import type { CreateLanguageServiceOptions } from './CreateLanguageServiceOptions'
import type { FilesystemService } from './services/FilesystemService'
import type { TypescriptContextService } from './services/TypescriptContextService'

const isDebug = process.env['DEBUG_VUE_TRANSFORMS'] != null

export function patchTSHosts(
  options: CreateLanguageServiceOptions,
  fs: FilesystemService,
  ts: TypescriptContextService,
): void {
  const logger = LoggerService.getLogger('patch')
  logger.setLevel(LogLevel.SILENT)
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
        else logger.debug(`Not found ${fileName}`)
        return exists
      } else if (fs.isVueTsFile(fileName)) {
        const exists = fileExists(fileName.substr(0, fileName.length - 3))
        if (exists) logger.debug(`Found ${fileName}`)
        return exists
      } else if (fs.isProjectRuntimeFile(fileName)) {
        return true
      }

      return fileExists(fileName)
    },
  )

  // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
  overrideMethod(
    options.serverHost,
    'watchFile',
    (watchFile) => (fileName, callback) => {
      if (
        fs.isVueTsFile(fileName) ||
        fs.isVueVirtualFile(fileName) ||
        fs.isProjectRuntimeFile(fileName)
      ) {
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
        const doc = fs.getVueFile(fileName)?.getDocById(fileName)
        if (doc != null) {
          if (doc.generated == null) {
            // Use original source when generated is null
            return doc.block.type === 'script' ? doc.source.getText() : ''
          }

          const content = doc.generated.getText()
          logger.debug(`Load ${fileName}${isDebug ? `\n${content}` : ''}`)
          return content
        }
      } else if (fs.isVueTsFile(fileName)) {
        const content = fs.getVueFile(fileName)?.getTypeScriptText()
        logger.debug(`Load ${fileName}${isDebug ? `\n${content ?? ''}` : ''}`)
        return content
      } else if (fs.isProjectRuntimeFile(fileName)) {
        return ts.getProjectRuntimeFile(fileName)
      }

      return readFile(fileName, encoding)
    },
  )

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

  overrideMethod(
    options.languageServiceHost,
    'getScriptVersion',
    (getScriptVersion) => (fileName: string): string => {
      if (fs.isProjectRuntimeFile(fileName)) {
        return `${ts.getVueProjectFor(fileName).projectVersion}`
      }

      const version = getScriptVersion(fs.getRealFileName(fileName))

      if (
        fs.isVueFile(fileName) ||
        fs.isVueVirtualFile(fileName) ||
        fs.isVueTsFile(fileName)
      ) {
        logger.debug(`getScriptVersion(${fileName}): ${version}`)
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

        logger.debug(`VueTS file - missing snapshot: ${fileName}`)

        return undefined
      } else if (fs.isVueVirtualFile(fileName)) {
        const vueFile = fs.getVueFile(fileName)
        const blockFile = vueFile?.getDocById(fileName)

        if (blockFile?.generated != null) {
          return options.typescript.ScriptSnapshot.fromString(
            blockFile.generated.getText(),
          )
        }

        logger.error(`Virtual file - missing snapshot: ${fileName}`)

        return undefined
      } else if (fs.isProjectRuntimeFile(fileName)) {
        return options.typescript.ScriptSnapshot.fromString(
          ts.getProjectRuntimeFile(fileName),
        )
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
      const vueFiles = new Set<string>()
      const fileNames = new Set<string>()

      getScriptFileNames().forEach((fileName) => {
        if (fs.isVueSchemeFile(fileName)) {
          // ignore
        } else if (fs.isVueFile(fileName)) {
          vueFiles.add(fileName)
        } else if (fs.isVueTsFile(fileName) || fs.isVueVirtualFile(fileName)) {
          vueFiles.add(fs.getRealFileName(fileName))
          fileNames.add(fileName)
        } else {
          fileNames.add(fileName)
        }
      })

      vueFiles.forEach((fileName) => {
        fileNames.add(fileName)
        fileNames.add(toFileName({ type: 'vue-ts', fileName }))
      })

      logger.debug(
        'getScriptFileNames()',
        JSON.stringify([...fileNames], null, 2),
      )

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
      if (fs.isVueRuntimeFile(containingFile)) {
        const anyProjectFile = first(project.getRootFiles())
        // Runtime dependencies have only 'vue' dependency for now.
        // TODO: Switch to resolveModuleNameFromCache
        const core = options.typescript.resolveModuleName(
          '@vue/runtime-core',
          anyProjectFile,
          _options,
          options.serverHost,
          undefined,
          redirectedReference,
        )
        const vue = options.typescript.resolveModuleName(
          'vue',
          anyProjectFile,
          _options,
          options.serverHost,
          undefined,
          redirectedReference,
        )
        const result = core.resolvedModule != null ? core : vue
        logger.debug(
          `Resolve '@vue/runtime-core' to "${
            result.resolvedModule?.resolvedFileName ?? '?'
          }" in "${containingFile}"`,
        )

        return moduleNames.map((name) =>
          name === '@vue/runtime-core' ? result.resolvedModule : undefined,
        )
      }

      const isVueEntry = fs.isVueTsFile(containingFile)
      if (isVueEntry) {
        if (moduleNames[0] !== 'vuedx~runtime') {
          throw new Error('Expected vuedx~runtime import in .vue.ts file')
        }
        if (moduleNames[1] !== 'vuedx~project-runtime') {
          throw new Error(
            'Expected vuedx~project-runtime import in .vue.ts file',
          )
        }
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

        result[0] = result[0] ?? {
          resolvedFileName: ts.getVueRuntimeFileNameFor(containingFile),
          isExternalLibraryImport: true,
        }
        result[1] = result[1] ?? {
          resolvedFileName: ts.getProjectRuntimeFileName(containingFile),
          isExternalLibraryImport: false,
        }

        if (__DEV__) {
          logger.debug(
            'RESOLVE IN: ' + containingFile,
            JSON.stringify(
              Object.fromEntries(
                moduleNames.map((moduleName, index) => [
                  moduleName,
                  result[index],
                ]),
              ),
              null,
              2,
            ),
          )
        }
      }
      return result
    },
  )

  function getFilenameWithoutExtension(fileName: string): string {
    return fileName.replace(/\.(ts|tsx|js|jsx|json|d\.ts)$/, '')
  }
}
