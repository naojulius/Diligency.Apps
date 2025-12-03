<template>
    <div class="w-full mx-auto md:w-2/3">
        <h1 ref="FooterTitleRef"
            class="text-[4rem]/15  xl:text-[5rem]/20  py-10 font-regular text-center cursor-pointer overflow-hidden">
            {{ title[locale] }}
        </h1>
        <div class="w-2/3 mx-auto text-lg text-center">
            {{ subtitle[locale] }}
        </div>
        <div class="flex items-center justify-center py-10">
            <ButtonCtaSecondary :data="cta" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseFooterStore } from '~/stores/footer.store';

const store = UseFooterStore()
const { locale } = useI18n()

const title = computed(() => {
    return store.GetFooterTitle()
})

const subtitle = computed(() => {
    return store.GetFooterSubtitle()
})

const cta = computed(() => {
    return store.GetFooterCta()
})

</script>
