import { DocumentStore } from './DocumentStore';

export class AsyncDocumentStore<T> extends DocumentStore<T> {
  constructor(resolve: (uri: string) => T | Promise<T | null> | null, normalize = (uri: string) => uri) {
    super(resolve as any, normalize);
  }
  get(uri: string): T | null;
  get(uri: string): Promise<T | null>;
  get(uri: string): any {
    return this.map.get(this.getNormalizedUri(uri)) || this.load(uri);
  }
  private async load(uri: string) {
    const document = await this.resolve(uri);
    if (document) {
      this.map.set(this.getNormalizedUri(uri), document);
    }
    return document;
  }
}
