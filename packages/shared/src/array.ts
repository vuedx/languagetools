export function isArray<T>(value: any): value is T[] {
  return Array.isArray(value)
}

export function first<T>(items: T[] | readonly T[]): T {
  return items[0]
}

export function last<T>(items: T[] | readonly T[], nth: number = 1): T {
  return items[items.length - nth]
}

export function findPrevSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index > 0) return items[index - 1]
}

export function findNextSibling<T>(
  items: T[] | readonly T[],
  item: T,
): T | undefined {
  const index = items.indexOf(item)
  if (index >= 0) return items[index + 1]
}

export function concat<T>(a: T[] | undefined, b: T[] | undefined): T[] {
  const c: T[] = []

  if (isArray(a)) c.push(...a)
  if (isArray(b)) c.push(...b)

  return c
}
