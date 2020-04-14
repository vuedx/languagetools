import {
  asUri,
  DocumentStore,
  getContainingFile,
  isVirtualFile,
  isVueFile,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument';
import Path from 'path';
import { URI } from 'vscode-uri';
import { TS } from './interfaces';
import { tryPatchMethod } from './patcher';
import { getLastNumberFromVersion, isNotNull } from './utils';

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

  public constructor(public readonly typescript: typeof TS, private info: TS.server.PluginCreateInfo) {
    this.log(`Created new plugin context.`);

    this.store = new ProxyDocumentStore(
      (uri) => {
        const fileName = URI.parse(uri).fsPath;
        this.log(`DocumentStore.load(fileName=${fileName})`);
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
    return this.info.serverHost;
  }

  public get languageServiceHost() {
    return this.info.languageServiceHost;
  }

  public get projectService() {
    return this.info.project.projectService;
  }

  public log(message: string): void {
    this.projectService.logger.info(`Vue.js:: ${message}`);
  }
  public error(message: Error): void {
    this.projectService.logger.msg(`Vue.js:: ${message} ${message.stack}`, this.typescript.server.Msg.Err);
  }

  public getCurrentDirectory() {
    return this.info.project.getCurrentDirectory();
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

  public tryCreateScriptInfo(fileName: string): void {
    if (isVirtualFile(fileName)) {
      const containingFileName = getContainingFile(fileName);
      const document = this.store.get(containingFileName);
      if (!document) throw new Error('Cannot find containing document');

      const containingScriptInfo = this.projectService.getOrCreateScriptInfoForNormalizedPath(
        this.typescript.server.toNormalizedPath(containingFileName),
        false
      );
      if (!containingScriptInfo) throw new Error('Cannot find ScriptInfo for containing document');

      patchScriptInfo(this, containingScriptInfo);
      const virtualDoc = document.getBlockDocument(fileName);
      if (!virtualDoc) throw new Error('Cannot find virtual document');
      const isOpen = containingScriptInfo.isScriptOpen();
      const scriptInfo = this.projectService.getOrCreateScriptInfoForNormalizedPath(
        this.typescript.server.toNormalizedPath(fileName),
        isOpen,
        isOpen ? virtualDoc.getText() : undefined,
        this.getScriptKind(fileName),
        false,
        { fileExists: this.languageServiceHost.fileExists! }
      );

      if (!scriptInfo) throw new Error('Cannot find ScriptInfo for virtual document');
    }
  }

  reload(info: TS.server.PluginCreateInfo): void {
    this.info = info;
    this.log(`Loading Vue plugin: ${info.project.getProjectName()}`);

    patchProjectService(this);
    patchServiceHost(this);
    patchLanguageServiceHost(this);
  }
}

function patchProjectService(context: PluginContext) {
  patchExtraFileExtensions(context);
}

function patchExtraFileExtensions(context: PluginContext) {
  const extraFileExtensions: TS.server.HostConfiguration['extraFileExtensions'] = [
    { extension: 'vue', isMixedContent: true, scriptKind: context.typescript.ScriptKind.Deferred },
  ];

  tryPatchMethod(context.projectService, 'setHostConfiguration', (setHostConfiguration) => {
    context.log(`[patch] Add support for vue extension. (ProjectService)`);
    return (args) => {
      if (args.extraFileExtensions) {
        args.extraFileExtensions.push(...extraFileExtensions);
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

function patchLanguageServiceHost(context: PluginContext) {
  patchGetScriptFileNames(context);
  patchFileExists(context);
  patchScriptSnapshot(context);
  patchModuleResolution(context);
}

function patchGetScriptFileNames(context: PluginContext) {
  tryPatchMethod(context.languageServiceHost, 'getScriptFileNames', (getScriptFileNames) => {
    context.log(`[patch] Override getScriptFileNames to expand .vue files to virtual files. (LanguageServerHost)`);
    const previousVueFiles = new Set<string>();

    return () => {
      const fileNames = [...getScriptFileNames(), ...previousVueFiles].map((fileName) => {
        if (isVueFile(fileName)) {
          const document = context.store.get(fileName);

          if (document) {
            if (!previousVueFiles.has(fileName)) previousVueFiles.add(fileName);

            return context.getSupportedVirtualDocumentFileNames(document).map((fileName) => {
              try {
                context.tryCreateScriptInfo(fileName);
              } catch (error) {
                context.log(
                  `[ERROR] Cannot create ScriptInfo for "${fileName}". Reason: ${error.message} ${error.stack}`
                );
              }

              return fileName;
            });
          } else {
            previousVueFiles.delete(fileName);

            return [];
          }
        }

        return fileName;
      });

      if (__DEV__) {
        context.log(`LanguageServerHost.getScriptFileNames ${JSON.stringify(fileNames, null, 2)}`);
      }

      return fileNames.flat(Infinity);
    };
  });
}

function patchFileExists(context: PluginContext) {
  tryPatchMethod(context.languageServiceHost, 'fileExists', (fileExists = context.typescript.sys.fileExists) => {
    context.log(`[patch] Override fileExists to check containing file for virtual files. (LanguageServerHost)`);

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        context.log(`LanguageServerHost.fileExists("${fileName}")`);
        fileName = getContainingFile(fileName);
      }

      return fileExists(fileName);
    };
  });
}

function patchScriptSnapshot(context: PluginContext) {
  tryPatchMethod(context.languageServiceHost, 'getScriptSnapshot', (getScriptSnapshot) => {
    context.log(
      `[patch] Override getScriptSnapshot to create a snapshot of the virtual file content. (LanguageServerHost)`
    );

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        const containingFileName = getContainingFile(fileName);
        const document = context.store.get(containingFileName);
        if (!document) return;

        const virtualDoc = document.getBlockDocument(fileName);
        if (!virtualDoc) return;

        return context.typescript.ScriptSnapshot.fromString(virtualDoc.getText());
      }

      return getScriptSnapshot(fileName);
    };
  });
  tryPatchMethod(context.languageServiceHost, 'getScriptVersion', (getScriptVersion) => {
    context.log(
      `[patch] Override getScriptVersion to fetch version of the containing file for virtual files. (LanguageServerHost)`
    );

    return (fileName) => {
      if (isVirtualFile(fileName)) {
        const document = context.store.get(getContainingFile(fileName));
        const virtual = document?.getBlockDocument(fileName);

        return virtual ? 'Vue-' + virtual.version : '0';
      }

      return getScriptVersion(fileName);
    };
  });
}

function patchModuleResolution(context: PluginContext) {
  tryPatchMethod(context.languageServiceHost, 'resolveModuleNames', (resolveModuleNames) => {
    context.log(`[patch] Override resolveModuleNames to resolve imports from .vue files. (LanguageServerHost)`);
    const cache = context.typescript.createModuleResolutionCache(context.getCurrentDirectory(), (fileName) =>
      context.typescript.server.toNormalizedPath(fileName)
    );
    return (moduleNames, containingFile, reusedNames, redirectedReferences, options) => {
      if (isVueFile(containingFile)) throw new Error('A .vue file should not be part of TS program.');
      const containingDir = Path.dirname(containingFile);
      const currentCache = cache.getOrCreateCacheForDirectory(containingDir);
      const vueModules: Array<TS.ResolvedModule | TS.ResolvedModuleFull | undefined> = moduleNames.map((moduleName) => {
        if (currentCache.has(moduleName)) return currentCache.get(moduleName)!.resolvedModule;
        if (isVueFile(moduleName) || (options.paths && moduleName in options.paths)) {
          const result = context.typescript.resolveModuleName(
            moduleName,
            containingFile,
            options,
            {
              ...context.serviceHost,
              fileExists(fileName) {
                context.log(`try files => ${moduleName} :: ${fileName}`);
                if (context.serviceHost.fileExists(fileName)) return true;
                if (fileName.endsWith('.vue.ts')) {
                  fileName = fileName.replace(/\.ts$/, '');
                }

                return context.serviceHost.fileExists(fileName);
              },
            },
            undefined,
            redirectedReferences
          );

          if (result.resolvedModule?.resolvedFileName.endsWith('.vue.ts')) {
            const fileName = result.resolvedModule.resolvedFileName.replace(/\.vue\.ts$/, '.vue');
            const document = context.store.get(fileName)!.getBlockDocument('script');

            if (document) {
              context.tryCreateScriptInfo(document.fsPath);

              const resolvedModule: ts.ResolvedModuleFull = {
                isExternalLibraryImport: moduleName.includes('node_modules'),
                resolvedFileName: document.fsPath,
                extension: context.getExtension(document.fsPath),
              };
              const result = { resolvedModule };

              currentCache.set(moduleName, result);

              return resolvedModule;
            }
          }
        }
      });

      const normalModules = resolveModuleNames
        ? resolveModuleNames(moduleNames, containingFile, reusedNames, redirectedReferences, options)
        : [];

      const result: Array<ts.ResolvedModule | ts.ResolvedModuleFull | undefined> = moduleNames.map(
        (_, index) => vueModules[index] || normalModules[index]
      );

      if (__DEV__) {
        if (vueModules.some(Boolean) || isVirtualFile(containingFile)) {
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
}

function patchWatchFile(context: PluginContext) {
  tryPatchMethod(context.serviceHost, 'watchFile', (watchFile) => {
    context.log(`[patch] Override watchFile to watch virtual files. (ServiceHost)`);

    return (fileName, callback, pollingInterval, options) => {
      if (isVirtualFile(fileName)) {
        const originalFileName = fileName;
        const originalCallback = callback;

        fileName = getContainingFile(fileName);
        callback = (_, eventKind) => originalCallback(originalFileName, eventKind);
      }

      return watchFile(fileName, callback, pollingInterval, options);
    };
  });
}

function patchScriptInfo(context: PluginContext, scriptInfo: TS.server.ScriptInfo) {
  tryPatchMethod(scriptInfo, 'editContent', (editContent) => {
    context.log(`[patch] Override editContent() of "${scriptInfo.fileName}" to sync virtual files. (ScriptInfo)`);

    return (start, end, newText) => {
      const document = context.store.get(scriptInfo.fileName);
      if (!document) throw new Error('VueTextDocument should exist for every ScriptInfo.');

      const range = { start: document.positionAt(start), end: document.positionAt(end) };

      editContent(start, end, newText);

      VueTextDocument.update(
        document,
        [{ range, text: newText }],
        getLastNumberFromVersion(scriptInfo.getLatestVersion())
      );

      context.getSupportedVirtualDocumentFileNames(document).forEach((fileName) => {
        context.projectService.getScriptInfo(fileName)?.markContainingProjectsAsDirty();
      });
    };
  });
}
