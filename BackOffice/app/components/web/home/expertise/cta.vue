<template>
    <ButtonCtaLink :data="data" />
</template>
<script lang="ts" setup>
import { UseHomeStore } from '~/stores/home.store';

const store = UseHomeStore()

const data = computed(() => {
    return store.GetExpertiseCta()
})
</script>