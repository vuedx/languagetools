import { InspectorPlugin } from '../../interfaces'
import { inspectEvents } from './events'
import { inspectProps } from './props'

export const ComponentPublicAPIInspectorPlugin: InspectorPlugin = (
  descriptor,
  context
) => {
  if (!descriptor.script) return

  inspectProps(descriptor.script, context)
  inspectEvents(descriptor.script, context)
}
