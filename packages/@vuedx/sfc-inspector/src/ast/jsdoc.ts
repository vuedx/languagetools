import { parse, type, Type, parseParamType } from 'doctrine'

export function stringifyJSDocAST(node: Type) {
  // @ts-ignore
  return type.stringify(node, { compact: true })
}

export function parseJSDoc(content: string, unwrap = true) {
  const ast = parse(content, { unwrap })

  ast.tags.forEach(tag => {
    if (tag.title === 'emits' && tag.description) {
      const ref = parse(
        tag.description.trim().startsWith('@param ')
          ? tag.description
          : '@param ' + tag.description,
        { unwrap: false }
      ).tags[0]

      tag.description = ref.description
      tag.name = ref.name
      tag.type = ref.type
    }
  })

  return ast
}
