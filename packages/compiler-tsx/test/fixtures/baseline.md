# Baseline Spec

## element

### single

```vue-html
<div>foo</div>
```

### fragment with errors

```vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
```

### components

```vue-html
<FooBar>foo</FooBar>
<Foo.Bar>foo</Foo.Bar>
<Foo.Bar.Baz>foo</Foo.Bar.Baz>
<fooBar>foo</fooBar>
<foo-bar>foo</foo-bar>
<unknown-element>foo</unknown-element>
```

### slots

```vue-html
<div>
  <slot>fallback content</slot>
  <span>
    <slot name="other" v-bind="props" :myProp="value">fallback content</slot>
  </span>
  <slot name="another" v-bind="props" :myProp="value"></slot>
  <slot :name="dynamic" v-bind="props" :myProp="value" />
</div>
```

## v-bind

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

## v-on

```vue-html
<input @focus="onFocus" />
<input @update:value="value = $event" />
<input @event-name @eventName @[eventName] v-on="events" />
<input
  @keydown="fnName"
  @keydown.left="callMyFn($event)"
  @keydown.shift.left="$event => callMyFn($event)"
  @keydown.shift.right="($event) => callMyFn($event)"
  @keydown.shift.down="() => callMyFn($event)"
  @keydown.shift.up="function myFunction($event) {
    callMyFn($event)
  }"
  @keydown.ctrl.up="function myFunction() {
    callMyFn($event)
  }"
/>
```

## v-on multiple events

```vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
```

## v-if/v-else/v-else-if

### single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

### if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### if on fragment

```vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### if/else/if chain

```vue-html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

### if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

### else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

### elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### nested if/else chains

```vue-html
<div v-if="foo">
  <div v-if="foo"></div>
  <div v-else-if="bar"></div>
  <div v-else></div>
</div>
<div v-else-if="bar">
  <div v-if="foo"></div>
  <div v-else-if="bar"></div>
  <div v-else></div>
</div>
<div v-else>
  <div v-if="foo"></div>
  <div v-else-if="bar"></div>
  <div v-else></div>
</div>
```

## v-text

```vue-html
<span v-text="msg"></span>
```

## v-html

```vue-html
<div v-html="html"></div>
```

## v-show

```vue-html
<h1 v-show="ok">Hello!</h1>
```

## v-model

### input

```vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
```

### select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

### checkbox

```vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
```

### select

```vue-html
<select v-model="foo">
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option :value="baz">baz</option>
</select>

<select v-model="foo">
  <option value="foo">foo</option>
  <option v-for="val of vals" :value="val">{{ val }}</option>
  <option value="bar">bar</option>
</select>
```

## v-slot

### Invalid

```vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
```

### use slots

```vue-html
<FooBar>content</FooBar>
<FooBar #default="{foo}">{{ foo }}</FooBar>
<FooBar #other="{foo}">{{ foo }}</FooBar>
<FooBar>
  <template #default>content</template>
  <template #other="{foo}">{{foo}}</template>
  <template #another="foo">
    <div v-if="foo">{{foo.bar}}</div>
  </template>
  <div>extranous</div>
</FooBar>
```

```json
{
  "components": {
    "FooBar": {
      "name": "FooBar",
      "value": "Foo.Bar",
      "source": {
        "path": "@ui/components",
        "exported": "Bar",
        "local": "Foo"
      }
    }
  }
}
```

## v-pre

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

## v-once

```vue-html
<section v-once>{{ largeText }}</section>
```

## v-is

```vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
```

## v-for

```vue-html
<div v-for="n of num">{{ n }}</div>
<div v-for="(n, i) of num">{{ n }}:{{ i }}</div>
<div v-for="s of str">{{ s }}</div>
<div v-for="(s, i) of str">{{ s }}:{{ i }}</div>
<div v-for="a of arr">{{ a }}</div>
<div v-for="{ value } of arr">{{ value }}</div>
<div v-for="{ foo } of arr">{{ arr }}</div>
<div v-for="(a, i) of arr">{{ a }}:{{ i }}</div>
<div v-for="({ value }, i) of arr">{{ value }}:{{ i }}</div>
<div v-for="o of obj">{{ o }}</div>
<div v-for="(o, k) of obj">{{ o }}:{{ k }}</div>
<div v-for="(o, k, i) of obj">{{ o }}:{{ k }}:{{ i }}</div>
<div v-for="t of itr">{{ t }}</div>
<div v-for="b of boo">{{ b }}</div>
<div v-for="s of sym">{{ s }}</div>
```

## Nested Dynamic components

```vue-html
<component :is="foo" #default="{bar}">
  <component :is="bar" #default="{baz}">
    <component :is="baz">
      <template #other="{ foo }">
        <component :is="foo" />
      </template>
      <template #default="{ bar }">
        <component :is="bar" />
      </template>
    </component>
  </component>
</component>
```

## Dynamic component with v-for

```vue-html
<component :is="bar" v-for="bar of bars">
  <component :is="bar" #default="{baz}">
    <component :is="baz[bar]" v-for="item of baz" >
      <component :is="item" />
    </component>
  </component>
</component>
```
