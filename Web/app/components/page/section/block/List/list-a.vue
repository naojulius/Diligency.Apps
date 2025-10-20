<template>
    <div class="card group hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
        <div class="text-center">
            <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                <Icon :name="icon" class="h-16 w-16 text-accent-200" />
            </div>
            <h3 class="text-tertiary text-lg font-semibold mb-3 min-h-auto md:min-h-20">
                {{ name[locale] }}
            </h3>
            <p class="text-text-secondary mb-4 text-justify text-tertiary-500/80">{{ text[locale] }}</p>
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

const icon = computed(() => (props.data as any)?.icon ?? null);
const name = computed(() => (props.data as any)?.name ?? null);
const text = computed(() => (props.data as any)?.text ?? null);
</script>