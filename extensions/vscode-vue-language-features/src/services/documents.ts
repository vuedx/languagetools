import vscode from 'vscode'
import { injectable } from 'inversify'
import {
  AsyncDocumentStore,
  isVueFile,
  parseVirtualFileName,
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import { InferredVueProject, VueProject } from '@vuedx/analyze'
import { Installable } from '../utils/installable'
import Path from 'path'
import FS from 'fs'
import glob from 'fast-glob'

@injectable()
export class DocumentService extends Installable {
  private readonly emitter = new vscode.EventEmitter<{ uri: vscode.Uri }>()
  private readonly projects: VueProject[] = []
  private readonly store = new AsyncDocumentStore(async (uri) => {
    const _uri = vscode.Uri.parse(uri)
    const text = await vscode.workspace.openTextDocument(_uri)
    const project = this.getProjectForFile(_uri.fsPath)
    const doc = VueTextDocument.create(
      uri,
      'vue',
      text.version,
      text.getText(),
      { globalComponents: project.components },
    )

    return doc
  })

  public install(): vscode.Disposable {
    super.install()

    return vscode.Disposable.from(
      this.store,
      this.emitter,
      vscode.workspace.onDidChangeTextDocument(async (event) => {
        const uri = event.document.uri.toString()
        if (this.store.has(uri)) {
          const document = await this.store.get(uri)

          if (document != null) {
            VueTextDocument.update(
              document,
              event.contentChanges.slice(),
              event.document.version,
            )

            document.all().forEach((document) => {
              this.emitter.fire({ uri: vscode.Uri.parse(document.uri) })
            })
          }
        }
      }),
      vscode.workspace.onDidOpenTextDocument((event) => {
        const uri = event.uri.toString()

        if (isVueFile(uri)) this.store.get(uri)
      }),
    )
  }

  public async getVueDocument(uri: string): Promise<VueTextDocument | null> {
    return this.store.get(uri)
  }

  public getProjectForFile(fileName: string): VueProject {
    let project =
      this.projects.find((project) =>
        fileName.startsWith(project.rootDir + '/'),
      ) ?? null

    if (project === null) {
      const packageFile = findConfigFile(
        fileName,
        FS.existsSync,
        'package.json',
      )

      // TODO: Implement configured project support. https://github.com/vuejs/vetur/pull/2378

      const rootDir = Path.posix.dirname(packageFile ?? fileName)
      const fileNames = readDirectory(rootDir)

      project = new InferredVueProject(
        rootDir,
        // eslint-disable-next-line no-eval
        packageFile != null ? eval('require')(packageFile) : {},
      )

      project.setVueFileNames(fileNames)

      this.projects.push(project)
    }

    return project
  }

  public async getVirtualDocument(
    uri: string,
  ): Promise<VirtualTextDocument | null> {
    try {
      const { selector, uri: container } = parseVirtualFileName(uri) ?? {}
      if (container != null && selector != null) {
        const document = await this.store.get(container)

        return document?.getDocument(selector) ?? null
      }
    } catch {}

    return null
  }

  public onDidChangeTextDocument(
    fn: (e: { uri: vscode.Uri }) => any,
  ): vscode.Disposable {
    return this.emitter.event(fn)
  }
}

function readDirectory(dir: string): string[] {
  return glob.sync('**/*.vue', {
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
}
