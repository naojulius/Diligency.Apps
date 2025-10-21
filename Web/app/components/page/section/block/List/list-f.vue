<template>
    <div v-for="(item, index) in list" :key="index"
        class="card group hover:scale-102 hover:bg-secondary border-1 border-tertiary transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
        <div class="text-center">
            <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast"
                v-if="item.icon">
                <Icon :name="item.icon ?? ''" class="h-16 w-16 text-accent-200" />
            </div>
            <h3 class="text-tertiary text-lg font-semibold mb-3">{{ item.name?.[locale] ?? '' }}</h3>
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

const list = computed(() => (props.data as any)?.list ?? []);

</script>