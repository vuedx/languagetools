import { VueProject } from '@vuedx/projectconfig'
import { isHTMLTag, isSVGTag, lcfirst, ucfirst } from '@vuedx/shared'
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
import { TemplateSlotsService } from '../services/TemplateSlotsService'
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
    @inject(TemplateSlotsService)
    private readonly slots: TemplateSlotsService,
    @inject(TemplateContextService)
    private readonly template: TemplateContextService,
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
        const context = this.template.getContext(file, position)
        if (context == null) return

        this.logger.debug('@@@ completion', context)

        if (context.kind === TemplateContextKind.Attribute) {
          const before = context.offsetInGenerated
          context.offsetInGenerated =
            this.template.getAttributeCompletionOffset(
              context.document,
              context.element,
            ) ?? context.offsetInGenerated
          this.logger.debug('@@@ completion', { before }, context)
        }

        if (context.kind === TemplateContextKind.DirectiveArg) {
          if (
            context.directive.name === 'slot' &&
            isComponentNode(context.element)
          ) {
            // This should be a separate service.
            const result = this.slots.getSlotsInfo(file, context.element)
            if (result == null) return

            return this.processCompletionInfo({
              isNewIdentifierLocation: false,
              isGlobalCompletion: false,
              isMemberCompletion: false,
              entries: result.slots.map((slot) => ({
                name: slot.getName(),
                kind: this.ts.lib.ScriptElementKind.variableElement,
                sortText: slot.getName(),
                // TODO: add replacement range from directive.arg
                // TODO: add displayParts
              })),
            })
          }
        }

        return this.processCompletionInfo(
          this.ts.service.getCompletionsAtPosition(
            file.generatedFileName,
            context.offsetInGenerated,
            options,
          ),
          context.kind,
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
        const context = this.template.getContext(file, position)
        if (context == null) return

        if (context.kind === TemplateContextKind.Attribute) {
          context.offsetInGenerated =
            this.template.getAttributeCompletionOffset(
              context.document,
              context.element,
            ) ?? context.offsetInGenerated
        }

        const actualEntryName =
          context.kind === TemplateContextKind.EventName
            ? `on${ucfirst(entryName)}`
            : context.kind === TemplateContextKind.Attribute
            ? entryName.replace(/^(v-(?:bind|on):|[@:^.])/, '')
            : entryName

        return this.processCompletionEntryDetails(
          this.ts.service.getCompletionEntryDetails(
            file.generatedFileName,
            context.offsetInGenerated,
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
    kind?: TemplateContextKind,
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
        if (kind === TemplateContextKind.Tag) {
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
          kind === TemplateContextKind.Attribute ||
          kind === TemplateContextKind.EventName ||
          kind === TemplateContextKind.PropName
        ) {
          if (entry.name === '$slots') return []
          if (
            entry.kind === this.ts.lib.ScriptElementKind.memberVariableElement // TODO: check others
          ) {
            if (entry.name.startsWith('on')) {
              if (kind === TemplateContextKind.PropName) return []
              const arg = lcfirst(entry.name.slice(2))
              const name = kind === 'attribute' ? `${vOn}${arg}` : `${arg}`
              const insertText =
                entry.insertText != null
                  ? entry.isSnippet
                    ? `${name}="$1"`
                    : name
                  : undefined

              return [{ ...entry, name, insertText }]
            } else if (kind !== TemplateContextKind.EventName) {
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

              return kind === TemplateContextKind.Attribute
                ? [attribute, prop]
                : [attribute]
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
}
