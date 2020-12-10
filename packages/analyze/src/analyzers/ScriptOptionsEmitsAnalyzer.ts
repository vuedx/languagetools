import traverse, { NodePath } from '@babel/traverse'
import t, { isStringLiteral } from '@babel/types'
import { ImportSource, TypeInfo } from '../component'
import { Context, Plugin, ScriptAnalyzerContext } from '../types'
import { createSourceRange } from '../utilities'
import {
  getTypeAnnotation,
  inferType,
  stringifyBabelNode,
} from './babel-helpers'

export const EmitsOptionsAnalyzer: Plugin = {
  options: {
    emits(node$, context) {
      const emits$ = node$.isObjectProperty()
        ? (node$.get('value') as NodePath<t.ObjectProperty['value']>)
        : node$

      if (emits$.isObjectExpression()) {
        const properties$ = emits$.get('properties') as Array<
          NodePath<t.ObjectMember>
        >

        properties$.forEach((property$) => {
          const key$ = property$.get('key')

          if (key$.isIdentifier()) {
            const name = key$.node.name
            context.component.addEmit(name, {
              loc: createSourceRange(context, property$.node),
            })

            if (property$.isObjectMethod()) {
              const params$ = property$.get('params') as NodePath[]
              const type = getTypeInfo(params$, context)
              if (type != null) context.component.addEmit(name, { type })
            } else if (property$.isObjectProperty()) {
              const value$ = property$.get('value') as NodePath

              if (
                value$.isFunctionExpression() ||
                value$.isArrowFunctionExpression()
              ) {
                const params$ = value$.get('params') as NodePath[]
                const type = getTypeInfo(params$, context)
                if (type != null) context.component.addEmit(name, { type })
              }
            }
          }
        })
      } else if (emits$.isArrayExpression()) {
        emits$.node.elements.forEach((element) => {
          if (isStringLiteral(element)) {
            context.component.addEmit(element.value, {
              loc: createSourceRange(context, element),
            })
          }
        })
      }
    },
  },
}

export const ImplicitEmitsAnalyzer: Plugin = {
  options: [
    (node$: NodePath<t.ObjectExpression>, context: ScriptAnalyzerContext) => {
      if (context.mode === 'setup') return // No $emit() in <script setup>
      if (
        node$.get('properties').some((property$) => {
          if (property$.isObjectProperty()) {
            const key$ = property$.get('key') as NodePath
            if (key$.isIdentifier()) {
              return key$.node.name === 'emits'
            }
          }
        })
      ) {
        return // emits option is defined
      }

      processInferredEmits(node$ as NodePath, context)
    },
  ],
  templateExpression: (node$, context) => {
    const info = context.component.info() // script is already processed at this point

    if (info.options?.properties.emits != null) return // Explicit emits
    if (info.scriptSetup?.defineEmit != null) return // Explicit emits

    processInferredEmits(node$, context, true)
  },
}

export function processInferredEmits(
  node$: NodePath | t.File,
  context: Context,
  inTemplate: boolean = false,
): void {
  const { node, scope, parentPath } =
    node$ instanceof NodePath ? node$ : ({ node: node$ } as any)
  traverse(
    node,
    {
      CallExpression(node$) {
        const callee$ = node$.get('callee')
        const args$ = node$.get('arguments') as NodePath[]
        if (args$.length === 0) return
        if (callee$.isMemberExpression()) {
          const object$ = callee$.get('object') as NodePath<
            t.MemberExpression['object']
          >
          const property$ = callee$.get('property') as NodePath<
            t.MemberExpression['property']
          >

          if (
            object$.isThisExpression() &&
            property$.isIdentifier() &&
            property$.node.name === '$emit'
          ) {
            // continue
          } else {
            return
          }
        } else if (
          inTemplate &&
          callee$.isIdentifier() &&
          callee$.node.name === '$emit'
        ) {
          // continue
        } else {
          return
        }

        const event$ = (args$.shift() as unknown) as NodePath
        const type = getTypeInfo(args$, context, false)
        if (event$.isStringLiteral()) {
          const name = event$.node.value
          context.component.addEmit(name, {
            loc: createSourceRange(context, node$.node),
            type,
            isInferred: true,
          })
        } else {
          const name = stringifyBabelNode(event$.node)
          context.component.addEmit(name, {
            loc: createSourceRange(context, node$.node),
            type,
            isInferred: true,
            isDynamic: true,
          })
        }
      },
    },
    scope,
    null,
    parentPath,
  )
}

function getTypeInfo(
  params$: NodePath[],
  context: Context | ScriptAnalyzerContext,
  inFunctionParams: boolean = true,
): TypeInfo[] | undefined {
  if (params$.length === 0) {
    return [{ kind: 'expression', imports: [], expression: '() => void' }]
  } else {
    const imports: ImportSource[] = []
    const types = params$.map((param$, index) => {
      let type = 'any'
      if ('sourceFile' in context && context.sourceFile != null) {
      }
      const name =
        inFunctionParams && param$.isIdentifier()
          ? param$.node.name
          : `arg${index}`
      const optional = (param$.node as any).optional === true ? '?' : ''
      if (param$.has('typeAnnotation')) {
        const result = param$.isTSAsExpression()
          ? getTypeAnnotation(param$, context)
          : getTypeAnnotation(
              param$.get('typeAnnotation') as NodePath<t.TSTypeAnnotation>,
              context,
            )

        type = result.type
        imports.push(...result.imports)
      } else if (!inFunctionParams) {
        type = inferType(param$)
      }

      return `${name}${optional}: ${type}`
    })

    const imported = new Set<string>()

    return [
      {
        kind: 'expression',
        imports: imports.filter((source) => {
          try {
            return !imported.has(source.localName)
          } finally {
            imported.add(source.localName)
          }
        }),
        expression: `(${types.join(', ')}) => void`,
      },
    ]
  }
}
