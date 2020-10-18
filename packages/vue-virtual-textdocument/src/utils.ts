import { SFCBlock } from '@vuedx/compiler-sfc';
import { URI } from 'vscode-uri';
import { Selector } from './types';

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function getLanguageIdFromExtension(ext: string) {
  switch (ext) {
    case 'js':
      return 'javascript';
    case 'ts':
      return 'typescript';
  }

  return ext;
}

// Vue File: foo.vue
export const VIRTUAL_FILENAME_SEPARATOR = '________';

export function basename(fileName: string) {
  return fileName.split(/[/\\]/).pop()!;
}

export function relativeVirtualImportPath(fileName: string) {
  return `./${basename(fileName).replace(/\.[\w]+$/, '')}`;
}

export function isVueFile(fileName: string) {
  return fileName.endsWith('.vue');
}

export function isVirtualFile(fileName: string) {
  return fileName.indexOf('.vue' + VIRTUAL_FILENAME_SEPARATOR) > 0;
}

export function getContainingFile(fileName: string) {
  return fileName.split(VIRTUAL_FILENAME_SEPARATOR).shift()!;
}

export function asUri(fileName: string) {
  if (/^[a-z-]+:\/\//i.test(fileName)) return fileName;

  const uri = URI.file(fileName).toString();

  if (isVirtualFile(fileName)) {
    return uri.replace(/^[^:]+/, 'vue');
  }

  return uri;
}

export function asFsPath(uri: string) {
  return URI.parse(uri).fsPath;
}

export function parseVirtualFileName(fileName: string) {
  const uri = URI.parse(asUri(fileName));

  if (uri.scheme === 'vue') {
    const [container, selector] = uri.fsPath.split(VIRTUAL_FILENAME_SEPARATOR);
    if (!selector.includes('.')) throw new Error('Malformated virtual file uri.');
    const [block, index] = selector.substr(0, selector.lastIndexOf('.')).split('__');

    return {
      uri: URI.file(container).toString(),
      selector: <Selector>(index ? { type: block, index: parseInt(index, 10) } : { type: block }),
    };
  }

  return null;
}

const languages: Record<string, string> = {
  scriptSetup: 'javascript',
  script: 'javascript',
  template: 'vue-html',
  style: 'css',
  preview: 'vue-html',
  docs: 'markdown',
};

export function getBlockLanguage(block?: SFCBlock | null): string {
  if (!block) return '';

  if (block.lang) {
    if (block.lang === 'js') return 'javascript';
    if (block.lang === 'ts') return 'typescript';
    return block.lang;
  }

  return languages[block.type] || block.type;
}

export function isOffsetInBlock(offset: number, block?: SFCBlock | null): boolean {
  if (!block) return false;

  return block.loc.start.offset <= offset && offset <= block.loc.end.offset;
}

const extensions: Record<string, string> = {
  javascript: 'js',
  javascriptreact: 'jsx',
  typescript: 'ts',
  typescriptreact: 'tsx',
  markdown: 'md',
};
export function getLanguageExtension(lang: string): string {
  return extensions[lang] || lang;
}

export function binarySearch<T>(array: T[], isMatch: (a: T) => number): T | undefined {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    const mid = ~~(lo + (hi - lo) / 2);
    const result = isMatch(array[mid]);

    if (result === 0) {
      return array[mid];
    }
    if (result < 0) lo = mid + 1;
    else hi = mid - 1;
  }
}
