import { annotations } from '@vuedx/compiler-tsx'
import { debug } from '@vuedx/shared'
import { isElementNode } from '@vuedx/template-ast-types'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import {
  TemplateDeclarationsService,
  GeneratedPositionKind,
} from '../services/TemplateDeclarationsService'
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

  // TODO: provide template completions, e.g. v-model, v-for, etc.
  // TODO: provide v-bind and v-on completions for props and events.
  // TODO: provide modifiers completions for directives.

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
    if (generated.kind === GeneratedPositionKind.TEMPLATE_NODE) {
      const { node, templateRange } = generated
      const offset = position - templateRange.start
      if (
        isElementNode(node) &&
        isOffsetInSourceLocation(node.startTagLoc, offset) &&
        node.tag !== ''
      ) {
        const generatedPosition = file.generatedOffsetAt(
          node.tagLoc.start.offset + templateRange.start,
        )

        if (generatedPosition != null) {
          return this.ts.service.getCompletionsAtPosition(
            file.generatedFileName,
            generatedPosition +
              file.generated
                .getText()
                .slice(generatedPosition)
                .indexOf(annotations.tsxCompletions),
            options,
          )
        }
      }
    }

    return this.ts.service.getCompletionsAtPosition(
      file.generatedFileName,
      generated.position,
      options,
    )
  }
}
