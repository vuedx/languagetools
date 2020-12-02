import { ProjectConfig } from '@vuedx/projectconfig'
import micromatch from 'micromatch'
import Path from 'path'
import { getComponentName, getComponentNameAliases } from '../utilities'
import {
  getComponentFromFile,
  getComponentsFromPackage
} from './detector/components'
import { PackageJSON } from './detector/PackageJSON'
import { VueProject } from './VueProject'

export class ConfiguredVueProject extends VueProject {
  kind = 'configured' as const

  constructor(
    rootDir: string,
    packageFile: string | undefined,
    packageJSON: Partial<PackageJSON>,
    public readonly configFile: string,
    config: Readonly<ProjectConfig>,
    requireModule: NodeJS.Require = require,
  ) {
    super(rootDir, packageFile, packageJSON, requireModule)
    this.setConfig(config)
  }

  public setFileNames(fileNames: string[]): void {
    super.setFileNames(fileNames)
    this.markDirty()
  }

  protected refresh(): void {
    this.config.globalComponents?.forEach((option) => {
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

          this._globalComponents.push({
            name: componentName,
            aliases: getComponentNameAliases(name),
            source: {
              moduleName:
                typeof config === 'string' ? config : config.moduleName,
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
