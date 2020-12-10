import { isSimpleExpressionNode } from '@vuedx/template-ast-types'
import { RenameProvider } from './abstract'

export const RenameExpression: RenameProvider = {
  version: '*',
  name: 'expression',
  canRename(config, fileName, position, preferences) {
    const { node, document } = config.helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isSimpleExpressionNode(node) && document != null) {
      const mappedPosition = document.getGeneratedOffsetAt(position)

      if (mappedPosition?.offset != null) {
        const result = config.service.getRenameInfo(
          fileName,
          mappedPosition.offset,
          preferences,
        )

        if (result.canRename) {
          if (result.displayName === '$event') {
            return {
              canRename: false,
              localizedErrorMessage:
                '$event is builtin variable, it cannot be renamed.',
            }
          }

          result.triggerSpan = config.helpers.getTextSpan(
            document,
            result.triggerSpan,
          )
        }

        return result
      }

      return {
        canRename: false,
        localizedErrorMessage:
          'Cannot find mapped position in render function.',
      }
    }
  },
  applyRename(config, fileName, position, findInStrings, findInComments) {
    const { node, document } = config.helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isSimpleExpressionNode(node) && document != null) {
      const mappedPosition = document.getGeneratedOffsetAt(position)

      if (mappedPosition?.offset != null) {
        const result = config.service
          .findRenameLocations(
            fileName,
            mappedPosition.offset,
            findInStrings,
            findInComments,
          )
          ?.slice()

        return result
      }
    }
  },
  applyFileRename() {
    return undefined
  },
}
