import { inject, injectable } from 'inversify'
import type { OutliningSpan } from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class FoldingRangeService
  implements Pick<TSLanguageService, 'getOutliningSpans'> {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getOutliningSpans(fileName: string): OutliningSpan[] {
    if (this.fs.isVueSchemeFile(fileName)) {
      return this.ts.service.getOutliningSpans(
        this.fs.getRealFileName(fileName),
      )
    } else if (this.fs.isVueFile(fileName)) {
      const file = this.fs.getVueFile(fileName)
      if (file == null) return []
      const blockSpans: OutliningSpan[] = file.blocks.map((block) => {
        const textSpan = {
          start: block.loc.start.offset,
          length: block.loc.end.offset - block.loc.start.offset,
        }

        return {
          kind: this.ts.lib.OutliningSpanKind.Region,
          textSpan,
          // following properties are not used by the editor
          hintSpan: textSpan,
          bannerText: `${block.type} block`,
          autoCollapse: false,
        }
      })

      return blockSpans
    } else {
      return this.ts.service.getOutliningSpans(fileName)
    }
  }
}
