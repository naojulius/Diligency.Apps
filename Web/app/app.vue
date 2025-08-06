<script setup lang="ts">
import SmoothScroll from './layouts/smooth-scroll.vue';

</script>

<template>
  <section class="relative">
    <NavigationTop />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    <LoadingFullPage />
  </section>
</template>