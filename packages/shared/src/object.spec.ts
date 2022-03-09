import { isPlainObject } from '.'
import { isObject } from './object'

class Foo {
  bar = 2
}
describe(isObject, () => {
  test('check object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
    expect(isObject(new Foo())).toBe(true)
    expect(isObject(new Date())).toBe(true)

    expect(isObject(() => {})).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(5)).toBe(false)
    expect(isObject(Symbol('1'))).toBe(false)
    expect(isObject(BigInt(5))).toBe(false)
  })
})

describe(isPlainObject, () => {
  test('check object', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)

    expect(isPlainObject(new Foo())).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject(() => {})).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(true)).toBe(false)
    expect(isPlainObject('string')).toBe(false)
    expect(isPlainObject(5)).toBe(false)
    expect(isPlainObject(Symbol('1'))).toBe(false)
    expect(isPlainObject(BigInt(5))).toBe(false)
  })
})
