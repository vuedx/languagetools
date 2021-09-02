export interface ProjectPreferences {
  componentsDirectories: string[]
  script: {
    mode: 'setup' | 'normal'
    language: 'js' | 'ts'
  }
  style: {
    language: 'css' | 'scss' | 'sass' | 'styl' | 'stylus' | 'less'
  }
  template: {
    directiveSyntax: 'shorthand' | 'longhand'
    propCase: 'kebab' | 'camel'
    tagCase: 'kebab' | 'pascal' | 'auto'
  }
}
