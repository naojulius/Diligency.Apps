<template>
    <section class="w-full bg-primary py-[0rem] mx-auto">
        <div class="w-full h-auto container mx-auto py-[1rem] text-center
                         md:w-4/5 xl:w-3/5  md:text-left md:flex-row  
                                flex flex-col">
            <div class="w-full inter px-4 py-[1rem]">
                <h1 class="text-3xl md:text-4xl text-center md:text-left font-bold text-tertiary-500">
                    {{ data[locale] }}
                </h1>
                <WebAgencyJobcarrierProfileList />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';

const { locale } = useI18n();
const store = UseAgencyStore()
const data = computed(() => {
    return store.GetAgencyJobCarrierProfileTitle()
})
</script>