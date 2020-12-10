import type {
  AttributeNode,
  DirectiveNode,
  ElementNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  TextNode,
} from '@vue/compiler-core'
import {
  isAttributeNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isRootNode,
  isSimpleExpressionNode,
  isTextNode,
} from './assert'
export interface StringifyOptions {
  indent: number
  initialIndent: number
  directive: 'shorthand' | 'longhand'
  replaceNodes: Map<Node, Node | null>
}

const defaults: StringifyOptions = {
  indent: 2,
  initialIndent: 0,
  directive: 'shorthand',
  replaceNodes: new Map<Node, Node | null>(),
}

export function stringify(
  node: Node | Node[],
  options?: Partial<StringifyOptions>,
): string {
  const finalOptions = { ...defaults, ...options }

  return genNode(
    Array.isArray(node) ? ({ type: 0, children: node } as any) : node,
    finalOptions.initialIndent * finalOptions.initialIndent,
    finalOptions,
  )
}

const shorthands = {
  bind: ':',
  on: '@',
  slot: '#',
} as const

function genNode(
  node: Node,
  indent: number,
  options: StringifyOptions,
): string {
  if (options.replaceNodes.has(node)) {
    const replaced = options.replaceNodes.get(node)
    return replaced == null ? '' : genNode(replaced, indent, options)
  } else if (isRootNode(node)) {
    return genRootNode(node, indent, options)
  } else if (isElementNode(node)) {
    return genElementNode(node, indent, options)
  } else if (isAttributeNode(node)) {
    return genAttributeNode(node, indent, options)
  } else if (isDirectiveNode(node)) {
    return genDirectiveNode(node, indent, options)
  } else if (isInterpolationNode(node)) {
    return `{{ ${genNode(node.content, indent, options)} }}`
  } else if (isSimpleExpressionNode(node)) {
    return genExpressionNode(node, indent, options)
  } else if (isTextNode(node)) {
    return genTextNode(node, indent, options)
  } else {
    throw new Error(`Unsupported node type: ${node.type}`)
  }
}

function genExpressionNode(
  node: SimpleExpressionNode,
  indent: number,
  options: StringifyOptions,
): string {
  return genMultilineText(node.content, indent, options)
}

function genTextNode(
  node: TextNode,
  indent: number,
  options: StringifyOptions,
): string {
  return genMultilineText(node.content, indent, options)
}

function genMultilineText(
  content: string,
  indent: number,
  options: StringifyOptions,
): string {
  if (content.startsWith('\n')) {
    content = content.trimStart()
  }

  if (content.includes('\n')) {
    content = content
      .split('\n')
      .map((line) => line.trim())
      .join('\n' + ' '.repeat(indent + options.indent))
  }

  return content
}

function genRootNode(
  node: RootNode,
  indent: number,
  options: StringifyOptions,
): string {
  return genChildren(node, indent, options)
}

function genElementNode(
  node: ElementNode,
  indent: number,
  options: StringifyOptions,
): string {
  const code: string[] = []

  code.push(' '.repeat(indent), '<', node.tag)

  let shouldIndentClosing = false
  const props = applyReplaceNodes(node.props, options)
  if (props.length > 0) {
    if (props.length > 2) {
      code.push('\n')
      node.props.forEach((prop) => {
        code.push(' '.repeat(indent + options.indent))
        code.push(genNode(prop, indent + options.indent, options))
        code.push('\n')
      })
      shouldIndentClosing = true
    } else {
      props.forEach((prop) => {
        code.push(' ')
        code.push(genNode(prop, indent, options))
      })
    }
  }

  if (shouldIndentClosing) code.push(' '.repeat(indent))
  if (node.isSelfClosing) {
    if (!shouldIndentClosing) code.push(' ')
    code.push('/>')
  } else {
    code.push('>', genChildren(node, indent, options), '</', node.tag, '>')
  }

  return code.join('')
}

function genChildren(
  node: ElementNode | RootNode,
  indent: number,
  options: StringifyOptions,
): string {
  const code: string[] = []
  const children = applyReplaceNodes(node.children, options)
  if (children.length > 0) {
    const hasOnlyInlineChildren = children.every(
      (child) => !isElementNode(child),
    )
    if (hasOnlyInlineChildren) {
      children.forEach((child) => {
        code.push(genNode(child, indent + options.indent, options))
      })
    } else {
      let wasLastChildInline = true
      children.forEach((child) => {
        if (isTextNode(child) && child.content.trim() === '') return // Ignore empty text nodes.
        const isThisChildInline = !isElementNode(child)
        if (wasLastChildInline && isThisChildInline) {
          // No need to put anything between inline children.
        } else if (wasLastChildInline) {
          code.push('\n')
        } else if (isThisChildInline) {
          code.push('\n', ' '.repeat(indent + options.indent))
        } else {
          code.push('\n')
        }

        code.push(genNode(child, indent + options.indent, options))
        wasLastChildInline = isThisChildInline
      })
      code.push('\n', ' '.repeat(indent))
    }
  }
  return code.join('')
}

function applyReplaceNodes(nodes: Node[], options: StringifyOptions): Node[] {
  return nodes
    .map((node) => {
      if (options.replaceNodes.has(node)) return options.replaceNodes.get(node)
      return node
    })
    .filter(Boolean) as Node[]
}

function genDirectiveNode(
  node: DirectiveNode,
  indent: number,
  options: StringifyOptions,
): string {
  const code: string[] = []

  if (options.directive === 'shorthand' && node.name in shorthands) {
    code.push(shorthands[node.name as 'bind' | 'on' | 'slot'])
  } else {
    code.push(`v-${node.name}`)
    if (node.arg != null) code.push(':')
  }

  if (isSimpleExpressionNode(node.arg)) {
    if (node.arg.isStatic) code.push(genNode(node.arg, indent, options))
    else code.push('[', genNode(node.arg, indent, options), ']')
  }

  node.modifiers.forEach((modifier) => code.push('.', modifier))

  if (isSimpleExpressionNode(node.exp)) {
    code.push('="', genNode(node.exp, indent, options), '"')
  }

  return code.join('')
}

function genAttributeNode(
  node: AttributeNode,
  indent: number,
  options: StringifyOptions,
): string {
  return node.value != null
    ? `${node.name}="${genNode(node.value, indent, options)}"`
    : node.name
}
