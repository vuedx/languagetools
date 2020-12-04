import { parse } from '@babel/parser'
import traverse, { NodePath } from '@babel/traverse'
import type * as t from '@babel/types'
import { isIdentifier, traverseFast } from '@babel/types'
import { SFCScriptBlock } from '@vuedx/compiler-sfc'
import type { SourceFile } from 'typescript'
import { Context, Plugin, ScriptAnalyzerContext } from '../types'
import { createSourceRange, isNotNull } from '../utilities'

export const ScriptBlockAnalyzer: Plugin = {
  blocks: {
    script: (block, ctx) => {
      if (block.src == null) {
        try {
          processScript(createScriptContext(block.content, ctx, block))
        } catch (error) {
          console.error(error)
        }
      }
    },
  },
}

export function createScriptContext(
  content: string,
  context: Context,
  block?: SFCScriptBlock,
): ScriptAnalyzerContext {
  const script = block ?? {
    type: 'script',
    content: content,
    setup: false,
    attrs: {},
    // TODO: Create loc object as if javascript file.
    loc: {
      start: { offset: 0, line: 1, column: 1 },
      end: { offset: 0, line: 1, column: 1 },
      source: content,
    },
  }

  const { ast } = parseJS(context, content, script.lang === 'ts')

  return {
    ...context,
    mode: script.setup != null ? 'setup' : 'module',
    ast: ast,
    source: content,
    block: script,
  }
}

export function parseJS(
  context: Context,
  content: string,
  enableTS: boolean,
  offset: number = 0,
): {
  ast: t.File
  sourceFile?: SourceFile
} {
  let result: { ast: t.File; sourceFile?: SourceFile }
  if (context.parsers.typescript != null) {
    result = context.parsers.typescript(context.fileName, content, {
      language: enableTS ? 'ts' : 'js',
    })
  } else {
    const plugins = context.parsers.babel.plugins?.slice() ?? []
    if (enableTS && !plugins.includes('typescript')) {
      plugins.push('typescript')
    }

    const ast = parse(content, {
      ...context.parsers.babel,
      plugins: Array.from(new Set(plugins)),
      ranges: true,
      // @ts-expect-error
      errorRecovery: true,
    })
    result = { ast }
  }

  if (offset !== 0 && Number.isInteger(offset)) {
    traverseFast(result.ast, (node) => {
      const n = node as { start: number; end: number }

      n.start += offset
      n.end += offset
    })
  }

  return result
}

function processScript(context: ScriptAnalyzerContext): void {
  // @ts-expect-error
  if ((context.ast.errors?.length ?? 0) > 0) {
    // @ts-expect-error
    context.ast.errors.forEach((error: any) =>
      context.component.addError(error.message, {
        ...error.loc,
        offset: error.pos,
      }),
    )
    return
  }

  const enterHandlers = context.plugins
    .map((plugin) => {
      if (plugin.babel != null) {
        if (typeof plugin.babel === 'function') {
          return plugin.babel
        } else if ('enter' in plugin.babel) {
          return plugin.babel.enter
        }
      }
    })
    .filter(isNotNull)

  const exitHandlers = context.plugins
    .map((plugin) => {
      if (plugin.babel != null && 'exit' in plugin.babel) {
        return plugin.babel.exit
      }
    })
    .filter(isNotNull)

  const setupHandlers = context.plugins
    .map((plugin) => plugin.setup)
    .filter(isNotNull)
    .flat()
  const optionsHandlers = context.plugins
    .map((plugin) => (Array.isArray(plugin.options) ? plugin.options : null))
    .filter(isNotNull)
    .flat()
  const optionsByNameHandlers = context.plugins
    .map((plugin) => (Array.isArray(plugin.options) ? null : plugin.options))
    .filter(isNotNull)
  const declarationHandlers = context.plugins
    .map((plugin) => plugin.declaration)
    .filter(isNotNull)
    .flat()

  function call<T>(
    fns: Array<(node: T, context: ScriptAnalyzerContext) => void>,
    node: T,
  ): void {
    fns.forEach((fn) => {
      try {
        fn(node, context)
      } catch (error) {
        console.error(error)
        // TODO: Handle error.
      }
    })
  }

  function processOptions(options$: NodePath<t.ObjectExpression>): void {
    const properties$ = options$.get('properties')
    context.component.addOption('', {
      loc: createSourceRange(context, options$.node),
    })
    properties$.forEach((property$) => {
      if (property$.isObjectMember()) {
        const { key } = property$.node

        if (isIdentifier(key)) {
          const name = key.name
          context.component.addOption(name, {
            loc: createSourceRange(
              context,
              property$.isObjectProperty()
                ? property$.node.value
                : property$.node,
            ),
          })

          optionsByNameHandlers.forEach((options) => {
            const fn = options[name] as any

            if (fn != null) {
              try {
                fn(property$, context)
              } catch (error) {
                console.error(error)
                // TODO: Handler error.
              }
            }
          })

          if (property$.isObjectMethod() && name === 'setup') {
            call(setupHandlers, property$ as any)
          }
        }
      }
    })
  }

  traverse(context.ast, {
    enter(path: NodePath<t.Node>) {
      call(enterHandlers, path)
    },
    exit(path: NodePath<t.Node>) {
      call(exitHandlers, path)
    },
    CallExpression(path: NodePath<t.CallExpression>) {
      const callee$ = path.get('callee')
      const args$ = path.get('arguments')

      if (callee$.isIdentifier()) {
        const options$ = args$[0]
        if (callee$.node.name === 'defineProps') {
          context.component.addScriptSetup('defineProps', {
            loc: createSourceRange(context, path.node),
          })
          optionsByNameHandlers.forEach((handlers) => {
            const fn = handlers.props
            if (fn != null) {
              try {
                fn(options$ as any, context)
              } catch (error) {
                console.error(error)
                // TODO: Handle error
              }
            }
          })
        } else if (callee$.node.name === 'defineEmit') {
          context.component.addScriptSetup('defineEmit', {
            loc: createSourceRange(context, path.node),
          })
          optionsByNameHandlers.forEach((handlers) => {
            const fn = handlers.emits
            if (fn != null) {
              try {
                fn(options$ as any, context)
              } catch (error) {
                console.error(error)
                // TODO: Handle error
              }
            }
          })
        }
      }
    },
    ExportDefaultDeclaration(path: NodePath<t.ExportDefaultDeclaration>) {
      const d$ = path.get('declaration')
      /**
       * Matches:
       * export default {}
       */
      if (d$.isObjectExpression()) {
        const declaration$ = d$ as NodePath<t.ObjectExpression>
        call(declarationHandlers, declaration$ as NodePath<t.Node>)
        call(optionsHandlers, declaration$)
        processOptions(declaration$)
      } else if (d$.isCallExpression()) {
        const declaration$ = d$ as NodePath<t.CallExpression>
        /**
         * Matches:
         * export default fn(...)
         */
        const { callee } = declaration$.node
        const args$ = declaration$.get('arguments')
        const options$ = ((Array.isArray(args$)
          ? args$[0]
          : args$) as unknown) as NodePath

        /**
         * Matches:
         * export default defineComponent(...)
         */
        if (isIdentifier(callee) && callee.name === 'defineComponent') {
          if (options$.isObjectExpression()) {
            /**
             * Matches:
             * export default defineComponent({ ... })
             */
            call(declarationHandlers, declaration$ as any)
            call(optionsHandlers, options$ as any)
            processOptions(options$ as any)
          } else if (
            options$.isArrowFunctionExpression() ||
            options$.isFunctionExpression()
          ) {
            context.component.addSetup('', {
              loc: createSourceRange(context, options$.node),
            })
            /**
             * Matches:
             * export default defineComponent(() => {...})
             * export default defineComponent(function setup() {...})
             */
            call(setupHandlers, options$ as any)
          }
        }
      }
    },
  })
}
