<template>
    <div class="p-4 w-full md:h-[90vh] 2xl:h-auto cursor-pointer">
        <div
            class="relative flex flex-col h-full p-6 overflow-hidden transition-all bg-white border-2 rounded-lg duration-600 hover:bg-secondary border-secondary-600">
            <h1 class="pb-4 mb-4 text-5xl leading-none inter text-tertiary">
                {{ plan.title[locale] }}
            </h1>
            <p class="flex flex-row items-start mb-3 inter text-tertiary"
                v-for="(essential, index) in plan.features[locale]" :key="index">
                <span
                    class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 rounded-full bg-tertiary/70 text-primary">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>
                <span class="-mt-1">
                    {{ essential }}
                </span>
            </p>
            <div class="flex items-end h-full py-2 text-sm text-center border-t-1 border-secondary">
                {{ plan.description[locale] }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const plan = computed(() => {
    return store.GetOfferPlanEssentialItems()
})
</script>