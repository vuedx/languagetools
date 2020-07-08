import { StoryCollectionInfo, StoryLoader } from "./types";
// @ts-ignore - dts start export issue
import { Component } from "vue";

export function createStoryCollection(options: StoryCollectionInfo): StoryCollectionInfo {
  return options;
}

export function defineStory(factory: () => Component): StoryLoader;
export function defineStory(component: Component): StoryLoader;
export function defineStory(name: string, factory: () => Component): StoryLoader;
export function defineStory(name: string, component: Component): StoryLoader;
export function defineStory(arg0: any, arg1?: any): StoryLoader {
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
