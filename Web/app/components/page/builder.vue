<template>
    <!-- <PageSectionHero :data="hero" v-if="hero" />
    <PageSectionBlock :data="block" :key="uuidv4()" v-for="block in blocks" :type="block.type ?? ''" />
    <PageSectionFaq :data="faq" v-if="faq?.items" />
    <PageSectionFooter :data="footer" :key="uuidv4()" v-for="footer in footers" v-if="footers && footers.length > 0" /> -->
</template>

<script lang="ts" setup>
import { useHomeStore } from '~/stores/home/home.store';
import { getRouteSegments } from './helpers/route.helper';

const route = useRoute();
const data = ref(null);

const path = computed(() => route.path);
const routeSegments = computed(() => getRouteSegments(path.value));
const storeName = computed(() => routeSegments.value[0]);
const sectionName = computed(() => routeSegments.value[1] ?? '');

// const store = getStore(storeName)


// const hero = computed<HeroType | null>(() => store.GetHeroData(sectionName))
// const blocks = computed<BlockType[]>(() => store.GetBlockData(sectionName))
// const footers = computed<FooterType[] | null>(() => store.GetFooterData(sectionName))
// const faq = computed<FaqType | null>(() => store.GetFaqData(sectionName))

const selectStore = () => {
    switch (sectionName.value) {
        case '':
        case null:
        case undefined:
            return useHomeStore();

        case 'agency':
            return useHomeStore();
    }
};

watch(
    () => data.value,
    async (newVal) => {
        if (!newVal) {
            const store = selectStore();

            data.value = await store?.FetchData() as any;
        }
    },
    { immediate: true }
)


</script>