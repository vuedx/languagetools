import {
  asUri,
  DocumentStore,
  getContainingFile,
  isVirtualFile,
  isVueFile,
  parseVirtualFileName,
  VIRTUAL_FILENAME_SEPARATOR,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument';
import { URI } from 'vscode-uri';
import { TS } from './interfaces';
import { tryPatchMethod } from './patcher';
import { getLastNumberFromVersion } from './utils';

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
    this.store = new ProxyDocumentStore(
      (uri) => {
        const fileName = URI.parse(uri).fsPath;
        const content = this.typescript.sys.readFile(fileName) || '';

        return VueTextDocument.create(uri, 'vue', 0, content, 'javascript');
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

  public getScriptKind(fileName: string): TS.ScriptKind {
    const extension = fileName.substr(fileName.lastIndexOf('.'));
    switch (extension) {
      case '.ts':
        return this.typescript.ScriptKind.TS;
      case '.tsx':
        return this.typescript.ScriptKind.TSX;
      case '.js':
        return this.typescript.ScriptKind.JS;
      case '.jsx':
        return this.typescript.ScriptKind.JSX;
      case '.json':
        return this.typescript.ScriptKind.JSON;
      default:
        return this.typescript.ScriptKind.Unknown;
    }
  }

  public getExtension(fileName: string): TS.Extension {
    const extension = fileName.substr(fileName.lastIndexOf('.'));
    switch (extension) {
      case '.ts':
        return this.typescript.Extension.Ts;
      case '.tsx':
        return this.typescript.Extension.Tsx;
      case '.js':
        return this.typescript.Extension.Js;
      case '.jsx':
        return this.typescript.Extension.Jsx;
      default:
        throw new Error(`Unsupported extension: ${extension}`);
    }
  }

  public getSupportedVirtualDocumentFileNames(document: VueTextDocument) {
    const fileNames = [document.getBlockDocumentFileName('script')!];

    if (document.descriptor.template?.content) {
      fileNames.push(document.getBlockDocumentFileName('render')!);
    }

    return fileNames;
  }

  private watchers = new Map<string, TS.FileWatcherCallback[]>();
  public watchVirtualFile(fileName: string, callback: TS.FileWatcherCallback) {
    if (__DEV__) {
      if (!isVirtualFile(fileName)) throw new Error('Only virtual files can be watched.');
    }

    if (!this.watchers.has(fileName)) {
      this.watchers.set(fileName, []);
    }

    this.watchers.get(fileName)?.push(callback);
  }

  public triggerVirtualFileWatchers(fileName: string, event: TS.FileWatcherEventKind) {
    this.watchers.get(fileName)?.forEach((callback) => {
      try {
        callback(fileName, event);
      } catch (error) {
        this.error(error);
      }
    });
  }

  public stopVirtualFileWatcher(fileName: string, callback: TS.FileWatcherCallback) {
    if (!this.watchers.has(fileName)) return;

    const watchers = this.watchers.get(fileName)!;
    watchers.splice(watchers.indexOf(callback), 1);
  }

  public tryCreateScriptInfo(fileName: string): void {
    try {
      if (isVirtualFile(fileName)) {
        this.store.get(getContainingFile(fileName)); // Trigger VueTextDocument creation.
        patchScriptInfo(
          this,
          this.projectService.getOrCreateScriptInfoForNormalizedPath(
            this.typescript.server.toNormalizedPath(getContainingFile(fileName)),
            false
          )!
        );
      }
    } catch (error) {
      this.log(`[ERROR] Cannot create ScriptInfo for "${fileName}". Reason: ${error.message} ${error.stack}`);
    }
  }

  load(info: TS.server.PluginCreateInfo): void {
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
      context.log(`[------------->] setting extraFileExtensions`);
      const current = ((context.projectService as any).hostConfiguration as TS.server.HostConfiguration)
        .extraFileExtensions;

      if (args.extraFileExtensions) {
        args.extraFileExtensions.push(...extraFileExtensions);
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

  context.projectService.setHostConfiguration({ extraFileExtensions: [] });
}

function patchLanguageServiceHost(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  patchGetScriptFileNames(context, languageServiceHost);
  patchScriptSnapshot(context, languageServiceHost);
  patchModuleResolution(context, languageServiceHost);
}

function patchGetScriptFileNames(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  tryPatchMethod(languageServiceHost, 'getScriptFileNames', (getScriptFileNames) => {
    context.log(`[patch] Override getScriptFileNames to expand .vue files to virtual files. (LanguageServerHost)`);
    const previousVueFiles = new Set<string>();

    return () => {
      const fileNames: string[] = [];

      [...getScriptFileNames(), ...previousVueFiles].forEach((fileName) => {
        if (isVueFile(fileName)) {
          const document = context.store.get(fileName);

          if (document) {
            if (!previousVueFiles.has(fileName)) previousVueFiles.add(fileName);

            context.getSupportedVirtualDocumentFileNames(document).forEach((fileName) => {
              context.tryCreateScriptInfo(fileName);
              fileNames.push(fileName);
            });
          } else {
            previousVueFiles.delete(fileName);
          }
        } else {
          fileNames.push(fileName);
        }
      });

      if (__DEV__) {
        context.log(`LanguageServerHost.getScriptFileNames`);
        context.projectService.logger.startGroup();
        fileNames.forEach((fileName) => context.log(` - "${fileName}"`));
        context.projectService.logger.endGroup();
      }

      return fileNames;
    };
  });
}

function patchFileExists(context: PluginContext) {
  tryPatchMethod(context.serviceHost, 'fileExists', (fileExists = context.typescript.sys.fileExists) => {
    context.log(`[patch] Override fileExists to check containing file for virtual files. (ServiceHost)`);

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        const vueFileName = getContainingFile(fileName);
        if (fileExists(vueFileName)) {
          const document = context.store.get(vueFileName);
          if (!document) return false;

          const { selector } = parseVirtualFileName(fileName)!;
          return document.getBlockDocumentFileName(selector) === fileName;
        }

        return false;
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
        return context.store.get(getContainingFile(fileName))?.getBlockDocument(fileName)?.getText();
      }

      return readFile ? readFile(fileName) : context.typescript.sys.readFile(fileName);
    };
  });
}

function patchScriptSnapshot(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  // tryPatchMethod(context.languageServiceHost, 'getScriptSnapshot', (getScriptSnapshot) => {
  //   context.log(
  //     `[patch] Override getScriptSnapshot to create a snapshot of the virtual file content. (LanguageServerHost)`
  //   );
  //   return (fileName) => {
  //     if (isVirtualFile(fileName)) {
  //       const containingFileName = getContainingFile(fileName);
  //       const document = context.store.get(containingFileName);
  //       if (!document) return;
  //       const virtualDoc = document.getBlockDocument(fileName);
  //       if (!virtualDoc) return;
  //       context.log(`host.getScriptSnapshot("${fileName}") = ${virtualDoc.version}`);
  //       return context.typescript.ScriptSnapshot.fromString(virtualDoc.getText());
  //     }
  //     return getScriptSnapshot(fileName);
  //   };
  // });
  // tryPatchMethod(context.languageServiceHost, 'getScriptVersion', (getScriptVersion) => {
  //   context.log(
  //     `[patch] Override getScriptVersion to fetch version of the containing file for virtual files. (LanguageServerHost)`
  //   );
  //   return (fileName) => {
  //     if (isVirtualFile(fileName)) {
  //       const scriptInfo = context.projectService.getScriptInfo(getContainingFile(fileName));
  //       const document = context.store.get(getContainingFile(fileName))?.getBlockDocument(fileName);
  //       if (scriptInfo?.isScriptOpen()) {
  //         return `Vue-${scriptInfo.getLatestVersion()}`;
  //       }
  //       return document ? 'Vue-' + document.version : '0';
  //     }
  //     return getScriptVersion(fileName);
  //   };
  // });
}

function patchModuleResolution(context: PluginContext, languageServiceHost: TS.LanguageServiceHost) {
  tryPatchMethod(languageServiceHost, 'resolveModuleNames', (resolveModuleNames) => {
    context.log(`[patch] Override resolveModuleNames to resolve imports from .vue files. (LanguageServerHost)`);

    return (moduleNames, containingFile, reusedNames, redirectedReferences, options) => {
      if (isVueFile(containingFile)) throw new Error('A .vue file should not be part of TS program.');
      const newModuleNames = moduleNames.map((moduleName) =>
        isVueFile(moduleName) ? moduleName + VIRTUAL_FILENAME_SEPARATOR + 'script' : moduleName
      );

      // TODO: Support paths mapped to .vue files, if needed.
      const result = resolveModuleNames
        ? resolveModuleNames(newModuleNames, containingFile, reusedNames, redirectedReferences, options)
        : [];

      result.map((resolved) => {
        if (resolved && isVirtualFile(resolved.resolvedFileName)) {
          context.tryCreateScriptInfo(resolved.resolvedFileName);
        }
      });

      if (__DEV__) {
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
      const shouldPatchWatcher = isVirtualFile(fileName);
      if (shouldPatchWatcher) {
        context.watchVirtualFile(fileName, callback);

        const originalFileName = fileName;
        const originalCallback = callback;

        fileName = getContainingFile(fileName);
        callback = (_, eventKind) => originalCallback(originalFileName, eventKind);
      }

      const watcher = watchFile(fileName, callback, pollingInterval, options);

      if (shouldPatchWatcher) {
        return {
          close() {
            watcher.close();
            context.stopVirtualFileWatcher(fileName, callback);
          },
        };
      }

      return watcher;
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
      const preVirtuals = context.getSupportedVirtualDocumentFileNames(document);
      VueTextDocument.update(
        document,
        [{ range, text: newText }],
        getLastNumberFromVersion(scriptInfo.getLatestVersion())
      );
      const curVirtuals = context.getSupportedVirtualDocumentFileNames(document);

      curVirtuals.forEach((fileName) => {
        context.triggerVirtualFileWatchers(fileName, context.typescript.FileWatcherEventKind.Changed);
      });
      preVirtuals
        .filter((fileName) => !curVirtuals.includes(fileName))
        .forEach((fileName) => {
          context.triggerVirtualFileWatchers(fileName, context.typescript.FileWatcherEventKind.Deleted);
        });
    };
  });
}
