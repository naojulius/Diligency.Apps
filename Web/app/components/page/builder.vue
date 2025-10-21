<template>
    <PageSectionHero :data="hero" v-if="hero" />
    <PageSectionBlock :data="block" v-for="block in blocks" :type="block.type!" />
    <PageSectionFaq :data="faq" v-if="faq?.items" />
    <PageSectionFooter :data="footer" v-if="footer" />
</template>

<script lang="ts" setup>
import { getRouteSegments } from './helpers/route.helper'
import { getStore } from './helpers/store/store-selection.helper'
import type { BlockType } from './types/commons/block.type'
import { FaqType } from './types/commons/faq.type'
import { FooterType } from './types/commons/footer.type'
import { HeroType } from './types/hero.type'


const route = useRoute()
const path = computed(() => route.path)
const routeSegments = computed((): string[] => getRouteSegments(path.value))

const storeName = routeSegments.value[0]
const sectionName = routeSegments.value[1]

const hero = computed((): HeroType => {
    const store = getStore(storeName)
    return store.GetHeroData(sectionName as any)
})

const blocks = computed((): BlockType[] => {
    const store = getStore(storeName)
    return store.GetBlockData(sectionName as any)
})

const footer = computed((): FooterType => {
    const store = getStore(storeName)
    return store.GetFooterData(sectionName as any)
})

const faq = computed((): FaqType => {
    const store = getStore(storeName)
    return store.GetFaqData(sectionName as any)
})
</script>