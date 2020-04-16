import ts from 'typescript';
import { removeVirtualSuffixFromText } from '../utils';
import { RenderFunctionDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';

export function prepareSyntacticDiagnostics(result: ts.DiagnosticWithLocation[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSyntacticDiagnostics(result: ts.DiagnosticWithLocation[], document?: RenderFunctionDocument) {
  if (document) {
    return result.filter(remapDiagnostic.bind(null, document));
  }

  return [];
}

export function prepareSuggestionDiagnostics(result: ts.DiagnosticWithLocation[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSuggestionDiagnostics(result: ts.DiagnosticWithLocation[], document?: RenderFunctionDocument) {
  if (document) {
    return result.filter(remapDiagnostic.bind(null, document));
  }

  return [];
}

export function prepareSemanticDiagnostics(result: ts.Diagnostic[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSemanticDiagnosts(result: ts.Diagnostic[], document?: RenderFunctionDocument) {
  if (document) {
    return result.filter(remapDiagnostic.bind(null, document));
  }

  return [];
}

function prepareDiagnostic(diagnostic: TS.Diagnostic) {
  if (typeof diagnostic.messageText === 'string') {
    diagnostic.messageText = removeVirtualSuffixFromText(diagnostic.messageText);
  }
}

function remapDiagnostic(document: RenderFunctionDocument, diagnostic: TS.Diagnostic) {
  if (diagnostic.start != null) {
    let start = document.getSourceOffsetAt(diagnostic.start);
    let end = document.getSourceOffsetAt(diagnostic.start + (diagnostic.length || 1) - 1);
    if (start == null || end == null) {
      // TODO: Handle it!!
      return false
    } else {
      end += 1
    }

    diagnostic.start = start
    diagnostic.length = end - start
  }

  return true;
}
