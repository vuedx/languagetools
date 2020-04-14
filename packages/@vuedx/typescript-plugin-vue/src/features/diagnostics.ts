import ts from 'typescript';
import { removeVirtualSuffixFromText } from '../utils';
import { RenderFunctionDocument } from '@vuedx/vue-virtual-textdocument';
import { TS } from '../interfaces';

export function prepareSyntacticDiagnostics(result: ts.DiagnosticWithLocation[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSyntacticDiagnostics(result: ts.DiagnosticWithLocation[], document: RenderFunctionDocument) {
  result.forEach(remapDiagnostic.bind(null, document));

  return result;
}

export function prepareSuggestionDiagnostics(result: ts.DiagnosticWithLocation[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSuggestionDiagnostics(result: ts.DiagnosticWithLocation[], document: RenderFunctionDocument) {
  result.forEach(remapDiagnostic.bind(null, document));

  return result;
}

export function prepareSemanticDiagnostics(result: ts.Diagnostic[]) {
  result.forEach(prepareDiagnostic);

  return result;
}

export function remapSemanticDiagnosts(result: ts.Diagnostic[], document: RenderFunctionDocument) {
  result.forEach(remapDiagnostic.bind(null, document));

  return result;
}

function prepareDiagnostic(diagnostic: TS.Diagnostic) {
  if (typeof diagnostic.messageText === 'string') {
    diagnostic.messageText = removeVirtualSuffixFromText(diagnostic.messageText);
  }
}

function remapDiagnostic(document: RenderFunctionDocument, diagnostic: TS.Diagnostic) {
  if (diagnostic.start != null) {
    diagnostic.start = document.getSourceOffsetAt(diagnostic.start);
  }
}
