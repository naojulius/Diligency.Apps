<template>
    <SpacingBlock />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10" v-if="props.type == 'list-a'">
        <component v-for="(item, index) in items" :key="index" :is="getItemComponent()" :data="item" />
    </div>
    <div class="container px-5 py-0 mx-auto w-full md:w-3/4" v-if="props.type == 'list-b'">
        <component v-for="(item, index) in items" :key="index" :is="getItemComponent()" :data="item" />
    </div>
    <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-5 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        v-if="props.type == 'list-c'">
        <div class="lg:pt-4">
            <div class="lg:max-w-lg py-2">
                <component v-for="(item, index) in items" :key="index" :is="getItemComponent()" :data="item" />
            </div>
        </div>
        <img :src="listCImage" alt="Product screenshot"
            class="hover:scale-105 transition-all duration-500 shadow-xl cursor-pointer w-3xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:opacity-90"
            width="2432" height="1442" />
    </div>
    <div class="w-full flex items-center gap-4 relative" v-if="props.type == 'list-d'">
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="prev"
            class="absolute left-0 -ml-19 z-10 bg-primary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center text-tertiary text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-left" />
        </button>
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="next"
            class="absolute right-0 -mr-25 z-10 bg-primary text-tertiary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center y text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-right" />
        </button>
        <component v-for="(item, index) in items" :key="index" :is="getItemComponent()" :data="item" />
    </div>
    <div class="z-10 flex flex-col items-center justify-center md:justify-start w-full gap-5 md:flex-row"
        v-if="props.type == 'list-d'">
        <component :is="getCta(item.type ?? '')" v-for="(item, index) in cta" :key="index" :data="item" />
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { GetBLockListComponent, GetCtaComponent } from '~/components/page/helpers/component.helper'
import type { BlockTypeItemsReturnType } from '~/components/page/types/commons/block.type'
import type { CtaType } from '~/components/page/types/commons/cta.type'

const { locale } = useI18n()

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


const listCImage = computed(() => { return props.image });

const items = computed(() => {
    return props.data ?? []
})

const cta = computed(() => {
    return props.cta ?? []
})

const getCta = (type: string) => {
    return GetCtaComponent(type)
}

const loopData = computed(() => [...items.value, ...items.value]) // duplicate for seamless loop

const carousel = ref<HTMLDivElement | null>(null)
const translateX = ref(0)
const itemWidth = 220

let intervalId: number | null = null
const hovering = ref(false) // pause when true

// Scroll functions
const next = () => {
    translateX.value += itemWidth
    if (translateX.value >= items.value.length * itemWidth) {
        translateX.value = 0 // seamless loop
    }
}

const prev = () => {
    translateX.value -= itemWidth
    if (translateX.value < 0) {
        translateX.value = (items.value.length - 1) * itemWidth
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
</script>