<script setup lang="ts">
import { ref } from 'vue'

const YN = ref<'yes'|'no'>('yes')
const TF = ref<boolean>(false)

const yes = 'yes'
const no = 'no'
</script>

<template>
  <input type="checkbox" v-model="YN" />
  <input type="checkbox" v-model="TF" />
  <input type="checkbox" v-model="YN" true-value="yes" false-value="no" />
  <input type="checkbox" v-model="TF" true-value="yes" false-value="no" />
  <input type="checkbox" v-model="YN" :true-value="yes" :false-value="no" />
  <input type="checkbox" v-model="TF" :true-value="yes" :false-value="no" />
</template>
