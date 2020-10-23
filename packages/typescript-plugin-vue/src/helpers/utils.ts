import { ComponentInfo, createFullAnalyzer } from '@vuedx/analyze'
import {
  getContainingFile,
  isVirtualFile,
  isVueFile,
  parseVirtualFileName,
  RenderFunctionTextDocument,
  RENDER_SELECTOR,
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import FS from 'fs'
import Path from 'path'
import QuickLRU from 'quick-lru'
import { PluginContext } from '../context'
import {
  findTemplateElementNodeAt,
  findTemplateNodeAt,
  findTemplateNodeFor,
  findTemplateNodesIn,
} from './ast-ops'
import { TS } from '../interfaces'

function createCachedAnalyzer() {
  const cache = new QuickLRU<string, ComponentInfo>({ maxSize: 1000 })
  const analyzer = createFullAnalyzer([], {
    babel: { plugins: ['typescript', 'jsx'] },
  })

  return (document: VueTextDocument) => {
    const key = `${document.version}::${document.fsPath}`
    if (cache.has(key)) return cache.get(key)!
    const info = analyzer.analyze(document.getText(), document.fsPath)
    cache.set(key, info)
    return info
  }
}

export function createServerHelper(
  context: PluginContext,
  languageService: TS.LanguageService,
) {
  const getComponentInfo = createCachedAnalyzer()

  function findNodeAtPosition(fileName: string, position: number) {
    const document = getRenderDoc(fileName)
    if (document?.ast)
      return {
        document: document!,
        ...findTemplateNodeAt(document.ast, position),
      }
    else return { node: null, ancestors: [], document: null }
  }

  function getDocument(fileName: string) {
    return isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))?.getDocument(fileName)
      : context.store.get(fileName)
  }

  function getVueDocument(fileName: string) {
    return isVueFile(fileName)
      ? context.store.get(fileName)
      : isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))
      : null
  }

  function getDocumentAt(fileName: string, position: number) {
    const document = context.store.get(fileName)! // The file should exist.
    const block = document.blockAt(position)
    if (!block) return

    if (block.type === 'template') {
      return document.getDocument(RENDER_SELECTOR)
    }

    return document.getDocument(document.getBlockSelector(block)!)
  }

  function isRenderFunctionDocument(
    document: unknown,
  ): document is RenderFunctionTextDocument {
    return (document as VirtualTextDocument)?.selector.type === RENDER_SELECTOR
  }

  function isRenderFunctionFileName(fileName: string): boolean {
    return (
      isVirtualFile(fileName) &&
      parseVirtualFileName(fileName)?.selector.type === RENDER_SELECTOR
    )
  }

  function getRenderDoc(
    fileName: string,
  ): RenderFunctionTextDocument | undefined {
    if (isVirtualFile(fileName))
      return getVueDocument(fileName)?.getDocument('_render')
    return getVueDocument(fileName)?.getDocument('_render')
  }

  function getTextSpan(
    document: VirtualTextDocument,
    span: TS.TextSpan,
  ): TS.TextSpan {
    if (isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start)
      if (result) return { start: result.offset, length: result.length }
    }

    return span
  }

  function getResolvedModule(
    fileName: string,
    importSource: string,
  ): TS.ResolvedModuleFull | undefined {
    const program = languageService.getProgram()
    const sourceFile = program?.getSourceFile(fileName) as any
    const resolvedModules: Map<string, TS.ResolvedModuleFull> | undefined =
      sourceFile?.resolvedModules

    return resolvedModules?.get(importSource)
  }

  return {
    findNodeAtPosition,
    findTemplateElementNodeAt,
    findTemplateNodeAt,
    findTemplateNodeFor,
    findTemplateNodesIn,
    getComponentInfo,
    getDocument,
    getDocumentAt,
    getRenderDoc,
    getTextSpan,
    getVueDocument,
    isRenderFunctionDocument,
    isRenderFunctionFileName,
    getResolvedModule,
  }
}

export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null
}

export function computeIdentifierReplacement(
  source: string,
  identifer: string,
) {
  const RE = new RegExp(`\\b${identifer}\\b`)
  const match = RE.exec(source)

  if (!match) return { prefixText: source, suffixText: '' }

  return {
    prefixText: source.substr(0, match.index),
    suffixText: source.substr(match.index + match[0].length),
  }
}

export function findNearestComponentsDir(
  fileName: string,
  rootDir: string = '/',
) {
  let currentDir = Path.dirname(fileName)
  rootDir = Path.normalize(rootDir)
  do {
    const dir = Path.resolve(currentDir, 'components')
    if (isDirectory(dir)) return dir

    currentDir = Path.dirname(currentDir)
  } while (currentDir && Path.normalize(currentDir) === rootDir)

  return null
}

function isDirectory(dir: string) {
  const isDir = FS.existsSync(dir) && FS.statSync(dir).isDirectory()

  return isDir
}

export function getPaddingLength(source: string, offset: number = 0) {
  source = source.substr(offset)
  const match = /^[\s\r\n]+/m.exec(source)

  return match ? match[0].length : 0
}

export function getFilenameForNewComponent(
  context: PluginContext,
  directory: string,
  usedNames = new Set<string>(),
) {
  let name = 'Component'
  let fileName = Path.join(directory, 'Component.vue')
  let index = 0

  if (context.serviceHost.directoryExists(directory)) {
    const files = new Set(
      context.serviceHost.readDirectory(directory, ['.vue'], [], [], 1),
    )

    while (files.has(fileName) || usedNames.has(name)) {
      name = `Component${++index}`
      fileName = Path.join(directory, `${name}.vue`)
    }
  }

  return fileName
}

export function getComponentName(fileName: string) {
  return Path.basename(fileName).replace(/\.vue$/, '')
}

export function indent(code: string) {
  return '  ' + code.split('\n').join('\n  ')
}
