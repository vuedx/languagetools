import type {
  NodeTransform,
  PlainElementNode,
  SourceLocation,
} from '@vue/compiler-core'
import {
  baseParse,
  ParserOptions,
  RootNode,
  transform,
} from '@vue/compiler-core'
import { last } from '@vuedx/shared'
import {
  createSimpleExpression,
  isDirectiveNode,
  isElementNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import { Scope } from './scope/Scope'
import { createLoc, sliceLoc } from '../utils'
import { parserOptions } from './parserOptions'
import './types/Node'

const preprocess: NodeTransform = (node, context) => {
  if (isTextNode(node) && node.content.trim().startsWith('<')) {
    // Incomplete element tag
    context.replaceNode(createPlainElementNode(node.content, node.loc))

    return
  }

  if (!isElementNode(node)) return

  node.props.forEach((prop, index) => {
    // remove empty modifiers
    if (isDirectiveNode(prop)) {
      const isShorthand = /^[:@.^]/.test(prop.loc.source)
      const nameEndOffset = isShorthand ? 1 : 2 + prop.name.length
      let offset =
        prop.arg != null
          ? prop.arg.loc.end.offset - prop.loc.start.offset
          : nameEndOffset

      prop.nameLoc = sliceLoc(prop.loc, 0, nameEndOffset)
      prop.modifierLocs = prop.modifiers.map((modifier) => {
        try {
          offset += 1
          return sliceLoc(prop.loc, offset, modifier.length)
        } finally {
          offset += modifier.length
        }
      })

      // remove braces from arg loc
      if (prop.arg?.loc.source.startsWith('[') === true) {
        prop.arg.loc = sliceLoc(prop.arg.loc, 1, -1)
      }
      // prop.modifierLocs =
    } else {
      // parse ^ shorthand for v-bind
      if (prop.name.startsWith('^')) {
        const isDynamic = prop.name.slice(1).startsWith('[')
        node.props[index] = {
          type: 7 /* DIRECTIVE */,
          name: 'bind',
          nameLoc: createLoc(prop.loc, 0, 1),
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
          modifierLocs: [],
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
      } else {
        prop.nameLoc = createLoc(prop.loc, 0, prop.name.length)
      }
    }
  })

  node.tagLoc = createLoc(node.loc, 1, node.tag.length)
  if (node.isSelfClosing) {
    node.startTagLoc = node.loc
  } else {
    const startTagIndex = node.loc.source.indexOf(
      '>',
      (node.props.length > 0
        ? last(node.props).loc.end.offset
        : node.tagLoc.end.offset) - node.loc.start.offset,
    )

    if (startTagIndex < 0) {
      node.startTagLoc = node.loc // Incomplete open tag
    } else {
      node.startTagLoc = createLoc(node.loc, 0, startTagIndex + 1)
      const endOfStartTagOrLastChild =
        (node.children.length > 0
          ? last(node.children).loc.end.offset
          : node.startTagLoc.end.offset) - node.loc.start.offset

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

export function parse(template: string, options: ParserOptions): RootNode {
  const ast = baseParse(template, {
    ...parserOptions,
    ...options,
  })
  transform(ast, { nodeTransforms: [preprocess] })
  return ast
}

function createPlainElementNode(
  content: string,
  contentLoc: SourceLocation,
): PlainElementNode {
  const source = content.trim()
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
    tagLoc: createLoc(contentLoc, 1, content.length - 1),
    startTagLoc: contentLoc,
    endTagLoc: undefined,
    scope: new Scope(),
  }
}
