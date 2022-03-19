import { getComponentName } from '@vuedx/shared'
import {
  findTemplateNodeAt,
  isInterpolationNode,
  isSimpleExpressionNode,
  SearchResult,
} from '@vuedx/template-ast-types'
import type {
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
    return this.cache.withCache(fileName, (previous) => {
      if (previous != null && previous.position === position) return previous

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

      return {
        ...(result.isIncomplete ? { isIncomplete: true } : undefined),
        entries: result.items.map((item) => {
          return this.completionItemToEntry(item)
        }),
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
      }
    }

    this.logger.debug(
      `Find completions at ${fileName}:${this.fs.getPositionString(
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
      `Find completions at ${block.fileName}:${this.fs.getPositionString(
        block,
        offset,
      )}`,
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
              sortText: name,
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

      completions.push({
        ...(result.isIncomplete ? { isIncomplete: true } : undefined),
        entries: result.items.map((item) => {
          return this.completionItemToEntry(item)
        }),
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
      })
    }

    return this.combine(...completions)
  }

  private completionItemToEntry(
    item: LanguageService.CompletionItem,
  ): Typescript.CompletionEntry {
    return {
      kind: this.ts.lib.ScriptElementKind.unknown,
      name: item.label,
      sortText: item.sortText ?? item.label,
      insertText: item.insertText,
      isSnippet: item.insertTextMode === 2 ? true : undefined,
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
    if (service == null) return

    const result = service.getCompletionsAtPosition(
      block.fileName,
      block.source.positionAt(block.toBlockOffset(position)),
    )

    return this.combine({
      ...(result.isIncomplete ? { isIncomplete: true } : undefined),
      entries: result.items.map((item) => {
        return this.completionItemToEntry(item)
      }),
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
    })
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

    return this.combine({
      ...(result.isIncomplete ? { isIncomplete: true } : undefined),
      entries: result.items.map((item) => {
        return this.completionItemToEntry(item)
      }),
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
    })
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
        case 'embedded-service':
          return // TODO: Get symbol
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
    const info = this.getCompletionAdditionalInfo(
      fileName,
      position,
      entryName,
      source,
    )

    if (info != null) {
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
          return // TODO: Get Details
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

  private getCompletionAdditionalInfo(
    fileName: string,
    position: number,
    name: string,
    source: string | undefined,
    data?: Typescript.CompletionEntryData,
  ): null | CompletionAdditionalInfo {
    if (data != null && 'vuedx' in data) return (data as any).vuedx ?? null

    const result = this.getCompletionsAtPosition(
      fileName,
      position,
      {},
    )?.entries.find((entry) => entry.name === name && entry.source === source)
      ?.data

    return (result as any)?.vuedx ?? null
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

        if (
          final.isGlobalCompletion !== current.isGlobalCompletion ||
          final.isMemberCompletion !== current.isMemberCompletion ||
          final.isNewIdentifierLocation !== current.isNewIdentifierLocation
        ) {
          if (__DEV__) {
            const reasons: string[] = []
            if (final.isGlobalCompletion !== current.isGlobalCompletion) {
              reasons.push(final.isGlobalCompletion ? 'Local' : 'Global')
            }
            if (final.isMemberCompletion !== current.isMemberCompletion) {
              reasons.push(final.isMemberCompletion ? 'Non-member' : 'Member')
            }

            if (
              final.isNewIdentifierLocation !== current.isNewIdentifierLocation
            ) {
              reasons.push(
                final.isNewIdentifierLocation
                  ? 'Old identifier'
                  : 'New identifier',
              )
            }

            const content = current.entries
              .map((entry) => ` - (${entry.kind}) ${entry.name}`)
              .join('\n')

            this.logger.debug(
              `Dropping completisions due to ${reasons.join(
                ', ',
              )}:\n${content}`,
            )
          }
        } else if (current.optionalReplacementSpan == null) {
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
