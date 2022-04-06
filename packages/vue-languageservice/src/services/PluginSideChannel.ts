import {
  isVueSFCDescriptorFile,
  isVueTemplateASTFile,
  toFileName,
} from '@vuedx/shared'
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
      return this.fs.getVueFile(fileName)?.getTypeScriptText()
    } else if (this.fs.isVueVirtualFile(fileName)) {
      const doc = this.fs.getVueFile(fileName)?.getDocById(fileName)
      if (doc == null || doc.generated == null) return
      return doc.generated.getText()
      // +
      // '\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
      // Buffer.from(JSON.stringify(doc.rawSourceMap)).toString('base64') +
      // '\n'
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

  /**
   * Get contents of a virtual file.
   */
  public async getVirtualFileAt(
    fileName: string,
    position: number,
  ): Promise<string | undefined> {
    if (!this.fs.isVueFile(fileName)) return

    return (
      this.fs.getVirtualFileAt(fileName, position)?.tsFileName ??
      this.fs.getVueFile(fileName)?.tsFileName
    )
  }

  public async findGeneratedFileAndRange(
    fileName: string,
    start: number,
    end: number,
  ): Promise<undefined | { fileName: string; start: number; end: number }> {
    const offset = Math.min(start, end)
    const length = Math.abs(end - start)
    const blockFile = this.fs.getVirtualFileAt(fileName, offset)
    if (blockFile?.tsFileName == null) return
    const result = blockFile.generatedOffetAndLengthAt(offset, length)

    return {
      fileName: blockFile.tsFileName,
      start: result.offset,
      end: result.offset + result.length,
    }
  }

  public async getRelatedVirtualFiles(fileName: string): Promise<string[]> {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []
    return [
      file.tsFileName,
      ...file.getActiveTSDocIDs(),
      toFileName({ type: 'vue-descriptor', fileName: file.fileName }),
      toFileName({ type: 'vue-template-ast', fileName: file.fileName }),
      this.ts.getProjectRuntimeFileName(fileName),
    ]
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
