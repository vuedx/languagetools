import 'reflect-metadata'
import { Position, VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import {
  TemplateContextKind,
  TemplateContextService,
} from './TemplateContextService'
import * as typescript from 'typescript/lib/tsserverlibrary'

describe(TemplateContextService, () => {
  const service = new TemplateContextService()
  function createDocument(text: string): VueSFCDocument {
    return VueSFCDocument.create(
      'example.vue',
      `<template>\n${text}\n</template>`,
      { typescript },
    )
  }

  function getContext(code: string, position?: Position) {
    const document = createDocument(code)
    position ??= document.original.positionAt(
      code.length + '<template>\n'.length,
    )
    const context = service.getContext(
      document,
      document.original.offsetAt(position),
    )
    return context
  }

  beforeAll(() => {
    jest.spyOn(console, 'debug').mockImplementation()
  })

  test('Tag', () => {
    expect(getContext(`<`)).toMatchObject({
      kind: TemplateContextKind.Tag,
      tag: 'open',
    })
    expect(getContext(`<div`)).toMatchObject({
      kind: TemplateContextKind.Tag,
      tag: 'open',
    })
    expect(getContext(`<div></div`)).toMatchObject({
      kind: TemplateContextKind.Tag,
      tag: 'close',
    })
    expect(getContext(`<div></`)).toMatchObject({
      kind: TemplateContextKind.Tag,
      tag: 'close',
    })

    expect(getContext(`<div ></div>`, { line: 1, character: 5 })).toMatchObject(
      {
        kind: TemplateContextKind.Attribute,
      },
    )
    expect(getContext(`<div />`, { line: 1, character: 5 })).toMatchObject({
      kind: TemplateContextKind.Attribute,
    })
  })

  test('Attribute', () => {
    expect(getContext(`<div `)).toMatchObject({
      kind: TemplateContextKind.Attribute,
    })
    expect(getContext(`<div foo`)).toMatchObject({
      kind: TemplateContextKind.Attribute,
    })
    expect(getContext(`<div foo="`)).toMatchObject({
      kind: TemplateContextKind.AttributeValue,
    })
    expect(getContext(`<div foo="bar"`)).toMatchObject({
      kind: TemplateContextKind.AttributeValue,
    })
    expect(getContext(`<div foo="bar" `)).toMatchObject({
      kind: TemplateContextKind.Attribute,
    })
    expect(getContext(`<div v-b`)).toMatchObject({
      kind: TemplateContextKind.DirectiveName,
    })
  })

  test('Prop', () => {
    expect(getContext(`<div :`)).toMatchObject({
      kind: TemplateContextKind.PropName,
    })
    expect(getContext(`<div :foo`)).toMatchObject({
      kind: TemplateContextKind.PropName,
    })
    expect(getContext(`<div v-bind:`)).toMatchObject({
      kind: TemplateContextKind.PropName,
    })
    expect(getContext(`<div v-bind:foo`)).toMatchObject({
      kind: TemplateContextKind.PropName,
    })
  })

  test('Event', () => {
    expect(getContext(`<div @`)).toMatchObject({
      kind: TemplateContextKind.EventName,
    })
    expect(getContext(`<div @foo`)).toMatchObject({
      kind: TemplateContextKind.EventName,
    })
    expect(getContext(`<div v-on:`)).toMatchObject({
      kind: TemplateContextKind.EventName,
    })
    expect(getContext(`<div v-on:foo`)).toMatchObject({
      kind: TemplateContextKind.EventName,
    })
  })

  test('Directive', () => {
    expect(getContext(`<div v-`)).toMatchObject({
      kind: TemplateContextKind.DirectiveName,
    })
    expect(getContext(`<div v-foo`)).toMatchObject({
      kind: TemplateContextKind.DirectiveName,
    })
    expect(getContext(`<div v-foo:`)).toMatchObject({
      kind: TemplateContextKind.DirectiveArg,
    })
    expect(getContext(`<div v-foo:bar`)).toMatchObject({
      kind: TemplateContextKind.DirectiveArg,
    })
    expect(getContext(`<div v-foo:bar.`)).toMatchObject({
      kind: TemplateContextKind.DirectiveModifier,
    })
    expect(getContext(`<div v-foo:bar.baz`)).toMatchObject({
      kind: TemplateContextKind.DirectiveModifier,
    })
    expect(getContext(`<div v-foo:bar=`)).toMatchObject({
      kind: TemplateContextKind.DirectiveValue,
    })
    expect(getContext(`<div v-foo:bar="`)).toMatchObject({
      kind: TemplateContextKind.DirectiveValue,
    })
    expect(getContext(`<div v-foo:bar="baz"`)).toMatchObject({
      kind: TemplateContextKind.DirectiveValue,
    })

    expect(getContext(`<div #`)).toMatchObject({
      kind: TemplateContextKind.DirectiveArg,
    })

    expect(getContext(`<div #foo`)).toMatchObject({
      kind: TemplateContextKind.DirectiveArg,
    })

    expect(getContext(`<div #foo=`)).toMatchObject({
      kind: TemplateContextKind.DirectiveValue,
    })
  })

  test('Interpolation', () => {
    expect(getContext(`{{foo}}`, { line: 1, character: 5 })).toMatchObject({
      kind: TemplateContextKind.Interpolation,
    })
  })
})
