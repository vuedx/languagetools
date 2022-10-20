<template>
  Interpolation:
  {{ msg }}

  Tags:
  <div />
  <web-component />
  <VueComponent />
  <Vue.Component />

  Attributes:
  <div attr="value" />

  Dynamic Attributes:
  <div v-bind:attr="dynamicValue" />
  <div v-bind:[dynamicAttr]="dynamicValue" />
  <div :attr="dynamicValue" />
  <div :[dynamicAttr]="dynamicValue" />

  Event Handlers:
  <div v-on:event="handler" />
  <div v-on:[dynamicEvent]="handler" />
  <div @event="handler" />
  <div @[dynamicEvent]="handler" />

  Model:
  <div v-model="value" />
  <div v-model:named="value" />
  <div v-model:[dynamic]="value" />

  Conditionals:
  <div v-if="condition" />
  <div v-else-if="condition" />
  <div v-else />

  Loops:
  <div v-for="item of items" />

  Slots:
  <Component v-slot="{ prop }" />
  <Component v-slot:named="{ prop }" />
  <Component #named="{ prop }" />

  Other Builtin Directives:
  <div v-show="condition" />
  <div v-text="value" />
  <div v-html="value" />

  Custom Directives:
  <div v-custom-directive="condition" />
  <div v-custom-directive:argument="condition" />
  <div v-custom-directive:[dynamicArgument]="condition" />
  <div v-custom-directive.modifier="condition" />
</template>

<script lang="ts">
export default {
  components: {},
}
</script>

<style scoped>
.selector {
  color: tomato;
}
</style>
