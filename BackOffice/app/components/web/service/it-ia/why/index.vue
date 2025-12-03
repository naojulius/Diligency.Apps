<template>
    <SectionA :title="title" :subtitle="subtitle" />
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetItIaWhyTitle()
})

const subtitle = computed(() => {
    return store.GetItIaWhySubtitle()
})
</script>