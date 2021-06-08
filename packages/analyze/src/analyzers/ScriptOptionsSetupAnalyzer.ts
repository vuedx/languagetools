import type * as t from '@babel/types'
import {
  isBlockStatement,
  isIdentifier,
  isObjectExpression,
  isObjectMember,
  isObjectPattern,
  isObjectProperty,
  isReturnStatement,
  isStringLiteral,
} from '@babel/types'
import { createPlugin } from '../types'
import { createSourceRange } from '../utilities'

export const SetupOptionsAnalyzer = createPlugin({
  setup: [
    (node$, context) => {
      const { node } = node$
      const [props, setupContext] = node.params
      if (props != null) {
        let rest: string | undefined
        const identifiers: string[] = []
        if (isObjectPattern(props)) {
          props.properties.forEach((prop) => {
            if (isObjectProperty(prop)) {
              if (isIdentifier(prop.value)) {
                identifiers.push(prop.value.name)
              }
            } else {
              if (isIdentifier(prop.argument)) {
                rest = prop.argument.name
              }
            }
          })
        } else if (isIdentifier(props)) {
          rest = props.name
        }

        context.component.addSetup('props', {
          identifiers,
          rest,
          loc: createSourceRange(context, props),
        })
      }

      if (setupContext != null) {
        let rest: string | undefined
        const identifiers: Partial<{
          attrs: string
          slots: string
          emit: string
        }> = {}

        if (isObjectPattern(setupContext)) {
          setupContext.properties.forEach((prop) => {
            if (isObjectProperty(prop)) {
              if (isIdentifier(prop.value) && isIdentifier(prop.key)) {
                identifiers[prop.key.name as 'attrs' | 'slots' | 'emit'] =
                  prop.value.name
              }
            } else {
              if (isIdentifier(prop.argument)) {
                rest = prop.argument.name
              }
            }
          })
        } else if (isIdentifier(setupContext)) {
          rest = setupContext.name
        }
        context.component.addSetup('context', {
          identifiers,
          rest,
          loc: createSourceRange(context, setupContext),
        })
      }

      const addSetupSources = (node: t.ObjectExpression): void => {
        node.properties.forEach((property) => {
          if (isObjectMember(property)) {
            if (isIdentifier(property.key)) {
              context.component.addIdentifier(
                property.key.name,
                'setup',
                createSourceRange(context, property.key),
              )
            } else if (isStringLiteral(property.key)) {
              context.component.addIdentifier(
                property.key.value,
                'setup',
                createSourceRange(context, property.key),
              )
            }
          }
        })
      }

      if (isBlockStatement(node.body)) {
        const returnStatement = node.body.body.find((statement) =>
          isReturnStatement(statement),
        ) as t.ReturnStatement

        if (returnStatement?.argument != null) {
          context.component.addSetup('return', {
            loc: createSourceRange(context, returnStatement.argument),
          })

          if (isObjectExpression(returnStatement.argument)) {
            addSetupSources(returnStatement.argument)
          }
        }
      } else {
        context.component.addSetup('return', {
          loc: createSourceRange(context, node.body),
        })

        if (isObjectExpression(node.body)) {
          addSetupSources(node.body)
        }
      }
    },
  ],
})
