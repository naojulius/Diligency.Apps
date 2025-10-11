<template>
    <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col "
            v-for="(item, index) in data" :key="index">
            <div
                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-secondary-400 text-accent-500 flex-shrink-0">
                <Icon :name="item.icon" size="42" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-tertiary text-2xl inter font-bold mb-2">{{ item.name[locale] }}</h2>
                <p class="leading-relaxed text-tertiary/80 text-base inter">{{ item.text[locale] }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';

const { locale } = useI18n();
const store = UseAgencyStore()
const data = ref(store.GetAgencyJobCarrierProfileItems())
</script>