import { name } from '../package.json'

export const NAMESPACE = `package:${name}` as const
export const TS_LANGUAGE_SERVICE = Symbol('Undecorated Language Service')
