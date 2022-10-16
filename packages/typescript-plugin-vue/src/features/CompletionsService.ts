import { annotations } from '@vuedx/compiler-tsx'
import { VueProject } from '@vuedx/projectconfig'
import { isHTMLTag, isSVGTag, last, lcfirst, ucfirst } from '@vuedx/shared'
import {
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isPlainElementNode,
  isSimpleExpressionNode,
  Node,
  TraversalAncestors,
} from '@vuedx/template-ast-types'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'

type CompletionContextKind =
  | 'tag'
  | 'attribute'
  | 'propName'
  | 'eventName'
  | 'directiveArg'

@injectable()
export class CompletionsService
  implements
    Pick<
      TSLanguageService,
      | 'getCompletionsAtPosition'
      | 'getCompletionEntryDetails'
      | 'getCompletionEntrySymbol'
      | 'getDocCommentTemplateAtPosition'
      | 'getJsxClosingTagAtPosition'
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

  // TODO: provide component completions
  // TODO: provide attribute, property and event completions for props and events.
  // TODO: provide modifiers completions for directives.

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processCompletionInfo(
          this.ts.service.getCompletionsAtPosition(
            file.generatedFileName,
            generatedPosition,
            options,
          ),
        )
      },
      template: (file) => {
        const { node, ancestors, templateRange } =
          this.declarations.findTemplateNode(file, position)

        if (node == null) return
        let generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return

        const kind = this.detectCompletionContext(
          ancestors,
          node,
          position - templateRange.start,
        )

        console.log(`@@@ completion`, kind, node)

        if (kind === 'attribute') {
          const index = file.generated
            .getText()
            .indexOf(annotations.tsxCompletions, generatedPosition)
          if (index !== -1) {
            generatedPosition = index
          }
        }

        return this.processCompletionInfo(
          this.ts.service.getCompletionsAtPosition(
            file.generatedFileName,
            generatedPosition,
            options,
          ),
          kind,
          this.ts.getVueProjectFor(fileName),
        )
      },
    })
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions:
      | TypeScript.FormatCodeOptions
      | TypeScript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: TypeScript.UserPreferences | undefined,
    data: TypeScript.CompletionEntryData | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processCompletionEntryDetails(
          this.ts.service.getCompletionEntryDetails(
            file.generatedFileName,
            generatedPosition,
            entryName,
            formatOptions,
            source,
            preferences,
            data,
          ),
        )
      },
      template: (file) => {
        const { ancestors, node, templateRange } =
          this.declarations.findTemplateNode(file, position)
        if (node == null) return
        const mode = this.detectCompletionContext(
          ancestors,
          node,
          position - templateRange.start,
        )
        const actualEntryName =
          mode === 'eventName'
            ? `on${ucfirst(entryName)}`
            : mode === 'attribute'
            ? entryName.replace(/^(v-(?:bind|on):|[@:^.])/, '')
            : entryName
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processCompletionEntryDetails(
          this.ts.service.getCompletionEntryDetails(
            file.generatedFileName,
            generatedPosition,
            actualEntryName,
            formatOptions,
            source,
            preferences,
            data,
          ),
          entryName,
        )
      },
    })
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getCompletionEntrySymbol(
          file.generatedFileName,
          generatedPosition,
          name,
          source,
        )
      },
    })
  }

  public getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: TypeScript.DocCommentTemplateOptions,
  ): TypeScript.TextInsertion | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getDocCommentTemplateAtPosition(
          file.generatedFileName,
          generatedPosition,
          options,
        )
      },
    })
  }

  public getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.JsxClosingTagInfo | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getJsxClosingTagAtPosition(
          file.generatedFileName,
          generatedPosition,
        )
      },
    })
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

  public processCompletionInfo<T extends TypeScript.CompletionInfo | undefined>(
    info: T,
    kind?: CompletionContextKind,
    project?: VueProject,
  ): T {
    if (info == null) return info

    const isLonghand =
      project?.config.preferences.template.directiveSyntax === 'longhand'
    const vOn = isLonghand ? 'v-on:' : '@'
    const vBind = isLonghand ? 'v-bind:' : ':'

    return {
      ...info,
      entries: info.entries.flatMap((entry) => {
        if (entry.name.startsWith('__VueDX_')) return [] // exclude internals
        if (kind === 'tag') {
          if (
            entry.kind === this.ts.lib.ScriptElementKind.alias ||
            entry.kind === this.ts.lib.ScriptElementKind.classElement
          ) {
            if (
              /^[A-Z]/.test(entry.name) &&
              entry.kindModifiers?.includes('export') === true
            ) {
              return [entry]
            }
          }

          if (
            entry.kind === this.ts.lib.ScriptElementKind.memberVariableElement
          ) {
            // TODO: filter depending on svg/html context
            if (isHTMLTag(entry.name) || isSVGTag(entry.name)) return [entry]
          }

          return []
        }

        if (
          kind === 'attribute' ||
          kind === 'eventName' ||
          kind === 'propName'
        ) {
          if (
            entry.kind === this.ts.lib.ScriptElementKind.memberVariableElement // TODO: check others
          ) {
            if (entry.name.startsWith('on')) {
              if (kind === 'propName') return []
              const arg = lcfirst(entry.name.slice(2))
              const name = kind === 'attribute' ? `${vOn}${arg}` : `${arg}`
              const insertText =
                entry.insertText != null
                  ? entry.isSnippet
                    ? `${name}="$1"`
                    : name
                  : undefined

              return [{ ...entry, name, insertText }]
            } else if (kind !== 'eventName') {
              const attribute = {
                ...entry,
                insertText:
                  entry.insertText != null
                    ? entry.isSnippet
                      ? `${entry.name}="$1"`
                      : entry.name
                    : undefined,
              }
              const prop = {
                ...entry,
                name: `${vBind}${entry.name}`,
                insertText:
                  entry.insertText != null
                    ? entry.isSnippet
                      ? `${vBind}${entry.name}="$1"`
                      : entry.name
                    : undefined,
              }

              return kind === 'attribute' ? [attribute, prop] : [attribute]
            }
          }

          return []
        }

        return [entry]
      }),
    }
  }

  public processCompletionEntryDetails(
    entryDetails: TypeScript.CompletionEntryDetails | undefined,
    entryName?: string,
  ): TypeScript.CompletionEntryDetails | undefined {
    if (entryDetails == null) return entryDetails

    return {
      ...entryDetails,
      name: entryName ?? entryDetails.name,
      codeActions: entryDetails.codeActions?.flatMap((action) => {
        const changes = this.fs.resolveAllFileTextChanges(action.changes)
        if (changes.length === 0) return []
        return { ...action, changes }
      }),
    }
  }

  private detectCompletionContext(
    ancestors: TraversalAncestors,
    node: Node,
    offset: number,
  ): CompletionContextKind | undefined {
    if (isComponentNode(node) || isPlainElementNode(node)) {
      if (node.tag.trim() === '') return 'tag'

      const isOpenTag = isOffsetInSourceLocation(node.startTagLoc, offset)
      const isTagName = isOffsetInSourceLocation(node.tagLoc, offset)

      if (isOpenTag && isTagName) {
        return 'tag'
      } else if (isOpenTag) {
        return 'attribute'
      }
    } else if (isAttributeNode(node)) {
      const isAttributeName = isOffsetInSourceLocation(node.nameLoc, offset)

      if (isAttributeName) {
        return 'attribute'
      }
    } else if (isDirectiveNode(node)) {
      const isDirectiveArgument =
        (node.arg == null && node.exp == null && node.modifiers.length === 0) ||
        isOffsetInSourceLocation(node.arg?.loc, offset)

      if (isDirectiveArgument) {
        return node.name === 'on'
          ? 'eventName'
          : node.name === 'bind'
          ? 'propName'
          : 'directiveArg'
      }
    } else if (isSimpleExpressionNode(node) && ancestors.length > 0) {
      const directive = last(ancestors).node
      if (isDirectiveNode(directive)) {
        const isDirectiveArgument = isOffsetInSourceLocation(
          directive.arg?.loc,
          offset,
        )

        if (isDirectiveArgument) {
          return directive.name === 'on'
            ? 'eventName'
            : directive.name === 'bind'
            ? 'propName'
            : 'directiveArg'
        }
      }
    }

    return undefined
  }
}
