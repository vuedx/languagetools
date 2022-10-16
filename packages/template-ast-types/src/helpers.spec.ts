import { parse } from '../../compiler-tsx/src/template/parse'
import { findTemplateNodeAt } from './helpers'
import { NodeTypes } from './node'

describe(findTemplateNodeAt, () => {
  const options = { onError: () => {} }

  for (const code of [
    '<div @',
    '<div v-on',
    '<div v-on:',
    '<div :',
    '<div ^',
    '<div .',
    '<div v-bind',
    '<div v-bind:',
  ]) {
    it(code, () => {
      const ast = parse(code, options)
      const { node } = findTemplateNodeAt(ast, code.length)
      expect(node?.type).toBe(NodeTypes.DIRECTIVE)
    })
  }

  for (const code of [
    '<div @click ',
    '<div v-on:click ',
    '<div :click ',
    '<div ^click ',
    '<div .click ',
    '<div v-bind:click ',
  ]) {
    it(code, () => {
      const ast = parse(code, options)
      const { node, ancestors } = findTemplateNodeAt(ast, code.length - 1)
      expect(node?.type).toBe(NodeTypes.SIMPLE_EXPRESSION)
      const ancestor = ancestors[ancestors.length - 1]
      expect(ancestor.node.type).toBe(NodeTypes.DIRECTIVE)
    })
  }

  for (const code of [
    '<div @[click] ',
    '<div v-on:[click] ',
    '<div :[click] ',
    '<div ^[click] ',
    '<div .[click] ',
    '<div v-bind:[click] ',
  ]) {
    it(code, () => {
      const ast = parse(code, options)
      const { node, ancestors } = findTemplateNodeAt(ast, code.length - 2)
      expect(node?.type).toBe(NodeTypes.SIMPLE_EXPRESSION)
      const ancestor = ancestors[ancestors.length - 1]
      expect(ancestor.node.type).toBe(NodeTypes.DIRECTIVE)
    })
  }
})
