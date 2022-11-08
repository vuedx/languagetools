import { first, invariant, setDebugging } from '@vuedx/shared'
import { Container } from 'inversify'
import { TS_LANGUAGE_SERVICE } from '../constants'
import type {
  TSLanguageService,
  TSLanguageServiceHost,
  TSProject,
  TSServerHost,
  TypeScript,
} from '../contracts/TypeScript'
import { overrideMethod } from '../helpers/overrideMethod'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { TypescriptPluginService } from '../services/TypescriptPluginService'
import { ConfigManager, PluginConfig } from './ConfigManager'

export interface Options {
  project?: TSProject
  languageService: TSLanguageService
  languageServiceHost: TSLanguageServiceHost
  serverHost: TSServerHost
  config: PluginConfig
  typescript: typeof TypeScript
  typesDir: string
}

export class PluginManager {
  public static instance = new PluginManager()

  private constructor() {}
  readonly #containers = new Map<string, Container>()
  private readonly logger = LoggerService.getLogger(PluginManager.name)

  private _activeContainerId: string | undefined
  public create(options: Options): TSLanguageService {
    const containerKey =
      options.project?.getProjectName() ?? `${Date.now()}-${Math.random()}`
    this.#setupLogger(containerKey, options)

    if (TS_LANGUAGE_SERVICE in options.languageService) {
      return options.languageService
    }

    const container =
      this.#containers.get(containerKey) ?? this.#createContainer(options)
    this.#containers.set(containerKey, container)

    if (this._activeContainerId === containerKey) {
      return this.#createLanguageService(
        options.languageService,
        container.get(TypescriptPluginService),
      )
    }

    this.logger.debug(
      'Creating language service for project:',
      options.project?.getProjectName(),
    )

    container.get(TypescriptContextService).updateOptions(options)

    if (options.project != null) this.#patchProject(container, options.project)
    this.#patchFilesystem(container, options.serverHost)
    this.#patchFilesystemWatcher(container, options.serverHost)
    this.#patchResolveModuleNames(container, options.languageServiceHost)
    this.#patchGetScriptVersionAndGetScriptSnapshot(
      container,
      options.languageServiceHost,
    )

    try {
      const plugin = container.get(TypescriptPluginService)
      plugin.onDispose(() => {
        this.#containers.delete(containerKey)
        container.unbindAll()
      })
      return this.#createLanguageService(options.languageService, plugin)
    } finally {
      this._activeContainerId = containerKey
      const current = (
        (options.project?.projectService as any)
          .hostConfiguration as TypeScript.server.HostConfiguration
      ).extraFileExtensions

      if (
        Array.isArray(current) &&
        current.some((ext) => ext.extension === '.vue')
      ) {
        // .vue exists
      } else if (Array.isArray(current)) {
        // Enable .vue after enhancing the language server.
        options.project?.projectService.setHostConfiguration({
          extraFileExtensions: [],
        })
      }
      this._activeContainerId = undefined
    }
  }

  public getExternalFiles(project: TSProject): string[] {
    return (
      this.#containers
        .get(project.getProjectName())
        ?.get(TypescriptPluginService)
        .getExternalFiles(project) ?? []
    )
  }

  public onConfigurationChanged(config: PluginConfig): void {
    ConfigManager.instance.setConfig(config)
  }

  public fixConsole(console: Console): void {
    const logger = LoggerService.getLogger('Global')
    console.log = (...args) => logger.info(...args)
    console.info = (...args) => logger.info(...args)
    console.debug = (...args) => logger.debug(...args)
    console.trace = (...args) => logger.debug(...args, new Error().stack)
    console.warn = (...args) => logger.error(...args)
    console.error = (...args) => logger.error(...args)
  }

  #patchProject(container: Container, project: TSProject): void {
    const ts = container.get(TypescriptContextService)
    const fs = container.get(FilesystemService)
    const logger = LoggerService.getLogger('Project')

    overrideMethod(
      project,
      'getCompilerOptions',
      (getCompilerOptions) => () => {
        const compilerOptions = getCompilerOptions()

        compilerOptions.jsx = ts.lib.JsxEmit.Preserve

        return compilerOptions
      },
    )

    overrideMethod(
      project,
      'getCompilationSettings',
      (getCompilationSettings) => () => {
        const compilationSettings = getCompilationSettings()

        compilationSettings.jsx = ts.lib.JsxEmit.Preserve

        return compilationSettings
      },
    )

    const extraFileExtensions: TypeScript.server.HostConfiguration['extraFileExtensions'] =
      [
        {
          extension: '.vue',
          isMixedContent: false,
          scriptKind: ts.lib.ScriptKind.Deferred,
        },
      ]

    overrideMethod(
      project.projectService,
      'setHostConfiguration',
      (setHostConfiguration) => {
        return (
          args: TypeScript.server.protocol.ConfigureRequestArguments,
        ): void => {
          logger.debug('setHostConfiguration: ', args)
          const current = (
            (project.projectService as any)
              .hostConfiguration as TypeScript.server.HostConfiguration
          ).extraFileExtensions

          logger.debug('Current Extra Extensions: ', current)
          if (args.extraFileExtensions != null) {
            args.extraFileExtensions.push(...extraFileExtensions)
          }

          logger.debug('New Extra Extensions: ', args.extraFileExtensions)

          return setHostConfiguration(args)
        }
      },
    )

    overrideMethod(
      project as unknown as {
        detachScriptInfoFromProject(
          uncheckedFileName: string,
          noRemoveResolution?: boolean,
        ): void
      },
      'detachScriptInfoFromProject',
      (detachScriptInfoFromProject) =>
        (uncheckedFileName, noRemoveResolution) => {
          if (fs.isVueFile(uncheckedFileName)) return
          if (fs.isGeneratedVueFile(uncheckedFileName)) {
            const fileName = fs.getRealFileNameIfAny(uncheckedFileName)
            console.debug(`@@@ Detaching ${fileName}`)
            return detachScriptInfoFromProject.call(
              project,
              fileName,
              noRemoveResolution,
            )
          }

          return detachScriptInfoFromProject.call(
            project,
            uncheckedFileName,
            noRemoveResolution,
          )
        },
    )
  }

  #patchGetScriptVersionAndGetScriptSnapshot(
    container: Container,
    languageServiceHost: TSLanguageServiceHost,
  ): void {
    const fs = container.get(FilesystemService)
    const ts = container.get(TypescriptContextService)

    overrideMethod(
      languageServiceHost,
      'getScriptVersion',
      (getScriptVersion) =>
        (fileName: string): string => {
          if (fs.isProjectRuntimeFile(fileName)) {
            return `${ts.getVueProjectFor(fileName).projectVersion}`
          }

          return getScriptVersion(fs.getRealFileNameIfAny(fileName))
        },
    )

    // Patch: create snapshots for virtual files from VueSFCDocument
    overrideMethod(
      languageServiceHost,
      'getScriptSnapshot',
      (getScriptSnapshot) =>
        (fileName: string): TypeScript.IScriptSnapshot | undefined => {
          if (fs.isGeneratedVueFile(fileName)) {
            const file = fs.getVueFile(fileName)

            if (file != null) {
              return ts.lib.ScriptSnapshot.fromString(file.getText())
            }
            return undefined
          } else if (fs.isProjectRuntimeFile(fileName)) {
            return ts.lib.ScriptSnapshot.fromString(
              ts.getProjectRuntimeFile(fileName),
            )
          } else {
            return getScriptSnapshot(fileName)
          }
        },
    )
  }

  #patchResolveModuleNames(
    container: Container,
    languageServiceHost: TSLanguageServiceHost,
  ): void {
    const fs = container.get(FilesystemService)
    const ts = container.get(TypescriptContextService)
    const logger = LoggerService.getLogger('LanguageServiceHost')

    let importedFrom: string | undefined
    overrideMethod(
      languageServiceHost,
      'resolveModuleNames',
      (resolveModuleNames) =>
        (
          moduleNames,
          containingFile,
          reusedNames,
          redirectedReference,
          options,
          containingSourceFile,
        ) => {
          if (fs.isVueRuntimeFile(containingFile)) {
            const anyProjectFile =
              importedFrom ?? first(ts.project?.getRootFiles() ?? [])

            // Runtime dependencies have only 'vue' dependency for now.
            const core = ts.lib.resolveModuleName(
              '@vue/runtime-core',
              anyProjectFile,
              options,
              ts.serverHost,
              undefined,
              redirectedReference,
            )
            const vue = ts.lib.resolveModuleName(
              'vue',
              anyProjectFile,
              options,
              ts.serverHost,
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

          invariant(resolveModuleNames != null)

          const result = resolveModuleNames(
            moduleNames,
            containingFile,
            reusedNames,
            redirectedReference,
            options,
            containingSourceFile,
          )

          const known = {
            'vuedx~runtime': () => {
              importedFrom = containingFile

              return {
                resolvedFileName: ts.getVueRuntimeFileNameFor(containingFile),
                isExternalLibraryImport: true,
              }
            },
            'vuedx~runtime~project': () => {
              return {
                resolvedFileName:
                  ts.getProjectRuntimeFileNameFor(containingFile),
                isExternalLibraryImport: false,
              }
            },
          }
          moduleNames.forEach((name, index) => {
            const handler = known[name as keyof typeof known]
            const resolved = result[index]
            if (handler != null && resolved == null) {
              result[index] = handler()
            }
          })

          return result
        },
    )
  }

  #patchFilesystem(
    container: Container,
    host: TSLanguageServiceHost | TSServerHost,
  ): void {
    const fs = container.get(FilesystemService)
    const ts = container.get(TypescriptContextService)
    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    overrideMethod(host, 'fileExists', (fileExists) => (fileName) => {
      return (
        fs.isProjectRuntimeFile(fileName) ||
        fileExists(fs.getRealFileNameIfAny(fileName))
      )
    })

    // Patch: get contents for virtual files from VueSFCDocument
    overrideMethod(host, 'readFile', (readFile) => (fileName, encoding) => {
      if (fs.isGeneratedVueFile(fileName)) {
        return fs.getVueFile(fileName)?.getText()
      } else if (fs.isProjectRuntimeFile(fileName)) {
        return ts.getProjectRuntimeFile(fileName)
      }

      return readFile(fileName, encoding)
    })
  }

  #patchFilesystemWatcher(
    container: Container,
    serverHost: TSServerHost,
  ): void {
    const fs = container.get(FilesystemService)
    const logger = LoggerService.getLogger('ServerHost')

    // TODO: Do we need this?
    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    overrideMethod(
      serverHost,
      'watchFile',
      (watchFile) => (fileName, callback, pollingInterval, options) => {
        if (fs.isGeneratedVueFile(fileName)) {
          return watchFile(
            fs.getRealFileNameIfAny(fileName),
            (id, eventKind) => {
              logger.info(
                `Patched watchFile: ${fileName} - ${id} - ${eventKind}`,
              )
              callback(fileName, eventKind)
            },
            pollingInterval,
            options,
          )
        }

        if (fs.isProjectRuntimeFile(fileName)) {
          return { close: () => {} }
        }

        return watchFile(fileName, callback, pollingInterval, options)
      },
    )
  }

  #createContainer(options: Options): Container {
    if (options.project?.projectService.logger.loggingEnabled() === true) {
      setDebugging(true)
    } else {
      setDebugging(false)
    }
    this.logger.debug('New project:', options.project?.getProjectName(), {
      rootDir: options.project?.getCurrentDirectory(),
    })
    this.logger.debug('Active projects:', Array.from(this.#containers.keys()))

    const ts = new TypescriptContextService(options)
    const fs = FilesystemService.createInstance(ts)
    const container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    })

    container.bind(ConfigManager).toConstantValue(ConfigManager.instance)
    container.bind(TypescriptContextService).toConstantValue(ts)
    container.bind(FilesystemService).toConstantValue(fs)

    return container
  }

  readonly #loggerIds = new Map<string, string>()
  #setupLogger(name: string, options: Options): void {
    const id = this.#loggerIds.get(name) ?? `${this.#loggerIds.size}`

    this.#loggerIds.set(name, id)

    if (LoggerService.currentId === id) return
    const logger = options.project?.projectService.logger
    const LogLevel = options.typescript.server.LogLevel
    LoggerService.currentId = id

    LoggerService.setWriter({
      info: (line) => {
        if (logger == null) return
        if (!logger.hasLevel(LogLevel.normal)) return
        logger.msg(line, options.typescript.server.Msg.Info)
      },
      debug: (line) => {
        if (logger == null) return
        if (!logger.hasLevel(LogLevel.verbose)) return
        logger.msg(line, options.typescript.server.Msg.Info)
      },
      error: (line) => {
        if (logger == null) return
        logger.msg(line, options.typescript.server.Msg.Err)
      },
    })
  }

  #createLanguageService(
    languageService: TSLanguageService,
    pluginService: TypescriptPluginService,
  ): TypeScript.LanguageService {
    const config = ConfigManager.instance
    const cache = new Map<Function, Function>()

    function bind<T extends Function>(fn: T, instance: unknown): T {
      if (!cache.has(fn)) cache.set(fn, fn.bind(instance))
      return cache.get(fn) as T
    }

    return new Proxy(languageService, {
      get: (target, prop) => {
        if (prop === TS_LANGUAGE_SERVICE) return () => languageService
        if (config.state.enabled && pluginService.isVueProject) {
          const value = pluginService[prop as keyof TypescriptPluginService]
          if (typeof value === 'function') {
            return bind(value, pluginService)
          } else if (value !== undefined) {
            return value
          }
        }

        return target[prop as keyof TSLanguageService]
      },
      has: (target, prop) => {
        return prop === TS_LANGUAGE_SERVICE || prop in target
      },
    })
  }
}

export const pluginManager = PluginManager.instance
