import {
  getComponentName as baseGetComponentName,
  isNotNull,
  pascalCase,
} from '@vuedx/shared'
import {
  getContainingFile,
  INTERNAL_MODULE_SELECTOR,
  isVirtualFile,
  isVirtualFileOfType,
  isVueFile,
  MODULE_SELECTOR,
  parseVirtualFileName,
  RENDER_SELECTOR,
  VirtualTextDocument,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument'
import { ORIGINAL_LANGUAGE_SERVER } from '../constants'
import { PluginContext } from '../context'
import { wrapInTrace } from '../helpers/logger'
import { createServerHelper } from '../helpers/utils'
import { TS } from '../interfaces'
import {
  registerComponentAPI,
  registerLocalComponentWithSource,
} from '../transforms/registerLocalComponent'
import { LanguageServiceOptions } from '../types'
import { createVirtualLanguageServer } from './virtual'
import { createVueLanguageServer } from './vue'
export class RoutingLanguageServer {
  constructor(private readonly context: PluginContext) {}

  decorate(languageService: TS.LanguageService): TS.LanguageService {
    if (ORIGINAL_LANGUAGE_SERVER in languageService) {
      return languageService
    }

    const proxy = createLanguageServiceRouter({
      context: this.context,
      service: wrapInTrace('TypeScriptLanguageService', languageService),
      helpers: createServerHelper(this.context, languageService),
    })

    // @ts-expect-error 7053
    proxy[ORIGINAL_LANGUAGE_SERVER] = languageService

    return proxy
  }
}

function createLanguageServiceRouter(
  config: LanguageServiceOptions,
): TS.LanguageService {
  const vue = createVueLanguageServer(config)
  const virtual = createVirtualLanguageServer(config)
  const ts = config.service

  function choose(fileName: string | undefined): TS.LanguageService {
    if (fileName == null) return ts

    return fileName.startsWith('^vue:')
      ? virtual
      : isVueFile(fileName) || isVirtualFile(fileName)
      ? vue
      : ts
  }

  function getTextSpan(
    document: VirtualTextDocument,
    span: TS.TextSpan,
  ): TS.TextSpan | null {
    if (config.helpers.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start)
      if (result != null) {
        return {
          start: result.offset,
          length: Math.min(span.length, result.length),
        }
      }

      return null
    }

    return span
  }

  const VIRTUAL_FILE_SUFFIX_RE = new RegExp(
    `(?<=\\.vue)${VIRTUAL_FILENAME_SEPARATOR}([A-Za-z_][A-Za-z0-9_-]*)(\\.[jt]sx?)?`,
    'g',
  )

  function getComponentName(fileName?: string): string | undefined {
    if (fileName == null || !isVueFile(fileName)) return
    return baseGetComponentName(fileName)
  }

  const COMPONENT_TYPE_RE = /'ComponentPublicInstance<.*?ComponentOptionsBase<...>>'/g
  const REPLACE = {
    virtualFile: (messageText: string) =>
      messageText.replace(VIRTUAL_FILE_SUFFIX_RE, ''),
    componentType: (fileName: string | undefined, messageText: string) => {
      const component = getComponentName(fileName)
      return component != null
        ? messageText.replace(COMPONENT_TYPE_RE, `vue component '${component}'`)
        : messageText
    },
  }
  function applyReplacements(
    fileName: string | undefined,
    messageText: string,
  ): string
  function applyReplacements(
    fileName: string | undefined,
    messageText: TS.DiagnosticMessageChain,
  ): TS.DiagnosticMessageChain
  function applyReplacements(
    fileName: string | undefined,
    messageText: string | TS.DiagnosticMessageChain,
  ): string | TS.DiagnosticMessageChain
  function applyReplacements(
    fileName: string | undefined,
    messageText: string | TS.DiagnosticMessageChain,
  ): string | TS.DiagnosticMessageChain {
    if (typeof messageText === 'string') {
      return REPLACE.componentType(fileName, REPLACE.virtualFile(messageText))
    } else {
      messageText.messageText = applyReplacements(
        fileName,
        messageText.messageText,
      )

      return messageText
    }
  }

  function isVirtualSourceFile(file?: TS.SourceFile): file is TS.SourceFile {
    return file != null && isVirtualFile(file.fileName)
  }

  const proxy = wrapInTrace<TS.LanguageService>('LanguageRoutingService', {
    ...config.service,

    getSyntacticDiagnostics(fileName) {
      config.context.disposeUnusedProjects()

      return choose(fileName)
        .getSyntacticDiagnostics(fileName)
        .map(createDiagnosticProcessor(fileName))
        .filter(isNotNull)
    },

    getSemanticDiagnostics(fileName) {
      config.context.disposeUnusedProjects()

      return choose(fileName)
        .getSemanticDiagnostics(fileName)
        .map(createDiagnosticProcessor(fileName))
        .filter(isNotNull)
    },

    getSuggestionDiagnostics(fileName) {
      config.context.disposeUnusedProjects()

      return choose(fileName)
        .getSuggestionDiagnostics(fileName)
        .map(createDiagnosticProcessor(fileName))
        .filter(isNotNull)
    },

    getCompilerOptionsDiagnostics() {
      return ts.getCompilerOptionsDiagnostics()
    },

    getEncodedSemanticClassifications(fileName, span) {
      return ts.getEncodedSemanticClassifications(fileName, span)
    },

    getEncodedSyntacticClassifications(fileName, span) {
      return ts.getEncodedSyntacticClassifications(fileName, span)
    },

    getCompletionsAtPosition(fileName, position, options) {
      const completions = choose(fileName).getCompletionsAtPosition(
        fileName,
        position,
        options,
      )

      if (completions?.entries != null) {
        completions.entries = completions.entries.filter(
          /**
           * Remove all virtual entries expect completions originating
           * from "_module" virtual file.
           *
           * Rewrite `source` with the containing `.vue` file of the
           * "_module" virtual file.
           *
           * @see https://github.com/znck/vue-developer-experience/wiki/Virtual-File-System#module-virtual-file
           */
          (entry) => {
            if (entry.source != null && isVirtualFile(entry.source)) {
              if (isVirtualFileOfType(entry.source, '_module')) {
                entry.source = getContainingFile(entry.source)
                return true
              } else {
                return false
              }
            }

            return true
          },
        )
      }

      return completions
    },

    getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    ) {
      let details: TS.CompletionEntryDetails | undefined

      /**
       * If source is a `.vue` file then the completion is:
       *
       * 1. default export or component
       * 2. named export
       *
       * A `.vue` file is always referenced with the "_module"
       * virtual file in TypeScript language service. So we
       * rewrite source to correct value.
       *
       * @see https://github.com/znck/vue-developer-experience/wiki/Virtual-File-System#module-virtual-file
       */
      if (source != null && isVueFile(source)) {
        let newSource = source

        // -> Rewrite source to _module virtual file.
        newSource = source + VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR

        details = choose(fileName).getCompletionEntryDetails(
          fileName,
          position,
          entryName,
          formatOptions,
          newSource,
          preferences,
        )
      } else {
        details = choose(fileName).getCompletionEntryDetails(
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )
      }

      if (isVueFile(fileName)) {
        details?.codeActions?.forEach((codeAction) => {
          codeAction.changes.forEach((change) => {
            if (isVirtualFileOfType(change.fileName, RENDER_SELECTOR)) {
              const document = config.helpers.getVueDocument(change.fileName)
              if (change.textChanges.length > 0 && document != null) {
                const block =
                  document.descriptor.scriptSetup ?? document.descriptor.script

                if (block == null) {
                  const project = config.context.getVueProjectForFile(
                    fileName,
                    true,
                  )
                  change.textChanges = registerLocalComponentWithSource(
                    document,
                    config.helpers.getComponentInfo(document),
                    { localName: pascalCase(entryName) },
                    project.config.preferences.script,
                    change.textChanges[0].newText,
                  )
                } else {
                  change.textChanges.forEach((textChange) => {
                    // We need to rewrite import statement to start of script block of .vue file
                    if (block != null) {
                      // Add import statement to start of <script> or <script setup> block
                      textChange.span.start = block.loc.start.offset + 1
                    }
                  })

                  change.textChanges = [
                    ...change.textChanges,
                    ...registerComponentAPI(
                      document,
                      config.helpers.getComponentInfo(document),
                      'components',
                      pascalCase(entryName),
                      pascalCase(entryName),
                    ).changes,
                  ]
                }
              }
            } else if (isVirtualFile(change.fileName)) {
              // rewrite position to start of the block.
              if (change.textChanges.length > 0) {
                const document = config.helpers.getDocument(change.fileName)
                if (document instanceof VirtualTextDocument) {
                  const block = document.container.getBlock(
                    document.selector as any,
                  )

                  if (block != null) {
                    const start = Math.min(
                      block.loc.start.offset + 1,
                      block.loc.end.offset,
                    )
                    const end = block.loc.end.offset

                    change.textChanges.forEach((textChange) => {
                      textChange.span.start = Math.min(
                        Math.max(start, textChange.span.start),
                        end,
                      )
                    })
                  }
                }
              }
            }
          })
        })
      }

      details?.codeActions?.forEach((codeAction) => {
        codeAction.description = codeAction.description.replace(
          VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
          '',
        )

        codeAction.changes.forEach((change) => {
          change.textChanges.forEach((textChange) => {
            textChange.newText = textChange.newText.replace(
              VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
              '',
            )
          })

          if (isVirtualFile(change.fileName)) {
            change.fileName = getContainingFile(change.fileName)
          }
        })
      })

      details?.source?.forEach((item) => {
        if (isVirtualFile(item.text)) {
          item.text = getContainingFile(item.text)
        }
      })

      return details
    },

    getCompletionEntrySymbol(fileName, position, name, source) {
      return choose(fileName).getCompletionEntrySymbol(
        fileName,
        position,
        name,
        source,
      )
    },

    getQuickInfoAtPosition(fileName, position) {
      const info = choose(fileName).getQuickInfoAtPosition(fileName, position)

      if (info?.displayParts != null) {
        info.displayParts = info.displayParts
          .map((part) => {
            part.text = applyReplacements(fileName, part.text)

            return part
          })
          .filter(isNotNull)
      }

      if (info?.documentation != null) {
        info.documentation = info.documentation
          .map((part) => {
            part.text = applyReplacements(fileName, part.text)

            return part
          })
          .filter(isNotNull)
      }

      return info
    },

    getNameOrDottedNameSpan(fileName, startPos, endPos) {
      return choose(fileName).getNameOrDottedNameSpan(
        fileName,
        startPos,
        endPos,
      )
    },

    getBreakpointStatementAtPosition(fileName, position) {
      return choose(fileName).getBreakpointStatementAtPosition(
        fileName,
        position,
      )
    },

    getSignatureHelpItems(fileName, position, options) {
      return choose(fileName).getSignatureHelpItems(fileName, position, options)
    },

    getRenameInfo(fileName, position, options) {
      const result = choose(fileName).getRenameInfo(fileName, position, options)

      if (result.canRename) {
        if (result.fileToRename != null && isVirtualFile(result.fileToRename)) {
          result.fileToRename = getContainingFile(result.fileToRename)
        }

        result.displayName = REPLACE.virtualFile(result.displayName)
        result.fullDisplayName = REPLACE.virtualFile(result.fullDisplayName)

        if (
          result.kind ===
            config.context.typescript.ScriptElementKind.moduleElement &&
          result.displayName.endsWith('.vue')
        ) {
          result.triggerSpan.length -= 4
        }
      }

      return result
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      const result = choose(fileName)
        .findRenameLocations(fileName, position, findInStrings, findInComments)
        ?.map((item) => {
          if (isVirtualFile(item.fileName)) {
            const virtual = config.helpers.getDocument(
              item.fileName,
            ) as VirtualTextDocument

            item.fileName = virtual.container.fsPath
            const textSpan = getTextSpan(virtual, item.textSpan)
            if (textSpan == null) return

            item.textSpan = textSpan
            if (item.contextSpan != null) {
              const contextSpan = getTextSpan(virtual, item.contextSpan)
              if (contextSpan == null) return

              item.contextSpan = contextSpan
            }
          }

          return item
        })
        .filter(isNotNull)

      return result
    },

    getSmartSelectionRange(fileName, position) {
      return choose(fileName).getSmartSelectionRange(fileName, position)
    },

    getDefinitionAtPosition(
      fileName: string,
      position: number,
    ): readonly TS.DefinitionInfo[] | undefined {
      const result = choose(fileName).getDefinitionAtPosition(
        fileName,
        position,
      )

      if (result != null) {
        result.forEach((definitionInfo) => {
          if (isVirtualFile(definitionInfo.fileName)) {
            definitionInfo.fileName = getContainingFile(definitionInfo.fileName)
            definitionInfo.name = applyReplacements(
              definitionInfo.fileName,
              definitionInfo.name,
            )
          }
        })
      }

      return result
    },

    getDefinitionAndBoundSpan(
      fileName: string,
      position: number,
    ): TS.DefinitionInfoAndBoundSpan | undefined {
      const result = choose(fileName).getDefinitionAndBoundSpan(
        fileName,
        position,
      )

      if (result?.definitions != null) {
        result.definitions.forEach((definition) => {
          if (isVirtualFile(definition.fileName)) {
            if (config.helpers.isVueModuleFileName(definition.fileName)) {
              const document = config.helpers.getVueDocument(
                definition.fileName,
              )
              if (document?.descriptor != null) {
                const script =
                  document.descriptor.scriptSetup ?? document.descriptor.script

                if (script != null) {
                  // TODO: resolve to export default in <script> or <script setup>
                  definition.name = baseGetComponentName(document.fsPath)

                  const info = config.helpers.getComponentInfo(document)

                  definition.textSpan = definition.contextSpan = {
                    start: script.loc.start.offset,
                    length: script.loc.end.offset - script.loc.start.offset,
                  }

                  if (info.options?.loc != null) {
                    definition.textSpan = {
                      start: info.options.loc.start.offset,
                      length:
                        info.options.loc.end.offset -
                        info.options.loc.start.offset +
                        1,
                    }
                  }
                }
              }
            }

            definition.fileName = getContainingFile(definition.fileName)
          }
        })
      }

      return result
    },

    getTypeDefinitionAtPosition(fileName, position) {
      return choose(fileName).getTypeDefinitionAtPosition(fileName, position)
    },

    getImplementationAtPosition(fileName, position) {
      return choose(fileName).getImplementationAtPosition(fileName, position)
    },

    getReferencesAtPosition(fileName, position) {
      return choose(fileName).getReferencesAtPosition(fileName, position)
    },

    findReferences(fileName, position) {
      return choose(fileName).findReferences(fileName, position)
    },

    getDocumentHighlights(
      fileName: string,
      position: number,
      filesToSearch: string[],
    ): TS.DocumentHighlights[] {
      const result = choose(fileName).getDocumentHighlights(
        fileName,
        position,
        filesToSearch,
      )

      if (result != null) {
        result.forEach((highlights) => {
          if (isVirtualFile(fileName)) {
            highlights.fileName = getContainingFile(highlights.fileName)
            highlights.highlightSpans.forEach((span) => {
              if (span.fileName != null && isVirtualFile(span.fileName)) {
                span.fileName = getContainingFile(span.fileName)
              }
            })
          }
        })
      }

      return result ?? []
    },

    getNavigateToItems(searchValue, maxResultCount, fileName, excludeDtsFiles) {
      return choose(fileName).getNavigateToItems(
        searchValue,
        maxResultCount,
        fileName,
        excludeDtsFiles,
      )
    },

    getNavigationBarItems(fileName) {
      return choose(fileName).getNavigationBarItems(fileName)
    },

    getNavigationTree(fileName) {
      return choose(fileName).getNavigationTree(fileName)
    },

    prepareCallHierarchy(fileName, position) {
      return choose(fileName).prepareCallHierarchy(fileName, position)
    },

    provideCallHierarchyIncomingCalls(fileName, position) {
      return choose(fileName).provideCallHierarchyIncomingCalls(
        fileName,
        position,
      )
    },

    provideCallHierarchyOutgoingCalls(fileName, position) {
      return choose(fileName).provideCallHierarchyOutgoingCalls(
        fileName,
        position,
      )
    },

    getOutliningSpans(fileName) {
      return choose(fileName).getOutliningSpans(fileName)
    },

    getTodoComments(fileName, descriptors) {
      return choose(fileName).getTodoComments(fileName, descriptors)
    },

    getBraceMatchingAtPosition(fileName, position) {
      return choose(fileName).getBraceMatchingAtPosition(fileName, position)
    },

    getIndentationAtPosition(fileName, position, options) {
      return choose(fileName).getIndentationAtPosition(
        fileName,
        position,
        options,
      )
    },

    getFormattingEditsForRange(fileName, start, end, options) {
      return choose(fileName).getFormattingEditsForRange(
        fileName,
        start,
        end,
        options,
      )
    },

    getFormattingEditsForDocument(fileName, options) {
      return choose(fileName).getFormattingEditsForDocument(fileName, options)
    },

    getFormattingEditsAfterKeystroke(fileName, position, key, options) {
      return choose(fileName).getFormattingEditsAfterKeystroke(
        fileName,
        position,
        key,
        options,
      )
    },

    getDocCommentTemplateAtPosition(fileName, position) {
      return choose(fileName).getDocCommentTemplateAtPosition(
        fileName,
        position,
      )
    },

    isValidBraceCompletionAtPosition(fileName, position, openingBrace) {
      return choose(fileName).isValidBraceCompletionAtPosition(
        fileName,
        position,
        openingBrace,
      )
    },

    getJsxClosingTagAtPosition(fileName, position) {
      return choose(fileName).getJsxClosingTagAtPosition(fileName, position)
    },

    getSpanOfEnclosingComment(fileName, position, onlyMultiLine) {
      return choose(fileName).getSpanOfEnclosingComment(
        fileName,
        position,
        onlyMultiLine,
      )
    },

    toLineColumnOffset(fileName, position) {
      return config.service.toLineColumnOffset != null
        ? config.service.toLineColumnOffset(fileName, position)
        : { line: 0, character: 0 }
    },

    getCodeFixesAtPosition(
      fileName: string,
      start: number,
      end: number,
      errorCodes: number[],
      formatOptions: TS.FormatCodeOptions,
      preferences: TS.UserPreferences,
    ): readonly TS.CodeFixAction[] {
      return choose(fileName)
        .getCodeFixesAtPosition(
          fileName,
          start,
          end,
          errorCodes,
          formatOptions,
          preferences,
        )
        .filter((fix) => {
          if (
            fix.fixName === 'import' &&
            fix.description.includes(VIRTUAL_FILENAME_SEPARATOR)
          ) {
            return fix.description.includes(
              VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
            )
          }
          return true
        })
        .map((fix) => {
          if (fix.fixName === 'import') {
            fix.description = fix.description.replace(
              VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
              '',
            )

            fix.changes.forEach((change) => {
              change.textChanges.forEach((textChange) => {
                textChange.newText = textChange.newText.replace(
                  VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
                  '',
                )
              })
            })
          }

          fix.changes.forEach((change) => {
            if (isVirtualFile(change.fileName)) {
              const document = config.helpers.getVueDocument(change.fileName)
              const fileNameInfo = parseVirtualFileName(change.fileName)
              change.fileName = getContainingFile(change.fileName)
              if (document != null && fileNameInfo != null) {
                const block = document.getBlock(fileNameInfo.selector as any)
                if (block != null) {
                  change.textChanges.forEach((textChange) => {
                    if (textChange.span.start < block.loc.start.offset) {
                      // Put at beginning of the block.
                      textChange.span.start = block.loc.start.offset + 1
                    }
                  })
                }
              }
            }
          })

          return fix
        })
    },

    getCombinedCodeFix(scope, fixId, formatOptions, preferences) {
      return config.service.getCombinedCodeFix(
        scope,
        fixId,
        formatOptions,
        preferences,
      )
    },

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      return choose(fileName).getApplicableRefactors(
        fileName,
        positionOrRange,
        preferences,
      )
    },

    getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences,
    ) {
      const result = choose(fileName).getEditsForRefactor(
        fileName,
        formatOptions,
        positionOrRange,
        refactorName,
        actionName,
        preferences,
      )

      if (result != null) {
        result.edits = result.edits.filter((edit) => {
          if (isVirtualFile(edit.fileName)) {
            const info = parseVirtualFileName(edit.fileName)
            edit.fileName = getContainingFile(edit.fileName)

            return ['script', 'scriptSetup'].includes(info?.selector.type ?? '')
          } else {
            return true
          }
        })

        result.edits = mergeFileTextChanges(result.edits)
      }

      return result
    },

    organizeImports(scope, formatOptions, preferences) {
      return choose(scope.fileName)
        .organizeImports(scope, formatOptions, preferences)
        .map((change) => {
          if (isVirtualFile(change.fileName))
            change.fileName = getContainingFile(change.fileName)

          return change
        })
    },

    getEditsForFileRename(
      oldFilePath: string,
      newFilePath: string,
      formatOptions: TS.FormatCodeOptions,
      preferences: TS.UserPreferences,
    ): readonly TS.FileTextChanges[] {
      const suffix = '.vue' + VIRTUAL_FILENAME_SEPARATOR + '_module'
      const edits = choose(oldFilePath)
        .getEditsForFileRename(
          oldFilePath,
          newFilePath,
          formatOptions,
          preferences,
        )
        .map((edit) => {
          if (isVirtualFile(edit.fileName)) {
            const result = parseVirtualFileName(edit.fileName)
            if (result == null) return
            if (!['script', 'scriptSetup'].includes(result.selector.type))
              return

            edit.fileName = getContainingFile(edit.fileName)
          }

          edit.textChanges = edit.textChanges
            .map((change) => {
              const index = change.newText.indexOf(suffix)

              if (index >= 0) {
                change.newText =
                  change.newText.substr(0, index + 4) +
                  change.newText.substr(index + suffix.length)
              }

              return change
            })
            .filter(isNotNull)

          if (edit.textChanges.length === 0) return

          return edit
        })
        .filter(isNotNull)

      return mergeFileTextChanges(edits)
    },

    toggleLineComment(fileName, textRange) {
      return choose(fileName).toggleLineComment(fileName, textRange)
    },

    toggleMultilineComment(fileName, textRange) {
      return choose(fileName).toggleMultilineComment(fileName, textRange)
    },

    commentSelection(fileName, textRange) {
      return choose(fileName).commentSelection(fileName, textRange)
    },

    uncommentSelection(fileName, textRange) {
      return choose(fileName).uncommentSelection(fileName, textRange)
    },

    dispose() {
      config.context.disposeUnusedProjects(true)
      ts.dispose()
    },
  })

  return proxy

  function createDiagnosticProcessor<T extends TS.Diagnostic>(
    fileName: string,
  ): (diagnostic: T) => T {
    return (item) => {
      const diagnostic: T = { ...item } // TS service reuses diagnostics so avoid mutating

      if (
        isVirtualSourceFile(diagnostic.file) &&
        diagnostic.file.fileName !== fileName
      ) {
        diagnostic.file =
          config.helpers.getSourceFile(fileName, ts) ??
          Object.assign(
            Object.create(Object.getPrototypeOf(diagnostic.file)),
            diagnostic.file,
            { fileName },
          )
      }

      diagnostic.messageText = applyReplacements(
        fileName,
        diagnostic.messageText,
      )

      if (diagnostic.relatedInformation != null) {
        diagnostic.relatedInformation = diagnostic.relatedInformation
          .map((info) => {
            const relatedInformation = { ...info }

            relatedInformation.messageText = applyReplacements(
              fileName,
              relatedInformation.messageText,
            )
            if (
              relatedInformation.file != null &&
              isVirtualFile(relatedInformation.file.fileName)
            ) {
              if (
                isVirtualFileOfType(
                  relatedInformation.file.fileName,
                  MODULE_SELECTOR,
                ) ||
                isVirtualFileOfType(
                  relatedInformation.file.fileName,
                  INTERNAL_MODULE_SELECTOR,
                )
              ) {
                return null
              }

              relatedInformation.file =
                config.helpers.getSourceFile(
                  getContainingFile(relatedInformation.file.fileName),
                  ts,
                ) ??
                Object.assign(
                  Object.create(Object.getPrototypeOf(diagnostic.file)),
                  diagnostic.file,
                  {
                    fileName: getContainingFile(
                      relatedInformation.file.fileName,
                    ),
                  },
                )
            }

            return relatedInformation
          })
          .filter(isNotNull)
      }

      return diagnostic
    }
  }
}

function mergeFileTextChanges(
  edits: TS.FileTextChanges[],
): TS.FileTextChanges[] {
  const editsByFileName: Record<string, TS.FileTextChanges> = {}

  edits.forEach((edit) => {
    if (!(edit.fileName in editsByFileName)) {
      editsByFileName[edit.fileName] = {
        fileName: edit.fileName,
        textChanges: [],
      }
    }
    const currentEdit = editsByFileName[edit.fileName]

    currentEdit.textChanges = combineTextChanges(
      currentEdit.textChanges,
      edit.textChanges,
    )
    if (edit.isNewFile != null) {
      const value = currentEdit.isNewFile
      currentEdit.isNewFile =
        value == null ? edit.isNewFile : value || edit.isNewFile
    }
  })

  return Array.from(Object.values(editsByFileName))
}

function combineTextChanges(
  changes: readonly TS.TextChange[],
  newChanges: readonly TS.TextChange[],
): TS.TextChange[] {
  const finalChanges = changes.slice()
  const ids = new Set(changes.map(serializeTextChange))

  newChanges.forEach((change) => {
    const id = serializeTextChange(change)

    if (!ids.has(id)) {
      ids.add(id)
      finalChanges.push(change)
    }
  })

  finalChanges.sort((a, b) => a.span.start - b.span.start)

  return finalChanges
}

function serializeTextChange(change: TS.TextChange): string {
  return JSON.stringify([change.span.start, change.span.length, change.newText])
}
