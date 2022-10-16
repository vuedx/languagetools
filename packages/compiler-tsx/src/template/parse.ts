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
import { first, last } from '@vuedx/shared'
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
    context.replaceNode(createPlainElementNode(node.loc))

    return
  }

  if (!isElementNode(node)) return

  if (
    /^[a-z]+$/.test(node.tag) &&
    node.tagType === 1 &&
    node.tag !== 'component'
  ) {
    // force element for lower case unknown tags as user might be typing these partial html/svg tags
    node.tagType = 0 /* ELEMENT */
  }
  node.props.forEach((prop, index) => {
    // remove empty modifiers
    if (isDirectiveNode(prop)) {
      const nameEndOffset = prop.loc.source.startsWith('v-')
        ? 2 + prop.name.length
        : 1
      let offset =
        prop.arg != null
          ? prop.arg.loc.end.offset - prop.loc.start.offset
          : nameEndOffset

      prop.nameLoc = sliceLoc(prop.loc, 0, nameEndOffset)
      if (prop.modifiers.length === 1 && first(prop.modifiers) === '') {
        prop.modifiers = []
      }
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
            : prop.name.length > 1
            ? createSimpleExpression(
                prop.name.slice(1),
                true,
                createLoc(prop.loc, 1, prop.name.length - 1),
              )
            : undefined,
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
    node.endTagLoc = sliceLoc(node.loc, -2)
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

function createPlainElementNode(contentLoc: SourceLocation): PlainElementNode {
  const offset = contentLoc.source.indexOf('<')
  const loc = sliceLoc(contentLoc, offset)
  const tag = loc.source.slice(1).trim()
  return {
    type: 1 /* ELEMENT */,
    tag,
    tagType: 0 /* ELEMENT */,
    codegenNode: undefined,
    children: [],
    isSelfClosing: tag.length > 0,
    loc,
    ns: 0,
    props: [],
    tagLoc: sliceLoc(loc, 1),
    startTagLoc: loc,
    endTagLoc: undefined,
    scope: new Scope(),
  }
}
