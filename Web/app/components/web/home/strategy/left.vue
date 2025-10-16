<template>
    <div class="w-full h-full p-2">
        <SectionTitle :title="title" />
        <SectionSubtitle :subtitle="subtitle" custom-class="w-full" />
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetStrategyTitle()
})

const subtitle = computed(() => {
    return store.GetStrategySubTitle()
})
</script>