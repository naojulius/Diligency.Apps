<template>
    <div class="md:col-span-2">
        <div class="flex items-center mb-4">
            <img src="/images/icons/android-chrome-192x192.png" class="size-18">
            <span class="text-2xl font-bold">{{ Text.app }}</span>
        </div>
        <p class="text-gray-300 mb-4 max-w-md">
            {{ Text.text[locale] }}
        </p>
        <div class="flex space-x-4">
            <a v-for="(item, index) in Text.links" :key="index" :href="item.link"
                class="text-gray-300 hover:text-white transition-fast">
                <Icon :name="item.icon" class="size-6" />
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Text } from './Text';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

const { locale } = useI18n()
</script>