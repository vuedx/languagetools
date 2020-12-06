import { RefactorExtractComponent } from './extract-component'
import { RefactorExtractMethod } from './extract-method'

export const REFACTOR_PROVIDERS = [
  RefactorExtractComponent,
  RefactorExtractMethod,
]

/*
✅ 1. Extract to component
   2. Extract to computed property (full and partial expression)
   3. Extract to method (v-on and other expression)
   4. Convert template to render function
   5. Convert <script> to <script setup>
   6. Convert <script setup> to <script>
   7. Convert to ref syntax sugar
   8. Remove ref syntax sugar
   9. Convert options API to functional API
   10. Add to return statement in setup() function
   11. Move v-(if|else|else-if) or v-for inside component
 */
