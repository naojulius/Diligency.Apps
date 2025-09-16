<script setup lang="ts">
import { gsap } from 'gsap/gsap-core';
import SplitText from 'gsap/SplitText'
import { Text } from './Text';
import { useI18n } from 'vue-i18n';

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
    <section class="mt-18 w-full h-auto lg:h-[calc(100vh-5rem)] px-10 2xl:px-35">
        <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
            <h1
                class="text-center md:text-left text-[2.5rem]/13 md:text-7xl/20 font-bold text-tertiary tracking-normal">
                <span>
                    {{ Text.title[locale] }}
                </span>
                <!-- <span class="border-1 bg-secondary p-[0.5px] px-1 split">
                    {{ $t("home.hero.title_b") }}
                </span> -->
            </h1>
            <h2 class="text-center md:text-left text-xl text-secondary-900">
                {{ Text.subtitle[locale] }}
            </h2>
            <div
                class="py-2 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2">
                <WebHomeHeroReserveStrategyCall />
                <WebHomeHeroApplyProject />
            </div>
        </div>
    </section>
</template>