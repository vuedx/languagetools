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
  skipNodes: Set<Node>
}

const defaults: StringifyOptions = {
  indent: 2,
  initialIndent: 0,
  directive: 'shorthand',
  skipNodes: new Set(),
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
  if (options.skipNodes.has(node)) {
    return ''
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
  return node.content.includes('\n')
    ? node.content.split('\n').join(' '.repeat(indent + options.indent) + '\n')
    : node.content
}

function genTextNode(
  node: TextNode,
  indent: number,
  options: StringifyOptions,
): string {
  return node.content.includes('\n')
    ? node.content
        .split('\n')
        .map((line) => line.trimStart())
        .join(' '.repeat(indent + options.indent) + '\n')
    : node.content
}

function genRootNode(
  node: RootNode,
  indent: number,
  options: StringifyOptions,
): string {
  const code: string[] = []

  node.children.forEach((child, index) => {
    if (index > 0 && isElementNode(child)) code.push('\n')
    code.push(genNode(child, indent, options))
  })

  return code.join('')
}

function genElementNode(
  node: ElementNode,
  indent: number,
  options: StringifyOptions,
): string {
  const code: string[] = []

  code.push(' '.repeat(indent), '<', node.tag)

  let shouldIndentClosing = false
  if (node.props.length > 0) {
    if (node.props.length > 2) {
      code.push('\n')
      node.props.forEach((prop) => {
        code.push(' '.repeat(indent + options.indent))
        code.push(genNode(prop, indent + options.indent, options))
        code.push('\n')
      })
      shouldIndentClosing = true
    } else {
      code.push(' ')
      node.props.forEach((prop) => {
        code.push(genNode(prop, indent, options))
      })
    }
  }

  if (shouldIndentClosing) code.push(' '.repeat(indent))
  if (node.isSelfClosing) {
    if (shouldIndentClosing) code.push(' ')
    code.push('/>')
  } else {
    code.push('>')
    if (node.children.length > 0) {
      let shouldIndentNext = isElementNode(node.children[0])
      node.children.forEach((child) => {
        if (shouldIndentNext) code.push('\n')
        code.push(genNode(child, indent + options.indent, options))
        shouldIndentNext = isElementNode(child)
      })
      if (shouldIndentNext) code.push('\n', ' '.repeat(indent))
    }
    code.push('</', node.tag, '>')
  }

  return code.join('')
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
