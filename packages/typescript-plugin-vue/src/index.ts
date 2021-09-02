/* eslint-disable import/first */
console.log = console.info = console.debug = console.error

import { collect, Telemetry } from '@vuedx/shared'
import {
  createTypescriptLanguageService,
  ExtendedTSLanguageService,
} from '@vuedx/vue-languageservice'
import * as Path from 'path'
import { performance } from 'perf_hooks'
import { overrideMethod } from './overrideMethod'
import { version } from '../package.json'

import type { Modules, PluginConfig, TS } from './interfaces'

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

  overrideMethod(
    typescript as any,
    'getSupportedExtensions',
    (fn) => (options: any, extraFileExtensions: any) => {
      const extensions = fn(options, extraFileExtensions) as string[]
      const index = extensions.indexOf('.vue')

      if (index >= 0) {
        // File extensions are sorted in order of their priorities.
        // We need to put .vue before .ts
        extensions.splice(index, 1)
        extensions.unshift('.vue')
      }

      return extensions
    },
  )

  return {
    create(info: PluginCreateInfo) {
      const id = Date.now()
      const start = performance.now()
      const currentService = info.languageService as ExtendedTSLanguageService
      if (currentService._isVueTS) return info.languageService
      info.project.projectService.logger.info(
        `[VueDX] (plugin) ${id} Plugin start`,
      )
      patchExtraFileExtensions(info.project)
      const prevService = services.get(info.project)
      if (prevService != null) return prevService

      const service = createTypescriptLanguageService({
        ...info,
        typescript,
        typesDir: Path.resolve(__dirname, '..', 'runtime'),
      })

      services.set(info.project, service)

      const end = performance.now()

      collect('plugin_create', {
        startupTime: end - start,
      })

      info.project.projectService.logger.info(
        `[VueDX] (plugin) ${id} Plugin started in ${end - start}ms`,
      )

      return service
    },
    getExternalFiles(project) {
      return services.get(project)?.getExternalFiles(project) ?? []
    },
    onConfigurationChanged(_config: PluginConfig) {},
  }
}

function patchExtraFileExtensions(project: TS.server.Project): boolean {
  const projectService = project.projectService
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    {
      extension: '.vue',
      isMixedContent: false,
      scriptKind: 7 as TS.ScriptKind.Deferred, // deferred extra extensions are included in root files search.
    },
  ]

  overrideMethod(
    projectService,
    'setHostConfiguration',
    (setHostConfiguration) => {
      return (args: TS.server.protocol.ConfigureRequestArguments): void => {
        projectService.logger.info(
          '[VueDX] setHostConfiguration: ' + JSON.stringify(args),
        )
        const current = ((projectService as any)
          .hostConfiguration as TS.server.HostConfiguration).extraFileExtensions

        projectService.logger.info(
          'Current Extra Extensions: ' + JSON.stringify(current),
        )
        if (args.extraFileExtensions != null) {
          args.extraFileExtensions.push(...extraFileExtensions)
        } else if (current == null) {
          // noop
        } else if (current.every((ext) => ext.extension !== '.vue')) {
          args.extraFileExtensions = [...current, ...extraFileExtensions]
        }

        projectService.logger.info(
          'New Extra Extensions: ' + JSON.stringify(args.extraFileExtensions),
        )

        return setHostConfiguration(args)
      }
    },
  )

  const current = ((projectService as any)
    .hostConfiguration as TS.server.HostConfiguration).extraFileExtensions
  if (
    Array.isArray(current) &&
    current.some((ext) => ext.extension === '.vue')
  ) {
    // .vue exists
  } else if (Array.isArray(current)) {
    // Enable .vue after enhancing the language server.
    projectService.logger.info('Add extra extensions now.')
    projectService.setHostConfiguration({})
    return true
  }

  return false
}
