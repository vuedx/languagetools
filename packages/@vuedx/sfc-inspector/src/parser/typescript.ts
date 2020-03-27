import { ParserOptions, parse as baseParse } from '@babel/parser'
import { OPTIONS as baseOptions } from './javascript'

const OPTIONS: ParserOptions = {
  ...baseOptions,
  plugins: [...baseOptions.plugins!, 'typescript'],
}

export function parse(source: string, sourceFilename: string) {
  return baseParse(source, { ...OPTIONS, sourceFilename })
}
