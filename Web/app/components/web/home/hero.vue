<template>
    <HeroLayout>
        <section class="relative z-0">
            <div ref="textEl"
                class=" text-5xl lg:text-4xl xl:text-6xl inter font-bold text-tertiary py-15 xl:pb-5 xl:pt-5 w-full xl:w-2/3 2xl:w-1/2">
                {{ $t('home.hero.title') }}
            </div>
            <div class="text-xl w-full xl:w-1/2">
                {{ $t('home.hero.subtitle') }}
            </div>
            <div
                class="py-20 xl:py-10 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2  w-full">
                <ButtonCtaReserveStrategyCall />
                <ButtonCtaApplyProject />
            </div>
        </section>
    </HeroLayout>
</template>
<script lang="ts" setup>
import HeroLayout from '~/layouts/hero-layout.vue';
import SplitText from 'gsap/SplitText'
import gsap from 'gsap'

const textEl = ref<HTMLElement | null>(null)
let split: any = null
let animation: any = null

const animateText = () => {
    if (!textEl.value) return

    // Clean up previous animations
    split && split.revert()
    animation && animation.revert()

    // Create new SplitText instance
    split = new SplitText(textEl.value, { type: 'chars,words,lines' })

    // Animate characters
    animation = gsap.from(split.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.04,
    })
}

onMounted(() => {
    animateText()
    window.addEventListener('resize', animateText)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', animateText)
    split && split.revert()
    animation && animation.revert()
})
</script>