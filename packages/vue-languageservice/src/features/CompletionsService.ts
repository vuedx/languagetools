import {
  debug,
  invarient,
  isHTMLTag,
  isNotNull,
  isPascalCase,
  isString,
  isSVGTag,
  lcfirst,
  ucfirst,
} from '@vuedx/shared'
import type {
  Position,
  TextSpan,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { LanguageService } from '../contracts/LanguageService'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import {
  getTemplateContextAt,
  TemplateContextType,
} from '../helpers/templateContextAtPosition'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

type CompletionAdditionalInfo = {
  merged?: TypeScript.CompletionEntry[]
} & (
  | {
      type: TemplateContextType
      fileName: string
      position: number
    }
  | {
      type: 'embedded-service'
      fileName: string
      data: LanguageService.CompletionItem
    }
)

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
  private readonly logger = LoggerService.getLogger(
    CompletionsService.name,
    LogLevel.DEBUG,
  )

  private readonly cache = new CacheService<{
    position: number
    options: TypeScript.GetCompletionsAtPositionOptions | undefined
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined
  }>((fileName) => this.fs.getVersion(fileName), 5)

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(LanguageServiceProvider)
    private readonly langs: LanguageServiceProvider,
  ) {
    invarient(this.langs)
  }

  @debug()
  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const result = this.#getCompletionsAtPosition(fileName, position, options)
    if (result == null) return
    return {
      ...result,
      entries: result.entries.map((entry) =>
        this.#omitCompletionAdditionalInfo(entry),
      ),
    }
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    const info = this.#findCompletionAdditionalInfo(
      fileName,
      position,
      name,
      source,
    )

    if (info != null) {
      switch (info.type) {
        case 'embedded-service':
          return
        default:
          return this.ts.service.getCompletionEntrySymbol(
            info.fileName,
            info.position,
            name,
            source,
          )
      }
    }

    return this.ts.service.getCompletionEntrySymbol(
      fileName,
      position,
      name,
      source,
    )
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
    const item = this.#findCompletionItem(fileName, position, entryName, source)

    if (item != null) {
      const info = this.#getAdditionalInfo(item)
      this.logger.debug('Found entry', item)
      if (info != null) {
        const details = this.#getCompletionEntryDetailsFromAdditionalInfo(
          item,
          info,
          entryName,
          formatOptions,
          source,
          preferences,
          data,
        )

        if (info.merged == null) return details

        __DEV__ &&
          this.logger.debug(
            `Merged completion entry, resolving from:`,
            JSON.stringify(info.merged, null, 2),
          )

        return info.merged.reduce((details, entry) => {
          const info = this.#getAdditionalInfo(entry)
          if (info == null) return details
          const current = this.#getCompletionEntryDetailsFromAdditionalInfo(
            entry,
            info,
            entryName,
            formatOptions,
            source,
            preferences,
            data,
          )
          if (current == null) return details
          if (details == null) return current

          const result = { ...details }

          details.documentation = [
            ...(details.documentation ?? []),
            ...(current.documentation ?? []),
          ]

          details.displayParts = [
            ...details.displayParts,
            ...current.displayParts,
          ]

          details.codeActions = [
            ...(details.codeActions ?? []),
            ...(current.codeActions ?? []),
          ]

          details.sourceDisplay = [
            ...(details.sourceDisplay ?? []),
            ...(current.sourceDisplay ?? []),
          ]

          details.tags = [...(details.tags ?? []), ...(current.tags ?? [])]

          return result
        }, details)
      }

      return // Unlikely to happen.
    }

    if (this.fs.isVueFile(fileName)) {
      const file = this.fs.getVueFile(fileName)
      if (file == null) return

      const generatedPosition = file.generatedOffsetAt(position)
      if (generatedPosition == null) return

      return this.ts.service.getCompletionEntryDetails(
        file.geneartedFileName,
        generatedPosition,
        entryName,
        formatOptions,
        source,
        preferences,
        data,
      )
    }

    return this.ts.service.getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
      data,
    )
  }

  public getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: TypeScript.DocCommentTemplateOptions,
  ): TypeScript.TextInsertion | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return
    if (this.fs.isVueFile(fileName)) {
      const block = this.fs.getVueFile(fileName)
      if (block == null) return

      const generatedOffset = block.generatedOffsetAt(position)
      if (generatedOffset == null) return

      return this.ts.service.getDocCommentTemplateAtPosition(
        block.geneartedFileName,
        generatedOffset,
        options,
      )
    }

    return this.ts.service.getDocCommentTemplateAtPosition(fileName, position)
  }

  public getJsxClosingTagAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.JsxClosingTagInfo | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return
    if (this.fs.isVueFile(fileName)) {
      const block = this.fs.getVueFile(fileName)
      if (block == null) return

      const generatedPosition = block.generatedOffsetAt(position)
      if (generatedPosition == null) return

      return this.ts.service.getJsxClosingTagAtPosition(
        block.geneartedFileName,
        generatedPosition,
      )
    }

    return this.ts.service.getJsxClosingTagAtPosition(fileName, position)
  }

  #getCompletionEntryDetailsFromAdditionalInfo(
    item: TypeScript.CompletionEntry,
    info: CompletionAdditionalInfo,
    entryName: string,
    formatOptions:
      | TypeScript.FormatCodeOptions
      | TypeScript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: TypeScript.UserPreferences | undefined,
    data: TypeScript.CompletionEntryData | undefined,
  ): TypeScript.CompletionEntryDetails | undefined {
    switch (info.type) {
      case 'embedded-service':
        return {
          name: item.name,
          kind: item.kind,
          kindModifiers: item.kindModifiers ?? '',
          displayParts: [],
          documentation:
            info.data.documentation != null
              ? [
                  info.data.detail != null
                    ? { kind: 'text', text: info.data.detail }
                    : null,
                  {
                    kind: 'text',
                    text: isString(info.data.documentation)
                      ? info.data.documentation
                      : info.data.documentation.value,
                  },
                ].filter(isNotNull)
              : [],
          codeActions: [],
        }
      default:
        if (entryName.startsWith('@')) {
          entryName = `on${ucfirst(entryName.slice(1))}`
        }
        // TODO: Unwrap entryName for v-bind and v-on directives.
        return this.ts.service.getCompletionEntryDetails(
          info.fileName,
          info.position,
          entryName,
          formatOptions,
          source,
          preferences,
          data,
        )
    }
  }

  #getTsxCompletionOptions(
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.GetCompletionsAtPositionOptions {
    return {
      ...options,
      allowTextChangesInNewFiles: false,
      disableSuggestions: false,
      includeAutomaticOptionalChainCompletions: false,
      includeCompletionsForImportStatements: true,
      includeCompletionsForModuleExports: true,
      includePackageJsonAutoImports: 'off',
      includeCompletionsWithInsertText: true,
      includeCompletionsWithSnippetText: true,
      providePrefixAndSuffixTextForRename: true,
      provideRefactorNotApplicableReason: true,
      quotePreference: 'double',
      triggerCharacter: '<',
    }
  }

  // @ts-expect-error
  #getContextCompletionOptions(
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.GetCompletionsAtPositionOptions {
    return {
      ...options,
      allowTextChangesInNewFiles: false,
      disableSuggestions: true,
      includeAutomaticOptionalChainCompletions: true,
      includeCompletionsForImportStatements: false,
      includeCompletionsForModuleExports: false,
      includePackageJsonAutoImports: 'off',
      triggerCharacter: '.',
    }
  }

  #vueCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return

    const block = file.getBlockAt(position)
    if (block == null) return

    switch (block.type) {
      case 'template':
        return this.#templateCompletionsAtPosition(file, position, options)
    }

    return undefined
  }

  #templateCompletionsAtPosition(
    file: VueSFCDocument,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const completionsInGeneratedCode: Array<
      | TypeScript.WithMetadata<TypeScript.CompletionInfo>
      | TypeScript.CompletionEntry[]
      | undefined
    > = []
    const completionsInVueFile: Array<
      | TypeScript.WithMetadata<TypeScript.CompletionInfo>
      | TypeScript.CompletionEntry[]
      | undefined
    > = []

    if (file.templateAST == null) return
    const block = file.descriptor.template
    if (block == null) return

    const offset = position - block.loc.start.offset
    const info = getTemplateContextAt(file.templateAST, offset)
    const generatedOffset = file.generatedOffsetAt(position)
    if (generatedOffset == null) return
    this.logger.debug(`Detected context: ${info.type}`)
    switch (info.type) {
      case TemplateContextType.OpenTag:
      case TemplateContextType.CloseTag:
        completionsInGeneratedCode.push(
          this.#cleanup(
            this.ts.service.getCompletionsAtPosition(
              file.geneartedFileName,
              generatedOffset,
              this.#getTsxCompletionOptions(options),
            ),
            {
              mode: 'tag',
              attachAdditionalInfo: {
                type: info.type,
                fileName: file.geneartedFileName,
                position: generatedOffset,
              },
            },
          ),
        )
        break

      case TemplateContextType.Attribute:
        break
      case TemplateContextType.DirectiveArgument:
        break
      case TemplateContextType.DirectiveModifier:
        break

      case TemplateContextType.AttributeValue:
      case TemplateContextType.DirectiveValue:
      case TemplateContextType.Interpolation:
        completionsInGeneratedCode.push(
          this.#cleanup(
            this.ts.service.getCompletionsAtPosition(
              file.geneartedFileName,
              generatedOffset,
              options,
            ),
            {
              mode: 'all',
              attachAdditionalInfo: {
                type: info.type,
                fileName: file.geneartedFileName,
                position: generatedOffset,
              },
            },
          ),
        )
        break

      case TemplateContextType.Comment:
        // Complete doc comments?
        break
    }

    return this.#dedupeAndTransform(
      this.#combine(...completionsInVueFile),
      TemplateContextType.Attribute === info.type ||
        TemplateContextType.DirectiveArgument === info.type
        ? 'attribute'
        : TemplateContextType.OpenTag === info.type ||
          TemplateContextType.CloseTag === info.type
        ? 'tag'
        : undefined,
    )
  }

  // @ts-expect-error
  #completionItemToEntry(
    file: VueSFCDocument,
    item: LanguageService.CompletionItem,
  ): TypeScript.CompletionEntry {
    const kind = this.#toScriptElementKind(item.kind)
    const isRecommended = item.preselect === true ? true : undefined
    const isSnippet = item.insertTextFormat === 2 ? true : undefined

    let insertText = item.insertText
    let replacementSpan: TextSpan | undefined
    if (item.textEdit != null) {
      insertText = item.textEdit.newText

      const range =
        'replace' in item.textEdit ? item.textEdit.replace : item.textEdit.range
      const offsetAt = (position: Position): number => {
        return file.offsetAt(position)
      }

      const start = offsetAt(range.start)
      const end = offsetAt(range.end)

      if (end > start) {
        replacementSpan = {
          start: start,
          length: end - start,
        }
      }
    }

    if (item.tags?.includes(1) === true) {
      kind.kindModifiers.push('deprecated')
    }

    return this.#patchCompletionEntry(
      {
        kind: kind.kind,
        kindModifiers:
          kind.kindModifiers.length > 0
            ? kind.kindModifiers.join(',')
            : undefined,
        name: item.label,
        sortText: item.sortText ?? '16',
        isRecommended,
        insertText,
        replacementSpan,
        isSnippet,
      },
      {
        attachAdditionalInfo: {
          type: 'embedded-service',
          fileName: file.fileName,
          data: item,
        },
      },
    )
  }

  #toScriptElementKind(kind?: LanguageService.CompletionItemKind): {
    kind: TypeScript.ScriptElementKind
    kindModifiers: string[]
  } {
    switch (kind) {
      case 1 /* Text */:
        return {
          kind: this.ts.lib.ScriptElementKind.warning,
          kindModifiers: [],
        }
      case 2 /* Method */:
        return {
          kind: this.ts.lib.ScriptElementKind.memberFunctionElement,
          kindModifiers: [],
        }
      case 3 /* Function */:
        return {
          kind: this.ts.lib.ScriptElementKind.functionElement,
          kindModifiers: [],
        }
      case 4 /* Constructor */:
        return {
          kind: this.ts.lib.ScriptElementKind.constructSignatureElement,
          kindModifiers: [],
        }
      case 5 /* Field */:
        return {
          kind: this.ts.lib.ScriptElementKind.jsxAttribute,
          kindModifiers: [],
        }
      case 6 /* Variable */:
        return {
          kind: this.ts.lib.ScriptElementKind.variableElement,
          kindModifiers: [],
        }
      case 7 /* Class */:
        return {
          kind: this.ts.lib.ScriptElementKind.classElement,
          kindModifiers: [],
        }
      case 8 /* Interface */:
        return {
          kind: this.ts.lib.ScriptElementKind.interfaceElement,
          kindModifiers: [],
        }
      case 9 /* Module */:
        return {
          kind: this.ts.lib.ScriptElementKind.moduleElement,
          kindModifiers: [],
        }
      case 10 /* Property */:
        return {
          kind: this.ts.lib.ScriptElementKind.memberVariableElement,
          kindModifiers: [],
        }
      case 11 /* Unit */:
        return {
          kind: this.ts.lib.ScriptElementKind.unknown,
          kindModifiers: [],
        }
      case 12 /* Value */:
        return {
          kind: this.ts.lib.ScriptElementKind.primitiveType,
          kindModifiers: [],
        }
      case 13 /* Enum */:
        return {
          kind: this.ts.lib.ScriptElementKind.enumElement,
          kindModifiers: [],
        }
      case 14 /* Keyword */:
        return {
          kind: this.ts.lib.ScriptElementKind.keyword,
          kindModifiers: [],
        }
      case 15 /* Snippet */:
        return {
          kind: this.ts.lib.ScriptElementKind.unknown,
          kindModifiers: [],
        }
      case 16 /* Color */:
        return {
          kind: this.ts.lib.ScriptElementKind.unknown,
          kindModifiers: ['color'],
        }
      case 17 /* File */:
        return {
          kind: this.ts.lib.ScriptElementKind.scriptElement,
          kindModifiers: [],
        }
      case 18 /* Reference */:
        return {
          kind: this.ts.lib.ScriptElementKind.localVariableElement,
          kindModifiers: [],
        }
      case 19 /* Folder */:
        return {
          kind: this.ts.lib.ScriptElementKind.directory,
          kindModifiers: [],
        }
      case 20 /* EnumMember */:
        return {
          kind: this.ts.lib.ScriptElementKind.enumMemberElement,
          kindModifiers: [],
        }
      case 21 /* Constant */:
        return {
          kind: this.ts.lib.ScriptElementKind.constElement,
          kindModifiers: [],
        }
      case 22 /* Struct */:
        return {
          kind: this.ts.lib.ScriptElementKind.interfaceElement,
          kindModifiers: [],
        }
      case 23 /* Event */:
        return {
          kind: this.ts.lib.ScriptElementKind.parameterElement,
          kindModifiers: [],
        }
      case 24 /* Operator */:
        return {
          kind: this.ts.lib.ScriptElementKind.unknown,
          kindModifiers: [],
        }
      case 25 /* TypeParameter */:
        return {
          kind: this.ts.lib.ScriptElementKind.typeParameterElement,
          kindModifiers: [],
        }
      default:
        return {
          kind: this.ts.lib.ScriptElementKind.unknown,
          kindModifiers: [],
        }
    }
  }

  #omitCompletionAdditionalInfo(
    entry: TypeScript.CompletionEntry,
  ): TypeScript.CompletionEntry {
    if (entry.data != null && 'vuedx' in entry.data) {
      const { vuedx, ...data } = entry.data as any

      if (Object.keys(data).length === 0) return { ...entry, data: undefined }

      return { ...entry, data }
    }
    return entry
  }

  #findCompletionAdditionalInfo(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): null | CompletionAdditionalInfo {
    const entry = this.#findCompletionItem(fileName, position, name, source)
    if (entry == null) return null

    return this.#getAdditionalInfo(entry)
  }

  #getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    return this.cache.withCache(fileName, (previous) => {
      if (
        previous != null &&
        previous.position === position &&
        previous.completions?.isIncomplete !== true &&
        previous.options?.triggerCharacter === options?.triggerCharacter
      ) {
        return previous
      }

      this.logger.debug(`Miss ${fileName} at ${position}`)

      return {
        position,
        options,
        completions: this.#cleanup(
          this.fs.isVueFile(fileName)
            ? this.#vueCompletionsAtPosition(fileName, position, options)
            : this.ts.service.getCompletionsAtPosition(
                fileName,
                position,
                options,
              ),
        ),
      }
    }).completions
  }

  #findCompletionItem(
    fileName: string,
    _position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.CompletionEntry | undefined {
    return this.cache
      .getItem(fileName)
      ?.completions?.entries.find(
        (entry) => entry.name === name && entry.source === source,
      )
  }

  // @ts-expect-error
  #rebase(
    doc: VueSFCDocument,
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions == null) return completions
    const copy = { ...completions }
    if (completions.optionalReplacementSpan != null) {
      copy.optionalReplacementSpan =
        completions.optionalReplacementSpan.length === 0
          ? undefined
          : doc.findOriginalTextSpan(completions.optionalReplacementSpan) ??
            undefined
    }

    copy.entries = completions.entries.map(({ ...entry }) => {
      if (entry.replacementSpan != null) {
        entry.replacementSpan =
          entry.replacementSpan.length === 0
            ? undefined
            : doc.findOriginalTextSpan(entry.replacementSpan) ?? undefined
      }

      return entry
    })

    return completions
  }

  #cleanup(
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
    options: {
      mode: 'tag' | 'attribute' | 'all'
      attachAdditionalInfo?: CompletionAdditionalInfo
    } = { mode: 'all' },
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions == null) {
      this.logger.debug(`(Cleanup) No results to process`)
      return
    }
    const shouldInclude = (
      entry: TypeScript.CompletionEntry,
    ): string | null => {
      if (entry.name.startsWith('__VueDX_')) return 'VueDX internal'
      if (options.mode === 'tag') {
        if (entry.kind === this.ts.lib.ScriptElementKind.keyword) {
          return 'Keyword'
        }

        if (isHTMLTag(entry.name) || isSVGTag(entry.name)) {
          if (
            entry.kind === this.ts.lib.ScriptElementKind.memberVariableElement
          ) {
            return null
          }

          return 'Expected property for HTML/SVG tag'
        }

        if (!(isPascalCase(entry.name) || entry.name.includes('-'))) {
          return 'Not a tag'
        }

        const modifier = entry.kindModifiers ?? ''
        if (modifier.includes('declare')) return 'Has declare modifier'
        if (entry.source != null) {
          if (
            !(
              this.fs.isVueTsFile(entry.source) ||
              this.fs.isVueFile(entry.source)
            )
          ) {
            return 'Not a valid component import'
          }
          if (entry.data?.exportName !== 'default') {
            return 'Only default imports from .vue files'
          }
        }
      } else if (options.mode === 'attribute') {
        return null
      }
      if (entry.source != null) {
        // todo handle component imports??
      }
      return null
    }
    const copy = { ...completions }
    copy.entries = completions.entries
      .filter((entry) => {
        const reason = shouldInclude(entry)
        // // THIS IS FOR DEBUGGING DROPPED ITEMS.
        // this.logger.debug(
        //   `(Cleanup) ${reason == null ? 'Pick' : 'Drop'} ${entry.name} (${
        //     entry.kind
        //   } - ${entry.kindModifiers ?? ''}) from ${entry.source ?? '.'} ${
        //     reason ?? ''
        //   }`,
        // )

        return reason == null
      })
      .map(({ ...entry }) => {
        return this.#patchCompletionEntry(entry, options)
      })

    this.logger.debug(
      `(Cleanup) Picked ${copy.entries.length} of ${completions.entries.length} items`,
    )

    return copy
  }

  #patchCompletionEntry(
    entry: TypeScript.CompletionEntry,
    options: {
      attachAdditionalInfo?: CompletionAdditionalInfo
    },
  ): TypeScript.CompletionEntry {
    if (entry.source != null) {
      if (this.fs.isVueTsFile(entry.source)) {
        entry.source = this.fs.getRealFileName(entry.source)
      }
    }

    if (options.attachAdditionalInfo != null) {
      entry.data = {
        ...entry.data,
        vuedx: options.attachAdditionalInfo,
      } as any
    }

    return entry
  }

  /**
   * Mutates results
   * @param completions
   * @returns
   */
  #combine(
    ...completions: Array<
      | TypeScript.WithMetadata<TypeScript.CompletionInfo>
      | TypeScript.CompletionEntry[]
      | undefined
    >
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions.length === 0) return undefined

    const first = completions.find(
      (item): item is TypeScript.WithMetadata<TypeScript.CompletionInfo> =>
        item != null && !Array.isArray(item),
    )

    return completions
      .map((item) => {
        if (!Array.isArray(item)) return item
        return {
          isGlobalCompletion: first?.isGlobalCompletion ?? false,
          isMemberCompletion: first?.isMemberCompletion ?? false,
          isNewIdentifierLocation: first?.isNewIdentifierLocation ?? false,
          entries: item,
        }
      })
      .reduce((final, current) => {
        if (final == null) return current
        if (current == null) return final

        if (current.optionalReplacementSpan == null) {
          final.entries.push(...current.entries)
        } else {
          final.entries.push(
            ...current.entries.map((completion) => {
              if (completion.replacementSpan != null) return completion
              return {
                ...completion,
                replacementSpan: current.optionalReplacementSpan,
              }
            }),
          )
        }

        return final
      })
  }

  /**
   * NOTE: Modifies completion items.
   */
  #dedupeAndTransform(
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
    kind?: 'tag' | 'attribute',
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions == null) return completions

    const entries = new Map<string, TypeScript.CompletionEntry>()
    if (kind === 'tag' || kind === 'attribute') {
      completions.entries.forEach((current) => {
        if (kind === 'attribute') {
          current.kind = this.ts.lib.ScriptElementKind.jsxAttribute
          // TODO: Use preferences to determine longhand or shorthand syntax
          if (/^on[A-Z]/.test(current.name)) {
            current.kindModifiers = 'directive'
            const name = `@${lcfirst(current.name.slice(2))}`
            if (current.insertText != null) {
              current.insertText = current.insertText.replace(
                current.name,
                name,
              )
            }
            current.name = name
            current.sortText = '17'
          }
        }

        const id = getId(current)
        const previous = entries.get(id)
        if (previous == null) {
          entries.set(id, current)
          return
        }

        const a = this.#getAdditionalInfo(previous)

        if (a != null) {
          __DEV__ &&
            this.logger.debug(
              `Merging ${current.name} ( ${current.kind} ${
                current.kindModifiers ?? ''
              } ) into ${previous.name} ( ${previous.kind} ${
                previous.kindModifiers ?? ''
              } )`,
            )
          a.merged = a.merged ?? []
          a.merged.push(current)
        } else {
          __DEV__ &&
            this.logger.debug(
              `Cannot merge ${current.name} ( ${current.kind} ${
                current.kindModifiers ?? ''
              } ) into ${previous.name} ( ${previous.kind} ${
                previous.kindModifiers ?? ''
              } )`,
            )
        }
      })

      completions.entries = Array.from(entries.values())
    }

    return completions

    function getId(entry: TypeScript.CompletionEntry): string {
      if (entry.source == null) return entry.name
      return `${entry.source}::${entry.name}`
    }
  }

  #getAdditionalInfo(
    entry: TypeScript.CompletionEntry,
  ): CompletionAdditionalInfo | null {
    return (entry.data as any)?.vuedx ?? null
  }
}
