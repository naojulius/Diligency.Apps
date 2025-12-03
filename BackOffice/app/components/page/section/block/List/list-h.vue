<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10" v-if="props.type == 'list-h'">
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-101 transition-all duration-300 cursor-pointer border-1 border-tertiary/50 bg-tertiary/10 p-4 rounded-lg hover:bg-tertiary">
            <div class="text-center py-4">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                    <Icon :name="icon(item)"
                        class="h-16 w-16 text-accent-200 group-hover:text-primary group-hover:scale-120 transition-all duration-400 group-hover:-mt-10" />
                </div>
                <h3 class="text-tertiary text-lg font-semibold mb-3 min-h-auto md:min-h-20 group-hover:text-primary">
                    {{ name(item)[locale] }}
                </h3>
                <p class="mb-4 text-center text-md text-tertiary-500/80 group-hover:text-secondary">
                    {{ text(item)[locale] }}
                </p>
                <div class="opacity-0 group-hover:opacity-100 transition-fast w-full flex justify-center"
                    v-if="isListH(item)">
                    <span class="text-sm font-medium text-secondary">
                        {{ item.technos?.join(" • ") }}
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { BLOCK_PROPS } from '~/components/page/helpers/props/block-props.helper';
import type { Layouts } from '~/components/page/types/commons/list';
import type { LayoutH } from '~/components/page/types/commons/list/list-h.type';


const { locale } = useI18n()
const props = defineProps(BLOCK_PROPS)

const icon = (item: Layouts) => {
    return (item as any)?.icon ?? null
};

const name = (item: Layouts) => {
    return (item as any)?.name ?? null
}

const text = (item: Layouts) => {
    return (item as any)?.text ?? null
}

const isListH = (item: Layouts): item is LayoutH => {
    return (item as LayoutH).technos !== undefined;
};

</script>