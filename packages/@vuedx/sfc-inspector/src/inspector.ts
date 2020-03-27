import { parse } from './parser'

export async function baseInspect(
  source: SourceFile,
  options: InspectorOptions
) {
  const descriptor = parse({
    source: source.content,
    sourceFilename: source.filename,
    onError(error) {
      options.onError(error)
    },
  })

  const info: VueComponentInfo = {
    props: [],
    events: [],
  }

  const context: InspectorContext = {
    data: info,
    addError(error: Error) {
      options.onError(error)
    },
    addProp(prop: PropInfo) {
      const index = info.props.findIndex(cur => cur.name === prop.name)

      if (index >= 0) {
        info.props.splice(index, 1, mergeProp(info.props[index], prop))
      } else {
        info.props.push(prop)
      }
    },
    addEvent(event: EventInfo) {
      const index = info.events.findIndex(cur => cur.name === event.name)

      if (index >= 0) {
        info.events.splice(index, 1, mergeEvent(info.events[index], event))
      } else {
        info.events.push(event)
      }
    },
  }

  await Promise.all(options.plugins.map(plugin => plugin(descriptor, context)))

  return { descriptor, info }
}

function mergeProp(target: PropInfo, source: PropInfo) {
  if (source.default) target.default = source.default
  if (source.required != undefined) target.required = source.required
  if (source.description) target.description = source.description
  if (source.type) target.type = { ...target.type, ...source.type }

  return target
}
function mergeEvent(target: EventInfo, source: EventInfo) {
  if (source.description) target.description = source.description
  if (source.type) {
    // @ts-ignore - hidden property.
    if (!target.type.previous) {
      Object.defineProperty(target.type, 'previous', {
        enumerable: false,
        value: target.type.static === 'any' ? [] : [target.type.static],
      })
    }
    // @ts-ignore - hidden property.
    const types: string[] = target.type.previous

    if (!types.includes(source.type.static) && source.type.static !== 'any') {
      types.push(source.type.static)

      target.type.static = types.join('|')
    }
  }

  return target
}

import { SourceFile, InspectorOptions, InspectorContext } from './interfaces'
import { VueComponentInfo, PropInfo, EventInfo } from './VueComponentInfo'
