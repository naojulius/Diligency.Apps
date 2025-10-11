<template>
    <section class="py-10 md:py-24 relative">
        <div class="absolute h-[36.5rem] w-full top-0 bg-primary -z-10"></div>

        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-12">
                <div class="text-4xl font-semibold flex gap-3 text-tertiary">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary-500 rounded-full"></div>
                    <div>
                        <div v-for="(item, index) in title" :key="index">
                            {{ item[locale] }}
                        </div>
                    </div>
                </div>
                <p class="text-tertiary/80 text-2xl leading-7 w-full md:w-[700px] py-10">
                    {{ subtitle[locale] }}
                </p>
            </div>
            <div class="w-2/3 mx-auto">
                <WebHomeOfferCards />
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
    return store.GetOfferTitle()
})

const subtitle = computed(() => {
    return store.GetOfferSubTitle()
})
</script>
