import { baseParse } from '@vue/compiler-core'
import { withScope } from './Scope'

describe('scope', () => {
  test('should set scope', () => {
    const ast = baseParse(
      '<div v-for="(foo, index) of foos">{{ foo * 2 }}</div>',
    )

    withScope(ast)

    expect(ast.scope.identifiers).toEqual(['foos'])
  })

  test('should set scope for model', () => {
    const ast = baseParse(
      '<div v-for="(foo, index) of foos">{{ foo * 2 }}<input v-model="bar" /></div>',
    )

    withScope(ast)

    expect(ast.scope.identifiers).toEqual(['foos', 'bar'])
  })

  test('inline object as prop', () => {
    const ast = baseParse(`<div :data-example="{ foo: 'bar', id: 1 }" />`)

    withScope(ast)

    expect(ast.scope.identifiers).toEqual([])
  })

  test('incomplete expression', () => {
    const ast = baseParse(`{{ foo. }}`)

    withScope(ast)

    expect(ast.scope.identifiers).toEqual(['foo'])
  })
})
