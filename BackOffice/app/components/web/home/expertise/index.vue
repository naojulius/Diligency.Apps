<template>
    <section class="w-full px-4 py-10 md:px-10 2xl:px-35">
        <SectionTitle :title="title" />
        <SectionSubtitle :subtitle="subtitle" />
        <SpacingBlock />
        <WebHomeExpertiseList />
        <WebHomeExpertiseCta />
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetExpertiseTitle()
})

const subtitle = computed(() => {
    return store.GetExpertiseSubTitle()
})
</script>