import { wrapInTrace } from '../helpers/logger'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'

export function createScriptSetupLanguageServer(
  config: LanguageServiceOptions,
): TS.LanguageService {
  const { helpers: h, service, context } = config

  return wrapInTrace('ScriptSetupLanguageServer', {
    ...noop,
  })
}
