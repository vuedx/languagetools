import { parse } from '@babel/parser'
import type * as T from '@babel/types'
import { findScopeBindings } from '../src'

const getAST = (code: string) =>
  parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'importAssertions'],
    errorRecovery: true,
  }).program.body as unknown as T.Statement[]

describe('findScopeBindings', () => {
  test(`imports`, () => {
    const ast = getAST(
      `
      import { a } from 'a'
      import { b as c } from 'b'
      import * as d from 'd'
      import { default as e } from 'e'
      import f, { g } from 'f'
      import h from 'h'
      import type i from 'i'
      import type { j } from 'j'
      import k from 'k.css' assert { type: 'text/css' }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'c', 'd', 'e', 'f', 'g', 'h', 'k']),
    )
  })

  test(`declarations`, () => {
    const ast = getAST(
      `
      var a, b = {}
      let c, d = {}
      const e, f = {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'c', 'd', 'e', 'f']),
    )
  })

  test(`destructure object`, () => {
    const ast = getAST(
      `
      const { 
          a, 
          b = a, 
          c: { d }, 
          e: [f], 
          g: { h: { i } },
          [a + d]: k,
          ...j
      } = {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'd', 'f', 'i', 'j', 'k']),
    )
  })

  test(`destructure array`, () => {
    const ast = getAST(
      `
      const [ 
          a, 
          b = a, 
          { d }, 
          [f], 
          { h: { i } },
          ...j
      ] = []
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'd', 'f', 'i', 'j']),
    )
  })

  test(`functions`, () => {
    const ast = getAST(
      `
      function a() {}
      const b = function() {}
      const c = () => {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'c']),
    )
  })
  test(`ignore types`, () => {
    const ast = getAST(
      `
      type a = {}
      interface b {}
      abstract class c {}
      declare const d: string
      declare function e(): void
      enum f { }
      const enum g { }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['c', 'd', 'e', 'f', 'g']),
    )
  })

  test(`ignore nested`, () => {
    const ast = getAST(
      `
      function a() {
        const b = {}
      }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(expect.arrayContaining(['a']))
  })
})
