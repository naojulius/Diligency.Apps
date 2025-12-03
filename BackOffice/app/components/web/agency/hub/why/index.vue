<template>
    <section class="relative py-10 md:py-24 bg-secondary">
        <div class="absolute h-[36.5rem] w-full top-0 bg-primary -z-10"></div>
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-12">
                <SectionTitle :title="title" />
                <SectionSubtitle :subtitle="subtitle" />
            </div>
            <WebAgencyHubWhyLastArticle />
            <WebAgencyHubWhyCta />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetAgencyHubWhyTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyHubWhySubtitle()
})

</script>
