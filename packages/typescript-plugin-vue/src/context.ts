import {
  asUri,
  DocumentStore,
  getContainingFile,
  isVirtualFile,
  isVueFile,
  VIRTUAL_FILENAME_SEPARATOR,
  VueTextDocument,
  MODULE_SELECTOR,
  INTERNAL_MODULE_SELECTOR,
  parseVirtualFileName,
} from '@vuedx/vue-virtual-textdocument';
import { URI } from 'vscode-uri';
import { TS } from './interfaces';
import { tryPatchMethod } from './patcher';

function getLastNumberFromVersion(version: string) {
  const parts = version.split(/[^0-9]+/);
  const ver = parts.pop();

  return Number(ver);
}

class ProxyDocumentStore extends DocumentStore<VueTextDocument> {
  get(fileNameOrUri: string) {
    return super.get(asUri(fileNameOrUri));
  }

  has(fileNameOrUri: string) {
    return super.has(asUri(fileNameOrUri));
  }

  set(fileNameOrUri: string, document: VueTextDocument) {
    return super.set(asUri(fileNameOrUri), document);
  }

  delete(fileNameOrUri: string) {
    return super.delete(asUri(fileNameOrUri));
  }
}

export class PluginContext {
  public readonly store: DocumentStore<VueTextDocument>;

  private _projectService!: TS.server.ProjectService;
  private _serverHost!: TS.server.ServerHost;

  public constructor(public readonly typescript: typeof TS) {
    this.typescript.setSourceMapRange;
    this.store = new ProxyDocumentStore(
      (uri) => {
        const fileName = URI.parse(uri).fsPath;
        const content = this.typescript.sys.readFile(fileName) || '';
        return VueTextDocument.create(uri, 'vue', 0, content);
      },
      (uri) => {
        const fileName = URI.parse(uri).fsPath;

        return URI.file(this.projectService.toPath(fileName)).toString();
      }
    );
  }

  public get serviceHost() {
    return this._serverHost;
  }

  public get projectService() {
    return this._projectService;
  }

  public log(message: string): void {
    if (this.projectService) {
      this.projectService.logger.info(`Vue.js:: ${message}`);
    }
  }

  public error(message: Error): void {
    if (this.projectService) {
      this.projectService.logger.msg(`Vue.js:: ${message} ${message.stack}`, this.typescript.server.Msg.Err);
    }
  }

  private watchers = new Map<string, Map<string, Set<TS.FileWatcherCallback>>>();
  private getWatchers(fileName: string) {
    const containingFile = isVirtualFile(fileName) ? getContainingFile(fileName) : fileName;
    if (!this.watchers.has(containingFile)) {
      this.watchers.set(containingFile, new Map());
    }

    return this.watchers.get(containingFile)!;
  }

  public watchVirtualFile(fileName: string, callback: TS.FileWatcherCallback) {
    if (__DEV__) {
      if (!isVirtualFile(fileName)) throw new Error('Only virtual files can be watched.');
    }

    const watchers = this.getWatchers(fileName);

    if (!watchers.has(fileName)) {
      watchers.set(fileName, new Set());
    }

    watchers.get(fileName)!.add(callback);
  }

  public triggerVirtualFileWatchers(fileName: string, baseEvent: TS.FileWatcherEventKind) {
    const watchers = this.getWatchers(fileName);

    if (isVirtualFile(fileName)) {
      watchers.get(fileName)?.forEach((callback) => {
        callback(fileName, baseEvent);
      });
    } else {
      watchers.forEach((watchers) => {
        watchers.forEach((callback) => {
          callback(fileName, baseEvent);
        });
      });
    }
  }

  public stopVirtualFileWatcher(fileName: string, callback: TS.FileWatcherCallback) {
    const watchers = this.getWatchers(fileName)!.get(fileName);

    if (watchers) {
      watchers.delete(callback);
    }
  }

  public tryCreateScriptInfo(fileName: string): void {
    try {
      if (isVirtualFile(fileName)) {
        this.store.get(getContainingFile(fileName));
        const scriptInfo = this.projectService.getOrCreateScriptInfoForNormalizedPath(
          this.typescript.server.toNormalizedPath(getContainingFile(fileName)),
          false
        );
        if (scriptInfo) {
          patchScriptInfo(this, scriptInfo);
        }
      }
    } catch {}
  }

  public load(info: TS.server.PluginCreateInfo): void {
    this.log(`Loading Vue plugin: ${info.project.getProjectName()}`);

    this._serverHost = info.serverHost;
    this._projectService = info.project.projectService;

    patchProjectService(this);
    patchServiceHost(this);
    patchLanguageServiceHost(this, info.languageServiceHost);
  }
}

function patchProjectService(context: PluginContext) {
  patchExtraFileExtensions(context);
}

function patchExtraFileExtensions(context: PluginContext) {
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    { extension: 'vue', isMixedContent: false, scriptKind: context.typescript.ScriptKind.Deferred },
  ];

  tryPatchMethod(context.projectService, 'setHostConfiguration', (setHostConfiguration) => {
    context.log(`[patch] Add support for vue extension. (ProjectService)`);
    return (args) => {
      const current = ((context.projectService as any).hostConfiguration as TS.server.HostConfiguration)
        .extraFileExtensions;

      if (args.extraFileExtensions) {
        args.extraFileExtensions.push(...extraFileExtensions);
        context.log(`extraFileExtensions: ${JSON.stringify(args.extraFileExtensions)}`);
      } else if (!current || !current.some((ext) => ext.extension === 'vue')) {
        args.extraFileExtensions = [...extraFileExtensions];
      }

      return setHostConfiguration(args);
    };
  });

  if (
    ((context.projectService as any).hostConfiguration as TS.server.HostConfiguration).extraFileExtensions?.some(
      (ext) => ext.extension === 'vue'
    )
  ) {
    return;
  }

  // Enable .vue after enhancing the language server.
  setTimeout(() => context.projectService.setHostConfiguration({ extraFileExtensions: [] }), 0);
}

function patchLanguageServiceHost(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  patchGetScriptFileNames(context, languageServiceHost);
  patchModuleResolution(context, languageServiceHost);
  tryPatchMethod(languageServiceHost, 'getCompilationSettings', (getCompilationSettings) => () => {
    const settings = getCompilationSettings();

    settings.jsx = context.typescript.JsxEmit.Preserve;

    return settings;
  });
}

function patchGetScriptFileNames(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  tryPatchMethod(languageServiceHost, 'getScriptFileNames', (getScriptFileNames) => {
    context.log(`[patch] Override getScriptFileNames to expand .vue files to virtual files. (LanguageServerHost)`);
    const previousVueFiles = new Set<string>();

    return () => {
      const fileNames = new Set<string>();

      if (__DEV__) {
        context.log(`LanguageServerHost.getScriptFileNames (original)`);
        context.projectService.logger.startGroup();
        getScriptFileNames().forEach((fileName) => context.log(` - "${fileName}"`));
        context.projectService.logger.endGroup();
      }

      [...getScriptFileNames(), ...previousVueFiles]
        .map((fileName) => (isVirtualFile(fileName) ? getContainingFile(fileName) : fileName))
        .forEach((fileName) => {
          if (isVueFile(fileName)) {
            const document = context.store.get(fileName);

            if (document) {
              previousVueFiles.add(fileName);
              fileNames.add(document.getDocumentFileName(MODULE_SELECTOR)!);
            } else {
              previousVueFiles.delete(fileName);
            }
          } else {
            fileNames.add(fileName);
          }
        });

      if (__DEV__) {
        context.log(`LanguageServerHost.getScriptFileNames`);
        context.projectService.logger.startGroup();
        fileNames.forEach((fileName) => context.log(` - "${fileName}"`));
        context.projectService.logger.endGroup();
      }

      return Array.from(fileNames);
    };
  });
}

function patchFileExists(context: PluginContext) {
  tryPatchMethod(context.serviceHost, 'fileExists', (fileExists = context.typescript.sys.fileExists) => {
    context.log(`[patch] Override fileExists to check containing file for virtual files. (ServiceHost)`);

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        const document = context.store.get(getContainingFile(fileName));
        const { selector } = parseVirtualFileName(fileName)!;

        return fileName === document?.getDocumentFileName(selector);
      }

      return fileExists(fileName);
    };
  });
}

function patchReadFile(context: PluginContext) {
  tryPatchMethod(context.serviceHost, 'readFile', (readFile) => {
    context.log(`[patch] Override readFile to check containing file for virtual files. (ServiceHost)`);

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        context.log(`host.readFile("${fileName}")`);
        const document = context.store.get(getContainingFile(fileName))?.getDocument(fileName);
        if (document) return document.getText();
        return;
      }

      return readFile ? readFile(fileName) : context.typescript.sys.readFile(fileName);
    };
  });
}

function patchModuleResolution(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  tryPatchMethod(languageServiceHost, 'resolveModuleNames', (resolveModuleNames) => {
    context.log(`[patch] Override resolveModuleNames to resolve imports from .vue files. (LanguageServerHost)`);

    return (moduleNames, containingFile, reusedNames, redirectedReferences, options) => {
      if (isVueFile(containingFile)) throw new Error('A .vue file should not be part of TS program.');

      const newModuleNames = moduleNames.map((moduleName) =>
        isVueFile(moduleName)
          ? moduleName + VIRTUAL_FILENAME_SEPARATOR + MODULE_SELECTOR
          : moduleName.endsWith('.vue?internal')
          ? moduleName.replace(/\?internal$/, '') + VIRTUAL_FILENAME_SEPARATOR + INTERNAL_MODULE_SELECTOR
          : moduleName
      );

      // TODO: Support paths mapped to .vue files, if needed.
      const result = resolveModuleNames
        ? resolveModuleNames(newModuleNames, containingFile, reusedNames, redirectedReferences, options)
        : [];

      result.map((resolved) => {
        if (resolved && isVirtualFile(resolved.resolvedFileName)) {
          context.tryCreateScriptInfo(resolved.resolvedFileName); // Load vue file now to avoid filename case insensitivity issues.
        }
      });

      if (false) {
        if (isVirtualFile(containingFile)) {
          context.log(`LanguageServerHost.resolveModuleNames in ${containingFile} = ${JSON.stringify(options)}`);
          context.projectService.logger.startGroup();
          moduleNames.forEach((moduleName, index) => {
            context.log(`  ${moduleName} => ${result[index]?.resolvedFileName}`);
          });
          context.projectService.logger.endGroup();
        }
      }

      return result;
    };
  });
}

function patchServiceHost(context: PluginContext) {
  patchWatchFile(context);
  patchFileExists(context);
  patchReadFile(context);
}

function patchWatchFile(context: PluginContext) {
  tryPatchMethod(context.serviceHost, 'watchFile', (watchFile) => {
    context.log(`[patch] Override watchFile to watch virtual files. (ServiceHost)`);

    return (fileName, callback, pollingInterval, options) => {
      if (isVirtualFile(fileName)) {
        context.watchVirtualFile(fileName, callback);

        return {
          close() {
            context.stopVirtualFileWatcher(fileName, callback);
          },
        };
      }

      return watchFile(fileName, callback, pollingInterval, options);
    };
  });
}

function patchScriptInfo(context: PluginContext, scriptInfo: TS.server.ScriptInfo) {
  if (!scriptInfo) throw new Error('ScriptInfo is required.');

  tryPatchMethod(scriptInfo, 'editContent', (editContent) => {
    context.log(`[patch] Override editContent() of "${scriptInfo.fileName}" to sync virtual files. (ScriptInfo)`);

    return (start, end, newText) => {
      const document = context.store.get(scriptInfo.fileName);
      if (!document) throw new Error('VueTextDocument should exist for every ScriptInfo.');
      const range = { start: document.positionAt(start), end: document.positionAt(end) };
      editContent(start, end, newText);
      context.log(`UPDATE ${scriptInfo.getLatestVersion()} ==> ${scriptInfo.fileName} ${start}:${end} ${newText}`);
      VueTextDocument.update(
        document,
        [{ range, text: newText }],
        getLastNumberFromVersion(scriptInfo.getLatestVersion())
      );
      context.triggerVirtualFileWatchers(scriptInfo.fileName, context.typescript.FileWatcherEventKind.Changed);
    };
  });
}
