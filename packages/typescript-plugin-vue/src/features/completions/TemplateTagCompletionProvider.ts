import { isNotNull, pascalCase } from '@vuedx/shared'
import { isElementNode, isTextNode } from '@vuedx/template-ast-types'
import {
  isVirtualFile,
  isVirtualFileOfType,
  MODULE_SELECTOR,
} from '@vuedx/vue-virtual-textdocument'
import { CompletionInfo } from 'typescript'
import { TS } from '../../interfaces'
import { defineCompletionProvider } from './abstract'

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
const isHTMLTag = (tagName: string): boolean => HTML_TAGS.has(tagName)

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
const isSVGTag = (tagName: string): boolean => SVG_TAGS.has(tagName)

export const TemplateTagCompletionProvider = defineCompletionProvider({
  version: '*',

  getCompletionsAtPosition(
    { helpers, service, context },
    fileName,
    position,
    options,
  ) {
    const { node, document, ancestors } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    let result: TS.WithMetadata<CompletionInfo> | undefined

    if (isNotNull(document)) {
      if (isElementNode(node)) {
        const maxOffset =
          node.loc.start.offset + pascalCase(node.tag).length + 1

        if (position <= maxOffset) {
          const loc = document.tryGetGeneratedOffset(position)
          if (isNotNull(loc)) {
            result = service.getCompletionsAtPosition(document.fsPath, loc, {
              triggerCharacter: '<',
              ...options,
            })
          }
        }
      } else if (isTextNode(node) && /^(<|<>)$/.test(node.content.trim())) {
        result = service.getCompletionsAtPosition(
          document.fsPath,
          document.contextCompletionsTriggerOffset,
          { triggerCharacter: '<', ...options },
        )
      }
      if (isNotNull(result)) {
        const { ScriptElementKind } = context.typescript
        const needHTML = helpers.isFeatureEnabled('tagCompletions', 'html')
        const needSVG =
          helpers.isFeatureEnabled('tagCompletions', 'svg') &&
          (ancestors.some(
            (element) =>
              isElementNode(element.node) && isSVGTag(element.node.tag),
          ) ||
            ancestors.length === 1)
        result.entries = result.entries.filter((entry) => {
          if (isNotNull(entry.source)) {
            if (isVirtualFile(entry.source)) {
              if (isVirtualFileOfType(entry.source, MODULE_SELECTOR)) {
                entry.kind = ScriptElementKind.jsxAttribute
              }
            }
          }

          if (entry.kind === ScriptElementKind.jsxAttribute) {
            if (!needHTML && isHTMLTag(entry.name)) return false
            if (!needSVG && isSVGTag(entry.name)) return false
            return true
          }

          return false
        })

        result.entries.forEach((entry) => {
          if (isHTMLTag(entry.name)) entry.sortText = '8'
          else if (isSVGTag(entry.name)) entry.sortText = '9'
        })

        const { typescript } = context
        const knownTags = new Set(result.entries.map((entry) => entry.name))
        const info = helpers.getComponentInfo(document.container)
        info.components.forEach((component) => {
          if (!knownTags.has(component.name)) {
            component.aliases.forEach((alias) => {
              knownTags.add(alias)
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              result!.entries.push({
                name: alias,
                kind: typescript.ScriptElementKind.jsxAttribute,
                sortText: '0',
              })
            })
          }
        })
        const project = context.getVueProjectForFile(
          document.container.fsPath,
          true,
        )
        project.globalComponents.forEach((component) => {
          if (!knownTags.has(component.name)) {
            component.aliases.forEach((alias) => {
              knownTags.add(alias)
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              result!.entries.push({
                name: alias,
                kind: typescript.ScriptElementKind.jsxAttribute,
                sortText: '0',
              })
            })
          }
        })
      }
    }

    return result
  },

  getCompletionEntryDetails(
    { helpers, service, context },
    fileName,
    position,
    entryName,
    formatOptions,
    source,
    preferences,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isNotNull(document)) {
      if (source == null) {
        const info = helpers.getComponentInfo(document.container)
        const component = info.components.find((component) =>
          component.aliases.includes(entryName),
        )
        if (component != null) {
          // TODO: Get QuickInfo for component.
          return {
            name: entryName,
            kind: context.typescript.ScriptElementKind.jsxAttribute,
            kindModifiers: 'local component',
            displayParts: [
              {
                text:
                  component.source.exportName != null
                    ? `import { ${component.source.exportName} as ${component.source.localName} } from '${component.source.moduleName}'`
                    : `import ${component.source.localName} from '${component.source.moduleName}'`,
                kind: 'ts',
              },
            ],
          }
        }

        const project = context.getVueProjectForFile(
          document.container.fsPath,
          true,
        )
        const globalComponent = project.globalComponents.find((component) =>
          component.aliases.includes(entryName),
        )
        if (globalComponent != null) {
          // TODO: Get QuickInfo for globalComponent.
          return {
            name: entryName,
            kind: context.typescript.ScriptElementKind.jsxAttribute,
            kindModifiers: 'global component',
            displayParts: [
              {
                text:
                  globalComponent.source.exportName != null
                    ? `import { ${globalComponent.source.exportName} as ${globalComponent.source.localName} } from '${globalComponent.source.moduleName}'`
                    : `import ${globalComponent.source.localName} from '${globalComponent.source.moduleName}'`,
                kind: 'ts',
              },
            ],
          }
        }
      }

      if (isElementNode(node)) {
        const maxOffset =
          node.loc.start.offset + pascalCase(node.tag).length + 1

        if (position <= maxOffset) {
          const loc = document.tryGetGeneratedOffset(position)
          if (isNotNull(loc)) {
            const result = service.getCompletionEntryDetails(
              document.fsPath,
              loc,
              entryName,
              formatOptions,
              source,
              preferences,
            )
            if (result != null) return result
          }
        }
      } else if (isTextNode(node) && /^(<|<>)$/.test(node.content.trim())) {
        const result = service.getCompletionEntryDetails(
          document.fsPath,
          document.tagCompletionsTriggerOffset,
          entryName,
          formatOptions,
          source,
          preferences,
        )
        if (result != null) return result
      }
    }
    return undefined
  },

  getCompletionEntrySymbol(
    { helpers, service },
    fileName,
    position,
    name,
    source,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isNotNull(document) && isElementNode(node)) {
      const maxOffset = node.loc.start.offset + pascalCase(node.tag).length + 1

      if (position <= maxOffset) {
        const loc = document.tryGetGeneratedOffset(position)
        if (isNotNull(loc)) {
          return service.getCompletionEntrySymbol(
            document.fsPath,
            document.contextCompletionsTriggerOffset,
            name,
            source,
          )
        }
      }
    }

    return undefined
  },
})
