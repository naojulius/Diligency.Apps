<template>
    <section class="w-full px-4 py-10 md:px-10 2xl:px-35">
        <SectionTitle :title="title" />
        <SectionSubtitle :subtitle="subtitle" />
        <SpacingBlock />
        <div class="w-full mx-auto md:w-2/3">
            <WebHomeOfferCards />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetOfferTitle()
})

const subtitle = computed(() => {
    return store.GetOfferSubTitle()
})
</script>
