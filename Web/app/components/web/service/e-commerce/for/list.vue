<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg flex items-center justify-center">
            <div class="text-center">
                <p class="text-text-secondary mb-4">{{ item[locale] }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const serviceStore = UseServiceStore()
const data = ref(serviceStore.GetForItemsLit())
const { locale } = useI18n()
</script>