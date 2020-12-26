import { TS } from '../../../interfaces'
import data from 'vscode-web-custom-data/data/browsers.html-data.json'

const enum TagOrder {
  LocalComponent = '0',
  KnownGlobalComponent = '1',
  GlobalComponent = '2',
  CustomElement = '3',
  HTMLElement = '4',
  SVGElement = '5',
}

const enum AttributeOrder {
  Attribute = '1',
}

interface TagCompletionInfo {
  detail: TS.CompletionEntryDetails
  attributes: TS.CompletionEntry[]
  attributesDetail: ReadonlyMap<string, TS.CompletionEntryDetails>
}

const HTML_ELEMENT_EVENT_NAME_RE = /^on(beforeinput|change|input|invalid)$/

function getAdditionalDocumentation(
  attribute: string,
  element?: string,
): TS.SymbolDisplayPart[] {
  if (attribute.startsWith('on')) {
    const source = HTML_ELEMENT_EVENT_NAME_RE.test(attribute)
      ? 'HTMLElement'
      : 'Element'
    return [
      {
        text: `[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/${source}/${attribute.substr(
          2,
        )}_event) `,
        kind: 'markdown',
      },
    ]
  }

  return []
}

function asMarkdown(content: string): string {
  return content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export const HTML_ELEMENTS: TS.CompletionEntry[] = data.tags.map((tag) =>
  Object.freeze({
    name: tag.name,
    kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
    kindModifiers: '',
    sortText: TagOrder.HTMLElement,
  }),
)

export const HTML_ELEMENTS_BY_NAME = new Map<string, TagCompletionInfo>(
  data.tags.map((tag) => [
    tag.name,
    {
      detail: Object.freeze({
        name: tag.name,
        kind: 'JSX attribute' as TS.ScriptElementKind.memberVariableElement,
        kindModifiers: '',
        displayParts: [],
        documentation: [
          {
            text: asMarkdown(tag.description.value) + '\n\n',
            kind: 'markdown',
          },
          ...tag.references.map((reference) => ({
            text: `[${reference.name}](${reference.url}) `,
            kind: 'markdown',
          })),
        ],
        tags: [],
      }),
      attributes: tag.attributes.map((attribute) =>
        Object.freeze({
          name: attribute.name,
          kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
          kindModifiers: '',
          sortText: AttributeOrder.Attribute,
          source: undefined,
        }),
      ),
      attributesDetail: new Map(
        tag.attributes.map((attribute) => [
          attribute.name,
          Object.freeze({
            name: attribute.name,
            kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
            kindModifiers: '',
            displayParts: [], // TODO: Load valueSet as type definition?
            documentation: [
              typeof attribute.description === 'string'
                ? {
                    text: asMarkdown(attribute.description) + '\n\n',
                    kind: 'markdown',
                  }
                : attribute.description != null
                ? {
                    text: asMarkdown(attribute.description.value) + '\n\n',
                    kind: 'markdown',
                  }
                : { text: '', kind: 'markdown' },
              ...tag.references.map((reference) => ({
                text: `[${reference.name}](${reference.url}#attr-${attribute.name}) `,
                kind: 'markdown',
              })),

              ...getAdditionalDocumentation(attribute.name, tag.name),
            ],
            tags: [],
          }),
        ]),
      ),
    },
  ]),
)

export const GLOBAL_ATTRIBUTES: TS.CompletionEntry[] = data.globalAttributes.map(
  (attribute) =>
    Object.freeze({
      name: attribute.name,
      kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
      kindModifiers: '',
      sortText: AttributeOrder.Attribute,
      source: undefined,
    }),
)

export const GLOBAL_ATTRIBUTES_BY_NAME = new Map<
  string,
  TS.CompletionEntryDetails
>(
  data.globalAttributes.map((attribute) => [
    attribute.name,
    Object.freeze({
      name: attribute.name,
      kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
      kindModifiers: '',
      displayParts: [], // TODO: Load valueSet as type definition?
      documentation: [
        attribute.description != null
          ? {
              text: asMarkdown(attribute.description.value) + '\n\n',
              kind: 'markdown',
            }
          : { text: '', kind: 'markdown' },

        ...(attribute.references ?? []).map((reference) => ({
          text: `[${reference.name}](${reference.url}) `,
          kind: 'markdown',
        })),

        ...getAdditionalDocumentation(attribute.name),
      ],
      tags: [],
    }),
  ]),
)

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = new Set(
  (
    'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,keygen,mark,noindex,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot,webview'
  ).split(','),
)
export const isHTMLTag = (tagName: string): boolean => HTML_TAGS.has(tagName)

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = new Set(
  (
    'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,feDistantLight,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view'
  ).split(','),
)
export const isSVGTag = (tagName: string): boolean => SVG_TAGS.has(tagName)
