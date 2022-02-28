/* eslint-disable spaced-comment */
import {
  CompoundExpressionNode,
  findProp,
  ForNode,
  IfNode,
} from '@vue/compiler-core'
import * as builtins from './builtins'
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
  isSlotNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
  isTextNode,
  Node,
  RootNode,
  SimpleExpressionNode,
  SourceLocation,
  TextNode,
  traverse,
  TraversalAncestors,
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

export interface MappingMetadata {
  k: MappingKind
  g: { l: number }
  s: { s: number; e: number }
}

export enum MappingKind {
  copy = 'c',
  transformed = 't',
  reverseOnly = 'r',
}

interface GenerateContext {
  write(code: string, loc?: SourceLocation, kind?: MappingKind): GenerateContext
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
        const mapping: MappingMetadata = {
          k:
            kind ??
            (code === loc.source ? MappingKind.copy : MappingKind.transformed),
          g: { l: code.length },
          s: { s: loc.start.offset, e: loc.end.offset },
        }

        output.push(
          new SourceNode(
            loc.start.line,
            loc.start.column - 1,
            templateId,
            code,
            `;;;VueDX:${JSON.stringify(mapping)}`,
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
      indent = Math.max(0, indent) + 2
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
  //#region 1 <
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

  context
    .newLine()
    //#endregion
    // > 1
    .deindent()
    .write(`}`)
    .newLine()
  options.on('end', context)

  genSlotTypes(ast, context)

  return context.getOutput()
}

function genSlotTypes(root: RootNode, context: GenerateContext): void {
  const slots: Array<[ElementNode, TraversalAncestors]> = []

  traverse(root, (node, ancestors) => {
    if (isSlotNode(node)) {
      slots.push([node, ancestors.slice()])
    }
  })

  context.write(annotations.diagnosticsIgnore.start).newLine()
  context.write('function _slots(_ctx: _Self) {').newLine().indent()
  root.scope.globals.forEach((id) => {
    context.write(`let ${id} = _ctx.${id};`).newLine()
  })
  context.write('return [').indent()
  if (slots.length > 1) context.newLine()
  for (const [slot, ancestors] of slots) {
    for (const { node } of ancestors.slice().reverse()) {
      if (isForNode(node)) {
        context.write('VueDX.internal.renderList(')
        genForNodeArgs(context, node)
        context.write(' => (').newLine().indent()
      }
    }

    //#region slot
    const name = findProp(slot, 'name', false, true)
    context.write('{ ')
    //#region slot name
    if (isAttributeNode(name)) {
      if (name.value != null) {
        context.write(JSON.stringify(name.value.content))
      } else {
        context.write('undefined')
      }
    } else if (isDirectiveNode(name)) {
      context.write('[')
      if (name.exp != null) {
        genExpressionNode(context, name.exp, true)
      } else {
        context.write('undefined')
      }
      context.write(']')
    } else {
      context.write('"default"')
    }
    context.write(': ')
    //#endregion

    //#region slot props
    context.write('{ ')
    slot.props.forEach((prop) => {
      if (prop === name) return
      if (isAttributeNode(prop)) {
        context
          .write(prop.name, createLoc(prop.loc, 0, prop.name.length))
          .write(': ')
        if (prop.value != null) {
          context.write(JSON.stringify(prop.value.content), prop.value.loc)
        } else {
          context.write('true')
        }
        context.write(', ')
      } else if (prop.name === 'bind') {
        if (prop.arg != null) {
          if (isStaticExpression(prop.arg)) {
            context.write(JSON.stringify(prop.arg.content), prop.arg.loc)
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
    context.write('}')
    //#endregion
    context.write(' }')
    //#endregion
    for (const { node } of ancestors) {
      if (isForNode(node)) {
        context.newLine().deindent().write(')).flat()')
      }
    }

    if (slots.length > 1) context.write(',').newLine()
  }
  context.deindent().write('].flat()').deindent().newLine()

  context.write('}').newLine()
  context
    .write(
      'export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>',
    )
    .newLine()
  context.write(annotations.diagnosticsIgnore.end).newLine()
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
  //#region 2 <
  genChildren(context, node.children, { hasParentElement: false })
  //#endregion
  // > 2
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
    //#region 3 <
  }
  children.forEach((child) => {
    genTemplateChildNode(context, child)
    context.newLine()
  })
  if (!hasParentElement) {
    //#endregion
    // > 3
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
      context.write(JSON.stringify(name.value.content), name.value.loc)
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
        context.write(JSON.stringify(prop.value.content), prop.value.loc)
      } else {
        context.write('true')
      }
      context.write(', ')
    } else if (prop.name === 'bind') {
      if (prop.arg != null) {
        if (isStaticExpression(prop.arg)) {
          context.write(JSON.stringify(prop.arg.content), prop.arg.loc)
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

  context.write('<', node.loc)
  const startLoc = createLoc(node.loc, 1, node.tag.length)
  if (isComponentNode(node)) {
    context.write(node.resolvedName ?? node.tag, startLoc)
  } else if (node.tag !== 'template') {
    context.write(node.tag, startLoc)
  }

  context.indent()
  //#region 4 <

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
        genPropDirectiveNode(context, prop, node.tag)
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

  //#endregion
  // > 4
  context.deindent()

  if (node.isSelfClosing) {
    context.write(' />')
  } else {
    context.write('>').newLine()
    context.indent()
    //#region 5 <

    if (isComponentNode(node)) {
      genComponentSlots(context, node)
    } else {
      genChildren(context, node.children, {
        hasParentElement: true,
      })
    }
    //#endregion
    // > 5
    context.deindent().write('</')
    const endLoc = createLoc(
      node.loc,
      node.loc.source.lastIndexOf('</') + 2,
      node.tag.length,
    )
    if (isComponentNode(node)) {
      context.write(node.resolvedName ?? node.tag, endLoc)
    } else if (node.tag !== 'template') {
      context.write(node.tag, endLoc)
    }
    context.write('>')
  }
}

function genAttributeNode(context: GenerateContext, node: AttributeNode): void {
  const loc = createLoc(node.loc, 0, node.name.length)
  if (node.name === 'class') {
    context.write('data-class', loc)
  } else if (node.name === 'style') {
    context.write('data-style', loc)
  } else {
    context.write(node.name, loc)
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
    context.write(`VueDX.internal.checkSlots(`, node.loc)
    context.write(`${node.resolvedName}`, loc)
    context.write(', ')
  }
  context.write('{')
  if (node.slots.length > 0 || node.children.length > 0) context.newLine()
  context.indent()
  //#region 6 <
  node.slots.forEach((node) => {
    if (isSimpleExpressionNode(node.name)) {
      const isConstant = isStaticExpression(node.name)
      if (isConstant) {
        context.write(JSON.stringify(node.name.content), node.name.loc)
        context.write(': ')
      } else {
        context.write('[')
        genExpressionNode(context, node.name)
        context.write(']: ')
      }
    } else context.write('default: ', loc, MappingKind.reverseOnly)

    context.write('(')
    if (isSimpleExpressionNode(node.args)) {
      genExpressionNode(context, node.args)
    }
    context.write(') => {').newLine()

    context.indent()

    // generate scope
    node.hoists.forEach((hoist) => {
      genExpressionNode(context, hoist)
      context.newLine()
    })

    //#region 7 <
    context.write('return (').newLine()
    context.indent()
    //#region 8 <
    genChildren(context, node.children, { hasParentElement: false })
    //#endregion
    // > 8
    context.deindent()
    context.write(')').newLine()
    //#endregion
    // > 7
    context.deindent()

    context.write('},').newLine()
  })
  if (node.children.length > 0) {
    context
      .write(
        `[Symbol.for('VueDX:UnknownSlot')]: () => {`,
        loc,
        MappingKind.reverseOnly,
      )
      .newLine()
    context.indent()
    //#region 9 <
    // START BODY
    if (node.hoists != null) {
      node.hoists.forEach((node) => {
        genExpressionNode(context, node)
        context.newLine()
      })
    }
    context.write('return (').newLine()
    context.indent()
    //#region 10 <
    genChildren(context, node.children, { hasParentElement: false })
    //#endregion
    // > 10
    context.deindent()
    context.write(')').newLine()
    // END BODY
    //#endregion
    // > 9
    context.deindent()
    context.write('},').newLine()
  }
  //#endregion
  // > 6
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
    //#region 11 <
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
    context.newLine()
    //#endregion
    // > 11
    context.deindent()
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
    `${JSON.stringify(node.tag)} as const`
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
    const dir = directives[0]
    if (dir == null) return
    context.write(eventName, dir.loc)
    context.write('={')
    context.write(
      'VueDX.internal.checkOnDirective(',
      createLoc(dir.loc, 0, dir.loc.source.startsWith('@') ? 1 : 4),
      MappingKind.reverseOnly,
    )
    context.write(componentName, node.loc).write(')(')
    context.indent()
    //#region 12 <
    genDirectiveUsage(context, directives)
    context.write(')}')
    //#endregion
    // > 12
    context.deindent()

    if (options.useNewlines) context.newLine()
    else context.write(' ')
  })

  genDirectives(context, node, others, {
    useNewlines: true,
    skipGroupCheck: true,
  })
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
  tag?: string,
): void {
  if (!shouldInlineDirectiveNode(node)) return
  if (node.name === 'bind') {
    if (isStaticExpression(node.arg)) {
      const shouldAvoidCamelize =
        node.arg.content.startsWith('data-') ||
        node.arg.content.startsWith('aria-') ||
        // true-value and false-value attributes on input/component
        ((tag === 'input' || tag === 'component') &&
          (node.arg.content === 'true-value' ||
            node.arg.content === 'false-value'))

      const value = shouldAvoidCamelize
        ? node.arg.content
        : camelCase(node.arg.content)
      context.write(value, node.arg.loc)
      genAttributeValue(context, node.exp)
    }
  } else if (node.name === 'on') {
    if (isStaticExpression(node.arg)) {
      const name = node.arg.content
        .split(':')
        .map((chunk) => camelCase(chunk))
        .join(':')
      context.write(
        'on' + name.substring(0, 1).toUpperCase() + name.substring(1),
        node.arg.loc,
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
    context.write(JSON.stringify(node.content), node.loc)
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
  let shouldGenerateEventArg = false
  if (isSimpleExpressionNode(node)) {
    if (
      !isSimpleIdentifier(node.content) &&
      !node.content.includes('=>') &&
      !node.content.trim().startsWith('function')
    ) {
      shouldWrap = true
    }

    shouldGenerateEventArg = node.content.includes('$event')
  }

  if (shouldWrap) {
    if (shouldGenerateEventArg) {
      context.write('($event) => {').newLine()
    } else {
      context.write('() => {').newLine()
    }
    context.indent()
    //#region 13 <
  }
  genExpressionNode(context, node)
  if (shouldWrap) {
    context.newLine()
    //#endregion
    // > 13
    context.deindent().write('}')
  }
}

function genDirectives(
  context: GenerateContext,
  node: ElementNode,
  directives: DirectiveNode[],
  options: { useNewlines: boolean; skipGroupCheck?: boolean },
): void {
  const dir = directives[0]
  if (dir == null || directives.length === 0) return
  if (directives.some((directive) => directive.name !== dir.name))
    throw new Error(`All directives should be same in genDirectives.`)
  if (options.skipGroupCheck !== true) {
    if (dir.name === 'on') {
      return genOnGroupDirectiveNode(context, node, directives, options)
    }
  }

  if (dir.name === 'bind') {
    return genBindGroupDirectiveNode(context, directives, options)
  }

  const componentName =
    (isComponentNode(node) ? node.resolvedName : undefined) ??
    `${JSON.stringify(node.tag)} as const`
  const directiveName = dir.resolvedName ?? JSON.stringify(dir.name)
  context.write(`data-vuedx-directive-${dir.name}={`)
  let isInputModelDirective = false

  const dirLoc = createLoc(
    dir.loc,
    0,
    dir.loc.source.startsWith('v-') ? dir.name.length + 2 : 1,
  )
  const nodeLoc = createLoc(node.loc, 1, node.tag.length)
  if (dir.name === 'model') {
    if (node.tag === 'input') {
      isInputModelDirective = true
      context.write('VueDX.internal.checkModelDirectiveForDOM[', dirLoc)
      const type = findProp(node, 'type', false, true)
      if (type != null && genPropValue(context, type)) {
        context.write(' as const')
      } else {
        context.write('"text" as const')
      }
      context.write('](')
    } else if (node.tag === 'select') {
      isInputModelDirective = true
      context.write('VueDX.internal.checkModelDirectiveForDOM.select(', dirLoc)
    } else {
      context.write(
        `VueDX.internal.checkModelDirective(${componentName}, `,
        dirLoc,
      )
    }
  } else if (dir.name === 'on') {
    context.write(`VueDX.internal.checkOnDirective(`, dirLoc)
    context.write(`${componentName})(`, nodeLoc)
  } else if (builtins.directives.has(dir.name)) {
    context.write(
      `VueDX.internal.checkBuiltinDirective["${dir.name}"](`,
      dirLoc,
    )
    context.write(`${componentName}, `, nodeLoc)
  } else {
    context.write(`VueDX.internal.checkDirective(`, dirLoc)
    context.write(`${directiveName}, `, dirLoc)
    context.write(`${componentName}, `, nodeLoc)
  }

  genDirectiveUsage(context, directives, isInputModelDirective)

  if (isInputModelDirective) {
    context.write(', ')
    if (node.tag === 'select') {
      context.write('[')
      let count = 0
      node.children.forEach((child) => {
        if (isElementNode(child) && child.tag === 'option') {
          const value = findProp(child, 'value', false, true)
          if (value != null) {
            if (count > 0) context.write(', ')
            if (!genPropValue(context, value)) {
              context.write('undefined')
            }
            ++count
          }
        } else if (isForNode(child) && child.parseResult.source != null) {
          const option = child.children.find(
            (node): node is ElementNode =>
              isElementNode(node) && node.tag === 'option',
          )
          if (option != null) {
            const value = findProp(option, 'value', false, true)
            if (value != null) {
              if (count > 0) context.write(', ')
              context.write('...VueDX.internal.renderList(')
              genForNodeArgs(context, child)
              context.write(' => ')
              if (!genPropValue(context, value, true)) context.write('""')
              context.write(')')
              count++
            }
          }
        }
      })
      context.write(']')
      if (count > 0) context.write(' as const')
      else context.write(' as unknown as [string]')
    } else {
      context.write('[] as unknown as [string]') // TODO: Infer value type
    }

    const yes = findProp(node, 'true-value') ?? findProp(node, 'trueValue')
    const no = findProp(node, 'false-value') ?? findProp(node, 'falseValue')

    context.write(', [')
    if (yes != null && genPropValue(context, yes)) context.write(', ')
    else context.write('true, ')
    if (no != null && genPropValue(context, no)) context.write('')
    else context.write('false')
    context.write('] as const')
  }
  context.write(')}')
}

function genDirectiveUsage(
  context: GenerateContext,
  directives: DirectiveNode[],
  isInputModelDirective: boolean = false,
): void {
  context.write(`[`)
  context.indent()
  //#region 14 <
  context.newLine()
  directives.forEach((directive) => {
    const fallback = createLoc(
      directive.loc,
      0,
      directive.loc.source.startsWith('v-') ? directive.name.length + 2 : 1,
    )
    context.write('{', fallback, MappingKind.reverseOnly).newLine()
    context.indent()
    //#region 15 <
    if (directive.arg != null) {
      context
        .write(' ')
        .write('arg', directive.arg.loc, MappingKind.reverseOnly)
        .write(': ', fallback, MappingKind.reverseOnly)
      genExpressionNode(context, directive.arg)
      if (isStaticExpression(directive.arg)) context.write(' as const')
      context.write(', ', fallback, MappingKind.reverseOnly).newLine()
    } else if (directive.name === 'model' && !isInputModelDirective) {
      context
        .write(
          ' arg: "modelValue" as const,',
          fallback,
          MappingKind.reverseOnly,
        )
        .newLine()
    }
    if (directive.exp != null) {
      context
        .write(' ')
        .write('exp', directive.exp.loc, MappingKind.reverseOnly)
        .write(': ', fallback, MappingKind.reverseOnly)
      if (directive.name === 'on') {
        genEventHandler(context, directive.exp)
      } else {
        genExpressionNode(context, directive.exp)
      }
      context.write(',', fallback, MappingKind.reverseOnly).newLine()
    }
    if (directive.modifiers.length > 0) {
      context.write(' modifiers: [ ', fallback, MappingKind.reverseOnly)
      directive.modifiers.forEach((name) => {
        context
          .write(
            JSON.stringify(name),
            createLoc(
              directive.loc,
              directive.loc.source.lastIndexOf(name),
              name.length,
            ),
          )
          .write(', ')
      })
      context.write('],', fallback, MappingKind.reverseOnly).newLine()
    }
    //#endregion
    // > 15
    context.deindent().write('},').newLine()
  })
  //#endregion
  // > 14
  context.deindent()
  context.write(']')
}

function genTextNode(context: GenerateContext, node: TextNode): void {
  if (
    node.content.includes('<') ||
    node.content.includes('>') ||
    node.content.includes('{') ||
    node.content.includes('}')
  ) {
    context.write(`{${JSON.stringify(node.content)}}`, node.loc)
  } else {
    context.write(node.content, node.loc)
  }
}

function genInterpolationNode(
  context: GenerateContext,
  node: InterpolationNode,
): void {
  context.write('{').write('VueDX.internal.checkInterpolation(', node.loc)
  genExpressionNode(context, node.content)
  context.write(')}')
}

function genCommentNode(context: GenerateContext, node: CommentNode): void {
  context.write('{/*')
  context.write(node.content.replace(/\*\//g, '*\u200b/'))
  context.write('*/}')
}

function genPropValue(
  context: GenerateContext,
  node: AttributeNode | DirectiveNode,
  wrapInParantheses: boolean = false,
): boolean {
  if (isAttributeNode(node) && node.value != null) {
    context.write(JSON.stringify(node.value.content), node.value.loc)

    return true
  } else if (isDirectiveNode(node) && node.exp != null) {
    genExpressionNode(context, node.exp, wrapInParantheses)

    return true
  }

  return false
}

function genExpressionNode(
  context: GenerateContext,
  node: SimpleExpressionNode | CompoundExpressionNode,
  wrapInParantheses = false,
): void {
  if (isSimpleExpressionNode(node)) {
    if (node.content.trim() === '') {
      context.write(annotations.missingExpression, node.loc)
    } else if (node.constType > 0) {
      context.write(JSON.stringify(node.content), node.loc)
    } else {
      const ok = wrapInParantheses && node.content.includes(',')
      if (ok) context.write('(')
      context.write(node.content, node.loc)
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
  return node.type === 11 /* NodeTypes.For */
}

function genForNode(context: GenerateContext, node: ForNode): void {
  context.write('{')
  context.indent()
  //#region 16 <
  context.newLine()
  context.write('VueDX.internal.renderList(')
  genForNodeArgs(context, node)
  // - Body
  context.write(' => {').newLine()
  context.indent()
  //#region 17 <
  node.hoists.forEach((node) => {
    genExpressionNode(context, node)
    context.newLine()
  })

  context.write('return (')
  context.indent()
  //#region 18 <
  context.newLine()
  genChildren(context, node.children, { hasParentElement: false })
  //#endregion
  // > 18
  context.deindent().write(')').newLine()
  //#endregion
  // > 17
  context.deindent().write('})')
  //#endregion
  // > 16
  context.deindent().newLine().write('}')
}

function genForNodeArgs(context: GenerateContext, node: ForNode): void {
  const forExps = node.parseResult
  // Source
  if (isSimpleExpressionNode(forExps.source)) {
    const quote = !isSimpleIdentifier(forExps.source.content)
    if (quote) context.write('(')
    context.write(forExps.source.content, forExps.source.loc)
    if (quote) context.write(')')
  } else {
    context.write('undefined')
  }
  context.write(', ')

  // Handler Args
  context.write('(')
  const args = ['_', '__']
  if (isSimpleExpressionNode(forExps.value)) {
    context.write(forExps.value.content, forExps.value.loc)
  } else if (forExps.key != null || forExps.index != null) {
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.key)) {
    context.write(', ')
    context.write(forExps.key.content, forExps.key.loc)
  } else if (forExps.index != null) {
    context.write(', ')
    context.write(args.pop() ?? '_')
  }

  if (isSimpleExpressionNode(forExps.index)) {
    context.write(', ')
    context.write(forExps.index.content, forExps.index.loc)
  }
  context.write(')')
}

function genIfNode(context: GenerateContext, node: IfNode): void {
  context.write('{').newLine()
  context.indent()
  //#region 19 <
  let hasElse = false
  const n = node.branches.length - 1
  node.branches.forEach((node, i) => {
    let indent = 0
    if (i > 0) context.write('  : ')
    if (node.condition != null) {
      context.write('(')
      genExpressionNode(context, node.condition)
      context.write(')').newLine()
      context.indent()
      //#region 20 <
      ++indent
      context.write('? ')
    } else if (i < n) {
      context.write('( )', node.loc).newLine()
      context.indent()
      //#region 21 <
      ++indent
      context.write('? ')
    } else {
      hasElse = true
      context.indent()
      //#region 22 <
      ++indent
    }

    context.indent()
    //#region 23 <
    ++indent
    genChildren(context, node.children, { hasParentElement: false })
    while (indent-- > 0) {
      //#endregion
      // > 23

      //#endregion
      // >  22

      //#endregion
      // > 21

      //#endregion
      // > 20
      context.deindent()
    }
  })

  if (!hasElse) context.write('  : null').newLine()
  //#endregion
  // > 19
  context.deindent()
  context.write('}')
}
