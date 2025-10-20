<template>
    <PageSectionHero :data="hero" />
    <PageSectionBlock :data="block" v-for="block in blocks" :type="block.type!" />
    <PageSectionFooter :data="footer" />
</template>
<script lang="ts" setup>
import { getRouteSegments } from './helpers/route.helper'
import { getStore } from './helpers/store.helper'
import type { BlockType } from './types/commons/block.type'
import { FooterType } from './types/commons/footer.type'
import { HeroType } from './types/hero.type'


const route = useRoute()
const path = computed(() => route.path)
const routeSegments = computed((): string[] => getRouteSegments(path.value))

const storeName = routeSegments.value[0]
const sectionName = routeSegments.value[1]

const hero = computed((): HeroType => {
    const store = getStore(storeName)
    return store.GetHeroData(sectionName as any) ?? new HeroType()
})

const blocks = computed((): BlockType[] => {
    const store = getStore(storeName)
    return store.GetBlockData(sectionName as any) ?? []
})

const footer = computed((): FooterType => {
    const store = getStore(storeName)
    return store.GetFooterData(sectionName as any) ?? new FooterType()
})
</script>