/* eslint-disable import/first */
console.log =
  console.info =
  console.warn =
  console.debug =
  console.error =
  console.trace =
    () => {}

import 'reflect-metadata'

import { Telemetry } from '@vuedx/shared'
import type { Modules, PluginCreateInfo, TS } from './interfaces'
import type { PluginConfig } from './managers/ConfigManager'
import { pluginManager } from './managers/PluginManager'
import { PluginSideChannel } from './services/PluginSideChannel'

export { PluginSideChannel }
export type { PluginConfig }

pluginManager.fixConsole(console)

export default function init({ typescript }: Modules): TS.server.PluginModule {
  Telemetry.setup(
    'https://a1461052e1d94c7a9ee7c3f7add71b24@o237831.ingest.sentry.io/5595721',
    'typescript-plugin-vue',
    VERSION,
    0.001,
    { typescriptVersion: typescript.versionMajorMinor },
  )

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { resolve } = require('node:path') as {
    resolve: typeof import('node:path').resolve
  }

  return {
    create(info: PluginCreateInfo) {
      return pluginManager.create({
        ...info,
        typescript,
        typesDir: resolve(__dirname, '..', 'runtime'),
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
