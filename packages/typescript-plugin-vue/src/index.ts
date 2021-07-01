/* eslint-disable import/first */
console.log = console.info = console.debug = console.error

import { Telemetry } from '@vuedx/shared'
import {
  createTypescriptLanguageService,
  ExtendedTSLanguageService,
} from '@vuedx/vue-languageservice'
import { version } from '../package.json'
import { wrapFn } from './helpers/logger'
import { tryPatchMethod } from './helpers/patcher'
import type { Modules, PluginConfig, TS } from './interfaces'
import * as Path from 'path'

export type { PluginConfig } from './interfaces'
export type PluginCreateInfo = Omit<TS.server.PluginCreateInfo, 'config'> & {
  config: PluginConfig
}

const services = new WeakMap<TS.server.Project, ExtendedTSLanguageService>()
export default function init({ typescript }: Modules): TS.server.PluginModule {
  Telemetry.setup(
    'https://a1461052e1d94c7a9ee7c3f7add71b24@o237831.ingest.sentry.io/5595721',
    'typescript-plugin-vue',
    version,
    0.001, // 1 in thousand
    { typescriptVersion: typescript.versionMajorMinor },
  )

  return {
    create(info: PluginCreateInfo) {
      patchExtraFileExtensions(info.project.projectService)

      const service = createTypescriptLanguageService({
        ...info,
        typescript,
        getRuntimeHelperFileName() {
          return Path.resolve(__dirname, '../runtime/vue3.0.d.ts')
        },
      })

      services.set(info.project, service)

      return service
    },
    getExternalFiles(project) {
      return services.get(project)?.getExternalFiles() ?? []
    },
    onConfigurationChanged(_config: PluginConfig) {},
  }
}

function patchExtraFileExtensions(
  projectService: TS.server.ProjectService,
): void {
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    {
      extension: 'vue',
      isMixedContent: false,
      scriptKind: 5 as TS.ScriptKind.External,
    },
  ]

  tryPatchMethod(
    projectService,
    'setHostConfiguration',
    (setHostConfiguration) => {
      return wrapFn(
        'setHostConfiguration',
        (args: TS.server.protocol.ConfigureRequestArguments): void => {
          const current = ((projectService as any)
            .hostConfiguration as TS.server.HostConfiguration)
            .extraFileExtensions

          if (args.extraFileExtensions != null) {
            args.extraFileExtensions.push(...extraFileExtensions)
          } else if (
            current == null ||
            !current.some((ext) => ext.extension === 'vue')
          ) {
            args.extraFileExtensions = [...extraFileExtensions]
          }

          return setHostConfiguration(args)
        },
      )
    },
  )

  if (
    ((projectService as any)
      .hostConfiguration as TS.server.HostConfiguration).extraFileExtensions?.some(
      (ext) => ext.extension === 'vue',
    ) === true
  ) {
    return
  }

  // Enable .vue after enhancing the language server.
  projectService.setHostConfiguration({ extraFileExtensions: [] })
}
