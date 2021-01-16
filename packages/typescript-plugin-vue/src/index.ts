import { collect, Telemetry } from '@vuedx/shared'
import { version } from '../package.json'
import { PluginContext } from './context'
import { traceFn } from './helpers/logger'
import { Modules, PluginConfig, TS } from './interfaces'
import { RoutingLanguageServer } from './servers/routing'

let context: PluginContext
let server: RoutingLanguageServer

export type { Modules, PluginConfig } from './interfaces'
export type PluginModule = TS.server.PluginModule

export default function init({ typescript }: Modules): TS.server.PluginModule {
  context = context ?? new PluginContext(typescript)
  server = server ?? new RoutingLanguageServer(context)

  Telemetry.setup('e3ca0c16c380c4a1403162d14466c756', {
    library: 'typescript-plugin-vue',
    version_name: version,
    event_properties: {
      typescript: typescript.versionMajorMinor,
      typescript_version: typescript.version,
    },
  })

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
