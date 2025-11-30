<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card cursor-pointer border-1 border-transparent hover:scale-105  hover:border-1 hover:border-tertiary-500 hover:bg-secondary rounded p-2 py-5 transition-all duration-300"
            v-for="(item, index) in items" :key="index">
            <PageSectionBlockListJCard :data="item" />
        </div>
    </div>
    <div class="z-10 flex flex-col items-center justify-center md:justify-start w-full gap-5 md:flex-row"
        v-if="props.cta">
        <component :is="getCta(item)" v-for="(item, index) in props.cta" :key="index" :data="item" />
    </div>
</template>

<script lang="ts" setup>
import { GetCtaComponent } from '~/components/page/helpers/component.helper';
import { BLOCK_PROPS } from '~/components/page/helpers/props/block-props.helper';
import { CtaType } from '~/components/page/types/commons/cta.type';
import { useArticleStore } from '~/stores/article/article.store';

const props = defineProps(BLOCK_PROPS)
const store = useArticleStore()
const items = computed(() => {
    // if (Array.isArray(props.action) ? props.action.includes('getArticleList') : props.action === 'getArticleList') {
    //     // Fetch article list logic here
    //     // For demonstration, returning an empty array
    //     return [] as LayoutJ[]
    // }
    return []
})

const getCta = (cta: CtaType) => {
    return GetCtaComponent(cta?.type ?? '') ?? new CtaType()
}
</script>
