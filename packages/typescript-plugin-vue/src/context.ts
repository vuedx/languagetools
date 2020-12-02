import JSON5 from 'json5'
import {
  ConfiguredVueProject,
  InferredVueProject,
  VueProject,
} from '@vuedx/analyze'
import {
  asUri,
  DocumentStore,
  getContainingFile,
  INTERNAL_MODULE_SELECTOR,
  isVirtualFile,
  isVueFile,
  MODULE_SELECTOR,
  parseVirtualFileName,
  VIRTUAL_FILENAME_SEPARATOR,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import { URI } from 'vscode-uri'
import { wrapFn } from './helpers/logger'
import { tryPatchMethod } from './helpers/patcher'
import { PluginConfig, TS } from './interfaces'

function getLastNumberFromVersion(version: string): number {
  const parts = version.split(/[^0-9]+/)
  const ver = parts.pop()

  return Number(ver)
}

class ProxyDocumentStore extends DocumentStore<VueTextDocument> {
  get(fileNameOrUri: string): VueTextDocument | null {
    return super.get(asUri(fileNameOrUri))
  }

  has(fileNameOrUri: string): boolean {
    return super.has(asUri(fileNameOrUri))
  }

  set(fileNameOrUri: string, document: VueTextDocument): void {
    return super.set(asUri(fileNameOrUri), document)
  }

  delete(fileNameOrUri: string): boolean {
    return super.delete(asUri(fileNameOrUri))
  }
}

function getConfig(config: Partial<PluginConfig> = {}): PluginConfig {
  return {
    ...config,
    features: {
      diagnostics: ['semantic', 'suggestion', 'syntactic'],
      organizeImports: true,
      quickInfo: true,
      rename: true,
      refactor: true,
      goto: true,
      ...config.features,
    },
    directories: [
      { kind: 'component', name: 'components', path: 'src/components' },
    ],
  }
}

export class PluginContext {
  public readonly store: DocumentStore<VueTextDocument>
  private _config: PluginConfig = getConfig()
  private _projectService!: TS.server.ProjectService
  private _serverHost!: TS.server.ServerHost
  public readonly _externalFiles = new WeakMap<TS.server.Project, string[]>()
  public readonly _vueProjects: Array<{
    project: VueProject
    dispose: () => void
  }> = []

  public constructor(public readonly typescript: typeof TS) {
    this.store = new ProxyDocumentStore(
      (uri) => {
        const fileName = URI.parse(uri).fsPath
        const content = this.typescript.sys.readFile(fileName) ?? ''
        return this.createVueDocument(fileName, content)
      },
      (uri) => {
        const fileName = URI.parse(uri).fsPath

        return URI.file(this.projectService.toPath(fileName)).toString()
      },
    )
  }

  public get config(): Readonly<PluginConfig> {
    return this._config
  }

  public get serviceHost(): TS.server.ServerHost {
    return this._serverHost
  }

  public get projectService(): TS.server.ProjectService {
    return this._projectService
  }

  public log(message: string): void {
    if (this.projectService != null) {
      this.projectService.logger.info(`Vue.js:: ${message}`)
    }
  }

  public getVueVersion(fileName: string): string {
    return this.getVueProjectForFile(fileName, false)?.version ?? '3.0.0'
  }

  public getExternalFiles(project: TS.server.Project): string[] {
    return this._externalFiles.get(project) ?? []
  }

  private forEachTSProject(fn: (project: TS.server.Project) => void): void {
    this.projectService.configuredProjects.forEach(fn)
    this.projectService.inferredProjects.forEach(fn)
    this.projectService.externalProjects.forEach(fn)
  }

  public getVueProjectForFile(fileName: string, ensure: true): VueProject
  public getVueProjectForFile(
    fileName: string,
    ensure?: false,
  ): VueProject | null
  public getVueProjectForFile(
    fileName: string,
    ensure?: boolean,
  ): VueProject | null {
    let project =
      this._vueProjects.find(({ project }) =>
        fileName.startsWith(project.rootDir + '/'),
      )?.project ?? null

    if (project === null && ensure === true) {
      const packageFile = this.typescript.findConfigFile(
        fileName,
        this.typescript.sys.fileExists,
        'package.json',
      )

      const configFile = this.typescript.findConfigFile(
        fileName,
        this.typescript.sys.fileExists,
        'vueconfig.json',
      )

      const rootDir = Path.posix.dirname(packageFile ?? configFile ?? fileName)
      const fileNames = this.serviceHost.readDirectory(
        rootDir,
        ['.tsx', '.jsx', '.ts', '.js'],
        ['node_modules'],
      )

      const tryRequire = (fileName: string): any => {
        try {
          if (Path.posix.basename(fileName) === 'vueconfig.json') {
            const contents = this.serviceHost.readFile(fileName) ?? ''
            return JSON5.parse(contents)
          }

          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete require.cache[fileName]

          return require(fileName)
        } catch (error) {
          return {}
        }
      }

      const newProject =
        configFile != null
          ? new ConfiguredVueProject(
              rootDir,
              packageFile,
              packageFile != null ? tryRequire(packageFile) : {},
              configFile,
              tryRequire(configFile),
            )
          : new InferredVueProject(
              rootDir,
              packageFile,
              packageFile != null ? tryRequire(packageFile) : {},
            )

      newProject.setFileNames(fileNames)

      const disposables: Array<() => void> = [
        () => {
          this._vueProjects.splice(
            this._vueProjects.findIndex((item) => item.project === newProject),
            1,
          )
        },
      ]

      const dispose = (): void => disposables.forEach((fn) => fn())
      const projectDirWatcher = this.serviceHost.watchDirectory(
        rootDir,
        (fileName: string) => {
          if (fileName.endsWith('/vueconfig.json')) {
            if (newProject.kind === 'inferred') {
              dispose()
              reload()
              return
            }
          }

          if (!/\.(vue|ts|tsx|js|jsx)$/.test(fileName)) return
          if (this.serviceHost.fileExists(fileName)) {
            if (!newProject.fileNames.includes(fileName)) {
              newProject.setFileNames([...newProject.fileNames, fileName])
            }
          } else {
            if (newProject.fileNames.includes(fileName)) {
              newProject.setFileNames(
                newProject.fileNames.filter((f) => f !== fileName),
              )
            }
          }
        },
      )

      disposables.push(() => projectDirWatcher.close())

      const reload = (): void => {
        this.forEachTSProject((tsProject) => {
          const dir = tsProject.getCurrentDirectory()
          if (
            dir.startsWith(newProject.rootDir) ||
            newProject.rootDir.startsWith(dir)
          ) {
            this.getExternalFiles(tsProject).forEach((fileName) => {
              const document = this.store.get(fileName)
              if (document != null) {
                document.markDirty()
                document.all().forEach((doc) => {
                  if (
                    [
                      'javascript',
                      'typescript',
                      'javascriptreact',
                      'typescriptreact',
                    ].includes(doc.languageId)
                  ) {
                    triggerFileUpdate(this, doc.fsPath)
                  }
                })
              }
            })
            tsProject.markAsDirty()
            tsProject.refreshDiagnostics()
          }
        })
      }

      if (configFile != null) {
        __DEV__ && this.log(`Setting VueProject FileWatcher:  ${configFile}`)
        const configFileWatcher = this.serviceHost.watchFile(
          configFile,
          (_, event) => {
            if (event === this.typescript.FileWatcherEventKind.Deleted) {
              dispose()
            } else {
              ;(newProject as ConfiguredVueProject).setConfig(
                tryRequire(configFile),
              )
              newProject.markDirty()
            }
            reload()
          },
        )
        disposables.push(() => {
          __DEV__ && this.log(`Stopping VueProject FileWatcher: ${configFile}`)
          configFileWatcher.close()
        })
      }

      if (packageFile != null) {
        const packageFileWatcher = this.serviceHost.watchFile(
          packageFile,
          (_, event) => {
            if (event === this.typescript.FileWatcherEventKind.Deleted) {
              dispose()
            } else {
              newProject.packageJSON = {
                dependencies: {},
                devDependencies: {},
                ...tryRequire(packageFile),
              }
              newProject.markDirty()
            }
          },
        )
        disposables.push(() => packageFileWatcher.close())
      }

      this._vueProjects.push({ project: newProject, dispose })

      project = newProject
    }

    return project
  }

  private lastCleanupAt = Date.now()
  public disposeUnusedProjects(force: boolean = false): void {
    if (
      !force &&
      (Date.now() - this.lastCleanupAt > 5 * 60 * 1000 ||
        this._vueProjects.length === 0)
    ) {
      return
    }

    this.lastCleanupAt = Date.now()
    const usedProjects = new Set<VueProject>()

    // TODO: detect unused projects

    this._vueProjects.forEach(({ project, dispose }) => {
      if (!usedProjects.has(project)) {
        // dispose()
      }
    })
  }

  public createVueDocument(fileName: string, content: string): VueTextDocument {
    const uri = URI.file(fileName).toString()
    const document = VueTextDocument.create(uri, 'vue', 0, content, {
      getGlobalComponents: wrapFn('getGlobalComponents', () => {
        const project = this.getVueProjectForFile(fileName, true)

        return project.kind === 'inferred'
          ? project.components
          : project.globalComponents
      }),
    })

    this.store.set(uri, document)

    return document
  }

  public error(error: Error): void {
    if (this.projectService != null) {
      this.projectService.logger.msg(
        `Vue.js:: ${error.message} ${error.stack ?? ''}`,
        this.typescript.server.Msg.Err,
      )
    }
  }

  public tryCreateScriptInfo(fileName: string): void {
    try {
      if (isVirtualFile(fileName)) {
        const vueFileName = getContainingFile(fileName)
        this.store.get(vueFileName)
        const scriptInfo = this.projectService.getOrCreateScriptInfoForNormalizedPath(
          this.typescript.server.toNormalizedPath(vueFileName),
          false,
        )
        if (scriptInfo != null) {
          patchScriptInfo(this, scriptInfo)
        }
      }
    } catch {}
  }

  public load(info: TS.server.PluginCreateInfo): void {
    this.log(`Loading Vue plugin: ${info.project.getProjectName()}`)

    this._serverHost = info.serverHost
    this._projectService = info.project.projectService
    this.setConfig(info.config)

    patchProjectService(this)
    patchServiceHost(this)
    patchLanguageServiceHost(this, info.languageServiceHost)
  }

  public setConfig(config: Partial<PluginConfig>): void {
    this._config = getConfig(config)
  }
}

function patchProjectService(context: PluginContext): void {
  patchExtraFileExtensions(context)
}

function patchExtraFileExtensions(context: PluginContext): void {
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    {
      extension: 'vue',
      isMixedContent: false,
      scriptKind: context.typescript.ScriptKind.Deferred,
    },
  ]

  tryPatchMethod(
    context.projectService,
    'setHostConfiguration',
    (setHostConfiguration) => {
      context.log(`[patch] Add support for vue extension. (ProjectService)`)
      return wrapFn(
        'setHostConfiguration',
        (args: TS.server.protocol.ConfigureRequestArguments): void => {
          const current = ((context.projectService as any)
            .hostConfiguration as TS.server.HostConfiguration)
            .extraFileExtensions

          if (args.extraFileExtensions != null) {
            args.extraFileExtensions.push(...extraFileExtensions)
            context.log(
              `extraFileExtensions: ${JSON.stringify(
                args.extraFileExtensions,
              )}`,
            )
          } else if (
            current == null ||
            !current.some((ext) => ext.extension === 'vue')
          ) {
            args.extraFileExtensions = [...extraFileExtensions]
          }

          return setHostConfiguration(args)
        },
      )
    },
  )

  if (
    ((context.projectService as any)
      .hostConfiguration as TS.server.HostConfiguration).extraFileExtensions?.some(
      (ext) => ext.extension === 'vue',
    ) === true
  ) {
    return
  }

  // Enable .vue after enhancing the language server.
  context.projectService.setHostConfiguration({ extraFileExtensions: [] })
}

function patchLanguageServiceHost(
  context: PluginContext,
  languageServiceHost: TS.LanguageServiceHost,
): void {
  patchGetScriptFileNames(context, languageServiceHost)
  patchModuleResolution(context, languageServiceHost)
  tryPatchMethod(
    languageServiceHost,
    'getCompilationSettings',
    (getCompilationSettings) => () => {
      const settings = getCompilationSettings()

      settings.jsx = context.typescript.JsxEmit.Preserve
      if (settings.allowJs !== false) {
        settings.allowJs = true
      }

      if (settings.checkJs !== false) {
        settings.checkJs = true
      }

      return settings
    },
  )
}

function patchGetScriptFileNames(
  context: PluginContext,
  languageServiceHost: TS.LanguageServiceHost,
): void {
  tryPatchMethod(
    languageServiceHost,
    'getScriptFileNames',
    (getScriptFileNames) => {
      context.log(
        `[patch] Override getScriptFileNames to expand .vue files to virtual files. (LanguageServerHost)`,
      )

      return wrapFn('getScriptFileNames', (): string[] => {
        const fileNames = new Set<string>()

        const vueFiles = new Set<string>()

        getScriptFileNames()
          .map((fileName) =>
            isVirtualFile(fileName) ? getContainingFile(fileName) : fileName,
          )
          .forEach((fileName) => {
            if (isVueFile(fileName)) {
              const document = context.store.get(fileName)
              if (document != null) {
                vueFiles.add(fileName)
                fileNames.add(document.getDocumentFileName(MODULE_SELECTOR))
              }
            } else {
              fileNames.add(fileName)
            }
          })

        if (vueFiles.size > 0) {
          const files = Array.from(vueFiles)
          const projects = new Set(
            files
              .map((fileName) =>
                context.projectService.getDefaultProjectForFile(
                  context.typescript.server.toNormalizedPath(fileName),
                  false,
                ),
              )
              .filter(Boolean) as TS.server.Project[],
          )

          projects.forEach((project) => {
            context._externalFiles.set(project, files)
            if (
              project instanceof context.typescript.server.ConfiguredProject
            ) {
              const vueProject = context.getVueProjectForFile(
                project.getCurrentDirectory() + '/placeholder.vue',
                true,
              )

              vueProject.setFileNames(files)
            }
          })
        }

        return Array.from(fileNames)
      })
    },
  )
}

function patchFileExists(context: PluginContext): void {
  tryPatchMethod(
    context.serviceHost,
    'fileExists',
    (fileExists = context.typescript.sys.fileExists) => {
      context.log(
        `[patch] Override fileExists to check containing file for virtual files. (ServiceHost)`,
      )

      return wrapFn('fileExists', (fileName: string): boolean => {
        if (isVirtualFile(fileName)) {
          const document = context.store.get(getContainingFile(fileName))
          const result = parseVirtualFileName(fileName)

          return (
            document != null &&
            result != null &&
            fileName === document.getDocumentFileName(result.selector)
          )
        }

        return fileExists(fileName)
      })
    },
  )
}

function patchReadFile(context: PluginContext): void {
  tryPatchMethod(context.serviceHost, 'readFile', (readFile) => {
    context.log(
      `[patch] Override readFile to check containing file for virtual files. (ServiceHost)`,
    )

    return wrapFn('readFile', (fileName: string, encoding?: string):
      | string
      | undefined => {
      if (isVirtualFile(fileName)) {
        context.log(`host.readFile("${fileName}")`)
        const document = context.store
          .get(getContainingFile(fileName))
          ?.getDocument(fileName)
        if (document != null) return document.getText()
        else return
      }

      return readFile != null
        ? readFile(fileName, encoding)
        : context.typescript.sys.readFile(fileName, encoding)
    })
  })
}

function patchReadDirectory(context: PluginContext): void {
  tryPatchMethod(context.serviceHost, 'readDirectory', (readDirectory) => {
    return wrapFn(
      'readDirectory',
      (path, extensions, exclude, include, depth) => {
        if (extensions != null) {
          extensions = [...extensions, '.vue']
        }

        return readDirectory(path, extensions, exclude, include, depth)
      },
    )
  })
}

function patchModuleResolution(
  context: PluginContext,
  languageServiceHost: TS.LanguageServiceHost,
): void {
  tryPatchMethod(
    languageServiceHost,
    'resolveModuleNames',
    (resolveModuleNames) => {
      context.log(
        `[patch] Override resolveModuleNames to resolve imports from .vue files. (LanguageServerHost)`,
      )

      return wrapFn(
        'resolveModuleNames',
        (
          moduleNames: string[],
          containingFile: string,
          reusedNames: string[] | undefined,
          redirectedReferences: TS.ResolvedProjectReference | undefined,
          options: TS.CompilerOptions,
        ): Array<TS.ResolvedModule | undefined> => {
          if (isVueFile(containingFile))
            throw new Error('A .vue file should not be part of TS program.')

          const newModuleNames = moduleNames.map((moduleName) =>
            isVueFile(moduleName)
              ? moduleName + VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR
              : moduleName.endsWith('.vue?internal')
              ? moduleName.replace(/\?internal$/, '') +
                VIRTUAL_FILENAME_SEPARATOR +
                INTERNAL_MODULE_SELECTOR
              : moduleName,
          )

          // TODO: Support paths mapped to .vue files, if needed.
          const result =
            resolveModuleNames != null
              ? resolveModuleNames(
                  newModuleNames,
                  containingFile,
                  reusedNames,
                  redirectedReferences,
                  options,
                )
              : []

          result.forEach((resolved) => {
            if (resolved != null && isVirtualFile(resolved.resolvedFileName)) {
              context.tryCreateScriptInfo(resolved.resolvedFileName) // Trigger .vue script info creation.
            }
          })

          if (__DEV__) {
            if (!containingFile.includes('node_modules')) {
              context.log(
                `Module resolution in ${containingFile} :: ` +
                  JSON.stringify(
                    moduleNames.map(
                      (name, index) =>
                        `${name} => ${newModuleNames[index]} => ${
                          result[index]?.resolvedFileName ?? '?'
                        }`,
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
    },
  )
}

function patchServiceHost(context: PluginContext): void {
  patchWatchFile(context)
  patchWatchDirectory(context)
  patchFileExists(context)
  patchReadFile(context)
  patchReadDirectory(context)
}

function patchWatchFile(context: PluginContext): void {
  tryPatchMethod(context.serviceHost, 'watchFile', (watchFile) => {
    context.log(
      `[patch] Override watchFile to watch virtual files. (ServiceHost)`,
    )

    return wrapFn(
      'watchFile',
      (
        fileName: string,
        callback: TS.FileWatcherCallback,
        pollingInterval?: number,
        options?: TS.WatchOptions,
      ): TS.FileWatcher => {
        if (isVirtualFile(fileName)) {
          return watchFile(
            getContainingFile(fileName),
            (_, event) => {
              callback(fileName, event)
            },
            pollingInterval,
            options,
          )
        }

        return watchFile(fileName, callback, pollingInterval, options)
      },
    )
  })
}

function patchWatchDirectory(context: PluginContext): void {
  tryPatchMethod(context.serviceHost, 'watchDirectory', (watchDirectory) => {
    context.log(
      `[patch] Override watchFile to watch virtual files. (ServiceHost)`,
    )

    return wrapFn(
      'watchDirectory',
      (
        fileName: string,
        callback: TS.DirectoryWatcherCallback,
        recursive?: boolean,
        options?: TS.WatchOptions,
      ): TS.FileWatcher => {
        return watchDirectory(
          fileName,
          (fileName) => {
            if (isVueFile(fileName)) {
              // TODO: Ensure this does mess with fileName case-sensitivity
              const document = context.store.get(fileName)
              if (document != null) {
                callback(document.getDocumentFileName('_module'))
              }
            } else {
              callback(fileName)
            }
          },
          recursive,
          options,
        )
      },
    )
  })
}

function triggerFileUpdate(context: PluginContext, fileName: string): void {
  if (__DEV__) context.log(`Taint ${fileName}`)
  const scriptInfo = context.projectService.getScriptInfo(fileName)

  if (scriptInfo != null) {
    // @ts-expect-error - internal method but it's better for performance compared to it's public counter part `reloadFromFile()`.
    scriptInfo.delayReloadNonMixedContentFile()
  } else if (__DEV__) context.log(`Cannot find scriptInfo for ${fileName}`)
}

function patchScriptInfo(
  context: PluginContext,
  scriptInfo: TS.server.ScriptInfo,
): void {
  if (scriptInfo == null) throw new Error('ScriptInfo is required.')

  tryPatchMethod(scriptInfo, 'editContent', (editContent) => {
    context.log(
      `[patch] Override editContent() of "${scriptInfo.fileName}" to sync virtual files. (ScriptInfo)`,
    )

    return wrapFn(
      'editContent',
      (start: number, end: number, newText: string): void => {
        const document = context.store.get(scriptInfo.fileName)
        if (document == null)
          throw new Error('VueTextDocument should exist for every ScriptInfo.')
        const range = {
          start: document.positionAt(start),
          end: document.positionAt(end),
        }
        editContent(start, end, newText)

        VueTextDocument.update(
          document,
          [{ range, text: newText }],
          getLastNumberFromVersion(scriptInfo.getLatestVersion()),
        )
          .all()
          .forEach((document) => triggerFileUpdate(context, document.fsPath))
      },
    )
  })
}
