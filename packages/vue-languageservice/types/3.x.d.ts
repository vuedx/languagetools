/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import { defineComponent } from '@vue/runtime-core'
import {
  checkBuiltinDirective,
  checkDirective,
  checkModelDirective,
  checkModelDirectiveForDOM,
  checkOnDirective,
} from './shared/checkDirective'
import { checkInterpolation } from './shared/checkInterpolation'
import { checkRef } from './shared/checkRef'
import { checkSlots } from './shared/checkSlots'
import { defineSetupComponent, resolveComponent } from './shared/components'
import { resolveDirective } from './shared/directives'
import { getElementType } from './shared/element'
import { renderList } from './shared/renderList'
import { renderSlot } from './shared/renderSlot'
import { Slots } from './shared/Slots'
import { flat } from './shared/utils'

export type version = '3.x'

declare global {
  namespace VueDX {
    namespace internal {
      export { flat }
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
        checkModelDirectiveForDOM,
        checkBuiltinDirective,
      }
    }
  }
}
