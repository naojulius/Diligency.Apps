<template>
    <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative bg-black">
        <WebServiceWebShowHeroBackground />
        <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
            <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
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
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetWebShowHeroTitle()
})

const subtitle = computed(() => {
    return store.GetWebShowHeroSubtitle()
})
</script>