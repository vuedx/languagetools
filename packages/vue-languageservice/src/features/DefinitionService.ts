import {
  debug,
  first,
  last,
  parseFileName,
  toFileName,
  traceInDevMode,
} from '@vuedx/shared'
import {
  DirectiveNode,
  findTemplateNodeAt,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import { inject, injectable } from 'inversify'
import type { LanguageService } from '../contracts/LanguageService'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class DefinitionService
  implements
    Pick<
      TSLanguageService,
      | 'getDefinitionAtPosition'
      | 'getDefinitionAndBoundSpan'
      | 'getTypeDefinitionAtPosition'
    > {
  private readonly logger = LoggerService.getLogger(
    DefinitionService.name,
    LogLevel.DEBUG,
  )

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(LanguageServiceProvider)
    private readonly langs: LanguageServiceProvider,
  ) {}

  @debug()
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    return (this.fs.isVueSchemeFile(fileName) || this.fs.isVueFile(fileName)
      ? this.getDefinitionAndBoundSpan(fileName, position)?.definitions
      : this.ts.service.getDefinitionAtPosition(fileName, position)
    )?.map((info) => {
      info.fileName = parseFileName(info.fileName).fileName

      return info
    })
  }

  @debug()
  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    this.logger.debug(
      `getDefinitionAndBoundSpan in ${fileName} at ${position})`,
    )
    if (this.fs.isVueSchemeFile(fileName)) {
      const parsed = parseFileName(fileName)
      const info = this.ts
        .getUndecoratedServiceFor(parsed.fileName)
        ?.getDefinitionAndBoundSpan(parsed.fileName, position)

      if (info?.definitions != null) {
        info.definitions = info.definitions.map((definition) =>
          this.resolveForVueSchemeFile(definition),
        )
      }

      return info
    }

    const result = this.fs.isVueFile(fileName)
      ? this.vueDefinitionAndBoundSpan(fileName, position)
      : this.ts.service.getDefinitionAndBoundSpan(fileName, position)

    if (result?.definitions != null) {
      result.definitions = result.definitions.map((info) => {
        info.fileName = parseFileName(info.fileName).fileName
        return info
      })
    }

    return result
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    if (this.fs.isVueSchemeFile(fileName)) {
      const parsed = parseFileName(fileName)
      const definitions = this.ts
        .getUndecoratedServiceFor(parsed.fileName)
        ?.getTypeDefinitionAtPosition(parsed.fileName, position)

      if (definitions == null) return undefined

      return definitions.map((definition) =>
        this.resolveForVueSchemeFile(definition),
      )
    }

    return (this.fs.isVueFile(fileName)
      ? this.vueTypeDefinitionAt(fileName, position)
      : this.ts.service.getTypeDefinitionAtPosition(fileName, position)
    )?.map((info) => {
      info.fileName = parseFileName(info.fileName).fileName

      return info
    })
  }

  private resolveForVueSchemeFile(
    definition: TypeScript.DefinitionInfo,
  ): TypeScript.DefinitionInfo {
    if (this.fs.isVueVirtualFile(definition.fileName)) {
      return {
        ...definition,
        fileName: toFileName({
          type: 'scheme',
          scheme: 'vue',
          fileName: definition.fileName,
        }),
      }
    } else if (this.fs.isVueTsFile(definition.fileName)) {
      return {
        ...definition,
        fileName: toFileName({
          type: 'scheme',
          scheme: 'vue',
          fileName: definition.fileName,
        }),
      }
    } else {
      return definition
    }
  }

  private vueDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    const [file, block] = this.fs.findFilesAt(fileName, position)
    if (block == null || file == null) return undefined
    this.logger.debug(
      `[Vue] getDefinitionAndBoundSpan in ${fileName}:${this.fs.getPositionString(
        file,
        position,
      )})`,
    )
    const definitions = this._createTSDefinitionInfoFromLSDefinition(
      this.langs
        .getLanguageService(block.fileName)
        ?.getDefinitionAt(
          block.fileName,
          block.source.positionAt(block.toBlockOffset(position)),
        ),
    )

    if (block.tsFileName == null) {
      return this._createDefinitionInfoAndBoundSpan(position, definitions)
    }

    const inner = {
      fileName: block.tsFileName,
      position: block.findGeneratedOffetAt(block.toBlockOffset(position)),
    }

    if (block.block.type === 'template' && file.templateAST != null) {
      const offset = block.toBlockOffset(position)
      const { node, ancestors } = findTemplateNodeAt(file.templateAST, offset)
      if (
        isElementNode(node) &&
        offset <= node.loc.start.offset + node.tag.length + 1
      ) {
        definitions.push(
          ...this.virtualTypeDefintionAtPosition(
            inner.fileName,
            inner.position,
          ),
        )
      }

      if (
        ancestors.length > 0 &&
        isSimpleExpressionNode(node) &&
        isDirectiveNode(last(ancestors).node)
      ) {
        const directive = last(ancestors).node
        const element = last(ancestors, 2).node
        if (
          isElementNode(element) &&
          isDirectiveNode(directive) &&
          isSimpleExpressionNode(directive.arg)
        ) {
          const attribute = directive.arg.content
          const directives = element.props.filter(
            (prop): prop is DirectiveNode =>
              isDirectiveNode(prop) &&
              isSimpleExpressionNode(prop.arg) &&
              directive.name === prop.name &&
              attribute === prop.arg.content,
          )
          if (directives.length > 1) {
            // find for the first one
            const firstDirective = first(directives)
            if (firstDirective.arg != null) {
              const info = this.virtualDefinitionAndBoundSpan(
                inner.fileName,
                block.findGeneratedOffetAt(firstDirective.arg.loc.start.offset),
              )

              if (info != null) {
                info.textSpan = {
                  start: block.toFileOffset(directive.arg.loc.start.offset),
                  length:
                    directive.arg.loc.end.offset -
                    directive.arg.loc.start.offset,
                }
                info.definitions = dedupeDefinitionInfos([
                  ...(info.definitions ?? []),
                  ...definitions,
                ])

                return info
              }
            }
          }
        }
      }
    }

    const info = this.virtualDefinitionAndBoundSpan(
      inner.fileName,
      inner.position,
    )

    if (info == null) {
      this.logger.debug(`[Vue] No results`)
      return this._createDefinitionInfoAndBoundSpan(position, definitions)
    }

    if (info.definitions != null) {
      definitions.push(...info.definitions)
    }

    info.definitions = dedupeDefinitionInfos(definitions)

    return info
  }

  private vueTypeDefinitionAt(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfo[] | undefined {
    const [file, block] = this.fs.findFilesAt(fileName, position)
    if (block == null || file == null) return undefined
    this.logger.debug(
      `[Vue] getDefinitionAndBoundSpan in ${fileName}:${this.fs.getPositionString(
        file,
        position,
      )})`,
    )
    const definitions = this._createTSDefinitionInfoFromLSDefinition(
      this.langs
        .getLanguageService(block.fileName)
        ?.getTypeDefinitionAt?.(
          block.fileName,
          block.positionAt(block.toBlockOffset(position)),
        ),
    )

    if (block.tsFileName == null) {
      return definitions
    }

    const inner = {
      fileName: block.tsFileName,
      position: block.findGeneratedOffetAt(block.toBlockOffset(position)),
    }

    definitions.push(
      ...this.virtualTypeDefintionAtPosition(inner.fileName, inner.position),
    )

    return dedupeDefinitionInfos(definitions)
  }

  private virtualTypeDefintionAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfo[] {
    const file = this.fs.getVirtualFile(fileName)
    if (file == null) return []

    this.logger.debug(
      `[Virtual] getTypeDefintionAtPosition in ${fileName}:${this.fs.getPositionString(
        file.generated ?? file.source,
        position,
      )})`,
    )

    return this._resolveTypeDefinitions(
      fileName,
      this.ts.service.getTypeDefinitionAtPosition(fileName, position) ?? [],
    )
  }

  private readonly virtualDefinitionAndBoundSpanCache = new CacheService<{
    position: number
    result: TypeScript.DefinitionInfoAndBoundSpan | undefined
  }>((fileName) => this.fs.getVersion(fileName))

  @debug()
  public virtualDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    return this.virtualDefinitionAndBoundSpanCache.withCache(
      fileName,
      (previous) => {
        if (previous?.position === position) return previous
        const file = this.fs.getVirtualFile(fileName)
        if (file == null) return { position, result: undefined }

        const info = this.ts.service.getDefinitionAndBoundSpan(
          fileName,
          position,
        )

        if (info == null) {
          this.logger.debug(`[Virtual] No results`)
          return { position, result: undefined }
        }

        if (info.definitions != null) {
          info.definitions = this._resolveDefinitions(info.definitions)
        }

        info.textSpan = file.toFileSpan(
          file.findOriginalTextSpan(info.textSpan) ?? {
            start: 0,
            length: info.textSpan.length,
          },
        )

        return { position, result: info }
      },
    ).result
  }

  private _createDefinitionInfoAndBoundSpan(
    position: number,
    definitions: TypeScript.DefinitionInfo[],
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    const first = definitions[0]
    if (definitions.length === 0 || first == null) return

    return {
      textSpan: { start: position, length: first.textSpan.length },
      definitions,
    }
  }

  @traceInDevMode()
  private _resolveTypeDefinitions(
    currentFile: string,
    definitions:
      | TypeScript.DefinitionInfo[]
      | readonly TypeScript.DefinitionInfo[],
  ): TypeScript.DefinitionInfo[] {
    this.logger.debug(
      `[Vue] (Type) Resolve ${definitions.length} definition(s) in ${currentFile}.`,
    )
    return definitions.flatMap(({ ...definition }) => {
      if (this.fs.isVueVirtualFile(definition.fileName)) {
        const file = this.fs
          .getVueFile(definition.fileName)
          ?.getDocById(definition.fileName)
        if (file == null || file.generated == null) {
          return []
        }

        const debugInfo = {
          textSpan: this.fs.getTextSpan(file.generated, definition.textSpan),
          contextSpan:
            definition.contextSpan != null
              ? this.fs.getTextSpan(file.generated, definition.contextSpan)
              : null,
        }
        if (file.isOffsetInCopiedZone(definition.textSpan.start)) {
          // noop, just don't process
        } else if (file.isOffsetInTemplateGlobals(definition.textSpan.start)) {
          this.logger.debug(
            `(Type) Template globals in ${definition.fileName}`,
            debugInfo,
          )
          if (definition.contextSpan == null) return []

          return this.virtualTypeDefintionAtPosition(
            definition.fileName,
            definition.contextSpan.start + definition.contextSpan.length - 1,
          )
        } else if (file.isOffsetInIgonredZone(definition.textSpan.start)) {
          this.logger.debug(
            `(Type) Ignored zone in ${definition.fileName}`,
            debugInfo,
          )
          return []
        }

        definition.fileName = file.parent.fileName
        definition.textSpan = file.toFileSpan(
          file.findOriginalTextSpan(definition.textSpan) ?? {
            start: 0,
            length: 1,
          },
        )

        if (definition.contextSpan != null) {
          const span = file.findOriginalTextSpan(definition.contextSpan)

          definition.contextSpan =
            span != null ? file.toFileSpan(span) : undefined
        }

        this.logger.debug(
          `(Type) Resolved in ${definition.fileName}`,
          debugInfo,
        )

        return [definition]
      } else if (this.fs.isVueTsFile(definition.fileName)) {
        if (definition.contextSpan == null) {
          return [
            {
              ...definition,
              textSpan: { start: 0, length: Infinity },
              fileName: this.fs.getRealFileName(definition.fileName),
              originalFileName: definition.fileName,
              originalTextSpan: definition.textSpan,
            },
          ]
        }

        return this._resolveTypeDefinitions(
          definition.fileName,
          this.ts.service.getTypeDefinitionAtPosition(
            definition.fileName,
            definition.contextSpan.start + definition.contextSpan.length - 1,
          ) ?? [
            {
              ...definition,
              textSpan: { start: 0, length: Infinity },
              fileName: this.fs.getRealFileName(definition.fileName),
              originalFileName: definition.fileName,
              originalTextSpan: definition.textSpan,
            },
          ],
        )
      } else {
        return definition
      }
    })
  }

  @traceInDevMode()
  private _resolveDefinitions(
    definitions:
      | TypeScript.DefinitionInfo[]
      | readonly TypeScript.DefinitionInfo[],
  ): TypeScript.DefinitionInfo[] {
    return definitions.flatMap(({ ...definition }) => {
      if (this.fs.isVueVirtualFile(definition.fileName)) {
        const file = this.fs
          .getVueFile(definition.fileName)
          ?.getDocById(definition.fileName)
        if (file == null || file.generated == null) {
          return []
        }

        const debugInfo = {
          textSpan: this.fs.getTextSpan(file.generated, definition.textSpan),
          contextSpan:
            definition.contextSpan != null
              ? this.fs.getTextSpan(file.generated, definition.contextSpan)
              : null,
        }

        if (file.isOffsetInCopiedZone(definition.textSpan.start)) {
          // noop, just don't process
        } else if (file.isOffsetInTemplateGlobals(definition.textSpan.start)) {
          this.logger.debug(
            `Template globals in ${
              definition.fileName
            }:${this.fs.getPositionString(
              file.generated ?? file,
              definition.textSpan.start,
            )}`,
            debugInfo,
          )
          if (definition.contextSpan == null) return []
          const doc = this.fs.getFile(definition.fileName)
          if (doc == null) return []
          const text = doc
            .getText()
            .slice(
              definition.contextSpan.start,
              definition.contextSpan.start + definition.contextSpan.length,
            )

          return text.includes('VueDX.internal.resolve')
            ? this.virtualTypeDefintionAtPosition(
                definition.fileName,
                definition.textSpan.start,
              )
            : this.virtualDefinitionAndBoundSpan(
                definition.fileName,
                definition.contextSpan.start +
                  definition.contextSpan.length -
                  1,
              )?.definitions ?? []
        } else if (file.isOffsetInIgonredZone(definition.textSpan.start)) {
          this.logger.debug(`Ignored zone in ${definition.fileName}`, debugInfo)
          return []
        }

        definition.fileName = file.parent.fileName
        definition.textSpan = file.toFileSpan(
          file.findOriginalTextSpan(definition.textSpan) ?? {
            start: 0,
            length: 1,
          },
        )

        if (definition.contextSpan != null) {
          const span = file.findOriginalTextSpan(definition.contextSpan)

          definition.contextSpan =
            span != null ? file.toFileSpan(span) : undefined
        }

        this.logger.debug(`Resolved in ${definition.fileName}`, debugInfo)

        return [definition]
      } else if (this.fs.isVueTsFile(definition.fileName)) {
        return [
          {
            ...definition,
            textSpan: { start: 0, length: Infinity },
            fileName: this.fs.getRealFileName(definition.fileName),
            originalFileName: definition.fileName,
            originalTextSpan: definition.textSpan,
          },
        ]
      } else {
        return definition
      }
    })
  }

  private _createTSDefinitionInfoFromLSDefinition(
    locations?: LanguageService.Definition[],
  ): TypeScript.DefinitionInfo[] {
    if (locations == null) return []

    return locations.flatMap((location) => {
      if (Array.isArray(location)) {
        return this._createTSDefinitionInfoFromLSDefinition(location)
      }

      const fileName = location.uri
      if (!this.fs.isVueVirtualFile(fileName)) {
        const file = this.fs.getFile(fileName)
        if (file == null) {
          this.logger.debug(`No such file: ${location.uri}`)
          return []
        }

        const start = file.offsetAt(location.range.start)
        const end = file.offsetAt(location.range.end)
        return {
          fileName: location.uri,
          textSpan: { start, length: end - start },
          kind: this.ts.lib.ScriptElementKind.unknown,
          name: '',
          containerKind: this.ts.lib.ScriptElementKind.unknown,
          containerName: '',
          unverified: true,
        }
      }
      const vueDoc = this.fs.getVueFile(fileName)
      if (vueDoc == null) {
        this.logger.debug(`No such file: ${fileName}`)
        return []
      }
      const blockDoc = vueDoc.getDocById(fileName)
      if (blockDoc == null) {
        this.logger.debug(`No such file: ${fileName}`)
        return []
      }

      const range = this.fs.getAbsoluteRange(vueDoc, blockDoc, location.range)
      const start = blockDoc.offsetAt(range.start)
      const end = blockDoc.offsetAt(range.end)

      return {
        fileName: location.uri,
        textSpan: { start, length: end - start },
        kind: this.ts.lib.ScriptElementKind.unknown,
        name: '',
        containerKind: this.ts.lib.ScriptElementKind.unknown,
        containerName: '',
        unverified: true,
      }
    })
  }
}

function dedupeDefinitionInfos(
  definitions: readonly TypeScript.DefinitionInfo[],
): TypeScript.DefinitionInfo[] {
  const output: TypeScript.DefinitionInfo[] = []
  const ids = new Set<string>()

  definitions.forEach((definition) => {
    const id = `${definition.fileName}:${definition.textSpan.start}:${definition.textSpan.length}`

    if (!ids.has(id)) {
      ids.add(id)
      output.push(definition)
    }
  })

  return output
}
