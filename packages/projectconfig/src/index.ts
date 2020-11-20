export interface ImportSource {
  moduleName: string
  exportName?: string
}

export interface ProjectConfig {
  globalComponents?: Array<string | Record<string, string | ImportSource>>
}
