import { RenameProvider } from './abstract';
import { isSimpleExpressionNode } from 'packages/template-ast-types/src';

export const RenameExpression: RenameProvider = {
  version: '*',
  canRename(config, fileName, position, preferences) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);

    if (isSimpleExpressionNode(node)) {
      const mappedPosition = document.getGeneratedOffsetAt(position);

      if (mappedPosition.offset) {
        const result = config.service.getRenameInfo(fileName, position, preferences);

        if (result.canRename) {
          if (result.displayName === '$event') {
            return {
              canRename: false,
              localizedErrorMessage: '$event is builtin variable, it cannot be renamed.',
            };
          }

          result.triggerSpan = config.helpers.getTextSpan(document, result.triggerSpan);
        }

        return result;
      }
    }
  },
  applyRename(config, fileName, position, findInStrings, findInComments) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);

    if (isSimpleExpressionNode(node)) {
      const mappedPosition = document.getGeneratedOffsetAt(position);

      if (mappedPosition.offset) {
        return config.service.findRenameLocations(fileName, position, findInStrings, findInComments).slice();
      }
    }
  },
  applyFileRename() {
    return undefined;
  },
};
