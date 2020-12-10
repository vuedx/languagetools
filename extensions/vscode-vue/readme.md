# Vue

This extension provides language grammar and syntax highlight for `.vue` files.

## Syntax Highlight

The language grammar included in this extension provides precise information for
Vue HTML syntax (template DSL). 

Following are some examples of syntax highlight.

<div style="display: flex; gap: 10px; flex-direction: row">

  <div>
    <h3>Dark+</h3>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/Dark.png">
  </div>
  
  <div>
    <h3>Light+</h3>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/Light.png">
  </div>

  <div>
    <h3>Night Owl</h3>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/NightOwl.png">
  </div>
  
  <div>
    <h3>Light+</h3>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/NightOwl.png">
  </div>

</div>

## Markdown Support

Use `vue` as language on fenced code block 
for embedding Vue SFC in markdown.

```vue
<template>
  <div 
    v-if="condition"
    attribute="value"
    :prop="value"
    @event="handler"
  />
</template>

<script>
export default {}
</script>
```

![](https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/FencedCodeBlock-Vue.png)

Use `vue-html` as language on fenced code block 
for embedding Vue template DSL in markdown.

```vue-html
<div 
  v-if="condition"
  attribute="value"
  :prop="value"
  @event="handler"
/>
```

![](https://raw.githubusercontent.com/znck/vue-developer-experience/master/extensions/vscode-vue/demo/FencedCodeBlock-VueHTML.png)

## Creating Themes

This extension provides detailed token and scope information which can be
used to create better VS Code themes.

-------------------------------------------------------------------------
> Made with 💚 for Vue Developers.  
> — [Rahul Kadyan](https://znck.me) ([znck0](https://twitter.com/znck0))
