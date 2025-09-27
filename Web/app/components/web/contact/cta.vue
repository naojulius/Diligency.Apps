<template>
    <section class="w-full p-10 px-4 md:px-10 2xl:px-35 py-10 md:py-20 relative h-auto">
        <div class="w-full flex flex-col md:flex-row">
            <div>
                <p class="text-4xl mb-8 opacity-90 text-secondary text-center font-semibold  py-5  w-full md:w-[700px]">
                    {{ Text.subtitle[locale] }}
                </p>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { Text } from './Text';

const { locale } = useI18n();
</script>