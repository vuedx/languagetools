import { inject, injectable } from 'inversify'
import { FilesystemService } from './FilesystemService'
import { TypescriptContextService } from './TypescriptContextService'

@injectable()
export class LanguageServiceAPI {
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
      return this.fs
        .getVueFile(fileName)
        ?.getDocById(fileName)
        ?.generated?.getText()
    } else if (this.fs.isProjectRuntimeFile(fileName)) {
      return this.ts.getProjectRuntimeFile(fileName)
    }

    return undefined
  }

  public async getRelatedVirtualFiles(fileName: string): Promise<string[]> {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return []
    return [
      file.tsFileName,
      ...file.getActiveTSDocIDs(),
      this.ts.getProjectRuntimeFileName(fileName),
    ]
  }
}
