import { isNotNull } from './any'

test('isNotNull', () => {
  expect(isNotNull(null)).toBe(false)
  expect(isNotNull(undefined)).toBe(false)
  expect(isNotNull(0)).toBe(true)
  expect(isNotNull(false)).toBe(true)
  expect(isNotNull('')).toBe(true)
})
