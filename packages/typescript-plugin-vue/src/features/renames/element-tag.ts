import { isPlainElementNode, PlainElementNode } from '@vuedx/template-ast-types'
import type { TS } from '../../interfaces'
import type { RenameProvider } from './abstract'

export const RenameElementTag: RenameProvider = {
  version: '*',
  name: 'element-tag',
  canRename(config, fileName, position) {
    const { node } = config.helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )
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

    return undefined
  },
  applyRename(config, fileName, position) {
    const { node, document } = config.helpers.findTemplateNodeAtPosition(
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

    return undefined
  },
  applyFileRename() {
    return undefined
  },
}

function isPositionInTagName(
  position: number,
  node: PlainElementNode,
): boolean {
  return (
    // In start tag.
    position <= node.loc.start.offset + node.tag.length ||
    // In end tag.
    (!node.isSelfClosing &&
      node.loc.start.offset + node.loc.source.lastIndexOf('</') <= position)
  )
}
