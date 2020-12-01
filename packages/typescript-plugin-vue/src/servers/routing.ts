import {
  getContainingFile,
  isVirtualFile,
  isVirtualFileOfType,
  isVueFile,
  MODULE_SELECTOR,
  parseVirtualFileName,
  VirtualTextDocument,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument'
import { PluginContext } from '../context'
import { wrapInTrace } from '../helpers/logger'
import {
  createServerHelper,
  getComponentName as baseGetComponentName,
  isNotNull,
} from '../helpers/utils'
import { TS } from '../interfaces'
import { registerLocalComponent } from '../transforms/registerLocalComponent'
import { LanguageServiceOptions } from '../types'
import { createVirtualLanguageServer } from './virtual'
import { createVueLanguageServer } from './vue'
const VUE_LANGUAGE_SERVER = Symbol('Vue Language Server')

export class RoutingLanguageServer {
  constructor(private readonly context: PluginContext) {}

  decorate(languageService: TS.LanguageService): TS.LanguageService {
    if (VUE_LANGUAGE_SERVER in languageService) {
      return languageService
    }

    const proxy = createLanguageServiceRouter({
      context: this.context,
      service: languageService,
      helpers: createServerHelper(this.context, languageService),
    })

    // @ts-expect-error
    proxy[VUE_LANGUAGE_SERVER] = true

    return proxy
  }
}

function createLanguageServiceRouter(
  config: LanguageServiceOptions,
): TS.LanguageService {
  const vue = createVueLanguageServer(config)
  const virtual = createVirtualLanguageServer(config)
  const ts = config.service

  function choose(fileName: string): TS.LanguageService {
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
      if (result != null) return { start: result.offset, length: result.length }

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

  const proxy: Partial<TS.LanguageService> = wrapInTrace(
    'RoutingLanguageServer',
    {
      ...config.service,
      dispose() {
        config.context.disposeUnusedProjects(true)
        config.service.dispose()
      },
      getCombinedCodeFix(scope, fixId, formatOptions, preferences) {
        return config.service.getCombinedCodeFix(
          scope,
          fixId,
          formatOptions,
          preferences,
        )
      },
      getProgram() {
        return config.service.getProgram()
      },

      toLineColumnOffset(fileName, position) {
        return config.service.toLineColumnOffset != null
          ? config.service.toLineColumnOffset(fileName, position)
          : { line: 0, character: 0 }
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

      getSemanticDiagnostics(fileName) {
        config.context.disposeUnusedProjects()

        const diagnostics = choose(fileName).getSemanticDiagnostics(fileName)

        return diagnostics
          .map((diagnostic) => {
            if (isVirtualSourceFile(diagnostic.file)) {
              diagnostic.file = {
                ...diagnostic.file,
                fileName: getContainingFile(diagnostic.file.fileName),
              }
            }

            diagnostic.messageText = applyReplacements(
              fileName,
              diagnostic.messageText,
            )

            if (diagnostic.relatedInformation != null) {
              diagnostic.relatedInformation = diagnostic.relatedInformation.map(
                (info) => {
                  info.messageText = applyReplacements(
                    fileName,
                    info.messageText,
                  )

                  if (info.file != null && isVirtualFile(info.file.fileName)) {
                    info.file = {
                      ...info.file,
                      fileName: getContainingFile(info.file.fileName),
                    }
                  }

                  return info
                },
              )
            }

            return diagnostic
          })
          .filter(isNotNull)
      },

      getSyntacticDiagnostics(fileName) {
        const diagnostics = choose(fileName).getSyntacticDiagnostics(fileName)

        return diagnostics
          .map((diagnostic) => {
            diagnostic.messageText = applyReplacements(
              fileName,
              diagnostic.messageText,
            )

            if (diagnostic.relatedInformation != null) {
              diagnostic.relatedInformation = diagnostic.relatedInformation.map(
                (info) => {
                  info.messageText = applyReplacements(
                    fileName,
                    info.messageText,
                  )

                  if (info.file != null && isVirtualFile(info.file.fileName)) {
                    info.file = {
                      ...info.file,
                      fileName: getContainingFile(info.file.fileName),
                    }
                  }

                  return info
                },
              )
            }

            return diagnostic
          })
          .filter(isNotNull)
      },

      getCompletionsAtPosition(fileName, position, options) {
        const completions = choose(fileName).getCompletionsAtPosition(
          fileName,
          position,
          options,
        )

        if (completions?.entries != null) {
          completions.entries = completions.entries
            .filter((entry) => {
              if (entry.source != null && isVirtualFile(entry.source)) {
                return isVirtualFileOfType(entry.source, '_module')
              }

              return true
            })
            .map((entry) => {
              if (entry.source != null && isVirtualFile(entry.source)) {
                entry.source = getContainingFile(entry.source)
              }

              return entry
            })
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
        if (source != null && isVueFile(source)) {
          // -> Importing from a .vue file
          let newSource = source
          const componentName = baseGetComponentName(source)

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

          const isComponentImport = entryName === componentName

          if (isComponentImport) {
            const documentAtCursor = config.helpers.getDocumentAt(
              fileName,
              position,
            )
            details?.codeActions?.forEach((codeAction) => {
              codeAction.description = codeAction.description.replace(
                VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
                '',
              )

              codeAction.changes.forEach((change) => {
                const document = config.helpers.getVueDocument(change.fileName)
                if (
                  document != null &&
                  config.helpers.isRenderFunctionDocument(documentAtCursor)
                ) {
                  change.textChanges.forEach((textChange) => {
                    // We need to rewrite import statement to start of script block of .vue file.
                    const block =
                      document.descriptor.scriptSetup ??
                      document.descriptor.script

                    if (block != null) {
                      // Add import statement to start of <script> or <script setup> block
                      textChange.span.start = block.loc.start.offset + 1
                    } else {
                      textChange.span.start = 0
                      textChange.newText = [
                        `<script>`,
                        `import { defineComponent } from 'vue'`,
                        textChange.newText,
                        `export default defineComponent({`,
                        `  components: { ${entryName} }`,
                        `})`,
                        `</script>\n\n`,
                      ].join('\n')
                    }
                  })
                  change.textChanges = [
                    ...change.textChanges,
                    ...registerLocalComponent(
                      document,
                      config.helpers.getComponentInfo(document),
                      entryName,
                    ),
                  ]
                }
              })
            })
          }
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

        details?.codeActions?.forEach((codeAction) => {
          codeAction.changes.forEach((change) => {
            if (isVirtualFile(change.fileName)) {
              change.fileName = getContainingFile(change.fileName)
            }

            change.textChanges.forEach((textChange) => {
              textChange.newText = textChange.newText.replace(
                VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR,
                '',
              )
            })
          })
        })

        details?.source?.forEach((item) => {
          if (isVirtualFile(item.text)) {
            item.text = getContainingFile(item.text)
          }
        })

        return details
      },

      getSignatureHelpItems(fileName, position, options) {
        return choose(fileName).getSignatureHelpItems(
          fileName,
          position,
          options,
        )
      },

      getSuggestionDiagnostics(fileName) {
        const diagnostics = choose(fileName).getSuggestionDiagnostics(fileName)

        return diagnostics
          .map((diagnostic) => {
            diagnostic.messageText = applyReplacements(
              fileName,
              diagnostic.messageText,
            )

            if (diagnostic.relatedInformation != null) {
              diagnostic.relatedInformation = diagnostic.relatedInformation.map(
                (info) => {
                  info.messageText = applyReplacements(
                    fileName,
                    info.messageText,
                  )
                  if (info.file != null && isVirtualFile(info.file.fileName)) {
                    info.file = {
                      ...info.file,
                      fileName: getContainingFile(info.file.fileName),
                    }
                  }

                  return info
                },
              )
            }

            return diagnostic
          })
          .filter(isNotNull)
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

      getRenameInfo(fileName, position, options) {
        const result = choose(fileName).getRenameInfo(
          fileName,
          position,
          options,
        )

        if (result.canRename) {
          if (
            result.fileToRename != null &&
            isVirtualFile(result.fileToRename)
          ) {
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
          .findRenameLocations(
            fileName,
            position,
            findInStrings,
            findInComments,
          )
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

      getEditsForFileRename(
        oldFilePath: string,
        newFilePath: string,
        formatOptions: TS.FormatCodeOptions,
        preferences: TS.UserPreferences,
      ): readonly TS.FileTextChanges[] {
        const suffix = '.vue' + VIRTUAL_FILENAME_SEPARATOR + '_module'
        return choose(oldFilePath)
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

        const editsByFileName: Record<
          string,
          {
            fileName: string
            isNewFile?: boolean
            textChanges: TS.TextChange[]
          }
        > = {}

        if (result != null) {
          result.edits = result.edits.filter((edit) => {
            if (isVirtualFile(edit.fileName) || isVueFile(edit.fileName)) {
              edit.fileName = getContainingFile(edit.fileName)

              if (!(edit.fileName in editsByFileName)) {
                editsByFileName[edit.fileName] = {
                  isNewFile: false,
                  fileName: edit.fileName,
                  textChanges: [],
                }
              }
              editsByFileName[edit.fileName].textChanges.push(
                ...edit.textChanges,
              )
              editsByFileName[edit.fileName].isNewFile =
                editsByFileName[edit.fileName].isNewFile ??
                edit.isNewFile === true

              return false
            }

            return true
          })

          result.edits.push(
            ...Object.values<TS.FileTextChanges>(editsByFileName),
          )
        }

        config.context.log(JSON.stringify(result, null, 2))
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
                    document.descriptor.scriptSetup ??
                    document.descriptor.script

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
              definitionInfo.fileName = getContainingFile(
                definitionInfo.fileName,
              )
              definitionInfo.name = applyReplacements(
                definitionInfo.fileName,
                definitionInfo.name,
              )
            }
          })
        }

        return result
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
    },
  )

  return proxy as any
}
