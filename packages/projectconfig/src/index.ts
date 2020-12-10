export interface ImportSource {
  moduleName: string
  exportName?: string
}

export interface ProjectPreferences {
  componentsDirectories: string[]
  script: {
    mode: 'setup' | 'setup-ref' | 'normal'
    language: 'js' | 'ts'
  }
  style: {
    language: 'css' | 'scss' | 'sass' | 'styl' | 'stylus' | 'less'
  }
  template: {
    directiveSyntax: 'shorthand' | 'longhand'
  }
}

export interface ProjectConfigNormalized {
  globalComponents: Array<string | Record<string, string | ImportSource>>
  preferences: ProjectPreferences
}

export interface ProjectConfig {
  globalComponents?: Array<string | Record<string, string | ImportSource>>
  preferences?: Partial<ProjectPreferences>
}
