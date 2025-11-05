<template>
    <div class="w-full flex flex-col md:flex-row gap-5 md:gap-10" v-if="props.type == 'list-e'">
        <div class="group text-xl cursor-pointer" v-for="(item, index) in data" :key="index">
            <div class="font-bold text-2xl text-left text-tertiary-500 pb-4" v-if="title(item)">
                {{ title(item)[locale] }}
            </div>
            <div class="py-1 text-lg w-full" v-for="(list, index) in list(item)" :key="index">
                <div class="inline-flex gap-2 items-start justify-start">
                    <Icon :name="icon(list)" class="size-8 min-h-8 min-w-8 text-secondary-700" />
                    <span class="text-tertiary-500">{{ name(list)?.[locale] }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { ListLayout } from '~/components/page/types/commons/list';

const { locale } = useI18n()
const props = defineProps({
    data: {
        type: Object as PropType<(ListLayout[])>,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: ""
    },
})

const icon = (item: ListLayout) => {
    return (item as any)?.icon ?? null
};

const list = (item: ListLayout) => {
    return (item as any)?.list ?? []
};

const title = (item: ListLayout) => {
    return (item as any)?.title ?? null
}

const name = (item: ListLayout) => {
    return (item as any)?.name ?? null
}

</script>