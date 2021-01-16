import { isNotNull } from '@vuedx/shared'
import { isSimpleExpressionNode } from '@vuedx/template-ast-types'
import { defineCompletionProvider } from './abstract'

export const TemplateContextCompletionProvider = defineCompletionProvider({
  name: 'context expression',
  version: '*',

  getCompletionsAtPosition(
    { helpers, service, context },
    fileName,
    position,
    options,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (
      isNotNull(document) &&
      isSimpleExpressionNode(node) &&
      options?.triggerCharacter !== '.' // Not a member expression
    ) {
      context.debug('TemplateContext Completion')
      const result = service.getCompletionsAtPosition(
        document.fsPath,
        document.contextCompletionsTriggerOffset,
        {
          ...options,
          triggerCharacter: '.',
          includeAutomaticOptionalChainCompletions: true,
          includeCompletionsForModuleExports: false,
          includeCompletionsWithInsertText: true,
          includePackageJsonAutoImports: 'off',
          provideRefactorNotApplicableReason: false,
          disableSuggestions: true,
        },
      )

      if (isNotNull(result)) {
        result.entries.filter((entry) => {
          if (entry.name.startsWith('$')) {
            entry.sortText = '9'
          }

          return entry.name.startsWith('_')
        })
      }

      return result
    }

    return undefined
  },

  getCompletionEntryDetails(
    { helpers, service },
    fileName,
    position,
    entryName,
    formatOptions,
    source,
    preferences,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isNotNull(document) && isSimpleExpressionNode(node)) {
      return service.getCompletionEntryDetails(
        document.fsPath,
        document.contextCompletionsTriggerOffset,
        entryName,
        formatOptions,
        source,
        preferences,
      )
    }

    return undefined
  },

  getCompletionEntrySymbol(
    { helpers, service },
    fileName,
    position,
    name,
    source,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isNotNull(document) && isSimpleExpressionNode(node)) {
      return service.getCompletionEntrySymbol(
        document.fsPath,
        document.contextCompletionsTriggerOffset,
        name,
        source,
      )
    }

    return undefined
  },
})
