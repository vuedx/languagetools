# @vuedx/compiler-tsx

## 0.7.0

### Minor Changes

- 084c055: Use **vuedx_runtime**<name>\_\_ format for runtime typecheck helpers

### Patch Changes

- 084c055: Alias dynamic components in v-for/v-slot scope
- Updated dependencies [42aeeef]
  - @vuedx/template-ast-types@0.6.3

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
