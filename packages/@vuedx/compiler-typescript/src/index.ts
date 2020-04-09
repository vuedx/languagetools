import { parse } from '@babel/parser'
import * as B from '@babel/types'
import * as T from '@vue/compiler-core'
import {
  baseParse,
  CompilerOptions,
  createCallExpression,
  CREATE_BLOCK,
  CREATE_VNODE,
  ElementNode,
  FRAGMENT,
  generate,
  OPEN_BLOCK,
  trackSlotScopes,
  trackVForSlotScopes,
  transform,
  TransformContext,
  transformExpression,
} from '@vue/compiler-core'
import * as TT from '@vuedx/template-ast-types'
import assert from 'assert'
import * as directiveTransforms from './directives'
import { transformElement } from './nodes/transformElement'
import { transformExpression as transformExpressionAlternate } from './nodes/transformExpression'
import { transformFor } from './nodes/transformFor'
import { transformIf } from './nodes/transformIf'
import { transformSlotOutlet } from './nodes/transformSlotOutlet'
import { pascalCase } from './pascalCase'
import { H } from './runtimeHelpers'
export * from '@vue/compiler-core'
export * from './runtimeHelpers'
export type Options = Required<Pick<CompilerOptions, 'filename'>> &
  Omit<CompilerOptions, 'filename'> & {
    components: Record<string, string>
  }
export function compile(source: string, options: Options) {
  const ast = baseParse(source, options)
  const { code, map } = doCompile(clone(ast), options)
  const renderAST = parse(code, {
    ranges: true,
    sourceType: 'module',
    plugins: ['typescript'],
  })
  const renderFn: B.FunctionDeclaration = (renderAST.program.body.find(
    (statement) => B.isExportNamedDeclaration(statement)
  ) as B.ExportNamedDeclaration).declaration
  const generated = (renderFn.body.body.find((statement) =>
    B.isReturnStatement(statement)
  ) as B.ReturnStatement).argument!

  transform(ast, {
    nodeTransforms: [transformExpressionAlternate],
  })

  match(ast, null as any, generated)

  return { code, ast, map }
}

function doCompile(ast: T.RootNode, options: Options) {
  let once = false
  let context!: TransformContext
  transform(ast, {
    ...options,
    prefixIdentifiers: true,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      transformIf,
      transformFor,
      trackVForSlotScopes,
      transformExpression,
      transformSlotOutlet,
      transformElement(Object.keys(options.components).map(pascalCase)),
      trackSlotScopes,
      ...(options.nodeTransforms || []),
      (_, _context) => {
        if (once) return
        context = _context
        once = true
        context.imports.add({ exp: '_Ctx', path: options.filename })
        Object.entries(options.components).forEach(([name, path]) => {
          context.imports.add({
            exp: `_component_${pascalCase(name)}`,
            path: path,
          })
        })
      },
    ],
    directiveTransforms: {
      ...directiveTransforms,
      ...options.directiveTransforms,
    },
  })
  ast.codegenNode = createCallExpression(
    context.helperString(context.helper(H)),
    [context.helperString(context.helper(FRAGMENT)), ast.children]
  )
  ;[OPEN_BLOCK, CREATE_BLOCK, CREATE_VNODE].forEach((helper) => {
    const index = ast.helpers.indexOf(helper)
    if (index >= 0) ast.helpers.splice(index, 1)
  })
  const result = generate(ast, {
    ...options,
    mode: 'module',
    optimizeBindings: false,
    prefixIdentifiers: true,
    scopeId: null,
    ssr: false,
    sourceMap: true,
  })
  result.code = result.code.replace(
    `export function render(_ctx, _cache)`,
    `export function render(_ctx: InstanceType<typeof _Ctx>)`
  )
  return result
}

function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object)) as T
}

function match(html: T.Node, parent: T.ElementNode, js: B.Node) {
  if (
    B.isCallExpression(js) &&
    B.isIdentifier(js.callee) &&
    js.callee.name === '_h'
  ) {
    if (js.arguments.length === 2) {
      assert(
        (js.arguments[0] as B.Identifier).name === '_Fragment',
        `unexpected argument to _h(): ${js.arguments[0]}`
      )

      const items = js.arguments[1]

      if (B.isCallExpression(items)) {
        const callee = items.callee as B.Identifier
        assert(
          callee.name === '_renderList',
          `unexpected call expression: ${callee.name}`
        )
        // @ts-ignore
        html.jsNode = items

        const vFor = T.findDir(html as T.ElementNode, 'for') as T.DirectiveNode
        // @ts-ignore
        vFor.exp.rightJsNode = items.arguments[0]
        const iterator = items.arguments[1] as B.ArrowFunctionExpression
        // @ts-ignore
        vFor.exp.leftJsNode = iterator.params

        assert(B.isBlockStatement(iterator.body))
        const nextJs = ((iterator.body as B.BlockStatement)
          .body[0] as B.ReturnStatement).argument as B.CallExpression

        if (TT.isTemplateNode(html)) {
          if (html.children.length === 1) {
            match(
              (html.children[0] as unknown) as T.Node,
              (html as unknown) as T.ElementNode,
              nextJs
            )
          } else {
            match(html, parent, nextJs)
          }
        } else {
          match(html, parent, nextJs)
        }
      } else if (B.isArrayExpression(items)) {
        // @ts-ignore
        html.jsNode = js
        matchChildren(html as T.ElementNode, items)
      }
    } else {
      // @ts-ignore
      html.jsNode = js

      const [, props, children] = js.arguments

      if (B.isObjectExpression(props)) {
        props.properties.forEach((property) => {
          if (B.isMemberExpression(property)) {
            // TODO: Match props.
          }
        })
      }

      if (B.isArrayExpression(children) || B.isObjectExpression(children)) {
        matchChildren(html as T.ElementNode, children)
      }
    }
  } else if (B.isConditionalExpression(js)) {
    const vIf = T.findDir(
      html as T.ElementNode,
      /^(if|else-if)$/
    ) as T.DirectiveNode
    // @ts-ignore
    vIf.exp.jsNode = js.test
    match(html, parent, js.consequent)

    const index = parent.children.indexOf(html as T.ElementNode)
    if (index >= 0 && index + 1 < parent.children.length) {
      match(parent.children[index + 1], parent, js.alternate)
    }
  } else if (TT.isSimpleExpressionNode(html)) {
    // @ts-ignore
    html.jsNode = js
  } else if (TT.isInterpolationNode(html)) {
    // @ts-ignore
    html.content.jsNode = js.arguments[0]
  } else if (TT.isTextNode(html)) {
  } else {
    throw new Error('Unexpected! ' + js.type)
  }
}

function matchChildren(
  parent: ElementNode,
  children: B.ArrayExpression | B.ObjectExpression
) {
  if (B.isArrayExpression(children)) {
    let i = 0
    for (let j = 0; j < children.elements.length; ++j) {
      // @ts-ignore
      while (i < parent.children.length && parent.children[i].jsNode) ++i
      assert(i < parent.children.length)
      match(parent.children[i]!, parent, children.elements[j]!)
    }
  } else if (B.isObjectExpression(children)) {
    if (
      children.properties.length === 1 &&
      children.properties.some((property) => B.isObjectProperty(property))
    ) {
      const { value } = children.properties[0] as B.ObjectProperty

      assert(B.isCallExpression(value))

      const vSlot = T.findDir(parent, 'slot')
      const slot = (value as B.CallExpression)
        .arguments[0] as B.ArrowFunctionExpression
      const slotChildren = slot.body as B.ArrayExpression

      if (vSlot) {
        // @ts-ignore
        vSlot.exp.jsNode = slot.params
      }

      matchChildren(parent, slotChildren)
    } else {
      children.properties.forEach((property, index) => {
        if (B.isObjectProperty(property)) {
          const { key, value } = property

          assert(B.isCallExpression(value))

          const vSlot = T.findDir(
            parent.children[index]! as T.ElementNode,
            'slot'
          )
          const slot = (value as B.CallExpression)
            .arguments[0] as B.ArrowFunctionExpression
          const slotChildren = slot.body as B.ArrayExpression

          if (vSlot?.exp) {
            // @ts-ignore
            vSlot.exp.jsNode = slot.params
            // @ts-ignore
            if (!vSlot.arg?.isStatic) {
              // @ts-ignore
              vSlot.arg.jsNode = key
            }
          }

          matchChildren(parent.children[index] as T.ElementNode, slotChildren)
        }
      })
    }
  }
}

function findJSNodes(node?: T.Node): T.Node[] {
  const result: T.Node[] = []

  if (!node) return result

  if ('jsNode' in node || 'leftJsNode' in node || 'rightJsNode' in node) {
    result.push(node)
  }

  if (TT.isElementNode(node)) {
    node.props.forEach((node) =>
      result.push(...findJSNodes((node as unknown) as T.Node))
    )
  } else if (TT.isDirectiveNode(node)) {
    result.push(...findJSNodes((node as T.DirectiveNode).arg))
    result.push(...findJSNodes((node as T.DirectiveNode).exp))
  } else if (TT.isInterpolationNode(node)) {
    result.push(
      ...findJSNodes((node.content as unknown) as T.SimpleExpressionNode)
    )
  }

  if ('children' in node) {
    ;(node as T.PlainElementNode).children.forEach((node) =>
      result.push(...findJSNodes(node))
    )
  }

  return result
}

export type NodeWithJs = ExpressionNodeWithJs | ForDirectiveWithJs
export interface ExpressionNodeWithJs extends T.SimpleExpressionNode {
  node: B.Node
  jsNode: B.Node
}

export interface ForDirectiveWithJs extends T.SimpleExpressionNode {
  leftNode: B.Node[]
  leftJsNode: B.Node[]
  rightNode: B.Node
  rightJsNode: B.Node
}

export function getNodesWithRenderMappings(ast: T.RootNode): NodeWithJs[] {
  return findJSNodes(ast) as NodeWithJs[]
}
