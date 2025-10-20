<template>
    <div class="space-y-4">
        <p v-for="(item, index) in subtitles" :key="index" class="text-lg text-gray-700">
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
        required: true,
        default: []
    }
})

const subtitles = computed(() => {
    if (!props.data) return []
    return Array.isArray(props.data) ? props.data : [props.data]
})
</script>