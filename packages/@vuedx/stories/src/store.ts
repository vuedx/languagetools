// @ts-ignore - dts start export issue
import { ComputedRef, markRaw, ref } from 'vue';
import { Category, StoryCollectionLoader, StoryInfo, StoryLoader, StoryModule } from './types';

const STORIES = /*#__PURE__*/ ref<StoryInfo[]>([]);
const CATEGORIES = /*#__PURE__*/ ref<Category[]>([]);

export const stories = STORIES as ComputedRef<StoryInfo[]>;
export const categories = CATEGORIES as ComputedRef<Category[]>;

export function registerStoryModule(storyModule: StoryModule) {
  if (!storyModule.default) {
    storyModule.default = { group: '' };
  }

  registerStoryCollection(undefined, {
    group: storyModule.default.group || '',
    info: () => (storyModule.default.component as any)?.__info || null,
    loader: () => storyModule,
    stories: findStoryExportNames(storyModule),
  });
}

export function registerStoryCollection(fileName: string | undefined, collection: StoryCollectionLoader) {
  const slug = slugify(collection.group);
  const names = collection.group.split(/[/|]/);
  const category = findCategory(CATEGORIES.value, names.slice());

  collection.stories.forEach((name) => {
    const story: StoryInfo = markRaw({
      id: slug + '--' + slugify(name),
      name,
      category,
      collection,
      filename: fileName,
      factory: async () => {
        const storyModule = await collection.loader();
        const story = storyModule[name];

        if (isStory(story)) {
          return story.loader();
        }

        throw new Error(`Cannot find story "${name}" in ${fileName}`);
      },
    });

    category.stories.push(story);
    STORIES.value.push(story);
  });
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
}

function findCategory(categories: Category[], names: string[]): Category {
  if (names.length === 0) {
    throw new Error(`Category name cannot be empty.`);
  }

  const name = names.shift()!;
  let category = categories.find((category) => category.name === name);

  if (!category) {
    category = { id: Symbol(name), name: name, stories: [], children: [] };
    categories.push(category);
  }

  if (names.length) {
    return findCategory(category.children, names);
  }

  return category;
}

function findStoryExportNames(storyModule: StoryModule) {
  return Object.entries(storyModule)
    .filter(([, story]) => isStory(story))
    .map(([name]) => name);
}

function isStory(item: any): item is StoryLoader {
  return typeof item === 'object' && item !== null && item.__isStory === true;
}
