import {
  isVirtualFile,
  isVueFile,
  VirtualTextDocument,
  getContainingFile,
  parseVirtualFileName,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument'
import { PluginContext } from '../context'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { createServerHelper, isNotNull } from '../helpers/utils'
import { createVueLanguageServer } from './vue'
import Path from 'path'
import { wrapInTrace } from '../helpers/logger'
const VUE_LANGUAGE_SERVER = Symbol('Vue Language Server')

export class RoutingLanguageServer {
  constructor(private context: PluginContext) {}

  decorate(languageService: TS.LanguageService) {
    if (VUE_LANGUAGE_SERVER in languageService) {
      return languageService
    }

    const proxy = createLanguageServiceRouter({
      context: this.context,
      service: languageService,
      helpers: createServerHelper(this.context, languageService),
    })

    // @ts-ignore
    proxy[VUE_LANGUAGE_SERVER] = true

    return proxy
  }
}

function createLanguageServiceRouter(
  config: LanguageServiceOptions,
): TS.LanguageService {
  const vue = createVueLanguageServer(config)
  const ts = config.service

  function choose(fileName: string) {
    return isVueFile(fileName) ? vue : ts
  }

  function getTextSpan(
    document: VirtualTextDocument,
    span: TS.TextSpan,
  ): TS.TextSpan | null {
    if (config.helpers.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start)
      if (result) return { start: result.offset, length: result.length }

      return null
    }

    return span
  }

  const VIRTUAL_FILE_SUFFIX_RE = new RegExp(
    `(?<=\.vue)${VIRTUAL_FILENAME_SEPARATOR}([A-Za-z_][A-Za-z0-9_-]*)(\\.[jt]sx?)?`,
    'g',
  )

  function getComponentName(fileName?: string) {
    if (!fileName || !isVueFile(fileName)) return
    const baseName = Path.basename(fileName)

    return baseName.substr(0, baseName.length - 4)
  }
  const COMPONENT_TYPE_RE = /'ComponentPublicInstance<.*?ComponentOptionsBase<...>>'/g
  const REPLACE = {
    virtualFile: (messageText: string) =>
      messageText.replace(VIRTUAL_FILE_SUFFIX_RE, ''),
    componentType: (fileName: string | undefined, messageText: string) => {
      const component = getComponentName(fileName)
      return component
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
    return !!file && isVirtualFile(file.fileName)
  }

  const proxy: Partial<TS.LanguageService> = wrapInTrace(
    'RoutingLanguageServer',
    {
      ...config.service,
      dispose() {
        // TODO: Clear Vue files in memory.
        config.service.dispose()
      },
      cleanupSemanticCache() {
        config.service.cleanupSemanticCache()
      },
      getCompilerOptionsDiagnostics() {
        return config.service.getCompilerOptionsDiagnostics()
      },
      getSyntacticClassifications(fileName, span) {
        return config.service.getSyntacticClassifications(fileName, span)
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
        return config.service.toLineColumnOffset
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

        if (info?.displayParts) {
          info.displayParts = info.displayParts
            .map((part) => {
              part.text = applyReplacements(fileName, part.text)

              return part
            })
            .filter(isNotNull)
        }

        if (info?.documentation) {
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

            if (diagnostic.relatedInformation) {
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

            if (diagnostic.relatedInformation) {
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

        if (completions?.entries) {
          completions.entries = completions.entries
            .filter(
              (x) => !x.name.endsWith(`${VIRTUAL_FILENAME_SEPARATOR}module`),
            )
            .map((x) => {
              if (x.source && isVirtualFile(x.source)) {
                x.name = getContainingFile(x.name).slice(0, -3) // remove vue
                x.source = getContainingFile(x.source!)
              }
              return x
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
        const isVirtual = source && isVueFile(source!)
        // rename to valid files
        if (isVirtual) {
          entryName = `${entryName}Vue${VIRTUAL_FILENAME_SEPARATOR}script`
          source = `${source}${VIRTUAL_FILENAME_SEPARATOR}script`
        }

        const details = choose(fileName).getCompletionEntryDetails(
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )

        if (details) {
          if (isVirtual) {
            details.name = getContainingFile(details.name).slice(0, -3)

            if (details.source) {
              // fix the import name
              details.source.forEach((x) => {
                x.text = getContainingFile(x.text)
              })
            }
          }

          if (details.codeActions) {
            details.codeActions.forEach((x) => {
              // rename ``Import default 'HPageVue________script' from module "../ui/HPage.vue________script"`
              // to `Import default 'HPage' from module "../ui/HPage.vue"`
              x.description = x.description
                .replace(`Vue${VIRTUAL_FILENAME_SEPARATOR}script`, '')
                .replace(`${VIRTUAL_FILENAME_SEPARATOR}script`, '')

              x.changes.forEach((c) => {
                // fix the import file
                c.fileName = getContainingFile(c.fileName)

                c.textChanges.forEach((t) => {
                  t.newText = t.newText
                    .replace(`Vue${VIRTUAL_FILENAME_SEPARATOR}script`, '')
                    .replace(`${VIRTUAL_FILENAME_SEPARATOR}script`, '')
                })
              })
            })
          }
        }
        return details
      },

      getSuggestionDiagnostics(fileName) {
        const diagnostics = choose(fileName).getSuggestionDiagnostics(fileName)

        return diagnostics
          .map((diagnostic) => {
            diagnostic.messageText = applyReplacements(
              fileName,
              diagnostic.messageText,
            )

            if (diagnostic.relatedInformation) {
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
        return choose(fileName).getCodeFixesAtPosition(
          fileName,
          start,
          end,
          errorCodes,
          formatOptions,
          preferences,
        )
      },

      getRenameInfo(fileName, position, options) {
        const result = choose(fileName).getRenameInfo(
          fileName,
          position,
          options,
        )

        if (result.canRename) {
          if (result.fileToRename && isVirtualFile(result.fileToRename)) {
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
              if (item.contextSpan) {
                const contextSpan = getTextSpan(virtual, item.contextSpan)
                if (contextSpan == null) return

                item.contextSpan = contextSpan
              }
            }

            return item
          })
          .filter(isNotNull)

        config.context.log(JSON.stringify(result))

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

            if (!edit.textChanges.length) return

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

        if (result) {
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
                editsByFileName[edit.fileName].isNewFile ||
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

        if (result?.definitions) {
          result.definitions.forEach((definition) => {
            if (isVirtualFile(definition.fileName)) {
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
