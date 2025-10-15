<template>
    <ButtonCtaTertiary :data="cta" />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()
const cta = computed(() => {
    return store.GetWebAppCta()
})
</script>