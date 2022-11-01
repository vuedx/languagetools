# @vuedx/vue-virtual-textdocument

## 0.7.6

### Patch Changes

- c050704: Single file vue-to-tsx rewrite
- Updated dependencies [c050704]
  - @vuedx/compiler-sfc@0.7.2
  - @vuedx/compiler-tsx@0.8.1
  - @vuedx/shared@0.7.5
  - @vuedx/template-ast-types@0.7.4
  - @vuedx/transforms@0.7.6

## 0.7.5

### Patch Changes

- 89c2a70: Support go to references
- 73c5ff7: Use LRU cache for sourcemap lookups
- 302ba56: support global components
- 47b3f73: Support for goto definition and type definition
- 73c5ff7: Find precise generated locations using reverse lookup of original and then most relevant generated location
- e1a2cf9: Detect \$attrs forwarding target to merge props
- 125a76f: Add location hints in geneated code
- 8bb4220: Add support for completions
- d15dd7d: Calculate correct mapping length
- 7d1d193: Infer type of \$slots from template and typecheck v-slot
- Updated dependencies [382f971]
- Updated dependencies [8c90abe]
- Updated dependencies [e52111f]
- Updated dependencies [89c2a70]
- Updated dependencies [28d00a4]
- Updated dependencies [f4752aa]
- Updated dependencies [35ec24d]
- Updated dependencies [7d1d193]
- Updated dependencies [28d00a4]
- Updated dependencies [73c5ff7]
- Updated dependencies [94505e8]
- Updated dependencies [7c910a6]
- Updated dependencies [302ba56]
- Updated dependencies [4cca358]
- Updated dependencies [c35ebff]
- Updated dependencies [47b3f73]
- Updated dependencies [f4752aa]
- Updated dependencies [73c5ff7]
- Updated dependencies [cf397c6]
- Updated dependencies [e1a2cf9]
- Updated dependencies [125a76f]
- Updated dependencies [8bb4220]
- Updated dependencies [7d1d193]
  - @vuedx/compiler-tsx@0.8.0
  - @vuedx/shared@0.7.4
  - @vuedx/template-ast-types@0.7.3
  - @vuedx/transforms@0.7.5

## 0.7.4

### Patch Changes

- Updated dependencies [c5a7c28]
  - @vuedx/analyze@0.7.4
  - @vuedx/compiler-tsx@0.7.4
  - @vuedx/shared@0.7.3

## 0.7.3

### Patch Changes

- 3e52646: Remove "exports" property from package.json
- Updated dependencies [3e52646]
  - @vuedx/analyze@0.7.3
  - @vuedx/compiler-sfc@0.7.1
  - @vuedx/compiler-tsx@0.7.3
  - @vuedx/shared@0.7.2

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
  - @vuedx/compiler-tsx@0.7.2
  - @vuedx/analyze@0.7.2

## 0.7.1

### Patch Changes

- Updated dependencies [undefined]
  - @vuedx/shared@0.7.1
  - @vuedx/analyze@0.7.1
  - @vuedx/compiler-tsx@0.7.1

## 0.7.0

### Minor Changes

- 93ca54a: Add support `<script setup>` support as per [RFC](https://github.com/vuejs/rfcs/pull/227)
- 084c055: Use **vuedx_runtime**<name>\_\_ format for runtime typecheck helpers

### Patch Changes

- Updated dependencies [93ca54a]
- Updated dependencies [084c055]
- Updated dependencies [084c055]
- Updated dependencies [93ca54a]
  - @vuedx/analyze@0.7.0
  - @vuedx/compiler-tsx@0.7.0
  - @vuedx/compiler-sfc@0.7.0
  - @vuedx/shared@0.7.0

## 0.6.3

### Patch Changes

- f32e7a2: Update dependencies
- Updated dependencies [f32e7a2]
  - @vuedx/analyze@0.6.3
  - @vuedx/compiler-sfc@0.6.2
  - @vuedx/compiler-tsx@0.6.3
  - @vuedx/shared@0.6.2

## 0.6.2

### Patch Changes

- 538d17a: Update dependencies
- Updated dependencies [538d17a]
  - @vuedx/analyze@0.6.2
  - @vuedx/compiler-sfc@0.6.1
  - @vuedx/compiler-tsx@0.6.2
  - @vuedx/shared@0.6.1

## 0.6.1

### Patch Changes

- Updated dependencies [9a06185]
  - @vuedx/compiler-tsx@0.6.1
  - @vuedx/analyze@0.6.1
