export class DocumentStore<T> {
  protected map = new Map<string, T>();
  protected reverseUriMap = new Map<string, string>();
  constructor(protected resolve: (uri: string) => T | null, public normalize = (uri: string) => uri) {}
  protected getNormalizedUri(uri: string) {
    return this.reverseUriMap.get(this.normalize(uri)) || uri;
  }
  has(uri: string): boolean {
    return this.map.has(this.getNormalizedUri(uri));
  }
  get(uri: string): T | null {
    return this.map.get(this.getNormalizedUri(uri)) || this.loadSync(uri);
  }
  set(uri: string, document: T): void {
    this.map.set(uri, document);
    this.reverseUriMap.set(uri.toLowerCase(), uri);
  }
  delete(uri: string) {
    return this.map.delete(this.getNormalizedUri(uri));
  }
  all(): string[] {
    return Array.from(this.map.keys());
  }
  dispose() {
    this.map.clear();
  }
  private loadSync(uri: string): T | null {
    const document = this.resolve(uri);
    if (document) {
      this.set(uri, document);
    }
    return document;
  }
}


