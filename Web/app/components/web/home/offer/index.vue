<template>
    <section class="py-10 md:py-24 relative">
        <div class="absolute h-[36.5rem] w-full top-0 bg-gradient-to-t from-secondary-500 to-tertiary-500 -z-10"></div>

        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-12">
                <div class="text-4xl font-semibold flex gap-3 text-secondary">
                    <div class="min-w-[10px] max-w-[10px] bg-secondary-600 rounded-full"></div>
                    <div>
                        <div v-for="(title, index) in Text.title[locale]" :key="index">
                            {{ title }}
                        </div>
                    </div>
                </div>
                <p class="text-gray-300 text-2xl leading-7 w-full md:w-[700px] py-10">
                    {{ Text.subtitle[locale] }}
                </p>
            </div>
            <WebHomeOfferCard />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Text } from './Text';

const { locale } = useI18n()
</script>
