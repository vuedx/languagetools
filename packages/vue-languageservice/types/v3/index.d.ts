/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import { defineComponent } from '@vue/runtime-core'
import { checkDirective } from '../shared/checkDirective'
import { checkModelDirective } from '../shared/checkDirectiveModel'
import {
  checkHTMLElementType,
  checkOnDirective,
} from '../shared/checkDirectiveOn'
import { checkInterpolation } from '../shared/checkInterpolation'
import { checkRef } from '../shared/checkRef'
import { checkSlots, SlotsFrom } from '../shared/checkSlots'
import { defineSetupComponent, resolveComponent } from '../shared/components'
import { resolveDirective } from '../shared/directives'
import { getElementType } from '../shared/element'
import {
  AttrsOf,
  MergeAttrs,
  propCompletionHelper,
  PropsOf,
} from '../shared/props'
import { renderList } from '../shared/renderList'
import { renderSlot } from '../shared/renderSlot'
import { Slots } from '../shared/slots'
import { flat, union } from '../shared/utils'

export type version = '3.x'

declare global {
  namespace VueDX {
    namespace internal {
      export { flat, union }
      export { resolveComponent, resolveDirective, getElementType }
      export { renderList, renderSlot, Slots }
      export { defineComponent, defineSetupComponent }
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
  }
}
