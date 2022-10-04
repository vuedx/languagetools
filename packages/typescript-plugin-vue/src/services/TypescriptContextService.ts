/* eslint-disable no-labels */
import { ProjectPreferences, VueProject } from '@vuedx/projectconfig'
import {
  binarySearchKey,
  cache,
  invariant,
  isVueFile,
  toPosixPath,
} from '@vuedx/shared'
import * as Path from 'path'
import { TS_LANGUAGE_SERVICE } from '../constants'
import type { Disposable } from '../contracts/Disposable'
import type {
  ExtendedTSLanguageService,
  TSLanguageService,
  TSLanguageServiceHost,
  TSProject,
  TypeScript,
} from '../contracts/TypeScript'
import { ConfigManager } from '../managers/ConfigManager'
import { CacheService } from './CacheService'
import { LoggerService, LogLevel } from './LoggerService'

interface TypescriptContextServiceOptions {
  project: TSProject
  typesDir: string
  typescript: typeof TypeScript
  languageService: TSLanguageService
  languageServiceHost: TSLanguageServiceHost
  serverHost: TypeScript.server.ServerHost
}

export class TypescriptContextService implements Disposable {
  private readonly logger = LoggerService.getLogger(
    TypescriptContextService.name,
    LogLevel.DEBUG,
  )

  private options: TypescriptContextServiceOptions

  public constructor(options: TypescriptContextServiceOptions) {
    this.options = options
  }

  public get lib(): typeof TypeScript {
    return this.options.typescript
  }

  public get serverHost(): TypeScript.server.ServerHost {
    return this.options.serverHost
  }

  public get projectService(): TypeScript.server.ProjectService {
    return this.options.project.projectService
  }

  public get service(): TSLanguageService {
    return this.options.languageService
  }

  public get project(): TSProject {
    return this.options.project
  }

  public get isTypeScriptProject(): boolean {
    try {
      switch (this.project.projectKind) {
        case this.lib.server.ProjectKind.Configured:
          try {
            return !this.project.isJsOnlyProject()
          } catch {
            return true
          }

        default:
          return true
      }
    } catch {
      return true
    }
  }

  public isConfiguredProject(
    project: TSProject,
  ): project is TypeScript.server.ConfiguredProject & TSProject {
    return project.projectKind === this.lib.server.ProjectKind.Configured
  }

  public isInferredProject(
    project: TSProject,
  ): project is TypeScript.server.InferredProject & TSProject {
    return project.projectKind === this.lib.server.ProjectKind.Inferred
  }

  public updateOptions(
    options: Partial<TypescriptContextServiceOptions>,
  ): void {
    if (options.typescript != null) this.options.typescript = options.typescript
    if (options.serverHost != null) this.options.serverHost = options.serverHost
    if (options.languageService != null)
      this.options.languageService = options.languageService
    if (options.typesDir != null) this.options.typesDir = options.typesDir
    if (options.project != null) {
      this.options.project = options.project
    }
  }

  readonly #projectRuntimeFileCache = new CacheService<string>((fileName) =>
    String(this.getVueProjectFor(fileName).projectVersion),
  )

  public getVueRuntimeFileName(_version: string): string {
    return toPosixPath(
      Path.resolve(this.options.typesDir, '3.x.vuedx_runtime.d.ts'),
    )
  }

  public getVueRuntimeFileNameFor(fileName: string): string {
    return this.getVueRuntimeFileName(
      this.getVueProjectFor(fileName).vueVersion,
    )
  }

  public getProjectRuntimeFile(fileName: string): string {
    const runtimeFileName = this.getProjectRuntimeFileNameFor(fileName)

    return this.#projectRuntimeFileCache.withCache(
      runtimeFileName,
      (previous) => {
        if (previous != null) return previous

        const project = this.getVueProjectFor(fileName)
        const lines: string[] = []

        const components = Array.from(
          Object.entries(project.config.globalComponents),
        )

        if (components.length > 0) {
          const declarations = components.map(([name, sources]) => {
            const types = sources
              // Ignore namespace imports for now.
              .filter((source) => source.exportName !== '*')
              .map((source, index) => {
                const localName = `${name}${index}`

                if (source.exportName != null) {
                  lines.push(
                    `import { ${source.exportName} as ${localName} } from "${source.moduleName}"`,
                  )
                } else {
                  lines.push(`import ${localName} from "${source.moduleName}"`)
                }

                return `typeof ${localName}`
              })
              .join(' | ')

            return `${name}: ${types.trim().length === 0 ? 'never' : types}`
          })

          const globalComponentProperties = declarations
            .map((declaration) => `    ${declaration}`)
            .join('\n')
          lines.push(
            // Add global components to both vue an @vue/runtime-core
            `declare module '@vue/runtime-core' {`,
            `   interface GlobalComponents {`,
            globalComponentProperties,
            `   }`,
            `}`,
            `declare module 'vue' {`,
            `   interface GlobalComponents {`,
            globalComponentProperties,
            `   }`,
            `}`,
          )
        }

        const code = lines.join('\n') + '\n'

        this.logger.debug(
          `Creating ${runtimeFileName} from ${
            project.projectFile ?? '<inferred>'
          }`,
          project.config.globalComponents,
          code,
        )

        return code
      },
    )
  }

  public getProjectRuntimeFileNameFor(fileName: string): string {
    const project = this.getVueProjectFor(fileName)
    return toPosixPath(project.runtimeFile)
  }

  /**
   * Find typescript project for the file.
   */
  public getProjectFor(fileName: string): TypeScript.server.Project | null {
    return (
      this.projectService.getDefaultProjectForFile(
        this.toNormalizedPath(fileName),
        false,
      ) ?? null
    )
  }

  public getVuePreferencesFor(fileName: string): ProjectPreferences {
    const project = this.getVueProjectFor(fileName)
    const preferences = ConfigManager.instance.state.preferences

    this.logger.debug('Preferences', preferences)

    return project.kind === 'inferred'
      ? {
          ...project.config.preferences,
          script: {
            ...project.config.preferences.script,
            ...preferences?.script,
          },
          template: {
            ...project.config.preferences.template,
            ...preferences?.template,
          },
          style: {
            ...project.config.preferences.style,
            ...preferences?.style,
          },
        }
      : project.config.preferences
  }

  @cache()
  public toNormalizedPath(fileName: string): TypeScript.server.NormalizedPath {
    return this.lib.server.toNormalizedPath(fileName)
  }

  readonly #projects = new Map<string, VueProject>()

  @cache()
  public getVueProjectFor(fileName: string): VueProject {
    const find = (name: string): string | undefined =>
      this.lib.findConfigFile(fileName, this.lib.sys.fileExists, name)

    const rootDir = Path.posix.dirname(
      find('vueconfig.json') ?? find('package.json') ?? fileName,
    )

    const key = Array.from(this.#projects.keys()).find((key) =>
      rootDir.startsWith(key),
    )

    // If key is not null, then the project must exist.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (key != null) return this.#projects.get(key)!

    const project = VueProject.create(this.serverHost, rootDir)

    this.#projects.set(rootDir, project)

    return project
  }

  /**
   * Find typescript laguage service for the file.
   */
  public getServiceFor(fileName: string): TypeScript.LanguageService | null {
    return this.getProjectFor(fileName)?.getLanguageService() ?? null
  }

  /**
   * Find typescript laguage service for the file.
   */
  public getUndecoratedServiceFor(
    fileName: string,
  ): TypeScript.LanguageService | null {
    const service = this.getServiceFor(fileName) as ExtendedTSLanguageService
    if (service == null) return null
    if (TS_LANGUAGE_SERVICE in service) return service[TS_LANGUAGE_SERVICE]()
    return service
  }

  public ensureProjectFor(fileName: string): void {
    const scriptInfo =
      this.projectService.getScriptInfoEnsuringProjectsUptoDate(fileName)

    if (scriptInfo == null) {
      this.logger.debug(`No ScriptInfo for ${fileName}`)
      return
    }

    this.logger.debug(
      `Project of ${fileName}`,
      scriptInfo.containingProjects.map((project) => project.getProjectName()),
    )
  }

  /**
   * Find source file in typescript program
   */
  public getSourceFile(fileName: string): TypeScript.SourceFile | null {
    try {
      return this.service.getProgram()?.getSourceFile(fileName) ?? null
    } catch {
      return null
    }
  }

  public getTypeChecker(): TypeScript.TypeChecker | null {
    return this.service.getProgram()?.getTypeChecker() ?? null
  }

  public dispose(): void {
    this.#projects.forEach((project) => project.dispose())
    this.#projects.clear()
  }

  #isRunningSchemeMode: boolean = false

  public get isRunningSchemeMode(): boolean {
    return this.#isRunningSchemeMode
  }

  public runInSchemeMode<R>(fn: () => R): R {
    const before = this.#isRunningSchemeMode
    this.#isRunningSchemeMode = true
    try {
      return fn()
    } finally {
      this.#isRunningSchemeMode = before
    }
  }

  public ensureUptoDate(fileName: string): void {
    this.project.getLanguageService(true) // forces update
    if (isVueFile(fileName)) {
      fileName = this.getGeneratedFileName(fileName)
    }

    if (
      this.projectService.getScriptInfoEnsuringProjectsUptoDate(fileName) ==
      null
    ) {
      this.logger.debug(`No ScriptInfo for ${fileName}. Creating one.`)
      this.projectService.getOrCreateScriptInfoForNormalizedPath(
        this.toNormalizedPath(fileName),
        true,
      )
    }
  }

  public getGeneratedFileName(fileName: string): string {
    invariant(isVueFile(fileName), 'fileName must be a vue file')
    return this.isTypeScriptProject ? `${fileName}.tsx` : `${fileName}.jsx`
  }

  /** @deprecated */
  public ensureProject(fileName: string): void {
    const filePath = this.toNormalizedPath(fileName)
    if (this.project.containsFile(filePath)) {
      return // already in project
    }

    const scriptInfo =
      this.projectService.getOrCreateScriptInfoForNormalizedPath(
        filePath,
        false,
      )

    if (scriptInfo == null) {
      this.logger.debug('No ScriptInfo for project file:', fileName)
      return
    }

    scriptInfo.attachToProject(this.project)
  }

  public getTokenAtPosition(
    sourceFile: TypeScript.SourceFile,
    position: number,
  ): TypeScript.Node {
    return this.#getTokenAtPositionWorker(sourceFile, position)
  }

  #getTokenAtPositionWorker(
    sourceFile: TypeScript.SourceFile,
    position: number,
  ): TypeScript.Node {
    let current: TypeScript.Node = sourceFile
    let foundToken: TypeScript.Node | undefined
    const { SyntaxKind } = this.lib
    outer: while (true) {
      // find the child that contains 'position'

      const children = current.getChildren(sourceFile)
      const i = binarySearchKey(
        children,
        position,
        (_, index) => index,
        (middle, _) => {
          const child = children[middle]
          invariant(child != null)
          const end = child.getEnd()
          if (end < position) return -1

          const start = child.getStart(sourceFile, /*includeJsDoc*/ true)
          if (start > position) return 1

          // First element whose start position is before the input and
          // whose end position is after or equal to the input.
          if (nodeContainsPosition(child, start, end)) {
            const previous = children[middle - 1]
            if (previous != null) {
              // We want the _first_ element that contains the position,
              // so left-recur if the prior node also contains the position.
              if (nodeContainsPosition(previous)) {
                return 1
              }
            }

            return 0
          }

          const previous = children[middle - 1]
          // This complex condition makes us left-recur around a zero-length
          // node when includePrecedingTokenAtEndPosition is set, rather than
          // right-recur on it.
          if (
            start === position &&
            previous != null &&
            previous.getEnd() === position &&
            nodeContainsPosition(previous)
          ) {
            return 1
          }
          return -1
        },
      )

      if (foundToken != null) {
        return foundToken
      }
      if (i >= 0 && children[i] != null) {
        current = children[i] as TypeScript.Node
        continue outer
      }

      return current
    }

    function nodeContainsPosition(
      node: TypeScript.Node,
      start?: number,
      end?: number,
    ): boolean {
      end ??= node.getEnd()
      if (end < position) return false

      start ??= node.getFullStart()
      // If this child begins after position, then all subsequent children will as well.
      if (start > position) {
        return false
      } else if (position < end) {
        return true
      } else if (position === end && node.kind === SyntaxKind.EndOfFileToken) {
        return true
      } else {
        return false
      }
    }
  }
}
