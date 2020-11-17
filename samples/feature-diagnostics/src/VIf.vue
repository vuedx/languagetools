<script lang="ts">
import { defineComponent, ref } from 'vue'

interface User {
  name: string
}

export default defineComponent({
  setup() {
    const id = ref(5)
    const user = ref<User | null>(null)
    const isVerified = ref(true)

    return { id, user, isVerified }
  },
})
</script>

<template>
  <div v-if="isVerified === true">Verified</div>
  <div v-if="user === true">{{ user.name }}</div>
  <div v-else>{{ user }} has no name</div>
  <div v-if="user == null">{{ user.name }}</div>
  <div v-else-if="user != null">{{ user.name }}</div>
  <div v-else>{{ user }} has no name</div>
</template>
