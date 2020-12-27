import { ElementNode, Node, RootNode } from '@vue/compiler-core'
import {
  isCommentNode,
  isElementNode,
  isInterpolationNode,
  isRootNode,
  isTextNode,
} from './assert'
import { TraversalAncestors, traverseEvery, traverseFast } from './traverse'

/**
 * @public
 */
export interface SearchResult {
  node: Node | null
  ancestors: TraversalAncestors
}

/**
 * Find the deepest node containing the given position.
 *
 * @public
 */
export function findTemplateNodeAt(
  ast: RootNode,
  position: number,
): SearchResult {
  return findTemplateNodeInRange(ast, position, position)
}

/**
 * Find the parent element node.
 *
 * @public
 */
export function findParentNode(
  ast: RootNode,
  node: Node,
): ElementNode | undefined {
  let result: ElementNode | undefined
  traverseEvery(ast, (element) => {
    if (isElementNode(element)) {
      if (element.children.includes(node as any)) {
        result = element

        return false
      }
    }

    return true
  })

  return result
}

/**
 * Find a child (element, component, text, interpolation, or comment) node containing the given position.
 *
 * @public
 * @param mode - Open/close range comparison mode:
 *  • undefined - position in [start, end]
 *  • 'start'   — position in [start, end)
 *  • 'end'     - position in (start, end]
 */
export function findTemplateChildNodeAt(
  ast: RootNode,
  position: number,
  mode?: 'start' | 'end',
): SearchResult {
  const result = findTemplateNodeInRange(ast, position, position, mode)

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
    node: ElementNode | null
    ancestors: TraversalAncestors
  }
}

/**
 * Find the deepest node containing the given position.
 *
 * @public
 * @param mode - Open/close range comparison mode:
 *  • undefined - position in [start, end]
 *  • 'start'   — position in [start, end)
 *  • 'end'     - position in (start, end]
 */
export function findTemplateNodeInRange(
  ast: RootNode,
  start: number,
  end: number,
  mode?: 'start' | 'end',
): SearchResult {
  const found = {
    node: null as Node | null,
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

/**
 * Get all nodes contained in given range. (partial overlaps are ignored)
 *
 * @public
 */
export function findTemplateNodesInRange(
  ast: RootNode,
  start: number,
  end: number,
): Node[] {
  const found: Node[] = []

  traverseFast(ast, (node) => {
    if (node.loc.start.offset <= start && end <= node.loc.end.offset) {
      found.push(node)
    }
  })

  return found
}

/**
 * Get all child (element, component, text, interpolation, or comment) nodes contained in given range. (partial overlaps are ignored)
 *
 * @public
 */
export function findTemplateChildrenInRange(
  ast: RootNode,
  start: number,
  end: number,
): Node[] {
  if (start === end) {
    const a = findTemplateChildNodeAt(ast, start)

    return a.node != null ? [a.node] : []
  }

  const a = findTemplateChildNodeAt(ast, start, 'start')
  const b = findTemplateChildNodeAt(ast, end, 'end')
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
