export class BidirectionalMap<K, V> {
  private readonly byKey = new Map<K, V>()
  private readonly byValue = new Map<V, K>()

  public getValue(key: K): V | undefined {
    return this.byKey.get(key)
  }

  public getKey(value: V): K | undefined {
    return this.byValue.get(value)
  }

  public hasKey(key: K): boolean {
    return this.byKey.has(key)
  }

  public hasValue(value: V): boolean {
    return this.byValue.has(value)
  }

  public deleteKey(key: K): boolean {
    const value = this.byKey.get(key) as V
    return this.delete(key, value)
  }

  public deleteValue(value: V): boolean {
    const key = this.byValue.get(value) as K
    return this.delete(key, value)
  }

  private delete(key: K, value: V): boolean {
    return this.byKey.delete(key) && this.byValue.delete(value)
  }

  public set(key: K, value: V): this {
    this.byKey.set(key, value)
    this.byValue.set(value, key)
    return this
  }

  public clear(): void {
    this.byKey.clear()
    this.byValue.clear()
  }

  public get size(): number {
    return this.byKey.size
  }

  public forEach(
    fn: (value: V, key: K, map: BidirectionalMap<K, V>) => void,
  ): void {
    this.byKey.forEach((value, key) => fn(value, key, this))
  }
}
