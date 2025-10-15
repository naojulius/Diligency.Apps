<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="px-4 md:px-10 2xl:px-35 flex items-center justify-center flex-col gap-4">
            <div class="w-full py-0 flex flex-col gap-2 text-xl font-bold  text-center text-tertiary/90">
                {{ props.text?.[locale] }}
            </div>
            <div class="w-full flex flex-col md:flex-row items-center justify-center z-10 gap-5">
                <component :is="props.ctaA" />
                <component :is="props.ctaB" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    text: {
        required: false,
        type: Object as PropType<AppLocale>,
    },
    ctaA: {
        required: false,
        type: Object as PropType<Component>,
    },
    ctaB: {
        required: false,
        type: Object as PropType<Component>,
    }
})
</script>