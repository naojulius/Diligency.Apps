<template>
    <SpacingBlock />
    <component :is="getItemComponent()" :data="items" :type="props.type" :image="image" :cta="cta" />
</template>

<script lang="ts" setup>
import { GetBLockListComponent } from '~/components/page/helpers/component.helper'
import type { BlockTypeItemsReturnType } from '~/components/page/types/commons/block.type'
import type { CtaType } from '~/components/page/types/commons/cta.type'

const props = defineProps({
    data: {
        type: Array as PropType<(BlockTypeItemsReturnType)[]>,
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