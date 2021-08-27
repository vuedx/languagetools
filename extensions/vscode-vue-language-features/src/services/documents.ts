import {
  ConfiguredVueProject,
  InferredVueProject,
  VueProject,
} from '@vuedx/analyze'
import {
  transformers,
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
  private readonly documents = new Map<string, VueSFCDocument>()

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (event) => {
        if (event.document.languageId === 'vue') {
          const uri = event.document.uri
          const fileName = uri.toString()

          const doc = this.getVueDocument(fileName)
          if (doc != null) {
            doc.update(event.contentChanges.slice(), 0)
            if (doc.descriptor.template != null) {
              const id = doc.getBlockId(doc.descriptor.template)
              this.emitter.fire({
                uri: this.getVirtualFileUri(id),
              })
            }
          }
        }
      }),
      vscode.workspace.onDidOpenTextDocument(async (text) => {
        if (text.languageId === 'vue') {
          const uri = text.uri
          const fileName = uri.fsPath
          const document = VueSFCDocument.create(fileName, text.getText(), {
            transformers,
          })

          this.documents.set(fileName, document)
        }
      }),
    )
  }

  private getVirtualFileUri(fileName: string): vscode.Uri {
    return vscode.Uri.file(fileName).with({ scheme: 'vue' })
  }

  public getVueDocument(fileName: string): VueSFCDocument | null {
    return this.documents.get(fileName) ?? null
  }

  public async ensureDocument(fileName: string): Promise<void> {
    if (this.documents.has(fileName)) return

    try {
      const text = await FS.promises.readFile(fileName, 'utf-8')
      const document = VueSFCDocument.create(fileName, text, {
        transformers,
      })

      this.documents.set(fileName, document)
    } catch {}
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

  private removeVirtualFileQuery(fileName: string): string {
    const index = fileName.indexOf('?vue')
    if (index < 0) return fileName
    return fileName.substr(0, index)
  }

  public async getVirtualDocument(
    fileName: string,
  ): Promise<VueBlockDocument | null> {
    return (
      this.getVueDocument(this.removeVirtualFileQuery(fileName))?.getDocById(
        fileName,
      ) ?? null
    )
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
