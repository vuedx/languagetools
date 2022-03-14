import { VueProject } from '@vuedx/projectconfig'
import { cache, toPosixPath } from '@vuedx/shared'
import * as Path from 'path'
import type { Disposable } from '../contracts/Disposable'
import type {
  ExtendedTSLanguageService,
  TSLanguageService,
  TSProject,
  Typescript,
} from '../contracts/Typescript'
import { CacheService } from './CacheService'
import { LoggerService } from './LoggerService'

interface TypescriptContextServiceOptions {
  lib: typeof Typescript
  serverHost: Typescript.server.ServerHost
  projectService: Typescript.server.ProjectService
  tsService: TSLanguageService
  project: TSProject
  typesDir: string
}

export class TypescriptContextService implements Disposable {
  private readonly logger = new LoggerService('TypescriptContext')
  private options: TypescriptContextServiceOptions

  public constructor(options: TypescriptContextServiceOptions) {
    this.options = options
  }

  public get lib(): typeof Typescript {
    return this.options.lib
  }

  public get serverHost(): Typescript.server.ServerHost {
    return this.options.serverHost
  }

  public get projectService(): Typescript.server.ProjectService {
    return this.options.projectService
  }

  public get service(): TSLanguageService {
    return this.options.tsService
  }

  public get project(): TSProject {
    return this.options.project
  }

  public updateOptions(
    options: Partial<TypescriptContextServiceOptions>,
  ): void {
    if (options.lib != null) this.options.lib = options.lib
    if (options.serverHost != null) this.options.serverHost = options.serverHost
    if (options.tsService != null) this.options.tsService = options.tsService
    if (options.typesDir != null) this.options.typesDir = options.typesDir
    if (options.projectService != null) {
      this.options.projectService = options.projectService
    }
    if (options.project != null) {
      this.options.project = options.project
    }
  }

  private readonly projectRuntimeFileCache = new CacheService<string>(
    (fileName) => String(this.getVueProjectFor(fileName).projectVersion),
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
    const runtimeFileName = this.getProjectRuntimeFileName(fileName)

    return this.projectRuntimeFileCache.withCache(
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

  public getProjectRuntimeFileName(fileName: string): string {
    const project = this.getVueProjectFor(fileName)
    return toPosixPath(project.runtimeFile)
  }

  /**
   * Find typescript project for the file.
   */
  public getProjectFor(fileName: string): Typescript.server.Project | null {
    return (
      this.projectService.getDefaultProjectForFile(
        this.lib.server.toNormalizedPath(fileName),
        false,
      ) ?? null
    )
  }

  private readonly projects = new Map<string, VueProject>()

  @cache()
  public getVueProjectFor(fileName: string): VueProject {
    const find = (name: string): string | undefined =>
      this.lib.findConfigFile(fileName, this.lib.sys.fileExists, name)

    const rootDir = Path.posix.dirname(
      find('vueconfig.json') ?? find('package.json') ?? fileName,
    )

    const key = Array.from(this.projects.keys()).find((key) =>
      rootDir.startsWith(key),
    )

    // If key is not null, then the project must exist.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (key != null) return this.projects.get(key)!

    const project = VueProject.create(this.serverHost, rootDir)

    this.projects.set(rootDir, project)

    return project
  }

  /**
   * Find typescript laguage service for the file.
   */
  private _getServiceFor(fileName: string): Typescript.LanguageService | null {
    return this.getProjectFor(fileName)?.getLanguageService() ?? null
  }

  /**
   * Find typescript laguage service for the file.
   */
  public getUndecoratedServiceFor(
    fileName: string,
  ): Typescript.LanguageService | null {
    const service = this._getServiceFor(fileName) as ExtendedTSLanguageService
    if (service == null) return null

    return service._vueTS_inner ?? service
  }

  public ensureProjectFor(fileName: string): void {
    const scriptInfo = this.projectService.getScriptInfoEnsuringProjectsUptoDate(
      fileName,
    )

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
  public getSourceFile(fileName: string): Typescript.SourceFile | null {
    try {
      return this.service.getProgram()?.getSourceFile(fileName) ?? null
    } catch {
      return null
    }
  }

  public dispose(): void {
    this.projects.forEach((project) => project.dispose())
    this.projects.clear()
  }
}
