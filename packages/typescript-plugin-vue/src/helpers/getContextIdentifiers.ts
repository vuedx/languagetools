import type { ComponentInfo } from '@vuedx/analyze'

export function getContextIdentifiers(
  info: ComponentInfo,
): Record<'props' | 'slots' | 'attrs' | 'emit', string> {
  if (info.fnSetupOption != null) {
    const { context, props } = info.fnSetupOption
    if (context?.rest != null) {
      return {
        props: props?.rest ?? 'props',
        slots: context.identifiers.slots ?? `${context.rest}.slots`,
        attrs: context.identifiers.attrs ?? `${context.rest}.attrs`,
        emit: context.identifiers.emit ?? `${context.rest}.emit`,
      }
    } else if (context != null) {
      return {
        props: props?.rest ?? 'props',
        slots: context?.identifiers.slots ?? `slots`,
        attrs: context?.identifiers.attrs ?? `attrs`,
        emit: context?.identifiers.emit ?? `emit`,
      }
    } else {
      return {
        props: props?.rest ?? 'props',
        slots: `context.slots`,
        attrs: `context.attrs`,
        emit: `context.emit`,
      }
    }
  }

  return {
    props: 'props',
    slots: `context.slots`,
    attrs: `context.attrs`,
    emit: `context.emit`,
  }
}
