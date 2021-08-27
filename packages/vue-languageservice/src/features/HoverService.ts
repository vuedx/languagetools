import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import type { Hover, Position } from 'vscode-languageserver-types'
import { INJECTABLE_TS_SERVICE } from '../constants'
import type { TSLanguageService } from '../contracts/Typescript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptService } from '../services/TypescriptService'

@injectable()
export class HoverService {
  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(INJECTABLE_TS_SERVICE)
    private readonly service: TSLanguageService,
  ) {}

  public getHover(_fileName: string, _position: Position): Hover | undefined {
    return undefined
  }

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return undefined
      const blockFile = vueFile.getDocAt(position)
      if (blockFile?.tsFileName == null) return undefined
      const offset = blockFile.generatedOffetAt(position)
      const quickInfo = this.service.getQuickInfoAtPosition(
        blockFile.tsFileName,
        offset,
      )

      if (quickInfo != null) {
        quickInfo.textSpan = this.getTextSpan(blockFile, quickInfo.textSpan)
      }

      return quickInfo
    } else if (this.fs.isVueVirtualSchemeFile(fileName)) {
      return this.ts
        .getServiceFor(this.fs.removeVirtualFileScheme(fileName))
        ?.getQuickInfoAtPosition(fileName, position)
    } else {
      return this.service.getQuickInfoAtPosition(fileName, position)
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
