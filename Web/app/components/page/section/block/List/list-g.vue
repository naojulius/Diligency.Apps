<template>
    <section class="relative flex flex-col md:flex-row gap-4">
        <div class="w-full h-full p-2">
            <PageSectionBlockTitle :title="props.title!" />
            <PageSectionBlockSubtitle :data="props.subtitle" custom-class="w-full text-tertiary/80" />
        </div>
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
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { AppLocaleType } from '~/components/page/types/commons/app-locale.type';
import type { ListLayout } from '~/components/page/types/commons/list';
import type { AppLocale } from '~/types/interfaces/app-locale';

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)


const props = defineProps({
    title: {
        required: false,
        type: Object as PropType<Array<AppLocale>>,
    },
    subtitle: {
        type: [Array, Object, undefined] as PropType<AppLocaleType[] | AppLocaleType>,
        required: true,
        default: []
    },
    data: {
        type: Array as PropType<(ListLayout)[] | string[]>,
        required: true
    },
})

const images = computed(() => {
    return props.data ?? []
})

const bgStyle = (position: 'left' | 'center' | 'right') => {
    const indexMap: Record<typeof position, number> = {
        left: 0,
        center: 1,
        right: 2,
    }

    const imageUrl = images.value[indexMap[position]] || '/images/default.svg'

    return {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'contain',
        backgroundPosition:
            position === 'left'
                ? 'left center'
                : position === 'right'
                    ? 'right center'
                    : 'center center',
        backgroundRepeat: 'no-repeat',
    }
}

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
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
    }
})

</script>