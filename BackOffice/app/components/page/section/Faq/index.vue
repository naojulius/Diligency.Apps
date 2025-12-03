<template>
    <section :class="['w-full px-4 md:px-10 2xl:px-35 py-10']">
        <PageSectionFaqTitle :title="title" />
        <SpacingBlock />
        <div class="flex flex-col w-full gap-2 py-0">
            <div class="w-full h-auto" v-for="(item, index) in items" :key="index">
                <div class="w-full py-0 text-left">
                    <div @click="toggleFAQ(index)"
                        class="p-2 transition-all duration-500 border rounded-md cursor-pointer border-secondary-500 hover:bg-secondary-500/50">
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center w-full text-lg font-bold inter text-tertiary-500 min-h-14">
                                {{ item.question?.[locale] }}
                            </div>
                            <Icon name="lucide-chevron-right"
                                class="transition-transform duration-300 transform size-6 text-tertiary-500"
                                :class="{ 'rotate-90': openStates[index] }" />
                        </div>
                        <Transition name="faq">
                            <div v-show="openStates[index]"
                                class="overflow-hidden text-secondary-800 text-md font-normal px-2">
                                {{ item.response?.[locale] }}
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { FaqType } from '../../types/commons/faq.type';
const { locale } = useI18n()
const props = defineProps({
    data: {
        required: true,
        type: Object as PropType<FaqType>,
        default: () => new FaqType()
    }
})
const title = computed(() => {
    return props.data.title ?? []
})

const items = computed(() => {
    return props.data.items ?? []
})

const openStates = ref<boolean[]>(items.value.map(() => false))

const toggleFAQ = (index: number) => {
    openStates.value[index] = !openStates.value[index]
}
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
    transition: all 0.4s ease;
    max-height: 200px;
    /* limit animation height */
    opacity: 1;
}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>