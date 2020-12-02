import { isPlainElementNode, t } from '@vuedx/template-ast-types'
import { TS } from '../../interfaces'
import { RenameProvider } from './abstract'

export const RenameElementTag: RenameProvider = {
  version: '*',
  canRename(config, fileName, position) {
    const { node } = config.helpers.findNodeAtPosition(fileName, position)
    if (isPlainElementNode(node) && isPositionInTagName(position, node)) {
      return {
        canRename: true,
        displayName: node.tag,
        fullDisplayName: node.tag,
        kind: config.context.typescript.ScriptElementKind.unknown,
        kindModifiers: 'elementTagName',
        triggerSpan: {
          start: node.loc.start.offset + 1,
          length: node.tag.length,
        },
      }
    }
  },
  applyRename(config, fileName, position) {
    const { node, document } = config.helpers.findNodeAtPosition(
      fileName,
      position,
    )
    if (
      isPlainElementNode(node) &&
      isPositionInTagName(position, node) &&
      document != null
    ) {
      const locations: TS.RenameLocation[] = [
        {
          fileName: document.container.fsPath,
          textSpan: {
            start: node.loc.start.offset + 1,
            length: node.tag.length,
          },
        },
      ]

      if (!node.isSelfClosing) {
        locations.push({
          fileName: document.container.fsPath,
          textSpan: {
            start:
              node.loc.start.offset +
              node.loc.source.lastIndexOf('</' + node.tag) +
              2,
            length: node.tag.length,
          },
        })
      }

      return locations
    }
  },
  applyFileRename() {
    return undefined
  },
}

function isPositionInTagName(
  position: number,
  node: t.PlainElementNode,
): boolean {
  return (
    // In start tag.
    position <= node.loc.start.offset + node.tag.length ||
    // In end tag.
    (!node.isSelfClosing &&
      node.loc.start.offset + node.loc.source.lastIndexOf('</') <= position)
  )
}
