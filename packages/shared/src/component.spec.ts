import { getComponentName, getComponentNameAliases } from './component'

test('getComponentName', () => {
  expect(getComponentName('foo-bar.vue')).toBe('FooBar')
  expect(getComponentName('foo-bar.ts')).toBe('FooBar')
  expect(getComponentName('foo-bar.js')).toBe('FooBar')
  expect(getComponentName('foo-bar.tsx')).toBe('FooBar')
  expect(getComponentName('foo-bar.jsx')).toBe('FooBar')

  expect(getComponentName('/path/FooBar.vue')).toBe('FooBar')
  expect(getComponentName('/path/FooBar.ts')).toBe('FooBar')
  expect(getComponentName('/path/FooBar.js')).toBe('FooBar')
  expect(getComponentName('/path/FooBar.tsx')).toBe('FooBar')
  expect(getComponentName('/path/FooBar.jsx')).toBe('FooBar')

  expect(getComponentName('404')).toBe('_404')
})

test('getComponentNameAliases', () => {
  expect(getComponentNameAliases('FooBar.vue')).toEqual(['foo-bar', 'FooBar'])
  expect(getComponentNameAliases('foo-bar.vue')).toEqual(['foo-bar'])
  expect(getComponentNameAliases('404_error.vue')).toEqual([
    '_404-error',
    '_404Error',
  ])
})
