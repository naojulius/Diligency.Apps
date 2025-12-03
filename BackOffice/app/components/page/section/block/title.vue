<template>
    <div :class="['z-10 flex gap-3 text-4xl font-semibold', getClass]">
        <div :class="['hidden md:block min-w-[10px] max-w-[10px] rounded-full', customBackground]"></div>
        <div class="w-full text-center md:text-left">
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
        default: []
    },
    customClass: {
        required: false,
        type: String,
        default: ""
    },
    customBackground: {
        required: false,
        type: String,
        default: "bg-tertiary-500"
    }
})

const getClass = computed(() => {
    if (props.customClass) {
        return (props.customClass)
    }
    else {
        return "w-full md:w-3/4 text-tertiary/80"
    }
})
</script>