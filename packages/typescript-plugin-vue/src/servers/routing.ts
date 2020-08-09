import {
  isVirtualFile,
  isVueFile,
  VirtualTextDocument,
  getContainingFile,
  parseVirtualFileName,
  VIRTUAL_FILENAME_SEPARATOR,
} from '@vuedx/vue-virtual-textdocument';
import { PluginContext } from '../context';
import { TS } from '../interfaces';
import { LanguageServiceOptions } from '../types';
import { createServerHelper, isNotNull } from '../utils';
import { createVueLanguageServer } from './vue';
import * as Path from 'path';
const VUE_LANGUAGE_SERVER = Symbol('Vue Language Server');

export class RoutingLanguageServer {
  constructor(private context: PluginContext) {}

  decorate(languageService: TS.LanguageService) {
    if (VUE_LANGUAGE_SERVER in languageService) {
      return languageService;
    }

    const proxy = createLanguageServiceRouter({
      context: this.context,
      service: languageService,
      helpers: createServerHelper(this.context),
    });

    // @ts-ignore
    proxy[VUE_LANGUAGE_SERVER] = true;

    return proxy;
  }
}

function createLanguageServiceRouter(config: LanguageServiceOptions): TS.LanguageService {
  const vue = createVueLanguageServer(config);
  const ts = config.service;

  function choose(fileName: string) {
    return isVueFile(fileName) ? vue : ts;
  }

  const methods: Array<keyof TS.LanguageService> = [
    'getRenameInfo',
    'findRenameLocations',
    'getApplicableRefactors',
    'getBraceMatchingAtPosition',
    'getBreakpointStatementAtPosition',
    'getCodeFixesAtPosition',
    'getCompletionEntryDetails',
    'getCompletionEntrySymbol',
    'getCompletionsAtPosition',
    'getDefinitionAndBoundSpan',
    'getDefinitionAtPosition',
    'getDocCommentTemplateAtPosition',
    'getDocumentHighlights',
    'getEditsForFileRename',
    'getEditsForRefactor',
    'getEmitOutput',
    'getEncodedSemanticClassifications',
    'getEncodedSyntacticClassifications',
    'getFormattingEditsAfterKeystroke',
    'getFormattingEditsForDocument',
    'getFormattingEditsForRange',
    'getImplementationAtPosition',
    'getIndentationAtPosition',
    'getJsxClosingTagAtPosition',
    'getNameOrDottedNameSpan',
    'getNavigateToItems',
    'getNavigationBarItems',
    'getNavigationTree',
    'getOccurrencesAtPosition',
    'getOutliningSpans',
    'getQuickInfoAtPosition',
    'getReferencesAtPosition',
    'getSemanticClassifications',
    'getSemanticClassifications',
    'getSignatureHelpItems',
    'getSmartSelectionRange',
    'getSpanOfEnclosingComment',
    'getSuggestionDiagnostics',
    'getSyntacticDiagnostics',
    'getTodoComments',
    'getTypeDefinitionAtPosition',
    'findReferences',
    'prepareCallHierarchy',
    'provideCallHierarchyIncomingCalls',
    'provideCallHierarchyOutgoingCalls',
    'isValidBraceCompletionAtPosition',
  ];

  function getTextSpan(document: VirtualTextDocument, span: TS.TextSpan): TS.TextSpan | null {
    if (config.helpers.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start);
      if (result) return { start: result.offset, length: result.length };

      return null;
    }

    return span;
  }

  const VIRTUAL_FILE_SUFFIX_RE = new RegExp(
    `(?<=\.vue)${VIRTUAL_FILENAME_SEPARATOR}([A-Za-z_][A-Za-z0-9_-]*)(\\.[jt]sx?)?`,
    'g'
  );

  function getComponentName(fileName?: string) {
    if (!fileName || !isVueFile(fileName)) return;
    const baseName = Path.basename(fileName);

    return baseName.substr(0, baseName.length - 4);
  }
  const COMPONENT_TYPE_RE = /'ComponentPublicInstance<.*?ComponentOptionsBase<...>>'/g;
  const REPLACE = {
    virtualFile: (messageText: string) => messageText.replace(VIRTUAL_FILE_SUFFIX_RE, ''),
    componentType: (fileName: string | undefined, messageText: string) => {
      const component = getComponentName(fileName);
      return component ? messageText.replace(COMPONENT_TYPE_RE, `vue component '${component}'`) : messageText;
    },
  };
  function applyReplacements(fileName: string | undefined, messageText: string): string;
  function applyReplacements(
    fileName: string | undefined,
    messageText: TS.DiagnosticMessageChain
  ): TS.DiagnosticMessageChain;
  function applyReplacements(
    fileName: string | undefined,
    messageText: string | TS.DiagnosticMessageChain
  ): string | TS.DiagnosticMessageChain;
  function applyReplacements(
    fileName: string | undefined,
    messageText: string | TS.DiagnosticMessageChain
  ): string | TS.DiagnosticMessageChain {
    if (typeof messageText === 'string') {
      return REPLACE.componentType(fileName, REPLACE.virtualFile(messageText));
    } else {
      messageText.messageText = applyReplacements(fileName, messageText.messageText);

      return messageText;
    }
  }

  function isVirtualSourceFile(file?: TS.SourceFile): file is TS.SourceFile {
    return !!file && isVirtualFile(file.fileName);
  }

  const proxy: Partial<TS.LanguageService> = {
    organizeImports(scope, formatOptions, preferences) {
      return choose(scope.fileName)
        .organizeImports(scope, formatOptions, preferences)
        .map((change) => {
          if (isVirtualFile(change.fileName)) change.fileName = getContainingFile(change.fileName);

          return change;
        });
    },

    getQuickInfoAtPosition(fileName, position) {
      const info = choose(fileName).getQuickInfoAtPosition(fileName, position);

      if (info?.displayParts) {
        info.displayParts = info.displayParts
          .map((part) => {
            part.text = applyReplacements(fileName, part.text);

            return part;
          })
          .filter(isNotNull);
      }

      if (info?.documentation) {
        info.documentation = info.documentation
          .map((part) => {
            part.text = applyReplacements(fileName, part.text);

            return part;
          })
          .filter(isNotNull);
      }

      return info;
    },

    getSemanticDiagnostics(fileName) {
      const diagnostics = choose(fileName).getSemanticDiagnostics(fileName);
      const program = config.service.getProgram();

      return diagnostics
        .map((diagnostic) => {
          if (isVirtualSourceFile(diagnostic.file)) {
            diagnostic.file = { ...diagnostic.file, fileName: getContainingFile(diagnostic.file.fileName) };
          }

          diagnostic.messageText = applyReplacements(fileName, diagnostic.messageText);

          if (diagnostic.relatedInformation) {
            diagnostic.relatedInformation = diagnostic.relatedInformation.map((info) => {
              info.messageText = applyReplacements(fileName, info.messageText);
              if (isVirtualSourceFile(info.file)) {
                info.file = program?.getSourceFile(getContainingFile(info.file.fileName));
              }

              return info;
            });
          }

          return diagnostic;
        })
        .filter(isNotNull);
    },

    getSyntacticDiagnostics(fileName) {
      const diagnostics = choose(fileName).getSyntacticDiagnostics(fileName);
      const program = config.service.getProgram();

      return diagnostics
        .map((diagnostic) => {
          if (isVirtualSourceFile(diagnostic.file)) {
            diagnostic.file = { ...diagnostic.file, fileName: getContainingFile(diagnostic.file.fileName) };
          }

          diagnostic.messageText = applyReplacements(fileName, diagnostic.messageText);

          if (diagnostic.relatedInformation) {
            diagnostic.relatedInformation = diagnostic.relatedInformation.map((info) => {
              info.messageText = applyReplacements(fileName, info.messageText);
              if (isVirtualSourceFile(info.file)) {
                info.file = program?.getSourceFile(getContainingFile(info.file.fileName));
              }

              return info;
            });
          }

          return diagnostic;
        })
        .filter(isNotNull);
    },

    getSuggestionDiagnostics(fileName) {
      const diagnostics = choose(fileName).getSuggestionDiagnostics(fileName);
      const program = config.service.getProgram();

      return diagnostics
        .map((diagnostic) => {
          if (isVirtualSourceFile(diagnostic.file)) {
            diagnostic.file = { ...diagnostic.file, fileName: getContainingFile(diagnostic.file.fileName) };
          }

          diagnostic.messageText = applyReplacements(fileName, diagnostic.messageText);

          if (diagnostic.relatedInformation) {
            diagnostic.relatedInformation = diagnostic.relatedInformation.map((info) => {
              info.messageText = applyReplacements(fileName, info.messageText);
              if (isVirtualSourceFile(info.file)) {
                info.file = { ...info.file, fileName: getContainingFile(info.file.fileName) };
              }

              return info;
            });
          }

          return diagnostic;
        })
        .filter(isNotNull);
    },

    getRenameInfo(fileName, position, options) {
      const result = choose(fileName).getRenameInfo(fileName, position, options);

      config.context.log(JSON.stringify(result));

      if (result.canRename) {
        if (result.fileToRename && isVirtualFile(result.fileToRename)) {
          result.fileToRename = getContainingFile(result.fileToRename);
        }

        result.displayName = REPLACE.virtualFile(result.displayName);
        result.fullDisplayName = REPLACE.virtualFile(result.fullDisplayName);

        if (
          result.kind === config.context.typescript.ScriptElementKind.moduleElement &&
          result.displayName.endsWith('.vue')
        ) {
          result.triggerSpan.length -= 4;
        }
      }

      return result;
    },

    findRenameLocations(fileName, position, findInStrings, findInComments) {
      const result = choose(fileName)
        .findRenameLocations(fileName, position, findInStrings, findInComments)
        ?.map((item) => {
          if (isVirtualFile(item.fileName)) {
            item.originalContextSpan = item.contextSpan;
            item.originalTextSpan = item.textSpan;
            item.originalFileName = item.fileName;
            const virtual = config.helpers.getDocument(item.fileName) as VirtualTextDocument;

            item.fileName = virtual.container.fsPath;
            const textSpan = getTextSpan(virtual, item.textSpan);
            if (!textSpan) return;

            item.textSpan = textSpan;
            if (item.contextSpan) {
              const contextSpan = getTextSpan(virtual, item.contextSpan);
              if (!contextSpan) return;

              item.contextSpan = contextSpan;
            }
          }

          return item;
        })
        .filter(isNotNull);

      config.context.log(JSON.stringify(result));

      return result;
    },

    getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences) {
      const suffix = '.vue' + VIRTUAL_FILENAME_SEPARATOR + '_module';
      console.log('FileRenamed > ' + oldFilePath);
      return choose(oldFilePath)
        .getEditsForFileRename(oldFilePath, newFilePath, formatOptions, preferences)
        .map((edit) => {
          if (isVirtualFile(edit.fileName)) {
            const selector = parseVirtualFileName(edit.fileName);

            if (selector?.selector.type !== 'script') return;

            edit.fileName = getContainingFile(edit.fileName);
          }

          edit.textChanges = edit.textChanges
            .map((change) => {
              const index = change.newText.indexOf(suffix);

              if (index >= 0) {
                change.newText = change.newText.substr(0, index + 4) + change.newText.substr(index + suffix.length);
              }

              return change;
            })
            .filter(isNotNull);

          if (!edit.textChanges.length) return;

          return edit;
        })
        .filter(isNotNull);
    },

    getApplicableRefactors(fileName, positionOrRange, preferences) {
      return choose(fileName).getApplicableRefactors(fileName, positionOrRange, preferences);
    },

    getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences) {
      const result = choose(fileName).getEditsForRefactor(
        fileName,
        formatOptions,
        positionOrRange,
        refactorName,
        actionName,
        preferences
      );

      const editsByFileName: Record<
        string,
        { fileName: string; isNewFile?: boolean; textChanges: TS.TextChange[] }
      > = {};

      if (result) {
        result.edits = result.edits.filter((edit) => {
          if (isVirtualFile(edit.fileName) || isVueFile(edit.fileName)) {
            edit.fileName = getContainingFile(edit.fileName);

            if (!(edit.fileName in editsByFileName)) {
              editsByFileName[edit.fileName] = { isNewFile: false, fileName: edit.fileName, textChanges: [] };
            }
            editsByFileName[edit.fileName].textChanges.push(...edit.textChanges);
            editsByFileName[edit.fileName].isNewFile =
              editsByFileName[edit.fileName].isNewFile || edit.isNewFile === true;

            return false;
          }

          return true;
        });

        for (const fileTextChanges of Object.values(editsByFileName)) {
          fileTextChanges.textChanges.sort((a, b) => a.span.start - b.span.start);
        }

        result.edits.push(...Object.values<TS.FileTextChanges>(editsByFileName));
      }

      config.context.log(JSON.stringify(result, null, 2));
      return result;
    },
  };

  methods.forEach((name) => {
    if (!(name in proxy)) {
      // @ts-ignore
      proxy[name] = function (fileName: string): any {
        const service = choose(fileName);
        // @ts-ignore
        return service[name]!.apply(service, arguments);
      };
    }
  });

  return proxy as any;
}
