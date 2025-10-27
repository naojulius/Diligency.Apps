<template>
    <div class="w-full flex flex-col md:flex-row items-center gap-4 relative" v-if="props.type == 'list-d'">
        <div v-for="(item, index) in data" :key="index"
            class="w-full group bg-primary shadow cursor-pointer hover:shadow-2xl relative transition-all duration-300 overflow-hidden border border-tertiary/50">
            <img :src="image(item)"
                class="object-cover h-52 transform transition-all duration-200 group-hover:scale-110" alt="" />
            <div
                class="text-primary text-lg  group-hover:text-xl w-full text-center absolute top-0 right-0 size-full bg-black/30 flex items-center justify-center group-hover:bg-black/70 transition-all duration-300">
                {{ text(item)[locale] }}
            </div>
        </div>
    </div>
    <div class="z-10 flex flex-col items-center justify-center md:justify-start w-full gap-5 md:flex-row"
        v-if="props.cta">
        <component :is="getCta(item)" v-for="(item, index) in props.cta" :key="index" :data="item" />
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { GetCtaComponent } from '~/components/page/helpers/component.helper';
import type { BlockTypeItemsReturnType } from '~/components/page/types/commons/block.type';
import { CtaType } from '~/components/page/types/commons/cta.type';

const { locale } = useI18n()
const props = defineProps({
    data: {
        type: Object as PropType<(BlockTypeItemsReturnType[])>,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: ""
    },
    cta: {
        type: Object as PropType<(CtaType[])>,
        required: false,
        default: null
    },
})

const image = (item: BlockTypeItemsReturnType) => {
    return (item as any)?.image ?? null
};

const text = (item: BlockTypeItemsReturnType) => {
    return (item as any)?.text ?? null
}

const getCta = (cta: CtaType) => {
    return GetCtaComponent(cta?.type ?? '') ?? new CtaType()
}

</script>