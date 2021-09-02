import QuickLRU from 'quick-lru'

interface Item<T> {
  version: string
  value: T
}

export class CacheService<T> {
  private readonly cache = new QuickLRU<string, Item<T>>({
    maxSize: this.maxSize,
  })

  constructor(
    private readonly getVersion: (fileName: string) => string,
    private readonly maxSize: number = 1000,
  ) {}

  public getItem(fileName: string): T | null {
    const item = this.cache.get(fileName)
    if (item == null) return null
    if (item.version === this.getVersion(fileName)) return item.value
    this.cache.delete(fileName)
    return null
  }

  public setItem(fileName: string, value: T): void {
    const version = this.getVersion(fileName)
    this.cache.set(fileName, { version, value })
  }

  public withCache(fileName: string, fn: (item: T | null) => T): T {
    const prevItem = this.getItem(fileName)
    const nextItem = fn(prevItem)
    if (prevItem !== nextItem) this.setItem(fileName, nextItem)
    return nextItem
  }
}
