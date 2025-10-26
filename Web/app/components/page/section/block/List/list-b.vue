<template>
    <div class="container px-5 py-0 mx-auto w-full md:w-3/4" v-if="props.type == 'list-b'">
        <div v-for="(item, index) in data" :key="index"
            class="group flex items-center  mx-auto border-b py-5 border-gray-200 sm:flex-row flex-col rounded p-2 transition-all duration-500 cursor-pointer">
            <div
                class="group-hover:bg-tertiary-500 sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-secondary-400 text-accent-500 flex-shrink-0 transition-all duration-500">
                <Icon :name="icon(item)" size="42"
                    class="group-hover:scale-180 group-hover:text-primary transition-all duration-500" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2
                    class="group-hover:scale-102 text-tertiary text-2xl inter font-bold mb-2 transition-all duration-50">
                    {{ name(item)[locale] }}
                </h2>
                <p class="leading-relaxed text-tertiary/80 text-base inter">{{ text(item)[locale] }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { BlockTypeItemsReturnType } from '~/components/page/types/commons/block.type';

const { locale } = useI18n()

const props = defineProps({
    data: {
        type: Object as PropType<(BlockTypeItemsReturnType[])>,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: ""
    }
})

const icon = (item: BlockTypeItemsReturnType) => {
    return (item as any)?.icon ?? null
};

const name = (item: BlockTypeItemsReturnType) => {
    return (item as any)?.name ?? null
}

const text = (item: BlockTypeItemsReturnType) => {
    return (item as any)?.text ?? null
}
</script>