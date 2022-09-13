import { isVueSFCDescriptorFile, isVueTemplateASTFile } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import { FilesystemService } from './FilesystemService'
import { TypescriptContextService } from './TypescriptContextService'

@injectable()
export class PluginSideChannel {
  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,

    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  /**
   * Get contents of a virtual file.
   */
  public async getVirtualFileContents(
    fileName: string,
  ): Promise<string | undefined> {
    if (this.fs.isVueTsFile(fileName)) {
      const file = this.fs.getVueFile(fileName)
      if (file == null) return undefined

      return (
        file.getText() +
        '\n//#sourceMappingURL=data:application/json;base64,' +
        Buffer.from(file.map).toString('base64')
      )
    } else if (this.fs.isProjectRuntimeFile(fileName)) {
      return this.ts.getProjectRuntimeFile(fileName)
    } else if (isVueSFCDescriptorFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile != null) return stringify(vueFile.descriptor)
      return '{}'
    } else if (isVueTemplateASTFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile?.templateAST != null) return stringify(vueFile.templateAST)
      return '{}'
    }

    return undefined
  }

  public async getRelatedVirtualFiles(fileName: string): Promise<string[]> {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []
    return [file.generatedFileName]
  }
}

function stringify(obj: object): string {
  const visited = new Map<object, string>()

  return JSON.stringify(
    obj,
    function (key, value) {
      if (typeof value === 'object' && value != null) {
        const existing = visited.get(value)
        if (existing !== undefined) return `[[Cirular(${existing})]]`

        const prefix = visited.get(this)
        visited.set(value, prefix != null ? `${prefix}.${key}` : key)
      }

      return value
    },
    2,
  )
}
