import {
  getContainingFile,
  isVirtualFile,
  parseVirtualFileName,
  RenderFunctionTextDocument,
  RENDER_SELECTOR,
  VirtualTextDocument,
  isVueFile,
} from '@vuedx/vue-virtual-textdocument';
import { PluginContext } from './context';

export function createServerHelper(context: PluginContext) {
  function getDocument(fileName: string) {
    return isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))?.getDocument(fileName)
      : context.store.get(fileName);
  }

  function getVueDocument(fileName: string) {
    return isVueFile(fileName) ? context.store.get(fileName) : null;
  }

  function getDocumentAt(fileName: string, position: number) {
    const document = context.store.get(fileName)!; // The file should exist.
    const block = document.blockAt(position);
    if (!block) return;

    if (block.type === 'template') {
      return document.getDocument(RENDER_SELECTOR);
    }

    return document.getDocument(document.getBlockSelector(block)!);
  }

  function isRenderFunctionDocument(document: unknown): document is RenderFunctionTextDocument {
    return (document as VirtualTextDocument)?.selector.type === RENDER_SELECTOR;
  }

  function isRenderFunctionFileName(fileName: string): boolean {
    return isVirtualFile(fileName) && parseVirtualFileName(fileName)?.selector.type === RENDER_SELECTOR;
  }

  return { getDocument, getDocumentAt, getVueDocument, isRenderFunctionDocument, isRenderFunctionFileName };
}
