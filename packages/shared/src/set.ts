export const SetOps = {
  /**
   * a - b
   */
  difference: <T extends unknown>(a: Set<T>, b: Set<T>) => {
    const c = new Set<T>(a)
    for (const item of b) {
      c.delete(item)
    }
    return c
  },
  union: <T extends unknown>(a: Set<T>, b: Set<T>) => {
    const c = new Set<T>(a)
    for (const item of b) {
      c.add(item)
    }
    return c
  },
  intersetion: <T extends unknown>(a: Set<T>, b: Set<T>) => {
    const c = new Set<T>()
    for (const item of a) {
      if (b.has(item)) c.add(item)
    }
    return c
  },
}
