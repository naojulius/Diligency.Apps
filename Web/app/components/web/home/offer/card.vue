<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Plan } from './interface';
import { Text } from './Text';

const { locale } = useI18n();
let ESSENTIAL = ref<Plan | undefined>()
let PREMIUM = ref<Plan | undefined>()

onMounted(async () => {
    ESSENTIAL.value = Text.plans?.find(t => t.id == "essential");
    PREMIUM.value = Text.plans?.find(t => t.id == "premium");
})

</script>
<template>
    <section class="text-gray-600 body-font overflow-hidden px-4 md-px-0">
        <div class="flex flex-col md:flex-row -m-4">
            <div class="p-4 w-full md:h-[90vh]">
                <div
                    class="transition-all duration-600 hover:bg-secondary bg-white h-full p-6 rounded-lg border-2 border-secondary-600 flex flex-col relative overflow-hidden">
                    <h1 class="inter text-5xl text-tertiary pb-4 mb-4 leading-none">
                        {{ ESSENTIAL?.title[locale] }}
                    </h1>
                    <p class="inter flex flex-row items-start text-tertiary mb-3"
                        v-for="(essential, index) in ESSENTIAL?.features[locale]" :key="index">
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
                        {{ ESSENTIAL?.description[locale] }}
                    </div>
                </div>
            </div>
            <div class="p-4 w-full md:h-[90vh]">
                <div
                    class="transition-all duration-600 hover:bg-secondary cursor-pointer h-full p-6 rounded-lg border-2 border-tertiary-500 flex flex-col relative overflow-hidden bg-secondary-300">
                    <h1 class="text-5xl text-secondary-700 pb-4 mb-4 border-b border-gray-200 leading-none">
                        {{ PREMIUM?.title[locale] }}
                    </h1>
                    <p class="inter flex flex-row items-start text-tertiary mb-3"
                        v-for="(premium, index) in PREMIUM?.features[locale]" :key="index">
                        <span
                            class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-tertiary/70 text-primary rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        {{ premium }}
                    </p>
                    <div class="text-sm text-center border-t-1 border-secondary py-2 h-full flex items-end">
                        {{ PREMIUM?.description[locale] }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>