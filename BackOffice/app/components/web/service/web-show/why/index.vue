<template>
    <SectionA :title="title" :subtitle="subtitle" :subtitle2="subtitle2" custom-class="bg-secondary" />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetWebShowWhyTitle()
})

const subtitle = computed(() => {
    return store.GetWebShowWhySubtitle()
})

const subtitle2 = computed(() => {
    return store.GetWebShowWhySubtitle2()
})
</script>