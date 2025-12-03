<template>
    <ButtonCtaTertiary :data="data" />
</template>
<script lang="ts" setup>
import { UseAgencyStore } from '~/stores/agency.store';

const store = UseAgencyStore()
const ctakey = "a"
const data = computed(() => {
    return store.GetAgencyAboutTeamCta(ctakey)
})
</script>