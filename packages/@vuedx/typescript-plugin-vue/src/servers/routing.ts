import { isVirtualFile, isVueFile, VirtualTextDocument } from '@vuedx/vue-virtual-textdocument';
import { PluginContext } from '../context';
import { TS } from '../interfaces';
import { CreateLanguageServiceOptions } from '../types';
import { createServerHelper } from '../utils';
import { createVueLanguageServer } from './vue';

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

function createLanguageServiceRouter(options: CreateLanguageServiceOptions): TS.LanguageService {
  const vue = createVueLanguageServer(options);
  const ts = options.service;

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
    if (options.helpers.isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start);
      if (result) return { start: result.offset, length: result.length };

      return null;
    }

    return span;
  }

  const proxy: Partial<TS.LanguageService> = {
    organizeImports(scope, formatOptions, preferences) {
      return choose(scope.fileName).organizeImports(scope, formatOptions, preferences);
    },
    findRenameLocations(fileName, position, findInStrings, findInComments) {
      return choose(fileName)
        .findRenameLocations(fileName, position, findInStrings, findInComments)
        ?.map((item) => {
          options.context.log('xxx.findRenameLocations ' + JSON.stringify(item));
          if (isVirtualFile(item.fileName)) {
            item.originalContextSpan = item.contextSpan;
            item.originalTextSpan = item.textSpan;
            item.originalFileName = item.fileName;
            const virtual = options.helpers.getDocument(item.fileName) as VirtualTextDocument;

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

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}
