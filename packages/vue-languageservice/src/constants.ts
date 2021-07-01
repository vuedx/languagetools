import { name } from '../package.json'

export const NAMESPACE = `package:${name}` as const
export const INJECTABLE_TS = `${NAMESPACE}/Typescript` as const
export const INJECTABLE_TS_PROJECT = `${NAMESPACE}/Typescript.server.Project` as const
export const INJECTABLE_TS_SERVICE = `${NAMESPACE}/Typescript.LanguageService` as const
export const INJECTABLE_TS_PROVIDER = `${NAMESPACE}/TypescriptProvider` as const
export const INJECTABLE_FS_PROVIDER = `${NAMESPACE}/FilesystemProvider` as const
