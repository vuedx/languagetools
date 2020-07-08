<template>
  <div class="stories-ui">
    <CategoryTree :categories="categories" @story="loadStory" />

    <div style="background: #efefef; padding: 1rem; flex: 1;">
      <component v-if="currentStory" :is="currentStory" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, markRaw, ref } from 'vue';
import { categories, StoryInfo } from '@vuedx/stories';
import CategoryTree from './CategoryTree.vue';

export default defineComponent({
  setup() {
    const currentStory = ref<any>(null);

    async function loadStory(story: StoryInfo) {
      currentStory.value = markRaw(await story.factory());
    }

    return { categories, currentStory, loadStory, width: '250px' };
  },
  components: { CategoryTree },
});
</script>

<style :vars="{ width }">
.stories-ui {
  display: grid;
  grid-template: 'sidebar content' / var(--width, 200px) auto;
}
</style>
