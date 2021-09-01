import {
  kebabCase,
  isString,
  camelCase,
  pascalCase,
  isPascalCase,
  isCamelCase,
  isKebabCase,
} from './string'

describe('isString', () => {
  test('checks', () => {
    expect(isString('')).toBe(true)
    expect(isString(String())).toBe(true)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString(false)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(Symbol(''))).toBe(false)
    expect(isString(() => null)).toBe(false)
  })
})

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
    expect(kebabCase('_')).toBe('')
  })
})

describe('camelCase', () => {
  test('PascalCase to camelCase', () => {
    expect(camelCase('SomePascalCaseString')).toBe('somePascalCaseString')
  })

  test('camelCase to camelCase', () => {
    expect(camelCase('someCamelCaseString')).toBe('someCamelCaseString')
  })

  test('snake_case to camelCase', () => {
    expect(camelCase('some_snake_case_string')).toBe('someSnakeCaseString')
  })

  test('string with dots to camelCase', () => {
    expect(camelCase('SomePascal.CaseString')).toBe('somePascalCaseString')
    expect(camelCase('someCamel.caseString')).toBe('someCamelCaseString')
    expect(camelCase('some_snake.case_string')).toBe('someSnakeCaseString')
  })

  test('mixed to camelCase', () => {
    expect(camelCase('SomePascal.case_string')).toBe('somePascalCaseString')
    expect(camelCase('SomePascal.caseString')).toBe('somePascalCaseString')
    expect(camelCase('someCamel.case-string')).toBe('someCamelCaseString')
    expect(camelCase('someCamel.case--string')).toBe('someCamelCaseString')
    expect(camelCase('some_snake.case__string')).toBe('someSnakeCaseString')
    expect(camelCase('-')).toBe('')
  })
})

describe('PascalCase', () => {
  test('PascalCase to PascalCase', () => {
    expect(pascalCase('SomePascalCaseString')).toBe('SomePascalCaseString')
  })

  test('camelCase to PascalCase', () => {
    expect(pascalCase('someCamelCaseString')).toBe('SomeCamelCaseString')
  })

  test('snake_case to PascalCase', () => {
    expect(pascalCase('some_snake_case_string')).toBe('SomeSnakeCaseString')
  })

  test('string with dots to PascalCase', () => {
    expect(pascalCase('SomePascal.CaseString')).toBe('SomePascalCaseString')
    expect(pascalCase('someCamel.caseString')).toBe('SomeCamelCaseString')
    expect(pascalCase('some_snake.case_string')).toBe('SomeSnakeCaseString')
  })

  test('mixed to PascalCase', () => {
    expect(pascalCase('SomePascal.case_string')).toBe('SomePascalCaseString')
    expect(pascalCase('SomePascal.caseString')).toBe('SomePascalCaseString')
    expect(pascalCase('someCamel.case-string')).toBe('SomeCamelCaseString')
    expect(pascalCase('someCamel.case--string')).toBe('SomeCamelCaseString')
    expect(pascalCase('some_snake.case__string')).toBe('SomeSnakeCaseString')
    expect(pascalCase('-')).toBe('')
  })
})

describe('isPascalCase', () => {
  test('check', () => {
    expect(isPascalCase('PascalCase')).toBe(true)
    expect(isPascalCase('camelCase')).toBe(false)
    expect(isPascalCase('kebab-case')).toBe(false)
    expect(isPascalCase('snake_case')).toBe(false)
    expect(isPascalCase('identifier')).toBe(false)
    expect(isPascalCase('_Prefix')).toBe(false)
  })
})

describe('isCamelCase', () => {
  test('check', () => {
    expect(isCamelCase('PascalCase')).toBe(false)
    expect(isCamelCase('camelCase')).toBe(true)
    expect(isCamelCase('kebab-case')).toBe(false)
    expect(isCamelCase('snake_case')).toBe(false)
    expect(isCamelCase('identifier')).toBe(true)
    expect(isCamelCase('_Prefix')).toBe(false)
  })
})

describe('isKebabCase', () => {
  test('check', () => {
    expect(isKebabCase('PascalCase')).toBe(false)
    expect(isKebabCase('camelCase')).toBe(false)
    expect(isKebabCase('kebab-case')).toBe(true)
    expect(isKebabCase('snake_case')).toBe(false)
    expect(isKebabCase('identifier')).toBe(true)
    expect(isKebabCase('_Prefix')).toBe(false)
  })
})
