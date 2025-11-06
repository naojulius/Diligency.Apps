<template>
    <SpacingBlock />
    <component :is="getItemComponent()" :data="items" :type="props.type" :image="image" :cta="cta" :title="props.title"
        :subtitle="props.subtitle" />
</template>

<script lang="ts" setup>
import { GetBlockListComponent } from '~/components/page/helpers/component.helper'
import type { AppLocaleType } from '~/components/page/types/commons/app-locale.type'
import type { CtaType } from '~/components/page/types/commons/cta.type'
import type { Layouts } from '~/components/page/types/commons/list'
import type { AppLocale } from '~/types/interfaces/app-locale'

const props = defineProps({
    title: {
        required: false,
        type: [Object, undefined] as PropType<Array<AppLocale>>,
    },
    subtitle: {
        type: [Array, Object, undefined] as PropType<AppLocaleType[] | AppLocaleType>,
        required: false,
    },
    data: {
        type: [Array, undefined] as PropType<(Layouts)[]>,
        required: true,
    },
    type: {
        type: String as PropType<string>,
        required: false,
    },
    image: {
        type: String as PropType<string>,
        required: false,
    },
    cta: {
        type: [Array, undefined] as PropType<(CtaType)[]>,
        required: false,
    },
})

const getItemComponent = () => {
    return GetBlockListComponent(props.type ?? "")
}

const image = computed(() => { return props.image });

const items = computed(() => {
    return props.data ?? []
})

const cta = computed(() => {
    return props.cta ?? []
})

</script>