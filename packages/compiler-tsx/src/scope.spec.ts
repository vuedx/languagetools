import { baseParse } from "@vue/compiler-core"
import { withScope } from "./scope"

describe('scope', () => {
  test('should set scope', () => {
    const ast = baseParse('<div v-for="(foo, index) of foos">{{ foo * 2 }}</div>')

    withScope(ast)
  })
  
  test('should set scope for model', () => {
    const ast = baseParse('<div v-for="(foo, index) of foos">{{ foo * 2 }}<input v-model="bar" /></div>')

    withScope(ast)
  })
})