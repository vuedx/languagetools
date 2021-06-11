import json from '@rollup/plugin-json'
import type { BuildOptions as ESBuildOptions } from 'esbuild'
import * as FS from 'fs'
import * as Path from 'path'
import type { OutputOptions, Plugin, RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'
import { TopologicalSort } from 'topological-sort'
import type {
  CompilerOptions,
  ModuleKind,
  parseJsonSourceFileConfigFileContent,
  readJsonConfigFile,
  sys,
} from 'typescript'
import { inspect } from 'util'
import { esbuild } from './rollup-plugin-esbuild'
import glob from 'fast-glob'

export type BuildKind = 'dts' | 'bundle'
export type ExtendedOutputOptions = (
  | OutputOptions
  | ({
      format: 'dts'
    } & Omit<OutputOptions, 'format'>)
) & { bundle?: boolean | ESBuildOptions }
export interface BuildConfig {
  useMain: boolean
  sources: Record<string, ExtendedOutputOptions[]>
  external: string[]
}
export interface PackageJson {
  name?: string
  version?: string
  main?: string
  module?: string
  unpkg?: string
  types?: string
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
  peerDependencies: Record<string, string>
  buildConfig: BuildConfig
  publishConfig: Partial<{
    main: string
    module: string
    types: string
    unpkg: string
  }>
}
export interface PackageInfo {
  packageRoot: string
  packageJson: PackageJson
  tsconfig?: {
    configFile: string
    configOptions: CompilerOptions
  }
  rollupOptions: RollupOptions & {
    input: string
    output: OutputOptions[]
    external: string[]
    plugins: Plugin[]
  }
}
export interface GenerateOptions {
  rootDir?: string
  dirPatterns?: string[]
  extend(kind: BuildKind, info: PackageInfo): RollupOptions | RollupOptions[]
}

export function generateRollupOptions(
  options: GenerateOptions,
): RollupOptions[] {
  const typeConfigs: RollupOptions[] = []
  const configs: RollupOptions[] = []

  const packagesDir =
    options.rootDir != null
      ? Path.isAbsolute(options.rootDir)
        ? options.rootDir
        : Path.resolve(process.cwd(), options.rootDir)
      : process.cwd()

  const { packageNames, resolvedPackages } = getPackages(
    packagesDir,
    options.dirPatterns ?? ['**'],
  )

  const filterByFormat = createFilter<ExtendedOutputOptions>(
    process.env['BUILD_FORMATS'],
    (value) => [value.format],
  )

  const filterBySource = createFilter<string>(
    process.env['BUILD_SOURCES'],
    (value) => [value],
  )

  const filterByPackageName = createFilter<string>(
    process.env['BUILD_PACKAGES'],
    (value) => [resolvedPackages.get(value)?.name, value],
  )

  packageNames.filter(filterByPackageName).forEach((packageName) => {
    const project = (...segments: string[]): string => {
      return Path.resolve(packagesDir, packageName, ...segments)
    }

    const projectIf = (...segments: string[]): string | undefined => {
      const fileName = project(...segments)
      if (FS.existsSync(fileName)) return fileName
      else return undefined
    }

    const packageJson = resolvedPackages.get(packageName)

    if (packageJson == null) return // should never happen.

    const external = [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.peerDependencies),
      ...(packageJson.buildConfig.external ?? []),
    ]

    const sources: BuildConfig['sources'] = {
      ...packageJson.buildConfig.sources,
    }

    if (packageJson.buildConfig.useMain) {
      const key =
        packageJson.main?.endsWith('.ts') === true
          ? packageJson.main
          : 'src/index.ts'
      const outputs = Object.entries({
        ...packageJson,
        ...packageJson.publishConfig,
      })
        .map(([key, value]) => ({ key, value }))
        .filter((item): item is {
          key: 'main' | 'module' | 'types' | 'unpkg'
          value: string
        } => /^(main|module|unpkg|types)$/.test(item.key))
        .map<ExtendedOutputOptions>(({ key: type, value: file }) => ({
          file: file,
          format:
            type === 'main'
              ? 'commonjs'
              : type === 'unpkg'
              ? 'iife'
              : type === 'types'
              ? 'dts'
              : 'module',
        }))

      if (key in sources) {
        sources[key] = [...outputs, ...(sources[key] ?? [])]
      } else {
        sources[key] = outputs
      }
    }

    let tsconfig: PackageInfo['tsconfig']
    const configFile = projectIf('tsconfig.json')
    if (configFile != null) {
      tsconfig = {
        configFile,
        configOptions: getTSConfig(configFile),
      }
    }

    Object.entries(sources)
      .filter(([input]) => filterBySource(input))
      .forEach(([input, outputs]) => {
        const types = Array.from(outputs)
          .filter(filterByFormat)
          .filter((output) => output.format === 'dts')
          .map<OutputOptions>(({ bundle, ...output }) => ({
            sourcemap: false,
            ...output,
            file: output.file != null ? project(output.file) : output.file,
            format: 'module',
          }))

        const bundles = Array.from(outputs)
          .filter(filterByFormat)
          .filter(
            (
              output,
            ): output is OutputOptions & {
              bundle?: boolean | ESBuildOptions
            } => output.format !== 'dts',
          )
          .map<OutputOptions>(({ bundle, ...output }) => ({
            sourcemap: true,
            preferConst: true,
            exports: 'auto',
            ...output,
            file: output.file != null ? project(output.file) : output.file,
            plugins:
              bundle != null && bundle !== false
                ? [
                    esbuild(bundle, () => {
                      // TODO: Get final external option.
                      return external
                    }),
                  ]
                : [],
          }))

        const relInput = Path.relative(process.cwd(), project(input))
        const packageRoot = project('.')

        if (types.length > 0) {
          const config = options.extend('dts', {
            packageRoot,
            packageJson,
            tsconfig,
            rollupOptions: {
              input: relInput,
              output: types,
              external: external.slice(),
              plugins: [
                json(),
                dts({
                  respectExternal: true,
                  compilerOptions: tsconfig?.configOptions,
                }),
              ],
            },
          })

          typeConfigs.push(...(Array.isArray(config) ? config : [config]))
        }

        if (bundles.length > 0) {
          const config = options.extend('bundle', {
            packageRoot,
            packageJson,
            tsconfig,
            rollupOptions: {
              input: relInput,
              output: bundles,
              external: external.slice(),
              plugins: [],
            },
          })

          configs.push(...(Array.isArray(config) ? config : [config]))
        }
      })
  })

  // FIXME: Disable eslint rule as it conflicts with typescript config.
  // eslint-disable-next-line @typescript-eslint/dot-notation
  if (process.env['DEBUG'] === 'rollup-monorepo-utils') {
    console.log('Generated rollup configs:', inspect(configs, false, 4))
  }

  return [...typeConfigs, ...configs]
}

export function getPackages(
  rootDir: string,
  patterns: string[] = ['**'],
): {
  packageNames: string[]
  fullPackageNames: string[]
  resolvedPackages: Map<string, PackageJson>
} {
  const packageJsonFiles = glob.sync(
    patterns.map((pattern) => `${pattern.replace(/\/$/, '')}/package.json`),
    {
      cwd: rootDir,
      onlyFiles: true,
      ignore: ['**/node_modules/**'],
    },
  )
  const resolvedPackages = new Map<string, PackageJson>()
  const nodes = new Map<string, string>()

  packageJsonFiles.forEach((packageJsonFile) => {
    const packageRelativePath = Path.dirname(packageJsonFile)
    const packageFile = Path.resolve(rootDir, packageJsonFile)

    if (FS.existsSync(packageFile)) {
      const rawPackageJson = JSON.parse(
        FS.readFileSync(packageFile, 'utf-8'),
      ) as Partial<PackageJson>
      const packageJson: PackageJson = {
        dependencies: {},
        devDependencies: {},
        peerDependencies: {},
        publishConfig: {},
        ...rawPackageJson,
        buildConfig: {
          useMain: true,
          sources: {},
          external: [],
          ...rawPackageJson.buildConfig,
        },
      }

      resolvedPackages.set(packageRelativePath, packageJson)

      nodes.set(packageJson.name ?? packageRelativePath, packageRelativePath)
    }
  })

  const sortOp = new TopologicalSort(nodes)

  resolvedPackages.forEach((packageJson, packageName) => {
    new Set([
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.devDependencies),
    ]).forEach((dependencyName) => {
      if (nodes.has(dependencyName)) {
        sortOp.addEdge(dependencyName, packageJson.name ?? packageName)
      }
    })
  })
  const sortedPackageNames = Array.from(sortOp.sort().keys())
  const packageDirNames = sortedPackageNames.map((key) => nodes.get(key) ?? key)

  return {
    packageNames: packageDirNames,
    fullPackageNames: sortedPackageNames,
    resolvedPackages,
  }
}

const TS_CONFIG_CACHE = new Map<string, CompilerOptions>()
function getTSConfig(configFile: string): CompilerOptions {
  if (TS_CONFIG_CACHE.has(configFile))
    return TS_CONFIG_CACHE.get(configFile) ?? {}

  // Load typescript package from current working directory.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ts = require('typescript') as {
    parseJsonSourceFileConfigFileContent: typeof parseJsonSourceFileConfigFileContent
    readJsonConfigFile: typeof readJsonConfigFile
    ModuleKind: typeof ModuleKind
    sys: typeof sys
  }

  const configSource = ts.readJsonConfigFile(configFile, ts.sys.readFile)
  const parsed = ts.parseJsonSourceFileConfigFileContent(
    configSource,
    ts.sys,
    Path.dirname(configFile),
  )

  return parsed.options
}

function createFilter<T>(
  matchRE: string | undefined,
  getter: (value: T) => Array<string | undefined>,
): (value: T) => boolean {
  if (matchRE == null) return () => true

  const RE = matchRE.startsWith('/')
    ? new RegExp(matchRE.substring(1, matchRE.lastIndexOf('/')))
    : new RegExp(matchRE, 'i')

  return (value) =>
    getter(value)
      .filter((id): id is string => id != null)
      .some((id) => RE.test(id))
}
