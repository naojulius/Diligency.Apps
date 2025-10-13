<template>
    <div class="p-4 w-full md:h-[90vh] cursor-pointer">
        <div
            class="transition-all duration-600 hover:bg-secondary bg-white h-full p-6 rounded-lg border-2 border-secondary-600 flex flex-col relative overflow-hidden">
            <h1 class="inter text-5xl text-tertiary pb-4 mb-4 leading-none">
                {{ plan.title[locale] }}
            </h1>
            <p class="inter flex flex-row items-start text-tertiary mb-3"
                v-for="(essential, index) in plan.features[locale]" :key="index">
                <span
                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-tertiary/70 text-primary rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>
                <span class="-mt-1">
                    {{ essential }}
                </span>
            </p>
            <div class="text-sm text-center border-t-1 border-secondary py-2 h-full flex items-end">
                {{ plan.description[locale] }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const plan = computed(() => {
    return store.GetOfferPlanEssentialItems()
})
</script>