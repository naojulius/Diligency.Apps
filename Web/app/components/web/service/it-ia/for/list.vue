<template>
    <div class="w-full flex flex-col gap-2 md:flex-row  md:gap-8">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg flex items-center justify-center w-full">
            <div class="text-center w-full">
                <p class="text-text-secondary mb-4">{{ item[locale] }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const serviceStore = UseServiceStore()
const data = computed(() => {
    return serviceStore.GetServiceItIaForItems()
})
const { locale } = useI18n()
</script>