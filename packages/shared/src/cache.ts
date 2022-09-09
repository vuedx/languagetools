/* eslint-disable @typescript-eslint/no-non-null-assertion */
export interface Cache<K, V> {
  has(key: K): boolean
  get(key: K): V | undefined
  set(key: K, value: V): void
  delete(key: K): void
  clear(): void

  resolve(key: K, getter: (key: K) => V): V
  resolveAsync(key: K, getter: (key: K) => Promise<V>): Promise<V>
}

abstract class BaseCache<K, V> implements Cache<K, V> {
  abstract has(key: K): boolean
  abstract get(key: K): V | undefined
  abstract set(key: K, value: V): void
  abstract delete(key: K): void
  abstract clear(): void

  resolve(key: K, getter: (key: K) => V): V {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.has(key)) return this.get(key)!

    const value = getter(key)

    this.set(key, value)

    return value
  }

  private readonly promises = new Map<K, Promise<V>>()

  async resolveAsync(key: K, getter: (key: K) => Promise<V>): Promise<V> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.has(key)) return this.get(key)!

    const promise = this.promises.get(key) ?? getter(key)
    this.promises.set(key, promise)
    try {
      const value = await promise
      this.set(key, value)

      return value
    } finally {
      this.promises.delete(key)
    }
  }
}

class LRU<K, V> extends BaseCache<K, V> implements Cache<K, V> {
  private current = new Map<K, V>()
  private previous = new Map<K, V>()

  constructor(public readonly maxSize: number) {
    super()
  }

  has(key: K): boolean {
    return this.current.has(key) || this.previous.has(key)
  }

  get(key: K): V | undefined {
    if (this.current.has(key)) return this.current.get(key)
    else if (this.previous.has(key)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const value = this.previous.get(key)!
      this.set(key, value)

      return value
    } else return undefined
  }

  set(key: K, value: V): void {
    this.current.set(key, value)
    if (this.current.size > this.maxSize) {
      this.previous = this.current
      this.current = new Map()
    }
  }

  delete(key: K): void {
    this.current.delete(key)
    this.previous.delete(key)
  }

  clear(): void {
    this.current.clear()
    this.previous.clear()
  }
}

class WeakCache<K extends object, V> extends BaseCache<K, V> {
  private storage = new WeakMap<K, V>()

  has(key: K): boolean {
    return this.storage.has(key)
  }

  get(key: K): V | undefined {
    return this.storage.get(key)
  }

  set(key: K, value: V): void {
    this.storage.set(key, value)
  }

  delete(key: K): void {
    this.storage.delete(key)
  }

  clear(): void {
    this.storage = new WeakMap()
  }
}

class VersionedCache<K, Ver, V> extends BaseCache<K, V> implements Cache<K, V> {
  private readonly storage: LRU<K, { version: Ver; value: V }>

  constructor(
    size: number,
    private readonly getVersion: (key: K) => Ver,
    private readonly compareVersion: (a: Ver, b: Ver) => boolean,
  ) {
    super()
    this.storage = new LRU(size)
  }

  private isValid(key: K, value: { version: Ver; value: V }): boolean {
    return this.compareVersion(value.version, this.getVersion(key))
  }

  has(key: K): boolean {
    return this.storage.has(key) && this.isValid(key, this.storage.get(key)!)
  }

  get(key: K): V | undefined {
    if (this.has(key)) return this.storage.get(key)!.value
    else return undefined
  }

  set(key: K, value: V): void {
    this.storage.set(key, { version: this.getVersion(key), value })
  }

  delete(key: K): void {
    this.storage.delete(key)
  }

  clear(): void {
    this.storage.clear()
  }
}

const DEFAULT_CACHE_SIZE = 100

export function createCache<K, V>(
  size: number = DEFAULT_CACHE_SIZE,
): Cache<K, V> {
  return new LRU(size)
}

export function createWeakMapCache<K extends object, V>(): Cache<K, V> {
  return new WeakCache()
}

export function createMultiKeyCache<K, V, R = unknown>(
  getSecondaryKey: (key: K) => R,
  size: number = DEFAULT_CACHE_SIZE,
  compare: (a: R, b: R) => boolean = (a, b) => a === b,
): Cache<K, V> {
  return new VersionedCache(size, (key) => getSecondaryKey(key), compare)
}

export function createVersionedCache<
  K,
  V,
  Version extends string | number = string | number,
>(
  getVersion: (key: K) => Version,
  size: number = DEFAULT_CACHE_SIZE,
): Cache<K, V> {
  return createMultiKeyCache(getVersion, size)
}

export function versionedAsync<T extends unknown[], R = unknown>(
  getKey: (args: T) => R = (args) =>
    args[0] as T extends [k: infer K] ? K & R : never,
  size: number = DEFAULT_CACHE_SIZE,
  versionFn: unknown & string = 'getVersion',
): MethodDecorator {
  return versioned(getKey, size, versionFn, true)
}

const store = new Map<
  any,
  Map<string | symbol | number, WeakMap<any, Cache<any, any>>>
>()

function addToStore(
  target: any,
  property: string | symbol | number,
  cache: WeakMap<any, any>,
): void {
  const current = store.get(target) ?? new Map()

  current.set(property, cache)

  if (!store.has(target)) store.set(target, current)
}

function getOrCreate<K, V>(
  map: Map<K, V> | WeakMap<K & object, V>,
  create: (key: K) => V,
): (key: K) => V {
  return (key: any) => {
    const value = map.get(key) ?? create(key)

    if (!map.has(key)) map.set(key, value)

    return value
  }
}

export function versioned<T extends unknown[], R = unknown>(
  getKey: (args: T) => R = (args) =>
    args[0] as T extends [k: infer K] ? K & R : never,
  size: number = DEFAULT_CACHE_SIZE,
  versionFn: unknown & string = 'getVersion',
  isAsync: boolean = false,
): MethodDecorator {
  const method = isAsync ? 'resolveAsync' : 'resolve'
  return (target, propertyKey, descriptor) => {
    const fn = descriptor?.value as unknown as (...args: T) => any
    if (typeof fn === 'function') {
      const caches = new WeakMap<typeof target, Cache<R, any>>()
      const using = getOrCreate(caches, (instance) => {
        const getVersion = instance[versionFn as keyof typeof target] as (
          key: R,
        ) => string | number
        if (typeof getVersion !== 'function')
          throw new Error(`${JSON.stringify(versionFn)} is not a function`)

        return createVersionedCache(
          (key) => getVersion.call(instance, key),
          size,
        )
      })
      addToStore(target, propertyKey, caches)

      descriptor.value = function (this: any, ...args: T): any {
        return using(this)[method](getKey(args), () => fn.apply(this, args))
      } as any
    } else {
      throw new Error(`${JSON.stringify(propertyKey)} is not a function`)
    }
    return descriptor
  }
}

export function cache<T extends unknown[], I = unknown, R = unknown>(
  getKey: (args: T, instance: I) => R = (args) => args[0] as R,
  isAsync: boolean = false,
  isWeak: boolean = false,
): MethodDecorator {
  const method = isAsync ? 'resolveAsync' : 'resolve'
  return (target, propertyKey, descriptor) => {
    const fn = descriptor?.value as unknown as (...args: T) => any
    if (typeof fn === 'function') {
      const caches = new WeakMap<typeof target, Cache<R, any>>()
      addToStore(target, propertyKey, caches)

      const using = getOrCreate(caches, () => {
        return isWeak ? createWeakMapCache() : createCache(DEFAULT_CACHE_SIZE)
      })

      descriptor.value = function (this: any, ...args: T): any {
        return using(this)[method](getKey(args, this) as any, () =>
          fn.apply(this, args),
        )
      } as any
    } else {
      throw new Error(`${JSON.stringify(propertyKey)} is not a function`)
    }
    return descriptor
  }
}

export function cacheAsync<T extends unknown[], R = unknown>(
  getKey: (args: T) => R = (args) => args[0] as R,
): MethodDecorator {
  return cache(getKey, true)
}

export function cacheAll<T extends unknown[], R = unknown>(
  getKey: (args: T) => R = (args) => args[0] as R,
): MethodDecorator {
  return cache(getKey, false, true)
}

export function cacheAllAsync<T extends unknown[], R = unknown>(
  getKey: (args: T) => R = (args) => args[0] as R,
): MethodDecorator {
  return cache(getKey, true, true)
}

export function clearMethodCache(
  instance: object,
  propertyKey: string | symbol | number,
): void {
  const target = Object.getPrototypeOf(instance)

  store.get(target)?.get(propertyKey)?.get(instance)?.clear()
}
