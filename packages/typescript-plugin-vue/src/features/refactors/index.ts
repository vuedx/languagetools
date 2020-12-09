import { AddToSetupContextRefactor } from './add-to-setup-context'
import { RefactorExtractComponent } from './extract-component'
import { RefactorExtractComputed } from './extract-computed'
import { RefactorExtractMethod } from './extract-method'

export const REFACTOR_PROVIDERS = [
  RefactorExtractComponent,
  RefactorExtractMethod,
  RefactorExtractComputed,
]

export const SCRIPT_REFACTOR_PROVIDERS = [AddToSetupContextRefactor]

/*
✅  1. Extract to component
✅  2. Extract to computed property (full and partial expression)
✅  3. Extract to method (v-on and other expression)
    4. Add to return statement in setup() function
    5. Move v-(if|else|else-if) or v-for inside component
    6. Convert options API to functional API
    7. Convert <script> to <script setup>
    8. Convert <script setup> to <script>
    9. Convert to ref syntax sugar
   10. Remove ref syntax sugar
   11. Convert template to render function
 */
