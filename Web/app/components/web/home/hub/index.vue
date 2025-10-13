<template>
    <section class="py-5 md:py-20">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-0">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <div>
                        <div v-for="(item, index) in title" :key="index">
                            {{ item[locale] }}
                        </div>
                    </div>
                </div>
                <div class="py-5 text-xl text-gray-500 font-regular w-full md:w-[700px]">
                    {{ subtitle[locale] }}
                </div>
            </div>
            <SpacingBlock />
            <WebHomeHubTestimonial />
            <div class="w-full py-10">
                <WebHomeHubCta />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseHomeStore } from '~/stores/home.store';
const store = UseHomeStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetHubTitle()
})

const subtitle = computed(() => {
    return store.GetHubSubTitle()
})
</script>