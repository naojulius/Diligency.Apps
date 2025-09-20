<template>
    <div class="md:col-span-2 w-full space-y-5">
        <div class="mb-4">
            <span class="text-4xl font-bold">{{ Text.app }}</span>
        </div>
        <p class="text-gray-300 mb-4 max-w-md">
            {{ Text.text[locale] }}
        </p>
        <WebFooterContact />
        <div class="flex space-x-4">
            <a v-for="(item, index) in Text.links" :key="index" :href="item.link"
                class="text-gray-300 hover:text-white transition-fast">
                <Icon :name="item.icon" class="size-6" />
            </a>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { Text } from './Text';

const { locale } = useI18n()
</script>