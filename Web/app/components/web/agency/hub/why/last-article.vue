<template>
    <div class="w-full flex items-center relative">
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="prev"
            class="absolute left-0 -ml-9 z-10 bg-primary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center text-tertiary text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-left" />
        </button>
        <button @mouseenter="hovering = true" @mouseleave="hovering = false" @click="next"
            class="absolute right-0 -mr-9 z-10 bg-primary text-tertiary border-1 border-tertiary h-9 aspect-square rounded-full flex items-center justify-center y text-2xl hover:bg-primary hover:border-2 hover:border-tertiary hover:text-tertiary transition-all duration-100 hover:text-3xl">
            <Icon name="lucide:chevron-right" />
        </button>
        <div class="flex overflow-hidden w-full" @mouseenter="hovering = true" @mouseleave="hovering = false">
            <div ref="carousel" class="flex gap-4 transition-transform duration-500"
                :style="{ transform: `translateX(-${translateX}px)` }">
                <div v-for="(item, index) in loopData" :key="index"
                    class="group min-w-[220px] flex-shrink-0 rounded bg-primary shadow cursor-pointer hover:shadow-2xl relative transition-all duration-300 overflow-hidden">
                    <img :src="item.image"
                        class="object-cover h-52 rounded transform transition-all duration-200 group-hover:scale-110"
                        alt="" />
                    <div
                        class="text-primary text-lg  group-hover:text-xl w-full text-center absolute top-0 right-0 size-full bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/70 transition-all duration-300">
                        {{ item.text[locale] }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { UseAgencyStore } from '~/stores/agency.store'

const store = UseAgencyStore()
const { locale } = useI18n()

const data = computed(() => store.GetAgencyHubWhyLastArticleItems())
const loopData = computed(() => [...data.value, ...data.value]) // duplicate for seamless loop

const carousel = ref<HTMLDivElement | null>(null)
const translateX = ref(0)
const itemWidth = 220

let intervalId: number | null = null
const hovering = ref(false) // pause when true

// Scroll functions
const next = () => {
    translateX.value += itemWidth
    if (translateX.value >= data.value.length * itemWidth) {
        translateX.value = 0 // seamless loop
    }
}

const prev = () => {
    translateX.value -= itemWidth
    if (translateX.value < 0) {
        translateX.value = (data.value.length - 1) * itemWidth
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
