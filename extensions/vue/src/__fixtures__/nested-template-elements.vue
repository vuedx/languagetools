<script src="./auto-detect-language-block.vue" />

<template>
  <component :is="foo">
    <template #default>
      <MyComponent>
        <template #default>
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
