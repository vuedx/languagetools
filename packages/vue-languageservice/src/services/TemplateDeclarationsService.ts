import { annotations } from '@vuedx/compiler-tsx'
import { invariant } from '@vuedx/shared'
import {
  findTemplateNodeAt,
  isComponentNode,
  SearchResult,
} from '@vuedx/template-ast-types'
import { TextSpan, VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { CacheService } from './CacheService'
import { FilesystemService } from './FilesystemService'
import { LoggerService } from './LoggerService'
import { TypescriptContextService } from './TypescriptContextService'

export interface TemplateDeclaration {
  kind: 'variable' | 'hoist' | 'setup'
  id: string
  name: TextSpan
  initializer: TextSpan
  references: TextSpan[]
}

export interface SFCTemplateDeclarations {
  declarations: TemplateDeclaration[]
  byLine: Map<number, TemplateDeclaration>
}

export const enum GeneratedPositionKind {
  UNKNOWN,
  COMPONENT_TAG_EXPRESSION,
}

@injectable()
export class TemplateDeclarationsService {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public readonly logger = new LoggerService(TemplateDeclarationsService)

  private readonly declarations = new CacheService<SFCTemplateDeclarations>(
    (fileName) => {
      const file = this.fs.getVueFile(fileName)
      invariant(file != null)
      return `${file.version}`
    },
  )

  public getTemplateDeclaration(fileName: string): SFCTemplateDeclarations {
    return this.declarations.withCache(fileName, (oldValue) => {
      if (oldValue != null) return oldValue
      const value: SFCTemplateDeclarations = {
        declarations: [],
        byLine: new Map<number, TemplateDeclaration>(),
      }

      const file = this.fs.getVueFile(fileName)
      if (file == null) return value
      const contents = file.getText()

      const ContextVariableRE =
        /(?<prefixInitializer>(?<prefixName>let )(?<name>[A-Za-z$_][A-Za-z0-9$_]*) = (?:[^.]+)\.)(?<initializer>\k<name>)/
      const HoistedVariableRE =
        /(?<prefixInitializer>(?<prefixName>const )(?<name>[A-Za-z$_][A-Za-z0-9$_]*) = (?<initializer>.*))/
      findAnnotatedTextRanges(
        contents,
        annotations.templateGlobals.start,
        annotations.templateGlobals.end,
      ).forEach(({ start, end }) => {
        const position = file.positionAt(start)
        contents
          .slice(start, end)
          .split('\n')
          .forEach((line, index) => {
            const result =
              ContextVariableRE.exec(line) ?? HoistedVariableRE.exec(line)
            if (result?.groups == null) return
            const { name, prefixName, initializer, prefixInitializer } =
              result.groups as {
                name: string
                initializer: string
                prefixName: string
                prefixInitializer: string
              }
            const offset = file.offsetAt({
              line: position.line + index,
              character: result.index,
            })

            const declaration: TemplateDeclaration = {
              kind: line.trim().startsWith('let ') ? 'variable' : 'hoist',
              id: name,
              name: {
                start: offset + prefixName.length,
                length: name.length,
              },
              initializer: {
                start: offset + prefixInitializer.length,
                length: initializer.length,
              },
              references: [],
            }

            const references = this.ts.service.getReferencesAtPosition(
              file.generatedFileName,
              declaration.name.start,
            )

            if (references != null) {
              declaration.references = references
                .map((reference) => ({
                  start: reference.textSpan.start,
                  length: reference.textSpan.length,
                }))
                .filter(
                  (reference) => reference.start !== declaration.name.start,
                )
            }

            value.declarations.push(declaration)
            value.byLine.set(position.line + index, declaration)
          })
      })

      findAnnotatedTextRanges(
        contents,
        annotations.setupGlobals.start,
        annotations.setupGlobals.end,
      ).forEach(({ start, end }) => {
        const position = file.positionAt(start)
        contents
          .slice(start, end)
          .split('\n')
          .forEach((line, index) => {
            if (line.trim().length === 0) return
            if (line.trim().startsWith('return')) return
            if (line.trim().startsWith('}')) return

            const offset = file.offsetAt({
              line: position.line + index,
              character: line.length - line.trimLeft().length,
            })
            const id = line.trim().replace(',', '')
            const declaration: TemplateDeclaration = {
              kind: 'setup',
              id,
              name: { start: offset, length: id.length },
              initializer: { start: offset, length: id.length },
              references: [],
            }

            const references = this.ts.service.getReferencesAtPosition(
              file.generatedFileName,
              declaration.name.start,
            )

            const definitions = this.ts.service.getDefinitionAtPosition(
              file.generatedFileName,
              declaration.name.start,
            )

            if (definitions != null) {
              const definition = definitions.find(
                (definition) => definition.fileName === file.generatedFileName,
              )

              if (definition != null) {
                declaration.initializer = {
                  start: definition.textSpan.start,
                  length: definition.textSpan.length,
                }
              }
            }

            if (references != null) {
              declaration.references = references
                .filter(
                  (reference) => reference.fileName === file.generatedFileName,
                )
                .map((reference) => ({
                  start: reference.textSpan.start,
                  length: reference.textSpan.length,
                }))
                .filter((reference) => {
                  if (
                    // ignore reference in return statement
                    reference.start === declaration.name.start ||
                    // ignore reference in definition
                    reference.start === declaration.initializer.start
                  ) {
                    return false
                  } else {
                    return true
                  }
                })
            }

            value.declarations.push(declaration)
            value.byLine.set(position.line + index, declaration)

            this.logger.debug('Setup Declaration', declaration)
          })
      })

      return value
    })
  }

  private readonly undefinedGlobals = new CacheService<TemplateDeclaration[]>(
    (fileName) => this.fs.getVersion(fileName),
  )

  public getUndefinedGlobals(fileName: string): TemplateDeclaration[] {
    return this.undefinedGlobals.withCache(fileName, (oldValue) => {
      if (oldValue != null) return oldValue
      const globals: TemplateDeclaration[] = []
      const file = this.fs.getVueFile(fileName)
      if (file == null) return globals

      const templateGlobals = this.getTemplateDeclaration(
        file.originalFileName,
      ).declarations.filter((declaration) => declaration.kind === 'variable')

      if (templateGlobals.length === 0) return globals
      const sourceFile = this.ts.getSourceFile(file.generatedFileName)
      if (sourceFile == null) return globals
      const typeChecker = this.ts.service.getProgram()?.getTypeChecker()
      if (typeChecker == null) return globals
      templateGlobals.forEach((declaration) => {
        const node = this.ts.getTokenAtPosition(
          sourceFile,
          declaration.name.start,
        )

        const type = typeChecker.getTypeAtLocation(node)
        if (type.getFlags() === this.ts.lib.TypeFlags.Never) {
          this.logger.debug(`Literal type — ${declaration.id}`, type)
          globals.push(declaration)
        }
      })

      return globals
    })
  }

  public findTemplateNode(
    file: VueSFCDocument,
    position: number,
  ): SearchResultWithLocation {
    const fallback: SearchResultWithLocation = {
      node: null,
      templateRange: { start: 0, length: 0 },
      ancestors: [],
    }
    if (file.templateAST == null) return fallback
    const block = file.getBlockAt(position)
    if (block == null) return fallback
    if (block.type !== 'template') return fallback
    const offset = position - block.loc.start.offset

    return {
      ...findTemplateNodeAt(file.templateAST, offset),
      templateRange: {
        start: block.loc.start.offset,
        length: block.loc.end.offset - block.loc.start.offset,
      },
    }
  }

  public findGeneratedPosition(
    file: VueSFCDocument,
    position: number,
  ): { kind: GeneratedPositionKind; position: number } | null {
    const { node } = this.findTemplateNode(file, position)

    if (isComponentNode(node) && node.resolvedName != null) {
      const offset = position - node.loc.start.offset
      if (
        isOffsetInSourceLocation(node.tagLoc, offset) ||
        isOffsetInSourceLocation(node.endTagLoc, offset)
      ) {
        const generatedPosition = file.generatedOffsetAt(
          node.startTagLoc.start.offset,
        )

        if (generatedPosition != null) {
          const definition = this.ts.service.getDefinitionAndBoundSpan(
            file.generatedFileName,
            generatedPosition,
          )

          if (definition != null) {
            return {
              kind: GeneratedPositionKind.COMPONENT_TAG_EXPRESSION,
              position: definition.textSpan.start,
            }
          }
        }
      }
    }

    const generatedPosition = file.generatedOffsetAt(position)
    if (generatedPosition == null) return null
    return { kind: GeneratedPositionKind.UNKNOWN, position: generatedPosition }
  }
}

function findAnnotatedTextRanges(
  code: string,
  openTag: string,
  closeTag: string,
): Array<{ start: number; end: number }> {
  let lastIndex = 0
  const ranges: Array<{ start: number; end: number }> = []
  while (lastIndex < code.length) {
    let start = code.indexOf(openTag, lastIndex)
    if (start < 0) break
    start += openTag.length
    let end = code.indexOf(closeTag, start)
    if (end < 0) {
      end = code.length
    }

    ranges.push({ start, end })

    lastIndex = end
  }

  return ranges
}

export interface SearchResultWithLocation extends SearchResult {
  templateRange: TextSpan
}
