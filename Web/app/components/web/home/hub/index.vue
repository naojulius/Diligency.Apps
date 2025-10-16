<template>
    <section class="py-5 md:py-20">
        <div class="px-4 md:px-10 2xl:px-35">
            <SectionTitle :title="title" />
            <SectionSubtitle :subtitle="subtitle" />
            <SpacingBlock />
            <WebHomeHubTestimonial />
            <div class="w-full py-10">
                <WebHomeHubCta />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetHubTitle()
})

const subtitle = computed(() => {
    return store.GetHubSubTitle()
})
</script>