import {
  DirectiveNode,
  findDir,
  IfBranchNode,
  IfNode,
  NodeTransform,
  TemplateNode,
} from '@vue/compiler-core'
import {
  isComponentNode,
  isTemplateNode,
  NodeTypes,
} from '@vuedx/template-ast-types'
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
              const _if = findDir(node, 'if', true)

              slots.push({
                name: dir.arg,
                args: dir.exp,
                hoists: node.hoists ?? [],
                children:
                  _if == null ? node.children : [createIfNode(node, _if)],
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
function createIfNode(node: TemplateNode, dir: DirectiveNode): IfNode {
  return {
    type: NodeTypes.IF,
    branches: [createIfBranchNode(node, dir)],
    loc: node.loc,
    scope: node.scope,
  }
}

function createIfBranchNode(
  node: TemplateNode,
  dir: DirectiveNode,
): IfBranchNode {
  return {
    type: NodeTypes.IF_BRANCH,
    children: node.children,
    condition: dir.exp,
    loc: node.loc,
    scope: node.scope,
  }
}
