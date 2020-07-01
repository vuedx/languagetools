<template>
  <div>
    <ul>
      <li v-for="group of groups" @click="onGroupSelect(group)">
        <div>{{ group.group }}</div>
        <ul>
          <li v-for="story of group.stories">
            <label>
              <input type="radio" name="story" :value="story" v-model="currentStoryName" />
              {{ story }}
            </label>
          </li>
        </ul>
      </li>
    </ul>

    <div>
      <component :is="currentStory" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, customRef, onMounted, watchEffect } from 'vue';
import { store, Story, StoryModuleLoader, StoryModule } from './story';

export default defineComponent({
  setup() {
    const currentGroupName = ref<string>(null);
    const currentStoryName = ref<string>(null);

    async function onGroupSelect(group: StoryModuleLoader) {
      console.debug('Loading group...', group);
      currentStoryName.value = null;
      currentGroupName.value = group.id;
      
      await group.loader();
      console.debug('Group stories...', group.stories, group.stories.length);
      if (group.stories && group.stories.length) {
        currentStoryName.value = group.stories[0];
      }
    }

    const currentStory = computed(() => {
      const id = currentGroupName.value;
      const group = store.value.find((group) => group.id === id);

      if (group && group.module) {
        const story = group.module[currentStoryName.value] as Story | null;

        console.debug({ group, story });

        if (story) {
          return story.loader();
        }
      }

      return null;
    });

    function selectFirstGroup() {
      if (!currentGroupName.value && store.value.length) {
        onGroupSelect(store.value[0]);
      }
    }

    watchEffect(selectFirstGroup);
    onMounted(() => {
      console.debug('Stories ready.');
      selectFirstGroup();
    });

    return { groups: store, currentGroupName, currentStoryName, onGroupSelect, currentStory };
  },
});
</script>
