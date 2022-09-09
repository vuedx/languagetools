export function isArray<T>(value: any): value is T[] {
  return Array.isArray(value)
}

export function first<T>(items: T[] | readonly T[]): T {
  if (items.length === 0) throw new Error('IndexOutOfBounds')

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return items[0]!
}

export function last<T>(items: T[] | readonly T[], nth: number = 1): T {
  const index = items.length - nth
  if (index < 0 || index >= items.length) throw new Error('IndexOutOfBounds')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return items[index]!
}

export function findPrevSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index > 0) return items[index - 1]
  else return undefined
}

export function findNextSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index >= 0) return items[index + 1]
  else return undefined
}

export function concat<T>(
  a: T[] | Readonly<T[]> | undefined,
  b: T[] | Readonly<T[]> | undefined,
): T[] {
  const c: T[] = []

  if (isArray(a)) c.push(...a)
  if (isArray(b)) c.push(...b)

  return c
}

type FlatArray<Arr, Depth extends number> = {
  done: Arr
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<
        InnerArr,
        [
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ][Depth]
      >
    : Arr
}[Depth extends -1 ? 'done' : 'recur']

export function flatten<T extends unknown, D extends number = 1>(
  array: T,
  depth: D = 1 as D,
): Array<FlatArray<T, D>> {
  const items: Array<FlatArray<T, D>> = []

  if (Array.isArray(array)) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        if (depth > 1) items.push(...flatten(item, depth - 1))
        else items.push(...item)
      } else {
        items.push(item)
      }
    })
  }

  return items
}

type Chunk<T, Size extends number> = {
  done: []
  recurr: [
    T,
    ...Chunk<
      T,
      [
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ][Size]
    >,
  ]
}[Size extends 0 ? 'done' : 'recurr']

export function chunk<T, D extends number>(
  items: T[],
  chunkSize: D,
): Array<Chunk<T, D>> {
  const chunks: Array<Chunk<T, D>> = []
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize) as Chunk<T, D>)
  }

  return chunks
}

export const BinarySearchBias = {
  GREATEST_LOWER_BOUND: 1,
  LEAST_UPPER_BOUND: 2,
}

type BinarySearchBiasType =
  typeof BinarySearchBias[keyof typeof BinarySearchBias]
function recursiveSearch<T>(
  low: number,
  high: number,
  needle: T,
  haystack: T[],
  compare: (a: T, b: T) => number,
  bias: BinarySearchBiasType,
): number {
  const mid = Math.floor((low + high) / 2)
  const value = haystack[mid] as T
  const comparison = compare(needle, value)

  if (comparison === 0) return mid
  else if (comparison > 0) {
    if (high - mid > 1) {
      return recursiveSearch(mid, high, needle, haystack, compare, bias)
    }

    if (bias === BinarySearchBias.LEAST_UPPER_BOUND) {
      return high < haystack.length ? high : -1
    } else {
      return mid
    }
  } else {
    if (mid - low > 1) {
      return recursiveSearch(low, mid, needle, haystack, compare, bias)
    }

    if (bias === BinarySearchBias.GREATEST_LOWER_BOUND) {
      return low < 0 ? -1 : low
    } else {
      return mid
    }
  }
}

export function binarySearch<T>(
  needle: T,
  haystack: T[],
  compare: (a: T, b: T) => number,
  bias: BinarySearchBiasType = BinarySearchBias.GREATEST_LOWER_BOUND,
): number {
  let index = recursiveSearch(
    -1,
    haystack.length,
    needle,
    haystack,
    compare,
    bias,
  )

  if (index < 0) return -1

  while (index - 1 > 0) {
    if (compare(haystack[index] as T, haystack[index - 1] as T) !== 0) {
      break
    }

    --index
  }

  return index
}
