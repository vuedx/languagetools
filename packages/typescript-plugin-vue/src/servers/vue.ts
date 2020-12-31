import {
  isSimpleExpressionNode,
  isSimpleIdentifier,
  traverseEvery,
} from '@vuedx/template-ast-types'
import {
  INTERNAL_MODULE_SELECTOR,
  isVirtualFile,
  isVueFile,
  MODULE_SELECTOR,
  RENDER_SELECTOR,
  SCRIPT_BLOCK_SELECTOR,
  SCRIPT_SETUP_BLOCK_SELECTOR,
  VirtualTextDocument,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument'
import { SFCCompletionService } from '../features/completions/SFCCompletionProvider'
import { SCRIPT_REFACTOR_PROVIDERS } from '../features/refactors'
import { REFACTORS } from '../features/refactors/abstract'
import { getChangesForComponentTagRename } from '../features/renames/component-tag'
import { wrapInTrace } from '../helpers/logger'
import { isSpanInSourceRange } from '../helpers/utils'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'
import { createTemplateLanguageServer } from './template'
const IGNORED_SELECTORS = new Set([MODULE_SELECTOR, INTERNAL_MODULE_SELECTOR])
export function createVueLanguageServer(
  options: LanguageServiceOptions,
): TS.LanguageService {
  const template = createTemplateLanguageServer(options)
  const { helpers: h, service, context } = options
  const script = wrapInTrace('ScriptLanguageServer', service)
  const completionProvider = new SFCCompletionService(options)

  function choose(
    document: VirtualTextDocument,
    isSyntaxOnly: boolean = false,
  ): TS.LanguageService {
    if (h.isRenderFunctionDocument(document)) {
      return template
    }

    return isSyntaxOnly
      ? script
      : h.getLanguageServiceFor(document.fsPath, script)
  }

  function isSupportLanguage(lang: string): boolean {
    return /^(javascript|typescript|javascriptreact|typescriptreact)$/i.test(
      lang,
    )
  }

  return wrapInTrace('VueLanguageServer', {
    ...noop,

    getSemanticDiagnostics(fileName) {
      if (!h.isFeatureEnabled('diagnostics', 'semantic')) {
        return []
      }

      const diagnostics: TS.Diagnostic[] = []
      h.getAllDocuments(fileName).forEach((virtual) => {
        if (
          isSupportLanguage(virtual.languageId) &&
          !IGNORED_SELECTORS.has(virtual.selector.type)
        ) {
          const results = choose(virtual).getSemanticDiagnostics(virtual.fsPath)
          diagnostics.push(...results)
        }
      })

      diagnostics.forEach((diagnostic) => {
        if (diagnostic.code >= 59000) {
          diagnostic.source = 'VueDX'
        } else {
          diagnostic.source = 'VueDX/TS'
        }
      })

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      if (!h.isFeatureEnabled('diagnostics', 'suggestion')) {
        return []
      }

      const diagnostics: TS.DiagnosticWithLocation[] = []
      h.getAllDocuments(fileName).forEach((virtual) => {
        context.log(`@@debug ${virtual.languageId} => ${virtual.fsPath} `)
        if (
          isSupportLanguage(virtual.languageId) &&
          !IGNORED_SELECTORS.has(virtual.selector.type)
        ) {
          const results = choose(virtual).getSuggestionDiagnostics(
            virtual.fsPath,
          )
          diagnostics.push(...results)
        }
      })

      diagnostics.forEach((diagnostic) => {
        if (diagnostic.code >= 59000) {
          diagnostic.source = 'VueDX'
        } else {
          diagnostic.source = 'VueDX/TS'
        }
      })
      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      if (!h.isFeatureEnabled('diagnostics', 'syntactic')) {
        return []
      }

      const diagnostics: TS.DiagnosticWithLocation[] = []
      h.getAllDocuments(fileName).forEach((virtual) => {
        context.log(`@@debug ${virtual.languageId} => ${virtual.fsPath} `)
        if (
          isSupportLanguage(virtual.languageId) &&
          !IGNORED_SELECTORS.has(virtual.selector.type)
        ) {
          const results = choose(virtual).getSyntacticDiagnostics(
            virtual.fsPath,
          )
          diagnostics.push(...results)
        }
      })

      diagnostics.forEach((diagnostic) => {
        if (diagnostic.code >= 59000) {
          diagnostic.source = 'VueDX'
        } else {
          diagnostic.source = 'VueDX/TS'
        }
      })

      return diagnostics
    },

    organizeImports(scope, formatOptions, preferences) {
      if (!h.isFeatureEnabled('organizeImports')) return []

      const document = h.getVueDocument(scope.fileName)
      if (document != null) {
        // TODO: Organize imports in both <script> and <script setup>
        const virtual =
          document.getDocument('script') ?? document.getDocument('scriptSetup')
        if (virtual != null) {
          return script.organizeImports(
            { ...scope, fileName: virtual.fsPath },
            formatOptions,
            preferences,
          )
        }
      }

      return []
    },

    getQuickInfoAtPosition(fileName, position): TS.QuickInfo | undefined {
      if (!h.isFeatureEnabled('quickInfo')) return

      // TODO: Provide better quick info for components and props.
      const document = h.getDocumentAt(fileName, position)
      if (document != null)
        return choose(document).getQuickInfoAtPosition(
          document.fsPath,
          position,
        )
    },

    getRenameInfo(fileName, position, options): TS.RenameInfo {
      if (!h.isFeatureEnabled('rename')) {
        return {
          canRename: false,
          localizedErrorMessage: 'Rename feature disabled.',
        }
      }

      const document = h.getDocumentAt(fileName, position)
      if (document == null) {
        return {
          canRename: false,
          localizedErrorMessage: 'Cannot rename this entity.',
        }
      }

      const result = choose(document).getRenameInfo(
        document.fsPath,
        position,
        options,
      )

      return result
    },

    findRenameLocations(
      fileName,
      position,
      findInStrings,
      findInComments,
    ): readonly TS.RenameLocation[] | undefined {
      if (!h.isFeatureEnabled('rename')) return

      const document = h.getDocumentAt(fileName, position)
      if (document == null) return

      const locations = choose(document)
        .findRenameLocations(
          document.fsPath,
          position,
          findInStrings,
          findInComments,
        )
        ?.slice()
      // TODO: Refactor this 🤷‍♂️
      if (locations != null && locations.length > 0) {
        const result = choose(document).getRenameInfo(
          document.fsPath,
          position,
          {
            allowRenameOfImportPath: false,
          },
        )
        if (result.canRename) {
          const info = h.getComponentInfo(document.container)
          if (!h.isRenderFunctionDocument(document)) {
            // Maybe component got renamed
            const component = info.components.find(
              (component) => component.name === result.displayName,
            )
            if (
              component != null &&
              locations.some(
                (loc) =>
                  isSpanInSourceRange(loc.textSpan, component.loc) ||
                  isSpanInSourceRange(loc.textSpan, component.source.loc),
              )
            ) {
              const doc = h.getRenderDoc(document.fsPath)
              if (doc?.ast != null) {
                getChangesForComponentTagRename(doc.ast, component).forEach(
                  (textSpan) => {
                    locations.push({ fileName, textSpan })
                  },
                )
              }
            } else if (
              (info.options != null &&
                isSpanInSourceRange(result.triggerSpan, info.options.loc)) ||
              (info.fnSetupOption?.return != null &&
                isSpanInSourceRange(
                  result.triggerSpan,
                  info.fnSetupOption.return.loc,
                ))
            ) {
              if (isSimpleIdentifier(result.displayName)) {
                const property = Object.entries(
                  info.options?.properties ?? {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    setup: info.fnSetupOption!.return!,
                  },
                ).find(([_, value]) =>
                  isSpanInSourceRange(result.triggerSpan, value.loc),
                )

                if (property != null) {
                  switch (property[0]) {
                    case 'data':
                    case 'methods':
                    case 'computed':
                    case 'props':
                    case 'emits':
                    case 'setup':
                      {
                        const render = h.getRenderDoc(fileName)
                        if (render?.ast != null) {
                          if (
                            render.ast.scope.identifiers.includes(
                              result.displayName,
                            )
                          ) {
                            // Find an expression using this identifiers.

                            let isDone = false
                            traverseEvery(render.ast, (node) => {
                              if (isDone) return false
                              if (
                                isSimpleExpressionNode(node) &&
                                node.scope.identifiers.includes(
                                  result.displayName,
                                )
                              ) {
                                const binding = node.scope.getBinding(
                                  result.displayName,
                                )

                                if (binding == null) {
                                  isDone = true
                                  context.log(
                                    '@@DEBUG found expression usage in template',
                                  )
                                  const additionalLocations = template.findRenameLocations(
                                    document.container.getDocumentFileName(
                                      RENDER_SELECTOR,
                                    ),
                                    node.loc.start.offset +
                                      node.content.indexOf(result.displayName) +
                                      1,
                                    findInStrings,
                                    findInComments,
                                  )

                                  if (additionalLocations != null) {
                                    context.log(
                                      '@@DEBUG found additional change locations',
                                    )
                                    locations.push(...additionalLocations)
                                  }

                                  return false // stop
                                }
                              }
                              return true
                            })
                          }
                        }
                      }
                      break
                  }
                }
              }
            }
          } else {
            if (isSimpleIdentifier(result.displayName)) {
              const source = info.identifierSource[result.displayName.trim()]
              if (source != null) {
                const scriptFileName =
                  document.container.descriptor.scriptSetup != null
                    ? document.container.getDocumentFileName(
                        SCRIPT_SETUP_BLOCK_SELECTOR,
                      )
                    : document.container.getDocumentFileName(
                        SCRIPT_BLOCK_SELECTOR,
                      )
                const additionalLocations = script.findRenameLocations(
                  scriptFileName,
                  source.loc.start.offset,
                  findInStrings,
                  findInComments,
                )
                if (additionalLocations != null) {
                  locations.push(...additionalLocations)
                }
              }
            }
          }
        }
      }

      return locations
    },

    getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences,
    ): TS.FileTextChanges[] {
      if (!h.isFeatureEnabled('rename')) return []

      const document = h.getVueDocument(oldFilePath)
      const fileTextChanges: TS.FileTextChanges[] = []
      const visited = new Set<string>()

      if (document != null) {
        const component = document.getDocument(MODULE_SELECTOR)
        const currentChanges = script.getEditsForFileRename(
          component.fsPath,
          isVueFile(newFilePath)
            ? newFilePath + VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR
            : newFilePath,
          formatOptions,
          preferences,
        )

        fileTextChanges.push(...currentChanges)

        currentChanges.forEach((item) => {
          if (isVirtualFile(item.fileName) || isVueFile(item.fileName)) {
            const render = h
              .getVueDocument(item.fileName)
              ?.getDocument('_render')
            if (render != null && !visited.has(render.fsPath)) {
              visited.add(render.fsPath)
              fileTextChanges.push(
                ...template.getEditsForFileRenameIn(
                  render.fsPath,
                  oldFilePath,
                  newFilePath,
                ),
              )
            }
          }
        })
      }

      return fileTextChanges
    },

    getApplicableRefactors(fileName, position, preferences) {
      if (!h.isFeatureEnabled('refactor')) return []

      const document = h.getDocumentAt(fileName, position)
      const result: TS.ApplicableRefactorInfo[] =
        document != null
          ? choose(document).getApplicableRefactors(
              document.fsPath,
              position,
              preferences,
            )
          : []

      if (document != null && !h.isRenderFunctionDocument(document)) {
        SCRIPT_REFACTOR_PROVIDERS.forEach((provider) => {
          result.push(
            ...provider.findRefactors(
              options,
              document.fsPath,
              position,
              preferences,
            ),
          )
        })
      }

      return result
    },

    getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences,
    ) {
      if (!h.isFeatureEnabled('refactor')) return
      const document = h.getDocumentAt(fileName, positionOrRange)
      if (document != null) {
        const provider = SCRIPT_REFACTOR_PROVIDERS.find(
          (provider) => provider.name === refactorName,
        )

        if (provider != null) {
          return provider.applyRefactor(
            options,
            document.fsPath,
            formatOptions,
            positionOrRange,
            refactorName,
            actionName,
            preferences,
          )
        }

        const result = choose(document).getEditsForRefactor(
          document.fsPath,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences,
        )

        if (result?.renameLocation != null) {
          const isExtractComponent =
            refactorName === REFACTORS.EXTRACT_COMPONENT
          const renameLocation = result.renameLocation
          let delta = 0
          result.edits.forEach((edit) => {
            if (edit.fileName === fileName) {
              edit.textChanges.forEach((textChange) => {
                if (
                  textChange.span.start + textChange.span.length <
                    renameLocation &&
                  (!isExtractComponent ||
                    // For extract-component, renameLocation should be generated import statement.
                    textChange.span.start -
                      textChange.span.length +
                      textChange.newText.length <
                      renameLocation)
                ) {
                  delta -= textChange.span.length
                  delta += textChange.newText.length
                }
              })
            }
          })

          result.renameLocation = renameLocation + delta
        }

        return result
      }
    },

    getDocumentHighlights(
      fileName: string,
      position: number,
      filesToSearch: string[],
    ): TS.DocumentHighlights[] | undefined {
      const document = h.getDocumentAt(fileName, position)

      if (document != null && !h.isRenderFunctionDocument(document)) {
        return script.getDocumentHighlights(
          document.fsPath,
          position,
          filesToSearch
            .map((fileName) => {
              if (isVueFile(fileName)) {
                const document = h.getVueDocument(fileName)
                if (document == null) return

                const script =
                  document.getDocument('script') ??
                  document.getDocument('scriptSetup')
                if (script == null) return

                return script.fsPath
              }

              return fileName
            })
            .filter(Boolean) as string[],
        )
      }
    },

    getCompletionsAtPosition(fileName, position, options) {
      const document = h.getDocumentAt(fileName, position)
      if (document != null) {
        return choose(document).getCompletionsAtPosition(
          document.fsPath,
          position,
          options,
        )
      } else {
        return completionProvider.getCompletionsAtPosition(
          fileName,
          position,
          options,
        )
      }
    },

    getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    ) {
      const document = h.getDocumentAt(fileName, position)
      if (document != null) {
        return choose(document).getCompletionEntryDetails(
          document.fsPath,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )
      } else {
        return completionProvider.getCompletionEntryDetails(
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )
      }
    },

    getSignatureHelpItems(fileName, position, options) {
      const document = h.getDocumentAt(fileName, position)

      if (document != null) {
        return choose(document).getSignatureHelpItems(
          document.fsPath,
          position,
          options,
        )
      }
    },

    getCompletionEntrySymbol(fileName, position, name, source) {
      const document = h.getDocumentAt(fileName, position)
      if (document != null) {
        return choose(document).getCompletionEntrySymbol(
          document.fsPath,
          position,
          name,
          source,
        )
      }

      return completionProvider.getCompletionEntrySymbol(
        fileName,
        position,
        name,
        source,
      )
    },

    getDefinitionAtPosition(
      fileName: string,
      position: number,
    ): readonly TS.DefinitionInfo[] | undefined {
      const document = h.getDocumentAt(fileName, position)

      if (document != null) {
        return choose(document).getDefinitionAtPosition(
          document.fsPath,
          position,
        )
      }
    },

    getDefinitionAndBoundSpan(
      fileName: string,
      position: number,
    ): TS.DefinitionInfoAndBoundSpan | undefined {
      if (!h.isFeatureEnabled('goto')) return

      const document = h.getDocumentAt(fileName, position)

      if (document != null) {
        return choose(document).getDefinitionAndBoundSpan(
          document.fsPath,
          position,
        )
      }
    },

    getCodeFixesAtPosition(
      fileName,
      start,
      end,
      errorCodes,
      formatOptions,
      preferences,
    ) {
      const document = h.getDocumentAt(fileName, start)

      if (document != null) {
        return choose(document).getCodeFixesAtPosition(
          document.fsPath,
          start,
          end,
          errorCodes,
          formatOptions,
          preferences,
        )
      }
      return []
    },

    getJsxClosingTagAtPosition(fileName, position) {
      const document = h.getDocumentAt(fileName, position)

      if (document != null) {
        return choose(document, true).getJsxClosingTagAtPosition(
          document.fsPath,
          position,
        )
      }
    },
  })
}
