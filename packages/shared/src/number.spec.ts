import { isNumber } from './number'

describe('isNumber', () => {
  test('checks', () => {
    expect(isNumber('')).toBe(false)
    expect(isNumber(String())).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(1.1)).toBe(true)
    expect(isNumber(Number('1'))).toBe(true)
    expect(isNumber(Number.NaN)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(Symbol(''))).toBe(false)
    expect(isNumber(() => null)).toBe(false)
  })
})
