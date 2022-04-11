import { findDir, NodeTransform, TemplateChildNode } from '@vue/compiler-core'
import {
  AttributeNode,
  DirectiveNode,
  isComponentNode,
  isTemplateNode,
  TemplateNode,
} from '@vuedx/template-ast-types'
import type { CustomTransformContext } from './CustomTransformContext'

export function createComponentChildrenTransform(
  _customContext: CustomTransformContext,
): NodeTransform {
  return (node) => {
    if (!isComponentNode(node)) return
    const dir = findDir(node, 'slot', true)
    let hasSlotsAsChildren = false
    if (
      dir == null &&
      node.children.some(
        (node) => isTemplateNode(node) && findDir(node, 'slot', true) != null,
      )
    ) {
      hasSlotsAsChildren = true
      node.children = node.children.map((node) => {
        if (isTemplateNode(node)) {
          const dir = findDir(node, 'slot', true)
          if (dir != null) {
            node.props = node.props.filter((prop) => prop !== dir)
            return createTemplateNode([dir], [node])
          }
        }

        return node
      })
    }

    return () => {
      if (dir != null) {
        node.props = node.props.filter((prop) => prop !== dir)
        node.slots = [
          {
            name: dir.arg,
            args: dir.exp,
            hoists: node.hoists ?? [],
            children: node.children,
          },
        ]
      } else if (hasSlotsAsChildren) {
        node.slots = []
        const slots = node.slots

        node.unassignedSlots = node.children.filter((node) => {
          if (isTemplateNode(node)) {
            const dir = findDir(node, 'slot', true)
            if (dir != null) {
              slots.push({
                name: dir.arg,
                args: dir.exp,
                hoists: node.hoists ?? [],
                children: node.children,
              })

              return false
            }
          }

          return true
        })
      } else {
        node.slots = [
          {
            hoists: node.hoists ?? [],
            children: node.children,
          },
        ]
      }
    }
  }
}

function createTemplateNode(
  props: Array<AttributeNode | DirectiveNode>,
  children: TemplateChildNode[],
): TemplateNode {
  return {
    type: 1,
    ns: 0,
    tag: 'template',
    tagType: 3,
    codegenNode: undefined,
    isSelfClosing: false,
    props,
    children,
    hoists: [],
    tagLoc: undefined as any,
    startTagLoc: undefined as any,
    endTagLoc: undefined as any,
    loc: undefined as any,
    scope: undefined as any,
  }
}
