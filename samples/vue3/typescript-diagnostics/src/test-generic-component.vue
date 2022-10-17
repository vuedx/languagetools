<script lang="ts" setup>
import Foo from "./fixture-script-setup-type-only-generic.vue"
</script>

<template>
  <Foo :value="'foo'" v-slot="{ value }">
    <!--                        ^?    -->
  </Foo>
  <Foo :value="5" v-slot="{ value }">
    <!--                    ^?        -->
  </Foo>
  <Foo :value="new Date()" v-slot="{ value }">
    <!--                             ^? -->
  </Foo>
</template>
