import { Cache } from '@vuedx/shared'
import TypeScript from 'typescript/lib/tsserverlibrary'

export interface TransformScriptOptions {
  fileName: string
  internalIdentifierPrefix: string
  typeIdentifier: string
  runtimeModuleName: string
  lang: 'js' | 'ts' | 'tsx' | 'jsx'
  lib: typeof TypeScript
  cache?: Cache<string, unknown>
}
