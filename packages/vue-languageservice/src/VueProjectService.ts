import { FilesystemHost, VueProject } from '@vuedx/projectconfig'
import { cache } from '@vuedx/shared'
import Path from 'path'

export type { FilesystemHost, VueProject }
export class VueProjectService {
  #projects: Map<string, VueProject> = new Map()
  #inferred: VueProject | undefined

  constructor(private readonly fileSystemHost: FilesystemHost) {}

  @cache()
  public getProject(fileName: string): VueProject {
    const find = findConfigFile.bind(
      null,
      (id) => this.fileSystemHost.fileExists(id),
      fileName,
    )

    const configOrPackageFile = find('vueconfig.json') ?? find('package.json')
    if (configOrPackageFile == null) {
      if (this.#inferred == null) {
        this.#inferred = VueProject.create(this.fileSystemHost, '/')
      }

      return this.#inferred
    }

    let project = this.#projects.get(configOrPackageFile)
    if (project != null) return project

    project = VueProject.create(
      this.fileSystemHost,
      Path.dirname(configOrPackageFile),
    )

    this.#projects.set(configOrPackageFile, project)

    return project
  }
}

function findConfigFile(
  exists: (path: string) => boolean,
  fileName: string,
  configName: string,
): string | undefined {
  const dir = Path.dirname(fileName)
  if (exists(Path.join(dir, configName))) return dir

  const parent = Path.posix.dirname(dir)
  if (parent === dir) return

  return findConfigFile(exists, parent, configName)
}
