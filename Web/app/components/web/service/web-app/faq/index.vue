<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary pb-3">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div>
                            {{ title[locale] }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-0 flex flex-col gap-2">
                <div class="w-full h-auto" v-for="(faq, index) in data" :key="index">
                    <div class="w-full text-left py-0">
                        <div @click="toggleFAQ(index)" class="size-full border p-2 rounded-md border-secondary-500 
                                        cursor-pointer hover:bg-secondary-500/50 transition-all duration-500">
                            <div class="w-ull flex  justify-between items-center">
                                <div
                                    class="text-lg inter font-bold text-tertiary-500 w-full min-h-14 flex items-center">
                                    {{ faq.q[locale] }}
                                </div>
                                <Icon name="lucide-chevron-right"
                                    class="size-6 text-tertiary-500 transform transition-transform duration-300"
                                    :class="{ 'rotate-90': openStates[index] }" />
                            </div>
                            <div class="text-md text-secondary-800 font-normal transition-all duration-900"
                                v-show="openStates[index]">
                                {{ faq.r[locale] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetWebAppFaqtitle()
})

const data = computed(() => {
    return store.GetWebAppFaqItems()
})

const openStates = ref<boolean[]>(data.value.map(() => false))

const toggleFAQ = (index: number) => {
    openStates.value[index] = !openStates.value[index]
}

</script>