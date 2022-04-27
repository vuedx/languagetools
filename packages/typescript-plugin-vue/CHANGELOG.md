# @vuedx/typescript-plugin-vue

## 0.7.5

### Patch Changes

- 7c910a6: Support import path module rename and file rename

## 0.7.4

### Patch Changes

- c5a7c28: Resolve typescript plugin using package name
- Updated dependencies [c5a7c28]
  - @vuedx/analyze@0.7.4
  - @vuedx/shared@0.7.3
  - @vuedx/template-ast-types@0.7.2
  - @vuedx/vue-virtual-textdocument@0.7.4

## 0.7.3

### Patch Changes

- 3e52646: Remove "exports" property from package.json
- Updated dependencies [3e52646]
  - @vuedx/analyze@0.7.3
  - @vuedx/compiler-sfc@0.7.1
  - @vuedx/projectconfig@0.7.1
  - @vuedx/shared@0.7.2
  - @vuedx/template-ast-types@0.7.1
  - @vuedx/vue-virtual-textdocument@0.7.3

## 0.7.2

### Patch Changes

- f5ebe8e: Support type-only props declaration using `defineProps()` in `<script lang="ts" setup>`

  Example:

  ```vue
  <script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps<{ name: string }>()
  </script>
  ```

- Updated dependencies [f5ebe8e]
  - @vuedx/vue-virtual-textdocument@0.7.2
  - @vuedx/analyze@0.7.2

## 0.7.1

### Patch Changes

- Load standalone version of typescript-plugin-vue in VueDX extension
- Updated dependencies [undefined]
  - @vuedx/shared@0.7.1
  - @vuedx/analyze@0.7.1
  - @vuedx/vue-virtual-textdocument@0.7.1

## 0.7.0

### Minor Changes

- 93ca54a: Add support `<script setup>` support as per [RFC](https://github.com/vuejs/rfcs/pull/227)
- 084c055: Use **vuedx_runtime**<name>\_\_ format for runtime typecheck helpers

### Patch Changes

- Updated dependencies [93ca54a]
- Updated dependencies [084c055]
- Updated dependencies [42aeeef]
- Updated dependencies [93ca54a]
  - @vuedx/analyze@0.7.0
  - @vuedx/vue-virtual-textdocument@0.7.0
  - @vuedx/template-ast-types@0.7.0
  - @vuedx/compiler-sfc@0.7.0
  - @vuedx/projectconfig@0.7.0
  - @vuedx/shared@0.7.0

## 0.6.3

### Patch Changes

- f32e7a2: Update dependencies
- Updated dependencies [f32e7a2]
  - @vuedx/analyze@0.6.3
  - @vuedx/compiler-sfc@0.6.2
  - @vuedx/projectconfig@0.6.2
  - @vuedx/shared@0.6.2
  - @vuedx/template-ast-types@0.6.2
  - @vuedx/vue-virtual-textdocument@0.6.3

## 0.6.2

### Patch Changes

- 538d17a: Update dependencies
- Updated dependencies [538d17a]
  - @vuedx/analyze@0.6.2
  - @vuedx/compiler-sfc@0.6.1
  - @vuedx/projectconfig@0.6.1
  - @vuedx/shared@0.6.1
  - @vuedx/template-ast-types@0.6.1
  - @vuedx/vue-virtual-textdocument@0.6.2

## 0.6.1

### Patch Changes

- @vuedx/analyze@0.6.1
- @vuedx/vue-virtual-textdocument@0.6.1
