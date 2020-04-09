import {
  DocumentStore,
  isVirtualFile,
  isVueFile,
  VueTextDocument,
  VirtualTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import FS from 'fs'
import Path from 'path'
import { URI } from 'vscode-uri'
import { VueContext, VueLanguageServer } from './server'

interface Modules {
  typescript: typeof import('typescript/lib/tsserverlibrary')
}

const store = new DocumentStore((uri) => {
  const fileName = URI.parse(uri).fsPath
  const content = FS.readFileSync(fileName, { encoding: 'utf8' }) || ''
  __DEV__ && console.log(`DocumentStore.load(file=${fileName})`)

  return VueTextDocument.create(uri, 'vue', 0, content)
})

export default function init({ typescript: ts }: Modules) {
  function create(info: ts.server.PluginCreateInfo) {
    function log(...args: any[]) {
      if (__DEV__) {
        info.project.projectService.logger.info(`vue:: ` + args.join(' '))
      }
    }

    __DEV__ && log(`Create ts server with vue plugin...`)
    if (__DEV__) {
      console.log = log
    }

    const context = new VueContext(store, { log })

    function forVirtualDocument(
      document: VirtualTextDocument,
      fn: (scriptInfo: ts.server.ScriptInfo) => void
    ) {
      const scriptInfo = info.project.projectService.getScriptInfo(
        document.fsPath
      )

      if (scriptInfo) fn(scriptInfo)
    }
    function patchFileSystem(key: keyof Pick<typeof info, 'serverHost'>) {
      // @ts-ignore
      if (info[key].__vue__) return log(`already patched ${key}`)

      Object.defineProperty(info[key], '__vue__', {
        enumerable: false,
        configurable: false,
        value: true,
      })

      override(info[key], 'fileExists', (fn) => (path) => {
        __DEV__ &&
          (context.isVueFile(path) || context.isVirtualFile(path)) &&
          log(`${key}.fileExists(fileName=${path})`)

        return isVirtualFile(path) || fn(path)
      })

      override(info[key], 'readFile', (fn) => (path: string) => {
        __DEV__ &&
          (context.isVueFile(path) || context.isVirtualFile(path)) &&
          log(`${key}.readFile(fileName=${path})`)

        return isVirtualFile(path)
          ? context.getVirtualDocument(path)!.getText()
          : fn(path)
      })

      override(
        info[key],
        'readDirectory',
        (fn) => (path, extensions, exclude, include, depth) => {
          if (extensions) {
            __DEV__ && log(`${key}.readDirectory()`)
            extensions = ['vue'].concat(extensions)
          }

          return fn(path, extensions, include, exclude, depth)
        }
      )

      override(
        info[key],
        'watchFile',
        (fn) => (path, callback, pollingInterval, options) => {
          __DEV__ &&
            (context.isVueFile(path) || context.isVirtualFile(path)) &&
            log(`${key}.watchFile(fileName=${path})`)

          if (isVirtualFile(path)) {
            const realPath = context.getFileNameFromVirtualFileName(path)

            return fn(
              realPath,
              (_, eventKind) => callback(path, eventKind),
              pollingInterval,
              options
            )
          }

          return fn(path, callback, pollingInterval, options)
        }
      )
    }
    function patchModuleResolution(
      key: keyof Pick<typeof info, 'languageServiceHost'>
    ) {
      // @ts-ignore
      if (info[key].__vue__) return log(`already patched ${key}`)

      Object.defineProperty(info[key], '__vue__', {
        enumerable: false,
        configurable: false,
        value: true,
      })

      const cache = ts.createModuleResolutionCache(
        info.project.getCurrentDirectory(),
        (fileName) => fileName
      )
      override(
        info[key],
        'resolveModuleNames',
        (fn) =>
          function (
            moduleNames,
            containingFile,
            reusedNames,
            redirectedReference,
            options
          ) {
            if (isVirtualFile(containingFile)) {
              containingFile = context.getVirtualDocument(containingFile)!
                .fsPath
            }

            const containingDir = Path.dirname(containingFile)
            const perFolderCache = cache.getOrCreateCacheForDirectory(
              containingDir
            )
            const moduleTypes = moduleNames.map(isVueFile)
            const forVueFiles: Array<
              ts.ResolvedModule | ts.ResolvedModuleFull | undefined
            > = moduleNames.map((moduleName) => {
              if (isVueFile(moduleName)) {
                if (perFolderCache.has(moduleName)) {
                  return perFolderCache.get(moduleName)!.resolvedModule
                }

                const result = ts.resolveModuleName(
                  moduleName,
                  containingFile,
                  options,
                  {
                    ...info.serverHost,
                    fileExists(fileName) {
                      fileName = fileName.endsWith('.vue.ts')
                        ? fileName.substr(0, fileName.length - 3)
                        : fileName

                      return info.serverHost.fileExists(fileName)
                    },
                  },
                  undefined,
                  redirectedReference
                )

                if (
                  result.resolvedModule?.resolvedFileName.endsWith('.vue.ts')
                ) {
                  const fileName = result.resolvedModule.resolvedFileName.replace(
                    /\.vue\.ts$/,
                    '.vue'
                  )

                  if (info.serverHost.fileExists(fileName)) {
                    const document = context
                      .getVueDocument(fileName)!
                      .getBlockDocument('script')!

                    const resolvedModule: ts.ResolvedModuleFull = {
                      isExternalLibraryImport: moduleName.includes(
                        'node_modules'
                      ),
                      resolvedFileName: document.fsPath,
                      extension: fileNameToExtension(document.fsPath),
                    }

                    perFolderCache.set(moduleName, { resolvedModule })

                    return resolvedModule
                  }
                }
              }
            })
            const forAllFiles = fn(
              moduleNames,
              containingFile,
              reusedNames,
              redirectedReference,
              options
            )

            const result: Array<
              ts.ResolvedModule | ts.ResolvedModuleFull | undefined
            > = moduleTypes.map((isVueFile, index) =>
              isVueFile ? forVueFiles[index] : forAllFiles[index]
            )

            if (info.project.projectService.logger.loggingEnabled()) {
              __DEV__ && log(`${key}.resolveModuleNames in ${containingFile}`)
              info.project.projectService.logger.startGroup()
              moduleNames.forEach((moduleName, index) => {
                __DEV__ &&
                  log(`  ${moduleName} => ${result[index]?.resolvedFileName}`)
              })
              info.project.projectService.logger.endGroup()
            }

            return result
          }
      )
    }
    function patchScriptInformation(
      key: keyof Pick<typeof info, 'languageServiceHost'>
    ) {
      // @ts-ignore
      if (info[key].__vue__) return log(`already patched ${key}`)

      Object.defineProperty(info[key], '__vue__', {
        enumerable: false,
        configurable: false,
        value: true,
      })

      // Script Information
      override(info[key], 'getScriptKind', (fn) => (path) => {
        let kind: ts.ScriptKind
        if (isVueFile(path)) {
          kind = ts.ScriptKind.External
          __DEV__ && log(`${key}.getScriptKind(${path}) = ${kind}`)
        } else if (isVirtualFile(path)) {
          kind = languageIdToScriptKind(
            context.getVirtualDocument(path)!.languageId
          )
          __DEV__ && log(`${key}.getScriptKind(${path}) = ${kind}`)
        } else {
          kind = fn(path)
        }

        return kind
      })

      override(info[key], 'getScriptVersion', (fn) => (path) => {
        let version: string = '0'
        if (isVueFile(path)) {
          version = fn(path)
          __DEV__ && log(`${key}.getScriptVersion(${path}) = ${version}`)
        } else if (isVirtualFile(path)) {
          const doc = context.getVirtualDocument(path)!
          version = 'Vue-' + doc.container.version + '-' + doc.version
          __DEV__ && log(`${key}.getScriptVersion(${path}) = ${version}`)
        } else {
          version = fn(version)
        }

        return version
      })

      override(info[key], 'getScriptSnapshot', (fn) => (path) => {
        if (isVirtualFile(path)) {
          __DEV__ && log(`${key}.getScriptSnapshot(${path})`)
          return ts.ScriptSnapshot.fromString(
            context.getVirtualDocument(path)!.getText()
          )
        }

        if (isVueFile(path)) {
          __DEV__ && log(`${key}.getScriptSnapshot(${path})`)
        }

        return fn(path)
      })
    }
    function patchProjectService() {
      // @ts-ignore
      if (info.project.projectService.__vue__)
        return log('alraedy patched project.projectService')

      Object.defineProperty(info.project.projectService, '__vue__', {
        enumerable: false,
        configurable: false,
        value: true,
      })

      override(
        info.project.projectService,
        'getOrCreateScriptInfoWorker' as any,
        (fn) => (
          fileName: string,
          currentDirectory: string,
          openedByClient: boolean,
          fileContent?: string,
          scriptKind?: ts.ScriptKind,
          hasMixedContent?: boolean,
          hostToQueryFileExistsOn?: { fileExists(path: string): boolean }
        ) => {
          const scriptInfo = fn(
            fileName,
            currentDirectory,
            openedByClient,
            fileContent,
            scriptKind,
            hasMixedContent,
            hostToQueryFileExistsOn
          )

          __DEV__ &&
            (context.isVirtualFile(fileName) || context.isVueFile(fileName)) &&
            log(
              `project.projectService.getOrCreateScriptInfoWorker(openedbyClient=${openedByClient}, fileName=${
                scriptInfo?.fileName
              }) = ${typeof scriptInfo}`
            )

          if (context.isVueFile(fileName)) {
            patchScriptInfo(fileName, scriptInfo, fileContent)
          }

          return scriptInfo
        }
      )
    }

    function patchScriptInfo(
      fileName: string,
      scriptInfo: ts.server.ScriptInfo,
      fileContent?: string
    ) {
      if (!scriptInfo) return
      if (!isVueFile(fileName)) return
      // @ts-ignore hidden property on patched script info.
      if (!scriptInfo.__vue__) {
        Object.defineProperty(scriptInfo, '__vue__', {
          enumerable: false,
          configurable: false,
          value: true,
        })

        __DEV__ &&
          log(
            `patch ScriptInfo (fileName=${
              scriptInfo.fileName
            }) = ${scriptInfo.isScriptOpen()}`
          )

        const uri = URI.file(scriptInfo.fileName).toString()
        if (!fileContent) {
          const snapshot = scriptInfo.getSnapshot()

          fileContent = snapshot.getText(0, snapshot.getLength())
        }

        if (store.has(uri)) {
          store.delete(uri)
        }

        const document = VueTextDocument.create(uri, 'vue', 0, fileContent)!
        store.set(uri, document)

        const editContent = scriptInfo.editContent.bind(scriptInfo)
        scriptInfo.editContent = function (start, end, text) {
          __DEV__ &&
            log(
              `ScriptInfo.editContent(fileName=${scriptInfo.fileName}, start=${start}, end=${end}, text=${text})`
            )

          const range = {
            start: document.positionAt(start),
            end: document.positionAt(end),
          }
          editContent(start, end, text)
          const lengths: Record<string, number> = {}
          document.forTS().forEach((virtual) => {
            lengths[virtual.fsPath] = virtual.getText().length
          })

          const version = getLastNumberFromVersion(
            scriptInfo.getLatestVersion()
          )

          VueTextDocument.update(document, [{ range, text }], version)

          document.forTS().forEach((virtual) =>
            forVirtualDocument(virtual, (scriptInfo) => {
              scriptInfo.editContent(
                0,
                lengths[virtual.fsPath],
                virtual.getText()
              )
            })
          )
        }

        const open = scriptInfo.open.bind(scriptInfo)
        scriptInfo.open = function (newText) {
          open(newText)

          __DEV__ && log(`ScriptInfo.open(fileName=${scriptInfo.fileName})`)
          document
            .forTS()
            .forEach((document) =>
              forVirtualDocument(document, (scriptInfo) =>
                scriptInfo.open(document.getText()) // Maybe ??
              )
            )
        }

        const close = scriptInfo.close.bind(scriptInfo)
        scriptInfo.close = function (fileExists) {
          close(fileExists)

          __DEV__ && log(`ScriptInfo.close(fileName=${scriptInfo.fileName})`)

          document
            .forTS()
            .forEach((document) =>
              forVirtualDocument(document, (scriptInfo) =>
                scriptInfo.close(fileExists)
              )
            )
        }

        document.forTS().forEach((virtual) => {
          __DEV__ &&
            log(
              `project.projectService.getOrCreateScriptInfoForNormalizedPath(fileName=${virtual.fsPath})`
            )
          info.project.projectService.getOrCreateScriptInfoForNormalizedPath(
            ts.server.toNormalizedPath(virtual.fsPath),
            false,
            undefined,
            languageIdToScriptKind(virtual.languageId),
            false,
            info.serverHost
          )
        })

        if (scriptInfo.isScriptOpen()) {
          const projectPath = ts.server.toNormalizedPath(
            scriptInfo.getDefaultProject().getCurrentDirectory()
          )
          document.forTS().forEach((virtual) => {
            info.project.projectService.openClientFileWithNormalizedPath(
              ts.server.toNormalizedPath(virtual.fsPath),
              undefined,
              undefined,
              false,
              projectPath
            )
          })
        }
      }
    }

    patchFileSystem('serverHost')
    patchScriptInformation('languageServiceHost')
    patchModuleResolution('languageServiceHost')
    patchProjectService()

    return VueLanguageServer.create(context, info.languageService, ts)
  }

  function languageIdToScriptKind(languageId: string) {
    switch (languageId) {
      case 'typescript':
        return ts.ScriptKind.TS
      case 'javascript':
        return ts.ScriptKind.JS
      case 'vue':
        return ts.ScriptKind.External
    }
    return ts.ScriptKind.Unknown
  }

  function fileNameToExtension(fileName: string) {
    const ext = fileName.substr(fileName.lastIndexOf('.'))
    switch (ext) {
      case '.ts':
        return ts.Extension.Ts
      case '.js':
        return ts.Extension.Js
      case '.tsx':
        return ts.Extension.Tsx
      case '.jsx':
        return ts.Extension.Jsx
      case '.json':
        return ts.Extension.Json
      default:
        return ts.Extension.Js
    }
  }

  return { create }
}

function getLastNumberFromVersion(version: string) {
  const parts = version.split(/[^0-9]+/)
  const ver = parts.pop()

  return Number(ver)
}

function override<T, K extends keyof T>(
  object: T,
  key: K,
  handler: (fn: Required<T>[K]) => T[K]
) {
  // @ts-ignore
  const original = object[key] ? object[key].bind(object) : object[key]
  if (!original) __DEV__ && console.log(`ERROR: cannot find ${key}`)
  const fn = handler(original)

  // @ts-ignore
  object[key] = fn
}
