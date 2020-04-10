import { NodePath } from '@babel/traverse'
import {
  functionExpression,
  TSTypeAnnotation,
  TSTypeLiteral,
  TSTypeParameterInstantiation,
  ArrayExpression,
  ObjectExpression,
} from '@babel/types'
import {
  findObjectProperty,
  getObjectMemberName,
  getTypeName,
  stringifyBabelAST,
} from '../../ast/babel'
import { parseJSDoc, stringifyJSDocAST } from '../../ast/jsdoc'
import { EnhancedSFCScriptBlock, InspectorContext } from '../../interfaces'
import { PropInfo } from '../../VueComponentInfo'

export function inspectProps(
  { paths }: EnhancedSFCScriptBlock,
  context: InspectorContext
) {
  inspectPropsOption(paths, context)
  inspectDefineComponentGenericProps(paths, context)
}

function inspectPropsOption(
  paths: EnhancedSFCScriptBlock['paths'],
  context: InspectorContext
) {
  if (paths.options) {
    const props$ = findObjectProperty(paths.options, 'props')?.get(
      'value'
    ) as unknown as NodePath<any>

    if (props$?.isArrayExpression()) {
      inspectArrayProps(props$, context)
    } else if (props$?.isObjectExpression()) {
      inspectObjectProps(props$, context)
    }
  }
}

function inspectArrayProps(
  props$: NodePath<ArrayExpression>,
  context: InspectorContext
) {
  ;(props$.get('elements') as NodePath<any>[]).forEach((element$) => {
    if (element$.isStringLiteral()) {
      context.addProp({
        name: element$.node.value,
        description: '',
        required: false,
        default: null,
        type: {
          runtime: 'any',
          static: 'any',
        },
        meta: {},
      })
    }
  })
}

function inspectObjectProps(
  props$: NodePath<ObjectExpression>,
  context: InspectorContext
) {
  ;(props$.get('properties') as NodePath<any>[]).forEach((property$) => {
    if (property$.isObjectProperty()) {
      const prop$ = property$.get('value')
      const prop: PropInfo = {
        name: getObjectMemberName(property$) as string,
        description: '',
        required: false,
        default: null,
        type: {
          runtime: 'any',
          static: 'any',
        },
        meta: {},
      }

      Object.assign(prop, findPropInfo(prop$))

      const comments = (property$.node.leadingComments || [])
        .filter((comment) => comment.value.startsWith('*'))
        .map((comment) => comment.value)

      if (comments.length) {
        const ast = parseJSDoc(`/*${comments.join('\n')}*/`)

        prop.description = ast.description

        ast.tags.forEach((tag) => {
          if (tag.type) {
            if (tag.title === 'type') {
              prop.type.static = stringifyJSDocAST(tag.type)
            }
          } else {
            prop.meta[tag.title] =
              tag.description == null ? true : tag.description
          }
        })
      }

      context.addProp(prop)
    }
  })
}

function inspectDefineComponentGenericProps(
  paths: EnhancedSFCScriptBlock['paths'],
  context: InspectorContext
) {
  if (paths.define?.isCallExpression()) {
    const typeParams$ = paths.define.get('typeParameters')

    if (typeParams$.isNodeType('TSTypeParameterInstantiation')) {
      const params = (typeParams$ as NodePath<
        TSTypeParameterInstantiation
      >).get('params') as NodePath<any>[]

      if (Array.isArray(params) && params.length) {
        const param$ = params[0]

        if (param$.isNodeType('TSTypeLiteral')) {
          const type$ = param$ as NodePath<TSTypeLiteral>

          ;(type$.get('members') as NodePath<any>[]).forEach((member$) => {
            const annotation$ = member$.get('typeAnnotation') as NodePath<
              TSTypeAnnotation
            >

            const key$ = member$.get('key') as NodePath<any>

            if (key$.isIdentifier()) {
              context.addProp({
                name: key$.node.name,
                type: {
                  static: stringifyBabelAST(annotation$.node.typeAnnotation),
                },
                required: !key$.node.optional,
              } as any)
            }
          })
        }
      }
    }
  }
}

function findPropInfo(node$: NodePath<any>) {
  const prop: Partial<PropInfo> = {}

  if (node$.isIdentifier()) {
    const type = getTypeName(node$.node.name)
    prop.type = {
      static: type,
      runtime: type,
    }
  } else if (node$.isArrayExpression()) {
    const type = node$
      .get('elements')
      .map((element$) =>
        element$.isIdentifier()
          ? getTypeName(element$.node.name)
          : element$.isNullLiteral()
          ? 'null'
          : stringifyBabelAST(element$.node!)
      )
      .filter(Boolean)
      .join('|')

    prop.type = {
      runtime: type,
      static: type,
    }
  } else if (node$.isObjectExpression()) {
    const type$ = findObjectProperty(node$, 'type')
    if (type$) {
      prop.type = findPropInfo(type$.get('value')).type
    }

    const required$ = findObjectProperty(node$, 'required')
    if (required$) {
      const value$ = required$.get('value') as NodePath<any>
      if (value$.isBooleanLiteral()) {
        prop.required = value$.node.value
      }
    }

    const default$ = findObjectProperty(node$, 'default')
    if (default$) {
      const value$ = default$.get('value') as NodePath<any>

      prop.default =
        value$.isFunctionExpression() || value$.isArrowFunctionExpression()
          ? {
              factory: stringifyBabelAST(value$.node),
            }
          : default$.isObjectMethod()
          ? {
              factory: stringifyBabelAST(
                functionExpression(
                  null,
                  default$.node.params,
                  default$.node.body
                )
              ),
            }
          : {
              value: stringifyBabelAST(value$.node),
            }
    }
  }

  return prop
}
