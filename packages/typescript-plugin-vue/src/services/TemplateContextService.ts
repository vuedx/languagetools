import { annotations } from '@vuedx/compiler-tsx'
import { invariant, last } from '@vuedx/shared'
import {
  AttributeNode,
  DirectiveNode,
  ElementNode,
  findTemplateNodeAt,
  InterpolationNode,
  isAttributeNode,
  isCommentNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
  isTextNode,
  RootNode,
  SearchResult,
} from '@vuedx/template-ast-types'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { injectable } from 'inversify'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'

export const enum TemplateContextKind {
  Tag = 'tag',
  Attribute = 'attribute',
  AttributeValue = 'attributeValue',
  PropName = 'propName',
  EventName = 'eventName',
  DirectiveName = 'directiveName',
  DirectiveArg = 'directiveArg',
  DirectiveValue = 'directiveValue',
  DirectiveModifier = 'directiveModifier',
  Interpolation = 'interpolation',
}

interface BaseTemplateContext extends SearchResult {
  kind: TemplateContextKind
  document: VueSFCDocument
  block: Exclude<VueSFCDocument['descriptor']['template'], null>
  template: RootNode
  offsetInDocument: number
  offsetInTemplate: number
  offsetInGenerated: number
}

export interface TagTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.Tag
  element: ElementNode
  tag: 'open' | 'close'
}
export interface AttributeTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.Attribute
  element: ElementNode
  attribute?: AttributeNode
}
export interface AttributeValueTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.AttributeValue
  element: ElementNode
  attribute: AttributeNode
}
export interface PropNameTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.PropName
  element: ElementNode
  prop: DirectiveNode
}
export interface EventNameTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.EventName
  element: ElementNode
  event: DirectiveNode
}

export interface DirectiveNameTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.DirectiveName
  element: ElementNode
  directive: DirectiveNode
}

export interface DirectiveArgTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.DirectiveArg
  element: ElementNode
  directive: DirectiveNode
}
export interface DirectiveValueTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.DirectiveValue
  element: ElementNode
  directive: DirectiveNode
}

export interface DirectiveModifierTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.DirectiveModifier
  element: ElementNode
  directive: DirectiveNode
}

export interface InterpolationTemplateContext extends BaseTemplateContext {
  kind: TemplateContextKind.Interpolation
  interpolation: InterpolationNode
}

export type TemplateContext =
  | TagTemplateContext
  | AttributeTemplateContext
  | AttributeValueTemplateContext
  | PropNameTemplateContext
  | EventNameTemplateContext
  | DirectiveNameTemplateContext
  | DirectiveArgTemplateContext
  | DirectiveValueTemplateContext
  | DirectiveModifierTemplateContext
  | InterpolationTemplateContext

@injectable()
export class TemplateContextService {
  public getContext(
    document: VueSFCDocument,
    offsetInDocument: number,
  ): TemplateContext | null {
    const block = document.descriptor.template
    if (block == null) return null
    const template = document.templateAST
    if (template == null) return null
    const offsetInGenerated = document.generatedOffsetAt(offsetInDocument)
    if (offsetInGenerated == null) return null
    const offsetInTemplate = offsetInDocument - block.loc.start.offset
    const { node, ancestors } = findTemplateNodeAt(template, offsetInTemplate)
    if (node == null) return null
    const shared = {
      document,
      block,
      template,
      offsetInDocument,
      offsetInTemplate,
      offsetInGenerated,
      node,
      ancestors,
    }

    if (isElementNode(node)) {
      const tag = node.tag.trim()
      const inTagName = isOffsetInSourceLocation(node.tagLoc, offsetInTemplate)
      const inCloseTag =
        !node.isSelfClosing &&
        isOffsetInSourceLocation(node.endTagLoc, offsetInTemplate)
      if (tag === '' || inTagName || inCloseTag) {
        return {
          kind: TemplateContextKind.Tag,
          ...shared,
          element: node,
          tag: inCloseTag ? 'close' : 'open',
        }
      }

      return {
        kind: TemplateContextKind.Attribute,
        ...shared,
        element: node,
      }
    } else if (isAttributeNode(node)) {
      const element = last(ancestors).node
      invariant(isElementNode(element), 'Expected element node.')

      const inAttributeName = isOffsetInSourceLocation(
        node.nameLoc,
        offsetInTemplate,
      )
      if (inAttributeName) {
        return {
          kind: TemplateContextKind.Attribute,
          ...shared,
          element,
          attribute: node,
        }
      }

      return {
        kind: TemplateContextKind.AttributeValue,
        ...shared,
        element,
        attribute: node,
      }
    } else if (isDirectiveNode(node)) {
      const element = last(ancestors).node
      invariant(isElementNode(element), 'Expected element node.')
      const isLongHand = node.loc.source.startsWith('v-')
      const nameEndOffset = isLongHand
        ? node.loc.start.offset + node.name.length + 2
        : node.loc.start.offset + 1

      const text = node.loc.source.slice(
        0,
        offsetInTemplate - node.loc.start.offset,
      )
      const inDirectiveArg =
        isOffsetInSourceLocation(node.arg?.loc, offsetInTemplate) ||
        (isLongHand
          ? offsetInTemplate === nameEndOffset + 1
          : offsetInTemplate === nameEndOffset)

      if (inDirectiveArg) {
        if (node.name === 'bind') {
          return {
            kind: TemplateContextKind.PropName,
            ...shared,
            element,
            prop: node,
          }
        }

        if (node.name === 'on') {
          return {
            kind: TemplateContextKind.EventName,
            ...shared,
            element,
            event: node,
          }
        }

        return {
          kind: TemplateContextKind.DirectiveArg,
          ...shared,
          element,
          directive: node,
        }
      }

      const modifierOffset =
        node.arg != null ? node.arg.loc.end.offset : nameEndOffset

      if (offsetInTemplate > modifierOffset && /\.[a-z0-9_-]*$/i.test(text)) {
        return {
          kind: TemplateContextKind.DirectiveModifier,
          ...shared,
          element,
          directive: node,
        }
      }

      if (
        text.trim().endsWith('=') ||
        (node.exp != null && node.loc.end.offset === offsetInTemplate)
      ) {
        return {
          kind: TemplateContextKind.DirectiveValue,
          ...shared,
          element,
          directive: node,
        }
      }

      return {
        kind: TemplateContextKind.DirectiveName,
        ...shared,
        element,
        directive: node,
      }
    } else if (isInterpolationNode(node)) {
      return {
        kind: TemplateContextKind.Interpolation,
        ...shared,
        interpolation: node,
      }
    } else if (isSimpleExpressionNode(node) && ancestors.length > 0) {
      const parent = last(ancestors).node
      if (isDirectiveNode(parent)) {
        // expression can be either directive value or directive arg
        const element = last(ancestors, 2).node

        invariant(isElementNode(element), 'Expected element node.')
        const inDirectiveValue = isOffsetInSourceLocation(
          parent.exp?.loc,
          offsetInTemplate,
        )

        if (inDirectiveValue) {
          return {
            kind: TemplateContextKind.DirectiveValue,
            ...shared,
            element,
            directive: parent,
          }
        }

        if (parent.name === 'bind') {
          return {
            kind: TemplateContextKind.PropName,
            ...shared,
            element,
            prop: parent,
          }
        }

        if (parent.name === 'on') {
          return {
            kind: TemplateContextKind.EventName,
            ...shared,
            element,
            event: parent,
          }
        }

        return {
          kind: TemplateContextKind.DirectiveArg,
          ...shared,
          element,
          directive: parent,
        }
      }

      if (isInterpolationNode(parent)) {
        return {
          kind: TemplateContextKind.Interpolation,
          ...shared,
          interpolation: parent,
        }
      }
    } else if (isCommentNode(node)) {
      if (node.loc.source.startsWith('</')) {
        // bogus comment node for close tag
        const element = last(ancestors).node
        invariant(isElementNode(element), 'Expected element node.')
        return {
          kind: TemplateContextKind.Tag,
          ...shared,
          element,
          tag: 'close',
        }
      }
    } else if (isTextNode(node)) {
      const parent = last(ancestors).node
      if (isAttributeNode(parent)) {
        const element = last(ancestors, 2).node
        invariant(isElementNode(element), 'Expected element node.')

        return {
          kind: TemplateContextKind.AttributeValue,
          ...shared,
          element,
          attribute: parent,
        }
      }
    }

    return null
  }

  public getAttributeCompletionOffset(
    document: VueSFCDocument,
    element: ElementNode,
  ): number | null {
    if (document.descriptor.template == null) return null
    const offset =
      document.descriptor.template.loc.start.offset +
      element.tagLoc.start.offset
    const generated = document.generatedOffsetAt(offset)
    if (generated == null) return null
    const result = document.generated
      .getText()
      .indexOf(annotations.tsxCompletions, generated)
    if (result === -1) return null
    return result
  }
}
