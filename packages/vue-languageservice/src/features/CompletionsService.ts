import { getComponentName, isNotNull, isString } from '@vuedx/shared'
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
import type Typescript from 'typescript/lib/tsserverlibrary'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

type CompletionAdditionalInfo =
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

@injectable()
export class CompletionsService {
  private readonly logger = LoggerService.getLogger(
    CompletionsService.name,
    LogLevel.DEBUG,
  )

  private readonly cache = new CacheService<{
    position: number
    options: Typescript.GetCompletionsAtPositionOptions | undefined
    completions: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined
  }>((fileName) => this.fs.getVersion(fileName), 5)

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(LanguageServiceProvider)
    private readonly langs: LanguageServiceProvider,
  ) {}

  private getTsxCompletionOptions(
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.GetCompletionsAtPositionOptions {
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
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.GetCompletionsAtPositionOptions {
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

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const result = this._getCompletionsAtPosition(fileName, position, options)
    if (result == null) return

    this.logger.debug('Completions:', JSON.stringify(result, null, 2))

    return {
      ...result,
      entries: result.entries.map((entry) =>
        this.omitCompletionAdditionalInfo(entry),
      ),
    }
  }

  private vueCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
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
          return this.completionItemToEntry(file.fileName, file, item)
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
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const completions: Array<
      | Typescript.WithMetadata<Typescript.CompletionInfo>
      | Typescript.CompletionEntry[]
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
    this.logger.debug(`Token at cursor:`, { tokenAtPosition })
    if (/^<[a-z0-9-]*$/i.test(tokenAtPosition)) {
      if (block.tsFileName != null && block.generated != null) {
        const position =
          tokenAtPosition === '<'
            ? block.tsxCompletionsOffset ?? -1
            : block.findGeneratedOffetAt(offset)

        if (position >= 0) {
          this.logger.debug(
            `Tag completion at ${block.tsFileName}:${this.fs.getPositionString(
              block.generated,
              position,
            )}`,
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
                    fileName: block.fileName,
                    position,
                  },
                },
              ),
            ),
          )
        }

        const nextOpenTag = content.indexOf('<', offset)
        const nextCloseTag = content.indexOf('>', offset)
        const shouldProvideSnippet =
          nextCloseTag < 0 || nextOpenTag < nextCloseTag

        const entries: Typescript.CompletionEntry[] = Array.from(
          new Set(
            this.ts.project
              .getFileNames(true, true)
              .filter(
                (fileName) =>
                  this.fs.isVueFile(fileName) ||
                  this.fs.isVueTsFile(fileName) ||
                  this.fs.isVueVirtualFile(fileName),
              )
              .map((fileName) => this.fs.getRealFileName(fileName)),
          ),
        ).map((fileName) => {
          const name = getComponentName(fileName) // TODO: Use user preferences kebab vs Pascal
          return this.patchCompletionEntry(
            {
              kind: this.ts.lib.ScriptElementKind.classElement,
              name: name,
              sortText: `\uffff${name}`,
              isSnippet: shouldProvideSnippet ? true : undefined,
              // TODO: Find indent at current line.
              // TODO: Add action to add import statement.
              insertText:
                '<' + name + (shouldProvideSnippet ? `>$0</${name}>` : ' '),
              replacementSpan: {
                start: block.toFileOffset(start),
                length: tokenAtPosition.length,
              },
              source: fileName,
              // TODO: Create snippet to add required props?
              isImportStatementCompletion: true,
              data: {
                fileName,
                exportName: this.ts.lib.InternalSymbolName.Default,
              },
            },
            {
              attachAdditionalInfo: { type: 'tag-for-project-file', fileName },
            },
          )
        })

        if (entries.length > 0) {
          this.logger.debug(
            `Import suggestions from project: ${entries.length} items`,
          )
          completions.push(entries)
        }
      }
      // TODO: Load completions from VueHTML language service
    } else if (block.tsFileName != null) {
      const { node }: SearchResult =
        file.templateAST != null
          ? findTemplateNodeAt(file.templateAST, offset)
          : { node: null, ancestors: [] }

      if (isSimpleExpressionNode(node) || isInterpolationNode(node)) {
        this.logger.debug(
          `Expression completions at ${block.fileName}:` +
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
        if (block.generated != null) {
          const position = block.findGeneratedOffetAt(offset)
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
    if (templateService != null) {
      const result = templateService.getCompletionsAtPosition(
        block.fileName,
        block.source.positionAt(block.toBlockOffset(position)),
      )

      completions.push(
        result.items.map((item) => {
          return this.completionItemToEntry(block.fileName, block.source, item)
        }),
      )
    }

    return this.combine(...completions)
  }

  private completionItemToEntry(
    fileName: string,
    file: TextDocument,
    item: LanguageService.CompletionItem,
  ): Typescript.CompletionEntry {
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
        replacementSpan = { start, length: end - start }
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
        sortText: item.sortText ?? item.label,
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
  ): { kind: Typescript.ScriptElementKind; kindModifiers: string[] } {
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
          kind: this.ts.lib.ScriptElementKind.memberVariableElement,
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
          kind: this.ts.lib.ScriptElementKind.label,
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
          kind: this.ts.lib.ScriptElementKind.label,
          kindModifiers: [],
        }
      case 16 /* Color */:
        return {
          kind: this.ts.lib.ScriptElementKind.label,
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
          kind: this.ts.lib.ScriptElementKind.label,
          kindModifiers: [],
        }
      case 25 /* TypeParameter */:
        return {
          kind: this.ts.lib.ScriptElementKind.typeParameterElement,
          kindModifiers: [],
        }
      default:
        return {
          kind: this.ts.lib.ScriptElementKind.label,
          kindModifiers: [],
        }
    }
  }

  private scriptCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
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
    _options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
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
        return this.completionItemToEntry(block.fileName, block.source, item)
      }),
    )
  }

  private customBlockCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    _options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const service = this.langs.getLanguageService(block.source.languageId)
    if (service == null) return

    const result = service.getCompletionsAtPosition(
      block.fileName,
      block.source.positionAt(block.toBlockOffset(position)),
    )

    return this.combine(
      result.items.map((item) => {
        return this.completionItemToEntry(block.fileName, block.source, item)
      }),
    )
  }

  public getCompletionEntrySymbol(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
  ): Typescript.Symbol | undefined {
    const info = this.getCompletionAdditionalInfo(
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
      | Typescript.FormatCodeOptions
      | Typescript.FormatCodeSettings
      | undefined,
    source: string | undefined,
    preferences: Typescript.UserPreferences | undefined,
    data: Typescript.CompletionEntryData | undefined,
  ): Typescript.CompletionEntryDetails | undefined {
    const item = this.findCompletionItem(fileName, position, entryName, source)
    const info = this.getCompletionAdditionalInfo(
      fileName,
      position,
      entryName,
      source,
      item?.data,
    )

    if (item != null && info != null) {
      switch (info.type) {
        case 'expression':
        case 'tag-completion-tsx':
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
        default:
          return
      }
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

  private getCodeActionsFromCompletionItem(
    fileName: string,
    item: LanguageService.CompletionItem,
  ): Typescript.CodeAction[] | undefined {
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
    entry: Typescript.CompletionEntry,
  ): Typescript.CompletionEntry {
    if (entry.data != null && 'vuedx' in entry.data) {
      const { vuedx, ...data } = entry.data as any

      if (Object.keys(data).length === 0) return { ...entry, data: undefined }

      return { ...entry, data }
    }
    return entry
  }

  private getCompletionAdditionalInfo(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
    data?: Typescript.CompletionEntryData,
  ): null | CompletionAdditionalInfo {
    if (data != null && 'vuedx' in data) return (data as any).vuedx ?? null

    const result = this.findCompletionItem(fileName, position, name, source)
      ?.data

    return (result as any)?.vuedx ?? null
  }

  private _getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: Typescript.GetCompletionsAtPositionOptions | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
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
    position: number,
    name: string,
    source: string | undefined,
  ): Typescript.CompletionEntry | undefined {
    return this._getCompletionsAtPosition(fileName, position, {})?.entries.find(
      (entry) => entry.name === name && entry.source === source,
    )
  }

  private rebase(
    doc: VueBlockDocument,
    completions: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined,
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
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
    completions: Typescript.WithMetadata<Typescript.CompletionInfo> | undefined,
    options: {
      mode: 'tag' | 'all'
      attachAdditionalInfo?: CompletionAdditionalInfo
    } = { mode: 'all' },
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    if (completions == null) return
    const copy = { ...completions }
    copy.entries = completions.entries
      .filter((entry) => {
        if (entry.name.startsWith('__VueDX_')) return false
        if (options.mode === 'tag') {
          if (!/^([A-Z][A-Za-z0-9]*|[a-z0-9-]+)$/.test(entry.name)) return false
        }
        if (entry.source != null) {
          if (this.fs.isVueVirtualFile(entry.source)) return false
        }

        return true
      })
      .map(({ ...entry }) => {
        return this.patchCompletionEntry(entry, options)
      })

    return copy
  }

  private patchCompletionEntry(
    entry: Typescript.CompletionEntry,
    options: { attachAdditionalInfo?: CompletionAdditionalInfo },
  ): Typescript.CompletionEntry {
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

  private combine(
    ...completions: Array<
      | Typescript.WithMetadata<Typescript.CompletionInfo>
      | Typescript.CompletionEntry[]
      | undefined
    >
  ): Typescript.WithMetadata<Typescript.CompletionInfo> | undefined {
    const first = completions.find(
      (item): item is Typescript.WithMetadata<Typescript.CompletionInfo> =>
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
}
