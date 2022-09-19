import { debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class CompletionsService
  implements
    Pick<
      TSLanguageService,
      'getCompletionsAtPosition'
      // | 'getCompletionEntryDetails'
      // | 'getCompletionEntrySymbol'
      // | 'getDocCommentTemplateAtPosition'
      // | 'getJsxClosingTagAtPosition'
    >
{
  public readonly logger = new LoggerService(CompletionsService)

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
  ) {}

  @debug()
  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const generated = this.declarations.findGeneratedPosition(file, position)
    if (generated == null) return
    return this.ts.service.getCompletionsAtPosition(
      file.generatedFileName,
      generated.position,
      options,
    )
  }
}
