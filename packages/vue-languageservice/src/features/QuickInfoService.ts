import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import type { LanguageService } from '../contracts/LanguageService'
import {
  getTemplateContextAt,
  TemplateContextType,
} from '../helpers/templateContextAtPosition'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class QuickInfoService {
  private readonly logger = LoggerService.getLogger('QuickInfo')

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(LanguageServiceProvider)
    private readonly languages: LanguageServiceProvider,
  ) {}

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    this.logger.debug(`getQuickInfoAtPosition(${fileName}, ${position})`)
    if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)

      return this.ts
        .getUndecoratedServiceFor(realFileName)
        ?.getQuickInfoAtPosition(realFileName, position)
    } else if (this.fs.isVueFile(fileName)) {
      const vueFile = this.fs.getVueFile(fileName)
      if (vueFile == null) return
      const blockFile = vueFile.getDocAt(position)
      if (blockFile == null) return
      const fromTS = this.getQuickInfoFromTS(blockFile, position)
      const fromLS = this.getQuickInfoFromLS(blockFile, position)
      if (fromLS == null) return fromTS ?? undefined
      if (fromTS == null) return fromLS ?? undefined

      const combined: Typescript.QuickInfo = {
        ...fromLS,
        ...fromTS,
        documentation: [
          ...(fromTS.documentation ?? []),
          { kind: 'text', text: '\n' },
          ...(fromLS.documentation ?? []),
        ],
      }

      return combined
    } else {
      if (this.ts.getSourceFile(fileName) == null) return
      return this.ts.service.getQuickInfoAtPosition(fileName, position)
    }
  }

  private getQuickInfoFromLS(
    blockFile: VueBlockDocument,
    position: number,
  ): Typescript.QuickInfo | null {
    const service = this.languages.getLanguageService(blockFile.fileName)
    if (service == null) return null

    const result = service.getQuickInfoAtPosition(
      blockFile.fileName,
      blockFile.positionAt(blockFile.toBlockOffset(position)),
    )

    this.logger.debug('From LS', result)

    if (result == null) return null

    const textSpan =
      result.range == null
        ? { start: position, length: 1 }
        : this.getTextSpanFromRange(blockFile, result.range)

    const contents = result.contents as LanguageService.MarkupContent

    return {
      kind: this.ts.lib.ScriptElementKind.unknown,
      kindModifiers: '',
      textSpan,
      documentation: [{ kind: 'text', text: contents.value }],
    }
  }

  private getQuickInfoFromTS(
    blockFile: VueBlockDocument,
    position: number,
  ): Typescript.QuickInfo | null {
    if (blockFile.tsFileName == null) return null

    let offset = blockFile.findGeneratedOffetAt(
      blockFile.toBlockOffset(position),
    )
    if (
      blockFile.block.type === 'template' &&
      blockFile.parent.templateAST != null
    ) {
      const context = getTemplateContextAt(
        blockFile.parent.templateAST,
        blockFile.toBlockOffset(position),
      )

      switch (context.type) {
        case TemplateContextType.AttributeValue:
        case TemplateContextType.Comment:
        case TemplateContextType.None:
          return null
        case TemplateContextType.Attribute:
          if (context.node == null) return null
          offset = blockFile.findGeneratedOffetAt(context.node.loc.start.offset)
          break
        case TemplateContextType.OpenTag:
        case TemplateContextType.CloseTag:
          break
        case TemplateContextType.DirectiveArgument:
        case TemplateContextType.DirectiveValue:
        case TemplateContextType.Interpolation:
          if (context.node != null) {
            if (
              blockFile.toBlockOffset(position) < context.node.loc.start.offset
            ) {
              return null // TODO: Provide quick info for the directive
            }

            offset = blockFile.findGeneratedOffetAt(
              Math.max(
                context.node.loc.start.offset,
                blockFile.toBlockOffset(position),
              ),
            )
          }
          break
        case TemplateContextType.DirectiveModifier:
          break
      }
    }

    const quickInfo = this.ts.service.getQuickInfoAtPosition(
      blockFile.tsFileName,
      offset,
    )
    if (quickInfo == null) return null

    quickInfo.textSpan = this.getTextSpan(blockFile, quickInfo.textSpan)

    return quickInfo
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

  private getTextSpanFromRange(
    blockFile: VueBlockDocument,
    range: LanguageService.Range,
  ): Typescript.TextSpan {
    const start = blockFile.toFileOffset(blockFile.offsetAt(range.start))
    const end = blockFile.toFileOffset(blockFile.offsetAt(range.end))

    return { start: Math.min(start, end), length: Math.abs(end - start) }
  }
}
