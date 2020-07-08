import { VueComponentInfo } from '@vuedx/sfc-inspector';
// @ts-ignore - dts start export issue
import { Component } from 'vue';

export interface StoryLoader {
  name?: string;
  loader(): Component;
  __isStory: true;
}

export interface StoryCollectionInfo {
  group: string;
  component?: Component;
}

export interface StoryModule {
  default: StoryCollectionInfo;
  [key: string]: StoryLoader | any;
}

export interface StoryCollectionLoader {
  /**
   * Story group name.
   */
  group: string;

  /**
   * Story module loader.
   */
  loader(): Promise<StoryModule> | StoryModule;

  /**
   * Static component information.
   */
  info(): Promise<VueComponentInfo | null> | VueComponentInfo | null;

  /**
   * List of story names.
   */
  stories: string[];
}

export interface StoryInfo {
  id: string;
  name: string;
  category: Category;
  collection: StoryCollectionLoader;
  filename?: string;
  factory(): Promise<Component>;
}

export interface Category {
  id: symbol;
  name: string;
  stories: StoryInfo[];
  children: Category[];
}
