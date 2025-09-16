<template>
    <button
        class="px-4 transition-all duration-300 h-14 bg-tertiary text-secondary w-full md:w-auto rounded-lg flex items-center justify-center gap-3 active:bg-secondary hover:bg-secondary active:text-tertiary hover:text-tertiary active:ring-1 active:ring-tertiary hover:ring-1 hover:ring-tertiary">
        <Icon name="lucide:calendar" class="size-7 fill-accent" />
        <span class="font-semibold">
            {{ Text.cta.reserveStrategyCall[locale] }}
        </span>
    </button>
</template>
<script lang="ts" setup>
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>