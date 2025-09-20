<script setup lang="ts">
import { gsap } from 'gsap/gsap-core';
import SplitText from 'gsap/SplitText';
import { useI18n } from 'vue-i18n';
import { Text } from './Text';

const { locale } = useI18n()
onMounted(() => {
    const split = SplitText.create(".split", { type: "words, chars" })
    gsap.from(split.chars, {
        duration: 0.5,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out"
    })
})
</script>
<template>
    <section class=" w-full h-[calc(100vh-0rem)] lg:h-[calc(100vh-1rem)] relative">
        <WebHomeHeroBackground />
        <div class="px-10 2xl:px-35 w-full h-full pt-20 flex items-center justify-center ">
            <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
                <h1 id="hero"
                    class="text-center text-[2.5rem]/13 md:text-7xl/20 font-bold text-secondary tracking-normal z-10">
                    <span>
                        {{ Text.title[locale] }}
                    </span>
                </h1>
                <h2 class="text-center md:text-left text-xl text-secondary z-10">
                    {{ Text.subtitle[locale] }}
                </h2>
                <div class="py-2 w-full flex items-center  justify-center flex-col xl:flex-row gap-4 z-10">
                    <WebHomeHeroReserveStrategyCall />
                    <WebHomeHeroApplyProject />
                </div>
            </div>
        </div>
    </section>
</template>