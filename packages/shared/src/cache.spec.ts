import {
  createCache,
  createWeakMapCache,
  createMultiKeyCache,
  createVersionedCache,
  versioned,
  versionedAsync,
  cache,
  cacheAll,
  cacheAsync,
  cacheAllAsync,
  clearMethodCache,
} from './cache'

const sources = [
  ['createCache', () => createCache<[string], number>(2)],
  ['createCache()', () => createCache<[string], number>()],
  ['createWeakMapCache', () => createWeakMapCache<[string], number>()],
  [
    'createVersionedCache',
    () => createVersionedCache<[string], number>(() => 0),
  ],
  [
    'createMultiKeyCache',
    () => createMultiKeyCache<[string], number>((): number => 0),
  ],
] as const

describe.each(sources)('%s', (_, create) => {
  const a = ['a'] as [string]
  const b = ['b'] as [string]
  const c = ['c'] as [string]
  const d = ['d'] as [string]
  const e = ['e'] as [string]

  test(`cache resolve`, () => {
    const cache = create()
    let i = 0
    const fn = () => ++i

    expect(cache.resolve(a, fn)).toBe(1)
    expect(cache.resolve(a, fn)).toBe(1)

    expect(cache.resolve(b, fn)).toBe(2)
    expect(cache.resolve(a, fn)).toBe(1)

    expect(cache.resolve(c, fn)).toBe(3)
    expect(cache.resolve(d, fn)).toBe(4)
    expect(cache.resolve(e, fn)).toBe(5)

    expect(cache.resolve(b, fn)).toBe(2)
  })

  test(`cache resolveAsync`, async () => {
    const cache = create()
    let i = 0
    const fn = async () =>
      await new Promise<number>((resolve) => setTimeout(resolve, 100, ++i))

    const a1 = cache.resolveAsync(a, fn)
    const b1 = cache.resolveAsync(b, fn)
    const a2 = cache.resolveAsync(a, fn)

    expect(await a1).toBe(await a2)
    expect(await b1).toBe(2)
    expect(await a2).toBe(1)
    expect(await cache.resolveAsync(a, fn)).toBe(1)
  })

  test(`api`, () => {
    const cache = create()

    expect(cache.has(a)).toBe(false)
    expect(cache.get(a)).toBe(undefined)

    cache.set(a, 1)
    expect(cache.has(a)).toBe(true)
    expect(cache.get(a)).toBe(1)

    cache.delete(a)
    expect(cache.has(a)).toBe(false)
    expect(cache.get(a)).toBe(undefined)

    cache.set(a, 1)
    expect(cache.has(a)).toBe(true)
    expect(cache.get(a)).toBe(1)

    cache.clear()
    expect(cache.has(a)).toBe(false)
    expect(cache.get(a)).toBe(undefined)
  })
})

describe('createVersionedCache', () => {
  test('evict on version change', () => {
    const versions: Record<string, number> = {}
    const cache = createVersionedCache((key: string) => versions[key] ?? 0)
    let i = 0
    const fn = () => ++i

    expect(cache.resolve('a', fn)).toBe(1)
    expect(cache.has('a')).toBe(true)
    expect(cache.resolve('a', fn)).toBe(1)

    versions['a'] = 1
    expect(cache.has('a')).toBe(false)
    expect(cache.resolve('a', fn)).toBe(2)
  })

  test(`clear decorator cache`, () => {
    let i = 0
    let j = 0
    class TestService {
      getVersion() {
        return j
      }

      @versioned()
      getVersionedItem(_foo: string) {
        return ++i
      }
    }

    const service = new TestService()

    expect(service.getVersionedItem('a')).toBe(1)
    expect(service.getVersionedItem('a')).toBe(1)
    ++j
    expect(service.getVersionedItem('a')).toBe(2)
    expect(service.getVersionedItem('a')).toBe(2)
    clearMethodCache(service, 'getVersionedItem')
    expect(service.getVersionedItem('a')).toBe(3)
    expect(service.getVersionedItem('a')).toBe(3)
  })

  test(`check @versioned requirements`, () => {
    expect(() => {
      class TestService {
        // @ts-expect-error
        @versioned()
        val: any = {}
      }

      return new TestService()
    }).toThrowError(/"val" is not a function/)

    expect(() => {
      class TestService {
        @versioned()
        doTask(_fileName: string): any {}
      }

      new TestService().doTask('')
    }).toThrowError(/"getVersion" is not a function/)
  })

  test(`@versioned uses key & version`, async () => {
    let i = 0
    const versions: Record<string, number> = {}
    const fn = () => ++i
    class TestService {
      getVersion(key: string): number {
        return versions[key] ?? 0
      }

      @versioned()
      doTask(_fileName: string): any {
        return fn()
      }
    }

    const service = new TestService()

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    versions['a'] = 2
    expect(service.doTask('a')).toBe(3)
    expect(service.doTask('b')).toBe(2)
  })

  test(`@versioned with custom`, async () => {
    let i = 0
    const versions: Record<string, number> = {}
    const fn = () => ++i
    class TestService {
      myVersion(key: string): number {
        return versions[key] ?? 0
      }

      @versioned((args: [string]) => `key:${args[0]}`, 2, 'myVersion')
      doTask(_fileName: string): any {
        return fn()
      }
    }

    const service = new TestService()

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    versions['key:a'] = 2
    expect(service.doTask('a')).toBe(3)
    expect(service.doTask('b')).toBe(2)
  })

  test(`@versionedAsync uses key & version`, async () => {
    let i = 0
    const versions: Record<string, number> = {}
    const fn = () => ++i
    class TestService {
      getVersion(key: string): number {
        return versions[key] ?? 0
      }

      @versionedAsync()
      async doTaskAsync(_fileName: string): Promise<any> {
        return await Promise.resolve().then(fn)
      }
    }

    const service = new TestService()

    expect(await service.doTaskAsync('a')).toBe(1)
    expect(await service.doTaskAsync('b')).toBe(2)

    expect(await service.doTaskAsync('a')).toBe(1)
    expect(await service.doTaskAsync('b')).toBe(2)

    versions['a'] = 2
    expect(await service.doTaskAsync('a')).toBe(3)
    expect(await service.doTaskAsync('b')).toBe(2)
  })
})

describe('createCache', () => {
  test(`clear decorator cache`, () => {
    let i = 0
    class TestService {
      @cache()
      getItem(_foo: string) {
        return ++i
      }

      @cache()
      other(_foo: string) {
        return ++i
      }
    }

    const service = new TestService()

    expect(service.getItem('a')).toBe(1)
    expect(service.getItem('a')).toBe(1)
    clearMethodCache(service, 'getItem')
    expect(service.getItem('a')).toBe(2)
    expect(service.other('a')).toBe(3)

    expect(() => {
      clearMethodCache({}, 'getItem')
      clearMethodCache(service, 'getItem2')
      clearMethodCache(new TestService(), 'getItem')
    }).not.toThrow()
  })

  test(`check @cache requirements`, () => {
    expect(() => {
      class TestService {
        // @ts-expect-error
        @cache()
        val: any = {}
      }

      return TestService
    }).toThrowError(/"val" is not a function/)
  })

  const a = ['a'] as [string]
  const b = ['b'] as [string]
  test(`@cache`, async () => {
    let i = 0
    const fn = () => ++i
    class TestService {
      @cache()
      doTask(_fileName: string): any {
        return fn()
      }
    }

    const service = new TestService()

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    expect(service.doTask('a')).toBe(1)
    expect(service.doTask('b')).toBe(2)

    clearMethodCache(service, 'doTask')

    expect(service.doTask('a')).toBe(3)
  })

  test(`@cacheAll`, async () => {
    let i = 0
    const fn = () => ++i
    class TestService {
      @cacheAll()
      doTask(_fileName: [string]): any {
        return fn()
      }
    }

    const service = new TestService()

    expect(service.doTask(a)).toBe(1)
    expect(service.doTask(b)).toBe(2)

    expect(service.doTask(a)).toBe(1)
    expect(service.doTask(b)).toBe(2)
  })

  test(`@cacheAsync`, async () => {
    let i = 0
    const fn = () => ++i
    class TestService {
      @cacheAsync()
      doTask(_fileName: string): any {
        return Promise.resolve().then(fn)
      }
    }

    const service = new TestService()

    expect(await service.doTask('a')).toBe(1)
    expect(await service.doTask('b')).toBe(2)

    expect(await service.doTask('a')).toBe(1)
    expect(await service.doTask('b')).toBe(2)
  })

  test(`@cacheAllAsync`, async () => {
    let i = 0
    const fn = () => ++i
    class TestService {
      @cacheAllAsync()
      doTask(_fileName: [string]): any {
        return Promise.resolve().then(fn)
      }
    }

    const service = new TestService()

    expect(await service.doTask(a)).toBe(1)
    expect(await service.doTask(b)).toBe(2)

    expect(await service.doTask(a)).toBe(1)
    expect(await service.doTask(b)).toBe(2)
  })
})
