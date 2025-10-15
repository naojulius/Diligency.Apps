<template>
    <ButtonCtaFooter :text="text" :cta-a="WebAgencyAboutCtaA" :cta-b="WebAgencyAboutCtaB" />
</template>
<script lang="ts" setup>
import { WebAgencyAboutCtaA, WebAgencyAboutCtaB } from '#components';
import { UseAgencyStore } from '~/stores/agency.store';

const store = UseAgencyStore()
const text = computed(() => {
    return store.GetAgencyAboutTeamCtaText()
})
</script>