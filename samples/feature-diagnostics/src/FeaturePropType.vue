<script lang="ts">
import { defineComponent } from 'vue'
import TypeScriptPropsType from './components/TypeScriptPropsType.vue'
import TypeScriptPropsOption from './components/TypeScriptPropsOption.vue'
import TypeScriptSetupPropsDeclare from './components/TypeScriptSetupPropsDeclare.vue'
import TypeScriptSetupPropsOption from './components/TypeScriptSetupPropsOption.vue'
import TypeScriptSetupPropsType from './components/TypeScriptSetupPropsType.vue'
import JavaScriptPropsOption from './components/JavaScriptPropsOption.vue'
import JavaScriptSetupPropsOption from './components/JavaScriptSetupPropsOption.vue'

export default defineComponent({
  components: {
    TypeScriptPropsType,
    TypeScriptPropsOption,
    TypeScriptSetupPropsDeclare,
    TypeScriptSetupPropsOption,
    TypeScriptSetupPropsType,
    JavaScriptPropsOption,
    JavaScriptSetupPropsOption,
  },
})
</script>

<template>
  <TypeScriptPropsType
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <TypeScriptPropsOption
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <TypeScriptSetupPropsDeclare
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <TypeScriptSetupPropsOption
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <TypeScriptSetupPropsType
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <JavaScriptPropsOption
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
  <JavaScriptSetupPropsOption
    string="value"
    stringFull="value"
    v-bind:number="1"
    :numberFull="1"
    boolean
    booleanFull
    :object="{ id: 1 }"
    :objectFull="{ id: 1 }"
    :array="[{ id: 1 }]"
    :arrayFull="[{ id: 1 }]"
    union="string"
    :unionFull="1"
  />
</template>
