import { PluginContext } from '../context';
import { TS } from '../interfaces';
import { createServerHelper } from '../utils';
import { createVueLanguageServer } from './vue';
import { isVueFile } from 'vue-virtual-textdocument/src';
import { CreateLanguageServiceOptions } from '../types';

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

  const proxy: TS.LanguageService = {
    ...options.service,
    organizeImports(scope, formatOptions, preferences) {
      return choose(scope.fileName).organizeImports(scope, formatOptions, preferences);
    },
  };

  methods.forEach((name) => {
    // @ts-ignore
    proxy[name] = function (fileName: string): any {
      const service = choose(fileName);
      // @ts-ignore
      return service[name]!.apply(service, arguments);
    };
  });

  return proxy;
}
