export interface ImportSource {
  moduleName: string
  /** Use '*' for namespace imports. */
  exportName?: string
}
