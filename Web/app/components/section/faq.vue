<template>
    <section :class="['w-full px-4 md:px-10 2xl:px-35 py-10', props.customClass]">
        <SectionTitle :title="props.title" />
        <SpacingBlock v-if="props.data" />
        <div class="flex flex-col w-full gap-2 py-0">
            <div class="w-full h-auto" v-for="(faq, index) in props.data" :key="index">
                <div class="w-full py-0 text-left">
                    <div @click="toggleFAQ(index)"
                        class="p-2 transition-all duration-500 border rounded-md cursor-pointer size-full border-secondary-500 hover:bg-secondary-500/50">
                        <div class="flex items-center justify-between w-ull">
                            <div class="flex items-center w-full text-lg font-bold inter text-tertiary-500 min-h-14">
                                {{ faq.q[locale] }}
                            </div>
                            <Icon name="lucide-chevron-right"
                                class="transition-transform duration-300 transform size-6 text-tertiary-500"
                                :class="{ 'rotate-90': openStates[index] }" />
                        </div>
                        <div class="font-normal transition-all text-md text-secondary-800 duration-900"
                            v-show="openStates[index]">
                            {{ faq.r[locale] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { AppLocale } from '~/types/interfaces/app-locale';
import type { FAQ } from '../web/service/web-app/faq/faqs';

const { locale } = useI18n()
const props = defineProps({
    title: {
        required: true,
        type: Object as PropType<AppLocale[]>,
    },
    data: {
        required: true,
        type: Array as PropType<FAQ[]>,
    },
    customClass: {
        required: false,
        type: String,
        default: ""
    },
})

const openStates = ref<boolean[]>(props.data.map(() => false))

const toggleFAQ = (index: number) => {
    openStates.value[index] = !openStates.value[index]
}

</script>
