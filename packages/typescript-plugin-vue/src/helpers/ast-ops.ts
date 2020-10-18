import {
  TraversalAncestors,
  traverseEvery,
  isElementNode,
  isRootNode,
  isTextNode,
  isInterpolationNode,
  isCommentNode,
  t,
} from '@vuedx/template-ast-types'

export function findTemplateNodeAt(ast: t.RootNode, position: number) {
  return findTemplateNodeFor(ast, position, position)
}

export function findTemplateElementNodeAt(ast: t.RootNode, position: number) {
  const result = findTemplateNodeFor(ast, position, position)

  while (result.ancestors.length) {
    if (
      isRootNode(result.node) ||
      isElementNode(result.node) ||
      isTextNode(result.node) ||
      isInterpolationNode(result.node) ||
      isCommentNode(result.node)
    ) {
      break
    }

    result.node = result.ancestors.pop()?.node ?? null
  }

  return (result as unknown) as {
    node: t.ElementNode | null
    ancestors: TraversalAncestors
  }
}

export function findTemplateNodeFor(
  ast: t.RootNode,
  start: number,
  end: number,
) {
  const found = {
    node: null as t.Node | null,
    ancestors: [] as TraversalAncestors,
  }

  traverseEvery(ast, (node, ancestors) => {
    if (node.loc.start.offset <= start && end <= node.loc.end.offset) {
      found.node = node
      found.ancestors = ancestors.slice()

      return true
    }

    return false
  })

  return found
}

export function findTemplateNodesIn(
  ast: t.RootNode,
  start: number,
  end: number,
): t.Node[] {
  if (start === end) {
    const a = findTemplateElementNodeAt(ast, start)

    return a.node ? [a.node] : []
  }

  const a = findTemplateElementNodeAt(ast, start)
  const b = findTemplateElementNodeAt(ast, end)
  if (!a.node || !b.node) return []
  if (a.node === b.node) return [a.node]

  const pa = a.ancestors.pop()?.node
  const pb = b.ancestors.pop()?.node

  if (pa == null || pb == null) return []

  if (pa === b.node) return [pa]
  if (pb === a.node) return [pb]

  if (pa === pb && isElementNode(pa)) {
    return pa.children.slice(
      pa.children.indexOf(a.node),
      1 + pa.children.indexOf(b.node),
    )
  }

  return []
}
