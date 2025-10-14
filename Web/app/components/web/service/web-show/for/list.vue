<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-102 hover:border-secondary hover:border-1 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
            <div class="text-center">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                    <Icon :name="item.icon" class="h-16 w-16 text-accent-200" />
                </div>
                <h3 class="text-tertiary text-lg font-semibold mb-3">{{ item.name[locale] }}</h3>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const data = computed(() => {
    return store.GetWebShowForItems()
})
</script>