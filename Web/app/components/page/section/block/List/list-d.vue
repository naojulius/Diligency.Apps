<template>
    <div
        class="group min-w-[220px] flex-shrink-0 rounded bg-primary shadow cursor-pointer hover:shadow-2xl relative transition-all duration-300 overflow-hidden">
        <img :src="image" class="object-cover h-52 rounded transform transition-all duration-200 group-hover:scale-110"
            alt="" />
        <div
            class="text-primary text-lg  group-hover:text-xl w-full text-center absolute top-0 right-0 size-full bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/70 transition-all duration-300">
            {{ text[locale] }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { BlockTypeItemsReturnType } from '~/components/page/types/commons/block.type';

const { locale } = useI18n()
const props = defineProps({
    data: {
        type: Object as PropType<(BlockTypeItemsReturnType)>,
        required: true
    }
})

const image = computed(() => (props.data as any)?.image ?? null);
const text = computed(() => (props.data as any)?.text ?? null);

</script>