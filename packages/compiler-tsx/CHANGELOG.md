# @vuedx/compiler-tsx

## 0.8.0

### Minor Changes

- 73c5ff7: Use single character keys for SourceMap metadata

  See `MappingMetadata` in [packages/compiler-tsx/src/generate.ts](../packages/compiler-tsx/src/generate.ts#L64).

  BREAKING CHANGE: Generated sourcemap is not compatible with older versions.

- c35ebff: Generate typecheckable TSX from Vue template

  BREAKING: Generated code is completely different from previous version

- 73c5ff7: Add new mapping type to SourceMap metadata for tagging generated-to-original mapping (only one way)

### Patch Changes

- 382f971: Support rename at cursor
- 8c90abe: Generate type guards for v-if expressions
- e52111f: Assume \$event is always available in v-on expression
- 89c2a70: Support go to references
- 28d00a4: Generate type-checking helper for `v-bind:ref` prop
- f4752aa: Do not render `$event` in v-on inline handler when expression does not include `$event` string
- 35ec24d: Filter and merge tag and attribute completions in template block
- 94505e8: Infer \$event.currentTarget type from element
- 302ba56: Fix codegen for v-slot directive on component node
- 4cca358: Support folding ranges and signature help
- f4752aa: Generate correct source map location when codegen outputs VueDX.internal.checkSlots
- cf397c6: Do not camelize data-_ and aria-_ attributes
- e1a2cf9: Detect \$attrs forwarding target to merge props
- 125a76f: Add location hints in geneated code
- 8bb4220: Add support for completions
- 7d1d193: Infer type of \$slots from template and typecheck v-slot
- Updated dependencies [35ec24d]
- Updated dependencies [7d1d193]
- Updated dependencies [28d00a4]
- Updated dependencies [7c910a6]
- Updated dependencies [8bb4220]
  - @vuedx/shared@0.7.4
  - @vuedx/template-ast-types@0.7.3

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
