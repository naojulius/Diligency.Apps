<template>
    <section :class="[defaultClass]">
        <PageSectionBlockTitle :title="titleData!" :custom-class="getCustomClass" />
        <PageSectionBlockSubtitle :data="subtitleData!" />
        <PageSectionBlockList :data="blockData!" :type="props.type" :image="imageData" :cta="ctaData" />
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { BlockType } from '../../types/commons/block.type';

const { locale } = useI18n()

const props = defineProps({
    data: {
        required: true,
        type: [Object, undefined] as PropType<BlockType>,
    },
    type: {
        required: true,
        type: [String],
        default: ""
    },
})

const defaultClass = computed(() => {
    return "w-full px-4 md:px-10 2xl:px-35 py-20"
})
const titleData = computed(() => {
    return props.data.title
})

const subtitleData = computed(() => {
    return props.data.subtitle
})

const blockData = computed(() => {
    return props.data.items ?? []
})

const imageData = computed(() => {
    return props.data.image ?? ""
})

const ctaData = computed(() => {
    return props.data.cta ?? []
})

const getCustomClass = computed(() => {
    if (props.data.type == "list-b") {
        return "w-full md:w-3/4 mx-auto  text-tertiary/80"
    }
    return ""
})
</script>
