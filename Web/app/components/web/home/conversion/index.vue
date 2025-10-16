<template>
    <section class="relative w-full h-auto px-4 py-10 md:px-10 2xl:px-35 md:py-20">
        <WebHomeConversionBackground />
        <div class="flex flex-col w-full md:flex-row">
            <div class="flex flex-col w-full">
                <SectionTitle :title="title" custom-class="text-secondary" custom-background="bg-secondary" />
                <SectionSubtitle :subtitle="subtitle" custom-class="text-secondary" />
            </div>


            <div class="flex flex-col items-center justify-center w-full gap-2 px-4 py-5 opacity-90 ">
                <WebHomeConversionCtaA />
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
    return store.GetConversionTitle()
})

const subtitle = computed(() => {
    return store.GetConversionSubTitle()
})

const background = computed(() => {
    return store.GetConversionBacground()
})
</script>