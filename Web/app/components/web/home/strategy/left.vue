<template>
    <div class="w-full h-full p-2">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-secondary-600 rounded-full"></div>
            <span>{{ Text.title[locale] }}</span>
        </div>
        <div class="py-5 text-xl text-gray-500 font-regular">
            {{ Text.subtitle[locale] }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { Text } from './Text';

const { locale } = useI18n()
</script>