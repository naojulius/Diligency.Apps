<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 ">
        <div class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg"
            v-for="(item, index)  in Text" :key="index">
            <div class="text-center">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                    <Icon :name="item.icon" class="h-16 w-16 text-accent-200" />
                </div>
                <h3 class="text-tertiary text-xl font-semibold mb-3">{{ item.title[locale] }}</h3>
                <p class="text-text-secondary mb-4">{{ item.description[locale] }}</p>
                <div class="opacity-0 group-hover:opacity-100 transition-fast">
                    <div class="text-sm text-accent font-medium">
                        {{ item.technos.join(" • ") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>