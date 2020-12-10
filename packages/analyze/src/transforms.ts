import generate from '@babel/generator'
import { parse } from '@babel/parser'
import * as T from '@babel/types'

interface FunctionTransformOptions {
  name?: string
  kind: 'expression' | 'statement'
  args: string[]
  rewrite?:
    | {
        context: string
      }
    | {
        refs: string[]
        props: string[]
        identifiers: {
          props: string
          attrs: string
          slots: string
          emit: string
        }
      }
}

export function transformToFunction(
  content: string,
  options: FunctionTransformOptions = {
    kind: 'expression',
    args: [],
  },
): string {
  const ast = parse(content, {
    sourceType: 'module',
    plugins: [
      'bigInt',
      'optionalChaining',
      'optionalCatchBinding',
      'nullishCoalescingOperator',
      'objectRestSpread',
    ],
    ranges: true,
    // @ts-expect-error
    errorRecovery: true,
  })
  const params: Array<
    T.Identifier | T.Pattern | T.RestElement | T.TSParameterProperty
  > = options.args.map((id) => T.identifier(id))
  if (options.kind === 'statement') {
    if (ast.program.body.length === 1) {
      const statement = ast.program.body[0]
      if (T.isExpressionStatement(statement)) {
        const node = statement.expression
        if (T.isArrowFunctionExpression(node) || T.isFunctionExpression(node)) {
          params.push(...node.params)
          ast.program.body = T.isStatement(node.body)
            ? [node.body]
            : [T.expressionStatement(node.body)]
        }
      }
    }
  }

  if (options.rewrite != null) {
    const processed = new Set<T.Node>()
    const knownIdentifiers = new Set(options.args)
    const rewrite = options.rewrite
    params.forEach((node) =>
      T.traverseFast(node, (node) => {
        if (T.isIdentifier(node)) {
          knownIdentifiers.add(node.name)
        }
      }),
    )
    T.traverseFast(ast, (node) => {
      if (T.isMemberExpression(node)) {
        processed.add(node.property)
      } else if (
        T.isIdentifier(node) &&
        !processed.has(node) &&
        !knownIdentifiers.has(node.name)
      ) {
        processed.add(node)
        if ('context' in rewrite) {
          node.name = `${rewrite.context}.${node.name}`
        } else if ('refs' in rewrite) {
          if (rewrite.refs.includes(node.name)) {
            node.name = `${node.name}.value`
          } else if (rewrite.props.includes(node.name)) {
            node.name = `${rewrite.identifiers.props}.${node.name}`
          } else if (node.name === '$props') {
            node.name = rewrite.identifiers.props
          } else if (node.name === '$emit') {
            node.name = rewrite.identifiers.emit
          } else if (node.name === '$attrs') {
            node.name = rewrite.identifiers.attrs
          } else if (node.name === '$slots') {
            node.name = rewrite.identifiers.slots
          }
        }
      }
    })
  }

  const statements: T.Statement[] = ast.program.body.slice(0, -1)
  const [lastStatement] = ast.program.body.slice(-1)

  if (lastStatement != null) {
    if (options.kind === 'expression') {
      if (T.isExpressionStatement(lastStatement)) {
        statements.push(T.returnStatement(lastStatement.expression))
      } else {
        statements.push(lastStatement)
      }
    } else {
      statements.push(lastStatement)
    }
  }

  if (options.name == null) {
    const code = generate(
      T.arrowFunctionExpression(params, T.blockStatement(statements)),
    ).code

    if (params.length === 1 && T.isIdentifier(params[0])) {
      return code.replace(params[0].name, `(${params[0].name})`)
    }

    return code
  } else {
    return generate(
      T.functionExpression(
        T.identifier(options.name),
        params,
        T.blockStatement(statements),
      ),
    ).code.replace(/^function anonymous/, 'function ')
  }
}
