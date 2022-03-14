import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class QuickInfoService {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)

      return this.ts
        .getUndecoratedServiceFor(realFileName)
        ?.getQuickInfoAtPosition(realFileName, position)
    } else if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return undefined
      const blockFile = vueFile.getDocAt(position)
      if (blockFile?.tsFileName == null) return undefined
      if (this.ts.getSourceFile(blockFile.tsFileName) == null) return
      const offset = blockFile.generatedOffetAt(position)
      const quickInfo = this.ts.service.getQuickInfoAtPosition(
        blockFile.tsFileName,
        offset,
      )

      if (quickInfo != null) {
        quickInfo.textSpan = this.getTextSpan(blockFile, quickInfo.textSpan)
      }

      return quickInfo
    } else {
      if (this.ts.getSourceFile(fileName) == null) return
      return this.ts.service.getQuickInfoAtPosition(fileName, position)
    }
  }

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan,
  ): Typescript.TextSpan

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined {
    if (textSpan == null) return undefined

    const range = this.fs.getAbsoluteOffsets(blockFile, textSpan)

    return { start: range.start ?? 0, length: range.length ?? 1 }
  }
}
