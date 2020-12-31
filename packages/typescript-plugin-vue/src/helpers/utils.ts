import { ComponentInfo, createFullAnalyzer, SourceRange } from '@vuedx/analyze'
import type { SFCBlock } from '@vuedx/compiler-sfc'
import { isNotNull } from '@vuedx/shared'
import {
  findTemplateChildrenInRange,
  findTemplateNodeAt,
  findTemplateNodeInRange,
  Node,
  TraversalAncestors,
} from '@vuedx/template-ast-types'
import {
  getContainingFile,
  INTERNAL_MODULE_SELECTOR,
  isVirtualFile,
  isVirtualFileOfType,
  isVueFile,
  MODULE_SELECTOR,
  parseVirtualFileName,
  RenderFunctionTextDocument,
  RENDER_SELECTOR,
  SCRIPT_BLOCK_SELECTOR,
  SCRIPT_SETUP_BLOCK_SELECTOR,
  VirtualTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import QuickLRU from 'quick-lru'
import { ORIGINAL_LANGUAGE_SERVER } from '../constants'
import { PluginContext } from '../context'
import { PluginConfig, TS } from '../interfaces'

function createCachedAnalyzer(): (document: VueTextDocument) => ComponentInfo {
  const cache = new QuickLRU<string, ComponentInfo>({ maxSize: 1000 })
  const analyzer = createFullAnalyzer([], {
    babel: { plugins: ['typescript', 'jsx'] },
  })

  return (document: VueTextDocument) => {
    const key = `${document.version}::${document.fsPath}`
    const info =
      cache.get(key) ?? analyzer.analyze(document.getText(), document.fsPath)
    cache.set(key, info)

    return info
  }
}

type GetElementType<T> = T extends Array<infer U> ? U : T

// TODO: Use memoize one, in most common scenario helper functions are called again in same request context (which means same arguments).
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createServerHelper(
  context: PluginContext,
  languageService: TS.LanguageService,
) {
  const getComponentInfo = createCachedAnalyzer()

  function isFeatureEnabled<K extends keyof PluginConfig['features']>(
    featureName: K,
    checkFor: boolean | GetElementType<PluginConfig['features'][K]> = true,
  ): boolean {
    const feature = context.config.features[featureName]

    return Array.isArray(feature)
      ? feature.includes(checkFor)
      : feature === true || feature === checkFor
  }

  /**
   * Find node in template containing given position.
   * @param fileName Vue or Virtual Block filename
   * @param position Position or range
   */
  function findTemplateNodeAtPosition(
    fileName: string,
    position: number | TS.TextRange,
  ):
    | {
        node: Node
        ancestors: TraversalAncestors
        document: RenderFunctionTextDocument
      }
    | {
        node: null
        ancestors: TraversalAncestors
        document: RenderFunctionTextDocument | null
      } {
    const document = getRenderDoc(fileName)

    if (document?.ast != null) {
      if (typeof position === 'number') {
        return {
          ...findTemplateNodeAt(document.ast, position),
          document,
        }
      } else {
        return {
          ...findTemplateNodeInRange(document.ast, position.pos, position.end),
          document,
        }
      }
    }

    return { node: null, ancestors: [], document: null }
  }

  function findTemplateChildren(
    fileName: string,
    position: number | TS.TextRange,
  ): Node[] {
    const document = getRenderDoc(fileName)

    return document?.ast != null
      ? typeof position === 'number'
        ? findTemplateChildrenInRange(document.ast, position, position)
        : findTemplateChildrenInRange(document.ast, position.pos, position.end)
      : []
  }

  function getDocument(
    fileName: string,
  ): VueTextDocument | VirtualTextDocument | null {
    return isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))?.getDocument(fileName) ??
          null
      : context.store.get(fileName)
  }

  function getVueDocument(fileName: string): VueTextDocument | null {
    return isVueFile(fileName)
      ? context.store.get(fileName)
      : isVirtualFile(fileName)
      ? context.store.get(getContainingFile(fileName))
      : null
  }

  function getBlockAt(
    fileName: string,
    position: number | TS.TextRange,
  ): SFCBlock | null {
    const document = getVueDocument(fileName)

    if (document != null) {
      if (typeof position === 'number') {
        return document.blockAt(position) ?? null
      } else {
        const a = document.blockAt(position.pos)
        const b = document.blockAt(position.end)

        if (a === b) return a ?? null
      }
    }

    return null
  }

  function getDocumentForBlock(
    fileName: string,
    block: SFCBlock,
  ): VirtualTextDocument | null {
    const document = getVueDocument(fileName)
    if (document != null) {
      if (block.type === 'template') {
        return document.getDocument(RENDER_SELECTOR)
      }

      const selector = document.getBlockSelector(block)
      if (selector != null) {
        return document.getDocument(selector)
      }
    }
    return null
  }

  function getDocumentAt(
    fileName: string,
    position: number | TS.TextRange,
  ): VirtualTextDocument | null {
    const block = getBlockAt(fileName, position)
    if (block != null) {
      return getDocumentForBlock(fileName, block)
    }

    return null
  }
  function getAllDocuments(fileName: string): VirtualTextDocument[] {
    const document = getVueDocument(fileName)
    const documents: Array<VirtualTextDocument | null | undefined> = []
    if (document != null) {
      if (isVirtualFile(fileName)) {
        documents.push(document.getDocument(fileName))
      } else {
        documents.push(
          document.getDocument(RENDER_SELECTOR),
          document.getDocument(INTERNAL_MODULE_SELECTOR),
          document.getDocument(MODULE_SELECTOR),
          document.getDocument(SCRIPT_BLOCK_SELECTOR),
          document.getDocument(SCRIPT_SETUP_BLOCK_SELECTOR),
        )
      }
    }

    return documents.filter(isNotNull)
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

  function isVueModuleFileName(fileName: string): boolean {
    return isVirtualFileOfType(fileName, MODULE_SELECTOR)
  }

  function getRenderDoc(
    fileName: string,
  ): RenderFunctionTextDocument | undefined {
    return getVueDocument(fileName)?.getDocument('_render')
  }

  function getTextSpan(
    document: VirtualTextDocument,
    span: TS.TextSpan,
    node?: Node | null,
  ): TS.TextSpan {
    if (isRenderFunctionDocument(document)) {
      const result = document.getOriginalOffsetAt(span.start)
      if (result != null)
        return {
          start: result.offset,
          length: Math.min(result.length, span.length),
        }
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

  function findTypeScriptNodeAtPosition(
    fileName: string,
    position: number | TS.TextRange,
  ): TS.Node | undefined {
    const findNodeAt = (
      start: number,
      end: number,
      container: TS.Node,
    ): TS.Node | undefined => {
      const node = container
        .getChildren()
        .find((node) => node.pos <= start && end <= node.end)

      if (node != null) {
        if (node.pos === start && node.pos === end) return node
        else return findNodeAt(start, end, node) ?? node
      } else {
        return container
      }
    }

    const scriptFile = languageService.getProgram()?.getSourceFile(fileName)

    if (scriptFile != null) {
      const result =
        typeof position === 'number'
          ? findNodeAt(position, position, scriptFile)
          : findNodeAt(position.pos, position.end, scriptFile)

      if (result !== scriptFile) return result
    }
  }

  function getLanguageServiceFor(
    fileName: string,
    fallback?: TS.LanguageService,
  ): TS.LanguageService {
    if (fallback != null) {
      try {
        const program = fallback.getProgram()
        if (program != null) {
          program.getSourceFile(fileName)
          return fallback
        }
      } catch {
        // fileName is not part of program. find correct program using project
      }
    }

    const project = context.projectService.getDefaultProjectForFile(
      context.typescript.server.toNormalizedPath(fileName),
      true,
    )

    if (project == null) return fallback ?? languageService
    const service = project.getLanguageService()
    if (ORIGINAL_LANGUAGE_SERVER in service) {
      return (service as any)[ORIGINAL_LANGUAGE_SERVER]
    } else {
      return service
    }
  }

  function getSourceFile(
    fileName: string,
    service?: TS.LanguageService,
  ): TS.SourceFile | undefined {
    try {
      return getLanguageServiceFor(fileName, service)
        .getProgram()
        ?.getSourceFile(fileName)
    } catch (error) {
      context.error(error)
    }
  }

  return {
    isFeatureEnabled,
    getLanguageServiceFor,
    getSourceFile,
    findTemplateChildren,
    findTemplateNodeAtPosition,
    findTypeScriptNodeAtPosition,
    getComponentInfo,
    getDocument,
    getDocumentAt,
    getAllDocuments,
    getRenderDoc,
    getTextSpan,
    getVueDocument,
    isRenderFunctionDocument,
    isRenderFunctionFileName,
    isVueModuleFileName,
    getResolvedModule,
  }
}

export function computeIdentifierReplacement(
  source: string,
  identifer: string,
): { prefixText: string; suffixText: string } {
  const RE = new RegExp(`\\b${identifer}\\b`)
  const match = RE.exec(source)

  if (match == null) return { prefixText: source, suffixText: '' }

  return {
    prefixText: source.substr(0, match.index),
    suffixText: source.substr(match.index + match[0].length),
  }
}

export function getPaddingLength(source: string, offset: number = 0): number {
  source = source.substr(offset)
  const match = /^[\s\r\n]+/m.exec(source)

  return match != null ? match[0].length : 0
}

export function getFilenameForNewComponent(
  context: PluginContext,
  directory: string,
  usedNames = new Set<string>(),
): string {
  let name = 'Component0'
  let fileName = Path.posix.join(directory, 'Component0.vue')
  let index = 0

  if (context.serviceHost.directoryExists(directory)) {
    const files = new Set(
      context.serviceHost.readDirectory(directory, ['.vue'], [], [], 1),
    )

    while (files.has(fileName) || usedNames.has(name)) {
      name = `Component${++index}`
      fileName = Path.posix.join(directory, `${name}.vue`)
    }
  }

  return fileName
}

export function indent(
  code: string,
  size: number = 2,
  prefix: boolean = true,
): string {
  const text = ' '.repeat(size)

  return (prefix ? text : '') + code.split('\n').join('\n' + text)
}

export function getCode(...lines: Array<string | string[]>): string {
  return lines.flat().join('\n')
}

export function isSpanInSourceRange(
  span: TS.TextSpan,
  range?: SourceRange,
): boolean {
  if (range == null) return false

  return (
    range.start.offset <= span.start &&
    span.start + span.length <= range.end.offset
  )
}

export function isTextRangeInSourceRange(
  textRange: number | TS.TextRange,
  range?: SourceRange,
): boolean {
  if (range == null) return false
  const span: TS.TextSpan =
    typeof textRange === 'number'
      ? { start: textRange, length: 0 }
      : { start: textRange.pos, length: textRange.end - textRange.pos }

  return isSpanInSourceRange(span, range)
}

export function getScriptFileName(document: VueTextDocument): string {
  if (document.descriptor.scriptSetup != null) {
    return document.getDocumentFileName(SCRIPT_SETUP_BLOCK_SELECTOR)
  } else {
    return document.getDocumentFileName(SCRIPT_BLOCK_SELECTOR)
  }
}
