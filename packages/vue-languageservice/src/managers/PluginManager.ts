import { first, toFileName } from '@vuedx/shared'
import { Container } from 'inversify'
import { TS_LANGUAGE_SERVICE } from '../constants'
import type {
  TSLanguageService,
  TSLanguageServiceHost,
  TSProject,
  TSServerHost,
  Typescript,
} from '../contracts/Typescript'
import { createHash } from 'crypto'
import { overrideMethod } from '../helpers/overrideMethod'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { TypescriptPluginService } from '../services/TypescriptPluginService'
import { ConfigManager, PluginConfig } from './ConfigManager'

export interface Options extends Typescript.server.PluginCreateInfo {
  typescript: typeof Typescript
  typesDir: string
}

export class PluginManager {
  public static instance = new PluginManager()

  private constructor() {}
  readonly #containers = new Map<string, Container>()
  private readonly logger = LoggerService.getLogger(PluginManager.name)

  public create(options: Options): TSLanguageService {
    this.#setupLogger(options)

    if (TS_LANGUAGE_SERVICE in options.languageService) {
      return options.languageService
    }

    this.logger.debug(
      'Creating language service for project:',
      options.project.getProjectName(),
    )

    this.#patchTypescript(options.typescript)

    const container =
      this.#containers.get(options.project.getProjectName()) ??
      this.#createContainer(options)

    container.get(TypescriptContextService).updateOptions(options)

    this.#patchProject(container, options.project)
    this.#patchServerHost(container, options.serverHost)
    this.#patchLanguageServerHost(container, options.languageServiceHost)

    try {
      return this.#createLanguageService(
        options.languageService,
        container.get(TypescriptPluginService),
      )
    } finally {
      const current = ((options.project.projectService as any)
        .hostConfiguration as Typescript.server.HostConfiguration)
        .extraFileExtensions

      if (
        Array.isArray(current) &&
        current.some((ext) => ext.extension === '.vue')
      ) {
        // .vue exists
      } else if (Array.isArray(current)) {
        // Enable .vue after enhancing the language server.
        options.project.projectService.setHostConfiguration({
          extraFileExtensions: [],
        })
      }
    }
  }

  public getExternalFiles(project: TSProject): string[] {
    return (
      this.#containers
        .get(project.getProjectName())
        ?.get(TypescriptPluginService)
        .getExternalFiles() ?? []
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

  #patchTypescript(typescript: typeof Typescript): void {
    overrideMethod(
      typescript as any,
      'getSupportedExtensions',
      (fn) => (options: any, extraFileExtensions: any) => {
        const extensions = fn(options, extraFileExtensions) as string[]
        const index = extensions.indexOf('.vue')

        if (index >= 0) {
          // File extensions are sorted in order of their priorities.
          // We need to put .vue before .ts
          extensions.splice(index, 1)
          extensions.unshift('.vue')
        }

        return extensions
      },
    )
  }

  #patchProject(container: Container, project: TSProject): void {
    const ts = container.get(TypescriptContextService)
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

    const extraFileExtensions: Typescript.server.HostConfiguration['extraFileExtensions'] = [
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
          args: Typescript.server.protocol.ConfigureRequestArguments,
        ): void => {
          logger.debug('setHostConfiguration: ', args)
          const current = ((project.projectService as any)
            .hostConfiguration as Typescript.server.HostConfiguration)
            .extraFileExtensions

          logger.debug('Current Extra Extensions: ', current)
          if (args.extraFileExtensions != null) {
            args.extraFileExtensions.push(...extraFileExtensions)
          }

          logger.debug('New Extra Extensions: ', args.extraFileExtensions)

          return setHostConfiguration(args)
        }
      },
    )
  }

  #patchServerHost(container: Container, serverHost: TSServerHost): void {
    const fs = container.get(FilesystemService)
    const ts = container.get(TypescriptContextService)
    const logger = LoggerService.getLogger('ServerHost')

    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    overrideMethod(serverHost, 'fileExists', (fileExists) => (fileName) => {
      return (
        fs.isProjectRuntimeFile(fileName) ||
        fileExists(fs.getRealFileName(fileName))
      )
    })

    // Patch: check virtual files in activeTSDocIDs of VueSFCDocument
    overrideMethod(
      serverHost,
      'watchFile',
      (watchFile) => (fileName, callback) => {
        if (fs.isVueTsFile(fileName) || fs.isVueVirtualFile(fileName)) {
          return watchFile(fs.getRealFileName(fileName), (id, eventKind) => {
            logger.info(`Patched watchFile: ${fileName} - ${id} - ${eventKind}`)
            callback(fileName, eventKind)
          })
        }

        if (fs.isProjectRuntimeFile(fileName)) {
          return { close: () => {} }
        }

        return watchFile(fileName, callback)
      },
    )

    // Patch: get contents for virtual files from VueSFCDocument
    overrideMethod(
      serverHost,
      'readFile',
      (readFile) => (fileName, encoding) => {
        if (fs.isVueSchemeFile(fileName))
          fileName = fs.getRealFileName(fileName)
        if (fs.isVueVirtualFile(fileName)) {
          const doc = fs.getVueFile(fileName)?.getDocById(fileName)
          if (doc != null) {
            if (doc.generated == null) {
              // Use original source when generated is null
              return doc.block.type === 'script' ? doc.source.getText() : ''
            }

            return doc.generated.getText()
          }
        } else if (fs.isVueTsFile(fileName)) {
          return fs.getVueFile(fileName)?.getTypeScriptText()
        } else if (fs.isProjectRuntimeFile(fileName)) {
          return ts.getProjectRuntimeFile(fileName)
        }

        return readFile(fileName, encoding)
      },
    )
  }

  #patchLanguageServerHost(
    container: Container,
    languageServiceHost: TSLanguageServiceHost,
  ): void {
    const fs = container.get(FilesystemService)
    const ts = container.get(TypescriptContextService)
    const logger = LoggerService.getLogger('LanguageServiceHost')

    overrideMethod(
      languageServiceHost,
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
      languageServiceHost,
      'getScriptSnapshot',
      (getScriptSnapshot) => (
        fileName: string,
      ): Typescript.IScriptSnapshot | undefined => {
        if (fs.isVueTsFile(fileName)) {
          const file = fs.getVueFile(fileName)

          if (file != null) {
            return ts.lib.ScriptSnapshot.fromString(file.getTypeScriptText())
          }

          logger.debug(`VueTS file - missing snapshot: ${fileName}`)

          return undefined
        } else if (fs.isVueVirtualFile(fileName)) {
          const vueFile = fs.getVueFile(fileName)
          const blockFile = vueFile?.getDocById(fileName)

          if (blockFile?.generated != null) {
            return ts.lib.ScriptSnapshot.fromString(
              blockFile.generated.getText(),
            )
          }

          logger.error(`Virtual file - missing snapshot: ${fileName}`)

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

    // Patch: Add .vue.ts file for every .vue file
    overrideMethod(
      languageServiceHost,
      'getScriptFileNames',
      (getScriptFileNames) => () => {
        const vueFiles = new Set<string>()
        const fileNames = new Set<string>()

        getScriptFileNames().forEach((fileName) => {
          if (fs.isVueSchemeFile(fileName)) {
            // ignore
          } else if (fs.isVueFile(fileName)) {
            vueFiles.add(fileName)
          } else if (
            fs.isVueTsFile(fileName) ||
            fs.isVueVirtualFile(fileName)
          ) {
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

    overrideMethod(
      languageServiceHost,
      'resolveModuleNames',
      (resolveModuleNames) => (
        moduleNames,
        containingFile,
        reusedNames,
        redirectedReference,
        _options,
      ) => {
        if (fs.isVueRuntimeFile(containingFile)) {
          const anyProjectFile = first(ts.project.getRootFiles())
          // Runtime dependencies have only 'vue' dependency for now.
          // TODO: Switch to resolveModuleNameFromCache
          const core = ts.lib.resolveModuleName(
            '@vue/runtime-core',
            anyProjectFile,
            _options,
            ts.serverHost,
            undefined,
            redirectedReference,
          )
          const vue = ts.lib.resolveModuleName(
            'vue',
            anyProjectFile,
            _options,
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
            : ts.project.resolveModuleNames(
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
        }
        return result
      },
    )

    function getFilenameWithoutExtension(fileName: string): string {
      return fileName.replace(/\.(ts|tsx|js|jsx|json|d\.ts)$/, '')
    }
  }

  #createContainer(options: Options): Container {
    this.logger.debug('New project:', options.project.getProjectName(), {
      rootDir: options.project.getCurrentDirectory(),
    })
    this.logger.debug('Active projects:', Array.from(this.#containers.keys()))

    const ts = new TypescriptContextService(options)
    const fs = FilesystemService.createInstnace(ts)
    const container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    })

    container.bind(ConfigManager).toConstantValue(ConfigManager.instance)
    container.bind(TypescriptContextService).toConstantValue(ts)
    container.bind(FilesystemService).toConstantValue(fs)

    this.#containers.set(options.project.getProjectName(), container)

    return container
  }

  #setupLogger(options: Options): void {
    const id = createHash('md5')
      .update(options.project.getProjectName())
      .digest('hex')
      .slice(0, 6)

    if (LoggerService.currentId === id) return
    const logger = options.project.projectService.logger
    const LogLevel = options.typescript.server.LogLevel
    LoggerService.currentId = id

    LoggerService.setWriter({
      info: (line) => {
        if (!logger.hasLevel(LogLevel.normal)) return
        logger.msg(line, options.typescript.server.Msg.Info)
      },
      debug: (line) => {
        if (!logger.hasLevel(LogLevel.verbose)) return
        logger.msg(line, options.typescript.server.Msg.Info)
      },
      error: (line) => {
        logger.msg(line, options.typescript.server.Msg.Err)
      },
    })
  }

  #createLanguageService(
    languageService: TSLanguageService,
    pluginService: TypescriptPluginService,
  ): Typescript.LanguageService {
    const config = ConfigManager.instance
    const cache = new Map<Function, Function>()

    function bind<T extends Function>(fn: T, instance: unknown): T {
      if (!cache.has(fn)) cache.set(fn, fn.bind(instance))
      return cache.get(fn) as T
    }

    return new Proxy(languageService, {
      get: (target, prop) => {
        if (prop === TS_LANGUAGE_SERVICE) return () => languageService
        if (config.state.enabled) {
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
