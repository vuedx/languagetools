import {
  CompoundExpressionNode,
  findProp,
  ForNode,
  IfNode,
} from '@vue/compiler-core'
import { camelCase, last } from '@vuedx/shared'
import {
  AttributeNode,
  CommentNode,
  ComponentNode,
  DirectiveNode,
  ElementNode,
  InterpolationNode,
  isAttributeNode,
  isCommentNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isPlainElementNode,
  isRootNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
  isTextNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  SourceLocation,
  TextNode,
} from '@vuedx/template-ast-types'
import * as Path from 'path'
import { RawSourceMap, SourceNode } from 'source-map'
import type { CustomTransformContext } from './transforms/CustomTransformContext'
import { createLoc } from './utils'

export interface GenerateResult {
  code: string
  map: RawSourceMap
}

export interface GenerateOptions {
  fileName: string
  templateId: string
  templateContent: string
  customContext: CustomTransformContext
  preamble?: string
  selfName: string
  on(
    event:
      | 'begin'
      | 'end'
      | 'beforeImports'
      | 'afterImports'
      | 'renderBodyIgnored'
      | 'renderBody'
      | 'beforeRenderReturn',
    context: GenerateContext,
  ): void
}

interface GenerateContext {
  write(
    code: string,
    loc?: SourceLocation,
    kind?: 'copy' | 'transformed',
  ): GenerateContext
  newLine(): GenerateContext
  indent(): GenerateContext
  deindent(): GenerateContext
  getOutput(): { code: string; map: RawSourceMap }
}

function createGenerateContext(
  fileName: string,
  templateId: string,
  templateContent: string,
): GenerateContext {
  let indent = 0
  const output: Array<string | SourceNode> = []

  const writeText = (code: string): void => {
    const chunk = output[output.length - 1]
    if (typeof chunk === 'string') {
      output[output.length - 1] = chunk + code
    } else {
      output.push(code)
    }
  }

  const nl = new SourceNode(null as any, null as any, null as any, '\n')

  const context: GenerateContext = {
    write(code, loc, kind) {
      if (output.length > 0) {
        const el = last(output)
        if (el === nl) {
          writeText(' '.repeat(indent))
        }
      }

      if (loc != null) {
        output.push(
          new SourceNode(
            loc.start.line,
            loc.start.column - 1,
            templateId,
            code,
            `;;;VueDX:${JSON.stringify({
              kind: kind ?? (code === loc.source ? 'copy' : 'transformed'),
              gen: { length: code.length },
              src: { start: loc.start.offset, end: loc.end.offset },
            })}`,
          ),
        )
      } else {
        writeText(code)
      }

      return context
    },
    newLine() {
      output.push(nl)

      return context
    },
    indent() {
      indent += 2
      return context
    },
    deindent() {
      indent = Math.max(0, indent - 2)
      return context
    },
    getOutput() {
      const node = new SourceNode(
        null as any,
        null as any,
        null as any,
        output as any,
      )

      node.setSourceContent(templateId, templateContent)
      const result = node.toStringWithSourceMap({
        file: fileName,
        sourceRoot: Path.posix.dirname(fileName),
      })

      return { code: result.code, map: JSON.parse(result.map.toString()) }
    },
  }

  return context
}

export const annotations = {
  diagnosticsIgnore: {
    start: '/*<vuedx:diagnosticsIgnore>*/',
    end: '/*</vuedx:diagnosticsIgnore>*/',
  },
  templateGlobals: {
    start: '/*<vuedx:templateGlobals>*/',
    end: '/*</vuedx:templateGlobals>*/',
  },
  missingExpression: '/*<vuedx:missingExpression>*/',
  tsxCompletions: '/*<vuedx:tsx-competions-target/>*/',
  tsCompletions: '/*<vuedx:ts-competions-target/>*/',
}
export function generate(
  ast: RootNode,
  options: GenerateOptions,
): GenerateResult {
  const context = createGenerateContext(
    options.fileName,
    options.templateId,
    options.templateContent,
  )

  options.on('begin', context)
  context.write(annotations.diagnosticsIgnore.start).newLine()
  options.on('beforeImports', context)
  options.customContext.scope.getTopLevelNodes().forEach((node) => {
    genExpressionNode(context, node)
    context.newLine()
  })
  options.on('afterImports', context)

  context
    .write(`export function _render(_ctx: _Self): any {`)
    .newLine()
    .indent()
  context.write(annotations.templateGlobals.start).newLine()
  ast.scope.globals.forEach((id) => {
    context.write(`let ${id} = _ctx.${id};`).newLine()
  })
  context.write(annotations.templateGlobals.end).newLine()

  context
    .write(`${annotations.tsxCompletions}<></>;`)
    .newLine()
    .write(`_ctx.${annotations.tsCompletions}$;`)
    .newLine()

  options.on('renderBodyIgnored', context)
  context.write(annotations.diagnosticsIgnore.end).newLine()

  options.on('renderBody', context)
  options.customContext.scope.popHoistScope().forEach((node) => {
    genExpressionNode(context, node)
    context.newLine()
  })
  options.on('beforeRenderReturn', context)

  context.newLine()
  genTemplateChildNode(context, ast)

  context.newLine().deindent().write(`}`).newLine()
  options.on('end', context)

  return context.getOutput()
}

function genTemplateChildNode(context: GenerateContext, node: Node): void {
  if (isRootNode(node)) genRootNode(context, node)
  else if (isElementNode(node)) genElementNode(context, node)
  else if (isInterpolationNode(node)) genInterpolationNode(context, node)
  else if (isCommentNode(node)) genCommentNode(context, node)
  else if (isTextNode(node)) genTextNode(context, node)
  else if (isIfNode(node)) genIfNode(context, node)
  else if (isForNode(node)) genForNode(context, node)
  else {
    console.trace(node)
    throw new Error(`Unsupported node type: ${node.type}`)
  }
}

function genRootNode(context: GenerateContext, node: RootNode): void {
  context.write('return (').newLine()
  context.indent()
  genChildren(context, node.children, { hasParentElement: false })
  context.deindent()
  context.write(')')
}

function genChildren(
  context: GenerateContext,
  children: Node[],
  { hasParentElement = true }: { hasParentElement: boolean },
): void {
  if (children.length === 1) {
    if (
      isPlainElementNode(children[0]) ||
      isComponentNode(children[0]) ||
      (isTextNode(children[0]) && hasParentElement)
    ) {
      genTemplateChildNode(context, children[0])
      context.newLine()
      return
    }
  }

  if (!hasParentElement) {
    context.write('<>').newLine()
    context.indent()
  }

  children.forEach((child) => {
    genTemplateChildNode(context, child)
    context.newLine()
  })
  if (!hasParentElement) {
    context.deindent()
    context.write('</>').newLine()
  }
}

function genSlotNode(context: GenerateContext, node: ElementNode): void {
  context.write('{')
  context.write('VueDX.internal.renderSlot(_ctx.$slots, ')
  const name = findProp(node, 'name', false, true)
  if (isAttributeNode(name)) {
    if (name.value != null) {
      context.write(
        JSON.stringify(name.value.content),
        name.value.loc,
        'transformed',
      )
    } else {
      context.write('undefined')
    }
  } else if (isDirectiveNode(name)) {
    if (name.exp != null) {
      genExpressionNode(context, name.exp, true)
    } else {
      context.write('undefined')
    }
  } else {
    context.write('"default"')
  }
  context.write(', { ')
  node.props.forEach((prop) => {
    if (prop === name) return
    if (isAttributeNode(prop)) {
      context
        .write(prop.name, createLoc(prop.loc, 0, prop.name.length))
        .write(': ')
      if (prop.value != null) {
        context.write(
          JSON.stringify(prop.value.content),
          prop.value.loc,
          'transformed',
        )
      } else {
        context.write('true')
      }
      context.write(', ')
    } else if (prop.name === 'bind') {
      if (prop.arg != null) {
        if (isStaticExpression(prop.arg)) {
          context.write(
            JSON.stringify(prop.arg.content),
            prop.arg.loc,
            'transformed',
          )
        } else {
          context.write('[')
          genExpressionNode(context, prop.arg)
          context.write(']')
        }

        context.write(': ')
        if (prop.exp != null) {
          genExpressionNode(context, prop.exp, true)
        } else {
          context.write('true')
        }
        context.write(', ')
      } else {
        if (prop.exp != null) {
          context.write('...(')
          genExpressionNode(context, prop.exp, false)
          context.write('), ')
        }
      }
    }
  })
  context.write('})')
  if (node.children.length > 0) {
    context.write(' ?? ')
    genChildren(context, node.children, { hasParentElement: false })
  }
  context.write('}')
}

function genElementNode(context: GenerateContext, node: ElementNode): void {
  if (node.tag === 'slot') {
    genSlotNode(context, node)
    return
  }

  context.write('<', node.loc, 'transformed')
  const startLoc = createLoc(node.loc, 1, node.tag.length)
  if (isComponentNode(node)) {
    context.write(node.resolvedName ?? node.tag, startLoc, 'transformed')
  } else if (node.tag !== 'template') {
    context.write(node.tag, startLoc, 'transformed')
  }

  context.indent()

  const groups: Record<string, DirectiveNode[]> = {}
  const useNewLines = node.props.length > 2
  node.props.forEach((prop) => {
    if (isAttributeNode(prop)) {
      if (useNewLines) context.newLine()
      else context.write(' ')
      genAttributeNode(context, prop)
    } else {
      if (shouldInlineDirectiveNode(prop)) {
        if (useNewLines) context.newLine()
        else context.write(' ')
        genPropDirectiveNode(context, prop)
      } else {
        const group = groups[prop.name]
        if (group != null) {
          group.push(prop)
        } else {
          groups[prop.name] = [prop]
        }
      }
    }
  })
  Object.values(groups).forEach((entry) => {
    if (useNewLines) context.newLine()
    else context.write(' ')
    genDirectives(context, node, entry, { useNewlines: useNewLines })
  })

  context.deindent()

  if (node.isSelfClosing) {
    context.write(' />')
  } else {
    context.write('>').newLine().indent()
    if (isComponentNode(node)) {
      genComponentSlots(context, node)
    } else {
      genChildren(context, node.children, {
        hasParentElement: true,
      })
    }
    context.deindent().write('</')
    const endLoc = createLoc(
      node.loc,
      node.loc.source.lastIndexOf('</') + 2,
      node.tag.length,
    )
    if (isComponentNode(node)) {
      context.write(node.resolvedName ?? node.tag, endLoc, 'transformed')
    } else if (node.tag !== 'template') {
      context.write(node.tag, endLoc, 'transformed')
    }
    context.write('>')
  }
}

function genAttributeNode(context: GenerateContext, node: AttributeNode): void {
  if (node.name === 'class') {
    context.write('data-class', node.loc, 'transformed')
  } else if (node.name === 'style') {
    context.write('data-style', node.loc, 'transformed')
  } else {
    context.write(node.name, node.loc, 'transformed')
  }

  genAttributeValue(context, node.value)
}

function shouldInlineDirectiveNode(node: DirectiveNode): boolean {
  return node.name === 'bind' && isStaticExpression(node.arg)
}

function isStaticExpression(node?: Node): node is SimpleExpressionNode {
  return isSimpleExpressionNode(node) && node.constType > 0
}

function genComponentSlots(
  context: GenerateContext,
  node: ComponentNode,
): void {
  if (
    node.resolvedName == null &&
    node.slots.length === 1 &&
    node.slots[0]?.args == null &&
    node.slots[0]?.name == null
  ) {
    genChildren(context, node.slots[0]?.children ?? [], {
      hasParentElement: true,
    })

    return
  }

  context.write('{')
  const loc = createLoc(node.loc, 1, node.tag.length)
  if (node.resolvedName != null) {
    context.write(
      `VueDX.internal.checkSlots(${node.resolvedName}, `,
      loc,
      'transformed',
    )
  }
  context.write('{')
  if (node.slots.length > 0 || node.children.length > 0) context.newLine()
  context.indent()
  node.slots.forEach((node) => {
    if (isSimpleExpressionNode(node.name)) {
      const isConstant = isStaticExpression(node.name)
      if (isConstant) {
        context.write(node.name.content, node.name.loc, 'copy')
        context.write(': ')
      } else {
        context.write('[')
        genExpressionNode(context, node.name)
        context.write(']: ')
      }
    } else context.write('default: ', loc, 'transformed')

    context.write('(')
    if (isSimpleExpressionNode(node.args)) {
      genExpressionNode(context, node.args)
    }
    context.write(') => {').newLine()

    context.indent()
    // START BODY
    context.write('return (').newLine()
    context.indent()
    genChildren(context, node.children, { hasParentElement: false })
    context.deindent()
    context.write(')').newLine()
    // END BODY
    context.deindent()

    context.write('},').newLine()
  })
  if (node.children.length > 0) {
    context
      .write(`[Symbol.for('VueDX:UnknownSlot')]: () => {`, loc, 'transformed')
      .newLine()
    context.indent()
    if (node.hoists != null) {
      node.hoists.forEach((node) => {
        genExpressionNode(context, node)
        context.newLine()
      })
    }
    // START BODY
    context.write('return (').newLine()
    context.indent()
    genChildren(context, node.children, { hasParentElement: false })
    context.deindent()
    context.write(')').newLine()
    // END BODY
    context.deindent()
    context.write('},').newLine()
  }
  context.deindent()
  context.write('}')
  if (node.resolvedName != null) context.write(')')
  context.write('}')
  context.newLine()
}

function genBindGroupDirectiveNode(
  context: GenerateContext,
  nodes: DirectiveNode[],
  options: { useNewlines: boolean },
): void {
  if (nodes.length === 0) return
  // Only dynamic and spread properties should come here.

  const shouldUseNewLine = options.useNewlines

  context.write('{...({')
  if (shouldUseNewLine) {
    context.indent()
  }

  nodes.forEach((node) => {
    if (!shouldUseNewLine) context.write(' ')
    else context.newLine()
    if (node.arg != null) {
      context.write('[')
      genExpressionNode(context, node.arg)
      context.write(']: ')
      if (node.exp != null) {
        genExpressionNode(context, node.exp, true)
      } else {
        context.write('undefined')
      }
      context.write(',')
    } else if (node.exp != null) {
      context.write('...(')
      genExpressionNode(context, node.exp, false)
      context.write('),')
    }
  })

  if (shouldUseNewLine) {
    context.newLine().deindent()
  } else {
    context.write(' ')
  }
  context.write('})}')
}

function genOnGroupDirectiveNode(
  context: GenerateContext,
  node: ElementNode,
  directives: DirectiveNode[],
  options: { useNewlines: boolean },
): void {
  if (directives.length === 0) return
  const byEventName: Record<string, DirectiveNode[]> = {}
  const componentName =
    (isComponentNode(node) ? node.resolvedName : undefined) ??
    JSON.stringify(node.tag)
  const others: DirectiveNode[] = []
  directives.forEach((directive) => {
    if (isStaticExpression(directive.arg)) {
      const eventName = getEventName(directive.arg.content)
      ;(byEventName[eventName] ?? (byEventName[eventName] = [])).push(directive)
    } else {
      others.push(directive)
    }
  })
  Object.entries(byEventName).forEach(([eventName, directives]) => {
    context.write(eventName)
    context.write('={VueDX.internal.checkDirective("on", ')
    context.write(componentName).write(', [')
    context.newLine().indent().indent()
    directives.forEach((directive) => {
      context.write('{').newLine().indent()
      if (directive.arg != null) {
        context.write('arg: ')
        genExpressionNode(context, directive.arg)
        context.write(',').newLine()
      }
      if (directive.exp != null) {
        context.write('exp: ')
        genEventHandler(context, directive.exp)
        context.write(',').newLine()
      }
      if (directive.modifiers.length > 0) {
        context.write('modifiers: { ')
        directive.modifiers.forEach((name) => {
          context.write(name).write(': true, ') // TODO: Generate location for modifiers
        })
        context.write('},').newLine()
      }
      context.deindent()
      context.write('},').newLine()
    })
    context.deindent()
    context.write('])}').deindent()

    if (options.useNewlines) context.newLine()
    else context.write(' ')
  })

  genDirectives(context, node, others, { useNewlines: true, force: true })
}

function getEventName(name: string): string {
  const camelName = name
    .split(':')
    .map((chunk) => camelCase(chunk))
    .join(':')
  const eventName =
    'on' + camelName.substr(0, 1).toUpperCase() + camelName.substr(1)
  return eventName
}

function genPropDirectiveNode(
  context: GenerateContext,
  node: DirectiveNode,
): void {
  if (!shouldInlineDirectiveNode(node)) return
  if (node.name === 'bind') {
    if (isStaticExpression(node.arg)) {
      context.write(camelCase(node.arg.content), node.arg.loc, 'transformed')
      genAttributeValue(context, node.exp)
    }
  } else if (node.name === 'on') {
    if (isStaticExpression(node.arg)) {
      const name = node.arg.content
        .split(':')
        .map((chunk) => camelCase(chunk))
        .join(':')
      context.write(
        'on' + name.substr(0, 1).toUpperCase() + name.substr(1),
        node.arg.loc,
        'transformed',
      )
      genAttributeValue(context, node.exp, true)
    }
  }
}

function genAttributeValue(
  context: GenerateContext,
  node: TextNode | SimpleExpressionNode | CompoundExpressionNode | undefined,
  isEvent = false,
): void {
  if (node == null) return

  context.write('=')
  if (isStaticExpression(node) || isTextNode(node)) {
    context.write(JSON.stringify(node.content), node.loc, 'transformed')
  } else {
    context.write('{')
    if (isEvent) {
      genEventHandler(context, node)
    } else {
      genExpressionNode(context, node)
    }
    context.write('}')
  }
}

function genEventHandler(
  context: GenerateContext,
  node: SimpleExpressionNode | CompoundExpressionNode,
): void {
  let shouldWrap = false
  if (isSimpleExpressionNode(node)) {
    if (
      !isSimpleIdentifier(node.content) &&
      !node.content.includes('=>') &&
      !node.content.trim().startsWith('function')
    ) {
      shouldWrap = true
    }
  }

  if (shouldWrap) context.write('($event) => {').newLine().indent()
  genExpressionNode(context, node)
  if (shouldWrap) context.newLine().deindent().write('}')
}

function genDirectives(
  context: GenerateContext,
  node: ElementNode,
  directives: DirectiveNode[],
  options: { useNewlines: boolean; force?: boolean },
): void {
  const dir = directives[0]
  if (dir == null || directives.length === 0) return
  if (options.force !== true) {
    if (dir.name === 'on') {
      return genOnGroupDirectiveNode(context, node, directives, options)
    } else if (dir.name === 'bind') {
      return genBindGroupDirectiveNode(context, directives, options)
    }
  }

  const componentName =
    (isComponentNode(node) ? node.resolvedName : undefined) ??
    JSON.stringify(node.tag)
  const directiveName = dir.resolvedName ?? JSON.stringify(dir.name)
  context.write(`data-vuedx-directive-${dir.name}={`)
  if (dir.name === 'model') {
    if (node.tag === 'input') {
      context.write('VueDX.internal.checkInputModelDirective(')
      const type = findProp(node, 'type', false, true)
      if (isAttributeNode(type) && type.value != null) {
        context.write(
          JSON.stringify(type.value.content),
          type.value.loc,
          'transformed',
        )
        context.write(' ?? ')
      } else if (isDirectiveNode(type) && type.exp != null) {
        genExpressionNode(context, type.exp)
        context.write(' ?? ')
      }
      context.write('"text", ')
    } else {
      context.write(`VueDX.internal.checkModelDirective(${componentName}, `)
    }
  } else {
    context.write(`VueDX.internal.checkDirective(`)
    context.write(
      directiveName,
      createLoc(dir.loc, 0, dir.name.length + 2),
      'transformed',
    )
    context.write(`, ${componentName}, `)
  }

  context.write(`[`).indent().newLine()
  directives.forEach((node) => {
    context.write('{').newLine().indent()
    if (node.arg != null) {
      context.write(' arg: ')
      genExpressionNode(context, node.arg)
      context.write(', ').newLine()
    }
    if (node.exp != null) {
      context.write(' exp: ')
      genExpressionNode(context, node.exp)
      context.write(',').newLine()
    }
    if (node.modifiers.length > 0) {
      context.write(' modifiers: { ')
      node.modifiers.forEach((name) => {
        context.write(JSON.stringify(name)).write(': true, ') // TODO: Generate position of modifier
      })
      context.write('},').newLine()
    }
    context.deindent().write('},').newLine()
  })
  context.deindent()
  context.write('])}')
}

function genTextNode(context: GenerateContext, node: TextNode): void {
  if (
    node.content.includes('<') ||
    node.content.includes('>') ||
    node.content.includes('{') ||
    node.content.includes('}')
  ) {
    context.write(`{${JSON.stringify(node.content)}}`, node.loc, 'transformed')
  } else {
    context.write(node.content, node.loc, 'transformed')
  }
}

function genInterpolationNode(
  context: GenerateContext,
  node: InterpolationNode,
): void {
  context.write('{')
  genExpressionNode(context, node.content)
  context.write('}')
}

function genCommentNode(context: GenerateContext, node: CommentNode): void {
  context.write('{/*')
  context.write(node.content.replace(/\*\//g, '*\u200b/'))
  context.write('*/}')
}

function genExpressionNode(
  context: GenerateContext,
  node: SimpleExpressionNode | CompoundExpressionNode,
  wrapInParantheses = false,
): void {
  if (isSimpleExpressionNode(node)) {
    if (node.content.trim() === '') {
      context.write(annotations.missingExpression, node.loc, 'transformed')
    } else if (node.constType > 0) {
      context.write(JSON.stringify(node.content), node.loc, 'transformed')
    } else {
      const ok = wrapInParantheses && node.content.includes(',')
      if (ok) context.write('(')
      context.write(node.content, node.loc, 'copy')
      if (ok) context.write(')')
    }
  } else {
    if (wrapInParantheses) context.write('(')
    node.children.forEach((node) => {
      if (typeof node === 'string') {
        context.write(node)
      } else if (typeof node === 'symbol') {
        throw new Error('Unexpected symbols in compound expression')
      } else if (isTextNode(node)) {
        genTextNode(context, node)
      } else if (isInterpolationNode(node)) {
        genExpressionNode(context, node.content)
      } else {
        genExpressionNode(context, node)
      }
    })
    if (wrapInParantheses) context.write(')')
  }
}

function isIfNode(node: Node): node is IfNode {
  return node.type === 9 /* NodeTypes.IF */
}

function isForNode(node: Node): node is ForNode {
  return node.type === 11 /* NodeTypes.IF */
}

function genForNode(context: GenerateContext, node: ForNode): void {
  context.write('{').indent().newLine()
  context.write('VueDX.internal.renderList(')
  const forExps = node.parseResult
  // Source
  if (isSimpleExpressionNode(forExps.source)) {
    const quote = !isSimpleIdentifier(forExps.source.content)
    if (quote) context.write('(')
    context.write(forExps.source.content, forExps.source.loc, 'copy')
    if (quote) context.write(')')
  } else {
    context.write('undefined')
  }
  context.write(', ')

  // Handler
  context.write('(')
  // - Args
  const args = ['_', '__']
  if (isSimpleExpressionNode(forExps.value)) {
    context.write(forExps.value.content, forExps.value.loc, 'copy')
  } else if (forExps.key != null || forExps.index != null) {
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.key)) {
    context.write(', ')
    context.write(forExps.key.content, forExps.key.loc, 'copy')
  } else if (forExps.index != null) {
    context.write(', ')
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.index)) {
    context.write(', ')
    context.write(forExps.index.content, forExps.index.loc, 'copy')
  }
  // - Body
  context.write(') => {').newLine().indent()
  node.hoists.forEach((node) => {
    genExpressionNode(context, node)
    context.newLine()
  })

  context.write('return (').indent().newLine()
  genChildren(context, node.children, { hasParentElement: false })
  context.deindent().write(')').newLine()
  context.deindent().write('})')
  context.deindent().newLine().write('}')
}
function genIfNode(context: GenerateContext, node: IfNode): void {
  context.write('{').newLine()
  context.indent()
  let hasElse = false
  const n = node.branches.length - 1
  node.branches.forEach((node, i) => {
    let indent = 0
    if (i > 0) context.write('  : ')
    if (node.condition != null) {
      context.write('(')
      genExpressionNode(context, node.condition)
      context.write(')').newLine()
      context.indent().write('? ')
      ++indent
    } else if (i < n) {
      context.write('( )', node.loc).newLine()
      context.indent().write('? ')
      ++indent
    } else {
      hasElse = true
      context.indent()
      ++indent
    }

    context.indent()
    ++indent
    genChildren(context, node.children, { hasParentElement: false })
    while (indent-- > 0) context.deindent()
  })

  if (!hasElse) context.write('  : null').newLine()
  context.deindent()
  context.write('}')
}
