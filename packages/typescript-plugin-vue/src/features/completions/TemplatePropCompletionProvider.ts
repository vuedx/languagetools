import { isArray, isNotNull, last, pascalCase } from '@vuedx/shared'
import {
  AttributeNode,
  DirectiveNode,
  ElementNode,
  isAttributeNode,
  isDirectiveNode,
  isElementNode,
} from '@vuedx/template-ast-types'
import { RenderFunctionTextDocument } from '@vuedx/vue-virtual-textdocument'
import { CompletionInfo } from 'typescript'
import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'
import { defineCompletionProvider } from './abstract'
import {
  BUILTIN_DIRECTIVES,
  BUILTIN_DIRECTIVES_DETAIL,
} from './data/directives'

export const TemplatePropCompletionProvider = defineCompletionProvider({
  version: '*',

  getCompletionsAtPosition(config, fileName, position, options) {
    const completion = getCompletionType(
      config,
      fileName,
      position,
      options?.triggerCharacter,
    )

    if (completion.type === 'none') return

    const result: TS.WithMetadata<CompletionInfo> = {
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
      entries: [],
    }

    const { document, jsxPosition, element } = completion
    if (element.tag === 'slot') {
      // TODO: Handle slot props...
    } else if (completion.type === 'directive') {
      if (completion.directive != null) {
        // TODO: Provide argument and modifier completion.
      } else {
        // Should not be possible when parser is patched to handle partials.
      }
    } else {
      // TODO: Provide v-if etc.
      result.entries.push(...BUILTIN_DIRECTIVES)

      const jsxProps = config.service.getCompletionsAtPosition(
        document.fsPath,
        jsxPosition,
        {
          triggerCharacter: options?.triggerCharacter,
        },
      )

      if (isArray(jsxProps?.entries)) {
        jsxProps?.entries.forEach((entry) => {
          result.entries.push(entry) // TODO: Process to look like attribute.
        })
      }
    }

    return result
  },

  getCompletionEntryDetails(
    config,
    fileName,
    position,
    entryName,
    formatOptions,
    source,
    preferences,
  ) {
    const completion = getCompletionType(config, fileName, position)
    if (completion.type === 'none') return

    if (entryName in BUILTIN_DIRECTIVES_DETAIL) {
      return BUILTIN_DIRECTIVES_DETAIL[entryName]
    }

    return undefined
  },

  getCompletionEntrySymbol(config, fileName, position, name, source) {
    const completion = getCompletionType(config, fileName, position)
    if (completion.type === 'none') return

    return undefined
  },
})

type CompletionType =
  | {
      type: 'none'
    }
  | {
      type: 'attribute'
      document: RenderFunctionTextDocument
      element: ElementNode
      attribute?: AttributeNode
      jsxPosition: number
    }
  | {
      type: 'directive'
      document: RenderFunctionTextDocument
      element: ElementNode
      directive?: DirectiveNode
      jsxPosition: number
    }

function getCompletionType(
  { helpers }: LanguageServiceOptions,
  fileName: string,
  position: number,
  triggerCharacter?: string,
): CompletionType {
  const { node, document, ancestors } = helpers.findTemplateNodeAtPosition(
    fileName,
    position,
  )

  if (isNotNull(document)) {
    if (isElementNode(node)) {
      // Is position after tag name?
      if (position >= node.loc.start.offset + node.tag.length + 2) {
        const jsxPosition = document.tryGetGeneratedOffset(
          node.loc.start.offset + 1,
        )

        // Should be non-null unless there's is a unrecoverable syntax error in template.
        if (jsxPosition != null) {
          return {
            type: 'attribute',
            document: document,
            element: node,
            jsxPosition: jsxPosition + pascalCase(node.tag).length + 1,
          }
        }
      }
    } else if (isAttributeNode(node)) {
      const element = last(ancestors).node as ElementNode
      const jsxPosition = document.tryGetGeneratedOffset(node.loc.start.offset)
      // This position is at start of the attribute.
      // TODO: Check if it needs to be the cursor position.
      if (jsxPosition != null) {
        return {
          type: 'attribute',
          document: document,
          element: element,
          attribute: node,
          jsxPosition: jsxPosition,
        }
      }
    } else if (isDirectiveNode(node)) {
      const element = last(ancestors).node as ElementNode
      const jsxPosition = document.tryGetGeneratedOffset(node.loc.start.offset)
      // This position is at start of the directive.
      // TODO: Check if it needs to be the cursor position.
      if (jsxPosition != null) {
        return {
          type: 'directive',
          document: document,
          element: element,
          directive: node,
          jsxPosition: jsxPosition,
        }
      }
    }
  }

  return { type: 'none' }
}
