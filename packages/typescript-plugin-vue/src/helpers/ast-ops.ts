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

export interface SearchResult {
  node: t.Node | null
  ancestors: TraversalAncestors
}

export function findTemplateNodeAt(
  ast: t.RootNode,
  position: number,
): SearchResult {
  return findTemplateNodeFor(ast, position, position)
}

export function findTemplateElementNodeAt(
  ast: t.RootNode,
  position: number,
  mode?: 'start' | 'end',
): SearchResult {
  const result = findTemplateNodeFor(ast, position, position, mode)

  while (result.ancestors.length > 0) {
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
  mode?: 'start' | 'end',
): SearchResult {
  const found = {
    node: null as t.Node | null,
    ancestors: [] as TraversalAncestors,
  }

  traverseEvery(ast, (node, ancestors) => {
    if (
      mode === 'start'
        ? node.loc.start.offset <= start && end < node.loc.end.offset
        : mode === 'end'
        ? node.loc.start.offset < start && end <= node.loc.end.offset
        : node.loc.start.offset <= start && end <= node.loc.end.offset
    ) {
      found.node = node
      found.ancestors = ancestors.slice()

      return true
    } else {
      return false
    }
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

    return a.node != null ? [a.node] : []
  }

  const a = findTemplateElementNodeAt(ast, start, 'start')
  const b = findTemplateElementNodeAt(ast, end, 'end')
  if (a.node == null || b.node == null) return []
  if (a.node === b.node) return [a.node]

  const pa = a.ancestors.pop()?.node
  const pb = b.ancestors.pop()?.node

  if (pa == null || pb == null) return []

  if (pa === b.node) return [pa]
  if (pb === a.node) return [pb]

  if (pa === pb && isElementNode(pa)) {
    return pa.children.slice(
      pa.children.indexOf(a.node as any),
      1 + pa.children.indexOf(b.node as any),
    )
  }

  return []
}
