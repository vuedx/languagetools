import {
  createCallExpression,
  FRAGMENT,
  NodeTransform,
  ElementNode,
  NodeTypes,
} from '@vue/compiler-core'

export const transformRoot: NodeTransform = (node, context) => {
  if (node.type !== NodeTypes.ROOT) {
    return
  }

  return function postTransformElement() {
    
  }
}
