# @vuedx/compiler-tsx

## 0.7.6

### Patch Changes

- c050704: Single file vue-to-tsx rewrite
- Updated dependencies [c050704]
  - @vuedx/shared@0.7.5

## 0.7.5

### Patch Changes

- 47b3f73: Support for goto definition and type definition
- 125a76f: Add location hints in geneated code

## 0.7.4

### Patch Changes

- c5a7c28: Resolve typescript plugin using package name
- Updated dependencies [c5a7c28]
  - @vuedx/shared@0.7.3
  - @vuedx/template-ast-types@0.7.2

## 0.7.3

### Patch Changes

- 3e52646: Remove "exports" property from package.json
- Updated dependencies [3e52646]
  - @vuedx/shared@0.7.2
  - @vuedx/template-ast-types@0.7.1

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

## 0.7.1

### Patch Changes

- Updated dependencies [undefined]
  - @vuedx/shared@0.7.1

## 0.7.0

### Minor Changes

- 93ca54a: Add support `<script setup>` support as per [RFC](https://github.com/vuejs/rfcs/pull/227)
- 084c055: Use **vuedx_runtime**<name>\_\_ format for runtime typecheck helpers

### Patch Changes

- 084c055: Alias dynamic components in v-for/v-slot scope
- Updated dependencies [42aeeef]
- Updated dependencies [93ca54a]
  - @vuedx/template-ast-types@0.7.0
  - @vuedx/shared@0.7.0

## 0.6.3

### Patch Changes

- f32e7a2: Update dependencies
- Updated dependencies [f32e7a2]
  - @vuedx/shared@0.6.2
  - @vuedx/template-ast-types@0.6.2

## 0.6.2

### Patch Changes

- 538d17a: Update dependencies
- Updated dependencies [538d17a]
  - @vuedx/shared@0.6.1
  - @vuedx/template-ast-types@0.6.1

## 0.6.1

### Patch Changes

- 9a06185: Generates correct code when `v-if` is nested in a `<template>` element with `v-for` directive
  - Use inline snapshots for tests
  - Use babel typescript parser to ensure generated code is valid TSX
