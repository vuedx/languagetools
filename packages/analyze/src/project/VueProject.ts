import { ComponentRegistrationInfo } from '../component'
import {
  getComponentFromFile,
  getComponentsFromPackageJSON,
} from './detector/components'
import { PackageJSON } from './detector/PackageJSON'

export abstract class VueProject {
  protected isDirty = true
  protected _globalComponents: ComponentRegistrationInfo[] = []
  protected _externalComponents: ComponentRegistrationInfo[] = []
  protected _projectComponents = new Map<string, ComponentRegistrationInfo[]>()
  protected _fileNames: string[] = []
  public packageJSON: PackageJSON

  constructor(
    public readonly rootDir: string,
    public readonly packageFile: string | undefined,
    packageJSON: Partial<PackageJSON>,
    protected readonly requireModule: NodeJS.Require = require,
  ) {
    this.packageJSON = { dependencies: {}, devDependencies: {}, ...packageJSON }
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
