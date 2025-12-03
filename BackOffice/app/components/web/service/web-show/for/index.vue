<template>
    <SectionA :title="title" :subtitle="subtitle" :component="WebServiceWebShowForList" />
</template>
<script lang="ts" setup>
import { WebServiceWebShowForList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetWebShowForTitle()
})

const subtitle = computed(() => {
    return store.GetWebShowForSubtitle()
})
</script>