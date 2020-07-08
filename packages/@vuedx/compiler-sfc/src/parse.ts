import {
  baseParse,
  CompilerError,
  ElementNode,
  NodeTypes,
  SourceLocation,
  TextModes,
  Namespace,
} from '@vue/compiler-core'
import { RawSourceMap, SourceMapGenerator } from 'source-map'
import { generateCodeFrame } from './codeframe'

export { CompilerError } from '@vue/compiler-core'
export { RawSourceMap } from 'source-map'

export interface SFCParseOptions {
  filename?: string
  sourceMap?: boolean
  sourceRoot?: string
  pad?: boolean | 'line' | 'space'
  shouldPadTemplate?: boolean
}

export interface SFCBlock {
  type: string
  content: string
  attrs: Record<string, string | true>
  loc: SourceLocation
  map?: RawSourceMap
  lang?: string
  src?: string
}

export interface SFCTemplateBlock extends SFCBlock {
  type: 'template'
  functional?: boolean
}

export interface SFCScriptBlock extends SFCBlock {
  type: 'script'
}

export interface SFCStyleBlock extends SFCBlock {
  type: 'style'
  scoped?: boolean
  module?: string | boolean
}

export interface SFCDescriptor {
  filename: string
  template: SFCTemplateBlock | null
  script: SFCScriptBlock | null
  styles: SFCStyleBlock[]
  customBlocks: SFCBlock[]
}

export interface SFCParseResult {
  descriptor: SFCDescriptor
  errors: CompilerError[]
}

export function parse(
  source: string,
  {
    sourceMap = true,
    filename = 'component.vue',
    sourceRoot = '',
    pad = false,
    shouldPadTemplate = false,
  }: SFCParseOptions = {}
): SFCParseResult {
  const descriptor: SFCDescriptor = {
    filename,
    template: null,
    script: null,
    styles: [],
    customBlocks: [],
  }

  const errors: CompilerError[] = []
  const ast = baseParse(source, {
    isNativeTag() {
      return true
    },
    isPreTag() {
      return true
    },
    // @ts-ignore - DTS false positive fail.
    getTextMode(tag, _ns, parent) {
      if (!parent && tag !== 'template') {
        return TextModes.RAWTEXT
      } else {
        return TextModes.DATA
      }
    },
    onError(e) {
      errors.push(e)
    },
  })

  ast.children.forEach((node) => {
    if (node.type !== NodeTypes.ELEMENT) {
      return
    }
    if (!node.children.length && !hasSrc(node)) {
      return
    }
    switch (node.tag) {
      case 'template':
        if (!descriptor.template) {
          descriptor.template = createBlock(
            node,
            source,
            shouldPadTemplate ? pad : false
          ) as SFCTemplateBlock
        } else {
          warnDuplicateBlock(source, filename, node)
        }
        break
      case 'script':
        if (!descriptor.script) {
          descriptor.script = createBlock(node, source, pad) as SFCScriptBlock
        } else {
          warnDuplicateBlock(source, filename, node)
        }
        break
      case 'style':
        descriptor.styles.push(createBlock(node, source, pad) as SFCStyleBlock)
        break
      default:
        descriptor.customBlocks.push(createBlock(node, source, pad))
        break
    }
  })

  if (sourceMap) {
    const genMap = (block: SFCBlock | null) => {
      if (block && !block.src) {
        block.map = generateSourceMap(
          filename,
          source,
          block.content,
          sourceRoot,
          pad && (block.type !== 'template' || shouldPadTemplate)
            ? block.loc.start.line - 1
            : 0
        )
      }
    }
    genMap(descriptor.template)
    genMap(descriptor.script)
    descriptor.styles.forEach(genMap)
    descriptor.customBlocks.forEach(genMap)
  }

  const result = {
    descriptor,
    errors,
  }

  return result
}

function warnDuplicateBlock(
  source: string,
  filename: string,
  node: ElementNode
) {
  const codeFrame = generateCodeFrame(
    source,
    node.loc.start.offset,
    node.loc.end.offset
  )
  const location = `${filename}:${node.loc.start.line}:${node.loc.start.column}`
  console.warn(
    `Single file component can contain only one ${node.tag} element (${location}):\n\n${codeFrame}`
  )
}

function createBlock(
  node: ElementNode,
  source: string,
  pad: SFCParseOptions['pad']
): SFCBlock {
  const type = node.tag
  let { start, end } = node.loc
  let content = ''
  if (node.children.length) {
    start = node.children[0].loc.start
    end = node.children[node.children.length - 1].loc.end
    content = source.slice(start.offset, end.offset)
  }
  const loc = {
    source: content,
    start,
    end,
  }
  const attrs: Record<string, string | true> = {}
  const block: SFCBlock = {
    type,
    content,
    loc,
    attrs,
  }
  if (pad) {
    block.content = padContent(source, block, pad) + block.content
  }
  node.props.forEach((p) => {
    if (p.type === NodeTypes.ATTRIBUTE) {
      attrs[p.name] = p.value ? p.value.content || true : true
      if (p.name === 'lang') {
        block.lang = p.value && p.value.content
      } else if (p.name === 'src') {
        block.src = p.value && p.value.content
      } else if (type === 'style') {
        if (p.name === 'scoped') {
          ; (block as SFCStyleBlock).scoped = true
        } else if (p.name === 'module') {
          ; (block as SFCStyleBlock).module = attrs[p.name]
        }
      } else if (type === 'template' && p.name === 'functional') {
        ; (block as SFCTemplateBlock).functional = true
      }
    }
  })
  return block
}

const splitRE = /\r?\n/g
const emptyRE = /^(?:\/\/)?\s*$/
const replaceRE = /./g

function generateSourceMap(
  filename: string,
  source: string,
  generated: string,
  sourceRoot: string,
  lineOffset: number
): RawSourceMap {
  const map = new SourceMapGenerator({
    file: filename.replace(/\\/g, '/'),
    sourceRoot: sourceRoot.replace(/\\/g, '/'),
  })
  map.setSourceContent(filename, source)
  generated.split(splitRE).forEach((line, index) => {
    if (!emptyRE.test(line)) {
      map.addMapping({
        source: filename,
        original: {
          line: index + 1 + lineOffset,
          column: 0,
        },
        generated: {
          line: index + 1,
          column: 0,
        },
      })
    }
  })
  return JSON.parse(map.toString())
}

function padContent(
  content: string,
  block: SFCBlock,
  pad: SFCParseOptions['pad']
): string {
  content = content.slice(0, block.loc.start.offset)
  if (pad === 'space') {
    return content.replace(replaceRE, ' ')
  } else {
    const offset = content.split(splitRE).length
    const padChar = block.type === 'script' && !block.lang ? '//\n' : '\n'
    return Array(offset).join(padChar)
  }
}

function hasSrc(node: ElementNode) {
  return node.props.some((p) => {
    if (p.type !== NodeTypes.ATTRIBUTE) {
      return false
    }
    return p.name === 'src'
  })
}
