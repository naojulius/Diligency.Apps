<template>
    <div class="w-full flex flex-col md:flex-row gap-5 md:gap-10" v-for="(item, index) in data" :key="index"
        v-if="props.type == 'list-f'">
        <div v-for="(list, index) in list(item)" :key="index"
            class="w-full card group hover:scale-102 hover:bg-secondary border-1 border-tertiary transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
            <div class="text-center">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast"
                    v-if="icon(list)">
                    <Icon :name="icon(list) ?? ''" class="h-16 w-16 text-accent-200" />
                </div>
                <h3 class="text-tertiary text-lg font-semibold mb-3">{{ name(list)?.[locale] ?? '' }}</h3>
            </div>
        </div>
    </div>


</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { BLOCK_PROPS } from '~/components/page/helpers/props/block-props.helper';
import type { Layouts } from '~/components/page/types/commons/list';

const { locale } = useI18n()
const props = defineProps(BLOCK_PROPS)

const icon = (item: Layouts) => {
    return (item as any)?.icon ?? null
};

const list = (item: Layouts) => {
    return (item as any)?.list ?? []
};

const name = (item: Layouts) => {
    return (item as any)?.name ?? null
}
</script>