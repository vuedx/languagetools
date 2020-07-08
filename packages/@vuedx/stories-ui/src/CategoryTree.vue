<template>
  <ul class="stories-ui__category-tree">
    <slot />
    <li v-for="category of categories" style="cursor: pointer;">
      <div @click="toggleCategory(category)" role="button">{{ category.name }}</div>

      <CategoryTree v-if="isExpanded(category)" :categories="category.children" @story="selectStory">
        <li v-for="story of category.stories" @click="selectStory(story)">{{ story.name }}</li>
      </CategoryTree>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject, ref, Ref } from 'vue';
import { Category, StoryInfo } from '../types';

export default defineComponent({
  name: 'CategoryTree',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  setup(_, { emit }) {
    const expanded = inject<Ref<any>>('sidebar.categories.state', ref({}));

    return {
      toggleCategory(category: Category) {
        expanded.value[category.id] = !expanded.value[category.id];
      },
      isExpanded(category: Category) {
        return expanded.value[category.id];
      },
      selectStory(story: StoryInfo) {
        emit('story', story);
      },
    };
  },
});
</script>

<style>
.stories-ui__category-tree {
  list-style: none;
  padding-inline-start: 0;
}
</style>
