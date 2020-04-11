import {
  isVirtualFile,
  isVueFile,
  VirtualTextDocument,
  VueTextDocument,
  DocumentStore,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import { URI } from 'vscode-uri'
import { VueContext, VueLanguageServer } from './server'

interface Modules {
  typescript: typeof import('typescript/lib/tsserverlibrary')
}

let store: DocumentStore<VueTextDocument>

export default function init({
  typescript: ts,
}: Modules): ts.server.PluginModule {
  function create(info: ts.server.PluginCreateInfo) {
    function log(...args: any[]) {
      if (__DEV__) {
        info.project.projectService.logger.info(
          `vue:: ` +
            args
              .join(' ')
              .replace(
                new RegExp(__dirname.split('@vuedx').shift()!, 'g'),
                '~/'
              )
        )
      }
    }

    store =
      store ||
      new DocumentStore(
        (uri) => {
          const fileName = URI.parse(uri).fsPath
          const content = info.serverHost.readFile(fileName) || ''
          __DEV__ && console.log(`DocumentStore.load(file=${fileName})`)

          return VueTextDocument.create(uri, 'vue', 0, content)
        },
        (uri) => {
          return URI.file(
            info.project.projectService.toPath(URI.parse(uri).fsPath)
          ).toString()
        }
      )

    function verbose(message: string) {
      // return log(message)
    }

    __DEV__ && log(`Create ts server with vue plugin...`)
    if (__DEV__) {
      console.log = log
    }

    const context = new VueContext(store, { log })

    // @ts-ignore
    if (!info.project.__VUE__) {
      // @ts-ignore
      info.project.__VUE__ = true
      info.project.projectService.setHostConfiguration({
        extraFileExtensions: [
          {
            extension: 'vue',
            isMixedContent: true,
            scriptKind: ts.ScriptKind.Deferred,
          },
        ],
      })
    }

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
      override(info[key], 'fileExists', (fn) => (path) => {
        __DEV__ &&
          (context.isVueFile(path) || context.isVirtualFile(path)) &&
          verbose(`${key}.fileExists(fileName=${path})`)

        return isVirtualFile(path) || fn(path)
      })

      override(info[key], 'readFile', (fn) => (path: string) => {
        __DEV__ &&
          (context.isVueFile(path) || context.isVirtualFile(path)) &&
          verbose(`${key}.readFile(fileName=${path})`)

        return isVirtualFile(path)
          ? context.getVirtualDocument(path)!.getText()
          : fn(path)
      })

      override(
        info[key],
        'readDirectory',
        (fn) => (path, extensions, exclude, include, depth) => {
          if (extensions) {
            __DEV__ && verbose(`${key}.readDirectory()`)
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
            verbose(`${key}.watchFile(fileName=${path})`)

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
            const local = { ...options }
            if (!local.paths) {
              local.paths = {}
            }
            const skipLogging = context.isVirtualFile(containingFile)
            if (context.isVirtualFile(containingFile)) {
              containingFile = context.getFileNameFromVirtualFileName(
                containingFile
              )
            }
            const containingDir = Path.dirname(containingFile)
            const perFolderCache = cache.getOrCreateCacheForDirectory(
              containingDir
            )
            const forVueFiles: Array<
              ts.ResolvedModule | ts.ResolvedModuleFull | undefined
            > = moduleNames.map((moduleName) => {
              if (isVueFile(moduleName) || moduleName in local.paths!) {
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
                      if (info.serverHost.fileExists(fileName)) return true
                      else if (fileName.endsWith('.vue.ts')) {
                        return info.serverHost.fileExists(
                          fileName.replace(/\.ts$/, '')
                        )
                      }

                      return info.serverHost.fileExists(fileName)
                    },
                  },
                  cache,
                  redirectedReference
                )

                if (
                  result.resolvedModule?.resolvedFileName.endsWith('.vue.ts')
                ) {
                  const fileName = result.resolvedModule.resolvedFileName.replace(
                    /\.vue\.ts$/,
                    '.vue'
                  )

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
            > = moduleNames.map(
              (_, index) => forVueFiles[index] || forAllFiles[index]
            )

            if (
              __DEV__ &&
              !skipLogging &&
              (forVueFiles.some(Boolean) || isVueFile(containingFile))
            ) {
              log(
                `${key}.resolveModuleNames in ${containingFile} = ${JSON.stringify(
                  options
                )}`
              )
              info.project.projectService.logger.startGroup()
              moduleNames.forEach((moduleName, index) => {
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
      override(info[key], 'getScriptFileNames', (fn) => () => {
        const result = fn()
        const vue = result.filter(isVueFile)
        const virtual = result.filter(isVirtualFile)

        virtual.forEach((file) =>
          result.push(context.getFileNameFromVirtualFileName(file))
        )
        vue.forEach((fileName) => {
          context
            .getVueDocument(fileName)
            ?.forTS()
            .forEach((virtual) => result.push(virtual.fsPath))
        })

        __DEV__ &&
          log(`${key}.getScriptFileNames() = ${JSON.stringify(result)}`)

        return result
      })

      // Script Information
      override(info[key], 'getScriptKind', (fn) => (path) => {
        let kind: ts.ScriptKind
        if (isVueFile(path)) {
          kind = ts.ScriptKind.Deferred
          __DEV__ && verbose(`${key}.getScriptKind(${path}) = ${kind}`)
        } else if (isVirtualFile(path)) {
          kind = languageIdToScriptKind(
            context.getVirtualDocument(path)!.languageId
          )
          __DEV__ && verbose(`${key}.getScriptKind(${path}) = ${kind}`)
        } else {
          kind = fn(path)
        }

        return kind
      })

      override(info[key], 'getScriptVersion', (fn) => (path) => {
        let version: string
        if (isVueFile(path)) {
          version = fn(path)
          __DEV__ && verbose(`${key}.getScriptVersion(${path}) = ${version}`)
        } else if (isVirtualFile(path)) {
          version = fn(context.getFileNameFromVirtualFileName(path))
          __DEV__ && verbose(`${key}.getScriptVersion(${path}) = ${version}`)
        } else {
          version = fn(path)
        }

        return version
      })

      override(info[key], 'getScriptSnapshot', (fn) => (path) => {
        if (isVirtualFile(path)) {
          __DEV__ && verbose(`${key}.getScriptSnapshot(${path})`)
          return ts.ScriptSnapshot.fromString(
            context.getVirtualDocument(path)!.getText()
          )
        }

        if (isVueFile(path)) {
          __DEV__ && verbose(`${key}.getScriptSnapshot(${path})`)
        }

        return fn(path)
      })
    }
    function patchProjectService() {
      override(info.project.projectService, 'getScriptInfoForPath', (fn) => {
        const skip = new Set<string>()
        return (fileName) => {
          let scriptInfo = fn(fileName)

          if (context.isVueFile(fileName)) {
            if (!scriptInfo) {
              if (skip.has(fileName.toString())) return scriptInfo
              skip.add(fileName.toString())
              scriptInfo = info.project.projectService.getOrCreateScriptInfoForNormalizedPath(
                ts.server.toNormalizedPath(fileName),
                false
              )!
              skip.delete(fileName.toString())
            }
            patchScriptInfo(fileName, scriptInfo)
          }

          if (!scriptInfo && context.isVirtualFile(fileName)) {
            info.project.projectService.getScriptInfoForPath(
              info.project.projectService.toPath(
                context.getFileNameFromVirtualFileName(fileName)
              )
            )

            const virtual = fn(fileName)

            if (virtual) {
              __DEV__ &&
                log(
                  `project.projectService.getScriptInfoForPath(fileName=${virtual.fileName})`
                )
            }

            return virtual
          }

          return scriptInfo
        }
      })
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
            `project.projectService.getScriptInfoForPath(fileName=${scriptInfo.fileName})`
          )

        const uri = URI.file(scriptInfo.fileName).toString()
        if (!fileContent) {
          const snapshot = scriptInfo.getSnapshot()

          fileContent = snapshot.getText(0, snapshot.getLength())
        }
        const document = store.has(uri)
          ? store.get(uri)!
          : VueTextDocument.create(uri, 'vue', 0, fileContent)!

        if (!store.has(uri)) {
          __DEV__ &&
            log(`document created while patching (fileName=${document.fsPath})`)
          store.set(uri, document)
        }

        const { projectService } = info.project
        const isOpen = scriptInfo.isScriptOpen()
        const project = scriptInfo.isOrphan()
          ? projectService.getDefaultProjectForFile(scriptInfo.fileName, false)
          : scriptInfo.getDefaultProject()
        store.set(uri, document)
        const related = document.forTS().map((virtual) => {
          const normalizedPath = ts.server.toNormalizedPath(virtual.fsPath)
          const path = projectService.toPath(normalizedPath)
          const scriptKind = languageIdToScriptKind(virtual.languageId)
          const scriptInfo = new ts.server.ScriptInfo(
            info.serverHost,
            normalizedPath,
            scriptKind,
            false,
            path,
            // @ts-ignore
            projectService.filenameToScriptInfoVersion.get(path)
          )

          // @ts-ignore
          projectService.filenameToScriptInfo.set(scriptInfo.path, scriptInfo)
          // @ts-ignore
          projectService.filenameToScriptInfoVersion.delete(scriptInfo.path)

          __DEV__ &&
            log(
              `project.projectService.getScriptInfoForPath(fileName=${scriptInfo.fileName})`
            )

          if (project) scriptInfo.attachToProject(project)

          if (!isOpen) {
            // @ts-ignore
            projectService.watchClosedScriptInfo(scriptInfo)
          } else {
            // @ts-ignore
            projectService.stopWatchingScriptInfo(scriptInfo)
            if (project) {
              projectService.openClientFile(virtual.fsPath)
              project.addRoot(scriptInfo, normalizedPath)
            } else {
              info.project.addRoot(scriptInfo, normalizedPath)
            }
          }

          return scriptInfo
        })

        override(
          scriptInfo,
          'editContent',
          (editContent) => (start, end, text) => {
            __DEV__ &&
              log(
                `ScriptInfo.editContent(fileName=${scriptInfo.fileName}, start=${start}, end=${end}, text=${text})`
              )

            const range = {
              start: document.positionAt(start),
              end: document.positionAt(end),
            }
            editContent(start, end, text)
            const version = getLastNumberFromVersion(
              scriptInfo.getLatestVersion()
            )

            VueTextDocument.update(document, [{ range, text }], version)
            document.forTS().forEach((virtual) =>
              forVirtualDocument(virtual, (currentScriptInfo) => {
                currentScriptInfo.open(virtual.getText())
                if (!scriptInfo.isScriptOpen()) {
                  currentScriptInfo.close()
                }
              })
            )
          }
        )

        override(scriptInfo, 'attachToProject', (fn) => (project) => {
          const ok = fn(project)

          if (ok) {
            related.forEach((scriptInfo) => scriptInfo.attachToProject(project))
          }

          return ok
        })

        override(scriptInfo, 'detachFromProject', (fn) => (project) => {
          fn(project)

          related.forEach((scriptInfo) => scriptInfo.detachFromProject(project))
        })

        override(scriptInfo, 'open', (fn) => (newText) => {
          fn(newText)

          related.forEach((scriptInfo) =>
            scriptInfo.open(
              context.getVirtualDocument(scriptInfo.fileName)!.getText()
            )
          )
        })

        override(scriptInfo, 'close', (fn) => (fileExists) => {
          fn(fileExists)

          related.forEach((scriptInfo) =>
            scriptInfo.close(!!context.getVirtualDocument(scriptInfo.fileName))
          )
        })

        override(scriptInfo, 'detachAllProjects', (fn) => () => {
          fn()
          related.forEach((scriptInfo) => scriptInfo.detachAllProjects())
        })
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
        return ts.ScriptKind.Deferred
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

  return {
    create,
  }
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
