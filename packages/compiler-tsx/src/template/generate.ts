import {
  AttributeNode,
  CommentNode,
  ComponentNode,
  CompoundExpressionNode,
  DirectiveNode,
  ElementNode,
  ExpressionNode,
  findProp,
  ForNode,
  IfNode,
  InterpolationNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  SlotOutletNode,
  SourceLocation,
  TemplateNode,
  TextNode,
} from '@vue/compiler-core'
import { capitalize, invarient, last } from '@vuedx/shared'
import {
  ElementTypes,
  isAttributeNode,
  isDirectiveNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
  isSlotNode,
  isTextNode,
  NodeTypes,
  TraversalAncestors,
  traverse,
} from '@vuedx/template-ast-types'
import type { DecodedSourceMap } from 'magic-string'
import type { TransformedCode } from '../types/TransformedCode'

import { createLoc } from '../utils'
import { getRuntimeFn } from './runtime'
import type { NodeTransformContext } from './types/NodeTransformContext'

interface GenerateContext extends NodeTransformContext {
  write(
    code: string,
    loc?: SourceLocation,
    addMappingType?: boolean,
  ): GenerateContext
  newLine(): GenerateContext
  indent(): GenerateContext
  deindent(): GenerateContext
  getOutput(): TransformedCode
}

export const annotations = {
  diagnosticsIgnore: {
    start: '/*<vuedx:diagnosticsIgnore>*/',
    end: '/*</vuedx:diagnosticsIgnore>*/',
  },
  copiedSource: {
    start: '/*<vuedx:copiedSource>*/',
    end: '/*</vuedx:copiedSource>*/',
  },
  templateGlobals: {
    start: '/*<vuedx:templateGlobals>*/',
    end: '/*</vuedx:templateGlobals>*/',
  },
  missingExpression: '/*<vuedx:missingExpression>*/',
  tsxCompletions: '/*<vuedx:tsx-competions-target/>*/',
  tsCompletions: '/*<vuedx:ts-competions-target/>*/',
}

let ctx: GenerateContext
export function generate(
  root: RootNode,
  options: NodeTransformContext,
): TransformedCode {
  ctx = createGenerateContext(options)

  writeLine(
    `import * as ${ctx.internalIdentifierPrefix}TypeCheck  from '${ctx.typeCheckModuleName}';`,
  )
  genRootNode(root)
  genSlotTypes(root)

  return ctx.getOutput()
}

function genNode(node: Node): void {
  switch (node.type) {
    case NodeTypes.ROOT:
      return genRootNode(node as RootNode)
    case NodeTypes.ELEMENT: {
      const el = node as ElementNode
      switch (el.tagType) {
        case ElementTypes.ELEMENT:
          return genElementNode(node as ElementNode)
        case ElementTypes.COMPONENT:
          return genComponentNode(node as ComponentNode)
        case ElementTypes.SLOT:
          return genSlotOutletNode(node as SlotOutletNode)
        case ElementTypes.TEMPLATE:
          return genTemplateNode(node as TemplateNode)
        default:
          throw new Error(`Unexpected element type: ${node.type}`)
      }
    }
    case NodeTypes.SIMPLE_EXPRESSION:
    case NodeTypes.COMPOUND_EXPRESSION:
      return genExpressionNode(node as ExpressionNode)
    case NodeTypes.TEXT:
      return genTextNode(node as TextNode)
    case NodeTypes.INTERPOLATION:
      return genInterpolationNode(node as InterpolationNode)
    case NodeTypes.COMMENT:
      return genCommentNode(node as CommentNode)
    case NodeTypes.FOR:
      return genForNode(node as ForNode)
    case NodeTypes.IF:
      return genIfNode(node as IfNode)
    default:
      throw new Error(`Unsupported node type: ${node.type}`)
  }
}

function indent(fn: () => void): void {
  ctx.indent()
  fn()
  ctx.deindent()
}
function writeLine(code: string): void {
  ctx.write(code).newLine()
}

function genRootNode(node: RootNode): void {
  writeLine(`export function ${ctx.internalIdentifierPrefix}render() {`)
  indent(() => {
    genGlobalDeclartions(node)
    genNodeHoists({ hoists: ctx.scope.popHoistScope() })
    writeLine('return (')
    indent(() => {
      writeLine('<>')
      indent(() => genChildren(node))
      writeLine('</>')
    })
    writeLine(')')
  })
  writeLine('}')
}

function genGlobalDeclartions(node: Node): void {
  if (node.scope.globals.length === 0) return
  writeLine(annotations.templateGlobals.start)
  node.scope.globals.forEach((id) => {
    writeLine(`let ${id} = ${ctx.contextIdentifier}.${id};`)
  })
  writeLine(annotations.templateGlobals.end)
}
function genNodeHoists(node: { hoists: CompoundExpressionNode[] }): void {
  if (node.hoists.length === 0) return
  writeLine(annotations.templateGlobals.start)
  node.hoists.forEach((hoist) => {
    genExpressionNode(hoist)
    ctx.newLine()
  })
  writeLine(annotations.templateGlobals.end)
}

function genElementNode(node: ElementNode): void {
  ctx.write('<', node.startTagLoc)
  ctx.write(node.tag, node.tagLoc, true).newLine()
  indent(() => {
    genProps(node)
    ctx.write(
      `${annotations.tsxCompletions}`,
      createLoc(
        node.startTagLoc,
        node.tagLoc.end.offset - node.loc.start.offset,
      ),
    )
  })

  ctx.newLine()
  if (node.isSelfClosing) {
    ctx.write('/>')
    return // done
  }
  ctx.write('>').newLine()
  indent(() => genChildren(node))
  ctx.write('</', node.endTagLoc)
  ctx.write(node.tag)
  ctx.write('>')
}

function genComponentNode(node: ComponentNode): void {
  if (node.tag.includes('-')) return genElementNode(node) // assume custom element

  ctx.write('<', node.loc)
  ctx.write(node.resolvedName ?? node.tag, node.tagLoc).newLine()
  indent(() => {
    genProps(node)
    ctx.write(
      `${annotations.tsxCompletions}`,
      createLoc(
        node.startTagLoc,
        node.tagLoc.end.offset - node.loc.start.offset,
      ),
    )
  })

  ctx.newLine()
  if (node.isSelfClosing) {
    writeLine('/>')
    return // done
  }
  writeLine('>')

  indent(() => {
    wrap('{{', '}}', () => {
      ctx.newLine()
      indent(() => {
        node.slots.forEach((slot) => {
          if (slot.name == null) {
            ctx.write(`default`)
          } else if (isStaticExpression(slot.name)) {
            ctx.write(JSON.stringify(slot.name.content), slot.name.loc)
          } else {
            ctx.write('[')
            genExpressionNode(slot.name)
            ctx.write(']')
          }
          ctx.write(': (')
          if (slot.args != null) {
            genExpressionNode(slot.args)
          }
          ctx.write(') => {').newLine()
          indent(() => {
            genNodeHoists(slot)
            writeLine('return (')
            indent(() => {
              writeLine('<>')
              indent(() => genChildren(slot))
              writeLine('</>')
            })
            writeLine(')')
          })
          ctx.write('},').newLine()
        })
      })
    })
  })
  ctx.newLine()
  ctx.write('</', node.endTagLoc)
  ctx.write(node.resolvedName ?? node.tag)
  ctx.write('>')
}

function genSlotOutletNode(node: SlotOutletNode): void {
  wrap('{', '}', () => {
    ctx.newLine()
    const name = findProp(node, 'name', false, true)
    indent(() => {
      wrap(`${ctx.contextIdentifier}.$slots[`, ']({', () => {
        if (isAttributeNode(name) && name.value != null) {
          genTextNode(name.value)
        } else if (isDirectiveNode(name) && name.arg != null) {
          genExpressionNode(name.arg)
        } else {
          ctx.write(`'default'`)
        }
      })
      ctx.newLine()
      indent(() => {
        node.props.forEach((prop) => {
          if (prop === name) return
          genObjectProperty(prop)
        })
      })
      ctx.write('})')
    })
    if (node.children.length > 0) {
      ctx.write(' ?? ')
      indent(() => {
        wrap('(', ')', () => {
          ctx.newLine()
          indent(() => {
            wrap('<>', '</>', () => {
              ctx.newLine()
              indent(() => genChildren(node))
            })
          })
          ctx.newLine()
        })
        ctx.newLine()
      })
    }
  })
}

function genChildren(node: { children: Node[] }): void {
  node.children.forEach((node) => {
    if (isTextNode(node)) {
      ctx.write('{')
      genTextNode(node)
      ctx.write('}')
      ctx.newLine()
    } else {
      genNode(node)
      ctx.newLine()
    }
  })
}

const aliasedAttrs: Record<string, string> = {
  class: 'staticClass',
  style: 'staticStyle',
}
function genProps(node: ElementNode | ComponentNode): void {
  if (node.props.length === 0) return

  const renderd = new Set<DirectiveNode>()
  const directives = node.props.filter(isDirectiveNode)
  node.props.forEach((prop) => {
    if (isAttributeNode(prop)) {
      genAttribute(prop)
      ctx.newLine()
    } else if (renderd.has(prop)) {
      // already rendered
    } else if (prop.name === 'bind') {
      genVBindDirective(prop)
      ctx.newLine()
    } else if (prop.name === 'on') {
      if (prop.arg == null) {
        ctx.write('{...(')
        if (prop.exp != null) {
          genExpressionNode(prop.exp)
        } else {
          ctx.write(
            annotations.missingExpression,
            createLoc(prop.loc, prop.loc.source.length),
          )
        }
        ctx.write(')}')
      } else {
        invarient(isSimpleExpressionNode(prop.arg))
        const id = prop.arg.content
        const all = directives.filter(
          (directive) =>
            directive.name === 'on' &&
            isSimpleExpressionNode(directive.arg) &&
            directive.arg.content === id,
        )

        all.forEach((dir) => ctx.write('', dir.loc))
        const genHandler = (): void => {
          ctx.write('$event => {').newLine()
          indent(() => {
            all.forEach((directive) => {
              renderd.add(directive)
              if (directive.exp == null) return
              // TODO: generate checks for modifiers
              ctx.write('(')
              genExpressionNodeAsFunction(directive.exp)
              ctx.write(')($event);').newLine()
            })
          })
          ctx.write('}')
        }

        if (isStaticExpression(prop.arg)) {
          ctx.write(`on${capitalize(prop.arg.content)}`)
          ctx.write('=')
          wrap('{', '}', genHandler)
        } else {
          ctx.write('{...({')
          ctx.write('[')
          genExpressionNode(prop.arg)
          ctx.write(']: ')
          genHandler()
          ctx.write('})}')
        }
      }
      ctx.newLine()
    } else if (prop.name === 'text' || prop.name === 'html') {
      const key = prop.name === 'text' ? 'textContent' : 'innerHTML'
      ctx.write(key, prop.loc).write('=')
      wrap('{', '}', () => {
        if (prop.exp != null) {
          genExpressionNode(prop.exp)
        } else {
          ctx.write(annotations.missingExpression)
        }
      })
      ctx.newLine()
    }
  })
}

function genAttribute(prop: AttributeNode): void {
  ctx.write(aliasedAttrs[prop.name] ?? prop.name, prop.nameLoc, true)
  if (prop.value != null) {
    ctx.write('=')
    genTextNode(prop.value)
  }
}

function genVBindDirective(prop: DirectiveNode): void {
  if (isStaticExpression(prop.arg)) {
    genNode(prop.arg)
    if (prop.exp != null) {
      ctx.write('=')
      ctx.write('{')
      genExpressionNode(prop.exp)
      ctx.write('}')
    }
  } else if (prop.arg != null) {
    ctx.write('{...({[')
    genExpressionNode(prop.arg)
    ctx.write(']')
    if (prop.exp != null) {
      ctx.write(': ')
      genExpressionNode(prop.exp)
    } else {
      ctx.write(': true')
    }
    ctx.write('})}')
  } else {
    ctx.write('{...(')
    if (prop.exp != null) {
      genExpressionNode(prop.exp)
    } else {
      ctx.write(
        annotations.missingExpression,
        createLoc(prop.loc, prop.loc.source.length),
      )
    }
    ctx.write(')}')
  }
}

function genTextNode(node: TextNode): void {
  ctx.write(JSON.stringify(node.content), node.loc, true)
}

function genInterpolationNode(node: InterpolationNode): void {
  ctx.write('{', node.loc)
  genExpressionNode(node.content)
  ctx.write(
    '}',
    createLoc(node.loc, node.content.loc.end.offset - node.loc.start.offset),
  )
}

function genExpressionNode(node: ExpressionNode): void {
  if (isSimpleExpressionNode(node)) {
    genSimpleExpressionNode(node)
  } else {
    genCompoundExpressionNode(node)
  }
}

function genExpressionNodeAsFunction(node: ExpressionNode): void {
  invarient(
    isSimpleExpressionNode(node),
    'v-on directive expression must be simple.',
  )

  if (
    // is identifier?
    isSimpleIdentifier(node.content) ||
    // is arrow function expression?
    /^(\([^)]*\)|[A-Za-z$_][A-Za-z0-9$_]*)\s*=>/i.test(node.content.trim()) ||
    // is function expression?
    /^function[\s(]/.test(node.content.trim())
  ) {
    genSimpleExpressionNode(node)
  } else {
    node.content.includes('$event')
      ? ctx.write('($event) => {').newLine()
      : ctx.write('() => {').newLine()
    genSimpleExpressionNode(node)
    ctx.newLine().write('}')
  }
}

function genSimpleExpressionNode(node: SimpleExpressionNode): void {
  ctx.write(node.content, node.loc, true)
}

function genCompoundExpressionNode(node: CompoundExpressionNode): void {
  node.children.forEach((node) => {
    if (typeof node === 'string') {
      ctx.write(node)
    } else if (typeof node === 'symbol') {
      throw new Error('Unsupported symbol node')
    } else {
      genNode(node)
    }
  })
}

function createGenerateContext(options: NodeTransformContext): GenerateContext {
  let indent = 0
  let output = ''
  let line = 0
  let column = 0
  const names: string[] = []
  const mappings: DecodedSourceMap['mappings'] = [[]]
  let shouldIndent = false

  const nl = '\n'

  function push(
    chunk: string,
    loc?: SourceLocation,
    addMappingType: boolean = false,
  ): void {
    output += chunk
    const lines = chunk.split(nl)
    if (loc != null) {
      let index: number | null = null
      if (addMappingType) {
        const name = loc.source.startsWith(chunk)
          ? `<<P>>${chunk.length}`
          : loc.source.endsWith(chunk)
          ? `<<S>>${loc.source.length}|${chunk.length}`
          : `<<T>>${loc.source.length}|${chunk.length}`
        index = names.indexOf(name)
        if (index === -1) {
          index = names.push(name) - 1
        }
      }
      mappings[line]?.push(
        index != null
          ? [column, 0, loc.start.line - 1, loc.start.column - 1, index]
          : [column, 0, loc.start.line - 1, loc.start.column - 1],
      )
    } else {
      mappings[line]?.push([column])
    }
    if (lines.length > 1) {
      line += lines.length - 1
      column = last(lines).length
    } else {
      column += chunk.length
    }
    for (let i = mappings.length; i <= line; i++) {
      mappings.push([])
    }
  }

  const context: GenerateContext = {
    ...options,
    write(code, loc, addMappingType) {
      if (shouldIndent) {
        shouldIndent = false
        push(' '.repeat(indent))
      }

      push(code, loc, addMappingType)

      return context
    },
    newLine() {
      push(nl)
      shouldIndent = true

      return context
    },
    indent() {
      indent = Math.max(0, indent) + 2
      return context
    },
    deindent() {
      indent = Math.max(0, indent - 2)
      return context
    },
    getOutput() {
      return {
        code: output,
        map: {
          file: options.fileName,
          sources: [],
          sourcesContent: [],
          names,
          mappings,
        },
      }
    },
  }

  return context
}

function isStaticExpression(node?: Node): node is SimpleExpressionNode {
  return isSimpleExpressionNode(node) && node.isStatic
}

function genSlotTypes(root: RootNode): void {
  const slots: Array<[ElementNode, TraversalAncestors]> = []

  traverse(root, (node, ancestors) => {
    if (isSlotNode(node)) {
      slots.push([node, ancestors.slice()])
    }
  })

  writeLine(annotations.diagnosticsIgnore.start)
  ctx.write(`function ${ctx.internalIdentifierPrefix}slots() {`).newLine()
  indent(() => {
    genGlobalDeclartions(root)
    ctx
      .write(`return ${getRuntimeFn(ctx.internalIdentifierPrefix, 'flat')}([`)
      .newLine()
    indent(() => {
      for (const [slot, ancestors] of slots) {
        recurse(
          ancestors
            .slice()

            .filter((path) => isForNode(path.node))
            .map((path) => path.node as ForNode),
          {
            enter(node) {
              ctx.write(getRuntimeFn(ctx.internalIdentifierPrefix, 'flat'))
              ctx.write('(')
              ctx.newLine().indent()
              ctx.write(
                getRuntimeFn(ctx.internalIdentifierPrefix, 'renderList'),
              )
              ctx.write('(')
              genForNodeArgs(node)
              ctx.write(' => (')
              ctx.newLine().indent()
            },
            exit() {
              ctx.deindent().newLine()
              ctx.write('))')
              ctx.deindent().newLine()
              ctx.write(')')
            },
            fn() {
              const name = findProp(slot, 'name', false, true)
              ctx.write('{').newLine()
              indent(() => {
                if (isAttributeNode(name)) {
                  if (name.value != null) {
                    ctx.write(JSON.stringify(name.value.content))
                  } else {
                    ctx.write('undefined')
                  }
                } else if (isDirectiveNode(name)) {
                  ctx.write('[')
                  if (name.exp != null) {
                    genExpressionNode(name.exp)
                  } else {
                    ctx.write('undefined')
                  }
                  ctx.write(']')
                } else {
                  ctx.write('default')
                }
                ctx.write(': ')
                ctx.write('{').newLine()
                indent(() => {
                  slot.props.forEach((prop) => {
                    if (prop === name) return
                    genObjectProperty(prop)
                  })
                })
                ctx.write('},').newLine()
              })
              ctx.write('}')
            },
          },
        )
        ctx.write(',').newLine()
      }
    })
    ctx.write('])').newLine()
  })
  ctx.write('}').newLine()
  writeLine(annotations.diagnosticsIgnore.end)
}

function genObjectProperty(
  prop: AttributeNode | DirectiveNode,
  newLine = true,
): void {
  if (isAttributeNode(prop)) {
    breakMapping(prop.loc)
    ctx.write(prop.name, prop.nameLoc, true).write(': ')
    if (prop.value != null) {
      genTextNode(prop.value)
    } else {
      ctx.write('true')
    }
    ctx.write(',')
    if (newLine) ctx.newLine()
  } else if (prop.name !== 'bind') {
    // not supported
  } else if (prop.arg != null) {
    breakMapping(prop.loc)
    if (isStaticExpression(prop.arg)) {
      if (/^[a-zA-Z_$0-9]+$/.test(prop.arg.content)) {
        ctx.write(prop.arg.content, prop.arg.loc, true).write(': ')
      } else {
        ctx.write(JSON.stringify(prop.arg.content), prop.arg.loc, true)
      }
    } else {
      ctx.write('[', prop.loc)
      genExpressionNode(prop.arg)
      ctx.write(']')
    }

    ctx.write(': ')
    if (prop.exp != null) {
      genExpressionNode(prop.exp)
    } else {
      ctx.write('true')
    }
    ctx.write(',')
    if (newLine) ctx.newLine()
  } else if (prop.exp != null) {
    ctx.write('...(', prop.loc)
    genExpressionNode(prop.exp)
    ctx.write(')')
    ctx.write(',')
    if (newLine) ctx.newLine()
  }
}

function recurse<T>(
  items: T[],
  options: { enter?(node: T): void; exit?(node: T): void; fn(): void },
): void {
  for (const item of items) {
    if (options.enter != null) options.enter(item)
  }
  options.fn()
  for (const item of items) {
    if (options.exit != null) options.exit(item)
  }
}

// function isIfNode(node: Node): node is IfNode {
//   return node.type === NodeTypes.IF
// }

function isForNode(node: Node): node is ForNode {
  return node.type === NodeTypes.FOR
}

function genForNodeArgs(node: ForNode): void {
  const context = ctx
  const forExps = node.parseResult
  // Source
  if (isSimpleExpressionNode(forExps.source)) {
    const quote = !isSimpleIdentifier(forExps.source.content)
    if (quote) context.write('(')
    context.write(forExps.source.content, forExps.source.loc, true)
    if (quote) context.write(')')
  } else {
    context.write('undefined')
  }
  context.write(', ')

  // Handler Args
  context.write('(')
  const args = ['_', '__']
  if (isSimpleExpressionNode(forExps.value)) {
    context.write(forExps.value.content, forExps.value.loc, true)
  } else if (forExps.key != null || forExps.index != null) {
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.key)) {
    context.write(', ')
    context.write(forExps.key.content, forExps.key.loc, true)
  } else if (forExps.index != null) {
    context.write(', ')
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.index)) {
    context.write(', ')
    context.write(forExps.index.content, forExps.index.loc, true)
  }
  context.write(')')
}

function genCommentNode(node: CommentNode): void {
  ctx.write('/*').write(node.content, node.loc).write('*/')
}

function genForNode(node: ForNode): void {
  wrap('{', '}', () => {
    ctx.newLine()
    indent(() => {
      genFn(getRuntimeFn(ctx.internalIdentifierPrefix, 'renderList'), () => {
        genForNodeArgs(node)
        ctx.write(' => {').newLine()
        indent(() => {
          genNodeHoists(node)
          wrap('return (', ')', () => {
            if (node.children.length === 1) {
              ctx.newLine()
              indent(() => genChildren(node))
            } else {
              wrap('<>', '</>', () => {
                ctx.newLine()
                indent(() => genChildren(node))
              })
            }
          })
        })
        ctx.newLine().write('}')
      })
    })
    ctx.newLine()
  })
}

function genFn(name: string, fn: () => void): void {
  wrap(`${name}(`, ')', fn)
}

function wrap(open: string, close: string, fn: () => void): void {
  ctx.write(open)
  fn()
  ctx.write(close)
}

function genIfNode(node: IfNode): void {
  wrap('{', '}', () => {
    let i = 0
    let hasElse = false
    const n = node.branches.length - 1
    recurse(node.branches, {
      enter(branch) {
        if (i > 0) indent(() => ctx.write(': '))
        if (branch.condition != null) {
          genExpressionNode(branch.condition)
          ctx.newLine()
          indent(() => ctx.write('? '))
        } else if (i < n) {
          ctx.write(annotations.missingExpression, node.loc).newLine()
          ctx.newLine()
          indent(() => ctx.write('? '))
        } else {
          hasElse = true
        }
        ++i
        indent(() => {
          indent(() => {
            wrap('<>', '</>', () => {
              ctx.newLine()
              indent(() => genChildren(branch))
            })
          })
        })
        ctx.newLine()
      },
      fn() {
        if (!hasElse) {
          ctx.write('  : null').newLine()
        }
      },
    })
  })
}

function genTemplateNode(node: TemplateNode): void {
  wrap('<>', '</>', () => {
    ctx.newLine()
    indent(() => genChildren(node))
  })
}

function breakMapping(loc: SourceLocation): void {
  // Break mapping
  ctx.deindent()
  ctx.write('  ', loc)
  ctx.indent()
}
