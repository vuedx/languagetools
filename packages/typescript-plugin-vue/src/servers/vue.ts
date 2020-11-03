import {
  isNumber,
  isVirtualFile,
  isVueFile,
  VirtualTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import { wrapInTrace } from '../helpers/logger'
import { PluginConfig, TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'
import { createTemplateLanguageServer } from './template'

type GetElementType<T> = T extends Array<infer U> ? U : T
export function createVueLanguageServer(
  options: LanguageServiceOptions,
): TS.LanguageService {
  const template = createTemplateLanguageServer(options)
  const { helpers: h, service, context } = options
  const script = wrapInTrace('ScriptLanguageServer', service)

  function isFeatureEnabled<K extends keyof PluginConfig['features']>(
    featureName: K,
    checkFor: boolean | GetElementType<PluginConfig['features'][K]> = true,
  ): boolean {
    const feature = context.config.features[featureName]

    return Array.isArray(feature)
      ? feature.includes(checkFor)
      : feature === checkFor
  }

  function choose(document: VirtualTextDocument): TS.LanguageService {
    return h.isRenderFunctionDocument(document) ? template : script
  }

  return wrapInTrace('VueLanguageServer', {
    ...noop,

    getSemanticDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'semantic')) {
        return []
      }

      const document = h.getVueDocument(fileName)
      const diagnostics: TS.Diagnostic[] = []
      if (document != null) {
        const selectors = ['script', '_render', 'scriptSetup'] as const
        selectors.forEach((selector) => {
          const virtual = document.getDocument(selector)
          if (virtual != null) {
            const results = choose(virtual).getSemanticDiagnostics(
              virtual.fsPath,
            )
            diagnostics.push(...results)
          }
        })
      }

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'suggestion')) {
        return []
      }

      const document = h.getVueDocument(fileName)

      const diagnostics: TS.DiagnosticWithLocation[] = []
      if (document != null) {
        const selectors = ['script', '_render', 'scriptSetup'] as const
        selectors.forEach((selector) => {
          const virtual = document.getDocument(selector)

          if (virtual != null)
            diagnostics.push(
              ...choose(virtual).getSuggestionDiagnostics(virtual.fsPath),
            )
        })
      }

      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      if (!isFeatureEnabled('diagnostics', 'syntactic')) {
        return []
      }

      const document = h.getVueDocument(fileName)

      const diagnostics: TS.DiagnosticWithLocation[] = []
      if (document != null) {
        const selectors = ['script', '_render', 'scriptSetup'] as const
        selectors.forEach((selector) => {
          const virtual = document.getDocument(selector)

          if (virtual != null)
            diagnostics.push(
              ...choose(virtual).getSyntacticDiagnostics(virtual.fsPath),
            )
        })
      }

      return diagnostics
    },

    organizeImports(scope, formatOptions, preferences) {
      if (!isFeatureEnabled('organizeImports')) return []

      const document = h.getVueDocument(scope.fileName)
      if (document != null) {
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
      if (!isFeatureEnabled('quickInfo')) return

      // TODO: Provide better quick info for components and props.
      const document = h.getDocumentAt(fileName, position)
      if (document != null)
        return choose(document).getQuickInfoAtPosition(
          document.fsPath,
          position,
        )
    },

    getRenameInfo(fileName, position, options): TS.RenameInfo {
      if (!isFeatureEnabled('rename')) {
        return {
          canRename: false,
          localizedErrorMessage: 'Rename feature disabled.',
        }
      }

      const document = h.getDocumentAt(fileName, position)
      if (document == null) {
        return {
          canRename: false,
          localizedErrorMessage: 'Cannot find this Vue file.',
        }
      }

      return choose(document).getRenameInfo(document.fsPath, position, options)
    },

    findRenameLocations(
      fileName,
      position,
      findInStrings,
      findInComments,
    ): readonly TS.RenameLocation[] | undefined {
      if (!isFeatureEnabled('rename')) return

      const document = h.getDocumentAt(fileName, position)
      if (document == null) return

      return choose(document).findRenameLocations(
        document.fsPath,
        position,
        findInStrings,
        findInComments,
      )
    },

    getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences,
    ): TS.FileTextChanges[] {
      if (!isFeatureEnabled('rename')) return []

      const document = h.getVueDocument(oldFilePath)
      const fileTextChanges: TS.FileTextChanges[] = []
      const visited = new Set<string>()

      if (document != null) {
        const component = document.getDocument('_module')
        const currentChanges = script.getEditsForFileRename(
          component.fsPath,
          component.fsPath.replace(oldFilePath, newFilePath),
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

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      if (!isFeatureEnabled('refactor')) return []

      if (isNumber(positionOrRange)) {
        const document = h.getDocumentAt(fileName, positionOrRange)
        if (document == null) return []

        return choose(document).getApplicableRefactors(
          document.fsPath,
          positionOrRange,
          preferences,
        )
      } else {
        const document1 = h.getDocumentAt(fileName, positionOrRange.pos)
        const document2 = h.getDocumentAt(fileName, positionOrRange.end)
        if (document1 == null || document1 !== document2) return []

        return choose(document1).getApplicableRefactors(
          document1.fsPath,
          positionOrRange,
          preferences,
        )
      }
    },

    getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences,
    ) {
      if (!isFeatureEnabled('refactor')) return

      const document = h.getDocumentAt(
        fileName,
        isNumber(positionOrRange) ? positionOrRange : positionOrRange.pos,
      )
      const document2 = h.getDocumentAt(
        fileName,
        isNumber(positionOrRange) ? positionOrRange : positionOrRange.end,
      )

      if (document != null && document === document2) {
        return choose(document).getEditsForRefactor(
          document.fsPath,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences,
        )
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
      if (!isFeatureEnabled('goto')) return

      const document = h.getDocumentAt(fileName, position)

      if (document != null) {
        return choose(document).getDefinitionAndBoundSpan(
          document.fsPath,
          position,
        )
      }
    },
  })
}
