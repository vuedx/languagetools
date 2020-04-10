import generate from '@babel/generator'
import traverse, { NodePath } from '@babel/traverse'
import {
  File,
  Node,
  ObjectExpression,
  ObjectProperty,
  ObjectMethod,
  FunctionExpression,
  ArrowFunctionExpression,
} from '@babel/types'
import { ComponentOptionsPaths } from '../interfaces'

export function stringifyBabelAST(node: Node) {
  return generate(node, { compact: true }).code
}

export function findVueComponentOptions(ast: File): ComponentOptionsPaths {
  const result: ComponentOptionsPaths = {
    default: null,
    options: null,
    define: null,
  }

  function extractVueComponent(node$: NodePath<any>) {
    if (node$.isObjectExpression()) {
      result.options = node$
    } else if (node$.isIdentifier()) {
      const binding = node$.scope.getBinding(node$.node.name)

      if (binding) {
        const binding$ = binding.path

        if (binding$.isVariableDeclarator()) {
          const init$ = binding$.get('init')
          if (init$) extractVueComponent(init$)
        }
      }
    } else if (node$.isCallExpression()) {
      result.define = node$
      node$.get('arguments').forEach(extractVueComponent)
    }
  }

  traverse((ast as unknown) as any, {
    ExportDefaultDeclaration(node$) {
      result.default = node$
      const declaration$ = node$.get('declaration')

      extractVueComponent(declaration$)

      return false
    },
  })

  return result
}

export function findObjectProperty(
  object$: NodePath<ObjectExpression>,
  name: string
): NodePath<ObjectProperty> | null {
  return (
    (object$.get('properties') as NodePath<any>[]).find(function (
      property$
    ): property$ is NodePath<ObjectProperty> {
      return name === getObjectMemberName(property$)
    }) || null
  )
}

export function findObjectMethod(
  object$: NodePath<ObjectExpression>,
  name: string
): NodePath<
  ObjectMethod | FunctionExpression | ArrowFunctionExpression
> | null {
  const property$ = findObjectProperty(object$, name)

  if (property$?.isObjectMethod()) {
    return property$
  } else if (property$?.isObjectMember()) {
    const value$ = property$.get('value') as NodePath<any>
    if (value$.isFunctionExpression()) {
      return value$
    } else if (value$.isArrowFunctionExpression()) {
      return value$
    }
  }

  return null
}

export function getObjectMemberName(node$: NodePath<any>) {
  if (node$.isObjectProperty()) {
    const key$ = node$.get('key') as NodePath<any>

    if (key$.isStringLiteral()) {
      return key$.node.value
    } else if (key$.isIdentifier()) {
      return key$.node.name
    }
  } else if (node$.isObjectMethod()) {
    const key$ = node$.get('key') as NodePath<any>

    if (key$.isStringLiteral()) {
      return key$.node.value
    } else if (key$.isIdentifier()) {
      return key$.node.name
    }
  }

  return null
}

export function getTypeName(type: string) {
  switch (type) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Symbol':
    case 'Object':
      return type.toLowerCase()
    case 'Array':
      return `any[]`
    default:
      return type
  }
}
