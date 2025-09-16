<template>
    <section class="py-5 md:py-20">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div v-for="(title, index) in Text.title[locale]" :key="index">
                            {{ title }}
                        </div>
                    </div>
                </div>
                <div class="py-5 text-xl text-gray-500 font-regular w-full md:w-[700px]">
                    {{ Text.subtitle[locale] }}
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card" v-for="(item, index) in Text.testimonials" :key="index">
                    <div class="flex items-center mb-4">
                        <img :src="item.image" alt="hub-img" class="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <div class="font-semibold text-tertiary">{{ item.name }}</div>
                            <div class="text-sm text-gray-600">{{ item.role }}</div>
                        </div>
                    </div>
                    <blockquote class="text-tertiary italic mb-4">
                        {{ item.quote[locale] }}
                    </blockquote>
                </div>
            </div>

            <div class="w-full py-10">
                <WebHomeHubCta />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
const hover = ref(false)

import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>