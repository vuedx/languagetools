import { annotations } from '@vuedx/compiler-tsx'
import { debug, versioned } from '@vuedx/shared'
import {
  ComponentNode,
  findTemplateNodeAt,
  isComponentNode,
  Node,
  SearchResult,
} from '@vuedx/template-ast-types'
import { TextSpan, VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from './FilesystemService'
import { LoggerService } from './LoggerService'
import { TypescriptContextService } from './TypescriptContextService'

export interface TemplateVariableDeclaration {
  kind: 'variable' | 'hoist' | 'setup' | 'identifier'
  id: string
  name: TextSpan
  initializer: TextSpan
  references: TextSpan[]
}

export interface ComponentExportDeclaration {
  kind: 'component'
  id: string
  name: TextSpan
  region: TextSpan
}

export type TemplateDeclaration =
  | TemplateVariableDeclaration
  | ComponentExportDeclaration

export interface SFCTemplateDeclarations {
  declarations: TemplateDeclaration[]
  byLine: Map<number, TemplateDeclaration>
}

export const enum GeneratedPositionKind {
  UNKNOWN,
  COMPONENT_TAG_EXPRESSION,
  TEMPLATE_NODE,
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

  /** Used by caches */
  public getVersion(fileName: string): string {
    return this.fs.getVersion(fileName.replace(/:.*$/, '')) // remove :{position}
  }

  public getTemplateDeclarationAt(
    fileName: string,
    offset: number,
  ): TemplateDeclaration | null {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return null
    const declarations = this.getTemplateDeclaration(fileName)
    const { line, character } = file.generated.positionAt(offset)
    this.logger.debug(
      `Line(${line}:${character}): ${this.fs.getLineText(file, offset)}`,
    )
    return declarations.byLine.get(line) ?? null
  }

  @versioned()
  public getTemplateDeclaration(fileName: string): SFCTemplateDeclarations {
    const output: SFCTemplateDeclarations = {
      declarations: [],
      byLine: new Map<number, TemplateVariableDeclaration>(),
    }

    const file = this.fs.getVueFile(fileName)
    if (file == null) return output
    const contents = file.getText()

    const ContextVariableRE =
      /(?<prefixInitializer>(?<prefixName>let )(?<name>[A-Za-z$_][A-Za-z0-9$_]*) = )(?<initializer>.*)/
    const HoistedVariableRE =
      /(?<prefixInitializer>(?<prefixName>const )(?<name>[A-Za-z$_][A-Za-z0-9$_]*) = )(?<initializer>.*)/
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

          const declaration: TemplateVariableDeclaration = {
            kind: line.trim().startsWith('let ')
              ? 'variable'
              : line.includes('_get_identifier_') && line.includes('() =>')
              ? 'identifier'
              : 'hoist',
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
              .filter((reference) => reference.start !== declaration.name.start)
          }

          output.declarations.push(declaration)
          output.byLine.set(position.line + index, declaration)
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
          const declaration: TemplateVariableDeclaration = {
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

          output.declarations.push(declaration)
          output.byLine.set(position.line + index, declaration)

          this.logger.debug('Setup Declaration', declaration)
        })
    })

    findAnnotatedTextRanges(
      contents,
      '//#region public component definition',
      '//#endregion',
    ).forEach(({ start, end }) => {
      const prefixText = 'export default class '
      const chunk = contents.slice(start, end)
      let index = chunk.indexOf(prefixText)
      if (index < 0) return
      index += prefixText.length
      const name: TextSpan = {
        start: start + index,
        length: chunk.indexOf(' ', index) - index,
      }
      const declaration: ComponentExportDeclaration = {
        id: contents.slice(name.start, name.start + name.length),
        kind: 'component',
        name,
        region: { start, length: end - start },
      }

      output.declarations.push(declaration)
      const { line } = file.positionAt(declaration.name.start)
      output.byLine.set(line, declaration)
    })

    return output
  }

  @versioned()
  public getUndefinedGlobals(fileName: string): TemplateVariableDeclaration[] {
    const globals: TemplateVariableDeclaration[] = []
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
      if (declaration.kind === 'component') return
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
  }

  @versioned(([file, position]: [VueSFCDocument, number]) => {
    return `${file.originalFileName}:${position}`
  })
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
    const block = file.descriptor.template
    if (block == null) return fallback
    if (position < block.loc.start.offset || position > block.loc.end.offset) {
      return fallback
    }
    const offset = position - block.loc.start.offset

    return {
      ...findTemplateNodeAt(file.templateAST, offset),
      templateRange: {
        start: block.loc.start.offset,
        length: block.loc.end.offset - block.loc.start.offset,
      },
    }
  }

  @debug(true, (file: VueSFCDocument, position) => [
    file.originalFileName,
    position,
  ])
  @versioned(([file, position]: [VueSFCDocument, number]) => {
    return `${file.originalFileName}:${position}`
  })
  public findGeneratedPosition(
    file: VueSFCDocument,
    position: number,
  ):
    | { kind: GeneratedPositionKind.UNKNOWN; position: number }
    | {
        kind: GeneratedPositionKind.COMPONENT_TAG_EXPRESSION
        position: number
        node: ComponentNode
        templateRange: TextSpan
        tagType: 'start' | 'end'
      }
    | {
        kind: GeneratedPositionKind.TEMPLATE_NODE
        position: number
        node: Node
        templateRange: TextSpan
      }
    | null {
    const { node, templateRange } = this.findTemplateNode(file, position)

    if (isComponentNode(node)) {
      const offset = position - templateRange.start
      const inOpenTag = isOffsetInSourceLocation(node.tagLoc, offset)
      const inCloseTag = isOffsetInSourceLocation(node.endTagLoc, offset)
      if (inOpenTag || inCloseTag) {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition != null) {
          const definition = this.ts.service.getDefinitionAndBoundSpan(
            file.generatedFileName,
            generatedPosition,
          )

          if (definition != null) {
            return {
              kind: GeneratedPositionKind.COMPONENT_TAG_EXPRESSION,
              position: definition.textSpan.start,
              node,
              templateRange,
              tagType: inOpenTag ? 'start' : 'end',
            }
          }
        }
      }
    }

    const generatedPosition = file.generatedOffsetAt(position)
    if (generatedPosition == null) return null
    if (node != null)
      return {
        kind: GeneratedPositionKind.TEMPLATE_NODE,
        position: generatedPosition,
        node,
        templateRange,
      }
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
