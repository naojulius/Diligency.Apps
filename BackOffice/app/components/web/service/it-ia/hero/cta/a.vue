<template>
    <ButtonCtaTertiary :data="cta" />
</template>

<script lang="ts" setup>
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const ctaKey = "a"
const cta = computed(() => {
    return store.GetItIaHeroCta(ctaKey)
})
</script>