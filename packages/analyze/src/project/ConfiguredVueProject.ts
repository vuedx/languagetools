import type { ProjectConfig } from '@vuedx/projectconfig'
import { getComponentName, getComponentNameAliases } from '@vuedx/shared'
import * as micromatch from 'micromatch'
import * as Path from 'path'
import {
  getComponentFromFile,
  getComponentsFromPackage,
} from './detector/components'
import type { PackageJSON } from './detector/PackageJSON'
import { requireModule as _require } from './detector/require'
import { VueProject } from './VueProject'

export class ConfiguredVueProject extends VueProject {
  kind = 'configured' as const

  constructor(
    rootDir: string,
    packageFile: string | undefined,
    packageJSON: Partial<PackageJSON>,
    public readonly configFile: string,
    config: Readonly<ProjectConfig>,
    requireModule: NodeJS.Require = _require,
  ) {
    super(rootDir, packageFile, packageJSON, requireModule)
    this.setConfig(config)
  }

  public setFileNames(fileNames: string[]): void {
    super.setFileNames(fileNames)
    this.markDirty()
  }

  protected refresh(): void {
    this.config.globalComponents.forEach((option) => {
      if (typeof option === 'string') {
        if (
          option in this.packageJSON.dependencies ||
          option in this.packageJSON.devDependencies
        ) {
          this._globalComponents.push(
            ...(this._projectComponents.get(option) ??
              getComponentsFromPackage(
                this.requireModule,
                this.rootDir,
                option,
              )),
          )
        } else if (option.includes('*') || option.includes('{')) {
          micromatch.match(this._fileNames, option).forEach((fileName) => {
            this._globalComponents.push(
              ...(this._projectComponents.get(fileName) ??
                getComponentFromFile(fileName)),
            )
          })
        } else {
          const fileName = Path.posix.resolve(
            Path.posix.dirname(this.configFile),
            option,
          )
          this._globalComponents.push(
            ...(this._projectComponents.get(fileName) ??
              getComponentFromFile(fileName)),
          )
        }
      } else {
        Object.entries(option).forEach(([name, config]) => {
          const componentName = getComponentName(name)
          const id = typeof config === 'string' ? config : config.moduleName
          const moduleName =
            id in this.packageJSON.dependencies ||
            id in this.packageJSON.devDependencies
              ? id
              : Path.posix.resolve(Path.posix.dirname(this.configFile), id)

          this._globalComponents.push({
            name: componentName,
            aliases: getComponentNameAliases(name),
            source: {
              moduleName: moduleName,
              exportName:
                typeof config !== 'string' ? config.exportName : undefined,
              localName: componentName,
            },
          })
        })
      }
    })
  }
}
