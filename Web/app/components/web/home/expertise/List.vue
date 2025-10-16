<template>
    <div class="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 ">
        <a v-for="(item, index) in items" :key="index" :href="item.link"
            class="p-4 transition-all duration-300 bg-gray-100 rounded-lg cursor-pointer card group hover:scale-105">
            <div class="flex flex-col text-center size-full">
                <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg transition-fast">
                    <Icon :name="item.icon" class="w-16 h-16 text-accent-200" />
                </div>
                <h3 class="h-auto text-xl font-semibold md:h-28 text-tertiary">{{ item.title[locale] }}</h3>
                <p class="h-full mb-4 text-text-secondary">{{ item.text[locale] }}</p>
                <div class="opacity-0 group-hover:opacity-100 transition-fast">
                    <div class="text-sm font-medium text-accent">
                        {{ item.technos.join(" • ") }}
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';

const store = UseHomeStore()
const { locale } = useI18n()

const items = computed(() => {
    return store.GetExpertiseItems()
})
</script>