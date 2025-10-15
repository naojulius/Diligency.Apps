<template>
    <HeroAgency :title="title" :subtitle="subtitle" :image="background" />
</template>

<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()

const title = computed(() => {
    return store.GetAgencyJobCarrierHeroTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyJobCarrierHeroSubtitle()
})

const background = computed(() => {
    return store.GetAgencyJobCarrierHeroBackground()
})

</script>