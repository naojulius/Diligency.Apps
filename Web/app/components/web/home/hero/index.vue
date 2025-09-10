<!-- <template>
    <HeroLayout>
        <div class="text-secondary px-4 lg:px-0">
            <div class="text-5xl xl:text-5xl 2xl:text-8xl font-bold">Offrez-vous</div>
            <div class="text-5xl xl:text-5xl 2xl:text-8xl font-bold">la diligence digitale</div>
            <div class="py-4 text-xl">Sites web & applications sur-mesure, pensés pour la performance,
                la clarté et
                la conversion.</div>
            <div
                class="py-2 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2  w-full">
                <ButtonCtaReserveStrategyCall />
                <ButtonCtaApplyProject />
            </div>
        </div>
    </HeroLayout>
</template>
<script lang="ts" setup>
import HeroLayout from '~/layouts/hero-layout.vue';
</script> -->

<template>
    <section class="mt-18 w-full h-[calc(100vh-20rem)] lg:h-[calc(100vh-5rem)] px-10">
        <div class="h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
            <h1 class="text-center md:text-left text-[2.5rem] md:text-7xl/20 font-bold text-tertiary tracking-normal">
                Offrez-vous la <span class="border-1 bg-secondary p-1 split">Diligence</span>
                digitale
            </h1>
            <h2 class="text-center md:text-left text-xl text-secondary-900">
                Sites web et applications sur-mesure, conçus pour allier performance, clarté et expérience utilisateur
                optimale, afin de transformer vos idées en solutions efficaces et générer plus de conversion.
            </h2>
            <div
                class="py-2 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2">
                <ButtonCtaReserveStrategyCall />
                <ButtonCtaApplyProject />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { gsap } from 'gsap/gsap-core';
import SplitText from 'gsap/SplitText'
onMounted(() => {
    // Split the text into words and chars
    const split = SplitText.create(".split", { type: "words, chars" })

    // Animate characters in a stagger
    gsap.from(split.chars, {
        duration: 0.5,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out"
    })
})
</script>