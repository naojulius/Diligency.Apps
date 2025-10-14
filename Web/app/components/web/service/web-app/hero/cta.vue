<template>
    <ButtonCtaTertiary :data="cta" custom-class="hover:bg-primary" />
</template>

<script lang="ts" setup>
import { UseServiceStore } from '~/stores/service.store';
const store = UseServiceStore()

const cta = computed(() => {
    return store.GetWebAppHeroCta()
})
</script>