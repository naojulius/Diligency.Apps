<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10" v-if="props.type == 'list-h'">
        List-H
        <div v-for="(item, index) in data" :key="index"
            class="card group hover:scale-101 transition-all duration-300 cursor-pointer border-1 border-tertiary/50 bg-tertiary/10 p-4 rounded-lg hover:bg-tertiary">
            <div class="text-center py-4">
                <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast">
                    <Icon :name="icon(item)"
                        class="h-16 w-16 text-accent-200 group-hover:text-primary transition-all duration-500 group-hover:-mt-10" />
                </div>
                <h3 class="text-tertiary text-lg font-semibold mb-3 min-h-auto md:min-h-20 group-hover:text-primary">
                    {{ name(item)[locale] }}
                </h3>
                <p class="mb-4 text-center text-md text-tertiary-500/80 group-hover:text-secondary">
                    {{ text(item)[locale] }}
                </p>
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