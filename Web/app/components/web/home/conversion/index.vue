<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10 md:py-20 relative w-full h-auto">
        <img src="/images/calendar/calendar.jpg" class="absolute top-0 left-0 size-full opacity-60">
        <div class="w-full flex flex-col md:flex-row">
            <div>
                <div class="text-4xl font-semibold flex gap-3 text-tertiary opacity-90">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div v-for="(title, index) in Text.title[locale]" :key="index">
                            {{ title }}
                        </div>
                    </div>
                </div>
                <p class="text-xl mb-8 opacity-90 text-tertiary text-center md:text-left py-5  w-full md:w-[700px]">
                    {{ Text.subtitle[locale] }}
                </p>
            </div>
            <div class="w-full py-5 flex flex-col gap-2 items-center justify-center px-4 opacity-90 ">
                <WebHomeConversionReserveCall />
                <WebHomeConversionApplyProject />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
</script>