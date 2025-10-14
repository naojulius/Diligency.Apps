<template>
    <section class="py-5 md:py-20 bg-secondary ">
        <div class="px-4 md:px-10 2xl:px-35 flex items-center justify-center flex-col gap-4">
            <div class="w-full py-0 flex flex-col gap-2 text-xl font-bold  text-center text-tertiary/90">
                {{ text[locale] }}
            </div>
            <ButtonCtaTertiary :data="cta" custom-class="hover:bg-primary" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const text = computed(() => {
    return store.GetWebShowCtaText()
})

const cta = computed(() => {
    return store.GetWebShowCta()
})
</script>