<template>
    <!-- <HeroLayout>
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
    </HeroLayout> -->
    <div class="w-full h-[100vh]  bg-primary flex items-start justify-center">
        <div class=" w-10/12 h-11/12 flex items-center justify-center">
            <div
                :class="['relative w-full h-full  flex items-center bg-secondary border-secondary-600 border-1 translate-y-50 rounded-2xl', getRandomBg]">
                <div class="absolute -translate-y-72 ml-5">
                    <div class="pb-5">
                        <span
                            class="text-9xl font-bold text-tertiary bg-primary rounded-3xl rounded-bl-none rounded-tr-none rounded-br-none">
                            Offrez-vous
                        </span>
                    </div>
                    <div>
                        <span class="text-8xl font-bold text-tertiary bg-primary rounded-3xl  rounded-l-none">
                            la diligence digitale
                        </span>
                    </div>
                    <div class="p-4 bg-white font-normal">
                        <span class="text-lg text-tertiary bg-primary rounded-3xl  rounded-l-none">
                            Sites web & applications sur-mesure, pensés pour la performance, la clarté et la conversion.
                        </span>
                    </div>
                    <div
                        class="p-4 bg-white font-normal y-20 xl:py-10 w-full flex items-center xl:items-start xl:justify-start justify-center flex-col xl:flex-row gap-2">
                        <ButtonCtaReserveStrategyCall />
                        <ButtonCtaApplyProject />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const images = [
    "000.jpg",
    "001.jpg",
    "002.jpg"
]
const getRandomBg = () => {
    const _class = "bg-"

}
// import gsap from 'gsap';
// import SplitText from 'gsap/SplitText';

// const textEl = ref < HTMLElnull

// const animateText = () => {
//     if (!textEl.value) return

//     // Clean up previous animations
//     split && split.revert()
//     animation && animation.revert()

//     // Create new SplitText instance
//     split = new SplitText(textEl.value, { type: 'chars,words,lines' })

//     // Animate characters
//     animation = gsap.from(split.chars, {
//         x: 150,
//         opacity: 0,
//         duration: 0.7,
//         ease: 'power4.out',
//         stagger: 0.04,
//     })
// }

// onMounted(() => {
//     animateText()
//     window.addEventListener('resize', animateText)
// })

// onBeforeUnmount(() => {
//     window.removeEventListener('resize', animateText)
//     split && split.revert()
//     animation && animation.revert()
// })
</script>