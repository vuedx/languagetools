<template>
  <div class="container" style="margin-top: 70px">
    <RouterView v-slot="{ Component }">
      <Component />
    </RouterView>
  </div>
</template>
