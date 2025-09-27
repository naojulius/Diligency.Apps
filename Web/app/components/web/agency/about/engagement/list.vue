<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
            <div class="text-center">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                    <Icon :name="item.icon" class="h-16 w-16 text-accent-200" />
                </div>
                <h3 class="text-tertiary text-xl font-semibold mb-3">{{ item.title }}</h3>
                <p class="text-text-secondary mb-4">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const agencyStore = UseAgencyStore()
const data = ref(agencyStore.GetEngagement())
const { locale } = useI18n()
</script>