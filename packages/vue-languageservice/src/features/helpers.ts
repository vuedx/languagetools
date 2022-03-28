import type {
  TextSpan,
  VueBlockDocument,
} from '@vuedx/vue-virtual-textdocument'

export interface TextRange {
  start: number
  end: number
  length: number
}

export const TemplateGlobals = {
  find(file: VueBlockDocument, offset: number): TextRange | null {
    if (file.generated == null) return null
    const position = file.generated.positionAt(offset)
    const start = file.generated.offsetAt({ line: position.line, character: 0 })
    const end = start + file.generated.getText().substr(start).indexOf('\n')
    const length = end - start
    return { start, end, length }
  },
  findLHS(file: VueBlockDocument, offset: number): TextRange | null {
    if (file.generated == null) return null
    const range = TemplateGlobals.find(file, offset)
    if (range == null) return null
    const line = file.generated.getText().substring(range.start, range.end)
    const start = line.indexOf('let ') + 4
    const end = start + line.indexOf('=') - 1
    const length = end - start

    return { start: range.start + start, end: range.end + end, length }
  },
  findRHS(file: VueBlockDocument, offset: number): TextRange | null {
    if (file.generated == null) return null
    if (file.generated == null) return null
    const range = TemplateGlobals.find(file, offset)
    if (range == null) return null
    const line = file.generated.getText().substring(range.start, range.end)
    const start = line.indexOf('_ctx.') + 5
    const end = range.end - range.start
    const length = end - start

    return { start: range.start + start, end: range.end + end, length }
  },
}

export function findLinkedTextSpan(
  block: VueBlockDocument,
  textSpan: TextSpan,
  contextSpan?: TextSpan,
): { fileName: string; textSpan: TextSpan; contextSpan: TextSpan } | null {
  if (block.generated == null) return null
  const code = block.generated.getText()
  if (contextSpan == null) {
    if (block.block.type === 'template') {
      const start = block.generated.offsetAt({
        line: block.generated.positionAt(textSpan.start).line,
        character: 0,
      })
      const line = code.slice(start).split('\n', 1)[0] as string
      contextSpan = {
        start: start + (line.length - line.trimStart().length),
        length: line.trim().length,
      }
    } else {
      contextSpan = textSpan
    }
  }

  const context = code.slice(
    contextSpan.start,
    contextSpan.start + contextSpan.length,
  )
  const doc = block.parent

  if (block.block.type === 'template') {
    const target = doc.descriptor.scriptSetup ?? doc.descriptor.script
    if (target == null) return null
    const script = doc.getDoc(target)
    if (script == null || script.generated == null || script.tsFileName == null)
      return null
    const type = getContextSpanTypeInTemplate(context)
    if (type == null) return null
    const identifier = context
      .slice(getLeadingKeywordLength(context))
      .trim()
      .split(' ', 1)[0] as string
    const source = script.generated.getText()
    const range = findDeclarationOffsets(source)[type]
    const offset = source
      .slice(range.start, range.end)
      .indexOf(`${identifier}: ${identifier}`)
    if (offset < 0) return null

    const start = range.start + offset
    const length = identifier.length * 2 + 2

    return {
      fileName: script.tsFileName,
      textSpan: {
        start: start + (length - identifier.length),
        length: identifier.length,
      },
      contextSpan: {
        start: start,
        length: length,
      },
    }
  } else {
    if (doc.descriptor.template == null) return null
    const template = doc.getDoc(doc.descriptor.template)
    if (
      template == null ||
      template.generated == null ||
      template.tsFileName == null
    ) {
      return null
    }

    const type = findDeclarationRangeTypeInScript(code, contextSpan.start)
    if (type == null) return null

    const identifier = context.trim().split(':', 1)[0] as string
    console.debug('findLinkedTextSpan: ' + JSON.stringify({ identifier, type }))
    const query =
      type === 'component'
        ? `const ${identifier} = VueDX.internal.resolveComponent(`
        : type === 'directive'
        ? `const ${identifier} = VueDX.internal.resolveDirective(`
        : `let ${identifier} = __VueDX_ctx.${identifier}`
    const source = template.generated.getText()
    const start = source.indexOf(query)
    if (start < 0) return null
    const line = source.slice(start).split('\n', 1)[0] as string
    const offset = getLeadingKeywordLength(line)

    return {
      fileName: template.tsFileName,
      textSpan: { start: start + offset, length: identifier.length },
      contextSpan: { start, length: line.length },
    }
  }
}

function findDeclarationRangeTypeInScript(
  code: string,
  offset: number,
): 'component' | 'directive' | 'binding' | null {
  const offsets = findDeclarationOffsets(code)

  if (offset > offsets.binding.start) return 'binding'
  if (offset > offsets.directive.start) return 'directive'
  if (offset > offsets.component.start) return 'component'
  return null
}

function getContextSpanTypeInTemplate(
  context: string,
): 'component' | 'directive' | 'binding' | null {
  if (context.includes('VueDX.internal.resolveComponent')) {
    return 'component'
  } else if (context.includes('VueDX.internal.resolveDirective')) {
    return 'directive'
  } else if (context.includes('__VueDX_ctx.')) {
    return 'binding'
  } else {
    return null
  }
}

function findDeclarationOffsets(
  code: string,
): Record<
  'component' | 'directive' | 'binding',
  { start: number; end: number }
> {
  const component = code.indexOf('export const __VueDX_components ')
  const directive = code.indexOf('export const __VueDX_directives ')
  const binding = code.indexOf('export const __VueDX_DefineComponent ')

  return {
    component: { start: component, end: directive },
    directive: { start: directive, end: binding },
    binding: { start: binding, end: code.length },
  }
}

function getLeadingKeywordLength(text: string): number {
  return text.startsWith('let ') ? 4 : text.startsWith('const ') ? 6 : 0
}
