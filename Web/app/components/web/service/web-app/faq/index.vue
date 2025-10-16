<template>
    <SectionFaq :title="title" :data="data" />
</template>

<script lang="ts" setup>
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const title = computed(() => {
    return store.GetWebAppFaqtitle()
})

const data = computed(() => {
    return store.GetWebAppFaqItems()
})
</script>