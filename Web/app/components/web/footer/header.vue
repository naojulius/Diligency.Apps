<template>
    <div class="w-full md:w-2/3 mx-auto">
        <h1 ref="FooterTitleRef"
            class="text-[4rem]/15  xl:text-[5rem]/20  py-10 font-regular text-center cursor-pointer overflow-hidden">
            {{ title[locale] }}
        </h1>
        <div class="text-lg text-center w-2/3 mx-auto">
            {{ subtitle[locale] }}
        </div>
        <div class="py-10 flex items-center justify-center">
            <ButtonCtaSecondary :data="cta" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from 'vue-i18n';
import { UseFooterStore } from '~/stores/footer.store';

const store = UseFooterStore()
const { locale } = useI18n()
const FooterTitleRef = ref<HTMLElement | null>(null)

const title = computed(() => {
    return store.GetFooterTitle()
})

const subtitle = computed(() => {
    return store.GetFooterSubtitle()
})

const cta = computed(() => {
    return store.GetFooterCta()
})

onMounted(() => {
    if (!FooterTitleRef.value) return
    const textValue = String(title.value[locale.value] || '')

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: FooterTitleRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
        },
    })

    tl.fromTo(
        FooterTitleRef.value,
        { scrambleText: { text: '', chars: 'upperCase' } },
        {
            scrambleText: {
                text: textValue,
                chars: 'upperCase',
                revealDelay: 0.0,
                speed: 0.2,
            },
            duration: 0.3,
            ease: 'power2.out',
        }
    )
})

onBeforeUnmount(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

</script>
