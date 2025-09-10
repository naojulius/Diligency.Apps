<script setup lang="ts">
import { gsap } from 'gsap/gsap-core';
import SplitText from 'gsap/SplitText'
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
    <section class="mt-18 w-full h-[calc(100vh-20rem)] lg:h-[calc(100vh-5rem)] px-10 2xl:px-35">
        <div class=" h-full w-full md:w-[700px] flex flex-col gap-4 items-start pt-12 md:pt-0 md:justify-center">
            <h1
                class="text-center md:text-left text-[2.5rem]/13 md:text-7xl/20 font-bold text-tertiary tracking-normal">
                Offrez-vous la <span class="border-1 bg-secondary p-[0.5px] px-1 split">Diligence</span>
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
