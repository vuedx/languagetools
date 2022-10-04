import { first } from '@vuedx/shared'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { DefinitionService } from './DefinitionService'

@injectable()
export class ReferencesService
  implements
    Pick<
      TypeScript.LanguageService,
      'getReferencesAtPosition' | 'findReferences' | 'getFileReferences'
    >
{
  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
    @inject(DefinitionService)
    private readonly definitions: DefinitionService,
  ) {}

  public getReferencesAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.ReferenceEntry[] | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processReferences(
          this.ts.service.getReferencesAtPosition(
            file.generatedFileName,
            generatedPosition,
          ),
        )
      },
    })
  }

  public findReferences(
    fileName: string,
    position: number,
  ): TypeScript.ReferencedSymbol[] | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processReferencedSymbols(
          this.ts.service.findReferences(
            file.generatedFileName,
            generatedPosition,
          ),
        )
      },
    })
  }

  public getFileReferences(fileName: string): TypeScript.ReferenceEntry[] {
    return this.ts.service.getFileReferences(
      this.ts.getGeneratedFileName(fileName),
    )
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

  public processReferences(
    references: TypeScript.ReferenceEntry[] | undefined,
  ): TypeScript.ReferenceEntry[] {
    if (references == null) return []

    return references.flatMap((reference) => {
      if (!this.fs.isGeneratedVueFile(reference.fileName)) return reference
      const file = this.fs.getVueFile(reference.fileName)
      if (file == null) return []

      const fileName = file.originalFileName
      const textSpan = file.findOriginalTextSpan(reference.textSpan)
      if (textSpan != null) {
        return { ...reference, fileName, textSpan }
      }

      const declarations = this.declarations.getTemplateDeclaration(fileName)
      const { line } = file.generated.positionAt(reference.textSpan.start)
      const declaration = declarations.byLine.get(line)
      if (declaration == null) return []

      if (declaration.kind === 'variable') {
        return declaration.references.flatMap((span) => {
          const textSpan = file.findOriginalTextSpan(span)
          if (textSpan == null) return []
          return { ...reference, fileName, textSpan }
        })
      } else if (declaration.kind === 'identifier') {
        return declaration.references.flatMap(({ start }) => {
          const { line } = file.generated.positionAt(start)
          const declaration = declarations.byLine.get(line)
          if (declaration == null) return []
          if (declaration.kind !== 'variable') return []
          return declaration.references.flatMap((span) => {
            const textSpan = file.findOriginalTextSpan(span)
            if (textSpan == null) return []

            return { ...reference, fileName, textSpan }
          })
        })
      }

      return []
    })
  }

  public processReferencedSymbols(
    symbols: TypeScript.ReferencedSymbol[] | undefined,
  ): TypeScript.ReferencedSymbol[] | undefined {
    if (symbols == null) return
    return symbols.flatMap((symbol) => {
      const definitions = this.definitions.processDefinitionInfo(
        symbol.definition,
      )
      if (definitions.length === 0) return []
      const references = this.processReferences(symbol.references)
      if (references.length === 0) return []
      return {
        ...symbol,
        definition: { ...symbol.definition, ...first(definitions) },
        references,
      }
    })
  }
}
