import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from './FilesystemService'
import { TypescriptContextService } from './TypescriptContextService'

@injectable()
export class EncodedClassificationsService
  implements
    Pick<
      TSLanguageService,
      'getEncodedSemanticClassifications' | 'getEncodedSyntacticClassifications'
    >
{
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
    if (this.fs.isVueFile(fileName)) {
      return {
        spans: [],
        endOfLineState: this.ts.lib.EndOfLineState.None,
      }
    }

    return this.ts.service.getEncodedSemanticClassifications(
      fileName,
      span,
      format,
    )
  }

  public getEncodedSyntacticClassifications(
    fileName: string,
    span: TypeScript.TextSpan,
  ): TypeScript.Classifications {
    if (this.fs.isVueFile(fileName)) {
      return {
        spans: [],
        endOfLineState: this.ts.lib.EndOfLineState.None,
      }
    }

    return this.ts.service.getEncodedSyntacticClassifications(fileName, span)
  }
}
