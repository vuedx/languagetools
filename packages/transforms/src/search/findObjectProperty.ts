import * as T from '@babel/types'

export function findObjectProperty(
  node: T.ObjectExpression,
  propertyName: string,
): T.Expression | null {
  return (
    (node.properties.find((property): property is T.ObjectProperty => {
      if (T.isObjectProperty(property)) {
        if (T.isStringLiteral(property.key)) {
          return property.key.value === propertyName
        } else if (T.isIdentifier(property.key)) {
          return property.key.name === propertyName
        }
      }
      return false
    })?.value as any) ?? null
  )
}
