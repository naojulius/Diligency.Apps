<template>
    <section class="py-5 md:py-20 relative w-full h-auto">
        <div>
            <p class="text-3xl font-regular  text-tertiary opacity-90 text-center py-5 px-4">
                <span class="">
                    {{ Text.text[locale] }}
                </span>
            </p>
            <WebHomeFooterCta />
        </div>
    </section>
</template>
<script setup lang="ts">
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>