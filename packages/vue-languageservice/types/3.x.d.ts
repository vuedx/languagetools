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
import { checkRef } from './shared/checkRef'
import { checkSlots, SlotsFrom } from './shared/checkSlots'
import { resolveComponent } from './shared/components'
import { resolveDirective } from './shared/directives'
import { getElementType } from './shared/element'
import {
  AttrsOf,
  MergeAttrs,
  propCompletionHelper,
  PropsOf,
} from './shared/Props'
import { renderList } from './shared/renderList'
import { renderSlot } from './shared/renderSlot'
import { Slots } from './shared/Slots'
import { flat, union } from './shared/utils'

export type version = '3.x'

export namespace internal {
  export { flat, union }
  export { resolveComponent, resolveDirective, getElementType }
  export { renderList, renderSlot, Slots }
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
  export { propCompletionHelper }
  export { PropsOf, AttrsOf, SlotsFrom, MergeAttrs }
}
