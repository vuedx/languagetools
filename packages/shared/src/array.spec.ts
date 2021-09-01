import {
  concat,
  findNextSibling,
  findPrevSibling,
  first,
  flatten,
  isArray,
  last,
} from './array'

test('isArray', () => {
  expect(isArray([])).toBe(true)
  expect(isArray({})).toBe(false)
})

test('first/last', () => {
  expect(first([1, 2, 3])).toBe(1)
  expect(last([1, 2, 3])).toBe(3)

  expect(first([1])).toBe(1)
  expect(last([1])).toBe(1)

  expect(() => first([])).toThrowError(/IndexOutOfBounds/)
  expect(() => last([])).toThrowError(/IndexOutOfBounds/)
})

test('findPrevSibling/findNextSibling', () => {
  expect(findPrevSibling([1, 2, 3], 1)).toBe(undefined)
  expect(findPrevSibling([1, 2, 3], 2)).toBe(1)
  expect(findPrevSibling([1, 2, 3], 3)).toBe(2)
  expect(findPrevSibling([1, 2, 3], 4)).toBe(undefined)

  expect(findNextSibling([1, 2, 3], 1)).toBe(2)
  expect(findNextSibling([1, 2, 3], 2)).toBe(3)
  expect(findNextSibling([1, 2, 3], 3)).toBe(undefined)
  expect(findNextSibling([1, 2, 3], 4)).toBe(undefined)
})

test('concat', () => {
  expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
  expect(concat([1, 2], undefined)).toEqual([1, 2])
  expect(concat(undefined, [3, 4])).toEqual([3, 4])
})

test('flatten', () => {
  expect(flatten([1, [2], [3, 4]])).toEqual([1, 2, 3, 4])
  expect(flatten([1, [2], [[3], [4]]])).toEqual([1, 2, [3], [4]])
  expect(flatten([1, [2], [[3], [4]]], 2)).toEqual([1, 2, 3, 4])
})
