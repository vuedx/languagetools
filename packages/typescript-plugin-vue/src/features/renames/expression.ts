import { RenameProvider } from './abstract';
import { isSimpleExpressionNode } from 'packages/template-ast-types/src';
import { getContainingFile } from 'packages/vue-virtual-textdocument/src';

export const RenameExpression: RenameProvider = {
  version: '*',
  canRename(config, fileName, position, preferences) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);

    if (isSimpleExpressionNode(node) && document) {
      const mappedPosition = document.getGeneratedOffsetAt(position);

      if (mappedPosition?.offset) {
        //
        const result = config.service.getRenameInfo(fileName, mappedPosition.offset, preferences);

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

      return {
        canRename: false,
        localizedErrorMessage: 'Cannot find mapped position in render function.',
      };
    }
  },
  applyRename(config, fileName, position, findInStrings, findInComments) {
    const { node, document } = config.helpers.findNodeAtPosition(fileName, position);

    if (isSimpleExpressionNode(node) && document) {
      const mappedPosition = document.getGeneratedOffsetAt(position);

      if (mappedPosition?.offset) {
        const result = config.service
          .findRenameLocations(fileName, mappedPosition.offset, findInStrings, findInComments)
          ?.slice();

        console.log(
          'Try renaming expression in ' +
            fileName +
            ' source =>\n' +
            document.getText() +
            '\n at ' +
            document.getText().substr(mappedPosition.offset, mappedPosition.length) +
            ' result ' +
            JSON.stringify(result)
        );

        return result;
      }
    }
  },
  applyFileRename() {
    return undefined;
  },
};
