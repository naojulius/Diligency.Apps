<script setup lang="ts">
import SmoothScroll from './layouts/smooth-scroll.vue';

</script>

<template>
  <section class="w-full">
    <NavigationTop />
    <SmoothScroll>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </SmoothScroll>
    <LoadingFullPage />
  </section>
</template>