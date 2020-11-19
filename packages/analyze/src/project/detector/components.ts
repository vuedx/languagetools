import { ComponentRegistrationInfo } from '../../component'
import { getComponentName, getComponentNameAliases } from '../../utilities'
import { PackageJSON } from './PackageJSON'

export function getComponentFromFile(
  fileName: string,
): ComponentRegistrationInfo[] {
  if (fileName.endsWith('.vue')) {
    const name = getComponentName(fileName)
    return [
      {
        name,
        aliases: getComponentNameAliases(fileName),
        source: {
          moduleName: fileName,
          localName: name,
        },
      },
    ]
  }

  return []
}

export function getComponentsFromPackage(
  pkg: PackageJSON,
): ComponentRegistrationInfo[] {
  const components: ComponentRegistrationInfo[] = []

  components.push(
    ...getVueComponents(
      pkg.dependencies.vue ?? pkg.devDependencies.vue ?? '3.0',
    ),
  )

  if ('vue-router' in pkg.dependencies || 'vue-router' in pkg.devDependencies) {
    components.push(...getVueRouterComponents())
  }

  return components
}

export function getVueComponents(version: string): ComponentRegistrationInfo[] {
  const components: ComponentRegistrationInfo[] = []

  components.push(
    {
      name: 'KeepAlive',
      aliases: ['keep-alive', 'KeepAlive'],
      source: {
        moduleName: 'vue',
        localName: 'KeepAlive',
        exportName: 'KeepAlive',
      },
    },
    {
      name: 'Transition',
      aliases: ['transition', 'Transition'],
      source: {
        moduleName: 'vue',
        localName: 'Transition',
        exportName: 'Transition',
      },
    },
    {
      name: 'TransitionGroup',
      aliases: ['transition-group', 'TransitionGroup'],
      source: {
        moduleName: 'vue',
        localName: 'TransitionGroup',
        exportName: 'TransitionGroup',
      },
    },
  )

  // TODO: Check version
  components.push(
    {
      name: 'Suspense',
      aliases: ['suspense', 'Suspense'],
      source: {
        moduleName: 'vue',
        localName: 'Suspense',
        exportName: 'Suspense',
      },
    },
    {
      name: 'Teleport',
      aliases: ['teleport', 'Teleport'],
      source: {
        moduleName: 'vue',
        localName: 'Teleport',
        exportName: 'Teleport',
      },
    },
  )

  return components
}

export function getVueRouterComponents(): ComponentRegistrationInfo[] {
  const components: ComponentRegistrationInfo[] = []

  components.push(
    {
      name: 'RouterLink',
      aliases: ['router-link', 'RouterLink'],
      source: {
        moduleName: 'vue',
        localName: 'RouterLink',
        exportName: 'RouterLink',
      },
    },
    {
      name: 'RouterView',
      aliases: ['router-view', 'RouterView'],
      source: {
        moduleName: 'vue',
        localName: 'RouterView',
        exportName: 'RouterView',
      },
    },
  )

  return components
}
