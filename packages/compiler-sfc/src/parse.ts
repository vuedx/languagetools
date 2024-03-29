import type { ElementNode } from '@vue/compiler-core'
import { parse as fallback } from '@vue/compiler-dom'
import type {
  CompilerError,
  SFCBlock,
  SFCParseOptions,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vue/compiler-sfc'
import { first, last } from '@vuedx/shared'
import { NodeTypes } from '@vuedx/template-ast-types'

export interface SFCParseResult {
  descriptor: SFCDescriptor
  errors: Array<CompilerError | SyntaxError>
}

export interface SFCDescriptor {
  script: SFCScriptBlock | null
  scriptSetup: SFCScriptBlock | null
  template: SFCTemplateBlock | null
  styles: SFCStyleBlock[]
  customBlocks: SFCBlock[]
}

export type Parser = Pick<Required<SFCParseOptions>['compiler'], 'parse'>

let isParsingBrokenTemplate = false

export function parse(
  source: string,
  compiler: Parser = {
    parse: fallback,
  },
): SFCParseResult {
  const descriptor: SFCDescriptor = {
    script: null,
    scriptSetup: null,
    template: null,
    styles: [],
    customBlocks: [],
  }
  const errors: Array<CompilerError | SyntaxError> = []
  const ast = compiler.parse(source, {
    // there are no components at SFC parsing level
    isNativeTag: () => true,
    decodeEntities: (string) => string,
    // preserve all whitespace
    isPreTag: () => true,
    getTextMode: ({ tag, props }, parent) => {
      // all top level elements except <template> are parsed as raw text
      // containers
      if (
        (parent == null && tag !== 'template') ||
        // <template lang="xxx"> should also be treated as raw text
        (tag === 'template' &&
          props.some(
            (p) =>
              p.type === NodeTypes.ATTRIBUTE &&
              p.name === 'lang' &&
              p.value != null &&
              p.value.content.length > 0 &&
              p.value.content !== 'html',
          ))
      ) {
        return 2 /* RAWTEXT */
      } else {
        return 0 /* DATA */
      }
    },
    onError: (e) => {
      errors.push(e)
    },
  })

  ast.children.forEach((node) => {
    if (node.type !== 1 /* ELEMENT */) {
      return
    }

    switch (node.tag) {
      case 'template':
        if (descriptor.template == null) {
          descriptor.template = createBlock(node, source) as SFCTemplateBlock
        } else {
          errors.push(createDuplicateBlockError(node))
        }
        break
      case 'script':
        {
          const scriptBlock = createBlock(node, source) as SFCScriptBlock
          const isSetup = scriptBlock.attrs['setup'] != null
          if (isSetup) {
            if (descriptor.scriptSetup == null) {
              descriptor.scriptSetup = scriptBlock
            } else {
              errors.push(createDuplicateBlockError(node, isSetup))
            }
          } else {
            if (descriptor.script == null) {
              descriptor.script = scriptBlock
            } else {
              errors.push(createDuplicateBlockError(node, isSetup))
            }
          }
        }
        break
      case 'style':
        {
          const styleBlock = createBlock(node, source) as SFCStyleBlock
          descriptor.styles.push(styleBlock)
        }
        break
      default:
        descriptor.customBlocks.push(createBlock(node, source))
        break
    }
  })

  if (descriptor.template != null && !isParsingBrokenTemplate) {
    const start = descriptor.template.loc.start.offset
    const end = source.lastIndexOf('</template')
    if (end < descriptor.template.loc.end.offset) {
      // There is an parsing error in the template.
      const proxy =
        source.slice(0, start) +
        placeholder(source.slice(start, end)) +
        source.slice(end)

      isParsingBrokenTemplate = true
      try {
        const result = parse(proxy, compiler)

        if (result.descriptor.template != null) {
          result.descriptor.template.content = source.slice(start, end)
          result.descriptor.template.loc.source = source.slice(start, end)
        }

        return result
      } finally {
        isParsingBrokenTemplate = false
      }
    }
  }

  if (descriptor.scriptSetup != null) {
    if (descriptor.scriptSetup.src != null) {
      errors.push(
        new SyntaxError(
          `<script setup> cannot use the "src" attribute because ` +
            `its syntax will be ambiguous outside of the component.`,
        ),
      )
      descriptor.scriptSetup = null
    }
    if (descriptor.script?.src != null) {
      errors.push(
        new SyntaxError(
          `<script> cannot use the "src" attribute when <script setup> is ` +
            `also present because they must be processed together.`,
        ),
      )
      descriptor.script = null
    }
  }

  return { descriptor, errors }
}
function createDuplicateBlockError(
  node: ElementNode,
  isScriptSetup = false,
): CompilerError {
  const err = new SyntaxError(
    `Single file component can contain only one <${node.tag}${
      isScriptSetup ? ` setup` : ``
    }> element`,
  ) as CompilerError
  err.loc = node.loc
  return err
}
function createBlock(node: ElementNode, source: string): SFCBlock {
  const type = node.tag
  let { start, end } = node.loc
  let content = ''
  if (node.children.length > 0) {
    start = first(node.children).loc.start
    end = last(node.children).loc.end
    content = source.slice(start.offset, end.offset)
  } else {
    const offset = node.loc.source.indexOf(`</`)
    if (offset > -1) {
      start = {
        line: start.line,
        column: start.column + offset,
        offset: start.offset + offset,
      }
    }
    end = { ...start }
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
  node.props.forEach((p) => {
    if (p.type === NodeTypes.ATTRIBUTE) {
      attrs[p.name] =
        p.value != null && p.value.content.trim() !== ''
          ? p.value.content
          : true

      if (p.name === 'lang') {
        if (p.value != null) block.lang = p.value.content
      } else if (p.name === 'src') {
        if (p.value != null) block.src = p.value.content
      } else if (type === 'style') {
        if (p.name === 'scoped') {
          ;(block as SFCStyleBlock).scoped = true
        } else if (p.name === 'module') {
          ;(block as SFCStyleBlock).module = attrs[p.name]
        }
      } else if (type === 'script' && p.name === 'setup') {
        ;(block as SFCScriptBlock).setup = attrs['setup']
      }
    }
  })
  return block
}

function placeholder(content: string): string {
  let output = ''
  const nl = '\n'.charCodeAt(0)
  for (let i = 0; i < content.length; i++) {
    output += content.charCodeAt(i) === nl ? '\n' : ' '
  }
  return output
}
