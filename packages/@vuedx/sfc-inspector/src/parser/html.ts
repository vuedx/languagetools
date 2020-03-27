import { baseParse } from '@vue/compiler-core'

export function parse(source: string, sourceFilename: string) {
  return baseParse(source)
}
