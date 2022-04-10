# @vuedx/typescript-plugin-vue

## 0.7.5

### Patch Changes

- 7c910a6: Support import path module rename and file rename
- Updated dependencies [382f971]
- Updated dependencies [89c2a70]
- Updated dependencies [35ec24d]
- Updated dependencies [73c5ff7]
- Updated dependencies [7d1d193]
- Updated dependencies [28d00a4]
- Updated dependencies [94505e8]
- Updated dependencies [7c910a6]
- Updated dependencies [302ba56]
- Updated dependencies [4cca358]
- Updated dependencies [909d207]
- Updated dependencies [47b3f73]
- Updated dependencies [7f086c2]
- Updated dependencies [73c5ff7]
- Updated dependencies [e1a2cf9]
- Updated dependencies [125a76f]
- Updated dependencies [3035e14]
- Updated dependencies [8bb4220]
- Updated dependencies [d913a13]
- Updated dependencies [d15dd7d]
- Updated dependencies [7d1d193]
  - @vuedx/vue-languageservice@0.0.1
  - @vuedx/vue-virtual-textdocument@0.7.5
  - @vuedx/shared@0.7.4
  - @vuedx/template-ast-types@0.7.3
  - @vuedx/projectconfig@0.7.2

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
