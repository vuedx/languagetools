import { parse as baseParse, ParserOptions } from '@babel/parser'

export const OPTIONS: ParserOptions = {
  sourceType: 'module',
  allowImportExportEverywhere: false,
  allowReturnOutsideFunction: false,
  allowAwaitOutsideFunction: false,
  allowSuperOutsideMethod: false,
  strictMode: false,
  ranges: true,
  tokens: true,
  plugins: [
    'asyncGenerators',
    'bigInt',
    'classPrivateMethods',
    'classPrivateProperties',
    'classProperties',
    'doExpressions',
    'dynamicImport',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'functionBind',
    'functionSent',
    'importMeta',
    'jsx',
    'nullishCoalescingOperator',
    'numericSeparator',
    'objectRestSpread',
    'optionalCatchBinding',
    'optionalChaining',
    'throwExpressions',
    'decorators-legacy',
  ],
}

export function parse(source: string, sourceFilename: string) {
  return baseParse(source, { ...OPTIONS, sourceFilename })
}
