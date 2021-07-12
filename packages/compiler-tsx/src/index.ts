import {
  baseParse,
  CompilerError,
  CompilerOptions,
  ParserOptions,
  RootNode,
  transform,
} from '@vue/compiler-core'
import { getComponentName } from '@vuedx/shared'
import * as Path from 'path'
import { generate } from './generate'
import { parserOptions } from './parserOptions'
import { withScope } from './scope'
import { ScopeManager } from './transforms/ScopeManager'
import { createComponentChildrenTransform } from './transforms/transformComponent'
import { createTransformFor } from './transforms/transformFor'
import { createTransformIf } from './transforms/transformIf'
import { createResolveComponentTransform } from './transforms/transformResolveComponent'
import { createSlotHoistScopeTransform } from './transforms/transformSlot'
import type { CodegenResult, Options } from './types'

export { annotations } from './generate'
export { getTopLevelIdentifiers } from './scope'
export * from './types'

function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function compile(
  template: string,
  options: Options & CompilerOptions,
): CodegenResult {
  const ast = parse(template, options)
  const astCopy = withScope(clone(ast))
  const selfName = getComponentName(options.filename)
  const selfSrc = options.selfSrc ?? `./${Path.basename(options.filename)}`
  const config: Required<Options> = {
    ...parserOptions,
    ...options,
    selfSrc,
    directives: {
      ...options.directives,
    },
    components: {
      ...options.components,
      [selfName]: {
        name: selfName,
        value: selfName,
        source: {
          path: selfSrc,
          exported: 'default',
          local: selfName,
        },
      },
    },
  }

  const customContext = {
    scope: new ScopeManager(),
    components: config.components,
    directives: config.directives,
    used: {
      components: new Set<string>(),
      directives: new Set<string>(),
    },
  }
  const errors: CompilerError[] = []
  transform(ast, {
    ...options,
    prefixIdentifiers: false,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      createResolveComponentTransform(customContext),
      createTransformFor(customContext),
      createTransformIf(customContext),
      createSlotHoistScopeTransform(customContext),
      createComponentChildrenTransform(customContext),
    ],
    onError(error) {
      errors.push(error)
    },
  })

  ast.scope = astCopy.scope
  const result = generate(ast, {
    selfName,
    fileName: options.filename,
    templateId: `${options.filename}?vue&type=template&lang.vue-html`,
    templateContent: template,
    customContext,
    on(event, context) {
      if (event === 'afterImports') {
        context

          .write(`import type _Self from '${selfSrc}'`)
          .newLine()

          .write(`interface ${selfName} extends InstanceType<typeof _Self> {}`)
          .newLine()
      }
    },
  })

  astCopy.components = Array.from(customContext.used.components)
  astCopy.directives = Array.from(customContext.used.directives)

  return {
    ...result,
    ast: astCopy,
    errors,
  }
}

export function parse(template: string, options: ParserOptions): RootNode {
  return baseParse(template, {
    ...parserOptions,
    ...options,
  })
}
