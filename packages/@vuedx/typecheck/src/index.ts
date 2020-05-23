import ts, { server as TypeScriptServer, DiagnosticWithLocation, Diagnostic } from 'typescript/lib/tsserverlibrary'; // TODO: Load from current directory.
import Path from 'path';

export function getDiagnostics(directory: string, logging = false) {
  const serverHost = getServerHost(ts);
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
    globalPlugins: ['@vuedx/typescript-plugin-vue'],
    pluginProbeLocations: [process.cwd(), Path.resolve(__dirname, '..'), Path.resolve(__dirname, '../..')],
  });

  const configFile = ts.findConfigFile(directory, ts.sys.fileExists, 'tsconfig.json');
  // @ts-ignore
  projectService.createInferredProject(directory, true);
  // @ts-ignore
  const project: TypeScriptServer.ConfiguredProject = projectService.createLoadAndUpdateConfiguredProject(configFile)!;
  const server = project.getLanguageService();

  const diagnostics: Array<{
    fileName: string;
    semanticDiagnostics: Diagnostic[];
    syntacticDiagnostics: DiagnosticWithLocation[];
    suggestionDiagnostics: DiagnosticWithLocation[];
  }> = [];

  const fileNames = Array.from(
    new Set(
      server
        .getProgram()
        ?.getSourceFiles()
        .map((sourceFile) => sourceFile?.fileName?.replace(/____(script|render)\.[tj]s$/, ''))
        .filter((fileName) => !/node_modules/.test(fileName))
    )
  );

  fileNames.forEach((fileName) => {
    if (!/node_modules/.test(fileName)) {
      const diagnostic = {
        fileName: fileName,
        semanticDiagnostics: server.getSemanticDiagnostics(fileName),
        syntacticDiagnostics: server.getSyntacticDiagnostics(fileName),
        suggestionDiagnostics: server.getSuggestionDiagnostics(fileName),
      };

      if (
        diagnostic.semanticDiagnostics.length ||
        diagnostic.syntacticDiagnostics.length ||
        diagnostic.suggestionDiagnostics.length
      ) {
        diagnostics.push(diagnostic);
      }
    }
  });

  return diagnostics;
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
        const m = require(require.resolve(moduleName, { paths: [context] }));

        return { module: m, error: undefined };
      } catch (error) {
        return { module: undefined, error };
      }
    },
  };
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
  };
}

function getTypesInstaller(): TypeScriptServer.ITypingsInstaller {
  return {
    attach() {},
    enqueueInstallTypingsRequest() {},
    globalTypingsCacheLocation: undefined,
    installPackage() {
      return Promise.reject();
    },
    isKnownTypesPackageName() {
      return true;
    },
    onProjectClosed() {},
  };
}
