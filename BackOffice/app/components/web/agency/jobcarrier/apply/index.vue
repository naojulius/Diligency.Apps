<template>
    <section class="w-full py-[1rem] mx-auto bg-secondary">
        <div class="w-full h-auto container mx-auto py-[1rem] text-center
                         md:w-4/5 xl:w-3/5  md:text-left md:flex-col  
                                flex flex-col">
            <div class="w-full inter px-4 md:px-0 py-[3rem]">
                <h1 class="text-3xl md:text-4xl text-center md:text-left font-bold text-tertiary-500">
                    {{ title[locale] }}
                </h1>
                <h2 class="text-lg text-center md:text-left pt-4 text-tertiary/80"
                    v-html="formatMailOntext(text[locale] as string)">

                </h2>
            </div>
            <div>
                <WebAgencyJobcarrierApplyCta />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';

const { locale } = useI18n();
const store = UseAgencyStore()

const title = computed(() => {
    return store.GetAgencyJobCarrierApplyTitle()
})

const text = computed(() => {
    return store.GetAgencyJobCarrierApplyText()
})

const formatMailOntext = (inputText: string) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    return inputText.replace(emailRegex, '<span class="font-bold cursor-pointer underline hover:text-secondary-800 transition-all duration-500">$1</span>');
};
</script>