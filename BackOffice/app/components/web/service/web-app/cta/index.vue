<template>
    <ButtonCtaFooter :text="text" :cta-a="WebServiceWebAppCtaA" />
</template>

<script lang="ts" setup>
import { WebServiceWebAppCtaA } from '#components';
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const { locale } = useI18n()

const text = computed(() => {
    return store.GetWebAppCtaText()
})

const cta = computed(() => {
    return store.GetWebAppCta()
})
</script>