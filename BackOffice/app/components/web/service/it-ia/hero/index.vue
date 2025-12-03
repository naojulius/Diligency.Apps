<template>
    <HeroService :title="title" :subtitle="subtitle" :image="background" :cta="WebServiceItIaHeroCtaA" />
</template>

<script lang="ts" setup>
import { WebServiceItIaHeroCtaA } from '#components';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const title = computed(() => {
    return store.GetItIaHeroTitle()
})

const subtitle = computed(() => {
    return store.GetItIaHeroSubTitle()
})

const background = computed(() => {
    return store.GetItIaHeroBackground()
})
</script>