<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 text-center">
            <div
                class="w-full flex items-center justify-center  md:w-2/3 md:aspect-square md:rounded-full overflow-hidden">
                <img class="object-cover w-full rounded-xl aspect-square" src="/images/hero/000.jpg" alt="">
            </div>
            <h1 class="capitalize inter mt-2 text-xl font-semibold">arthur melo</h1>
            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">design director</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const agencyStore = UseAgencyStore()
const data = ref(4)
const { locale } = useI18n()
</script>