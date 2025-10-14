<template>
    <ButtonCtaLink :data="data" />
</template>
<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';
const store = UseAgencyStore()

const data = computed(() => {
    return store.GetAgencyHubWhyCta()
})

</script>