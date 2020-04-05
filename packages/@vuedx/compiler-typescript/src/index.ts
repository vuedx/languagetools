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
  transformExpression,
} from '@vue/compiler-core'
import * as directiveTransforms from './directives'
import { transformElement } from './nodes/transformElement'
import { transformFor } from './nodes/transformFor'
import { transformIf } from './nodes/transformIf'
import { transformSlotOutlet } from './nodes/transformSlotOutlet'
import { pascalCase } from './pascalCase'
import { H } from './runtimeHelpers'

export * from './runtimeHelpers'
export * from '@vue/compiler-core'
export type Options = Required<Pick<CompilerOptions, 'filename'>> &
  Omit<CompilerOptions, 'filename'> & {
    components: Record<string, string>
  }
export function compile(template: string, options: Options) {
  const ast = baseParse(template, options)

  let once = false
  let _context: any
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
      (node, context) => {
        if (once) return
        _context = context
        once = true

        context.imports.add({ exp: '_Ctx', path: options.filename })
        Object.entries(options.components).forEach(([name, path]) => {
          context.imports.add({ exp: `_${pascalCase(name)}`, path: path })
        })
        context.helper(H)
      },
    ],
    directiveTransforms: {
      ...directiveTransforms,
      ...options.directiveTransforms,
    },
  })

  if (ast.children.length !== 1) {
    ast.codegenNode = createCallExpression('_h', [
      _context.helperString(_context.helper(FRAGMENT)),
      ast.children,
    ])
  } else {
    ast.codegenNode = (ast.children[0] as ElementNode).codegenNode
  }

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
