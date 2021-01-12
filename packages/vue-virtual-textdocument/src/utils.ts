import { SFCBlock } from '@vuedx/compiler-sfc'
import Path from 'path'
import { URI, uriToFsPath } from 'vscode-uri'
import { Selector } from './types'

export function getLanguageIdFromExtension(ext: string): string {
  switch (ext) {
    case 'js':
      return 'javascript'
    case 'ts':
      return 'typescript'
  }

  return ext
}

// Vue File: foo.vue
export const VIRTUAL_FILENAME_SEPARATOR = '________'

export function basename(fileName: string): string {
  return Path.posix.basename(fileName)
}

export function relativeVirtualImportPath(fileName: string): string {
  return `./${basename(fileName).replace(/\.[^.]+$/, '')}`
}

export function isVueFile(fileName: string): boolean {
  return fileName.endsWith('.vue')
}

export function isVirtualFile(fileName: string): boolean {
  return fileName.indexOf('.vue' + VIRTUAL_FILENAME_SEPARATOR) > 0
}

export function isVirtualFileOfType(
  fileName: string,
  type: '_render' | '_module' | '_internal' | 'script' | 'scriptSetup',
): boolean {
  return fileName.indexOf('.vue' + VIRTUAL_FILENAME_SEPARATOR + type) > 0
}

export function getContainingFile(fileName: string): string {
  return fileName.split(VIRTUAL_FILENAME_SEPARATOR).shift() ?? fileName
}

export function asUri(fileNameOrUri: string): string {
  if (isUri(fileNameOrUri)) return fileNameOrUri

  const uri = asFsUri(fileNameOrUri)
  if (isVirtualFile(fileNameOrUri)) {
    return uri.replace(/^file:/, 'vue:')
  }

  return uri
}

function isUri(fileNameOrUri: string): boolean {
  return /^[a-z]{2,}:\//i.test(fileNameOrUri)
}

function encodeURIComponentMinimal(path: string): string {
  let res: string | undefined = undefined;
  for (let pos = 0; pos < path.length; pos++) {
    const code = path.charCodeAt(pos);
    if (code === 35 || code === 63) {
      if (res === undefined) {
        res = path.substr(0, pos);
      }
      res += code === 35 ? '%23' : '%3F';
    } else {
      if (res !== undefined) {
        res += path[pos];
      }
    }
  }
  return res !== undefined ? res : path;
}
export function asFsUri(fileName: string): string {
  return `file://${fileName.startsWith('/') ? '' : '/'}${encodeURIComponentMinimal(replaceSlashes(fileName))}`
}

export function replaceSlashes(fileName: string): string {
  if (fileName.includes('\\')) return fileName.replace(/\\/g, '/')
  return fileName
}

export function asFsPath(uri: string): string {
  if (isUri(uri)) {
    return replaceSlashes(uriToFsPath(URI.parse(uri), true))
  }

  return replaceSlashes(uri)
}

export function parseVirtualFileName(
  fileName: string,
): { uri: string; selector: Selector } | null {
  const uri = URI.parse(asUri(fileName))

  if (uri.scheme === 'vue') {
    let [container, selector] = asFsPath(fileName).split(VIRTUAL_FILENAME_SEPARATOR)
    if (!selector.includes('.')) {
      selector += '.' // Append a dot when extension is missing.
    }
    const [block, index] = selector
      .substr(0, selector.lastIndexOf('.'))
      .split('__')

    return {
      uri: asFsUri(container),
      selector: (index != null
        ? { type: block, index: parseInt(index, 10) }
        : { type: block }) as Selector,
    }
  }

  return null
}

const languages: Record<string, string> = {
  scriptSetup: 'javascript',
  script: 'javascript',
  template: 'vue-html',
  style: 'css',
  preview: 'vue-html',
  docs: 'markdown',
}

export function getBlockLanguage(block?: SFCBlock | null): string {
  if (block == null) return ''

  if (block.lang != null) {
    if (block.lang === 'js') return 'javascript'
    if (block.lang === 'ts') return 'typescript'
    return block.lang
  }

  return languages[block.type] ?? block.type
}

export function isOffsetInBlock(
  offset: number,
  block?: SFCBlock | null,
): boolean {
  if (block == null) return false

  return block.loc.start.offset <= offset && offset <= block.loc.end.offset
}

const extensions: Record<string, string> = {
  javascript: 'js',
  javascriptreact: 'jsx',
  typescript: 'ts',
  typescriptreact: 'tsx',
  markdown: 'md',
}
export function getLanguageExtension(lang: string): string {
  return extensions[lang] ?? lang
}

export function binarySearch<T>(
  array: T[],
  isMatch: (a: T) => number,
  returnMin?: boolean,
): T | undefined {
  let lo = 0
  let hi = array.length - 1

  while (lo <= hi) {
    const mid = ~~(lo + (hi - lo) / 2)
    const result = isMatch(array[mid])

    if (result === 0) {
      return array[mid]
    }
    if (result < 0) lo = mid + 1
    else hi = mid - 1
  }

  if (returnMin === true) {
    return array[lo]
  }
}
