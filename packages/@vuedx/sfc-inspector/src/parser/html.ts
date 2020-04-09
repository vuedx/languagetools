import { baseParse, RootNode } from '@vue/compiler-core'

export function parse(source: string, sourceFilename: string): RootNode {
  return baseParse(source)
}
