<template>
    <section :class="['w-full px-4 md:px-10 2xl:px-35 py-10', props.customClass]">
        <SectionTitle :title="props.title" />
        <SectionSubtitle :subtitle="props.subtitle!" />
        <br v-if="props.subtitle && props.subtitle2">
        <div class="w-full text-xl leading-7 text-tertiary/80 md:w-3/4" v-if="props.subtitle">
            {{ props.subtitle2?.[locale] }}
        </div>
        <SpacingBlock v-if="props.component && props.subtitle" />
        <component :is="props.component" />
    </section>
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