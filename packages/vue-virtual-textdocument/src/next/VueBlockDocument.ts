import type { SFCBlock, SFCDescriptor } from '@vuedx/compiler-sfc'
import { SourceMapConsumer } from 'source-map'
import { Range, TextDocument } from 'vscode-languageserver-textdocument'
import { annotations, BlockTransformer } from './BlockTransformer'
import type { VueSFCDocument } from './VueSFCDocument'

export class VueBlockDocument {
  public readonly source: TextDocument
  public readonly generated: TextDocument
  public readonly sourceMap: SourceMapConsumer | null

  public readonly sourceRange: Range
  public readonly ignoredZones: Array<{
    start: number
    end: number
    range: Range
  }>

  public readonly tsxCompletionsOffset: number | null
  public readonly tsCompletionsOffset: number | null

  public get block(): SFCBlock {
    return this.blockGetter()
  }

  public get descriptor(): SFCDescriptor {
    return this.descriptorGetter()
  }

  constructor(
    public readonly id: string,
    public readonly parent: VueSFCDocument,
    private readonly blockGetter: () => SFCBlock,
    private readonly descriptorGetter: () => SFCDescriptor,
    private readonly transform: BlockTransformer,
  ) {
    const block = blockGetter()
    const descriptor = descriptorGetter()
    // TODO: Support [src] attribute.
    this.source = TextDocument.create(
      id,
      block.lang ??
        (block.type === 'template'
          ? 'html'
          : block.type === 'script'
          ? 'js'
          : block.type === 'style'
          ? 'css'
          : block.type),
      0,
      block.content,
    )

    const { code, map } = this.transform(block.content, id, {
      block,
      document: parent,
      descriptor,
      annotations,
    })

    if (map != null) {
      this.sourceMap = new SourceMapConsumer(map)
    } else {
      this.sourceMap = null
    }

    const isTSX = id.endsWith('.tsx')

    this.generated = TextDocument.create(id, isTSX ? 'tsx' : 'ts', 0, code)

    this.sourceRange = {
      start: {
        line: block.loc.start.line,
        character: block.loc.start.column,
      },
      end: {
        line: block.loc.start.line,
        character: block.loc.start.column,
      },
    }

    let lastIndex = 0
    this.ignoredZones = []
    while (lastIndex < code.length) {
      const start = code.indexOf(annotations.diagnosticsIgnore.start, lastIndex)
      if (start < 0) break
      let end = code.indexOf(annotations.diagnosticsIgnore.end, start)
      if (end < 0) {
        end = code.length
      }

      this.ignoredZones.push({
        start,
        end,
        range: {
          start: this.generated.positionAt(start),
          end: this.generated.positionAt(end),
        },
      })

      lastIndex = end
    }

    this.tsxCompletionsOffset = null
    if (isTSX) {
      const tsxOffset = code.indexOf(annotations.tsxCompletions)
      if (tsxOffset >= 0) {
        const prefixLength = tsxOffset + annotations.tsxCompletions.length
        this.tsxCompletionsOffset = prefixLength + 1 // TODO: Maybe use next index of "<""
      }
    }

    const tsOffset = code.indexOf(annotations.tsCompletions)
    if (tsOffset >= 0) {
      this.tsCompletionsOffset = tsOffset
    } else {
      this.tsCompletionsOffset = null
    }
  }
}
