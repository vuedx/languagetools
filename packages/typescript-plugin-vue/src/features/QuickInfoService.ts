import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class QuickInfoService {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
  ) {}

  public readonly logger = new LoggerService(QuickInfoService)

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processQuickInfo(
          file,
          this.ts.service.getQuickInfoAtPosition(
            file.generatedFileName,
            generatedPosition,
          ),
        )
      },
      template: (file) => {
        const generatedPosition = this.declarations.findGeneratedPosition(
          file,
          position,
        )
        if (generatedPosition == null) return

        const result = this.ts.service.getQuickInfoAtPosition(
          file.generatedFileName,
          generatedPosition.position,
        )
        if (result == null) return
        const name = this.fs.getTextSpan(file, result.textSpan)

        const isUndefinedGlobal = this.declarations
          .getUndefinedGlobals(file.originalFileName)
          .some(
            (declaration) =>
              declaration.id === name &&
              declaration.references.some(
                (reference) => reference.start === result.textSpan.start,
              ),
          )

        if (isUndefinedGlobal) {
          return // if undefined global, don't show quick info
        }

        return this.processQuickInfo(file, result)
      },
    })
  }

  private pick<R>(
    fileName: string,
    position: number,
    fns: Record<string, (file: VueSFCDocument) => R>,
  ): R | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const block = file.getBlockAt(position)
    if (block == null) return
    const fn = fns[block.type]
    if (fn == null) return
    return fn(file)
  }

  private processQuickInfo(
    file: VueSFCDocument,
    quickInfo: Typescript.QuickInfo | undefined,
  ): Typescript.QuickInfo | undefined {
    if (quickInfo == null) return
    const textSpan = file.findOriginalTextSpan(quickInfo.textSpan)
    if (textSpan == null) return

    return { ...quickInfo, textSpan }
  }
}
