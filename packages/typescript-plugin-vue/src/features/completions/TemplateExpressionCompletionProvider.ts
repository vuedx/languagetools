import { isNotNull } from '@vuedx/shared'
import { isSimpleExpressionNode } from '@vuedx/template-ast-types'
import { defineCompletionProvider } from './abstract'

const disallowedIdentifiers = new Set([
  'arguments',
  'globalThis',
  'default',
  '_ctx',
])
const allowedGlobals = new Set([
  'Infinity',
  'undefined',
  'NaN',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'Math',
  'Number',
  'Date',
  'Array',
  'Object',
  'Boolean',
  'String',
  'RegExp',
  'Map',
  'Set',
  'JSON',
  'Intl',
])

const allowedKeywords = new Set([
  'function',
  'return',
  'true',
  'false',
  'null',
  'typeof',
  'instanceof',
  'async',
  'await',
  'new',
])

export const TemplateExpressionCompletionProvider = defineCompletionProvider({
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

    if (isNotNull(document) && isSimpleExpressionNode(node)) {
      const loc = document.tryGetGeneratedOffset(position)
      if (isNotNull(loc)) {
        context.log('@@DEBUG TemplateExpression Completion')
        const result = service.getCompletionsAtPosition(
          document.fsPath,
          loc,
          options,
        )

        if (isNotNull(result)) {
          const isPropertyCompletion = options?.triggerCharacter === '.'
          result.entries = result.entries.filter((entry) => {
            if (isNotNull(entry.source)) return false // Ignore externals.
            if (disallowedIdentifiers.has(entry.name)) return false
            if (entry.kind === 'keyword') {
              return allowedKeywords.has(entry.name)
            }
            if (isPropertyCompletion) return true
            if (
              entry.kind === 'var' ||
              entry.kind === 'module' ||
              entry.kind === 'function'
            ) {
              return allowedGlobals.has(entry.name)
            }

            return false
          })
        }

        return result
      }
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
      const loc = document.tryGetGeneratedOffset(position)
      if (isNotNull(loc)) {
        return service.getCompletionEntryDetails(
          document.fsPath,
          loc,
          entryName,
          formatOptions,
          source,
          preferences,
        )
      }
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
      const loc = document.tryGetGeneratedOffset(position)
      if (isNotNull(loc)) {
        return service.getCompletionEntrySymbol(
          document.fsPath,
          loc,
          name,
          source,
        )
      }
    }

    return undefined
  },
})
