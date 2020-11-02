export class DocumentStore<T> {
  protected map = new Map<string, T>()
  protected reverseUriMap = new Map<string, string>()

  constructor(
    protected resolve: (uri: string) => T | null,
    public normalize = (uri: string) => uri,
  ) {}

  protected getNormalizedUri(uri: string): string {
    return this.reverseUriMap.get(this.normalize(uri)) ?? uri
  }

  has(uri: string): boolean {
    return this.map.has(this.getNormalizedUri(uri))
  }

  get(uri: string): T | null {
    return this.map.get(this.getNormalizedUri(uri)) ?? this.loadSync(uri)
  }

  set(uri: string, document: T): void {
    this.map.set(uri, document)
    this.reverseUriMap.set(uri.toLowerCase(), uri)
  }

  delete(uri: string): boolean {
    return this.map.delete(this.getNormalizedUri(uri))
  }

  all(): string[] {
    return Array.from(this.map.keys())
  }

  dispose(): void {
    this.map.clear()
  }

  private loadSync(uri: string): T | null {
    const document = this.resolve(uri)
    if (document != null) {
      this.set(uri, document)
    }
    return document
  }
}

export class AsyncDocumentStore<T> extends DocumentStore<T> {
  constructor(
    resolve: (uri: string) => T | Promise<T | null> | null,
    normalize = (uri: string) => uri,
  ) {
    super(resolve as any, normalize)
  }

  get(uri: string): T | null
  get(uri: string): Promise<T | null>
  get(uri: string): any {
    return this.map.get(this.getNormalizedUri(uri)) ?? this.load(uri)
  }

  private async load(uri: string): Promise<T | null> {
    const document = await this.resolve(uri)
    if (document != null) {
      this.map.set(this.getNormalizedUri(uri), document)
    }
    return document
  }
}
