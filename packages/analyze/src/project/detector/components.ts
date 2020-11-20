import { ComponentRegistrationInfo } from '../../component'
import { getComponentName, getComponentNameAliases } from '../../utilities'
import { PackageJSON } from './PackageJSON'
import Path from 'path'

export function getComponentFromFile(
  fileName: string,
): ComponentRegistrationInfo[] {
  if (fileName.endsWith('.vue') || fileName.endsWith('.tsx')) {
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

export function getComponentsFromPackageJSON(
  rootDir: string,
  pkg: PackageJSON,
  require: NodeJS.Require,
): ComponentRegistrationInfo[] {
  const components: ComponentRegistrationInfo[] = []

  components.push(
    ...getComponentsFromVuePackage(
      getPackageJSON(require, rootDir, 'vue').version,
    ),
  )

  const packages = [
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(pkg.dependencies),
  ]

  packages.forEach((packageName) => {
    if (packageName === 'vue') {
      // Already handled.
    } else if (packageName === 'vue-router') {
      components.push(
        ...getComponentsFromVueRouterPackage(
          getPackageJSON(require, rootDir, 'vue-router').version,
        ),
      )
    } else {
      components.push(
        ...getComponentsFromPackage(require, rootDir, packageName),
      )
    }
  })

  return components
}

interface ExternalPackage {
  name: string
  version: string
  vetur?: {
    tags: string
  }
  'web-types'?: string
}

function getPackageJSON(
  require: NodeJS.Require,
  rootDir: string,
  packageName: string,
): ExternalPackage {
  try {
    return requireFileFromPackage(require, packageName, 'package.json', rootDir)
  } catch {
    return { name: packageName, version: 'latest' }
  }
}

function requireFileFromPackage(
  require: NodeJS.Require,
  packageName: string,
  fileName: string,
  rootDir: string,
): any {
  return require(require.resolve(Path.posix.resolve(packageName, fileName), {
    paths: [rootDir],
  }))
}

export function getComponentsFromVuePackage(
  version: string,
): ComponentRegistrationInfo[] {
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

  if (version.startsWith('3.') || version === 'latest') {
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
  }

  return components
}

export function getComponentsFromVueRouterPackage(
  version: string,
): ComponentRegistrationInfo[] {
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

export function getComponentsFromPackage(
  require: NodeJS.Require,
  rootDir: string,
  packageName: string,
): ComponentRegistrationInfo[] {
  const components: ComponentRegistrationInfo[] = []

  const pkg = getPackageJSON(require, rootDir, packageName)

  if (pkg['web-types'] != null) {
    try {
      const info = requireFileFromPackage(
        require,
        packageName,
        pkg['web-types'],
        rootDir,
      ) as PackageWebTypes

      info.contributions?.html?.tags?.forEach((tag) => {
        const componentName = getComponentName(tag.name)
        components.push({
          name: componentName,
          aliases: getComponentNameAliases(tag.name),
          source: {
            moduleName: packageName,
            localName: componentName,
            exportName:
              tag.source.symbol !== 'default' ? tag.source.symbol : undefined,
          },
        })
      })
    } catch {}
  } else if (pkg.vetur != null) {
    try {
      const info = requireFileFromPackage(
        require,
        packageName,
        pkg.vetur.tags,
        rootDir,
      ) as PackageVeturInfo

      Object.keys(info).forEach((tag) => {
        const componentName = getComponentName(tag)
        components.push({
          name: componentName,
          aliases: getComponentNameAliases(tag),
          source: {
            moduleName: packageName,
            localName: componentName,
            exportName: componentName,
          },
        })
      })
    } catch {}
  }
  return components
}

interface PackageVeturInfo {
  [key: string]: {}
}

interface PackageWebTypes {
  contributions?: {
    html?: {
      tags?: Array<{
        name: string
        source: {
          symbol: string
        }
      }>
    }
  }
}
