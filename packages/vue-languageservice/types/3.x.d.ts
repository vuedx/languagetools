/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import { defineComponent } from '@vue/runtime-core'
import { checkDirective } from './shared/checkDirective'
import { checkModelDirective } from './shared/checkDirectiveModel'
import { checkOnDirective } from './shared/checkDirectiveOn'
import { checkInterpolation } from './shared/checkInterpolation'
import { checkRef } from './shared/checkRef'
import { checkSlots } from './shared/checkSlots'
import { defineSetupComponent, resolveComponent } from './shared/components'
import { resolveDirective } from './shared/directives'
import { getElementType } from './shared/element'
import { renderList } from './shared/renderList'
import { renderSlot } from './shared/renderSlot'
import { Slots } from './shared/Slots'
import { flat, union } from './shared/utils'

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
        checkModelDirective,
      }
    }
  }
}
