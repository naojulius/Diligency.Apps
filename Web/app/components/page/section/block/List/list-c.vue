<template>
    <div class="flex flex-row justify-start items-start gap-4  mb-5 text-gray-900">
        <Icon :name="icon" class="size-11 text-accent/70 -mt-2" />
        <div class="inter text-md text-tertiary w-full">
            <div class="text-lg/5 pb-4 font-semibold">
                {{ name[locale] }}
            </div>
            <div class="text-sm text-tertiary/80">
                {{ text[locale] }}
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

const data = computed(() => {
    return props.data
})

const icon = computed(() => (props.data as any)?.icon ?? null);
const name = computed(() => (props.data as any)?.name ?? null);
const text = computed(() => (props.data as any)?.text ?? null);
</script>