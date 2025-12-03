<template>
    <PageSectionHero :data="hero" v-if="hero" />
    <PageSectionBlock :data="block" :key="uuidv4()" v-for="block in blocks" :type="block.type ?? ''"
        :action="block?.action" />
    <PageSectionFaq :data="faq" v-if="faq?.items" />
    <PageSectionFooter :data="footer" :key="uuidv4()" v-for="footer in footers" v-if="footers && footers.length > 0" />
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import { getRouteSegments } from './helpers/route.helper';
import { getStore } from './helpers/store/store-selection.helper';
import type { BlockType } from './types/commons/block.type';
import type { FaqType } from './types/commons/faq.type';
import type { FooterType } from './types/commons/footer.type';
import type { HeroType } from './types/hero.type';

const route = useRoute();
const data = ref([] as any);

const path = computed(() => route.path);
const routeSegments = computed(() => getRouteSegments(path.value));
const storeName = computed(() => routeSegments.value[0]);
const sectionName = computed(() => routeSegments.value[1] ?? '');

const hero = ref<HeroType | null>()
const blocks = ref<BlockType[] | null>()
const footers = ref<FooterType[] | null>()
const faq = ref<FaqType | null>()

const selectStore = () => {
    return getStore(storeName.value)
};

onMounted(async () => {
    const store = selectStore();

    if (!store) return;

    const result = await store.FetchData();
    if (!result) return;

    // If sectionName is empty → use whole result
    // Else → use the section inside result
    const data =
        !sectionName.value
            ? result
            : result[sectionName.value] ?? {};

    hero.value = data.hero ?? null;
    blocks.value = data.blocks ?? [];
    footers.value = data.footer ?? [];
    faq.value = data.faq ?? null;
});



</script>