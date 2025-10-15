<template>
    <section :class="['w-full px-4 md:px-10 2xl:px-35 py-10', props.customClass]">
        <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
            <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
            <span v-for="(item, index) in props.title" :key="index">
                {{ item[locale] }}
            </span>
        </div>
        <SpacingSectionTitle />
        <div class="text-tertiary/80 text-xl leading-7 w-full md:w-3/4" v-if="props.subtitle">
            {{ props.subtitle?.[locale] }}
        </div>
        <br v-if="props.subtitle && props.subtitle2">
        <div class="text-tertiary/80 text-xl leading-7 w-full md:w-3/4" v-if="props.subtitle">
            {{ props.subtitle2?.[locale] }}
        </div>
        <SpacingBlock v-if="props.component && props.subtitle" />
        <component :is="props.component" />
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    title: {
        required: true,
        type: Object as PropType<Array<AppLocale>>,
    },
    subtitle: {
        required: false,
        type: Object as PropType<AppLocale>,
    },
    subtitle2: {
        required: false,
        type: Object as PropType<AppLocale>,
    },
    component: {
        required: false,
        type: Object as PropType<Component>,
    },
    customClass: {
        required: false,
        type: String,
        default: "bg-primary"
    }
})
</script>