import {
  debug,
  isNotNull,
  parseFileName,
  toFileName,
  traceInDevMode,
} from '@vuedx/shared'
import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { Typescript } from '../contracts/Typescript'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { DefinitionService } from './DefinitionService'

@injectable()
export class ReferencesService
  implements
    Pick<
      Typescript.LanguageService,
      'getReferencesAtPosition' | 'findReferences' | 'getFileReferences'
    > {
  private readonly logger = LoggerService.getLogger(
    ReferencesService.name,
    LogLevel.DEBUG,
  )

  private readonly cache = {
    references: new CacheService<{
      position: number
      references: Typescript.ReferenceEntry[]
    }>(
      (fileName) =>
        `${this.ts.project.getProjectVersion()}::${this.fs.getVersion(
          fileName,
        )}`,
      5,
    ),
    symbols: new CacheService<{
      position: number
      references: Typescript.ReferencedSymbol[]
    }>(
      (fileName) =>
        `${this.ts.project.getProjectVersion()}::${this.fs.getVersion(
          fileName,
        )}`,
      5,
    ),

    file: new CacheService<Typescript.ReferenceEntry[]>(
      (fileName) =>
        `${this.ts.project.getProjectVersion()}::${this.fs.getVersion(
          fileName,
        )}`,
      5,
    ),
  }

  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(LanguageServiceProvider)
    private readonly langs: LanguageServiceProvider,
    @inject(DefinitionService)
    private readonly definitions: DefinitionService,
  ) {}

  @debug()
  public getReferencesAtPosition(
    fileName: string,
    position: number,
  ): Typescript.ReferenceEntry[] | undefined {
    if (this.fs.isVueSchemeFile(fileName)) {
      const parsed = parseFileName(fileName)
      return this.resolveReferenceEntryInVueSchemeFile(
        this.ts
          .getUndecoratedServiceFor(parsed.fileName)
          ?.getReferencesAtPosition(
            this.fs.getRealFileName(parsed.fileName),
            position,
          ),
      )
    }

    return this.cache.references.withCache(fileName, (previous) => {
      if (previous?.position === position) return previous

      return {
        position,
        references: this.resolveReferenceEntries(
          this.fs.isVueFile(fileName)
            ? this.getReferencesAtPositionInVueFile(fileName, position)
            : this.ts.service.getReferencesAtPosition(fileName, position),
        ),
      }
    }).references
  }

  @debug()
  public findReferences(
    fileName: string,
    position: number,
  ): Typescript.ReferencedSymbol[] | undefined {
    if (this.fs.isVueSchemeFile(fileName)) {
      const parsed = parseFileName(fileName)
      return this.ts.runInSchemeMode(() =>
        this.resolveReferencedSymbolInVueSchemeFile(
          this.ts
            .getUndecoratedServiceFor(parsed.fileName)
            ?.findReferences(parsed.fileName, position),
        ),
      )
    }

    return this.cache.symbols.withCache(fileName, (previous) => {
      if (previous?.position === position) return previous

      this.logger.debug(`Miss (${fileName}, ${position})`)

      return {
        position,
        references: this.resolveReferencedSymbols(
          this.fs.isVueFile(fileName)
            ? this.findReferencesInVueFile(fileName, position)
            : this.ts.service.findReferences(fileName, position),
        ),
      }
    }).references
  }

  @debug()
  public getFileReferences(fileName: string): Typescript.ReferenceEntry[] {
    return this.cache.file.withCache(fileName, (previous) => {
      if (previous != null) return previous

      return this.resolveReferenceEntries(
        this.fs.isVueFile(fileName)
          ? this.getFileReferences(toFileName({ type: 'vue-ts', fileName }))
          : this.ts.service.getFileReferences(fileName),
      )
    })
  }

  private getReferencesAtPositionInVueFile(
    fileName: string,
    position: number,
  ): Typescript.ReferenceEntry[] {
    const block = this.fs.getVirtualFileAt(fileName, position)
    if (block == null) return []
    return this.getReferencesAtPositionInVirtualFile(
      block,
      block.toBlockOffset(position),
    )
  }

  private getReferencesAtPositionInVirtualFile(
    block: VueBlockDocument,
    position: number,
  ): Typescript.ReferenceEntry[] {
    const references: Typescript.ReferenceEntry[] = []

    if (block.tsFileName != null) {
      for (const offset of block.findCopiedOffsets(position)) {
        references.push(
          ...(this.ts.service.getReferencesAtPosition(
            block.tsFileName,
            offset,
          ) ?? []),
        )
      }
    }

    const service = this.langs.getLanguageService(block.source.languageId)
    if (service != null) {
      // TODO: add support for references in other languages
    }

    return references
  }

  private findReferencesInVueFile(
    fileName: string,
    position: number,
  ): Typescript.ReferencedSymbol[] {
    const block = this.fs.getVirtualFileAt(fileName, position)
    if (block == null) return []

    return this.findReferencesInVirtualFile(
      block,
      block.toBlockOffset(position),
    )
  }

  private findReferencesInVirtualFile(
    block: VueBlockDocument,
    position: number,
  ): Typescript.ReferencedSymbol[] {
    if (block.tsFileName == null || block.generated == null) return []
    const references: Typescript.ReferencedSymbol[] = []
    const fileName = block.tsFileName
    const doc = block.generated

    const find = (offset: number): void => {
      this.logger.debug(
        `(${
          block.block.type
        }) findReferencesInVirtualFile ${fileName}:${this.fs.getPositionString(
          doc,
          offset,
        )}`,
        doc.getText().slice(offset).split('\n', 1)[0],
      )

      references.push(
        ...(this.ts.service.findReferences(fileName, offset) ?? []),
      )
    }

    find(block.findGeneratedOffetAt(position))

    if (block.block.type !== 'template') {
      block.findCopiedOffsets(position).forEach(find)
    }

    return references
  }

  private resolveReferenceEntries(
    references: Typescript.ReferenceEntry[] = [],
  ): Typescript.ReferenceEntry[] {
    return references.flatMap((reference) => {
      if (this.fs.isVueVirtualFile(reference.fileName)) {
        return this.resolveReferenceEntry(reference)
      } else if (this.fs.isVueTsFile(reference.fileName)) {
        return []
      } else {
        return [reference]
      }
    })
  }

  @traceInDevMode()
  private resolveReferenceEntry(
    reference: Typescript.ReferenceEntry,
  ): Typescript.ReferenceEntry[] {
    const block = this.fs.getVirtualFile(reference.fileName)
    if (block == null || block.generated == null || block.tsFileName == null) {
      this.logger.debug(
        `Dropping reference ${JSON.stringify(reference.textSpan)}, not found ${
          reference.fileName
        }`,
      )
      return []
    }
    const offset = reference.textSpan.start
    if (block.isOffsetInTemplateGlobals(offset)) {
      if (reference.contextSpan == null) {
        const text = block.generated
          .getText()
          .substring(
            block.generated.offsetAt({
              line: block.generated.positionAt(offset).line,
              character: 0,
            }),
            offset,
          )
          .trimStart()

        reference.contextSpan = {
          start: offset - text.length,
          length: text.length + reference.textSpan.length,
        }
      }
      const code = block.generated.getText()
      const componentsOffset = code.indexOf('__VueDX_components')
      const directivesOffset = code.indexOf('__VueDX_directives')

      if (
        componentsOffset < reference.contextSpan.start &&
        reference.contextSpan.start < directivesOffset &&
        block.parent.descriptor.template != null
      ) {
        const render = block.parent.getDoc(block.parent.descriptor.template)
        if (
          render == null ||
          render.tsFileName == null ||
          render.generated == null
        ) {
          return []
        }

        const tag = code.slice(
          reference.textSpan.start,
          reference.textSpan.start + reference.textSpan.length,
        )
        const offset = render.generated
          .getText()
          .indexOf(`const ${tag} = VueDX.internal.resolveComponent(`)

        if (offset < 0) return []

        const position = offset + 6

        const references = this.ts.service.getReferencesAtPosition(
          render.tsFileName,
          position,
        )

        this.logger.debug(
          `Looking deeper: ${String(
            render.tsFileName,
          )}:${this.fs.getPositionString(
            render.generated,
            position,
          )} => "${tag}"`,
        )

        return this.resolveReferenceEntries(references ?? [])
      } else {
        const contextText = code.slice(
          reference.contextSpan.start,
          reference.contextSpan.start + reference.contextSpan.length,
        )

        const position =
          reference.contextSpan.start + getLeadingKeywordLength(contextText)

        const references =
          this.ts.service.getReferencesAtPosition(block.tsFileName, position) ??
          []

        this.logger.debug(
          `Looking deeper: ${String(
            block.tsFileName,
          )}:${this.fs.getPositionString(
            block.generated,
            position,
          )} => "${contextText}"`,
          references,
        )

        return this.resolveReferenceEntries(
          references.filter(
            (item) =>
              !(
                item.fileName === reference.fileName &&
                item.textSpan.start === position
              ),
          ),
        )
      }
    } else if (block.isOffsetInIgonredZone(offset)) {
      this.logger.debug(
        `Dropping reference in ignored zone ${JSON.stringify(
          reference.textSpan,
        )}, no original location for ${reference.fileName}`,
      )
      return []
    } else {
      const textSpan = block.findOriginalTextSpan(reference.textSpan)
      if (textSpan == null) {
        this.logger.debug(
          `Dropping reference ${JSON.stringify(
            reference.textSpan,
          )}, no original location for ${reference.fileName}`,
        )
        return []
      }
      const copy = { ...reference }
      copy.textSpan = block.toFileSpan(textSpan)
      if (reference.contextSpan != null) {
        const contextSpan = block.findOriginalTextSpan(reference.contextSpan)
        copy.contextSpan =
          contextSpan != null ? block.toFileSpan(contextSpan) : undefined
      }
      copy.fileName = this.fs.getRealFileName(reference.fileName)
      this.logger.debug(
        `Map reference ${reference.fileName}:${this.fs.getPositionString(
          block.generated as any,
          reference.textSpan.start,
        )} to ${copy.fileName}:${this.fs.getPositionString(
          block.parent,
          copy.textSpan.start,
        )}`,
        {
          from: block.generated
            ?.getText()
            .substr(reference.textSpan.start, reference.textSpan.length),
          to: block.source?.getText().substr(textSpan.start, textSpan.length),
          parent: block.parent
            ?.getText()
            .substr(copy.textSpan.start, copy.textSpan.length),
        },
      )

      return [copy]
    }
  }

  private resolveReferenceEntryInVueSchemeFile(
    references: Typescript.ReferenceEntry[] = [],
  ): Typescript.ReferenceEntry[] {
    return references.map((reference) => {
      if (!this.fs.isVueVirtualFile(reference.fileName)) return reference
      const fileName = toFileName({
        type: 'scheme',
        scheme: 'vue',
        fileName: reference.fileName,
      })

      this.ts.projectService.getOrCreateScriptInfoForNormalizedPath(
        this.ts.lib.server.toNormalizedPath(fileName),
        false,
      )

      return {
        ...reference,
        fileName: fileName,
      }
    })
  }

  private resolveReferencedSymbols(
    symbols: Typescript.ReferencedSymbol[] = [],
  ): Typescript.ReferencedSymbol[] {
    return symbols
      .flatMap((symbol) => {
        const fileName = symbol.definition.fileName
        if (this.fs.isVueTsFile(fileName)) return []
        else if (this.fs.isVueVirtualFile(fileName)) {
          return this.resolveReferencedSymbol(symbol)
        }

        return {
          definition: symbol.definition,
          references: this.resolveReferenceEntries(symbol.references),
        }
      })
      .filter(isNotNull)
  }

  @traceInDevMode()
  private resolveReferencedSymbol({
    definition,
    references,
  }: Typescript.ReferencedSymbol): Typescript.ReferencedSymbol[] {
    const block = this.fs.getVirtualFile(definition.fileName)
    if (block == null || block.generated == null || block.tsFileName == null) {
      this.logger.debug(
        `Dropping definition ${JSON.stringify(
          definition.textSpan,
        )}, not found ${definition.fileName}`,
      )
      return []
    }

    const offset = definition.textSpan.start
    if (block.isOffsetInTemplateGlobals(offset)) {
      if (definition.contextSpan == null) {
        this.logger.debug(`Dropping in globals, no context`)
        return []
      }

      const text = block.generated
        .getText()
        .slice(
          definition.contextSpan.start,
          definition.contextSpan.start + definition.contextSpan.length,
        )

      const position =
        definition.contextSpan.start + getLeadingKeywordLength(text)
      const result = this.definitions.virtualDefinitionAndBoundSpan(
        definition.fileName,
        position,
      )

      this.logger.debug(`Checking "${text}"`, result)
      if (result?.definitions == null || result.definitions.length === 0) {
        return []
      }

      definition = {
        ...definition,
        ...result.definitions[0],
        displayParts: definition.displayParts,
      }

      if (text.includes('VueDX.internal.resolveComponent(')) {
        references.push(...this.getFileReferences(block.parent.fileName))
      }

      const symbols: Typescript.ReferencedSymbol[] = [
        { definition, references: this.resolveReferenceEntries(references) },
      ]

      if (
        definition.originalFileName != null &&
        definition.originalTextSpan != null &&
        this.fs.isVueTsFile(definition.originalFileName)
      ) {
        const result = this.ts.service.findReferences(
          definition.originalFileName,
          definition.originalTextSpan.start,
        )

        if (result != null) {
          symbols.push(...this.resolveReferencedSymbols(result))
        }
      }

      return [
        ...symbols,
        ...result.definitions.flatMap((definition) => {
          return (
            this.findReferences(
              definition.fileName,
              definition.textSpan.start,
            ) ?? []
          )
        }),
      ]
    } else if (block.isOffsetInIgonredZone(offset)) {
      this.logger.debug(
        `Dropping in ignored zone ${JSON.stringify(
          definition.textSpan,
        )}, no original location for ${definition.fileName}`,
      )
      return []
    }

    const textSpan = block.findOriginalTextSpan(definition.textSpan)
    if (textSpan == null) {
      this.logger.debug(
        `Dropping definition ${JSON.stringify(
          definition.textSpan,
        )}, no original location for ${definition.fileName}`,
      )
      return []
    }
    const fileName = this.fs.getRealFileName(definition.fileName)

    this.logger.debug(
      `Map definition ${definition.fileName}:${this.fs.getPositionString(
        block.generated as any,
        definition.textSpan.start,
      )} to ${fileName}:${this.fs.getPositionString(
        block.source,
        textSpan.start,
      )}`,
    )

    definition = { ...definition }
    definition.fileName = fileName
    definition.textSpan = block.toFileSpan(textSpan)
    if (definition.contextSpan != null) {
      const contextSpan = block.findOriginalTextSpan(definition.contextSpan)
      if (contextSpan != null) {
        definition.contextSpan = block.toFileSpan(contextSpan)
      } else {
        this.logger.debug('Cannot find context span')
        definition.contextSpan = definition.textSpan
      }
    }

    return [
      {
        definition: definition,
        references: this.resolveReferenceEntries(references),
      },
    ]
  }

  private resolveReferencedSymbolInVueSchemeFile(
    references: Typescript.ReferencedSymbol[] = [],
  ): Typescript.ReferencedSymbol[] {
    return references.map((reference) => {
      return {
        definition: {
          ...reference.definition,
          fileName:
            this.fs.isVueVirtualFile(reference.definition.fileName) ||
            this.fs.isVueTsFile(reference.definition.fileName)
              ? toFileName({
                  type: 'scheme',
                  scheme: 'vue',
                  fileName: reference.definition.fileName,
                })
              : reference.definition.fileName,
        },
        references: this.resolveReferenceEntryInVueSchemeFile(
          reference.references,
        ),
      }
    })
  }
}
function getLeadingKeywordLength(text: string): number {
  return text.startsWith('let ') ? 4 : text.startsWith('const ') ? 6 : 0
}
