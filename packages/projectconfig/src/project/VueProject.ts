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
import JSON5 from 'json5'
import Path from 'path'

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

  private constructor(
    protected readonly fs: FilesystemHost,
    public readonly rootDir: string,
    public readonly packageFile: string | null = null,
    public readonly projectFile: string | null = null,
  ) {
    if (projectFile != null) {
      this.watchers.push(
        fs.watchFile(projectFile, (fileName, event) => {
          if (event === FileWatcherEventKind.Changed) {
            const content = fs.readFile(fileName)
            if (content != null) {
              try {
                this.setConfig(JSON5.parse(content))
              } catch (error) {
                // FIXME: Store error for diagnostics usage.
              }
            }
          }
        }),
      )
    }

    if (packageFile != null) {
      this.watchers.push(
        fs.watchFile(packageFile, (fileName, event) => {
          if (event === FileWatcherEventKind.Changed) {
            const content = fs.readFile(fileName)
            if (content != null) {
              try {
                const pkg = JSON.parse(content)
                this.loadDependencies({
                  ...pkg.devDependencies,
                  ...pkg.dependencies,
                })
              } catch (error) {
                // FIXME: Store error for diagnostics usage.
              }
            }
          }
        }),
      )
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
        this._dependencies[packageName] = JSON.parse(fileName).version
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
  }

  public get kind(): 'inferred' | 'configured' {
    return this.projectFile == null ? 'inferred' : 'configured'
  }
}
