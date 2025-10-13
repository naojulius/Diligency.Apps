<template>
    <PageLayout custom-class="h-auto">
        <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
            <WebAgencyAboutHeroBackground />
            <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
                <div
                    class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                    <h1 id="hero"
                        class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                        <span v-for="(item, index) in title" :key="index">
                            {{ item[locale] }}
                        </span>
                    </h1>
                    <h2 class="text-center text-xl text-secondary z-10">
                        {{ subtitle[locale] }}
                    </h2>
                </div>
            </div>
        </section>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetAgencyAboutHeroTitle()
})

const subtitle = computed(() => {
    return store.GetAgencyAboutHeroSubtitle()
})
</script>