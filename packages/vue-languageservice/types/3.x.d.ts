/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import type { defineComponent } from '@vue/runtime-core'
import {
  checkBuiltinDirective,
  checkDirective,
  checkModelDirective,
  checkModelDirectiveForDOM,
  checkOnDirective,
} from './shared/checkDirective'
import type { checkInterpolation } from './shared/checkInterpolation'
import type { checkSlots } from './shared/checkSlots'
import type {
  defineSetupComponent,
  resolveComponent,
} from './shared/components'
import type { resolveDirective } from './shared/directives'
import type { renderList } from './shared/renderList'
import type { renderSlot } from './shared/renderSlot'
import type { Slots } from './shared/Slots'

export type version = '3.x'

declare global {
  namespace VueDX {
    namespace internal {
      export { resolveComponent, resolveDirective }
      export { renderList, renderSlot, Slots }
      export { defineComponent, defineSetupComponent }
      export {
        checkInterpolation,
        checkSlots,
        checkDirective,
        checkOnDirective,
        checkModelDirective,
        checkModelDirectiveForDOM,
        checkBuiltinDirective,
      }
    }
  }
}
