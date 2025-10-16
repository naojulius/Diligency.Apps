<template>
    <section class="w-full bg-primary py-[0rem] mx-auto">
        <div class="w-full h-auto container mx-auto py-[0rem] text-left md:flex-row flex flex-col">
            <div class="w-full inter px-4 py-[2rem]">
                <div class="overflow-hidden bg-primary ">
                    <div class="px-6 mx-auto max-w-7xl lg:px-8">
                        <div
                            class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div class="lg:pt-4">
                                <div class="lg:max-w-lg">
                                    <SectionTitle :title="title" />
                                    <SectionSubtitle :subtitle="subtitle" custom-class="w-full text-tertiary/80" />
                                    <WebAgencyHubFoundList />
                                </div>
                            </div>
                            <img :src="image" alt="Product screenshot"
                                class="shadow-xl cursor-pointer w-3xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 hover:opacity-90"
                                width="2432" height="1442" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()
const { locale } = useI18n()

const title = computed(() => {
    return [store.GetAgencyHubFoundItemTitle()]
})

const subtitle = computed(() => {
    return store.GetAgencyHubFoundItemSubtitle()
})

const image = computed(() => {
    return store.GetAgencyHubFoundImage()
})
</script>