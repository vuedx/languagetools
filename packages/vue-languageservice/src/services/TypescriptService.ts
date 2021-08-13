import {
  ConfiguredVueProject,
  InferredVueProject,
  VueProject,
} from '@vuedx/analyze'
import JSON5 from 'json5'
import * as Path from 'path'
import type { Disposable } from '../contracts/Disposable'
import type { Typescript } from '../contracts/Typescript'

export class TypescriptService implements Disposable {
  private static instance: TypescriptService | null = null

  public static createSingletonInstance(
    lib: typeof Typescript,
    serverHost: Typescript.server.ServerHost,
    projectService: Typescript.server.ProjectService,
    typesDir: string,
  ): TypescriptService {
    return (
      this.instance ??
      (this.instance = new TypescriptService(
        lib,
        serverHost,
        projectService,
        typesDir,
      ))
    )
  }

  constructor(
    public readonly lib: typeof Typescript,
    public readonly serverHost: Typescript.server.ServerHost,
    public readonly projectService: Typescript.server.ProjectService,
    private readonly typesDir: string,
  ) {}

  private readonly projects: Array<{
    project: VueProject
    lastUsedAt: number
    dispose(): void
  }> = []

  public getRuntimeHelperFileName(_version: '3.0'): string {
    return Path.posix.resolve(this.typesDir, 'vue3.0.d.ts')
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

  /**
   * Find typescript project for the file.
   * TODO: Extract this logic to a static method on VueProject
   */
  public getVueProjectFor(fileName: string): VueProject {
    const ref = this.projects.find(({ project }) =>
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      fileName.startsWith(project.rootDir + '/'),
    )
    if (ref != null) ref.lastUsedAt = Date.now()
    let project = ref?.project ?? null

    if (project === null) {
      project = (() => {
        const host = this.serverHost
        const packageFile = this.lib.findConfigFile(
          fileName,
          this.lib.sys.fileExists,
          'package.json',
        )

        const configFile = this.lib.findConfigFile(
          fileName,
          this.lib.sys.fileExists,
          'vueconfig.json',
        )

        const rootDir = Path.posix.dirname(
          packageFile ?? configFile ?? fileName,
        )
        const fileNames = host.readDirectory(
          rootDir,
          ['.vue'],
          ['node_modules'],
        )

        const requireJSON5 = (fileName: string): any => {
          try {
            if (Path.posix.basename(fileName) === 'vueconfig.json') {
              const contents = host.readFile(fileName) ?? '{}'
              try {
                return JSON5.parse(contents)
              } catch (error) {
                return {}
              }
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
                packageFile != null ? requireJSON5(packageFile) : {},
                configFile,
                requireJSON5(configFile),
                require,
              )
            : new InferredVueProject(
                rootDir,
                packageFile,
                packageFile != null ? requireJSON5(packageFile) : {},
                require,
              )

        newProject.setFileNames(fileNames)

        const disposables: Array<() => void> = [
          () => {
            this.projects.splice(
              this.projects.findIndex((item) => item.project === newProject),
              1,
            )
          },
        ]

        const dispose = (): void => disposables.forEach((fn) => fn())
        const projectDirWatcher = host.watchDirectory(
          rootDir,
          (fileName: string) => {
            if (fileName.endsWith('/vueconfig.json')) {
              if (newProject.kind === 'inferred') {
                dispose()
                reload()
                return
              }
            }

            if (!/\.(vue)$/.test(fileName)) return
            if (host.fileExists(fileName)) {
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
          // TODO:  Implement
        }

        if (configFile != null) {
          const configFileWatcher = host.watchFile(configFile, (_, event) => {
            if (event === this.lib.FileWatcherEventKind.Deleted) {
              dispose()
            } else {
              ;(newProject as ConfiguredVueProject).setConfig(
                requireJSON5(configFile),
              )
              newProject.markDirty()
            }
            reload()
          })
          disposables.push(() => {
            configFileWatcher.close()
          })
        }

        if (packageFile != null) {
          const packageFileWatcher = host.watchFile(packageFile, (_, event) => {
            if (event === this.lib.FileWatcherEventKind.Deleted) {
              dispose()
            } else {
              newProject.packageJSON = {
                dependencies: {},
                devDependencies: {},
                ...requireJSON5(packageFile),
              }
              newProject.markDirty()
            }
          })
          disposables.push(() => packageFileWatcher.close())
        }

        this.projects.push({
          project: newProject,
          dispose,
          lastUsedAt: Date.now(),
        })

        return newProject
      })()
    }

    return project
  }

  /**
   * Find typescript laguage service for the file.
   */
  public getServiceFor(fileName: string): Typescript.LanguageService | null {
    return this.getProjectFor(fileName)?.getLanguageService() ?? null
  }

  /**
   * Find typescript program for the file.
   */
  public getProgramFor(fileName: string): Typescript.Program | null {
    return this.getServiceFor(fileName)?.getProgram() ?? null
  }

  /**
   * Find source file in typescript program
   */
  public getSourceFile(fileName: string): Typescript.SourceFile | null {
    try {
      return this.getProgramFor(fileName)?.getSourceFile(fileName) ?? null
    } catch {
      return null
    }
  }

  public dispose(): void {
    this.projects.forEach((project) => project.dispose())
    this.projects.length = 0
  }
}
