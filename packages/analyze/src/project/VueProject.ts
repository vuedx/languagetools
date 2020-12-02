import { ProjectConfig, ProjectConfigNormalized } from '@vuedx/projectconfig'
import { ComponentRegistrationInfo } from '../component'
import {
  getComponentFromFile,
  getComponentsFromPackageJSON,
  getPackageJSON,
} from './detector/components'
import { PackageJSON } from './detector/PackageJSON'

function deepDefaults<T extends object>(a: {}, b: T): T
function deepDefaults<T extends object>(a: T, b: Partial<T>): T
function deepDefaults(a: any, b: any): any {
  Object.keys(b).forEach((key) => {
    const valueA = a[key]
    const valueB = b[key]

    if (valueB === undefined) return
    if (valueA == null || Array.isArray(valueB)) {
      a[key] = valueB
    } else if (typeof valueA === 'object' && typeof valueB === 'object') {
      a[key] = deepDefaults(valueA, valueB)
    } else {
      a[key] = valueB
    }
  })

  return a
}

const DEFAULT_CONFIG: ProjectConfigNormalized = {
  globalComponents: [],
  preferences: {
    componentsDirectories: ['src/components'],
    script: { mode: 'normal', language: 'js' },
    style: { language: 'css' },
    template: { directiveSyntax: 'shorthand' },
  },
}

export abstract class VueProject {
  protected isDirty = true
  protected _globalComponents: ComponentRegistrationInfo[] = []
  protected _externalComponents: ComponentRegistrationInfo[] = []
  protected _projectComponents = new Map<string, ComponentRegistrationInfo[]>()
  protected _fileNames: string[] = []
  protected _version: string = '3.0.0'
  protected _config: Readonly<ProjectConfigNormalized> = deepDefaults(
    {},
    DEFAULT_CONFIG,
  )

  public packageJSON: PackageJSON

  constructor(
    public readonly rootDir: string,
    public readonly packageFile: string | undefined,
    packageJSON: Partial<PackageJSON>,
    protected readonly requireModule: NodeJS.Require = require,
  ) {
    this.packageJSON = { dependencies: {}, devDependencies: {}, ...packageJSON }
  }

  public get config(): Readonly<ProjectConfigNormalized> {
    return this._config
  }

  public get version(): string {
    return this._version
  }

  public setConfig(config: ProjectConfig): void {
    this._config = deepDefaults<ProjectConfigNormalized>(
      this._config,
      config as Partial<ProjectConfigNormalized>,
    )
  }

  public markDirty(): void {
    this.isDirty = true
  }

  protected loadGlobalComponents(): void {
    this._externalComponents = getComponentsFromPackageJSON(
      this.rootDir,
      this.packageJSON,
      this.requireModule,
    )

    const KnownGlobalPackageRE = /^(vue|vue-router)$/
    this._globalComponents = this._externalComponents.filter((component) =>
      KnownGlobalPackageRE.test(component.source.moduleName),
    )
  }

  abstract kind: 'inferred' | 'configured'

  protected abstract refresh(): void

  protected reloadIfNeeded(): void {
    if (this.isDirty) {
      this._version =
        getPackageJSON(this.requireModule, this.rootDir, 'vue').version ??
        '3.0.0'
      this.loadGlobalComponents()
      this.refresh()
      this.isDirty = false
    }
  }

  public setFileNames(fileNames: string[]): void {
    const newLocalComponents = new Map<string, ComponentRegistrationInfo[]>()

    this._fileNames = fileNames
    fileNames.forEach((fileName) => {
      if (fileName.endsWith('.vue')) {
        newLocalComponents.set(
          fileName,
          this._projectComponents.get(fileName) ??
            getComponentFromFile(fileName),
        )
      }
    })

    this._projectComponents = newLocalComponents
  }

  public get vueFileNames(): string[] {
    this.reloadIfNeeded()

    return Array.from(this._projectComponents.keys())
  }

  public get fileNames(): string[] {
    return this._fileNames
  }

  // TODO: Cache this.
  public get components(): ComponentRegistrationInfo[] {
    this.reloadIfNeeded()

    return [
      this._globalComponents,
      this._externalComponents,
      ...this._projectComponents.values(),
    ].flat(2)
  }

  get globalComponents(): ComponentRegistrationInfo[] {
    this.reloadIfNeeded()

    return this._globalComponents
  }
}
