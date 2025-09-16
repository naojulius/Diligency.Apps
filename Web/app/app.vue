<script setup lang="ts">
import SmoothScroll from './layouts/smooth-scroll.vue';

</script>

<template>
  <section class="w-full">
    <!-- <DebugScreen /> -->
    <NavigationTop />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LoadingFullPage />
  </section>
</template>