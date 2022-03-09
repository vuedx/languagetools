import { collect, Telemetry } from '@vuedx/shared'
import {
  createTypescriptLanguageService,
  ExtendedTSLanguageService,
  PluginConfig,
  TSLanguageServiceProvider,
} from '@vuedx/vue-languageservice'
import * as Path from 'path'
import { performance } from 'perf_hooks'
import { version } from '../package.json'
import type { Modules, PluginCreateInfo, TS } from './interfaces'
import { overrideMethod } from './overrideMethod'

const byProject = new Map<TS.server.Project, TSLanguageServiceProvider>()

let logger: TS.server.Logger

function isLanguageService(service: any): service is ExtendedTSLanguageService {
  return '_isVueTS' in service && service['_isVueTS'] === true
}

export function init({ typescript }: Modules): TS.server.PluginModule {
  Telemetry.setup(
    'https://a1461052e1d94c7a9ee7c3f7add71b24@o237831.ingest.sentry.io/5595721',
    'typescript-plugin-vue',
    version,
    0.001,
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
      let id: string
      const start = performance.now()

      if (logger == null) {
        console.info = console.debug = console.log = (...args: unknown[]) => {
          if (typeof args[0] === 'string') {
            info.project.projectService.logger.info(args[0])
          }
        }
      }

      logger = info.project.projectService.logger
      logger.info(
        `[VueDX] (plugin) Project: ${info.project.getProjectName()}. Other active projects: ${JSON.stringify(
          Array.from(byProject.keys()).map((project) =>
            project.getProjectName(),
          ),
          null,
          2,
        )}`,
      )

      if (isLanguageService(info.languageService)) {
        id = info.languageService._vueTS_id
        logger.info(
          `[VueDX] (plugin) ${id} LanguageService is already enhanced.`,
        )
        patchExtraFileExtensions(id, info.project)
        return info.languageService
      }

      const previousProvider = byProject.get(info.project)
      if (
        previousProvider != null &&
        isLanguageService(previousProvider?.service)
      ) {
        id = previousProvider.service._vueTS_id
        logger.info(`[VueDX] (plugin) ${id} Found LanguageService provider.`)
        patchExtraFileExtensions(id, info.project)
        return previousProvider.service
      }

      logger.info(`[VueDX] (plugin) Creating LanguageService provider.`)

      const onBeforeExit = (): void => {
        logger.info(`[VueDX] (plugin) ${id} Process is exiting.`)
      }
      process.on('beforeExit', onBeforeExit)
      const provider = createTypescriptLanguageService({
        ...info,
        typescript,
        typesDir: Path.resolve(__dirname, '..', 'runtime'),
        dispose() {
          logger.info(`[VueDX] (plugin) ${id} Disposing LanguageService.`)
          byProject.delete(info.project)
          process.off('beforeExit', onBeforeExit)
        },
      })

      id = provider.service._vueTS_id

      byProject.set(info.project, provider)

      const end = performance.now()

      collect('plugin_create', {
        startupTime: end - start,
      })

      logger.info(`[VueDX] (plugin) ${id} Plugin started in ${end - start}ms`)
      patchExtraFileExtensions(id, info.project)

      return provider.service
    },
    getExternalFiles(project) {
      const service = byProject.get(project)?.service

      if (service != null) {
        const files = service.getExternalFiles(project)
        logger.info(
          `[VueDX] (plugin) ${
            service._vueTS_id
          } External files ${JSON.stringify(files, null, 2)}`,
        )
        return files
      } else {
        logger.info(
          `[VueDX] (plugin) Cannot find LanguageService provider for ${project.getProjectName()}`,
        )
        return []
      }
    },
    onConfigurationChanged(config: PluginConfig) {
      logger.info(
        `[VueDX] (plugin) Update config for ${JSON.stringify(
          Array.from(byProject.keys()).map((project) =>
            project.getProjectName(),
          ),
          null,
          2,
        )}`,
      )
      byProject.forEach((provider) => {
        logger.info(
          `[VueDX] (plugin) ${
            provider.service._vueTS_id
          } Update config: ${JSON.stringify(config, null, 2)}`,
        )
        provider.setConfig(config)
      })
    },
  }
}
function patchExtraFileExtensions(
  id: string,
  project: TS.server.Project,
): boolean {
  const projectService = project.projectService
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    {
      extension: '.vue',
      isMixedContent: false,
      scriptKind: 7 as TS.ScriptKind.Deferred, // deferred extra extensions are included in root files search.
    },
  ]
  const prefix = `[VueDX] (plugin) ${id} `

  overrideMethod(
    projectService,
    'setHostConfiguration',
    (setHostConfiguration) => {
      return (args: TS.server.protocol.ConfigureRequestArguments): void => {
        logger.info(prefix + 'setHostConfiguration: ' + JSON.stringify(args))
        const current = ((projectService as any)
          .hostConfiguration as TS.server.HostConfiguration).extraFileExtensions

        logger.info(
          prefix + 'Current Extra Extensions: ' + JSON.stringify(current),
        )
        if (args.extraFileExtensions != null) {
          args.extraFileExtensions.push(...extraFileExtensions)
        } else if (current == null) {
          // noop
        } else if (current.every((ext) => ext.extension !== '.vue')) {
          args.extraFileExtensions = [...current, ...extraFileExtensions]
        }

        logger.info(
          prefix +
            'New Extra Extensions: ' +
            JSON.stringify(args.extraFileExtensions),
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
    logger.info(prefix + 'Add extra extensions now.')
    projectService.setHostConfiguration({})

    return true
  }

  return false
}
