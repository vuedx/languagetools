<script lang="ts">

import { defineComponent } from 'vue'
import JavaScriptPropsOption from './components/JavaScriptPropsOption.vue'
import JavaScriptSetupPropsOption from './components/JavaScriptSetupPropsOption.vue'
import TypeScriptPropsOption from './components/TypeScriptPropsOption.vue'
import TypeScriptPropsType from './components/TypeScriptPropsType.vue'
import TypeScriptSetupPropsDeclare from './components/TypeScriptSetupPropsDeclare.vue'
import TypeScriptSetupPropsOption from './components/TypeScriptSetupPropsOption.vue'
import example_snake_component from './components/example_snake_component.vue'
import exampleKebabComponent from './components/example-kebab-component.vue'
import ExamplePascalComponent from './components/Example.Pascal.Component.vue'

export default defineComponent({
  components: {
    TypeScriptPropsType,
    TypeScriptPropsOption,
    TypeScriptSetupPropsDeclare,
    TypeScriptSetupPropsOption,
    JavaScriptPropsOption,
    JavaScriptSetupPropsOption,
    example_snake_component,
    'example-kebab-component': exampleKebabComponent,
    ExamplePascalComponent
  },
})
</script>

<template>
  <TypeScriptPropsType
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptSetupPropsDeclare
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <TypeScriptSetupPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <JavaScriptPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <JavaScriptSetupPropsOption
    stringFull="value"
    :numberFull="1"
    :booleanFull="true"
    :objectFull="{ id: 1 }"
    :arrayFull="[{ id: 1 }]"
    :unionFull="1"
  />
  <example_snake_component />
  <example-kebab-component />
  <ExamplePascalComponent />
</template>
