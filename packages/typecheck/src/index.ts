import {
  getContainingFile,
  isVirtualFile,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import ts, {
  Diagnostic,
  DiagnosticWithLocation,
  server as TypeScriptServer,
} from 'typescript/lib/tsserverlibrary' // TODO: Load from current directory.

export function generateCodeFrame(
  source: string,
  start = 0,
  end = source.length,
  underline = (str: string) => str,
  gutter = (str: string) => str,
  range: number = 2,
): string {
  const lines = source.split(/\r?\n/)
  let count = 0
  const res: string[] = []
  const width = String(lines.length).length
  const getLine = (line: number | string) =>
    String(line).padStart(width) + ' | '
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue
        const line = j + 1
        res.push(`${gutter(getLine(line))}${lines[j]}`)
        const lineLength = lines[j].length
        if (j === i) {
          // push underline
          const pad = start - (count - lineLength) + 1
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start,
          )
          res.push(
            gutter(getLine('')) +
              ' '.repeat(pad) +
              underline('^'.repeat(length)),
          )
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1)
            res.push(gutter(getLine('')) + underline('^'.repeat(length)))
          }
          count += lineLength + 1
        }
      }
      break
    }
  }
  return res.join('\n')
}

export function getDiagnostics(directory: string, logging = false) {
  const pluginFile = require.resolve('@vuedx/typescript-plugin-vue')
  console.debug(
    `Loading plugin from ${Path.relative(process.cwd(), pluginFile)}`,
  )
  const serverHost = getServerHost(ts)
  const projectService = new ts.server.ProjectService({
    host: serverHost,
    logger: getLogger(logging),
    typingsInstaller: getTypesInstaller(),
    cancellationToken: {
      isCancellationRequested: () => false,
    },
    useSingleInferredProject: true,
    useInferredProjectPerProjectRoot: true,
    allowLocalPluginLoads: true,
    globalPlugins: [pluginFile],
    pluginProbeLocations: [
      process.cwd(),
      Path.resolve(__dirname, '..'),
      Path.resolve(__dirname, '../..'),
    ],
  })

  projectService.setHostConfiguration({
    hostInfo: '@vuedx/typecheck',
  })

  projectService.setCompilerOptionsForInferredProjects({
    rootDir: directory,
    jsx: 'preserve' as any,
    allowJs: true,
    checkJs: true,
    allowNonTsExtensions: true,
  })

  const tsConfig = ts.findConfigFile(
    directory,
    ts.sys.fileExists,
    'tsconfig.json',
  )
  const jsConfig = ts.findConfigFile(
    directory,
    ts.sys.fileExists,
    'jsconfig.json',
  )
  const configFile =
    tsConfig?.startsWith(directory) === true
      ? tsConfig
      : jsConfig?.startsWith(directory) === true
      ? jsConfig
      : undefined
  if (configFile != null) {
    console.debug(
      `Loading project from ${Path.relative(process.cwd(), configFile)}`,
    )
  }
  // @ts-ignore - This would load Vue plugin and would prevent reload when actual project is created.
  let project: TypeScriptServer.Project = projectService.createInferredProject(
    directory,
    true,
  )
  if (configFile != null) {
    // @ts-ignore - private method.
    project = projectService.createLoadAndUpdateConfiguredProject(configFile)
  } else {
    project.updateGraph()
  }

  const server = project.getLanguageService()
  const diagnostics: Array<{
    fileName: string
    semanticDiagnostics: Diagnostic[]
    syntacticDiagnostics: DiagnosticWithLocation[]
    suggestionDiagnostics: DiagnosticWithLocation[]
  }> = []

  const fileNames = Array.from(
    new Set(
      server
        .getProgram()!
        .getSourceFiles()
        .map((sourceFile) => sourceFile?.fileName)
        .filter(Boolean)
        .filter((fileName) => !/node_modules/.test(fileName))
        .map((fileName) =>
          isVirtualFile(fileName) ? getContainingFile(fileName) : fileName,
        ),
    ),
  )

  fileNames.forEach((fileName) => {
    const diagnostic = {
      fileName: getContainingFile(fileName),
      semanticDiagnostics: server.getSemanticDiagnostics(fileName),
      syntacticDiagnostics: server.getSyntacticDiagnostics(fileName),
      suggestionDiagnostics: server.getSuggestionDiagnostics(fileName),
    }

    if (
      diagnostic.semanticDiagnostics.length ||
      diagnostic.syntacticDiagnostics.length ||
      diagnostic.suggestionDiagnostics.length
    ) {
      diagnostics.push(diagnostic)
    }
  })

  return diagnostics
}

function getServerHost(T: typeof ts): TypeScriptServer.ServerHost {
  return {
    args: [],
    newLine: '\n',
    useCaseSensitiveFileNames: true,
    write: T.sys.write,
    writeOutputIsTTY: () => false,
    readFile: T.sys.readFile,
    getFileSize: T.sys.getFileSize,
    writeFile: T.sys.writeFile,
    watchFile: () => ({ close() {} }),
    watchDirectory: () => ({ close() {} }),
    resolvePath: T.sys.resolvePath,
    fileExists: T.sys.fileExists,
    directoryExists: T.sys.directoryExists,
    createDirectory: T.sys.createDirectory,
    getExecutingFilePath: T.sys.getExecutingFilePath,
    getCurrentDirectory: T.sys.getCurrentDirectory,
    getDirectories: T.sys.getDirectories,
    readDirectory: T.sys.readDirectory,
    getModifiedTime: T.sys.getModifiedTime,
    setModifiedTime: T.sys.setModifiedTime,
    deleteFile: T.sys.deleteFile,
    createHash: T.sys.createHash,
    createSHA256Hash: T.sys.createSHA256Hash,
    getMemoryUsage: T.sys.getMemoryUsage,
    exit: T.sys.exit,
    realpath: T.sys.realpath,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    clearScreen: T.sys.clearScreen,
    base64decode: T.sys.base64decode,
    base64encode: T.sys.base64encode,
    setImmediate: setImmediate,
    clearImmediate: clearImmediate,
    require: (context, moduleName) => {
      try {
        const m = require(require.resolve(moduleName, { paths: [context] }))

        return { module: m, error: undefined }
      } catch (error) {
        return { module: undefined, error }
      }
    },
  }
}

function getLogger(enabled: boolean): TypeScriptServer.Logger {
  function noop() {}
  return {
    close: () => {},
    hasLevel: () => true,
    getLogFileName: () => '',
    info: enabled ? console.error : noop,
    loggingEnabled: () => enabled,
    msg: enabled ? console.error : noop,
    startGroup: enabled ? console.group : noop,
    endGroup: enabled ? console.groupEnd : noop,
    perftrc: enabled ? console.timeStamp : noop,
  }
}

function getTypesInstaller(): TypeScriptServer.ITypingsInstaller {
  return {
    attach() {},
    enqueueInstallTypingsRequest() {},
    globalTypingsCacheLocation: undefined,
    installPackage() {
      return Promise.reject()
    },
    isKnownTypesPackageName() {
      return true
    },
    onProjectClosed() {},
  }
}
