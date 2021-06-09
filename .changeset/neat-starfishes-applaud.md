---
'@vuedx/compiler-tsx': patch
'@vuedx/typescript-plugin-vue': patch
'@vuedx/vue-virtual-textdocument': patch
---

Support type-only props declaration using `defineProps()` in `<script lang="ts" setup>`

Example:
 
```vue
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{ name: string }>()
</script>
```
