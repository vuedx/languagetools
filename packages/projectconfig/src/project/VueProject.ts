import {
  DEFAULT_PROJECT_CONFIG,
  ProjectConfig,
  ResolvedProjectConfig,
} from '../config/ProjectConfig'
import { deepDefaults } from './deepDefaults'
import {
  FilesystemHost,
  FileWatcher,
  FileWatcherEventKind,
  findNearestFile,
} from './FilesystemHost'
import { resolveComponents } from './resolveComponents'
import { resolveDirectives } from './resolveDirectives'
import * as JSON5 from 'json5'
import * as Path from 'path'

export class VueProject {
  static create(fs: FilesystemHost, rootDir: string): VueProject {
    const projectFile = Path.posix.resolve(rootDir, 'vueconfig.json')
    const packageFile = findNearestFile(fs, rootDir, 'package.json')

    return new VueProject(
      fs,
      rootDir,
      packageFile,
      fs.fileExists(projectFile) ? projectFile : null,
    )
  }

  private readonly watchers: FileWatcher[] = []

  private _vueVersion: string
  private _projectVersion: number = 1

  public readonly runtimeFile: string

  public get vueVersion(): string {
    return this._vueVersion
  }

  public get projectVersion(): number {
    return this._projectVersion
  }

  private constructor(
    protected readonly fs: FilesystemHost,
    public readonly rootDir: string,
    public readonly packageFile: string | null = null,
    public readonly projectFile: string | null = null,
  ) {
    this._vueVersion = '3.2.0'
    this.runtimeFile = Path.resolve(
      rootDir,
      'project.vuedx_project_runtime.d.ts',
    )
    this.onPackageFileChange()
    this.onProjectFileChange()

    if (packageFile != null) {
      this.watchers.push(
        fs.watchFile(packageFile, (_fileName, event) => {
          if (event === FileWatcherEventKind.Changed) {
            this.onPackageFileChange()
          }
        }),
      )
    }

    if (projectFile != null) {
      this.watchers.push(
        fs.watchFile(projectFile, (_fileName, event) => {
          if (event === FileWatcherEventKind.Changed) {
            this.onProjectFileChange()
          }
        }),
      )
    }
  }

  private onProjectFileChange(): void {
    if (this.projectFile == null) return

    const content = this.fs.readFile(this.projectFile)
    if (content != null) {
      try {
        this.setConfig(JSON5.parse(content))
      } catch (e) {
        const error = e as Error
        console.error(
          `[VueDX] (ProjectConfig) ${error.message} ${error.stack ?? ''}`,
        )
      }
    }
  }

  private onPackageFileChange(): void {
    if (this.packageFile == null) return

    const content = this.fs.readFile(this.packageFile)
    if (content != null) {
      try {
        const pkg = JSON.parse(content)
        this.loadDependencies({
          ...pkg.devDependencies,
          ...pkg.dependencies,
        })
      } catch (e) {
        const error = e as Error
        console.error(
          `[VueDX] (ProjectConfig) ${error.message} ${error.stack ?? ''}`,
        )
      }

      const vueVersion = this._dependencies['vue']
      if (vueVersion != null) {
        this._vueVersion = vueVersion
      }
    }
  }

  private loadDependencies(dependencies: Record<string, string>): void {
    if (this.packageFile == null) return
    const modulesDir = Path.posix.resolve(
      Path.posix.dirname(this.packageFile),
      'node_modules',
    )

    Object.keys(dependencies).forEach((packageName) => {
      const fileName = Path.posix.resolve(
        modulesDir,
        packageName,
        'package.json',
      )

      if (this.fs.fileExists(fileName)) {
        try {
          this._dependencies[packageName] = JSON.parse(
            this.fs.readFile(fileName) ?? '{}',
          ).version
        } catch (e) {
          const error = e as Error
          console.error(
            `[VueDX] (ProjectConfig) ${error.message} in ${fileName} ${
              error.stack ?? ''
            }`,
          )
          this._dependencies[packageName] = '0.0.0'
        }
      }
    })
  }

  public dispose(): void {
    this.watchers.forEach((watcher) => watcher.close())
    this.watchers.length = 0
  }

  public _dependencies: Record<string, string> = {}
  public get dependencies(): Readonly<Record<string, string>> {
    return this._dependencies
  }

  private _config = DEFAULT_PROJECT_CONFIG
  public get config(): Readonly<ResolvedProjectConfig> {
    return this._config
  }

  private setConfig(config: ProjectConfig): void {
    this._config = {
      globalComponents: this._config.globalComponents,
      globalDirectives: this._config.globalDirectives,
      preferences: deepDefaults(this._config.preferences, config.preferences),
    }

    if (config.globalComponents != null) {
      this._config.globalComponents = resolveComponents(
        this.rootDir,
        config.globalComponents,
      )
    }

    if (config.globalDirectives != null) {
      this._config.globalDirectives = resolveDirectives(
        this.rootDir,
        config.globalDirectives,
      )
    }

    this._projectVersion += 1
  }

  public get kind(): 'inferred' | 'configured' {
    return this.projectFile == null ? 'inferred' : 'configured'
  }
}
