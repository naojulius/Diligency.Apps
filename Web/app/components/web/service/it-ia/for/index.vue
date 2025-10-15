<template>
    <SectionA :title="title" :subtitle="subtitle" :component="WebServiceItIaForList" />
</template>

<script lang="ts" setup>
import { WebServiceItIaForList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetItIaForTitle()
})

const subtitle = computed(() => {
    return store.GetItIaForSubtitle()
})
</script>