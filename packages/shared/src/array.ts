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
