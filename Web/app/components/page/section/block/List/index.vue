<template>
    <SpacingBlock />
    <component :is="getItemComponent()" :data="items" :type="props.type" :image="image" :cta="cta" :title="props.title"
        :subtitle="props.subtitle" />
</template>

<script lang="ts" setup>
import { GetBLockListComponent } from '~/components/page/helpers/component.helper'
import type { AppLocaleType } from '~/components/page/types/commons/app-locale.type'
import type { CtaType } from '~/components/page/types/commons/cta.type'
import type { ListLayout } from '~/components/page/types/commons/list'
import type { AppLocale } from '~/types/interfaces/app-locale'

const props = defineProps({
    title: {
        required: false,
        type: Object as PropType<Array<AppLocale>>,
    },
    subtitle: {
        type: [Array, Object, undefined] as PropType<AppLocaleType[] | AppLocaleType>,
        required: true,
        default: []
    },
    data: {
        type: Array as PropType<(ListLayout)[]>,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: ""
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    cta: {
        type: Array as PropType<(CtaType)[]>,
        required: false,
        default: []
    },
})

const getItemComponent = () => {
    return GetBLockListComponent(props.type)
}

const image = computed(() => { return props.image });

const items = computed(() => {
    return props.data ?? []
})

const cta = computed(() => {
    return props.cta ?? []
})

</script>