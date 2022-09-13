import { debug, invariant } from '@vuedx/shared'
import { findTemplateNodeAt, isComponentNode } from '@vuedx/template-ast-types'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from '../services/FilesystemService'
import {
  GeneratedPositionKind,
  TemplateDeclarationsService,
} from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class DefinitionService
  implements
    Pick<
      TSLanguageService,
      | 'getDefinitionAtPosition'
      | 'getDefinitionAndBoundSpan'
      | 'getTypeDefinitionAtPosition'
    >
{
  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
  ) {}

  @debug()
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const generatedPosition = this.declarations.findGeneratedPosition(
      file,
      position,
    )

    if (generatedPosition == null) return

    if (
      generatedPosition.kind === GeneratedPositionKind.COMPONENT_TAG_EXPRESSION
    ) {
      return this.ts.service.getDefinitionAndBoundSpan(
        file.generatedFileName,
        generatedPosition.position,
      )?.definitions
    }

    return this.ts.service
      .getDefinitionAtPosition(
        file.generatedFileName,
        generatedPosition.position,
      )
      ?.flatMap((definition) => this.processDefinitionInfo(definition))
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const generatedPosition = this.declarations.findGeneratedPosition(
      file,
      position,
    )

    if (generatedPosition == null) return

    // If the generated position is a component, we need to get type definition
    // instead of definition. This is due to resolveComponent finding component
    // definition from different sources.
    if (
      generatedPosition.kind === GeneratedPositionKind.COMPONENT_TAG_EXPRESSION
    ) {
      const definitions = this.ts.service.getTypeDefinitionAtPosition(
        file.generatedFileName,
        generatedPosition.position,
      )

      if (definitions == null) return

      invariant(file.templateAST != null, 'Template AST should be available.')
      const node = findTemplateNodeAt(file.templateAST, position)
      invariant(isComponentNode(node), 'Node should be a component node.')

      // COMPONENT_TAG_EXPRESSION is either in tagLoc or in tagEndLoc.
      const loc = isOffsetInSourceLocation(node.endTagLoc, position)
        ? node.endTagLoc
        : node.tagLoc

      return {
        definitions,
        textSpan: {
          start: loc.start.offset,
          length: loc.end.offset - loc.start.offset,
        },
      }
    }

    const result = this.ts.service.getDefinitionAndBoundSpan(
      file.generatedFileName,
      generatedPosition.position,
    )

    if (result == null) return

    const textSpan = file.findOriginalTextSpan(result.textSpan)
    if (textSpan == null) return

    return {
      textSpan,
      definitions: result.definitions?.flatMap((definition) =>
        this.processDefinitionInfo(definition),
      ),
    }
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const generatedPosition = this.declarations.findGeneratedPosition(
      file,
      position,
    )

    if (generatedPosition == null) return

    if (
      generatedPosition.kind === GeneratedPositionKind.COMPONENT_TAG_EXPRESSION
    ) {
      return this.ts.service.getDefinitionAndBoundSpan(
        file.generatedFileName,
        generatedPosition.position,
      )?.definitions
    }

    return this.ts.service
      .getTypeDefinitionAtPosition(
        file.generatedFileName,
        generatedPosition.position,
      )
      ?.flatMap((definition) => this.processDefinitionInfo(definition))
  }

  public processDefinitionInfo(
    definition: TypeScript.DefinitionInfo,
  ): TypeScript.DefinitionInfo[] {
    if (!this.fs.isGeneratedVueFile(definition.fileName)) return [definition]
    const file = this.fs.getVueFile(definition.fileName)
    if (file == null) return []
    const textSpan = file.findOriginalTextSpan(definition.textSpan)
    if (textSpan == null) return []
    const contextSpan =
      definition.contextSpan != null
        ? file.findOriginalTextSpan(definition.contextSpan)
        : null

    return [
      {
        ...definition,
        fileName: file.originalFileName,
        textSpan,
        contextSpan: contextSpan ?? undefined,
      },
    ]
  }
}
