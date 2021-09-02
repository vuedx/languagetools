import type { ImportSource } from './ImportSource'
import type { ProjectPreferences } from './ProjectPreferences'

export interface ProjectConfig {
  globalComponents?: Array<string | Record<string, string | ImportSource>>
  globalDirectives?: Array<string | Record<string, string | ImportSource>>
  preferences?: Partial<ProjectPreferences>
}

export interface ResolvedProjectConfig {
  globalComponents: Record<string, ImportSource[]>
  globalDirectives: Record<string, ImportSource[]>
  preferences: ProjectPreferences
}

export const DEFAULT_PROJECT_CONFIG: ResolvedProjectConfig = {
  globalComponents: {},
  globalDirectives: {},
  preferences: {
    componentsDirectories: ['src/components'],
    script: { mode: 'normal', language: 'js' },
    style: { language: 'css' },
    template: {
      directiveSyntax: 'shorthand',
      propCase: 'camel',
      tagCase: 'auto',
    },
  },
}
