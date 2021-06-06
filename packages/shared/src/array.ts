export function isArray<T>(value: any): value is T[] {
  return Array.isArray(value)
}

export function first<T>(items: T[] | readonly T[]): T {
  if (items.length === 0) throw new Error('IndexOutOfBounds')

  return items[0]!
}

export function last<T>(items: T[] | readonly T[], nth: number = 1): T {
  const index = items.length - nth
  if (index < 0 || index >= items.length) throw new Error('IndexOutOfBounds')
  return items[index]!
}

export function findPrevSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index > 0) return items[index - 1]
  return undefined
}

export function findNextSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index >= 0) return items[index + 1]
  return undefined
}

export function concat<T>(a: T[] | undefined, b: T[] | undefined): T[] {
  const c: T[] = []

  if (isArray(a)) c.push(...a)
  if (isArray(b)) c.push(...b)

  return c
}

export function flatten<T>(array: (T | T[])[], depth: number = 1): T[] {
  const items: T[] = []

  array.forEach((item) => {
    if (Array.isArray(item)) {
      if (depth > 0) items.push(...flatten(item, depth - 1))
      else items.push(...item)
    } else {
      items.push(item)
    }
  })

  return items
}
