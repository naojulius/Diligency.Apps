<template>
    <div :class="['space-y-4 text-center md:text-left', getClass]">
        <p v-for="(item, index) in subtitles" :key="index" class="text-lg">
            {{ item[locale] }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import type { AppLocaleType } from '~/components/page/types/commons/app-locale.type'

const { locale } = useI18n()

const props = defineProps({
    data: {
        type: [Array, Object, undefined] as PropType<AppLocaleType[] | AppLocaleType>,
        required: false,
    },
    customClass: {
        type: String,
        required: false,
        default: "text-tertiary/80"
    }
})

const subtitles = computed(() => {
    if (!props.data) return []
    return Array.isArray(props.data) ? props.data : [props.data]
})

const getClass = computed(() => {
    return props.customClass
})
</script>