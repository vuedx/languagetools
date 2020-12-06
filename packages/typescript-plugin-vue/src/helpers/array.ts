export function first<T>(items: T[] | readonly T[]): T {
  return items[0]
}

export function last<T>(items: T[] | readonly T[]): T {
  return items[items.length - 1]
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
