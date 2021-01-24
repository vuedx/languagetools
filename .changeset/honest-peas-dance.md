---
'@vuedx/compiler-tsx': patch
---

Generates correct code when `v-if` is nested in a `<template>` element with `v-for` directive

- Use inline snapshots for tests
- Use babel typescript parser to ensure generated code is valid TSX
