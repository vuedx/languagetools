export {
  Position,
  Range,
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
export type {
  BlockTransformer,
  BlockTransformerOptions,
  TransformerError,
} from './BlockTransformer'
export {
  builtins as transformers,
  annotations,
  Annotations,
} from './BlockTransformer'
export { VueBlockDocument, TextSpan } from './VueBlockDocument'
export { VueSFCDocument } from './VueSFCDocument'
export type { VueSFCDocumentOptions } from './VueSFCDocument'
