# `<script setup>`

## Props

### Array Props List

```ts
const props = defineProps(['foo', 'bar'])
```

### Object Props List

```ts
const props = defineProps({
  foo: Number,
  bar: { type: String },
})
```

### Type Props List

```ts
const props = defineProps<{ foo: number, bar: string }>()
```

### Prop Object Full

```ts
const props = {
  foo: {
    type: Number,
    required: true,
    default: 1, // value or valueFn
    validate: () => true,
  }
}
```


### Variations

1. `defineProps()` can be imported from `'vue'`
2. `defineProps()` can have a different local name
3. `defineProps()` can be global


## Emits

