export type Evictable<T extends (...args: any) => any> = T & {
  evict(...args: Parameters<T>): void
}

export function memoize<F extends (...args: any) => unknown>(
  fn: F,
  getKey: (args: Parameters<F>) => object,
): Evictable<F> {
  const microcache = new WeakMap()

  const fnx = ((...args) => {
    const key = getKey(args)
    if (microcache.has(key)) return microcache.get(key)
    const value = fn(...args)

    microcache.set(key, value)

    return value
  }) as Evictable<F>

  fnx.evict = (...args) => microcache.delete(getKey(args))

  return fnx
}

export function memoizeByFirstArg<F extends (...args: any) => unknown>(
  fn: F,
): Evictable<F> {
  return memoize(fn, (args) => args[0])
}
