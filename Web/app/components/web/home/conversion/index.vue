<template>
    <section class="w-full px-4 md:px-10 2xl:px-35 py-10 md:py-20 relative h-auto">
        <WebHomeConversionBackground />
        <div class="w-full flex flex-col md:flex-row">
            <div class="w-full flex flex-col">
                <div class="text-4xl font-semibold flex gap-3 text-secondary opacity-90">
                    <div class="min-w-[10px] max-w-[10px] bg-secondary rounded-full"></div>
                    <div>
                        <div v-for="(item, index) in title" :key="index">
                            {{ item[locale] }}
                        </div>
                    </div>

                </div>
                <SpacingSectionTitle />
                <div class="text-xl mb-8 opacity-90 text-primary text-center md:text-left  w-full md:w-[700px]">
                    {{ subtitle[locale] }}
                </div>
            </div>

            <div class="w-full py-5 flex flex-col gap-2 items-center justify-center px-4 opacity-90 ">
                <WebHomeConversionCtaA />
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
    return store.GetConversionTitle()
})

const subtitle = computed(() => {
    return store.GetConversionSubTitle()
})

const background = computed(() => {
    return store.GetConversionBacground()
})
</script>