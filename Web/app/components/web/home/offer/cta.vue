<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false"
        :class="['text-xl transition-all duration-100 h-14 bg-primary text-tertiary w-full rounded-lg flex items-center md:items-start justify-center md:justify-start gap-3', hover ? 'font-bold' : 'font-regular']">
        <span class="">{{ Text.cta[locale] }}</span>
        <Icon name="lucide:arrow-right"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </button>
</template>

<script lang="ts" setup>
const hover = ref(false)

import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>