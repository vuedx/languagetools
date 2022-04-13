import {
  debug,
  isHTMLTag,
  isNotNull,
  isPascalCase,
  isString,
  isSVGTag,
  isVueFile,
  lcfirst,
  nth,
  ucfirst,
} from '@vuedx/shared'
import {
  AttributeNode,
  DirectiveNode,
  ElementNode,
  findTemplateNodeAt,
  isAttributeNode,
  isCommentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  RootNode,
} from '@vuedx/template-ast-types'
import {
  annotations,
  Position,
  TextSpan,
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { LanguageService } from '../contracts/LanguageService'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import {
  AttributeContext,
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

const PROP_COMPLETION_HELPER = 'VueDX.internal.propCompletionHelper("'
const DIRECTIVE_MODIFIER_COMPLETION_HELPER = `"${annotations.directiveModifierCompletions}`

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
    > {
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

  public getDocCommentTemplateAtPosition(
    fileName: string,
    position: number,
    options?: TypeScript.DocCommentTemplateOptions,
  ): TypeScript.TextInsertion | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return
    if (this.fs.isVueFile(fileName)) {
      const [file, block] = this.fs.findFilesAt(fileName, position)
      if (block == null || file == null || block.tsFileName == null) return
      if (block.block.type === 'script') {
        return this.ts.service.getDocCommentTemplateAtPosition(
          block.tsFileName,
          block.findGeneratedOffetAt(block.toBlockOffset(position)),
          options,
        )
      }

      if (block.block.type !== 'template') return
      if (file.templateAST == null) return
      const result = findTemplateNodeAt(file.templateAST, position)
      if (!isSimpleExpressionNode(result.node)) return
      return this.ts.service.getDocCommentTemplateAtPosition(
        block.tsFileName,
        block.findGeneratedOffetAt(block.toBlockOffset(position)),
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
      const [file, block] = this.fs.findFilesAt(fileName, position)
      if (block == null || file == null || block.tsFileName == null) return
      if (
        block.block.type === 'template' ||
        (block.block.type === 'script' &&
          (block.block.lang === 'tsx' || block.block.lang === 'jsx'))
      ) {
        return this.ts.service.getJsxClosingTagAtPosition(
          block.tsFileName,
          block.findGeneratedOffetAt(block.toBlockOffset(position)),
        )
      }
      return undefined
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
          codeActions: this.#getCodeActionsFromCompletionItem(
            info.fileName,
            info.data,
          ),
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
    const block = file.getDocAt(position)
    if (block == null) {
      const service = this.langs.getLanguageService('vue')
      if (service == null) return
      const result = service.getCompletionsAtPosition(
        fileName,
        file.positionAt(position),
      )

      const completions = this.#combine(
        result.items.map((item) => {
          return this.#completionItemToEntry(file, item)
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
        return this.#templateCompletionsAtPosition(
          file,
          block,
          position,
          options,
        )
      case 'script':
        return this.#scriptCompletionsAtPosition(file, block, position, options)
      case 'style':
        return this.#styleCompletionsAtPosition(file, block, position, options)
      default:
        return this.#customBlockCompletionsAtPosition(
          file,
          block,
          position,
          options,
        )
    }
  }

  #templateCompletionsAtPosition(
    file: VueSFCDocument,
    block: VueBlockDocument,
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

    if (
      file.templateAST == null ||
      block.tsFileName == null ||
      block.generated == null
    )
      return

    const offset = block.toBlockOffset(position)
    const info = getTemplateContextAt(file.templateAST, offset)
    const generatedOffset = block.findGeneratedOffetAt(offset)
    this.logger.debug(`Detected context: ${info.type}`)
    switch (info.type) {
      case TemplateContextType.OpenTag:
      case TemplateContextType.CloseTag:
        completionsInGeneratedCode.push(
          this.#cleanup(
            this.ts.service.getCompletionsAtPosition(
              block.tsFileName,
              generatedOffset,
              this.#getTsxCompletionOptions(options),
            ),
            {
              mode: 'tag',
              attachAdditionalInfo: {
                type: info.type,
                fileName: block.tsFileName,
                position: generatedOffset,
              },
            },
          ),
        )
        break

      case TemplateContextType.Attribute:
        completionsInVueFile.push(
          this.#getAttributeCompletions(
            block,
            info.context,
            info.node,
            options,
          ),
          this.#getDirectiveNameCompletions(block, info),
        )
        break
      case TemplateContextType.DirectiveArgument:
        if (
          info.context.name === 'bind' ||
          info.context.name === 'model' ||
          info.context.name === 'on'
        ) {
          completionsInVueFile.push(
            this.#getAttributeCompletions(
              block,
              info.element,
              info.context,
              options,
            ),
          )
        }
        if (info.context.arg != null) {
          completionsInVueFile.push(
            this.#getDirectiveModifierCompletions(
              block,
              info.element,
              info.context,
              options,
            ),
          )
        }
        // others
        break
      case TemplateContextType.DirectiveModifier:
        completionsInVueFile.push(
          this.#getDirectiveModifierCompletions(
            block,
            info.context,
            info.node,
            options,
          ),
        )
        break

      case TemplateContextType.AttributeValue:
      case TemplateContextType.DirectiveValue:
      case TemplateContextType.Interpolation:
        completionsInGeneratedCode.push(
          this.#cleanup(
            this.ts.service.getCompletionsAtPosition(
              block.tsFileName,
              generatedOffset,
              options,
            ),
            {
              mode: 'all',
              attachAdditionalInfo: {
                type: info.type,
                fileName: block.tsFileName,
                position: generatedOffset,
              },
            },
          ),
        )
        if (block.tsCompletionsOffset != null) {
          completionsInGeneratedCode.push(
            this.#cleanup(
              this.ts.service.getCompletionsAtPosition(
                block.tsFileName,
                block.tsCompletionsOffset,
                this.#getContextCompletionOptions(options),
              ),
              {
                mode: 'all',
                attachAdditionalInfo: {
                  type: info.type,
                  fileName: block.tsFileName,
                  position: block.tsCompletionsOffset,
                },
              },
            ),
          )
        }
        break

      case TemplateContextType.Comment:
        // Complete doc comments?
        break
    }

    if (
      info.type === TemplateContextType.Attribute ||
      info.type === TemplateContextType.AttributeValue ||
      info.type === TemplateContextType.OpenTag ||
      info.type === TemplateContextType.CloseTag
    ) {
      // TODO: Use this only for attribute details
      const service = this.langs.getLanguageService(block.fileName)
      if (service != null) {
        completionsInVueFile.push(
          service
            .getCompletionsAtPosition(
              block.fileName,
              block.source.positionAt(offset),
            )
            .items.map((item) => this.#completionItemToEntry(block, item)),
        )
      }
    }

    return this.#dedupeAndTransform(
      this.#combine(
        this.#rebase(block, this.#combine(...completionsInGeneratedCode)),
        ...completionsInVueFile,
      ),
      TemplateContextType.Attribute === info.type ||
        TemplateContextType.DirectiveArgument === info.type
        ? 'attribute'
        : TemplateContextType.OpenTag === info.type ||
          TemplateContextType.CloseTag === info.type
        ? 'tag'
        : undefined,
    )
  }

  /**
   * NOTE: Completions include replacementSpan with text spans corresponding to .vue file
   */
  #getDirectiveNameCompletions(
    block: VueBlockDocument,
    info: AttributeContext,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const attribute = info.node
    const element = info.context

    const replacementSpan =
      attribute != null
        ? {
            start: block.toFileOffset(attribute.loc.start.offset),
            length: attribute.loc.source.length,
          }
        : undefined
    const conditionalDirectives = ['else-if', 'else', 'if']
    const current = new Set(
      element.props
        .flatMap((prop) =>
          isDirectiveNode(prop)
            ? conditionalDirectives.includes(prop.name)
              ? conditionalDirectives
              : [prop.name]
            : null,
        )
        .filter(isNotNull),
    )
    const conditions = checkConditions()
    const directives = [
      conditions == null
        ? ['if']
        : conditions.if || conditions.elseIf
        ? conditionalDirectives
        : ['if'],
      'for',
      'slot',
      'show',
      'pre',
      'memo',
      'model',
      'text',
      'html',
      'cloak',
    ]
      .flat()
      .filter(isNotNull)
      .filter((name) => !current.has(name))

    return this.#cleanup(
      {
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
        entries: directives.map((name, index) => ({
          name: `v-${name}`,
          kind: this.ts.lib.ScriptElementKind.jsxAttribute,
          kindModifiers: 'directive',
          sortText: `${20 + index}`,
          insertText: `v-${name}="$0"`,
          isSnippet: true,
          replacementSpan,
        })),
      },
      {
        mode: 'all',
        attachAdditionalInfo: {
          type: TemplateContextType.None,
          fileName: block.fileName,
          position: element.startTagLoc.end.offset - 1,
        },
      },
    )

    function checkConditions(): { if: boolean; elseIf: boolean } | undefined {
      const parentIndex =
        info.ancestors.findIndex((item) => item.node === element) - 1
      if (parentIndex < 0) return
      const parent = nth(info.ancestors, parentIndex).node as
        | ElementNode
        | RootNode
      const index = parent.children.indexOf(element)
      for (let i = index - 1; i >= 0; i--) {
        const child = parent.children[i]
        if (isElementNode(child)) {
          return {
            if: child.props.some(
              (prop) => isDirectiveNode(prop) && prop.name === 'if',
            ),
            elseIf: child.props.some(
              (prop) => isDirectiveNode(prop) && prop.name === 'else-if',
            ),
          }
        } else if (!isCommentNode(child)) {
          break
        }
      }

      return undefined
    }
  }

  /**
   * NOTE: Completions include replacementSpan with text spans corresponding to .vue file
   */
  #getAttributeCompletions(
    block: VueBlockDocument,
    element: ElementNode,
    attribute: AttributeNode | DirectiveNode | null,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (block.generated == null) return
    if (block.tsFileName == null) return
    if (
      isDirectiveNode(attribute) &&
      attribute.name === 'model' &&
      (isHTMLTag(element.tag) || isSVGTag(element.tag))
    ) {
      return // no model attribute for svg/html
    }

    const index = block.generated
      .getText()
      .indexOf(
        PROP_COMPLETION_HELPER,
        block.findGeneratedOffetAt(element.loc.start.offset),
      )

    if (index < 0) return
    const offset = index + PROP_COMPLETION_HELPER.length
    const completions = this.ts.service.getCompletionsAtPosition(
      block.tsFileName,
      offset,
      options,
    )
    if (completions == null || completions.entries == null) return
    if (attribute != null) {
      const end = isDirectiveNode(attribute)
        ? attribute.arg?.loc.end.offset ??
          attribute.exp?.loc.start.offset ??
          attribute.loc.end.offset
        : attribute.loc.end.offset
      const attributeSpan = {
        start: block.toFileOffset(attribute.loc.start.offset),
        length: end - attribute.loc.start.offset,
      }
      const argumentSpan = isDirectiveNode(attribute)
        ? attribute.arg != null
          ? {
              start: block.toFileOffset(attribute.arg.loc.start.offset),
              length: end - attribute.loc.start.offset,
            }
          : undefined
        : {
            start: block.toFileOffset(attribute.loc.start.offset),
            length: end - attribute.loc.start.offset,
          }
      const kind = isDirectiveNode(attribute)
        ? (attribute.name as 'bind' | 'on' | 'model')
        : 'all'
      const preferences = this.ts.getVuePrefrencesFor(block.parent.fileName)
      const preferShorthand =
        isDirectiveNode(attribute) && attribute.loc.source.startsWith('v-')
          ? false
          : preferences.template.directiveSyntax === 'shorthand'
      const hasExpression =
        (isDirectiveNode(attribute) && attribute.exp != null) ||
        (isAttributeNode(attribute) && attribute.value != null)
      const makeSnippet = (
        entry: TypeScript.CompletionEntry,
      ): TypeScript.CompletionEntry => {
        if (hasExpression || entry.isSnippet === true) return entry

        entry.isSnippet = true
        if (entry.insertText == null) {
          entry.insertText = `${entry.name}="$0"`
        } else {
          entry.insertText += '="$0"'
        }

        return entry
      }
      completions.entries = completions.entries
        .flatMap((entry) => {
          if (entry.name === '') return [] // additional prop added by VueDX
          if (/^on[A-Z]/.test(entry.name)) {
            const arg = lcfirst(entry.name.slice(2))
            if (kind === 'bind' || kind === 'model') return null
            const name = preferShorthand ? `@${arg}` : `v-on:${arg}`

            return [
              argumentSpan != null
                ? makeSnippet({
                    ...entry,
                    name: arg,
                    insertText: entry.insertText?.replace(entry.name, arg),
                    replacementSpan: argumentSpan,
                  })
                : null,
              makeSnippet({
                ...entry,
                name,
                insertText: entry.insertText?.replace(entry.name, name),
                replacementSpan: attributeSpan,
              }),
            ].filter(isNotNull)
          } else {
            if (kind === 'on') return null
            const arg = entry.name
            const name =
              kind === 'model'
                ? `v-model:${arg}`
                : preferShorthand
                ? `:${arg}`
                : `v-bind:${arg}`

            return [
              makeSnippet({
                ...entry,
                replacementSpan: argumentSpan,
              }),
              makeSnippet({
                ...entry,
                name,
                insertText: entry.insertText?.replace(entry.name, name),
                replacementSpan: attributeSpan,
              }),
            ]
          }
        })
        .filter(isNotNull)
    } else {
      completions.entries.forEach((entry) => {
        entry.replacementSpan = undefined
      })
    }

    completions.optionalReplacementSpan = undefined

    return this.#cleanup(completions, {
      mode: 'all',
      attachAdditionalInfo: {
        type: TemplateContextType.DirectiveArgument,
        fileName: block.tsFileName,
        position: offset,
      },
    })
  }

  /**
   * NOTE: Completions include replacementSpan with text spans corresponding to .vue file
   */
  #getDirectiveModifierCompletions(
    block: VueBlockDocument,
    _element: ElementNode,
    directive: DirectiveNode,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    const start = directive.arg?.loc.end.offset ?? directive.loc.start.offset
    const end = directive.exp?.loc.end.offset ?? directive.loc.end.offset
    const text = directive.loc.source.slice(
      start - directive.loc.start.offset,
      end - directive.loc.start.offset,
    )
    const index = text.lastIndexOf('.')
    const prefix = index >= 0 ? text.slice(index).replace(/=.*$/, '') : ''
    const replacementSpan =
      prefix.length > 0
        ? {
            start: block.toFileOffset(start + index),
            length: prefix.length,
          }
        : undefined

    if (directive.name === 'bind') {
      if (!/^v-bind|:/.test(directive.loc.source)) return

      const modifiers = ['camel', 'prop', 'attr'].filter(
        (modifier) => !directive.modifiers.includes(modifier),
      )

      return this.#cleanup(
        {
          isGlobalCompletion: false,
          isMemberCompletion: false,
          isNewIdentifierLocation: false,
          entries: modifiers.map((modifier) => ({
            name: modifier,
            kind: this.ts.lib.ScriptElementKind.jsxAttribute,
            kindModifiers: 'modifier',
            sortText: '16',
            insertText: `.${modifier}`,
            replacementSpan,
          })),
        },
        {
          mode: 'all',
          attachAdditionalInfo: {
            type: TemplateContextType.None,
            fileName: block.fileName,
            position: start,
          },
        },
      )
    }

    if (block.generated == null || block.tsFileName == null) return
    const offset = block.findGeneratedOffetAt(directive.loc.start.offset)
    const position = block.generated
      .getText()
      .indexOf(DIRECTIVE_MODIFIER_COMPLETION_HELPER, offset)
    if (position < 0) return
    const completions = this.ts.service.getCompletionsAtPosition(
      block.tsFileName,
      position,
      { ...options, triggerCharacter: '"' },
    )
    if (completions == null || completions.entries == null) return

    const kind = this.ts.lib.ScriptElementKind.jsxAttribute
    completions.entries = completions.entries
      .map((entry) => {
        if (directive.modifiers.includes(entry.name) || entry.name === '') {
          return null
        }

        return {
          ...entry,
          kind: kind,
          kindModifiers: 'directive',
          replacementSpan: replacementSpan,
          insertText: `.${entry.name}`,
        }
      })
      .filter(isNotNull)

    completions.optionalReplacementSpan = undefined

    return this.#cleanup(completions, {
      mode: 'all',
      attachAdditionalInfo: {
        type: TemplateContextType.DirectiveModifier,
        fileName: block.tsFileName,
        position: position,
      },
    })
  }

  #completionItemToEntry(
    file: VueBlockDocument | VueSFCDocument,
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
        if (isVueBlockDocument(file)) {
          return file.toFileOffset(file.source.offsetAt(position))
        }

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

  #toScriptElementKind(
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

  #scriptCompletionsAtPosition(
    _file: VueSFCDocument,
    block: VueBlockDocument,
    position: number,
    options: TypeScript.GetCompletionsAtPositionOptions | undefined,
  ): TypeScript.WithMetadata<TypeScript.CompletionInfo> | undefined {
    if (block.tsFileName == null) return undefined
    return this.#rebase(
      block,
      this.ts.service.getCompletionsAtPosition(
        block.tsFileName,
        block.toBlockOffset(position),
        options,
      ),
    )
  }

  #styleCompletionsAtPosition(
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

    return this.#rebase(
      block,
      this.#combine(
        result.items.map((item) => {
          return this.#completionItemToEntry(block, item)
        }),
      ),
    )
  }

  #customBlockCompletionsAtPosition(
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

    return this.#rebase(
      block,
      this.#combine(
        result.items.map((item) => {
          return this.#completionItemToEntry(block, item)
        }),
      ),
    )
  }

  #getCodeActionsFromCompletionItem(
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

  #rebase(
    doc: VueBlockDocument,
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
        if (this.fs.isVueVirtualFile(entry.source)) return 'Not a valid import'
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

function isVueBlockDocument(
  file: VueBlockDocument | VueSFCDocument,
): file is VueBlockDocument {
  return !isVueFile(file.fileName)
}
