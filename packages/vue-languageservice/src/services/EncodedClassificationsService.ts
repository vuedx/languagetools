import { chunk, isNotNull } from '@vuedx/shared'
import { injectable, inject } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from './FilesystemService'
import { TypescriptContextService } from './TypescriptContextService'

@injectable()
export class EncodedClassificationsService
  implements
    Pick<
      TSLanguageService,
      'getEncodedSemanticClassifications' | 'getEncodedSyntacticClassifications'
    > {
  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  public getEncodedSemanticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
    format?: TypeScript.SemanticClassificationFormat,
  ): TypeScript.Classifications {
    this.ts.ensureUptoDate(fileName)

    return this.getEncodedClassifications(
      (fileName, span, format) => {
        return this.ts.service.getEncodedSemanticClassifications(
          fileName,
          span,
          format,
        )
      },
      fileName,
      span,
      format,
    )
  }

  public getEncodedSyntacticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
  ): TypeScript.Classifications {
    this.ts.ensureUptoDate(fileName)

    return this.getEncodedClassifications(
      (fileName, span) => {
        return this.ts.service.getEncodedSyntacticClassifications(
          fileName,
          span,
        )
      },
      fileName,
      span,
    )
  }

  private getEncodedClassifications(
    getter: (
      fileName: string,
      span: TypeScript.TextSpan,
      format?: TypeScript.SemanticClassificationFormat,
    ) => TypeScript.Classifications,
    fileName: string,
    span: TypeScript.TextSpan,
    format?: TypeScript.SemanticClassificationFormat,
  ): TypeScript.Classifications {
    if (!this.fs.isVueFile(fileName)) {
      return getter(fileName, span, format)
    }

    const file = this.fs.getVueFile(fileName)
    if (file == null) return { spans: [], endOfLineState: 0 }

    const docs = file.blocks
      .filter(
        (block) =>
          span.start <= block.loc.start.offset &&
          block.loc.end.offset <= span.start + span.length,
      )
      .map((block) => file.getDoc(block))
      .filter(isNotNull)

    return docs.reduce<TypeScript.Classifications>(
      (result, doc) => {
        if (doc.tsFileName == null) return result
        if (doc.block.type === 'template') return result

        const classifications = getter(
          doc.tsFileName,
          doc.toBlockSpan(span),
          format,
        )

        return {
          spans: [
            ...result.spans,
            ...chunk(classifications.spans, 3).flatMap((span) => {
              return [doc.toFileOffset(span[0]), span[1], span[2]]
            }),
          ],
          endOfLineState: classifications.endOfLineState,
        }
      },
      { spans: [], endOfLineState: 0 },
    )
  }
}
