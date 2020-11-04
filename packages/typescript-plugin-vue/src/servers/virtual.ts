import { wrapInTrace } from '../helpers/logger'
import { TS } from '../interfaces'
import { LanguageServiceOptions } from '../types'
import { noop } from './noop'

export function createVirtualLanguageServer(
  config: LanguageServiceOptions,
): TS.LanguageService {
  function removePrefix(fileName: string): string {
    return fileName.startsWith('^vue:') ? fileName.substr(5) : fileName
  }

  function choose(fileName: string): TS.LanguageService {
    return (
      config.context.projectService
        .getDefaultProjectForFile(
          config.context.typescript.server.toNormalizedPath(fileName),
          false,
        )
        ?.getLanguageService() ?? config.service
    )
  }

  return wrapInTrace('VirtualLanguageServer', {
    ...noop,
    getQuickInfoAtPosition(rawFileName, position) {
      const fileName = removePrefix(rawFileName)

      return choose(fileName).getQuickInfoAtPosition(fileName, position)
    },
  })
}
