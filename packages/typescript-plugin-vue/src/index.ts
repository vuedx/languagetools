/* eslint-disable import/first */
console.log = console.info = console.debug = console.error

import { collect, Telemetry } from '@vuedx/shared'
import { version } from '../package.json'
import { PluginContext } from './context'
import { traceFn } from './helpers/logger'
import type { Modules, PluginConfig, TS } from './interfaces'
import { RoutingLanguageServer } from './servers/routing'

let context: PluginContext
let server: RoutingLanguageServer

export type { Modules, PluginConfig } from './interfaces'
export type PluginModule = TS.server.PluginModule

export default function init({ typescript }: Modules): TS.server.PluginModule {
  context = context ?? new PluginContext(typescript)
  server = server ?? new RoutingLanguageServer(context)

  Telemetry.setup(
    'https://a1461052e1d94c7a9ee7c3f7add71b24@o237831.ingest.sentry.io/5595721',
    'typescript-plugin-vue',
    version,
    0.001, // 1 in thousand
    { typescriptVersion: typescript.versionMajorMinor },
  )

  return {
    create(
      info: Omit<TS.server.PluginCreateInfo, 'config'> & {
        config: PluginConfig
      },
    ) {
      if (info.config.telemetry === false) Telemetry.optOut()

      collect('typescript project', {
        kind: info.project.projectKind,
        language: info.project.projectName.endsWith('jsconfig.json')
          ? 'js'
          : 'ts',
        config: info.config,
      })

      if (__DEV__) context.debug`Plugin Config: ${info.config}`

      return traceFn('Plugin.create', () => {
        context.load(info)
        return server.decorate(info.languageService)
      })()
    },
    getExternalFiles(project) {
      return context.getExternalFiles(project) ?? []
    },
    onConfigurationChanged(config: PluginConfig) {
      if (config.telemetry === false) Telemetry.optOut()
      traceFn('Plugin.onConfigurationChanged', () => {
        if (__DEV__) context.debug`Plugin Config (changed): ${config}`
        context.setConfig(config)
      })()
    },
  }
}
