import { VueProject } from '@vuedx/projectconfig'
import { cache } from '@vuedx/shared'
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

  public getRuntimeHelperFileName(_version: '3.0' | '3.1' | '3.2'): string {
    return Path.posix.resolve(this.typesDir, '3.x.d.ts')
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
    this.projects.clear()
  }
}
