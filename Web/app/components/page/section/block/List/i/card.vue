<template>

    <div class="p-4 w-full md:h-[90vh] 2xl:h-auto cursor-pointer">
        <div
            class="relative flex flex-col h-full p-6 overflow-hidden transition-all bg-white border-2 rounded-lg duration-600 hover:bg-secondary border-secondary-600">
            <h1 class="pb-4 mb-4 text-5xl leading-none inter text-tertiary">
                {{Array.isArray(title)
                    ? title.map(t => t?.[locale]).join(', ')
                    : title?.[locale]
                }}
            </h1>
            <p class="flex flex-row items-start mb-3 inter text-tertiary" v-for="(item, index) in plan" :key="index">
                <span
                    class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 rounded-full bg-tertiary/70 text-primary">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                </span>
                <span class="-mt-1">
                    {{ item }}
                </span>
            </p>
            <div class="flex items-end h-full py-2 text-sm text-center border-t-1 border-secondary">
                {{ description[locale] }}
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { OFFER_PROPS } from '~/components/page/helpers/props/offer-props.helper';
import { AppLocaleType } from '~/components/page/types/commons/app-locale.type';
import type { LayoutI } from '~/components/page/types/commons/list/list-i.type';

const { locale } = useI18n()
const props = defineProps(OFFER_PROPS)


const title = computed(() => {
    var data = props.data as LayoutI;
    return data.title;
})

const plan = computed(() => {
    var data = props.data as LayoutI;
    return data.features?.[locale.value] ?? [];
})

const description = computed(() => {
    var data = props.data as LayoutI;
    return data.description ?? new AppLocaleType();
})

</script>