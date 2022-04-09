import type {
  NodeTransform,
  PlainElementNode,
  SourceLocation,
} from '@vue/compiler-core'
import { last } from '@vuedx/shared'
import {
  isDirectiveNode,
  isElementNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import { createLoc } from './utils'

export const parseElementTagLoc: NodeTransform = (node, context) => {
  if (isTextNode(node) && node.content.trim().startsWith('<')) {
    // Incomplete element tag
    context.replaceNode(createPlainElementNode(node.content, node.loc))

    return
  }

  if (!isElementNode(node)) return
  node.tagLoc = createLoc(node.loc, 1, node.tag.length)

  node.props.forEach((node) => {
    if (isDirectiveNode(node)) {
      // remove empty modifiers
      node.modifiers = node.modifiers.filter((modifier) => modifier !== '')
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
