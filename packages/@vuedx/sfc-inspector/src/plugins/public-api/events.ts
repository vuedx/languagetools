import traverse, { NodePath } from '@babel/traverse'
import { Comment, TSAsExpression, CallExpression } from '@babel/types'
import { findObjectMethod, stringifyBabelAST } from '../../ast/babel'
import { parseJSDoc, stringifyJSDocAST } from '../../ast/jsdoc'
import {
  ComponentOptionsPaths,
  EnhancedSFCScriptBlock,
  InspectorContext,
} from '../../interfaces'
import { EventInfo } from '../../VueComponentInfo'
import { BlockStatement } from '@vue/compiler-core'

export function inspectEvents(
  script: EnhancedSFCScriptBlock,
  context: InspectorContext
) {
  inspectAnnotationEmits(script.paths, context)
  inspectDollorEmits(script.paths, context)
  inspectSetupEmits(script.paths, context)
}

function inspectDollorEmits(
  paths: ComponentOptionsPaths,
  context: InspectorContext
) {
  if (paths.options) {
    traverse(
      paths.options.node as any,
      {
        CallExpression(node$) {
          if (node$.isCallExpression()) {
            const callee$ = node$.get('callee')

            if (callee$.isMemberExpression()) {
              const object$ = callee$.get('object')
              const property$ = callee$.get('property')

              if (
                object$.isThisExpression() &&
                !Array.isArray(property$) &&
                property$.isIdentifier({ name: '$emit' })
              ) {
                const args = node$.get('arguments')

                inspectCallExpressionArguments(node$, args, context)
              }
            }
          }
        },
      },
      paths.options.scope,
      paths.options.parentPath
    )
  }
}

function inspectAnnotationEmits(
  paths: ComponentOptionsPaths,
  context: InspectorContext
) {
  if (!paths.default) return
  const comments: Comment[] = []

  if (paths.default.node.leadingComments) {
    comments.push(...paths.default.node.leadingComments)
  }

  if (paths.define?.node.leadingComments) {
    comments.push(...paths.define.node.leadingComments)
  }

  if (paths.options?.node.leadingComments) {
    comments.push(...paths.options.node.leadingComments)
  }

  if (comments.length) {
    const ast = parseJSDoc(prepareDocComment(comments))

    ast.tags.forEach((tag) => {
      if (tag.title === 'emits' && tag.name) {
        context.addEvent({
          name: tag.name,
          description: tag.description || '',
          type: {
            static: tag.type ? stringifyJSDocAST(tag.type) : 'any',
          },
        })
      }
    })
  }
}

function inspectSetupEmits(
  paths: EnhancedSFCScriptBlock['paths'],
  context: InspectorContext
) {
  if (!paths.options) return

  const setup$ = findObjectMethod(paths.options, 'setup')

  if (setup$) {
    const params = setup$.get('params') as NodePath<any>[]

    if (params.length >= 2) {
      const context$ = params[1]

      const isEmitExpression = createEmitExpressionChecker(context$)

      traverse(
        setup$.node.body as any,
        {
          CallExpression(node$) {
            if (isEmitExpression(node$)) {
              inspectCallExpressionArguments(
                node$,
                node$.get('arguments'),
                context
              )
            }
          },
        },
        (setup$.get('body') as NodePath<BlockStatement>).scope,
        setup$
      )
    }
  }
}

function createEmitExpressionChecker(context$: NodePath<any>) {
  if (context$.isObjectPattern()) {
    const emit$ = context$.get('properties').find((property$) => {
      if (property$.isObjectProperty()) {
        const key$ = property$.get('key')

        if (!Array.isArray(key$) && key$.isIdentifier({ name: 'emit' })) {
          return true
        }
      }
      return false
    })

    if (emit$?.isObjectProperty()) {
      const value$ = emit$.get('value')

      if (value$.isIdentifier()) {
        const name = value$.node.name

        return (node$: NodePath<any>) => {
          return (
            node$.isCallExpression() &&
            node$.get('callee').isIdentifier({ name })
          )
        }
      }
    }

    const rest$ = context$
      .get('properties')
      .find((property$) => property$.isRestElement())

    if (rest$?.isRestElement()) context$ = rest$.get('argument')
  }

  if (context$.isIdentifier()) {
    const name = context$.node.name // context

    return (node$: NodePath<any>) => {
      if (node$.isCallExpression()) {
        const callee$ = node$.get('callee')
        if (callee$.isMemberExpression()) {
          const object$ = callee$.get('object')
          const property$ = callee$.get('property')

          return (
            object$.isIdentifier({ name }) &&
            !Array.isArray(property$) &&
            property$.isIdentifier({ name: 'emit' })
          )
        }
      }

      return false
    }
  }

  return (node$: NodePath<any>) => false
}

function inspectCallExpressionArguments(
  node$: NodePath<CallExpression>,
  args: NodePath<any>[],
  context: any
) {
  const event: EventInfo = {
    name: '',
    description: '',
    type: {
      static: 'any',
    },
  }

  if (args.length > 0) {
    const eventName$ = args[0]

    if (eventName$.isStringLiteral()) {
      event.name = eventName$.node.value
    }

    if (args.length > 1) {
      const payload$ = args[1]

      if (payload$.node.leadingComments?.length) {
        const { tags } = parseJSDoc(
          prepareDocComment(payload$.node.leadingComments)
        )

        tags.forEach((tag) => {
          if (tag.type) {
            event.type = {
              static: stringifyJSDocAST(tag.type),
            }
          }
        })
      }

      if (payload$.isNodeType('TSAsExpression')) {
        event.type = {
          static: stringifyBabelAST(
            (payload$.node as TSAsExpression).typeAnnotation
          ),
        }
      }

      if (payload$.isIdentifier()) {
        // Maybe use typescript to detect type.
      }
    } else {
      event.type = {
        static: 'never',
      }
    }

    const statement$ = node$.findParent((node$) => node$.isStatement())

    if (statement$.node.leadingComments?.length) {
      event.description =
        parseJSDoc(prepareDocComment(statement$.node.leadingComments))
          .description || ''
    }
  }

  if (event.name) context.addEvent(event)
}

function prepareDocComment(comments: readonly Comment[]): string {
  return `/*${comments.map((comment) => comment.value).join('\n')}*/`
}
