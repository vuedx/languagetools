import type { ElementNode, ParserOptions, TextModes } from '@vue/compiler-core'
import {
  isHTMLTag,
  isRawTextContainer,
  isSVGTag,
  isVoidTag,
} from '@vuedx/shared'
import { NodeTypes } from '@vuedx/template-ast-types'
import { decodeHtml } from './decodeEntities'

export const enum DOMNamespaces {
  HTML = 0,
  SVG,
  MATH_ML,
}

export const parserOptions: ParserOptions = {
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
  isPreTag: (tag) => tag === 'pre',
  decodeEntities: decodeHtml,
  isBuiltInComponent: () => {},
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag: string, parent: ElementNode | undefined): DOMNamespaces {
    let ns = parent != null ? parent.ns : DOMNamespaces.HTML

    if (parent != null && ns === DOMNamespaces.MATH_ML) {
      if (parent.tag === 'annotation-xml') {
        if (tag === 'svg') {
          return DOMNamespaces.SVG
        }
        if (
          parent.props.some(
            (a) =>
              a.type === NodeTypes.ATTRIBUTE &&
              a.name === 'encoding' &&
              a.value != null &&
              (a.value.content === 'text/html' ||
                a.value.content === 'application/xhtml+xml'),
          )
        ) {
          ns = DOMNamespaces.HTML
        }
      } else if (
        /^m(?:[ions]|text)$/.test(parent.tag) &&
        tag !== 'mglyph' &&
        tag !== 'malignmark'
      ) {
        ns = DOMNamespaces.HTML
      }
    } else if (parent != null && ns === DOMNamespaces.SVG) {
      if (
        parent.tag === 'foreignObject' ||
        parent.tag === 'desc' ||
        parent.tag === 'title'
      ) {
        ns = DOMNamespaces.HTML
      }
    }

    if (ns === DOMNamespaces.HTML) {
      if (tag === 'svg') {
        return DOMNamespaces.SVG
      }
      if (tag === 'math') {
        return DOMNamespaces.MATH_ML
      }
    }
    return ns
  },

  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode({ tag, ns }: ElementNode): TextModes {
    if (ns === DOMNamespaces.HTML) {
      if (tag === 'textarea' || tag === 'title') {
        return 1 /* TextModes.RCDATA */
      }
      if (isRawTextContainer(tag)) {
        return 2 /* TextModes.RAWTEXT */
      }
    }
    return 0 /* TextModes.DATA */
  },
}
