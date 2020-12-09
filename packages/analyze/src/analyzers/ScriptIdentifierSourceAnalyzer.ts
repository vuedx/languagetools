import T from '@babel/types'
import { Plugin, ScriptAnalyzerContext } from '../types'
import { createSourceRange } from '../utilities'

export const ScriptIdentifierSourceAnalyzer: Plugin = {
  babel(node$, context) {
    if (context.mode !== 'setup') return
    const node = node$.node
    if (T.isProgram(node)) {
      const register = (node: T.Node, kind: string): void => {
        if (T.isIdentifier(node)) {
          context.component.addIdentifier(
            node.name,
            `scriptSetup:${kind}`,
            createSourceRange(context, node),
          )
        } else if (T.isObjectPattern(node)) {
          node.properties.forEach((property) => {
            if (T.isObjectProperty(property)) {
              register(property.key, kind)
            } else {
              register(property.argument, kind)
            }
          })
        } else if (T.isArrayPattern(node)) {
          node.elements.forEach((element) => {
            if (T.isRestElement(element)) {
              register(element.argument, kind)
            } else if (T.isAssignmentPattern(element)) {
              register(element.left, kind)
            } else if (element != null) {
              register(element, kind)
            }
          })
        } else if (T.isMemberExpression(node)) {
          register(node.object, kind)
        }
      }

      const processStatement = (statement: T.Statement): void => {
        if (T.isLabeledStatement(statement)) {
          if (statement.label.name === 'ref') {
            if (T.isExpressionStatement(statement.body)) {
              if (T.isAssignmentExpression(statement.body.expression)) {
                register(statement.body.expression.left, 'refLabel')
              }
            }
          }
        } else if (T.isVariableDeclaration(statement)) {
          statement.declarations.forEach(({ id }) => {
            register(id, 'value')
          })
        } else if (T.isFunctionDeclaration(statement)) {
          if (statement.id != null) {
            register(statement.id, 'function')
          }
        }
      }

      node.body.forEach(processStatement)
    }
  },
  options: {
    data(property$, context) {
      setIdentifiersSource(property$.node, 'data', context)
    },
    setup(property$, context) {
      setIdentifiersSource(property$.node, 'setup', context)
    },
    computed(property$, context) {
      setIdentifiersSource(property$.node, 'computed', context)
    },
    methods(property$, context) {
      setIdentifiersSource(property$.node, 'methods', context)
    },
    inject(property$, context) {
      setIdentifiersSource(property$.node, 'inject', context, [
        'object',
        'array',
      ])
    },
  },
}

function setIdentifiersSource(
  node: T.ObjectMember,
  source: string,
  context: ScriptAnalyzerContext,
  allowedTypes: Array<'object' | 'array'> = ['object'],
): void {
  const register = (obj?: T.Node): void => {
    if (allowedTypes.includes('object') && T.isObjectExpression(obj)) {
      obj.properties.forEach((property) => {
        if (T.isObjectMember(property)) {
          if (T.isIdentifier(property.key)) {
            context.component.addIdentifier(
              property.key.name,
              source,
              createSourceRange(context, property.key),
            )
          }
        }
      })
    } else if (allowedTypes.includes('array') && T.isArrayExpression(obj)) {
      obj.elements.forEach((element) => {
        if (T.isStringLiteral(element)) {
          context.component.addIdentifier(
            element.value,
            source,
            createSourceRange(context, element),
          )
        }
      })
    }
  }

  if (T.isObjectProperty(node)) {
    if (T.isObjectExpression(node.value) || T.isArrayExpression(node.value)) {
      register(node.value)
    } else if (
      T.isFunctionExpression(node.value) ||
      T.isArrowFunctionExpression(node.value)
    ) {
      register(getReturnExpression(node.value))
    }
  } else {
    register(getReturnExpression(node))
  }
}

function getReturnExpression(
  node: T.FunctionExpression | T.ArrowFunctionExpression | T.ObjectMethod,
): T.Expression | undefined {
  if (T.isBlockStatement(node.body)) {
    return (
      node.body.body.find((node): node is T.ReturnStatement =>
        T.isReturnStatement(node),
      )?.argument ?? undefined
    )
  } else if (T.isExpression(node.body)) {
    return node.body
  }
}
