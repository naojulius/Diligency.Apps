<template>
    <h1 id="hero"
        class="text-center text-[2.5rem]/13 xl:text-6xl/16 md:text-7xl/20 font-bold text-secondary tracking-normal z-10 w-full">
        <span v-for="(item, index) in title" :key="index">
            {{ item[locale] }}
        </span>
    </h1>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    title: {
        required: true,
        type: Object as PropType<AppLocale[]>,
    },
    customClass: {
        required: false,
        type: String,
        default: "md:w-3/4 text-tertiary/80"
    },
})
</script>