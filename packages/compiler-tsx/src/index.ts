import {
  baseParse,
  CompilerError,
  CompilerOptions,
  createCompoundExpression,
  CREATE_BLOCK,
  CREATE_VNODE,
  RENDER_LIST,
  FRAGMENT,
  generate,
  OPEN_BLOCK,
  transform,
  ParserOptions,
  RootNode,
} from '@vue/compiler-core'
import {
  isCommentNode,
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import Path from 'path'
import { parserOptions } from './parserOptions'
import { withScope } from './scope'
import {
  createElementTransform,
  generateChildNodes,
} from './transforms/transformElement'
import { createExpressionTracker } from './transforms/transformExpression'
import { createTransformFor } from './transforms/transformFor'
import { createTransformIf } from './transforms/transformIf'
import { createInterpolationTransform } from './transforms/transformInterpolation'
import { CodegenResult, ComponentImport, Options } from './types'
import { getComponentName, processBogusComment } from './utils'

export * from './types'

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
const typeHelpers = {
  'v-for': [
    `declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];`,
    `declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];`,
    `declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];`,
    `declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];`,
    `declare function _renderList<T extends object>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any): any[];`,
  ].join('\n'),
} as const
const components: Record<string, ComponentImport> = {}
export function compile(
  template: string,
  options: Options & CompilerOptions,
): CodegenResult {
  const ast = parse(template, options)
  const astCopy = clone(ast)
  const expressions: Array<[number, number]> = []
  const config: Required<Options> = {
    ...parserOptions,
    ...options,
    components: {
      ...components,
      ...options.components,
      [getComponentName(options.filename)]: {
        path: `./${Path.posix.basename(options.filename)}`,
      },
    },
  }
  const identifiers = new Set<string>()
  const errors: CompilerError[] = []

  transform(ast, {
    ...options,
    prefixIdentifiers: true,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      // Collect Expressions
      (node) => {
        if (isInterpolationNode(node)) {
          expressions.push([
            node.content.loc.start.offset,
            node.content.loc.source.length,
          ])
        } else if (isElementNode(node)) {
          node.props.forEach((prop) => {
            if (isDirectiveNode(prop)) {
              if (prop.exp != null) {
                expressions.push([
                  prop.exp.loc.start.offset,
                  prop.exp.loc.source.length,
                ])
              }
              if (isSimpleExpressionNode(prop.arg) && !prop.arg.isStatic) {
                expressions.push([
                  prop.arg.loc.start.offset + 1,
                  prop.arg.loc.source.length - 2,
                ])
              }
            }
          })
        }
      },
      // Drop Comments
      (node, context) => {
        if (isCommentNode(node)) {
          if (node.content.includes('<') || node.content.includes('>')) {
            context.replaceNode(
              createCompoundExpression([
                processBogusComment(node.content.trim()),
              ]),
            )
          } else {
            context.removeNode(node)
          }
        } else if (isTextNode(node)) {
          context.replaceNode(
            createCompoundExpression([processBogusComment(node.content)]),
          )
        } else if (isElementNode(node) && node.tag.includes('<')) {
          context.replaceNode(
            createCompoundExpression([
              processBogusComment(node.loc.source.trim()),
            ]),
          )
        }
      },

      createTransformFor((id) => identifiers.add(id)),
      createTransformIf((id) => identifiers.add(id)),
      createExpressionTracker((id) => identifiers.add(id)),
      createElementTransform(config),
      createInterpolationTransform(config),
    ],
    onError(error) {
      errors.push(error)
    },
  })
  const hasVFor = ast.helpers.includes(RENDER_LIST)
  ;[OPEN_BLOCK, CREATE_BLOCK, CREATE_VNODE, FRAGMENT, RENDER_LIST].forEach(
    (helper) => {
      const index = ast.helpers.indexOf(helper)
      if (index >= 0) ast.helpers.splice(index, 1)
    },
  )
  if (ast.children.length > 0) {
    ast.codegenNode = createCompoundExpression([
      '/*@@vue:start*/<>',
      ...generateChildNodes(ast.children),
      '</>/*@@vue:end*/',
    ] as any)
  } else {
    ast.codegenNode = createCompoundExpression([
      '/*@@vue:start*/null/*@@vue:end*/',
    ] as any)
  }
  const mappings: Array<[number, number, number, number, number]> = []
  const result = generate(ast, {
    ...options,
    sourceMap: true,
    mode: 'module',
    onContextCreated(context) {
      const push = context.push
      context.push = (code, node) => {
        if (code.startsWith('export ')) {
          push(
            [
              hasVFor ? typeHelpers['v-for'] : null,
              'declare const __completionsTrigger: InstanceType<typeof _Ctx>',
              '__completionsTrigger./*@@vue:completions*/$props',
              'const __completionsTag = /*@@vue:completionsTag*/<div />',
              '',
            ]
              .filter((value) => value != null)
              .join('\n'),
          )
        }
        if (
          node?.loc != null &&
          node.loc.start.offset !== 0 &&
          node.loc.end.offset !== 0
        ) {
          mappings.push([
            context.offset,
            code.length,
            node.loc.start.offset,
            node.loc.source.length,
            0,
          ])
        }

        if (code.startsWith('function render(_ctx, _cache')) {
          push(
            `function render(${
              identifiers.size > 0
                ? `{${Array.from(identifiers).join(', ')},..._ctx}`
                : '_ctx'
            }: InstanceType<typeof _Ctx>) {`,
          )
        } else {
          push(code, node)
        }
      }
    },
  })

  return {
    ...result,
    ast: withScope(astCopy),
    mappings,
    expressions,
    errors,
  }
}

export function parse(template: string, options: ParserOptions): RootNode {
  return baseParse(template, {
    ...parserOptions,
    ...options,
  })
}
