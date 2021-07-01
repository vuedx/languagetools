import {
  ConfiguredVueProject,
  InferredVueProject,
  VueProject,
} from '@vuedx/analyze'
import type {
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import glob from 'fast-glob'
import * as FS from 'fs'
import { injectable } from 'inversify'
import JSON5 from 'json5'
import * as Path from 'path'
import vscode from 'vscode'
import { Installable } from '../utils/installable'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare let __non_webpack_require__: any

const requireModule = (typeof __non_webpack_require__ !== 'undefined'
  ? __non_webpack_require__
  : require) as NodeJS.Require

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (_event) => {}),
      vscode.workspace.onDidOpenTextDocument(async (_event) => {}),
    )
  }

  public async getVueDocument(_uri: string): Promise<VueSFCDocument | null> {
    return null
  }

  public getProjectForFile(fileName: string): VueProject {
    const packageFile = findConfigFile(fileName, FS.existsSync, 'package.json')
    const configFile = findConfigFile(fileName, FS.existsSync, 'vueconfig.json')

    const rootDir = Path.posix.dirname(packageFile ?? fileName)
    const fileNames = readDirectory(rootDir)
    const readJSON = (fileName: string): any => {
      const contents = FS.readFileSync(fileName, { encoding: 'utf-8' })

      return JSON5.parse(contents)
    }

    const project: VueProject =
      configFile != null
        ? new ConfiguredVueProject(
            rootDir,
            packageFile,
            packageFile != null ? readJSON(packageFile) : {},
            configFile,
            readJSON(configFile),
            requireModule,
          )
        : new InferredVueProject(
            rootDir,
            packageFile,
            packageFile != null ? readJSON(packageFile) : {},
            requireModule,
          )

    project.setFileNames(fileNames)

    return project
  }

  public async getVirtualDocument(
    _uri: string,
  ): Promise<VueBlockDocument | null> {
    return null
  }

  public onDidChangeTextDocument(
    fn: (e: { uri: vscode.Uri }) => any,
  ): vscode.Disposable {
    return this.emitter.event(fn)
  }
}

function readDirectory(dir: string): string[] {
  return glob.sync('**/*.{ts,tsx,js,tsx,vue}', {
    absolute: true,
    cwd: dir,
    ignore: ['**/node_modules/**'],
  })
}

function findConfigFile(
  dir: string,
  exists: (fileName: string) => boolean,
  configName: string,
): string | undefined {
  while (dir !== Path.dirname(dir)) {
    const configFile = Path.join(dir, configName)
    if (exists(configFile)) return configFile
    dir = Path.dirname(dir)
  }

  return undefined
}
