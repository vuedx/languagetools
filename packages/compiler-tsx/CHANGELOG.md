# @vuedx/compiler-tsx

## 0.6.1
### Patch Changes

- 9a06185: Generates correct code when `v-if` is nested in a `<template>` element with `v-for` directive
  - Use inline snapshots for tests
  - Use babel typescript parser to ensure generated code is valid TSX
