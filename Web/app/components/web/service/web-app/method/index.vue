<template>
    <section class="py-5 md:py-20 bg-secondary">
        <div class="px-4 md:px-10 2xl:px-35">
            <div class="mb-16">
                <div class="text-4xl font-semibold relative z-10 text-tertiary flex gap-3">
                    <div class="min-w-[10px] max-w-[10px] bg-tertiary rounded-full"></div>
                    <span v-for="(item, index) in title" :key="index">
                        {{ item[locale] }}
                    </span>
                </div>
                <div class="text-xl text-gray-500 font-regular w-full ">
                    {{ subtitle[locale] }}
                </div>
            </div>
            <div class="w-full py-2 flex flex-col md:flex-row justify-start md:justify-between gap-5 md:gap-10">
                <WebServiceWebAppMethodMethods />
                <WebServiceWebAppMethodGain />
                <WebServiceWebAppMethodWhy />
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
    return store.GetWebAppMethodTitle()
})

const subtitle = computed(() => {
    return store.GetWebAppMethodSubtitle()
})
</script>