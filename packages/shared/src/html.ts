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
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
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
