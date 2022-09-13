import {
  AttributeNode,
  BaseElementNode,
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
import { capitalize, invariant, last } from '@vuedx/shared'
import {
  ElementTypes,
  isAttributeNode,
  isComponentNode,
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
  typeGuards: Array<SimpleExpressionNode | CompoundExpressionNode | undefined>
}

export const annotations = {
  /**
   * Mark range to ignore diagnostics.
   */
  diagnosticsIgnore: {
    start: '/*<vuedx:diagnosticsIgnore>*/',
    end: '/*</vuedx:diagnosticsIgnore>*/',
  },

  /**
   * Used to define range for hoists or defining global variables.
   */
  templateGlobals: {
    start: '/*<vuedx:templateGlobals>*/',
    end: '/*</vuedx:templateGlobals>*/',
  },

  /**
   * Used to define range for return from setup() function, generated from <script setup>
   */
  setupGlobals: {
    start: '/*<vuedx:setupGlobals>*/',
    end: '/*</vuedx:setupGlobals>*/',
  },

  /**
   * Missing expression in v-if or v-else-if.
   */
  missingExpression: '/*<vuedx:missingExpression>*/',

  /**
   * Used in every JSX element to provide position for attribute completion.
   */
  tsxCompletions: '/*<vuedx:tsx-completions-target/>*/',

  /**
   * Used once in render function to get completions from context.
   */
  tsCompletions: '/*<vuedx:ts-completions-target/>*/',
}

let ctx: GenerateContext
export function generate(
  root: RootNode,
  options: NodeTransformContext,
): TransformedCode {
  ctx = createGenerateContext(options)

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
    genGlobalDeclarations(node)
    genNodeHoists({ hoists: ctx.scope.getTopLevelNodes() })
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

function genDirectiveChecks(el: BaseElementNode): void {
  const directives = el.props.filter(isDirectiveNode).filter((directive) => {
    return !['on', 'bind', 'text', 'html', 'model'].includes(directive.name)
  })

  if (directives.length === 0) return

  wrap('{(() => {', '})()}', () =>
    indent(() => {
      ctx.newLine()
      directives.forEach((directive) => {
        ctx.write(`${getRuntimeFn(ctx.typeIdentifier, 'checkDirective')}(`)
        ctx.write(
          directive.resolvedName ?? asConst(JSON.stringify(directive.name)),
          createLoc(directive.loc, 0, 2 + directive.name.length),
          true,
        )
        ctx.write(', ')

        if (isComponentNode(el)) {
          ctx.write(
            el.resolvedName ?? asConst(JSON.stringify(el.tag)),
            el.tagLoc,
          )
        } else {
          ctx.write(asConst(JSON.stringify(el.tag)), el.tagLoc)
        }
        ctx.write(', ')

        if (directive.arg != null) genExpressionNode(directive.arg)
        else ctx.write('undefined')
        ctx.write(', ')
        if (directive.exp != null) genExpressionNode(directive.exp)
        else ctx.write('undefined')
        ctx.write(', ')
        wrap('{ ', ' }', () => {
          directive.modifiers.forEach((modifier, index) => {
            if (modifier.trim() === '') return
            ctx.write(
              `${JSON.stringify(modifier)}`,
              directive.modifierLocs[index],
              true,
            )
            ctx.write(': true, ')
          })
        })
        ctx.write(');')
        ctx.newLine()
      })
    }),
  )

  ctx.newLine() // rendered before element or component, so add a new line
}

function genGlobalDeclarations(node: Node): void {
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
  genDirectiveChecks(node)
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

  genDirectiveChecks(node)
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
    wrap('{', '}', () => {
      ctx.write(
        `${getRuntimeFn(ctx.typeIdentifier, 'checkSlots')}(${
          node.resolvedName ?? node.tag
        }, {`,
      )
      ctx.newLine()
      indent(() => {
        node.slots.forEach((slotNode) => {
          if (slotNode.name == null) {
            ctx.write(`default`)
          } else if (isStaticExpression(slotNode.name)) {
            ctx.write(JSON.stringify(slotNode.name.content), slotNode.name.loc)
          } else {
            ctx.write('[')
            genExpressionNode(slotNode.name)
            ctx.write(']')
          }
          ctx.write(': (')
          if (slotNode.args != null) {
            genExpressionNode(slotNode.args)
          }
          ctx.write(') => {').newLine()
          indent(() => {
            ctx.typeGuards.forEach((guard) => {
              if (guard == null) return
              ctx.write(`if(!(`)
              genExpressionNode(guard)
              ctx.write(')) throw new Error;').newLine()
            })
            genNodeHoists(slotNode)
            writeLine('return (')
            indent(() => {
              writeLine('<>')
              indent(() => genChildren(slotNode))
              writeLine('</>')
            })
            writeLine(')')
          })
          ctx.write('},').newLine()
        })
      })
      ctx.write('})')
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
      wrap(`${ctx.contextIdentifier}.$slots[`, ']?.({', () => {
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
function genProps(el: ElementNode | ComponentNode): void {
  if (el.props.length === 0) return

  const rendered = new Set<DirectiveNode>()
  const directives = el.props.filter(isDirectiveNode)
  el.props.forEach((prop) => {
    if (isAttributeNode(prop)) {
      genAttribute(prop)
      ctx.newLine()
    } else if (rendered.has(prop)) {
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
        invariant(isSimpleExpressionNode(prop.arg))
        const id = prop.arg.content
        const all = directives.filter(
          (directive) =>
            directive.name === 'on' &&
            isSimpleExpressionNode(directive.arg) &&
            directive.arg.content === id,
        )

        const genHandler = (): void => {
          const args = typeCastAs(
            typeCastAs('{}', `unknown`),
            `${ctx.jsxIdentifier}.JSX.IntrinsicElements`,
          )
          ctx.write('() => {').newLine()
          indent(() => {
            all.forEach((directive) => {
              rendered.add(directive)
              ctx.write(
                `${getRuntimeFn(
                  ctx.typeIdentifier,
                  'checkOnDirective',
                )}(${args}, `,
              )

              if (isComponentNode(el)) {
                ctx.write(
                  el.resolvedName ?? asConst(JSON.stringify(el.tag)),
                  el.tagLoc,
                )
              } else {
                ctx.write(asConst(JSON.stringify(el.tag)), el.tagLoc)
              }
              ctx.write(', ')

              if (directive.arg != null) {
                if (isStaticExpression(directive.arg)) {
                  ctx.write(
                    asConst(JSON.stringify(directive.arg.content)),
                    directive.arg.loc,
                  )
                } else {
                  genExpressionNode(directive.arg)
                }
              } else ctx.write('undefined')
              ctx.write(', ')
              if (directive.exp != null)
                genExpressionNodeAsFunction(directive.exp)
              else ctx.write('() => {}')
              ctx.write(', ')
              wrap('{ ', ' }', () => {
                directive.modifiers.forEach((modifier, index) => {
                  if (modifier.trim() === '') return
                  ctx.write(
                    `${JSON.stringify(modifier)}`,
                    directive.modifierLocs[index],
                    true,
                  )
                  ctx.write(': ')
                  ctx.write(asConst('true'))
                  ctx.write(', ')
                })
              })
              ctx.write(');')
              ctx.newLine()
            })
          })
          ctx.write('}')
        }

        if (isStaticExpression(prop.arg)) {
          ctx.write(`on${capitalize(prop.arg.content)}`, prop.arg.loc, true)
          ctx.write('=')
          wrap('{', '}', genHandler)
        } else {
          ctx.write('{...({')
          ctx.write('[')
          genExpressionNode(prop.arg) // TODO: Capitalize
          ctx.write(']: ')
          genHandler()
          ctx.write('})}')
        }
      }
      ctx.newLine()
    } else if (prop.name === 'text' || prop.name === 'html') {
      ctx.write('innerHTML', createLoc(prop.loc, 2, 4), true).write('=')
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
    if (isStaticExpression(node)) {
      ctx.write(JSON.stringify(node.content), node.loc, true)
    } else {
      genSimpleExpressionNode(node)
    }
  } else {
    genCompoundExpressionNode(node)
  }
}

function genExpressionNodeAsFunction(node: ExpressionNode): void {
  invariant(
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
    typeGuards: [],
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
    genGlobalDeclarations(root)
    ctx
      .write(
        `return ${getRuntimeFn(ctx.typeIdentifier, 'union')}(${getRuntimeFn(
          ctx.typeIdentifier,
          'flat',
        )}([`,
      )
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
              ctx.write(getRuntimeFn(ctx.typeIdentifier, 'flat'))
              ctx.write('(')
              ctx.newLine().indent()
              ctx.write(getRuntimeFn(ctx.typeIdentifier, 'renderList'))
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
    ctx.write(']))').newLine()
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
        ctx.write(prop.arg.content, prop.arg.loc, true)
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

function genForNode(forNode: ForNode): void {
  wrap('{', '}', () => {
    ctx.newLine()
    indent(() => {
      genFn(getRuntimeFn(ctx.typeIdentifier, 'renderList'), () => {
        genForNodeArgs(forNode)
        ctx.write(' => {').newLine()
        indent(() => {
          genNodeHoists(forNode)
          wrap('return (', ')', () => {
            if (forNode.children.length === 1) {
              ctx.newLine()
              indent(() => genChildren(forNode))
            } else {
              wrap('<>', '</>', () => {
                ctx.newLine()
                indent(() => genChildren(forNode))
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
        ctx.typeGuards.push(branch.condition)
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
      exit() {
        ctx.typeGuards.pop()
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

function asConst(value: string): string {
  return ctx.isTypeScript
    ? `${value} as const`
    : `/** @type {${value}} */ (${value})`
}

function typeCastAs(value: string, type: string): string {
  return ctx.isTypeScript
    ? `${value} as ${type}`
    : `/** @type {${type}} */ (${value})`
}
