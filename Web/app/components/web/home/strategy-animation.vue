<template>
    <div class="w-full flex gap-3 md:px-0 overflow-hidden mt-4">
        <div ref="leftRef" class="h-[40vh] w-1/3 md:-translate-y-10 bg-secondary" style="
                    background-image: url('/images/storysets/collaboration-animate.svg');
                    background-size: 300% 100%;
                    background-position: left center;
                    background-repeat: no-repeat;" />

        <div class="h-[40vh] w-1/3 bg-secondary-200" style="
                    background-image: url('/images/storysets/collaboration-animate.svg');
                    background-size: 300% 100%;
                    background-position: center center;
                    background-repeat: no-repeat;" />

        <div ref="rightRef" class="h-[40vh] w-1/3 md:translate-y-10 bg-tertiary" style="
                    background-image: url('/images/storysets/collaboration-animate.svg');
                    background-size: 300% 100%;
                    background-position: right center;
                    background-repeat: no-repeat;" />
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!leftRef.value || !rightRef.value) return

    // Left div slides in from left
    gsap.fromTo(leftRef.value,
        { x: '-100%', opacity: 0 },
        {
            x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: leftRef.value,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        }
    )

    // Right div slides in from right
    gsap.fromTo(rightRef.value,
        { x: '100%', opacity: 0 },
        {
            x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: rightRef.value,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        }
    )
})

onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>