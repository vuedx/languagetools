import { DocumentStore, isVirtualFile, isVueFile, VueTextDocument } from '@vuedx/vue-virtual-textdocument'
import FS from 'fs'
import Path from 'path'
import { URI } from 'vscode-uri'
import { VueContext, VueLanguageServer } from './server'

interface Modules {
  typescript: typeof import('typescript/lib/tsserverlibrary')
}

export default function init({ typescript: ts }: Modules) {
  console.log('Init vue plugin.')
  function create(info: ts.server.PluginCreateInfo) {
    info.project.projectService.logger.info(
      'vue:: Create ts server with vue plugin...'
    )

    function log(...args: any[]) {
      info.project.projectService.logger.info('vue:: ' + args.join(' '))
    }

    console.log = log
    const context = new VueContext(
      new DocumentStore(
        uri => {
          info.project.projectService.logger.info('vue:: store load ' + uri)

          return VueTextDocument.create(
            uri,
            'vue',
            0,
            FS.readFileSync(URI.parse(uri).fsPath, { encoding: 'utf8' }) || ''
          )
        },
        () => info.project.useCaseSensitiveFileNames()
      )
    )

    function patchFileSystem(
      key: keyof Pick<
        typeof info,
        'project' | 'languageServiceHost' | 'serverHost'
      >
    ) {
      if (info[key].fileExists) {
        override(info[key], 'fileExists', fn => path =>
          isVirtualFile(path) || fn(path)
        )
      }

      if (info[key].readFile) {
        override(info[key], 'readFile', fn => (path: string) =>
          isVirtualFile(path)
            ? context.getVirtualDocument(path)!.getText()
            : fn(path)
        )
      }

      if (info[key].readDirectory) {
        override(
          info[key],
          'readDirectory',
          fn => (path, extensions, exclude, include, depth) => {
            if (extensions) extensions = ['vue'].concat(extensions)

            return fn(path, extensions, include, exclude, depth)
          }
        )
      }
    }
    function patchModuleResolution(
      key: keyof Pick<typeof info, 'project' | 'languageServiceHost'>
    ) {
      const cache = ts.createModuleResolutionCache(
        info.project.getCurrentDirectory(),
        fileName => fileName
      )
      override(
        info[key],
        'resolveModuleNames',
        fn =>
          function(
            moduleNames,
            containingFile,
            reusedNames,
            redirectedReference,
            options
          ) {
            if (containingFile.includes('node_modules')) {
              // TODO: Maybe handle in node_modules

              return fn(
                moduleNames,
                containingFile,
                reusedNames,
                redirectedReference,
                options
              )
            }

            if (isVirtualFile(containingFile)) {
              containingFile = context.getVirtualDocument(containingFile)!
                .fsPath
            }

            const containingDir = Path.dirname(containingFile)
            const perFolderCache = cache.getOrCreateCacheForDirectory(
              containingDir
            )
            const result: Array<
              ts.ResolvedModule | ts.ResolvedModuleFull | undefined
            > = moduleNames.map(moduleName => {
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
              } else {
                const [result] = fn(
                  [moduleName],
                  containingFile,
                  reusedNames,
                  redirectedReference,
                  options
                )

                return result
              }
            })

            if (info.project.projectService.logger.loggingEnabled()) {
              info.project.projectService.logger.info(
                `vue:: ${key}.resolveModuleNames in ${containingFile}`
              )
              info.project.projectService.logger.startGroup()
              moduleNames.forEach((moduleName, index) => {
                info.project.projectService.logger.info(
                  `  ${moduleName} => ${result[index]?.resolvedFileName}`
                )
              })
              info.project.projectService.logger.endGroup()
            }

            return result
          }
      )
    }
    function patchScriptInformation(
      key: keyof Pick<typeof info, 'project' | 'languageServiceHost'>
    ) {
      // Script Information
      if (info[key].getScriptKind) {
        override(info[key], 'getScriptKind', fn => path => {
          let kind: ts.ScriptKind
          if (isVueFile(path)) {
            kind = ts.ScriptKind.External
          } else if (isVirtualFile(path)) {
            kind = languageIdToScriptKind(
              context.getVirtualDocument(path)!.languageId
            )
          } else {
            kind = fn(path)
          }

          return kind
        })
      }

      if (info[key].getScriptVersion) {
        override(info[key], 'getScriptVersion', fn => path => {
          let version: string = '0'
          if (isVueFile(path)) {
            const doc = context.getVueDocument(path)!
            version = 'Vue-' + doc.version
          } else if (isVirtualFile(path)) {
            const doc = context.getVirtualDocument(path)!
            version = 'Vue-' + doc.container.version + '-' + doc.version
          } else {
            version = fn(version)
          }

          return version
        })
      }

      if (info[key].getScriptSnapshot) {
        override(info[key], 'getScriptSnapshot', fn => path =>
          isVirtualFile(path)
            ? ts.ScriptSnapshot.fromString(
                context.getVirtualDocument(path)!.getText()
              )
            : fn(path)
        )
      }
    }
    function patchProjectService() {
      override(
        info.project.projectService,
        'getScriptInfoForPath',
        fn => fileName => {
          const result = fn(fileName)

          if (!result && isVirtualFile(fileName)) {
            log('getScriptInfoForPath file=' + fileName)
            const document = context.getVirtualDocument(fileName)!
            const result = new ts.server.ScriptInfo(
              info.serverHost,
              ts.server.toNormalizedPath(document.fsPath),
              languageIdToScriptKind(document.languageId),
              false,
              fileName
            )
            // @ts-ignore - UNSAFE accessing private property.
            info.project.projectService.filenameToScriptInfo.set(
              result.path,
              result
            )

            return result
          } else if (result && isVueFile(fileName)) {
            try {
              patchScriptInfo(fileName, result)
            } catch {}
          }

          return result
        }
      )
    }
    function patchScriptInfo(fileName: string, result: ts.server.ScriptInfo) {
      if (!result) return
      if (!isVueFile(fileName)) return
      // @ts-ignore hidden property on patched script info.
      if (!result.__vue__) {
        const uri = URI.file(fileName).toString()
        const editContent = result.editContent.bind(result)
        Object.defineProperty(result, '__vue__', {
          enumerable: false,
          configurable: false,
          value: true,
        })
        result.editContent = function(start, end, text) {
          editContent(start, end, text)

          const version = getLastNumberFromVersion(result.getLatestVersion())
          const document = context.getVueDocument(uri)!
          const snapshot = result.getSnapshot()

          VueTextDocument.update(
            document,
            [{ text: snapshot.getText(0, snapshot.getLength())! }],
            version
          )
        }

        const document = context.getVueDocument(uri)!
        const script = document.getBlockDocument('script')

        if (script) {
          info.project.projectService.openClientFileWithNormalizedPath(
            ts.server.toNormalizedPath(script.fsPath)
          )
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
  const original = object[key].bind(object)
  const fn = handler(original)

  // @ts-ignore
  object[key] = fn
}
