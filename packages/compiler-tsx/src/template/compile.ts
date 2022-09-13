import {
  CompilerError,
  CompilerOptions,
  RootNode,
  transform,
} from '@vue/compiler-core'
import { withScope } from './scope/Scope'
import type { NodeTransformContext } from './types/NodeTransformContext'
import { ScopeManager } from './scope/ScopeManager'
import { createComponentChildrenTransform } from './transforms/transformComponent'
import { createTransformFor } from './transforms/transformFor'
import { createTransformIf } from './transforms/transformIf'
import { createResolveComponentTransform } from './transforms/transformResolveComponent'
import { createSlotHoistScopeTransform } from './transforms/transformSlot'
import type { TransformedCode } from '../types/TransformedCode'
import type { TransformOptionsResolved } from '../types/TransformOptions'

import { generate } from './generate'
import { parse } from './parse'

export interface Options {
  fileName: string
}

export interface Output extends TransformedCode {
  ast: RootNode
  errors: CompilerError[]
}

export function compile(
  template: string,
  options: Options & CompilerOptions & TransformOptionsResolved,
): Output {
  const errors: CompilerError[] = []
  const result = compileFromAST(
    parse(template, {
      ...options,
      onError: (error) => {
        errors.push(error)
        options.onError?.(error)
      },
    }),
    options,
  )

  result.errors.unshift(...errors)

  return result
}

export function compileFromAST(
  source: RootNode,
  options: Options & TransformOptionsResolved,
): Output {
  const root = withScope(clone(source))
  const ast = clone(source)
  ast.scope = root.scope
  const context: NodeTransformContext = {
    ...options,
    scope: new ScopeManager(),
    used: { components: new Set(), directives: new Set() },
  }
  const errors: CompilerError[] = []

  transform(root, {
    ...options,
    prefixIdentifiers: false,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      createResolveComponentTransform(context),
      createSlotHoistScopeTransform(context),
      createTransformFor(context),
      createTransformIf(context),
      createComponentChildrenTransform(context),
    ],
    onError(error) {
      errors.push(error)
    },
  })

  const result = generate(root, context)

  return { ...result, ast, errors }
}

function clone<T>(obj: T): T {
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  if (typeof structuredClone !== 'undefined') return structuredClone(obj)
  return JSON.parse(JSON.stringify(obj))
}
