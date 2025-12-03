<template>
    <SectionA :title="title" :subtitle="subtitle" :component="WebServiceWebAppWebList" />
</template>

<script lang="ts" setup>
import { WebServiceWebAppWebList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()
const title = computed(() => {
    return store.GetWebAppWebTitle()
})

const subtitle = computed(() => {
    return store.GetWebAppWebSubtitle()
})
</script>