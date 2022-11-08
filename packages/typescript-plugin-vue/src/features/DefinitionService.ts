import { createCache, debug } from '@vuedx/shared'
import { isComponentNode } from '@vuedx/template-ast-types'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import {
  TemplateContextKind,
  TemplateContextService,
} from '../services/TemplateContextService'
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
  public readonly logger = new LoggerService(DefinitionService)
  public readonly processDefinitionInfoCache = createCache<
    string,
    TypeScript.DefinitionInfo[]
  >()

  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
    @inject(TemplateContextService)
    private readonly templateContext: TemplateContextService,
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
    return this.fs.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processDefinitionInfoAndBoundSpan(
          file,
          position,
          this.ts.service.getDefinitionAndBoundSpan(
            file.generatedFileName,
            generatedPosition,
          ),
        )
      },
      template: (file) => {
        // TODO: check what kind of node at position.
        const context = this.templateContext.getContext(file, position)
        if (context == null || context.node == null) return
        if (context.kind === TemplateContextKind.Tag) {
          if (isComponentNode(context.element)) {
            const id = context.element.resolvedName ?? context.element.tag
            const declaration = this.declarations
              .getTemplateDeclaration(fileName)
              .declarations.find((declaration) => declaration.id === id)

            if (declaration != null) {
              const definition = this.ts.service.getTypeDefinitionAtPosition(
                file.generatedFileName,
                declaration.name.start,
              )

              if (definition != null) {
                return {
                  textSpan: {
                    start:
                      context.block.loc.start.offset +
                      context.element.tagLoc.start.offset,
                    length: context.element.tagLoc.source.length,
                  },
                  definitions: definition.flatMap((definition) =>
                    this.processDefinitionInfo(definition),
                  ),
                }
              }
            }
          }
        }

        return this.processDefinitionInfoAndBoundSpan(
          file,
          position,
          this.ts.service.getDefinitionAndBoundSpan(
            file.generatedFileName,
            context.offsetInGenerated,
          ),
        )
      },
    })
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
    const cacheKey = this.getDefinitionInfoCacheKey(definition)
    return this.processDefinitionInfoCache.resolve(cacheKey, () => {
      this.processDefinitionInfoCache.set(cacheKey, []) // prevent infinite recursion.
      if (!this.fs.isGeneratedVueFile(definition.fileName)) return [definition]
      const file = this.fs.getVueFile(definition.fileName)
      if (file == null) return []
      const textSpan =
        definition.textSpan.start === 0 && definition.textSpan.length === 0
          ? definition.textSpan
          : file.findOriginalTextSpan(definition.textSpan)
      if (textSpan == null) {
        // Traverse up the definition chain if there is a template declaration.
        const templateDeclaration = this.declarations.getTemplateDeclarationAt(
          file.originalFileName,
          definition.textSpan.start,
        )
        if (templateDeclaration != null) {
          if (templateDeclaration.kind === 'variable') {
            return (
              this.ts.service
                .getDefinitionAtPosition(
                  file.generatedFileName,
                  templateDeclaration.initializer.start + 1,
                )
                ?.flatMap((definition) =>
                  this.processDefinitionInfo(definition),
                ) ?? []
            )
          } else if (templateDeclaration.kind === 'identifier') {
            const span = this.fs.getTextSpan(
              file,
              templateDeclaration.initializer,
            )
            return (
              this.ts.service
                .getDefinitionAtPosition(
                  file.generatedFileName,
                  templateDeclaration.initializer.start +
                    templateDeclaration.initializer.length -
                    (span.endsWith(');') ? 2 : 1), // check at the end of the line
                )
                ?.flatMap((definition) =>
                  this.processDefinitionInfo(definition),
                ) ?? []
            )
          } else if (templateDeclaration.kind === 'hoist') {
            return (
              this.ts.service // TODO: fix type definition to goto the correct position.
                .getTypeDefinitionAtPosition(
                  file.generatedFileName,
                  templateDeclaration.name.start,
                )
                ?.flatMap((definition) =>
                  this.processDefinitionInfo(definition),
                ) ?? []
            )
          } else if (templateDeclaration.kind === 'component') {
            return [
              {
                ...definition,
                fileName: file.originalFileName,
                textSpan: {
                  start: 0,
                  length: file.original.getText().length,
                },
                contextSpan: undefined,
              },
            ]
          } else {
            return (
              this.ts.service
                .getDefinitionAtPosition(
                  file.generatedFileName,
                  templateDeclaration.name.start,
                )
                ?.flatMap((definition) =>
                  this.processDefinitionInfo(definition),
                ) ?? []
            )
          }
        }
        return []
      }
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
    })
  }

  private processDefinitionInfoAndBoundSpan(
    file: VueSFCDocument,
    position: number,
    info: TypeScript.DefinitionInfoAndBoundSpan | undefined,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    if (info == null) return
    const textSpan = file.findOriginalTextSpan(info.textSpan) ?? {
      start: position,
      length: 0,
    }

    return {
      textSpan,
      definitions: info.definitions?.flatMap((definition) =>
        this.processDefinitionInfo(definition),
      ),
    }
  }

  private getDefinitionInfoCacheKey(
    definition: TypeScript.DefinitionInfo,
  ): string {
    return `${definition.fileName}:${this.fs.getVersion(definition.fileName)}:${
      definition.textSpan.start
    }:${definition.textSpan.length}`
  }
}
