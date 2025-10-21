<template>
    <div class="group text-xl cursor-pointer">
        <div class="font-bold text-2xl text-left text-tertiary-500 pb-4" v-if="title">
            {{ title[locale] }}
        </div>
        <div class="py-1 text-lg w-full" v-for="(item, index) in list" :key="index">
            <div class="inline-flex gap-2 items-start justify-start">
                <Icon :name="item.icon" class="size-8 min-h-8 min-w-8 text-secondary-700" />
                <span class="text-tertiary-500">{{ item.name?.[locale] }}</span>
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
        type: Object as PropType<(BlockTypeItemsReturnType)>,
        required: true
    }
})

const list = computed(() => (props.data as any)?.list ?? [null]);
const title = computed(() => (props.data as any)?.title ?? null);

</script>