<template>
  <div v-for="items of list">
    <slot>fallback content</slot>
    <span v-for="item of items">
      <slot name="other" v-bind="props" :myProp="item">fallback content</slot>
    </span>
  </div>
</template>
