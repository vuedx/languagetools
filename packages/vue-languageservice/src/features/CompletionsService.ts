import {
  isHTMLTag,
  isNotNull,
  isPascalCase,
  isString,
  isSVGTag,
} from '@vuedx/shared'
import {
  findTemplateNodeAt,
  isInterpolationNode,
  isSimpleExpressionNode,
  SearchResult,
} from '@vuedx/template-ast-types'
import type {
  Position,
  TextDocument,
  TextSpan,
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { LanguageService } from '../contracts/LanguageService'
import type { TypeScript } from '../contracts/TypeScript'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

type CompletionAdditionalInfo = {
  merged?: TypeScript.CompletionEntry[]
} & (
  | {
      type: 'tag-completion-tsx'
      fileName: string
      position: number
    }
  | {
      type: 'expression'
      fileName: string
      position: number
    }
  | {
      type: 'tag-for-project-file'
      fileName: string
    }
  | {
      type: 'embedded-service'
      fileName: string
      data: LanguageService.CompletionItem
    }
  | {
      type: 'unknown'
    }
)

@injectable()
export class CompletionsService {
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
  ) {}

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const result = this._getCompletionsAtPosition(fileName, position, options)
    if (result == null) return
    return {
      ...result,
      entries: result.entries.map((entry) =>
        this.omitCompletionAdditionalInfo(entry),
      ),
    }
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): TypeScript.Symbol | undefined {
    const info = this.findCompletionAdditionalInfo(
      fileName,
      position,
      name,
      source,
    )

    if (info != null) {
      switch (info.type) {
        case 'expression':
        case 'tag-completion-tsx':
          return this.ts.service.getCompletionEntrySymbol(
            info.fileName,
            info.position,
            name,
            source,
          )
        default:
          return
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
    const item = this.findCompletionItem(fileName, position, entryName, source)

    if (item != null) {
      const info = this.getAdditionalInfo(item)
      if (info != null) {
        const details = this.getCompletionEntryDetailsFromAdditionalInfo(
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
          const info = this.getAdditionalInfo(entry)
          if (info == null) return details
          const current = this.getCompletionEntryDetailsFromAdditionalInfo(
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
      const block = this.fs.getVirtualFileAt(fileName, position)
      if (block == null || block.tsFileName == null) return

      return this.ts.service.getCompletionEntryDetails(
        block.tsFileName,
        block.findGeneratedOffetAt(block.toBlockOffset(position)),
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

  private getCompletionEntryDetailsFromAdditionalInfo(
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
      case 'expression':
      case 'tag-completion-tsx':
        this.logger.debug('Find entry details', info)
        return this.ts.service.getCompletionEntryDetails(
          info.fileName,
          info.position,
          entryName,
          formatOptions,
          source,
          preferences,
          data,
        )
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
              : undefined,
          codeActions: this.getCodeActionsFromCompletionItem(
            info.fileName,
            info.data,
          ),
        }
    }

    return undefined
  }

  private getTsxCompletionOptions(
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

  private getContextCompletionOptions(
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

  private vueCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const block = file.getDocAt(position)
    if (block == null) {
      const service = this.langs.getLanguageService('vue')
      if (service == null) return
      const result = service.getCompletionsAtPosition(
        fileName,
        file.positionAt(position),
      )

      const completions = this.combine(
        result.items.map((item) => {
          return this.completionItemToEntry(
            file.fileName,
            file,
            item,
            (offset) => offset,
          )
        }),
      )
      if (result.isIncomplete && completions != null)
        completions.isIncomplete = true
      return completions
    }

    this.logger.debug(
      `(Vue) Find completions at ${fileName}:${this.fs.getPositionString(
        file,
        position,
      )}`,
    )

    switch (block.block.type) {
      case 'template':
        return this.templateCompletionsAtPosition(
          file,
          block,
          position,
          options,
        )
      case 'script':
        return this.scriptCompletionsAtPosition(file, block, position, options)
      case 'style':
        return this.styleCompletionsAtPosition(file, block, position, options)
      default:
        return this.customBlockCompletionsAtPosition(
          file,
          block,
          position,
          options,
        )
    }
  }

  private templateCompletionsAtPosition(
    file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const completions: Array<
      | TypeScript.WithMetadata<TypeScript.CompletionInfo>
      | TypeScript.CompletionEntry[]
      | undefined
    > = []

    const offset = block.toBlockOffset(position)
    this.logger.debug(
      `(Template) Find completions at ${
        block.fileName
      }:${this.fs.getPositionString(block, offset)}`,
    )
    const content = block.source.getText()
    let start: number = offset - 1
    const stopCharacters = new Set(' <\t\n'.split(''))
    for (; start >= 0; --start) {
      if (stopCharacters.has(content.charAt(start))) break
    }
    const tokenAtPosition = content.slice(start, offset)
    this.logger.debug(`(Template) Token at cursor:`, { tokenAtPosition })
    // TODO: Move to separate service to provide completions in other languages like pug.
    const isTagCompletion = /^<[a-z0-9-]*$/i.test(tokenAtPosition)
    let isAttributeCompletion = false
    if (isTagCompletion) {
      if (block.tsFileName != null && block.generated != null) {
        const position = block.tsxCompletionsOffset

        if (position != null) {
          this.logger.debug(
            `(Template) Tag completion at ${
              block.tsFileName
            }:${this.fs.getPositionString(block.generated, position)}`,
          )
          completions.push(
            this.rebase(
              block,
              this.cleanup(
                this.ts.service.getCompletionsAtPosition(
                  block.tsFileName,
                  position,
                  this.getTsxCompletionOptions(options),
                ),
                {
                  mode: 'tag',
                  attachAdditionalInfo: {
                    type: 'tag-completion-tsx',
                    fileName: block.tsFileName,
                    position,
                  },
                },
              ),
            ),
          )
        }
      }
    } else if (block.tsFileName != null) {
      const { node }: SearchResult =
        file.templateAST != null
          ? findTemplateNodeAt(file.templateAST, offset)
          : { node: null, ancestors: [] }

      if (isSimpleExpressionNode(node) || isInterpolationNode(node)) {
        this.logger.debug(
          `(Template) Expression completions at ${block.fileName}:` +
            this.fs.getPositionString(block, offset),
        )
        const position = block.findGeneratedOffetAt(offset)
        const completionsAtOffset = this.ts.service.getCompletionsAtPosition(
          block.tsFileName,
          position,
          options,
        )

        completions.push(
          this.rebase(
            block,
            this.cleanup(completionsAtOffset, {
              mode: 'all',
              attachAdditionalInfo: {
                type: 'expression',
                fileName: block.tsFileName,
                position,
              },
            }),
          ),
        )

        if (
          completionsAtOffset == null ||
          completionsAtOffset.isGlobalCompletion ||
          completionsAtOffset.isNewIdentifierLocation
        ) {
          if (block.generated != null) {
            const position = block.findOriginalOffsetAt(offset)
            this.logger.debug(
              `Completions at ${block.tsFileName}:` +
                this.fs.getPositionString(block.generated, position),
            )
            completions.push(
              this.rebase(
                block,
                this.cleanup(
                  this.ts.service.getCompletionsAtPosition(
                    block.tsFileName,
                    position,
                    options,
                  ),
                  {
                    mode: 'all',
                    attachAdditionalInfo: {
                      type: 'expression',
                      fileName: block.tsFileName,
                      position,
                    },
                  },
                ),
              ),
            )
          }

          if (file.descriptor.scriptSetup != null) {
            const block = file.getDoc(file.descriptor.scriptSetup)

            if (
              block?.tsFileName != null &&
              block.tsCompletionsOffset != null &&
              block.generated != null
            ) {
              this.logger.debug(
                `Script globals at ${block.tsFileName}:` +
                  this.fs.getPositionString(
                    block.generated,
                    block.tsCompletionsOffset,
                  ),
              )
              completions.push(
                this.rebase(
                  block,
                  this.cleanup(
                    this.ts.service.getCompletionsAtPosition(
                      block.tsFileName,
                      block.tsCompletionsOffset,
                      this.getContextCompletionOptions(options),
                    ),
                    {
                      mode: 'all',
                      attachAdditionalInfo: {
                        type: 'expression',
                        fileName: block.tsFileName,
                        position: block.tsCompletionsOffset,
                      },
                    },
                  ),
                ),
              )
            }
          }
        }
      } else {
        isAttributeCompletion = true
        if (block.generated != null) {
          const position = block.findGeneratedOffetAt(offset)
          this.logger.debug(
            `(Template) Maybe attribute completions at ${block.tsFileName}:` +
              this.fs.getPositionString(block.generated, position),
          )
          completions.push(
            this.rebase(
              block,
              this.cleanup(
                this.ts.service.getCompletionsAtPosition(
                  block.tsFileName,
                  position,
                  this.getContextCompletionOptions(options),
                ),
                {
                  mode: 'all',
                  attachAdditionalInfo: {
                    type: 'expression',
                    fileName: block.tsFileName,
                    position,
                  },
                },
              ),
            ),
          )
        }
      }
    }

    const templateService = this.langs.getLanguageService(
      block.source.languageId,
    )
    if ((isTagCompletion || isAttributeCompletion) && templateService != null) {
      const offset = block.toBlockOffset(position)
      this.logger.debug(
        `(Template) Tag completion at ${
          block.fileName
        }:${this.fs.getPositionString(block.source, offset)}`,
      )
      const result = templateService.getCompletionsAtPosition(
        block.fileName,
        block.source.positionAt(offset),
      )

      completions.push(
        result.items.map((item) => {
          return this.completionItemToEntry(
            block.fileName,
            block.source,
            item,
            (offset) => block.toFileOffset(offset),
          )
        }),
      )
    }

    return this.dedupe(
      this.combine(...completions),
      isTagCompletion ? 'tag' : isAttributeCompletion ? 'attribute' : 'value',
    )
  }

  private completionItemToEntry(
    fileName: string,
    file: TextDocument,
    item: LanguageService.CompletionItem,
    toFileOffset: (offset: number) => number,
  ): TypeScript.CompletionEntry {
    const kind = this.toScriptElementKind(item.kind)
    const isRecommended = item.preselect === true ? true : undefined
    const isSnippet = item.insertTextFormat === 2 ? true : undefined

    let insertText = item.insertText
    let replacementSpan: TextSpan | undefined
    if (item.textEdit != null) {
      insertText = item.textEdit.newText

      const range =
        'replace' in item.textEdit ? item.textEdit.replace : item.textEdit.range

      const start = file.offsetAt(range.start)
      const end = file.offsetAt(range.end)

      if (end > start) {
        replacementSpan = { start: toFileOffset(start), length: end - start }
      }
    }

    if (item.tags?.includes(1) === true) {
      kind.kindModifiers.push('deprecated')
    }

    return this.patchCompletionEntry(
      {
        kind: kind.kind,
        kindModifiers:
          kind.kindModifiers.length > 0
            ? kind.kindModifiers.join(',')
            : undefined,
        name: item.label,
        sortText: '16',
        isRecommended,
        insertText,
        replacementSpan,
        isSnippet,
      },
      {
        attachAdditionalInfo: {
          type: 'embedded-service',
          fileName: fileName,
          data: item,
        },
      },
    )
  }

  private toScriptElementKind(
    kind?: LanguageService.CompletionItemKind,
  ): { kind: TypeScript.ScriptElementKind; kindModifiers: string[] } {
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

  private scriptCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (block.tsFileName == null) return undefined
    return this.rebase(
      block,
      this.ts.service.getCompletionsAtPosition(
        block.tsFileName,
        block.toBlockOffset(position),
        options,
      ),
    )
  }

  private styleCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    _options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const service = this.langs.getLanguageService(block.source.languageId)

    this.logger.debug(
      `(${block.source.languageId}) Find completions at ${
        block.fileName
      }:${this.fs.getPositionString(_file, position)}`,
    )

    if (service == null) return

    const result = service.getCompletionsAtPosition(
      block.fileName,
      block.source.positionAt(block.toBlockOffset(position)),
    )

    return this.combine(
      result.items.map((item) => {
        return this.completionItemToEntry(
          block.fileName,
          block.source,
          item,
          (offset) => block.toFileOffset(offset),
        )
      }),
    )
  }

  private customBlockCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    _options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const service = this.langs.getLanguageService(block.source.languageId)
    if (service == null) return

    const result = service.getCompletionsAtPosition(
      block.fileName,
      block.source.positionAt(block.toBlockOffset(position)),
    )

    return this.combine(
      result.items.map((item) => {
        return this.completionItemToEntry(
          block.fileName,
          block.source,
          item,
          (offset) => block.toFileOffset(offset),
        )
      }),
    )
  }

  private getCodeActionsFromCompletionItem(
    fileName: string,
    item: LanguageService.CompletionItem,
  ): TypeScript.CodeAction[] | undefined {
    if (item.additionalTextEdits == null) return
    const isVueFile = this.fs.isVueFile(fileName)
    const file = isVueFile
      ? this.fs.getVueFile(fileName)
      : this.fs.getVueFile(fileName)?.getDocById(fileName)
    if (file == null) return
    const offsetAt: (pos: Position) => number = isVueFile
      ? (pos) => file.offsetAt(pos)
      : (pos) =>
          (file as VueBlockDocument).toFileOffset(
            (file as VueBlockDocument).source.offsetAt(pos),
          )

    return [
      {
        description: item.detail ?? '',
        changes: [
          {
            fileName: this.fs.getRealFileName(fileName),
            textChanges: item.additionalTextEdits.map((item) => {
              const start = offsetAt(item.range.start)
              const end = offsetAt(item.range.start)
              return {
                newText: item.newText,
                span: { start, length: end - start },
              }
            }),
          },
        ],

        commands:
          item.command != null
            ? [
                {
                  command: item.command.command,
                  arguments: item.command.arguments,
                },
              ]
            : undefined,
      },
    ]
  }

  private omitCompletionAdditionalInfo(
    entry: TypeScript.CompletionEntry,
  ): TypeScript.CompletionEntry {
    if (entry.data != null && 'vuedx' in entry.data) {
      const { vuedx, ...data } = entry.data as any

      if (Object.keys(data).length === 0) return { ...entry, data: undefined }

      return { ...entry, data }
    }
    return entry
  }

  private findCompletionAdditionalInfo(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): null | CompletionAdditionalInfo {
    const entry = this.findCompletionItem(fileName, position, name, source)
    if (entry == null) return null

    return this.getAdditionalInfo(entry)
  }

  private _getCompletionsAtPosition(
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
        completions: this.cleanup(
          this.fs.isVueFile(fileName)
            ? this.vueCompletionsAtPosition(fileName, position, options)
            : this.ts.service.getCompletionsAtPosition(
                fileName,
                position,
                options,
              ),
        ),
      }
    }).completions
  }

  private findCompletionItem(
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

  private rebase(
    doc: VueBlockDocument,
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions == null) return completions
    const copy = { ...completions }
    if (completions.optionalReplacementSpan != null) {
      copy.optionalReplacementSpan =
        doc.findOriginalTextSpan(completions.optionalReplacementSpan) ??
        undefined
    }

    copy.entries = completions.entries.map(({ ...entry }) => {
      if (entry.replacementSpan != null) {
        entry.replacementSpan =
          doc.findOriginalTextSpan(entry.replacementSpan) ?? undefined
      }

      return entry
    })

    return completions
  }

  private cleanup(
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
    options: {
      mode: 'tag' | 'all'
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
      } else if (entry.source != null) {
        if (this.fs.isVueVirtualFile(entry.source)) return 'Not a valid import'
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
        return this.patchCompletionEntry(entry, options)
      })

    this.logger.debug(
      `(Cleanup) Picked ${copy.entries.length} of ${completions.entries.length} items`,
    )

    return copy
  }

  private patchCompletionEntry(
    entry: TypeScript.CompletionEntry,
    options: { attachAdditionalInfo?: CompletionAdditionalInfo },
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
  private combine(
    ...completions: Array<
      | TypeScript.WithMetadata<TypeScript.CompletionInfo>
      | TypeScript.CompletionEntry[]
      | undefined
    >
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
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
  private dedupe(
    completions: TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined,
    kind: 'tag' | 'attribute' | 'value',
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (completions == null) return completions

    const entries = new Map<string, TypeScript.CompletionEntry>()
    if (kind === 'tag' || kind === 'attribute') {
      completions.entries.forEach((current) => {
        const id = getId(current)
        const previous = entries.get(id)
        if (previous == null) {
          entries.set(id, current)
          return
        }

        const a = this.getAdditionalInfo(previous)
        __DEV__ &&
          this.logger.debug(
            `Merging ${current.name} ( ${current.kind} ${
              current.kindModifiers ?? ''
            } ) into ${previous.name} ( ${previous.kind} ${
              previous.kindModifiers ?? ''
            } )`,
          )
        if (a == null) {
          this.patchCompletionEntry(previous, {
            attachAdditionalInfo: { type: 'unknown', merged: [current] },
          })
        } else {
          a.merged = a.merged ?? []
          a.merged.push(current)
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

  private getAdditionalInfo(
    entry: TypeScript.CompletionEntry,
  ): CompletionAdditionalInfo | null {
    return (entry.data as any)?.vuedx ?? null
  }
}
