<template>
    <HeroService :title="title" :subtitle="subtitle" :image="background" :cta="WebServiceWebAppHeroCta" />
</template>

<script lang="ts" setup>
import { WebServiceWebAppHeroCta } from '#components';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const title = computed(() => {
    return store.GetWebAppHeroTitle()
})

const subtitle = computed(() => {
    return store.GetWebAppHeroSubTitle()
})

const background = computed(() => {
    return store.GetWebAppHeroBackground()
})
</script>