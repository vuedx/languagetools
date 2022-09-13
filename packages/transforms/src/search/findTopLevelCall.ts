import * as T from '@babel/types'

export function findTopLevelCall(
  ast: T.File,
  fn: string,
): T.CallExpression | T.VariableDeclarator | null {
  const isExpression = (exp: T.Expression): exp is T.CallExpression =>
    T.isCallExpression(exp) &&
    T.isIdentifier(exp.callee) &&
    exp.callee.name === fn

  for (const statement of ast.program.body) {
    if (T.isExpressionStatement(statement)) {
      if (isExpression(statement.expression)) {
        return statement.expression
      }
    } else if (T.isVariableDeclaration(statement)) {
      for (const declaration of statement.declarations) {
        if (declaration.init != null && isExpression(declaration.init)) {
          return declaration
        }
      }
    }
  }

  return null
}
