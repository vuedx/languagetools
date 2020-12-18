import { kebabCase } from './string'

describe('kebab-case', () => {
  test('PascalCase to kebab-case', () => {
    expect(kebabCase('SomePascalCaseString')).toBe('some-pascal-case-string')
  })

  test('camelCase to kebab-case', () => {
    expect(kebabCase('someCamelCaseString')).toBe('some-camel-case-string')
  })

  test('snake_case to kebab-case', () => {
    expect(kebabCase('some_snake_case_string')).toBe('some-snake-case-string')
  })

  test('string with dots to kebab-case', () => {
    expect(kebabCase('SomePascal.CaseString')).toBe('some-pascal-case-string')
    expect(kebabCase('someCamel.caseString')).toBe('some-camel-case-string')
    expect(kebabCase('some_snake.case_string')).toBe('some-snake-case-string')
  })

  test('mixed to kebab-case', () => {
    expect(kebabCase('SomePascal.case_string')).toBe('some-pascal-case-string')
    expect(kebabCase('SomePascal.caseString')).toBe('some-pascal-case-string')
    expect(kebabCase('someCamel.case-string')).toBe('some-camel-case-string')
    expect(kebabCase('someCamel.case--string')).toBe('some-camel-case-string')
    expect(kebabCase('some_snake.case__string')).toBe('some-snake-case-string')
  })
})
