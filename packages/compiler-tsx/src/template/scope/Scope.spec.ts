import { baseParse } from '@vue/compiler-core'
import { withScope } from './Scope'
import * as ts from 'typescript/lib/tsserverlibrary'
import { first } from '@vuedx/shared'

describe('scope', () => {
  test('should set scope', () => {
    const ast = baseParse(
      '<div v-for="(foo, index) of foos">{{ foo * 2 }}</div>',
    )

    withScope(ast, ts)

    expect(ast.scope.identifiers).toEqual(['foos'])
  })

  test('should set scope for model', () => {
    const ast = baseParse(
      '<div v-for="(foo, index) of foos">{{ foo * 2 }}<input v-model="bar" /></div>',
    )

    withScope(ast, ts)

    expect(ast.scope.identifiers).toEqual(['foos', 'bar'])
  })

  test('inline object as prop', () => {
    const ast = baseParse(`<div :data-example="{ foo: 'bar', id: 1 }" />`)

    withScope(ast, ts)

    expect(ast.scope.identifiers).toEqual([])
  })

  test('incomplete expression', () => {
    const ast = baseParse(`{{ foo. }}`)
    withScope(ast, ts)
    expect(ast.scope.identifiers).toEqual(['foo'])
  })

  test('expressions', () => {
    const expressions = {
      'foo.bar': ['foo'],
      'foo.bar.baz': ['foo'],
      'foo.bar.baz()': ['foo'],
      'foo.bar.baz().qux': ['foo'],
      'foo[bar]': ['foo', 'bar'],
      'foo[bar.baz]': ['foo', 'bar'],
      'foo[bar + baz]': ['foo', 'bar', 'baz'],
      'foo[bar + baz()]': ['foo', 'bar', 'baz'],
      'foo[bar + baz(qux)]': ['foo', 'bar', 'baz', 'qux'],
      '{ foo, bar: baz }': ['foo', 'baz'],
      '{ foo, [bar]: baz }': ['foo', 'bar', 'baz'],
      '{ foo: { bar: { baz } } }': ['baz'],
      '(foo, {bar}, [baz]) => {}': [],
      '(foo, {key: bar}, [baz]) => {}': [],
      '(foo, {key: [bar]}, [baz]) => {}': [],
      '(foo, { key: { bar } }, [baz]) => {}': [],
    }

    for (const [expression, identifiers] of Object.entries(expressions)) {
      const ast = baseParse(`{{ ${expression} }}`)
      withScope(ast, ts)
      expect(ast.scope.identifiers).toEqual(identifiers)
    }
  })

  test('expressions', () => {
    const expressions = {
      'foo, {bar}, [baz]': ['foo', 'bar', 'baz'],
      'foo, {key: bar}, [baz]': ['foo', 'bar', 'baz'],
      'foo, {key: [bar]}, [baz]': ['foo', 'bar', 'baz'],
      'foo, { key: { bar } }, [baz]': ['foo', 'bar', 'baz'],
    }

    for (const [expression, identifiers] of Object.entries(expressions)) {
      const ast = baseParse(`<F v-slot="${expression}" />`)
      withScope(ast, ts)
      expect(first(ast.children).scope.identifiers).toEqual(identifiers)
    }
  })
})
