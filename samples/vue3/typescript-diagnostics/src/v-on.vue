<script setup lang="ts">
import C from './fixture-script-setup-type-only.vue';
import B from './fixture-script-setup.vue';
import A from './fixture-script.vue';

const c: 'input' | 'button' = '' as any
function on() {}
function onStr(payload: string) {}
function onNum(payload?: number) {}
function onObj(payload: { foo?: string }) {}
function onObj2(payload: { foo: string }) {}
function onObj3(payload: { bar: string }) {}
</script>

<template>
  <component :is="c" @a="on" @input="on" @click="on" @submit="on" />

  <A a="" @a="on" />

  <A a="" @a="onStr" />
  <A a="" @a="onNum" @b.once="onNum" />

  <B a="" @a="on" />
  <B a="" @a="onStr" />
  <B a="" @a="onNum" @b.once="onNum" />

  <C a="" @a="on" />
  <C a="" @a="onStr" />
  <C a="" @a="onNum" @b.once="onNum" />
</template>
