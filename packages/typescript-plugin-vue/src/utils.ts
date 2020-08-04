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
import * as Path from 'path';
import * as FS from 'fs';

export function createServerHelper(context: PluginContext) {
  function getDocument(fileName: string) {
    return isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))?.getDocument(fileName)
      : context.store.get(fileName);
  }

  function getVueDocument(fileName: string) {
    return isVueFile(fileName)
      ? context.store.get(fileName)
      : isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))
      : null;
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

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function computeIdentifierReplacement(source: string, identifer: string) {
  const RE = new RegExp(`\\b${identifer}\\b`);
  const match = RE.exec(source);

  if (!match) return { prefixText: source, suffixText: '' };

  return { prefixText: source.substr(0, match.index), suffixText: source.substr(match.index + match[0].length) };
}

export function findNearestComponentsDir(fileName: string, rootDir: string = '/') {
  let currentDir = Path.dirname(fileName);
  rootDir = Path.normalize(rootDir);
  do {
    const dir = Path.resolve(currentDir, 'components');
    if (isDirectory(dir)) return dir;

    currentDir = Path.dirname(currentDir);
  } while (currentDir && Path.normalize(currentDir) === rootDir);

  return null;
}

function isDirectory(dir: string) { 
  const isDir = FS.existsSync(dir) && FS.statSync(dir).isDirectory();

  return isDir;
}

export function getPaddingLength(source: string, offset: number = 0) {
  source = source.substr(offset);
  const match = /^[ ]+/m.exec(source);

  return match ? match[0].length : 0;
}

export function getFilenameForNewComponent(context: PluginContext, directory: string) {
  let fileName = Path.join(directory, 'Component.vue');
  let index = 0;
  if (context.serviceHost.directoryExists(directory)) {
    const files = new Set(context.serviceHost.readDirectory(directory, ['.vue'], [], [], 1));

    while (files.has(fileName)) {
      fileName = Path.join(directory, `Component${++index}.vue`);
    }
  }

  return fileName;
}

export function getComponentName(fileName: string) {
  return Path.basename(fileName).replace(/\.vue$/, '');
}

export function indent(code: string) {
  return '  ' + code.split('\n').join('\n  ');
}
