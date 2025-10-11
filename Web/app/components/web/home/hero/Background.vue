<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <video class="size-full object-cover" autoplay muted loop playsinline>
            <source :src="background" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script setup lang="ts">

import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()

const background = computed(() => {
    return store.GetHeroBackground()
})

</script>