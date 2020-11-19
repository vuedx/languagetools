import { ComponentRegistrationInfo } from '../component'
import {
  getComponentFromFile,
  getComponentsFromPackage,
} from './detector/components'
import { PackageJSON } from './detector/PackageJSON'

export abstract class VueProject {
  protected isDirty = true
  protected _globalComponents: ComponentRegistrationInfo[] = []
  protected _projectComponents = new Map<string, ComponentRegistrationInfo[]>()

  constructor(
    public readonly rootDir: string,
    public readonly packageJSON: Partial<PackageJSON>,
  ) {}

  protected loadGlobalComponents(): void {
    this._globalComponents = getComponentsFromPackage({
      dependencies: {},
      devDependencies: {},
      ...this.packageJSON,
    })
  }

  abstract kind: 'inferred' | 'configured'

  protected reloadIfNeeded(): void {
    if (this.isDirty) {
      this.isDirty = false

      this.loadGlobalComponents()
    }
  }

  public setVueFileNames(fileNames: string[]): void {
    const newLocalComponents = new Map<string, ComponentRegistrationInfo[]>()

    fileNames.forEach((fileName) => {
      newLocalComponents.set(
        fileName,
        this._projectComponents.get(fileName) ?? getComponentFromFile(fileName),
      )
    })

    this._projectComponents = newLocalComponents
  }

  public get vueFileNames(): string[] {
    return Array.from(this._projectComponents.keys())
  }

  public get components(): ComponentRegistrationInfo[] {
    this.reloadIfNeeded()

    return [this.globalComponents, ...this._projectComponents.values()].flat(2)
  }

  get globalComponents(): ComponentRegistrationInfo[] {
    this.reloadIfNeeded()

    return this._globalComponents
  }
}
