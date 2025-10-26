<template>
    <div class="w-full flex items-center gap-4 relative" v-if="props.type == 'list-d'">
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="prev"
            class="absolute left-0 -ml-19 z-10 bg-primary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center text-tertiary text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-left" />
        </button>
        <div v-for="(item, index) in data" :key="index"
            class="group min-w-[220px] flex-shrink-0 rounded bg-primary shadow cursor-pointer hover:shadow-2xl relative transition-all duration-300 overflow-hidden">
            <img :src="image(item)"
                class="object-cover h-52 rounded transform transition-all duration-200 group-hover:scale-110" alt="" />
            <div
                class="text-primary text-lg  group-hover:text-xl w-full text-center absolute top-0 right-0 size-full bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/70 transition-all duration-300">
                {{ text(item)[locale] }}
            </div>
        </div>
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="next"
            class="absolute right-0 -mr-25 z-10 bg-primary text-tertiary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center y text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-right" />
        </button>
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

let intervalId: number | null = null
const hovering = ref(false) // pause when true


const loopData = computed(() => [...props.data, ...props.data]) // duplicate for seamless loop

const carousel = ref<HTMLDivElement | null>(null)
const translateX = ref(0)
const itemWidth = 220

// Scroll functions
const next = () => {
    translateX.value += itemWidth
    if (translateX.value >= props.data.length * itemWidth) {
        translateX.value = 0 // seamless loop
    }
}

const prev = () => {
    translateX.value -= itemWidth
    if (translateX.value < 0) {
        translateX.value = (props.data.length - 1) * itemWidth
    }
}

// Auto-scroll every 3 seconds, pause when hovering
onMounted(() => {
    intervalId = window.setInterval(() => {
        if (!hovering.value) next()
    }, 5000)
})

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId)
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