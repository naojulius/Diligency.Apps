<template>
    <HeroAgency :title="title" :subtitle="subtitle" :image="background" />
</template>

<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()

const title = computed(() => {
    return store.GetAgencyAboutHeroTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyAboutHeroSubtitle()
})

const background = computed(() => {
    return store.GetAgencyAboutHeroBackground()
})

</script>