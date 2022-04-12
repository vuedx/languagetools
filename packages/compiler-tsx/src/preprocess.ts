import type {
  NodeTransform,
  PlainElementNode,
  SourceLocation,
} from '@vue/compiler-core'
import { last } from '@vuedx/shared'
import {
  createSimpleExpression,
  isAttributeNode,
  isDirectiveNode,
  isElementNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import { createLoc, sliceLoc } from './utils'

export const preprocess: NodeTransform = (node, context) => {
  if (isTextNode(node) && node.content.trim().startsWith('<')) {
    // Incomplete element tag
    context.replaceNode(createPlainElementNode(node.content, node.loc))

    return
  }

  if (!isElementNode(node)) return
  node.tagLoc = createLoc(node.loc, 1, node.tag.length)

  node.props.forEach((prop, index) => {
    // remove empty modifiers
    if (isDirectiveNode(prop)) {
      prop.modifiers = prop.modifiers.filter((modifier) => modifier !== '')
    }

    // parse ^ shorthand for v-bind
    if (isAttributeNode(prop) && prop.name.startsWith('^')) {
      const isDynamic = prop.name.slice(1).startsWith('[')
      node.props[index] = {
        type: 7 /* DIRECTIVE */,
        name: 'bind',
        arg: isDynamic
          ? createSimpleExpression(
              prop.name.slice(2, -1),
              false,
              createLoc(prop.loc, 1, prop.name.length - 1),
            )
          : createSimpleExpression(
              prop.name.slice(1),
              true,
              createLoc(prop.loc, 1, prop.name.length - 1),
            ),
        loc: prop.loc,
        modifiers: [],
        exp:
          prop.value == null
            ? undefined
            : createSimpleExpression(
                prop.value.content,
                false,
                sliceLoc(prop.value.loc, 1, -1),
              ),
        scope: undefined as any,
      }
    }
  })

  if (node.isSelfClosing) {
    node.startTagLoc = node.loc
  } else {
    const startTagIndex = node.loc.source.indexOf(
      '>',
      node.props.length > 0
        ? last(node.props).loc.end.offset
        : node.tagLoc.end.offset,
    )

    if (startTagIndex < 0) {
      node.startTagLoc = node.loc // Incomplete open tag
    } else {
      node.startTagLoc = createLoc(node.loc, 0, startTagIndex + 1)
      const endOfStartTagOrLastChild =
        node.children.length > 0
          ? last(node.children).loc.end.offset
          : node.startTagLoc.end.offset

      const endTagIndex = Math.max(
        endOfStartTagOrLastChild,
        node.loc.source.indexOf('</', endOfStartTagOrLastChild),
      )

      node.endTagLoc = createLoc(
        node.loc,
        endTagIndex,
        node.loc.source.length - endTagIndex,
      )
    }
  }
}
function createPlainElementNode(
  content: string,
  contentLoc: SourceLocation,
): PlainElementNode {
  const source = content.trim()
  const loc = createLoc(contentLoc, content.indexOf('<'), source.length)
  return {
    type: 1 /* ELEMENT */,
    tag: source.slice(1),
    tagType: 0 /* ELEMENT */,
    codegenNode: undefined,
    children: [],
    isSelfClosing: false,
    loc: contentLoc,
    ns: 0,
    props: [],
    tagLoc: createLoc(loc, 1, source.length - 1),
    startTagLoc: loc,
    scope: undefined as any,
  }
}
