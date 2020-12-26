import { isNotNull } from '@vuedx/shared'
import { isElementNode } from '@vuedx/template-ast-types'
import { getContainingFile } from '@vuedx/vue-virtual-textdocument'
import { TEMPLATE_COMPLETION_PROVIDERS } from '../features/completions'
import { TEMPLATE_DIAGNOSTICS_PROVIDERS } from '../features/diagnostics'
import { GOTO_PROVIDERS } from '../features/goto'
import { REFACTOR_PROVIDERS } from '../features/refactors'
import { RENAME_PROVIDERS } from '../features/renames'
import { wrapInTrace } from '../helpers/logger'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'
interface AdditionalFunctions {
  getEditsForFileRenameIn(
    fileName: string,
    oldFilePath: string,
    newFilePath: string,
  ): TS.FileTextChanges[]
}

export const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
export function createTemplateLanguageServer(
  config: LanguageServiceOptions,
): TS.LanguageService & AdditionalFunctions {
  const { helpers: h, context, service } = config
  const choose = (fileName: string): TS.LanguageService => {
    return h.getLanguageServiceFor(fileName, service)
  }

  return wrapInTrace('TemplateLanguageServer', {
    ...noop,

    getCompletionsAtPosition(fileName, position, options) {
      const result: TS.CompletionInfo = {
        isGlobalCompletion: false,
        isMemberCompletion: false,
        isNewIdentifierLocation: false,
        entries: [],
      }

      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const providerResults = provider.getCompletionsAtPosition(
          config,
          fileName,
          position,
          options,
        )
        if (isNotNull(providerResults)) {
          result.entries.push(...providerResults.entries)
        }
      }

      return result
    },

    getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    ) {
      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const result = provider.getCompletionEntryDetails(
          config,
          fileName,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
        )
        if (isNotNull(result)) {
          __DEV__ &&
            context.debug(
              `getCompletionEntryDetails got result from "${provider.name}"`,
            )
          return result
        }
      }
    },

    getCompletionEntrySymbol(fileName, position, name, source) {
      for (const provider of TEMPLATE_COMPLETION_PROVIDERS) {
        const result = provider.getCompletionEntrySymbol(
          config,
          fileName,
          position,
          name,
          source,
        )
        if (isNotNull(result)) return result
      }
    },

    getSignatureHelpItems(fileName, position, options) {
      const document = h.getRenderDoc(fileName)
      const loc = document?.getGeneratedOffsetAt(position)

      if (loc != null && document != null) {
        return choose(document.fsPath).getSignatureHelpItems(
          document.fsPath,
          loc.offset,
          options,
        )
      }
    },

    getQuickInfoAtPosition(fileName, position) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return

      const loc = document.getGeneratedOffsetAt(position)
      if (loc == null) return

      const nodeAtCursor = h.findTemplateNodeAtPosition(
        document.fsPath,
        position,
      )
      const result = choose(document.fsPath).getQuickInfoAtPosition(
        fileName,
        loc.offset,
      )

      if (result != null) {
        const textSpan = h.getTextSpan(
          document,
          result.textSpan,
          nodeAtCursor.node,
        )
        if (textSpan != null) {
          result.textSpan = textSpan
        } else {
          return
        }
        result.displayParts?.forEach((displayPart) => {
          if (displayPart.text === 'JSX attribute') {
            displayPart.text = 'prop' // TODO: Maybe event or prop or attribute?
          }
        })
      }
      return result
    },

    getSemanticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = TEMPLATE_DIAGNOSTICS_PROVIDERS.map((provider) =>
        provider.semantic(config, fileName),
      ).flat()

      return diagnostics
    },

    getSuggestionDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = TEMPLATE_DIAGNOSTICS_PROVIDERS.map((provider) =>
        provider.suggestions(config, fileName),
      ).flat()

      return diagnostics
    },

    getSyntacticDiagnostics(fileName) {
      const document = h.getRenderDoc(fileName)
      if (document == null) return []

      const diagnostics = TEMPLATE_DIAGNOSTICS_PROVIDERS.map((provider) =>
        provider.syntax(config, fileName),
      ).flat()

      return diagnostics
    },

    getRenameInfo(fileName, position, preferences = {}): TS.RenameInfo {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.canRename(
          config,
          fileName,
          position,
          preferences,
        )
        if (result != null) {
          __DEV__ &&
            context.debug(`found getRenameInfo using "${provider.name}"`)

          return result
        }
      }

      return {
        canRename: false,
        localizedErrorMessage: 'You cannot rename this element.',
      }
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyRename(
          config,
          fileName,
          position,
          findInStrings,
          findInComments,
        )

        if (result != null) {
          context.log(
            `@@DEBUG found findRenameLocations using "${provider.name}"`,
          )

          return result
        }
      }
    },

    getEditsForFileRenameIn(fileName, oldFilePath, newFilePath) {
      const fileTextChanges: TS.FileTextChanges[] = []
      for (const provider of RENAME_PROVIDERS) {
        const result = provider.applyFileRename(
          config,
          fileName,
          oldFilePath,
          newFilePath,
          {},
          {},
        )
        if (result != null) fileTextChanges.push(...result)
      }

      return fileTextChanges
    },

    getApplicableRefactors(fileName, position, preferences = {}) {
      const refactors: TS.ApplicableRefactorInfo[] = []

      for (const provider of REFACTOR_PROVIDERS) {
        const result = provider.findRefactors(
          config,
          fileName,
          position,
          preferences,
        )

        if (result != null) refactors.push(...result)
      }

      return refactors
    },

    getEditsForRefactor(
      fileName,
      formatOptions,
      positionOrRange,
      refactorName,
      actionName,
      preferences = {},
    ) {
      const provider = REFACTOR_PROVIDERS.find(
        (provider) => provider.name === refactorName,
      )

      if (provider != null) {
        context.log(`@@DEBUG: Using ${provider.name}`)
        return provider.applyRefactor(
          config,
          fileName,
          formatOptions,
          positionOrRange,
          refactorName,
          actionName,
          preferences,
        )
      }
    },

    getDefinitionAndBoundSpan(
      fileName,
      position,
    ): TS.DefinitionInfoAndBoundSpan | undefined {
      for (const provider of GOTO_PROVIDERS) {
        const result = provider.getDefinitionAndBoundSpan(
          config,
          fileName,
          position,
        )

        if (result != null) return result
      }
    },

    getJsxClosingTagAtPosition(fileName, position) {
      const { node } = h.findTemplateNodeAtPosition(
        getContainingFile(fileName),
        position,
      )

      if (isElementNode(node)) {
        return { newText: `</${node.tag}>` }
      }
    },
  })
}
