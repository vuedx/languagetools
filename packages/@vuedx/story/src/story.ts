import { Component, RenderFunction, SetupContext, ref, computed, markRaw } from 'vue';
import { VueComponentInfo } from '@vuedx/sfc-inspector';

export interface Story {
  name?: string;
  loader(): Component;
  __isStory: true;
}

export interface ComponentStoryInfo {
  group: string;
  component: Component;
}

export interface StoryModule {
  default: ComponentStoryInfo;

  [key: string]: Story | any;
}

export interface StoryModuleLoader {
  id: string;

  /**
   * Story group name.
   */
  group: string;

  /**
   * Story module loader.
   */
  loader(): Promise<StoryModule> | StoryModule;

  /**
   * Component loader.
   */
  component(): Promise<Component> | Component;

  /**
   * Static component information.
   */
  info?(): Promise<VueComponentInfo> | VueComponentInfo;

  module?: StoryModule

  /**
   * List of story names.
   */
  stories?: string[];
}

export function createComponentStory(options: ComponentStoryInfo): ComponentStoryInfo {
  return options;
}

export function defineStory(factory: () => Component): Story;
export function defineStory(component: Component): Story;
export function defineStory(name: string, factory: () => Component): Story;
export function defineStory(name: string, component: Component): Story;
export function defineStory(arg0: any, arg1?: any): Story {
  let name;

  if (typeof arg0 === 'string') {
    name = arg0;
    arg0 = arg1;
  }

  const loader = typeof arg0 === 'function' ? arg0 : () => arg0;

  return {
    name,
    loader,
    __isStory: true,
  };
}

const _store = /*#__PURE__*/ ref<StoryModuleLoader[]>([])
export const store = /*#__PURE__*/ computed(() => _store.value)
export function stories(stories: StoryModuleLoader[]) {
  stories.forEach(options => {
    const index = _store.value.length
    _store.value.push({
      id: String(index),
      module: null,
      stories: [],
      ...options,
      loader: async () => {
        if (story.module) return story.module

        story.module = markRaw(await options.loader())
        story.stories = Object.entries(story.module as any).filter(
          ([key, value]) => typeof value === 'object' && value !== null && (value as Story).__isStory === true
        ).map(([key]) => key)

        return story.module
      }
    })
    const story = _store.value[index]

    console.debug('Loading...', story.id)
  })
}
