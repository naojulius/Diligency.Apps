<template>
    <ButtonCtaLink :data="data" />
</template>
<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';

const store = UseAgencyStore()
const ctakey = "b"
const data = computed(() => {
    return store.GetAgencyAboutTeamCta(ctakey)
})
</script>