export interface Disposable {
  dispose(): void | Promise<void>
}
