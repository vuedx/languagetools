const RAW_TEXT_TAGS = new Set(['style', 'iframe', 'script', 'noscript'])
export const isRawTextContainer = (tagName: string): boolean =>
  RAW_TEXT_TAGS.has(tagName)

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = new Set(
  (
    'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot'
  ).split(','),
)
export const isHTMLTag = (tagName: string): boolean => HTML_TAGS.has(tagName)

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = new Set(
  (
    'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view'
  ).split(','),
)

export const isSVGTag = (tagName: string): boolean => SVG_TAGS.has(tagName)

const VOID_TAGS = new Set(
  'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'.split(
    ',',
  ),
)
export const isVoidTag = (tagName: string): boolean => VOID_TAGS.has(tagName)

export const HTML_TAG_NAME_TO_CLASS_NAME = {
  a: 'HTMLAnchorElement',
  area: 'HTMLAreaElement',
  audio: 'HTMLAudioElement',
  base: 'HTMLBaseElement',
  blockquote: 'HTMLQuoteElement',
  body: 'HTMLBodyElement',
  br: 'HTMLBRElement',
  button: 'HTMLButtonElement',
  canvas: 'HTMLCanvasElement',
  caption: 'HTMLTableCaptionElement',
  data: 'HTMLDataElement',
  datalist: 'HTMLDataListElement',
  details: 'HTMLDetailsElement',
  dialog: 'HTMLDialogElement',
  div: 'HTMLDivElement',
  dl: 'HTMLDListElement',
  embed: 'HTMLEmbedElement',
  fieldset: 'HTMLFieldSetElement',
  form: 'HTMLFormElement',
  h1: 'HTMLHeadingElement',
  head: 'HTMLHeadElement',
  hr: 'HTMLHRElement',
  html: 'HTMLHtmlElement',
  iframe: 'HTMLIFrameElement',
  img: 'HTMLImageElement',
  input: 'HTMLInputElement',
  label: 'HTMLLabelElement',
  legend: 'HTMLLegendElement',
  li: 'HTMLLIElement',
  link: 'HTMLLinkElement',
  main: 'HTMLMainElement',
  map: 'HTMLMapElement',
  menu: 'HTMLMenuElement',
  meta: 'HTMLMetaElement',
  meter: 'HTMLMeterElement',
  nav: 'HTMLNavElement',
  object: 'HTMLObjectElement',
  ol: 'HTMLOListElement',
  optgroup: 'HTMLOptGroupElement',
  option: 'HTMLOptionElement',
  output: 'HTMLOutputElement',
  p: 'HTMLParagraphElement',
  param: 'HTMLParamElement',
  picture: 'HTMLPictureElement',
  pre: 'HTMLPreElement',
  progress: 'HTMLProgressElement',
  q: 'HTMLQuoteElement',
  script: 'HTMLScriptElement',
  select: 'HTMLSelectElement',
  slot: 'HTMLSlotElement',
  source: 'HTMLSourceElement',
  span: 'HTMLSpanElement',
  style: 'HTMLStyleElement',
  table: 'HTMLTableElement',
  tbody: 'HTMLTableSectionElement',
  td: 'HTMLTableCellElement',
  template: 'HTMLTemplateElement',
  textarea: 'HTMLTextAreaElement',
  tfoot: 'HTMLTableSectionElement',
  th: 'HTMLTableCellElement',
  thead: 'HTMLTableSectionElement',
  title: 'HTMLTitleElement',
  tr: 'HTMLTableRowElement',
  track: 'HTMLTrackElement',
  ul: 'HTMLUListElement',
  video: 'HTMLVideoElement',
}

export const SVG_TAG_NAME_TO_CLASS_NAME = {
  a: 'SVGAElement',
  altGlyph: 'SVGAltGlyphElement',
  altGlyphDef: 'SVGAltGlyphDefElement',
  altGlyphItem: 'SVGAltGlyphItemElement',
  animate: 'SVGAnimateElement',
  animateMotion: 'SVGAnimateMotionElement',
  animateTransform: 'SVGAnimateTransformElement',
  circle: 'SVGCircleElement',
  clipPath: 'SVGClipPathElement',
  defs: 'SVGDefsElement',
  desc: 'SVGDescElement',
  ellipse: 'SVGEllipseElement',
  feBlend: 'SVGFEBlendElement',
  feColorMatrix: 'SVGFEColorMatrixElement',
  feComponentTransfer: 'SVGFEComponentTransferElement',
  feComposite: 'SVGFECompositeElement',
  feConvolveMatrix: 'SVGFEConvolveMatrixElement',
  feDiffuseLighting: 'SVGFEDiffuseLightingElement',
  feDisplacementMap: 'SVGFEDisplacementMapElement',
  feDistantLight: 'SVGFEDistantLightElement',
  feDropShadow: 'SVGFEDropShadowElement',
  feFlood: 'SVGFEFloodElement',
  feFuncA: 'SVGFEFuncAElement',
  feFuncB: 'SVGFEFuncBElement',
  feFuncG: 'SVGFEFuncGElement',
  feFuncR: 'SVGFEFuncRElement',
  feGaussianBlur: 'SVGFEGaussianBlurElement',
  feImage: 'SVGFEImageElement',
  feMerge: 'SVGFEMergeElement',
  feMergeNode: 'SVGFEMergeNodeElement',
  feMorphology: 'SVGFEMorphologyElement',
  feOffset: 'SVGFEOffsetElement',
  fePointLight: 'SVGFEPointLightElement',
  feSpecularLighting: 'SVGFESpecularLightingElement',
  feSpotLight: 'SVGFESpotLightElement',
  feTile: 'SVGFETileElement',
  feTurbulence: 'SVGFETurbulenceElement',
  filter: 'SVGFilterElement',
  foreignObject: 'SVGForeignObjectElement',
  g: 'SVGGElement',
  hatch: 'SVGHatchElement',
  hatchpath: 'SVGHatchpathElement',
  image: 'SVGImageElement',
  line: 'SVGLineElement',
  linearGradient: 'SVGLinearGradientElement',
  marker: 'SVGMarkerElement',
  mask: 'SVGMaskElement',
  mesh: 'SVGMeshElement',
  meshgradient: 'SVGMeshGradientElement',
  meshpatch: 'SVGMeshPatchElement',
  meshrow: 'SVGMeshRowElement',
  metadata: 'SVGMetadataElement',
  mpath: 'SVGMPathElement',
  path: 'SVGPathElement',
  pattern: 'SVGPatternElement',
  polygon: 'SVGPolygonElement',
  polyline: 'SVGPolylineElement',
  radialGradient: 'SVGRadialGradientElement',
  rect: 'SVGRectElement',
  script: 'SVGScriptElement',
  set: 'SVGSetElement',
  stop: 'SVGStopElement',
  style: 'SVGStyleElement',
  svg: 'SVGSVGElement',
  switch: 'SVGSwitchElement',
  symbol: 'SVGSymbolElement',
  text: 'SVGTextElement',
  textPath: 'SVGTextPathElement',
  title: 'SVGTitleElement',
  tspan: 'SVGTSpanElement',
  unknown: 'SVGUnknownElement',
  use: 'SVGUseElement',
  view: 'SVGViewElement',
}

export function getClassNameForTagName(tagName: string): string {
  if (isSVGTag(tagName)) {
    return (
      SVG_TAG_NAME_TO_CLASS_NAME[
        tagName as keyof typeof SVG_TAG_NAME_TO_CLASS_NAME
      ] ?? 'SVGElement'
    )
  }

  if (isHTMLTag(tagName)) {
    return (
      HTML_TAG_NAME_TO_CLASS_NAME[
        tagName as keyof typeof HTML_TAG_NAME_TO_CLASS_NAME
      ] ?? 'HTMLElement'
    )
  }

  return 'Element'
}
