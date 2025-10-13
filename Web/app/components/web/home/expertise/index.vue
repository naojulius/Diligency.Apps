<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
            <span v-for="(item, index) in title">
                {{ item[locale] }}
            </span>
        </div>
        <div class="py-4 text-left relative z-10 text-gray-500 font-regular w-full md:w-[700px] text-xl font-regular">
            {{ subtitle[locale] }}
        </div>
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