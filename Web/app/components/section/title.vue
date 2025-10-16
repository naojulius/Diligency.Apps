<template>
    <div :class="['z-10 flex gap-3 text-4xl font-semibold', customClass]">
        <div :class="['min-w-[10px] max-w-[10px] rounded-full', customBackground]"></div>
        <div class="w-full">
            <div v-for="(item, index) in props.title" :key="index">
                {{ item[locale] }}
            </div>
        </div>
    </div>
    <SpacingSectionTitle />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    title: {
        required: true,
        type: Object as PropType<Array<AppLocale>>,
    },
    customClass: {
        required: false,
        type: String,
        default: "md:w-3/4 text-tertiary/80"
    },
    customBackground: {
        required: false,
        type: String,
        default: "bg-tertiary-500 "
    }
})
</script>