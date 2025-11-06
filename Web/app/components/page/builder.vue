<template>
    <PageSectionHero :data="hero" v-if="hero" />
    <PageSectionBlock :data="block" :key="uuidv4()" v-for="block in blocks" :type="block.type ?? ''" />
    <PageSectionFaq :data="faq" v-if="faq?.items" />
    <PageSectionFooter :data="footer" :key="uuidv4()" v-for="footer in footers" v-if="footers && footers.length > 0" />
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import { getRouteSegments } from './helpers/route.helper';
import { getStore } from './helpers/store/store-selection.helper';
import type { BlockType } from './types/commons/block.type';
import { FaqType } from './types/commons/faq.type';
import { FooterType } from './types/commons/footer.type';
import { HeroType } from './types/hero.type';

const route = useRoute()
const path = computed(() => route.path)
const routeSegments = computed((): string[] => getRouteSegments(path.value))

const storeName = routeSegments.value[0]
const sectionName = routeSegments.value[1] ?? ''
const store = getStore(storeName)

const hero = computed<HeroType | null>(() => store.GetHeroData(sectionName))
const blocks = computed<BlockType[]>(() => store.GetBlockData(sectionName))
const footers = computed<FooterType[] | null>(() => store.GetFooterData(sectionName))
const faq = computed<FaqType | null>(() => store.GetFaqData(sectionName))

</script>