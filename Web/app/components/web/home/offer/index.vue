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
            <div class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                <div v-for="(plan, idx) in Text.plans" :key="idx"
                    class="flex flex-col w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300 p-8 xl:p-12">
                    <!-- Header -->
                    <div class="border-b border-gray-200 pb-9 mb-9 text-center">
                        <div class="w-16 h-16 rounded-full bg-secondary-50 mx-auto flex justify-center items-center">
                            <Icon :name="plan.icon" class="w-14 h-14 text-accent opacity-50" />
                        </div>
                        <h3 class="text-2xl font-bold my-7 text-tertiary-500">{{ plan.title[locale] }}</h3>
                    </div>

                    <!-- Features -->
                    <ul class="space-y-6 text-left text-lg text-gray-600">
                        <li v-for="(feature, i) in plan.features[locale]" :key="i"
                            class="flex items-center space-x-3.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            <span>{{ feature }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="py-10">
                <WebHomeOfferCta />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>
