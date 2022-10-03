/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import { defineComponent } from '@vue/runtime-core'
import { checkDirective } from './shared/checkDirective'
import { checkModelDirective } from './shared/checkDirectiveModel'
import {
  checkHTMLElementType,
  checkOnDirective,
} from './shared/checkDirectiveOn'
import { checkInterpolation } from './shared/checkInterpolation'
import { checkRef, unref } from './shared/checkRef'

import { resolveComponent } from './shared/components'
import { resolveDirective } from './shared/directives'
import { getElementType } from './shared/element'
import { MergeAttrs, PropsOf } from './shared/Props'
import { renderList } from './shared/renderList'
import { renderSlot } from './shared/renderSlot'
import { Slots, SlotsFrom, GetSlotProps, checkSlots } from './shared/Slots'
import { first, flat, union, merge, getNameOption, scope } from './shared/utils'
import { EmitsToProps, EmitTypeToEmits } from './shared/emits'
import {} from './shared/jsx'

export type version = '3.x'

export namespace internal {
  export { first, flat, union, merge, getNameOption, scope, unref }
  export { resolveComponent, resolveDirective, getElementType }
  export { renderList, renderSlot, Slots, GetSlotProps }
  export { defineComponent }
  export {
    checkInterpolation,
    checkRef,
    checkSlots,
    checkDirective,
    checkOnDirective,
    checkHTMLElementType,
    checkModelDirective,
  }

  export { PropsOf, SlotsFrom, MergeAttrs, EmitsToProps, EmitTypeToEmits }
}
