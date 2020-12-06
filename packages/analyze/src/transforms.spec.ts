import { transformToFunction } from './transforms'

describe('transformToFunction', () => {
  test('should transform expression', () => {
    expect(transformToFunction('foo + bar')).toBe(
      '() => {\n  return foo + bar;\n}',
    )
  })

  test('should transform expression to named function', () => {
    expect(
      transformToFunction('foo + bar', {
        name: 'newMethod',
        args: [],
        kind: 'expression',
      }),
    ).toBe('function newMethod() {\n  return foo + bar;\n}')
  })

  test('should transform statements', () => {
    expect(
      transformToFunction('foo + bar', { kind: 'statement', args: [] }),
    ).toBe('() => {\n  foo + bar;\n}')
  })

  test('should rewrite identifiers', () => {
    expect(
      transformToFunction('foo + bar.foo + foo[foo.bar]', {
        kind: 'expression',
        args: ['bar'],
        rewrite: { context: 'this' },
      }),
    ).toBe(
      '(bar) => {\n  return this.foo + bar.foo + this.foo[this.foo.bar];\n}',
    )
  })

  test('should transform inline functions', () => {
    expect(
      transformToFunction('($event, foo) => onClick($event, foo)', {
        kind: 'statement',
        args: [],
        rewrite: { context: 'this' },
      }),
    ).toBe('($event, foo) => {\n  this.onClick($event, foo);\n}')
  })
})
