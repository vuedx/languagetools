import { annotations } from '@vuedx/compiler-tsx'
import { VueProject } from '@vuedx/projectconfig'
import { lcfirst, ucfirst } from '@vuedx/shared'
import {
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isPlainElementNode,
  Node,
} from '@vuedx/template-ast-types'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'

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
        const { node, templateRange } = this.declarations.findTemplateNode(
          file,
          position,
        )
        if (node == null) return
        let generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return

        const kind = this.detectCompletionContext(
          node,
          position - templateRange.start,
        )

        if (kind === 'attribute') {
          generatedPosition = file.generated
            .getText()
            .indexOf(annotations.tsxCompletions, generatedPosition)
          if (generatedPosition === -1) return
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
        const actualEntryName = /^(:|v-bind:)/.test(entryName)
          ? entryName.replace(/^(:|v-bind:)/, '')
          : /^(@|v-on:)/.test(entryName)
          ? `on${ucfirst(entryName.replace(/^(@|v-on:)/, ''))}`
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
    kind?: 'attribute' | 'tag',
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
        if (kind === 'attribute') {
          if (
            entry.kind === this.ts.lib.ScriptElementKind.memberVariableElement // TODO: check others
          ) {
            if (entry.name.startsWith('on')) {
              return [
                { ...entry, name: `${vOn}${lcfirst(entry.name.slice(2))}` },
              ]
            } else {
              return [entry, { ...entry, name: `${vBind}${entry.name}` }]
            }
          }
        }

        return [entry]
      }),
    }
  }

  public processCompletionEntryDetails(
    entryDetails: TypeScript.CompletionEntryDetails | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    if (entryDetails == null) return entryDetails

    return {
      ...entryDetails,
      codeActions: entryDetails.codeActions?.flatMap((action) => {
        this.logger.debug(
          '@@@ codeActions',
          action,
          JSON.stringify(action.changes, null, 2),
        )
        const changes = this.fs.resolveAllFileTextChanges(action.changes)
        if (changes.length === 0) return []
        return { ...action, changes }
      }),
    }
  }

  private detectCompletionContext(
    node: Node,
    offset: number,
  ): 'attribute' | 'tag' | undefined {
    if (isComponentNode(node) || isPlainElementNode(node)) {
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
      const isDirectiveArgument = isOffsetInSourceLocation(
        node.arg?.loc,
        offset,
      )

      if (isDirectiveArgument) {
        return 'attribute'
      }
    }

    return undefined
  }
}
