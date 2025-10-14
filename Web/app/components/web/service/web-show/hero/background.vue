<template>
    <div class="absolute top-0 left-0 size-full z-0">
        <img :src="data" class="size-full object-cover" />
        <div class="absolute inset-0 bg-black/80"></div>
    </div>
</template>
<script lang="ts" setup>
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const data = computed(() => {
    return store.GetWebShowHeroBackground()
})
</script>
