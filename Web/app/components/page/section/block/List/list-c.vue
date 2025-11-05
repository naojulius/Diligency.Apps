<template>
    <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-5 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        v-if="props.type == 'list-c'">
        <div class=" flex flex-col gap-5">
            <div v-for="(item, index) in data" :key="index"
                class="gourp flex flex-col md:flex-row justify-start items-center md:items-start gap-4 text-gray-900 cursor-pointer">
                <Icon :name="icon(item)" class="size-11 text-accent/70" />
                <div class="inter text-md text-tertiary w-full text-center md:text-left">
                    <div class="text-xl font-semibold">
                        {{ name(item)[locale] }}
                    </div>
                    <div class="text-md text-tertiary/80">
                        {{ text(item)[locale] }}
                    </div>
                </div>
            </div>
        </div>
        <img :src="props.image" alt="Product screenshot" v-if="props.image"
            class="md:-mt-20 hover:scale-105 transition-all duration-500 shadow-xl cursor-pointer w-3xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:opacity-90"
            width="2432" height="1442" />
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
    image: {
        type: [String, null],
        required: true,
        default: null
    }
})

const icon = (item: ListLayout) => {
    return (item as any)?.icon ?? null
};

const name = (item: ListLayout) => {
    return (item as any)?.name ?? null
}

const text = (item: ListLayout) => {
    return (item as any)?.text ?? null
}
</script>