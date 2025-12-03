<template>
    <div :class="['w-full text-xl leading-7  z-10', props.customClass]" v-if="props.subtitle">
        {{ props.subtitle?.[locale] }}
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { AppLocale } from '~/types/interfaces/app-locale';

const { locale } = useI18n()

const props = defineProps({
    subtitle: {
        required: true,
        type: [Object, undefined] as PropType<AppLocale>,
        default: []
    },
    customClass: {
        required: false,
        type: String,
        default: "md:w-3/4 text-tertiary/80"
    },
})
</script>