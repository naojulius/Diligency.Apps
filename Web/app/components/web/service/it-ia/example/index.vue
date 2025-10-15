<template>
    <SectionA :title="title" :component="WebServiceItIaExampleList" />
</template>

<script lang="ts" setup>
import { WebServiceItIaExampleList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetItIaWExampleTitle()
})
</script>
