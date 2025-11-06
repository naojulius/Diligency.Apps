<template>
    <div class="w-full mx-auto md:w-2/3" v-if="props.type == 'list-i'">
        <section class="text-gray-600 body-font overflow-hidden px-4 md:px-0">
            <div class="flex flex-col md:flex-row -m-4">
                <PageSectionBlockListICard v-for="(item, index) in props.data" :key="index" :data="item" />
            </div>
        </section>
    </div>
</template>
<script lang="ts" setup>
import { PageSectionBlockListICard } from '#components';
import { BLOCK_PROPS } from '~/components/page/helpers/props/block-props.helper';
import type { Layouts } from '~/components/page/types/commons/list';

const props = defineProps(BLOCK_PROPS)

const icon = (item: Layouts) => {
    return (item as any)?.icon ?? null
};
</script>