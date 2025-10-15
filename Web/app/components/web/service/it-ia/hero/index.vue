<template>
    <PageLayout custom-class="h-auto relative">
        <BackgroundImage :image="background" />
        <section class=" w-full h-auto lg:h-auto relative">
            <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center py-4">
                <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                        <span v-for="(item, index) in title" :key="index">
                            {{ item[locale] }}
                        </span>
                    </h1>
                    <h2 class="text-center text-xl text-secondary z-10">
                        {{ subtitle[locale] }}
                    </h2>
                    <div class="z-10 flex justify-center w-full">
                        <WebServiceItIaHeroCtaA />
                    </div>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetItIaHeroTitle()
})

const subtitle = computed(() => {
    return store.GetItIaHeroSubTitle()
})

const background = computed(() => {
    return store.GetItIaHeroBackground()
})
</script>