import { NodePath } from '@babel/traverse'
import generate from '@babel/generator'
import {
  isBooleanLiteral,
  isIdentifier,
  isObjectProperty,
  isStringLiteral,
  ObjectMember,
} from '@babel/types'
import { PropInfo, TypeInfo } from '../component'
import { Plugin } from '../types'
import { createSourceRange, isNotNull } from '../utilities'

export const PropsOptionsAnalyzer: Plugin = {
  options: {
    props(property$, context) {
      const props$ = property$.isObjectProperty()
        ? (property$.get('value') as NodePath)
        : property$

      if (props$.isObjectExpression()) {
        ;(props$.get('properties') as NodePath[]).forEach((property$) => {
          if (property$.isObjectProperty()) {
            const key$ = property$.get('key') as NodePath
            const value$ = property$.get('value') as NodePath
            if (key$.isIdentifier()) {
              const name = key$.node.name
              context.component.addProp(name, {
                loc: createSourceRange(context, property$.node),
              })

              if (value$.isIdentifier()) {
                const type = getTypeInfo(value$)
                if (type != null) context.component.addProp(name, { type })
              } else if (value$.isArrayExpression()) {
                const type = getTypeInfo(value$)
                if (type != null) context.component.addProp(name, { type })
              } else if (value$.isObjectExpression()) {
                const options = toObjectExpressionMap(value$)
                const info: Partial<PropInfo> = {}

                if (options.required != null) {
                  const node = options.required.node
                  info.required =
                    isObjectProperty(node) &&
                    isBooleanLiteral(node.value) &&
                    node.value.value
                }

                if (options.type != null) {
                  info.type = getTypeInfo(options.type.get('value') as NodePath)
                }

                context.component.addProp(name, info)
              }
            }
          }
        })
      } else if (props$.isArrayExpression()) {
        props$.node.elements.forEach((element) => {
          if (isStringLiteral(element)) {
            context.component.addProp(element.value, {
              loc: createSourceRange(context, element),
            })
          }
        })
      }
    },
  },
}

function getTypeInfo(path$: NodePath): TypeInfo[] | undefined {
  if (path$.isIdentifier()) {
    switch (path$.node.name) {
      case 'String':
        return [{ kind: 'string' }]
      case 'Number':
        return [{ kind: 'number' }]
      case 'Boolean':
        return [{ kind: 'boolean' }]
      case 'Object':
      case 'Symbol':
        return [
          {
            kind: 'expression',
            imports: [],
            expression: path$.node.name.toLowerCase(),
          },
        ]
      case 'Array':
        return [{ kind: 'expression', imports: [], expression: 'any[]' }]
    }
  } else if (path$.isArrayExpression()) {
    return (path$.get('elements') as NodePath[])
      .filter((element$) => element$.isIdentifier())
      .map(getTypeInfo)
      .filter(isNotNull)
      .flat()
  } else if (path$.isTSAsExpression()) {
    return [
      {
        kind: 'expression',
        imports: [],
        expression: generate(path$.node.typeAnnotation, { sourceMaps: false })
          .code,
      },
    ]
  }
}

function toObjectExpressionMap(
  path$: NodePath,
): Record<string, NodePath<ObjectMember>> {
  const map: Record<string, NodePath<ObjectMember>> = {}

  if (path$.isObjectExpression()) {
    ;(path$.get('properties') as NodePath[]).forEach((property$) => {
      if (property$.isObjectMember()) {
        const key = property$.node.key

        if (isIdentifier(key)) {
          map[key.name] = property$ as any
        }
      }
    })
  }

  return map
}
