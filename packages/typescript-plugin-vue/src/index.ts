/* eslint-disable import/first */
console.log =
  console.info =
  console.warn =
  console.debug =
  console.error =
  console.trace =
    () => {}

export type {
  PluginConfig,
  PluginSideChannel
} from '@vuedx/vue-languageservice'

import { Telemetry } from '@vuedx/shared'
import { pluginManager } from '@vuedx/vue-languageservice'
import * as Path from 'path'
import type { Modules, PluginCreateInfo, TS } from './interfaces'

pluginManager.fixConsole(console)

export default function init({ typescript }: Modules): TS.server.PluginModule {
  Telemetry.setup(
    'https://a1461052e1d94c7a9ee7c3f7add71b24@o237831.ingest.sentry.io/5595721',
    'typescript-plugin-vue',
    VERSION,
    0.001,
    { typescriptVersion: typescript.versionMajorMinor },
  )

  return {
    create(info: PluginCreateInfo) {
      return pluginManager.create({
        ...info,
        typescript,
        typesDir: Path.resolve(__dirname, '..', 'runtime'),
      })
    },
    getExternalFiles(project) {
      return pluginManager.getExternalFiles(project)
    },
    onConfigurationChanged(config) {
      pluginManager.onConfigurationChanged(config)
    },
  }
}
