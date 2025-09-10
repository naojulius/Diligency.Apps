<template>
    <div class="w-full flex gap-3 md:px-0 overflow-hidden mt-4 p-2">
        <div ref="leftRef" class="h-[30vh] md:h-[50vh] w-1/3 bg-secondary bg-no-repeat bg-left bg-contain"
            :style="bgStyle('left')">
        </div>
        <div class="h-[30vh] md:h-[50vh] w-1/3 bg-secondary-200 bg-no-repeat bg-center bg-contain"
            :style="bgStyle('center')">
        </div>
        <div ref="rightRef" class="h-[30vh] md:h-[50vh] w-1/3 bg-tertiary bg-no-repeat bg-right bg-contain"
            :style="bgStyle('right')"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

const bgStyle = (position: 'left' | 'center' | 'right') => ({
    backgroundImage: "url('/images/storysets/collaboration-animate.svg')",
    backgroundSize: 'contain',
    backgroundPosition:
        position === 'left'
            ? 'left center'
            : position === 'right'
                ? 'right center'
                : 'center center',
    backgroundRepeat: 'no-repeat',
})

onMounted(async () => {
    if (!leftRef.value || !rightRef.value) return

    if (import.meta.client) {
        const gsapModule = await import('gsap')
        const gsap = gsapModule.gsap
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
        gsap.registerPlugin(ScrollTrigger)

        const animateFromSide = (el: HTMLElement, fromX: string) => {
            gsap.fromTo(
                el,
                { x: fromX, opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        }

        animateFromSide(leftRef.value, '-100%')
        animateFromSide(rightRef.value, '100%')
    }
})

onBeforeUnmount(() => {
    if (import.meta.client) {
        const ScrollTrigger = require('gsap/ScrollTrigger').default
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
    }
})
</script>
