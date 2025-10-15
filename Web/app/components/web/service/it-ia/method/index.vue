<template>
    <SectionA :title="title" :component="WebServiceItIaMethodList" />
</template>

<script lang="ts" setup>
import { WebServiceItIaMethodList } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetItIaWMethodTitle()
})
</script>
