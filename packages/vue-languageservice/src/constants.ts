import { name } from '../package.json'

export const NAMESPACE = `package:${name}` as const

export const INJECTABLE_TS_SERVICE = `${NAMESPACE}/TypescriptLanguageService` as const
