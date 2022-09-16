import { findDir, NodeTransform } from '@vue/compiler-core'
import { isComponentNode, isTemplateNode } from '@vuedx/template-ast-types'
import type { NodeTransformContext } from '../types/NodeTransformContext'

export function createComponentChildrenTransform(
  _customContext: NodeTransformContext,
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
                template: node,
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
