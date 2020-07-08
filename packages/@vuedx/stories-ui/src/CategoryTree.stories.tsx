import { defineStory, createStoryCollection } from '@vuedx/stories';
import CategoryTree from './CategoryTree.vue';

export default createStoryCollection({
  group: 'Components/CategoryTree',
  component: CategoryTree,
});

const categories = [
  {
    name: 'One',
    stories: [{ name: 'Leaf 1' }, { name: 'Leaf 2' }],
    children: [],
  },
];

export const Example = defineStory({
  components: { CategoryTree },
  render() {
    return <CategoryTree categories={categories} />;
  },
});
