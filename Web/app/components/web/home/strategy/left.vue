<template>
    <div class="w-full h-full p-2">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-secondary-600 rounded-full"></div>
            <span v-for="(item, index) in title">
                {{ item[locale] }}
            </span>
        </div>
        <SpacingSectionTitle />
        <div class="py-5 text-xl text-gray-500 font-regular">
            {{ subtitle[locale] }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetStrategyTitle()
})

const subtitle = computed(() => {
    return store.GetStrategySubTitle()
})
</script>