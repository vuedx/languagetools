export function isArray<T>(value: any): value is T[] {
  return Array.isArray(value)
}

export function first<T>(items: T[] | readonly T[]): T {
  return nth(items, 0)
}

export function nth<T>(items: T[] | readonly T[], nth: number = 0): T {
  if (nth < 0 || items.length <= nth) throw new Error('IndexOutOfBounds')

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return items[nth]!
}

export function last<T>(items: T[] | readonly T[], count: number = 1): T {
  return nth(items, items.length - count)
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
    >
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
