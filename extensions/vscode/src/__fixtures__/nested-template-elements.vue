<script src="./auto-detect-language-block.vue" />

<template>
  <component :is="
    foo
  ">
    <template #default checkbox example='foo <  
      
      foo
      
      foo bar' example="foo <  
      
      foo &gt;
      
      foo bar" example=foo example= foo>
      <MyComponent checkbox uncheck>
        &amp;
        <template #default v-if="foo + 3" v-slot:default="foo" v-bind:xxx v-on:xxx v-else v-else-if :foo @foo foo v-custom-xxxx="foo">
          <div></div>
        </template>

        <template #other>
          <MyComponent #default>
            <template #default>
              <div>{{ some + expression + 35n }}</div>
            </template>
          </MyComponent>
        </template>
      </MyComponent>
    </template>
  </component>
</template>

<style>
.foo {
  color: #fff;
}
</style>

<preview>
  <html></html>
</preview>