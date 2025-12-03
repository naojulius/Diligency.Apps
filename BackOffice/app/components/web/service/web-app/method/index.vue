<template>
    <SectionA :title="title" :subtitle="subtitle" :component="WebServiceWebAppMethodList" custom-class="bg-secondary" />
</template>

<script lang="ts" setup>
import { WebServiceWebAppMethodList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()
const title = computed(() => {
    return store.GetWebAppMethodTitle()
})

const subtitle = computed(() => {
    return store.GetWebAppMethodSubtitle()
})
</script>