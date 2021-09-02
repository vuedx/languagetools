import type { VueBlockDocument } from '@vuedx/vue-virtual-textdocument'

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
