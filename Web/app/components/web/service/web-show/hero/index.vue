<template>
    <HeroService :title="title" :subtitle="subtitle" :image="background" />
</template>
<script lang="ts" setup>
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const title = computed(() => {
    return store.GetWebShowHeroTitle()
})

const subtitle = computed(() => {
    return store.GetWebShowHeroSubtitle()
})

const background = computed(() => {
    return store.GetWebShowHeroBackground()
})
</script>