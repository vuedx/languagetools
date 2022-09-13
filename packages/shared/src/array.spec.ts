import {
  BinarySearchBias,
  binarySearch,
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

test('binarySearch', () => {
  const compare = (a: number, b: number) => {
    if (Number.isFinite(a) && Number.isFinite(b)) return a - b
    throw new Error('Invalid value')
  }
  const nums = [1, 2, 3, 5, 8]

  expect(binarySearch(1, [], compare)).toEqual(-1)

  expect(
    binarySearch(2, nums, compare, BinarySearchBias.GREATEST_LOWER_BOUND),
  ).toBe(1)
  expect(
    binarySearch(-1, nums, compare, BinarySearchBias.GREATEST_LOWER_BOUND),
  ).toBe(-1)
  expect(
    binarySearch(4, nums, compare, BinarySearchBias.GREATEST_LOWER_BOUND),
  ).toBe(2)
  expect(
    binarySearch(9, nums, compare, BinarySearchBias.GREATEST_LOWER_BOUND),
  ).toBe(4)

  expect(
    binarySearch(2, nums, compare, BinarySearchBias.LEAST_UPPER_BOUND),
  ).toBe(1)
  expect(
    binarySearch(-1, nums, compare, BinarySearchBias.LEAST_UPPER_BOUND),
  ).toBe(0)
  expect(
    binarySearch(4, nums, compare, BinarySearchBias.LEAST_UPPER_BOUND),
  ).toBe(3)
  expect(
    binarySearch(9, nums, compare, BinarySearchBias.LEAST_UPPER_BOUND),
  ).toBe(-1)
})

test('2d binarySearch', () => {
  const nums = [
    [7, 0],
    [7, 52],
    [8, 0],
    [8, 0],
    [8, 34],
    [9, 0],
    [9, 2],
    [9, 29],
    [10, 0],
    [10, 2],
    [10, 24],
    [11, 0],
    [11, 2],
    [11, 30],
    [12, 0],
    [12, 2],
    [12, 10],
    [13, 0],
    [13, 4],
    [13, 6],
    [14, 0],
    [14, 6],
    [14, 7],
    [14, 10],
    [15, 0],
    [15, 8],
    [15, 19],
    [15, 20],
    [15, 21],
    [15, 22],
    [15, 23],
    [16, 0],
    [16, 8],
    [16, 42],
    [17, 0],
    [17, 6],
    [17, 8],
    [18, 0],
    [18, 4],
    [18, 7],
    [19, 0],
    [19, 2],
    [19, 3],
    [20, 0],
    [20, 0],
    [20, 1],
    [21, 0],
    [21, 0],
    [21, 29],
    [22, 0],
    [22, 0],
    [22, 26],
    [23, 0],
    [23, 2],
    [23, 29],
    [24, 0],
    [24, 2],
    [24, 24],
    [25, 0],
    [25, 2],
    [25, 30],
    [26, 0],
    [26, 2],
    [26, 42],
    [27, 0],
    [27, 2],
    [27, 4],
    [28, 0],
    [28, 0],
    [28, 1],
    [29, 0],
    [29, 0],
    [29, 30],
  ]

  const index = nums.findIndex((item) => item[0] === 15 && item[1] === 21)
  expect(
    binarySearch(
      [15, 21],
      nums,
      (a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
      },
      BinarySearchBias.GREATEST_LOWER_BOUND,
    ),
  ).toEqual(index)
  expect(
    binarySearch(
      [15, 21],
      nums,
      (a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
      },
      BinarySearchBias.LEAST_UPPER_BOUND,
    ),
  ).toEqual(index)
})
